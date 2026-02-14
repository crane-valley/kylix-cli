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
use zeroize::Zeroizing;

use crate::cli::OutputFormat;

/// Encode bytes to the specified format.
///
/// Intermediate buffers in the PEM path (base64 string, line-wrapped body) are
/// wrapped in [`Zeroizing`] so that secret key material is cleared from memory
/// on drop. Callers encoding sensitive data should also wrap the returned
/// `String` in `Zeroizing`.
pub(crate) fn encode_output(data: &[u8], format: OutputFormat, label: &str) -> String {
    match format {
        OutputFormat::Hex => hex::encode(data),
        OutputFormat::Base64 => BASE64.encode(data),
        OutputFormat::Pem => {
            let b64 = Zeroizing::new(BASE64.encode(data));
            let wrapped = Zeroizing::new(
                b64.as_bytes()
                    .chunks(64)
                    .map(|chunk| std::str::from_utf8(chunk).expect("BASE64 output is valid ASCII"))
                    .collect::<Vec<_>>()
                    .join("\n"),
            );
            format!(
                "-----BEGIN {}-----\n{}\n-----END {}-----",
                label, *wrapped, label
            )
        }
    }
}

/// Check if every character in the string is an ASCII hex digit (0-9, a-f, A-F).
/// Does NOT check for even length; callers must verify that separately for valid byte encoding.
fn is_all_hex_digits(s: &str) -> bool {
    !s.is_empty() && s.chars().all(|c| c.is_ascii_hexdigit())
}

/// Decode a PEM-encoded string to raw bytes.
///
/// Intermediate buffers (CRLF normalization, base64 body) are wrapped in
/// [`Zeroizing`] so that secret key material is cleared from memory on drop.
fn decode_pem(data: &str) -> Result<Vec<u8>> {
    // Normalize CRLF to LF so that trailing \r doesn't corrupt header/footer
    // checks or base64 body content.
    // Use Zeroizing to clear the intermediate buffer in case the data
    // contains secret key material.
    let owned;
    let data = if data.contains('\r') {
        owned = Zeroizing::new(data.replace('\r', ""));
        owned.as_str()
    } else {
        data
    };
    let lines: Vec<&str> = data.lines().collect();
    if lines.len() < 3 {
        bail!("Invalid PEM format: expected -----BEGIN header, body lines, and -----END footer");
    }

    // Validate and parse the BEGIN line: -----BEGIN <LABEL>-----
    let begin_line = lines[0];
    const BEGIN_PREFIX: &str = "-----BEGIN ";
    const PEM_SUFFIX: &str = "-----";
    let label = begin_line
        .strip_prefix(BEGIN_PREFIX)
        .and_then(|s| s.strip_suffix(PEM_SUFFIX))
        .ok_or_else(|| {
            anyhow::anyhow!(
                "Invalid PEM header: expected line of the form '-----BEGIN <LABEL>-----'"
            )
        })?;
    if label.is_empty() {
        bail!("Invalid PEM header: empty label");
    }

    // Reject labels with non-printable or control characters
    if !label
        .chars()
        .all(|c| c.is_ascii_alphanumeric() || c == ' ' || c == '-')
    {
        bail!("Invalid PEM label: contains disallowed characters");
    }

    // Validate END line exactly matches the parsed label: -----END <LABEL>-----
    let end_line = lines.last().unwrap();
    let expected_end = format!("-----END {}-----", label);
    if *end_line != expected_end {
        bail!("Invalid PEM footer: expected '{}'", expected_end);
    }

    // Join all body lines between BEGIN and END as base64 content.
    // Zeroize in case the body encodes secret key material.
    let b64 = Zeroizing::new(lines[1..lines.len() - 1].join(""));
    BASE64
        .decode(b64.as_bytes())
        .context("Failed to decode PEM base64 content")
}

/// Supported encoding names for error messages.
const SUPPORTED_ENCODINGS: &str = "hex, base64, pem";

/// Build an error message for explicit format decode failures.
fn format_mismatch_msg(format: &str) -> String {
    format!("Failed to decode as {format}. If the input uses a different encoding, remove --format or set it to the encoding used by the input: {SUPPORTED_ENCODINGS}.")
}

/// Decode bytes from the given encoding format.
///
/// When `format` is `Some(...)`, the specified format is used directly.
/// When `format` is `None`, auto-detection is applied:
/// PEM (by header) -> Hex (all hex chars + even length) -> Base64.
pub(crate) fn decode_input(data: &str, format: Option<OutputFormat>) -> Result<Vec<u8>> {
    let data = data.trim();

    if data.is_empty() {
        bail!("Input is empty. Expected hex, base64, or PEM encoded data.");
    }

    match format {
        Some(OutputFormat::Pem) => decode_pem(data).with_context(|| format_mismatch_msg("pem")),
        Some(OutputFormat::Hex) => hex::decode(data).with_context(|| format_mismatch_msg("hex")),
        Some(OutputFormat::Base64) => BASE64
            .decode(data)
            .with_context(|| format_mismatch_msg("base64")),
        None => {
            // Auto-detect: PEM -> hex -> base64
            if data.starts_with("-----BEGIN") {
                decode_pem(data).context("Auto-detected PEM format, but failed to decode")
            } else if is_all_hex_digits(data) && data.len() % 2 == 0 {
                hex::decode(data).context("Auto-detected hex format, but failed to decode")
            } else {
                BASE64.decode(data).context(
                    "Auto-detected base64 format, but failed to decode. If you know the input format, try specifying it with --format.",
                )
            }
        }
    }
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

#[cfg(test)]
mod tests {
    use super::*;

    const SAMPLE_BYTES: &[u8] = &[0xDE, 0xAD, 0xBE, 0xEF, 0x01, 0x23];
    const SAMPLE_HEX: &str = "deadbeef0123";
    // base64 of [0xDE, 0xAD, 0xBE, 0xEF, 0x01, 0x23] = "3q2+7wEj"
    const SAMPLE_BASE64: &str = "3q2+7wEj";

    fn sample_pem() -> String {
        format!(
            "-----BEGIN TEST KEY-----\n{}\n-----END TEST KEY-----",
            SAMPLE_BASE64
        )
    }

    // --- Explicit format decoding ---

    #[test]
    fn decode_explicit_hex() {
        let result = decode_input(SAMPLE_HEX, Some(OutputFormat::Hex)).unwrap();
        assert_eq!(result, SAMPLE_BYTES);
    }

    #[test]
    fn decode_explicit_base64() {
        let result = decode_input(SAMPLE_BASE64, Some(OutputFormat::Base64)).unwrap();
        assert_eq!(result, SAMPLE_BYTES);
    }

    #[test]
    fn decode_explicit_pem() {
        let pem = sample_pem();
        let result = decode_input(&pem, Some(OutputFormat::Pem)).unwrap();
        assert_eq!(result, SAMPLE_BYTES);
    }

    // --- Explicit format prevents fallback ---

    #[test]
    fn decode_explicit_hex_rejects_base64() {
        // "3q2+7wEj" is valid base64, but should fail when hex is explicitly requested
        let err = decode_input(SAMPLE_BASE64, Some(OutputFormat::Hex)).unwrap_err();
        let msg = err.to_string();
        assert!(msg.contains("hex"), "Error should mention hex: {}", msg);
    }

    #[test]
    fn decode_explicit_base64_rejects_invalid() {
        // "deadbeef0123" is valid hex but also valid base64 (decodes to different bytes).
        // Use a string that is NOT valid base64 to test rejection.
        let err = decode_input("not-valid-base64!!!", Some(OutputFormat::Base64)).unwrap_err();
        let msg = err.to_string();
        assert!(
            msg.contains("base64"),
            "Error should mention base64: {}",
            msg
        );
    }

    // --- Hex-looking data decoded as base64 when explicitly requested ---

    #[test]
    fn decode_hex_looking_data_as_explicit_base64() {
        // "deadbeef0123" happens to be decodable as base64 (it's all valid base64 chars)
        // When base64 is explicitly requested, it should decode as base64, not hex
        let as_base64 = decode_input(SAMPLE_HEX, Some(OutputFormat::Base64)).unwrap();
        let as_hex = decode_input(SAMPLE_HEX, Some(OutputFormat::Hex)).unwrap();
        // The decoded bytes should differ (different encodings of same string)
        assert_ne!(as_base64, as_hex);
    }

    // --- Auto-detection (None) ---

    #[test]
    fn decode_auto_detect_pem() {
        let pem = sample_pem();
        let result = decode_input(&pem, None).unwrap();
        assert_eq!(result, SAMPLE_BYTES);
    }

    #[test]
    fn decode_auto_detect_hex() {
        let result = decode_input(SAMPLE_HEX, None).unwrap();
        assert_eq!(result, SAMPLE_BYTES);
    }

    #[test]
    fn decode_auto_detect_base64() {
        // Use a base64 string that is NOT valid hex to ensure base64 fallback
        let data = &[0xFF, 0x00, 0xAB];
        let b64 = BASE64.encode(data);
        let result = decode_input(&b64, None).unwrap();
        assert_eq!(result, data);
    }

    // --- CRLF handling ---

    #[test]
    fn decode_pem_with_crlf_line_endings() {
        let pem = format!(
            "-----BEGIN TEST KEY-----\r\n{}\r\n-----END TEST KEY-----\r\n",
            SAMPLE_BASE64
        );
        let result = decode_input(&pem, Some(OutputFormat::Pem)).unwrap();
        assert_eq!(result, SAMPLE_BYTES);
    }

    // --- Empty / edge-case input ---

    #[test]
    fn decode_empty_input_returns_error() {
        let err = decode_input("", None).unwrap_err();
        let msg = err.to_string();
        assert!(
            msg.contains("empty"),
            "Error should mention empty input: {}",
            msg
        );
    }

    #[test]
    fn decode_whitespace_only_input_returns_error() {
        let err = decode_input("  \n\t  ", None).unwrap_err();
        let msg = err.to_string();
        assert!(
            msg.contains("empty"),
            "Error should mention empty input: {}",
            msg
        );
    }

    // --- encode_output ---

    #[test]
    fn encode_hex_roundtrip() {
        let encoded = encode_output(SAMPLE_BYTES, OutputFormat::Hex, "UNUSED");
        assert_eq!(encoded, SAMPLE_HEX);
        let decoded = decode_input(&encoded, Some(OutputFormat::Hex)).unwrap();
        assert_eq!(decoded, SAMPLE_BYTES);
    }

    #[test]
    fn encode_base64_roundtrip() {
        let encoded = encode_output(SAMPLE_BYTES, OutputFormat::Base64, "UNUSED");
        assert_eq!(encoded, SAMPLE_BASE64);
        let decoded = decode_input(&encoded, Some(OutputFormat::Base64)).unwrap();
        assert_eq!(decoded, SAMPLE_BYTES);
    }

    #[test]
    fn encode_pem_roundtrip() {
        let encoded = encode_output(SAMPLE_BYTES, OutputFormat::Pem, "TEST KEY");
        assert!(encoded.starts_with("-----BEGIN TEST KEY-----"));
        assert!(encoded.ends_with("-----END TEST KEY-----"));
        let decoded = decode_input(&encoded, Some(OutputFormat::Pem)).unwrap();
        assert_eq!(decoded, SAMPLE_BYTES);
    }

    // --- PEM edge cases ---

    #[test]
    fn decode_pem_empty_body() {
        // PEM with no base64 body lines (only BEGIN and END, fewer than 3 lines)
        let pem = "-----BEGIN KEY-----\n-----END KEY-----";
        let err = decode_input(pem, Some(OutputFormat::Pem)).unwrap_err();
        // Use {:#} to include the full anyhow error chain (outer context + inner cause)
        let msg = format!("{:#}", err);
        assert!(
            msg.contains("expected -----BEGIN header, body lines, and -----END footer"),
            "Should reject PEM with fewer than 3 lines: {}",
            msg
        );
    }

    #[test]
    fn decode_pem_invalid_base64_body() {
        let pem = "-----BEGIN KEY-----\n!!!invalid!!!\n-----END KEY-----";
        let err = decode_input(pem, Some(OutputFormat::Pem)).unwrap_err();
        let msg = format!("{:#}", err);
        assert!(
            msg.contains("base64") || msg.contains("decode"),
            "Should report base64 decode failure: {}",
            msg
        );
    }

    #[test]
    fn decode_pem_label_with_control_chars() {
        let pem = "-----BEGIN TEST\x1bKEY-----\nabc=\n-----END TEST\x1bKEY-----";
        let err = decode_input(pem, Some(OutputFormat::Pem)).unwrap_err();
        let msg = format!("{:#}", err);
        assert!(
            msg.contains("disallowed characters"),
            "Should reject label with control chars: {}",
            msg
        );
    }

    #[test]
    fn decode_pem_mismatched_labels() {
        let pem = "-----BEGIN FOO-----\nabc=\n-----END BAR-----";
        let err = decode_input(pem, Some(OutputFormat::Pem)).unwrap_err();
        let msg = format!("{:#}", err);
        assert!(
            msg.contains("footer"),
            "Should report mismatched BEGIN/END labels: {}",
            msg
        );
    }

    #[test]
    fn decode_pem_multiline_body() {
        // Encode enough data to span multiple base64 lines
        let data = vec![0xABu8; 100];
        let encoded = encode_output(&data, OutputFormat::Pem, "LARGE KEY");
        let decoded = decode_input(&encoded, Some(OutputFormat::Pem)).unwrap();
        assert_eq!(decoded, data);
    }
}
