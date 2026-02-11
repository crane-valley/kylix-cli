use anyhow::{bail, Context, Result};
use base64::{engine::general_purpose::STANDARD as BASE64, Engine};
use std::fs;
#[cfg(unix)]
use std::fs::OpenOptions;
#[cfg(unix)]
use std::io::Write;
#[cfg(unix)]
use std::os::unix::fs::OpenOptionsExt;
use std::path::Path;

use crate::cli::OutputFormat;

/// Encode bytes to the specified format
pub(crate) fn encode_output(data: &[u8], format: OutputFormat, label: &str) -> String {
    match format {
        OutputFormat::Hex => hex::encode(data),
        OutputFormat::Base64 => BASE64.encode(data),
        OutputFormat::Pem => {
            let b64 = BASE64.encode(data);
            let wrapped: String = b64
                .as_bytes()
                .chunks(64)
                .map(|chunk| std::str::from_utf8(chunk).expect("BASE64 output is valid ASCII"))
                .collect::<Vec<_>>()
                .join("\n");
            format!(
                "-----BEGIN {}-----\n{}\n-----END {}-----",
                label, wrapped, label
            )
        }
    }
}

/// Check if a string is valid hexadecimal
fn is_hex(s: &str) -> bool {
    !s.is_empty() && s.chars().all(|c| c.is_ascii_hexdigit())
}

/// Decode bytes with auto-detection of format.
/// Detection order: PEM (by header) -> Hex (if all hex chars) -> Base64.
/// The format parameter is ignored for input; it only affects output encoding.
pub(crate) fn decode_input(data: &str, _format: OutputFormat) -> Result<Vec<u8>> {
    let data = data.trim();

    // Auto-detect PEM format
    if data.starts_with("-----BEGIN") {
        let lines: Vec<&str> = data.lines().collect();
        if lines.len() < 3 {
            bail!("Invalid PEM format");
        }
        let b64: String = lines[1..lines.len() - 1].join("");
        return BASE64
            .decode(&b64)
            .context("Failed to decode PEM base64 content");
    }

    // Auto-detect hex vs base64
    // Hex: only 0-9, a-f, A-F (and must have even length for valid bytes)
    // Base64: may contain +, /, = which are not valid hex
    if is_hex(data) && data.len() % 2 == 0 {
        return hex::decode(data).context("Failed to decode hex");
    }

    // Try base64
    BASE64.decode(data).context("Failed to decode base64")
}

/// Write a file with restricted permissions (0o600) on Unix systems.
/// On non-Unix systems, falls back to standard [`fs::write`].
///
/// # Parameters
///
/// - `path`: Filesystem path where the secret data will be written.
/// - `content`: UTF-8 string contents to write to the secret file.
///
/// # Errors
///
/// Returns an error if the file cannot be created or written. On Unix systems,
/// this includes failures when setting file permissions; on non-Unix systems,
/// this includes any error returned by [`fs::write`].
pub(crate) fn write_secret_file(path: &Path, content: &str) -> Result<()> {
    #[cfg(unix)]
    {
        let parent = path.parent().ok_or_else(|| {
            anyhow::anyhow!(
                "Cannot determine parent directory for secret file path: {}",
                path.display()
            )
        })?;

        let filename = path.file_name().ok_or_else(|| {
            anyhow::anyhow!("Path does not contain a valid filename: {}", path.display())
        })?;

        // Use random suffix to prevent attackers from pre-creating predictable temp files
        let random_suffix: u64 = rand::random();
        let mut temp_path = parent.to_path_buf();
        temp_path.push(format!(
            ".{}.{:016x}.tmp",
            filename.to_string_lossy(),
            random_suffix
        ));

        // Create temp file with restrictive permissions (0o600) BEFORE writing secret data
        // Use create_new to prevent race conditions with attacker-created files
        let mut file = OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o600)
            .open(&temp_path)
            .with_context(|| {
                format!(
                    "Failed to create temp file for secret file: {}",
                    temp_path.display()
                )
            })?;
        file.write_all(content.as_bytes()).with_context(|| {
            format!(
                "Failed to write temp file for secret file: {}",
                temp_path.display()
            )
        })?;
        // Flush to disk before rename to avoid partial writes on crash
        file.sync_all().with_context(|| {
            format!(
                "Failed to sync temp file for secret file: {}",
                temp_path.display()
            )
        })?;

        // Atomic rename to target path (works because same filesystem)
        // Clean up temp file on failure to avoid leaving secret material on disk
        let rename_result = fs::rename(&temp_path, path);
        if rename_result.is_err() {
            let _ = fs::remove_file(&temp_path);
        }
        rename_result.with_context(|| {
            format!(
                "Failed to rename temp file to secret file: {}",
                path.display()
            )
        })?;

        Ok(())
    }
    #[cfg(not(unix))]
    {
        eprintln!(
            "Warning: file permissions cannot be restricted on this platform. Secret file '{}' may be readable by other users.",
            path.display()
        );
        fs::write(path, content)
            .with_context(|| format!("Failed to write secret file: {}", path.display()))?;
        Ok(())
    }
}
