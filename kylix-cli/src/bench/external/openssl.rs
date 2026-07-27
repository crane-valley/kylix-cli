use anyhow::{Context, Result};
use std::fs;
use std::process::Command;
use std::time::{Duration, Instant};

use super::{ExternalBenchResult, ExternalTool};

/// Detect OpenSSL 3.5+ with PQC support
pub(super) fn detect_openssl() -> Option<ExternalTool> {
    // Try environment variables first, then PATH, then common installation locations
    let candidates: Vec<std::path::PathBuf> = {
        let mut paths = vec![];

        // Check OPENSSL_DIR or OPENSSL_ROOT_DIR environment variables first
        let exe_name = format!("openssl{}", std::env::consts::EXE_SUFFIX);
        if let Ok(openssl_dir) =
            std::env::var("OPENSSL_DIR").or_else(|_| std::env::var("OPENSSL_ROOT_DIR"))
        {
            let base = std::path::PathBuf::from(openssl_dir);
            paths.push(base.join("bin").join(&exe_name));
        }

        // Check PATH
        if let Ok(p) = which::which("openssl") {
            paths.push(p);
        }

        // macOS/Linux: Homebrew, common locations (fallback only)
        #[cfg(not(target_os = "windows"))]
        {
            paths.push(std::path::PathBuf::from("/opt/homebrew/bin/openssl"));
            paths.push(std::path::PathBuf::from("/usr/local/bin/openssl"));
        }

        paths
    };

    for path in candidates {
        if !path.exists() {
            continue;
        }

        let output = match Command::new(&path).arg("version").output() {
            Ok(o) => o,
            Err(_) => continue,
        };
        let version_str = String::from_utf8_lossy(&output.stdout);

        // Check for OpenSSL 3.5+ (which has native PQC support)
        // Parse version to support future releases (3.8, 4.0, etc.)
        // Handles versions like "3.5.0", "3.6.0-alpha", etc.
        let is_supported_version = {
            /// Parses the leading numeric portion of a version component string.
            ///
            /// This handles version strings with suffixes like "5-alpha" or "0-beta1",
            /// extracting only the numeric prefix (e.g., "5-alpha" -> Some(5)).
            /// Returns None if the string doesn't start with a digit.
            fn parse_version_number(s: &str) -> Option<u64> {
                let end = s.find(|c: char| !c.is_ascii_digit()).unwrap_or(s.len());
                s[..end].parse::<u64>().ok()
            }

            let mut supported = false;
            let mut tokens = version_str.split_whitespace();
            while let Some(token) = tokens.next() {
                if token == "OpenSSL" {
                    if let Some(ver_token) = tokens.next() {
                        let mut parts = ver_token.split('.');
                        let major = parts.next().and_then(parse_version_number);
                        let minor = parts.next().and_then(parse_version_number);
                        if let (Some(maj), Some(min)) = (major, minor) {
                            supported = maj > 3 || (maj == 3 && min >= 5);
                        }
                    }
                    break;
                }
            }
            supported
        };

        if is_supported_version {
            // Verify PQC algorithms are available
            let list_output = match Command::new(&path)
                .args(["list", "-kem-algorithms"])
                .output()
            {
                Ok(o) => o,
                Err(_) => continue,
            };
            let kem_list = String::from_utf8_lossy(&list_output.stdout);

            if kem_list.contains("ML-KEM") {
                return Some(ExternalTool {
                    name: "OpenSSL".to_string(),
                    path,
                    version: version_str.trim().to_string(),
                });
            }
        }
    }

    None
}

/// Run an OpenSSL command and check its exit status
fn run_openssl_command(tool_path: &std::path::Path, args: &[&str]) -> Result<()> {
    let output = Command::new(tool_path)
        .args(args)
        .output()
        .context("Failed to execute OpenSSL command")?;

    if !output.status.success() {
        return Err(anyhow::anyhow!(
            "OpenSSL command failed: {}",
            String::from_utf8_lossy(&output.stderr)
        ));
    }
    Ok(())
}

fn time_openssl_operation<F>(iterations: u64, mut operation: F) -> Result<f64>
where
    F: FnMut() -> Result<()>,
{
    let start = Instant::now();
    for _ in 0..iterations {
        operation()?;
    }
    Ok(mean_microseconds(start.elapsed(), iterations))
}

fn mean_microseconds(elapsed: Duration, iterations: u64) -> f64 {
    elapsed.as_nanos() as f64 / 1000.0 / iterations as f64
}

/// Run OpenSSL KEM benchmark (time individual operations)
pub(super) fn run_openssl_kem_benchmark(
    tool: &ExternalTool,
    algo: &str,
    iterations: u64,
) -> Result<Vec<ExternalBenchResult>> {
    let openssl_algo = match algo {
        "ML-KEM-512" => "ML-KEM-512",
        "ML-KEM-768" => "ML-KEM-768",
        "ML-KEM-1024" => "ML-KEM-1024",
        _ => return Ok(vec![]),
    };

    let mut results = Vec::new();

    // Use secure temporary directory to avoid symlink attacks
    let temp_dir = tempfile::tempdir().context("Failed to create temp directory")?;
    let key_file = temp_dir.path().join("key.pem");
    let pub_file = temp_dir.path().join("pub.pem");
    let ct_file = temp_dir.path().join("ct.bin");
    let ss_file = temp_dir.path().join("ss.bin");

    let key_str = key_file.to_string_lossy();
    let pub_str = pub_file.to_string_lossy();
    let ct_str = ct_file.to_string_lossy();
    let ss_str = ss_file.to_string_lossy();

    // Benchmark keygen
    let keygen_mean_us = time_openssl_operation(iterations, || {
        run_openssl_command(
            &tool.path,
            &["genpkey", "-algorithm", openssl_algo, "-out", &key_str],
        )
    })?;
    results.push(ExternalBenchResult {
        tool_name: tool.name.clone(),
        algorithm: algo.to_string(),
        operation: "keygen".to_string(),
        mean_us: keygen_mean_us,
    });

    // Generate a key for encaps/decaps benchmarks
    run_openssl_command(
        &tool.path,
        &["genpkey", "-algorithm", openssl_algo, "-out", &key_str],
    )?;

    // Extract public key
    run_openssl_command(
        &tool.path,
        &["pkey", "-in", &key_str, "-pubout", "-out", &pub_str],
    )?;

    // Benchmark encaps
    let encaps_mean_us = time_openssl_operation(iterations, || {
        run_openssl_command(
            &tool.path,
            &[
                "pkeyutl", "-encap", "-inkey", &pub_str, "-pubin", "-out", &ct_str, "-secret",
                &ss_str,
            ],
        )
    })?;
    results.push(ExternalBenchResult {
        tool_name: tool.name.clone(),
        algorithm: algo.to_string(),
        operation: "encaps".to_string(),
        mean_us: encaps_mean_us,
    });

    // Benchmark decaps
    let decaps_mean_us = time_openssl_operation(iterations, || {
        run_openssl_command(
            &tool.path,
            &[
                "pkeyutl", "-decap", "-inkey", &key_str, "-in", &ct_str, "-secret", &ss_str,
            ],
        )
    })?;
    results.push(ExternalBenchResult {
        tool_name: tool.name.clone(),
        algorithm: algo.to_string(),
        operation: "decaps".to_string(),
        mean_us: decaps_mean_us,
    });

    // temp_dir is automatically cleaned up when dropped
    Ok(results)
}

/// Run OpenSSL signature benchmark
pub(super) fn run_openssl_sig_benchmark(
    tool: &ExternalTool,
    algo: &str,
    iterations: u64,
) -> Result<Vec<ExternalBenchResult>> {
    let openssl_algo = match algo {
        "ML-DSA-44" => "ML-DSA-44",
        "ML-DSA-65" => "ML-DSA-65",
        "ML-DSA-87" => "ML-DSA-87",
        _ => return Ok(vec![]),
    };

    let mut results = Vec::new();

    // Use secure temporary directory to avoid symlink attacks
    let temp_dir = tempfile::tempdir().context("Failed to create temp directory")?;
    let key_file = temp_dir.path().join("key.pem");
    let pub_file = temp_dir.path().join("pub.pem");
    let msg_file = temp_dir.path().join("msg.txt");
    let sig_file = temp_dir.path().join("sig.bin");

    // Create test message
    fs::write(&msg_file, b"The quick brown fox jumps over the lazy dog")?;

    let key_str = key_file.to_string_lossy();
    let pub_str = pub_file.to_string_lossy();
    let msg_str = msg_file.to_string_lossy();
    let sig_str = sig_file.to_string_lossy();

    // Benchmark keygen
    let keygen_mean_us = time_openssl_operation(iterations, || {
        run_openssl_command(
            &tool.path,
            &["genpkey", "-algorithm", openssl_algo, "-out", &key_str],
        )
    })?;
    results.push(ExternalBenchResult {
        tool_name: tool.name.clone(),
        algorithm: algo.to_string(),
        operation: "keygen".to_string(),
        mean_us: keygen_mean_us,
    });

    // Generate a key for sign/verify benchmarks
    run_openssl_command(
        &tool.path,
        &["genpkey", "-algorithm", openssl_algo, "-out", &key_str],
    )?;

    // Benchmark sign
    let sign_mean_us = time_openssl_operation(iterations, || {
        run_openssl_command(
            &tool.path,
            &[
                "pkeyutl", "-sign", "-inkey", &key_str, "-in", &msg_str, "-out", &sig_str,
            ],
        )
    })?;
    results.push(ExternalBenchResult {
        tool_name: tool.name.clone(),
        algorithm: algo.to_string(),
        operation: "sign".to_string(),
        mean_us: sign_mean_us,
    });

    // Extract public key
    run_openssl_command(
        &tool.path,
        &["pkey", "-in", &key_str, "-pubout", "-out", &pub_str],
    )?;

    // Benchmark verify
    let verify_mean_us = time_openssl_operation(iterations, || {
        run_openssl_command(
            &tool.path,
            &[
                "pkeyutl", "-verify", "-inkey", &pub_str, "-pubin", "-in", &msg_str, "-sigfile",
                &sig_str,
            ],
        )
    })?;
    results.push(ExternalBenchResult {
        tool_name: tool.name.clone(),
        algorithm: algo.to_string(),
        operation: "verify".to_string(),
        mean_us: verify_mean_us,
    });

    // temp_dir is automatically cleaned up when dropped
    Ok(results)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn mean_microseconds_preserves_fractional_precision() {
        assert_eq!(mean_microseconds(Duration::from_nanos(1500), 2), 0.75);
    }

    #[test]
    fn time_openssl_operation_runs_the_requested_iterations() {
        let mut calls = 0;

        time_openssl_operation(4, || {
            calls += 1;
            Ok(())
        })
        .unwrap();

        assert_eq!(calls, 4);
    }

    #[test]
    fn time_openssl_operation_stops_at_the_first_error() {
        let mut calls = 0;

        let error = time_openssl_operation(5, || {
            calls += 1;
            if calls == 3 {
                anyhow::bail!("expected failure");
            }
            Ok(())
        })
        .unwrap_err();

        assert_eq!(calls, 3);
        assert_eq!(error.to_string(), "expected failure");
    }
}
