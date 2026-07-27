use anyhow::{anyhow, Context, Result};
use std::process::Command;

use super::{ExternalBenchResult, ExternalTool};

// liboqs benchmark duration estimation constants
//
// These are assumed operations-per-second figures used only to convert a chosen
// iteration count into an *approximate* benchmark duration for liboqs KEM/SIG
// operations. They are intentionally coarse, order-of-magnitude estimates.
//
// Basis for the values:
// - On typical commodity x86_64 CPUs (e.g., recent laptop/desktop cores) with
//   reasonably optimized builds, liboqs KEM operations often reach on the order
//   of 10^4 operations per second.
// - Signature operations are generally more expensive than KEMs and, in practice,
//   often fall closer to the 10^3 operations-per-second range.
//
// The 10x difference between KEM and SIG here reflects this typical throughput
// gap observed in liboqs micro-benchmarks across a variety of algorithms. It is
// *not* a strict bound: depending on the specific scheme, CPU, and compiler
// flags, the actual ratio can be smaller or larger.
//
// Expected variance:
// - Real performance can vary by at least a small constant factor (e.g., 2–10x)
//   in either direction due to hardware differences, turbo behavior, thermal
//   limits, choice of algorithm/parameter set, and build configuration.
// - These constants should therefore be treated as rough defaults for user-facing
//   time estimation, not as precise measurements and not for security decisions.
const LIBOQS_KEM_OPS_PER_SEC: u64 = 10000;
const LIBOQS_SIG_OPS_PER_SEC: u64 = 1000;

/// Detect liboqs speed_kem/speed_sig tools
pub(super) fn detect_liboqs() -> Option<ExternalTool> {
    // Try environment variables first, then PATH, then platform-specific locations
    let candidates: Vec<std::path::PathBuf> = {
        let mut paths = vec![];

        // Check LIBOQS_SPEED_KEM environment variable first (direct path to binary)
        if let Ok(p) = std::env::var("LIBOQS_SPEED_KEM") {
            paths.push(std::path::PathBuf::from(p));
        }

        // Check LIBOQS_DIR environment variable (installation directory)
        if let Ok(liboqs_dir) = std::env::var("LIBOQS_DIR") {
            let base = std::path::PathBuf::from(&liboqs_dir);
            let exe_name = format!("speed_kem{}", std::env::consts::EXE_SUFFIX);
            // Check common build output locations
            for subdir in ["bin", "build/tests", "tests"] {
                paths.push(base.join(subdir).join(&exe_name));
            }
        }

        // Check PATH
        if let Ok(p) = which::which("speed_kem") {
            paths.push(p);
        }

        // Windows: check vcpkg build locations (VCPKG_ROOT only, no hardcoded paths)
        #[cfg(target_os = "windows")]
        {
            if let Ok(vcpkg_root) = std::env::var("VCPKG_ROOT") {
                let base = std::path::PathBuf::from(&vcpkg_root).join("buildtrees\\liboqs\\src");
                if let Ok(entries) = std::fs::read_dir(&base) {
                    for entry in entries.flatten() {
                        if entry.file_type().map(|t| t.is_dir()).unwrap_or(false) {
                            for build_type in ["x64-Release", "x64-Debug"] {
                                let speed_kem = entry
                                    .path()
                                    .join("out\\build")
                                    .join(build_type)
                                    .join("tests\\speed_kem.exe");
                                if speed_kem.exists() {
                                    paths.push(speed_kem);
                                }
                            }
                        }
                    }
                }
            }
        }

        paths
    };

    for path in candidates {
        if !path.exists() {
            continue;
        }

        // Get version by running with --help
        // Note: liboqs speed_kem outputs help to stderr
        let output = match Command::new(&path).arg("--help").output() {
            Ok(o) => o,
            Err(_) => continue,
        };
        // Check both stdout and stderr since liboqs outputs to stderr
        let stdout_text = String::from_utf8_lossy(&output.stdout);
        let stderr_text = String::from_utf8_lossy(&output.stderr);
        let help_text = format!("{}{}", stdout_text, stderr_text);

        // Extract version info if available
        // Note: liboqs speed_kem doesn't output version in --help, so we just mark as "detected"
        if help_text.contains("speed_kem") || help_text.contains("Usage") {
            return Some(ExternalTool {
                name: "liboqs".to_string(),
                path,
                version: "detected".to_string(),
            });
        }
    }

    None
}

/// Run liboqs KEM benchmark
///
/// Note: liboqs speed_kem uses `-d` flag for duration in seconds (default 3s).
/// The iterations parameter is converted to approximate duration.
pub(super) fn run_liboqs_kem_benchmark(
    tool: &ExternalTool,
    algo: &str,
    iterations: u64,
) -> Result<Vec<ExternalBenchResult>> {
    // Map Kylix algorithm names to liboqs names
    let liboqs_algo = match algo {
        "ML-KEM-512" => "ML-KEM-512",
        "ML-KEM-768" => "ML-KEM-768",
        "ML-KEM-1024" => "ML-KEM-1024",
        _ => return Ok(vec![]),
    };

    // Convert iterations to approximate duration (min 1s)
    let duration = std::cmp::max(1, iterations / LIBOQS_KEM_OPS_PER_SEC);

    // Run speed_kem with the algorithm (liboqs syntax: speed_kem [-d duration] <algorithm>)
    let output = Command::new(&tool.path)
        .args(["-d", &duration.to_string(), liboqs_algo])
        .output()
        .context("Failed to run liboqs speed_kem")?;

    // Check if the command succeeded; report failure if not
    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(anyhow!(
            "liboqs speed_kem failed for {}: {}",
            algo,
            stderr.trim()
        ));
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    parse_liboqs_output(&stdout, &tool.name, algo)
}

/// Run liboqs signature benchmark
///
/// Note: liboqs speed_sig uses `-d` flag for duration in seconds (default 3s).
/// The iterations parameter is converted to approximate duration.
pub(super) fn run_liboqs_sig_benchmark(
    tool: &ExternalTool,
    algo: &str,
    iterations: u64,
) -> Result<Vec<ExternalBenchResult>> {
    // Map Kylix algorithm names to liboqs names
    let liboqs_algo = match algo {
        "ML-DSA-44" => "ML-DSA-44",
        "ML-DSA-65" => "ML-DSA-65",
        "ML-DSA-87" => "ML-DSA-87",
        _ => return Ok(vec![]),
    };

    // Find speed_sig (should be in same directory as speed_kem)
    // Use platform-appropriate executable name
    let speed_sig_name = if cfg!(windows) {
        "speed_sig.exe"
    } else {
        "speed_sig"
    };
    let speed_sig_path = tool.path.parent().map(|p| p.join(speed_sig_name));
    let speed_sig = speed_sig_path
        .filter(|p| p.exists())
        .or_else(|| which::which("speed_sig").ok());

    let Some(sig_path) = speed_sig else {
        return Ok(vec![]);
    };

    // Convert iterations to approximate duration (min 1s)
    let duration = std::cmp::max(1, iterations / LIBOQS_SIG_OPS_PER_SEC);

    // Run speed_sig with the algorithm (liboqs syntax: speed_sig [-d duration] <algorithm>)
    let output = Command::new(&sig_path)
        .args(["-d", &duration.to_string(), liboqs_algo])
        .output()
        .context("Failed to run liboqs speed_sig")?;

    // Check if the command succeeded; report failure if not
    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(anyhow!(
            "liboqs speed_sig failed for {}: {}",
            algo,
            stderr.trim()
        ));
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    parse_liboqs_output(&stdout, &tool.name, algo)
}

/// Parse liboqs speed_kem/speed_sig output
fn parse_liboqs_output(
    output: &str,
    tool_name: &str,
    algo: &str,
) -> Result<Vec<ExternalBenchResult>> {
    let mut results = Vec::new();

    // liboqs output format (pipe-delimited):
    // Operation                            | Iterations | Total time (s) | Time (us): mean | pop. stdev | ...
    // keygen                               |      21326 |          3.000 |         140.673 |    349.433 | ...
    // encaps                               |      18791 |          3.000 |         159.651 |    367.587 | ...
    // decaps                               |      15217 |          3.000 |         197.148 |    400.151 | ...

    for line in output.lines() {
        let line = line.trim();

        // Parse keygen/encaps/decaps/sign/verify lines
        for op in ["keygen", "encaps", "decaps", "sign", "verify"] {
            // Check if line starts with the operation name (no colon in new format)
            if line.starts_with(op) && line.contains('|') {
                // Split by pipe and extract mean time (4th column, index 3)
                let parts: Vec<&str> = line.split('|').collect();
                if parts.len() >= 4 {
                    // Mean time is in the 4th column (index 3)
                    if let Ok(mean_us) = parts[3].trim().parse::<f64>() {
                        results.push(ExternalBenchResult {
                            tool_name: tool_name.to_string(),
                            algorithm: algo.to_string(),
                            operation: op.to_string(),
                            mean_us,
                        });
                        break; // Found this operation, move to next line
                    }
                }
            }
        }
    }

    Ok(results)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parse_liboqs_output_accepts_all_supported_operations() {
        let output = r#"
Operation | Iterations | Total time (s) | Time (us): mean | pop. stdev
  keygen | 1 | 1.0 | 10.25 | 100.0
encaps | 2 | 2.0 | 20.5 | 200.0
decaps | 3 | 3.0 | 30.75 | 300.0
sign | 4 | 4.0 | 40.125 | 400.0
verify | 5 | 5.0 | 50.625 | 500.0
"#;

        let results = parse_liboqs_output(output, "liboqs", "ML-KEM-768").unwrap();

        assert_eq!(results.len(), 5);
        for (result, (operation, mean_us)) in results.iter().zip([
            ("keygen", 10.25),
            ("encaps", 20.5),
            ("decaps", 30.75),
            ("sign", 40.125),
            ("verify", 50.625),
        ]) {
            assert_eq!(result.tool_name, "liboqs");
            assert_eq!(result.algorithm, "ML-KEM-768");
            assert_eq!(result.operation, operation);
            assert_eq!(result.mean_us, mean_us);
        }
    }

    #[test]
    fn parse_liboqs_output_ignores_unrecognized_and_malformed_rows() {
        let output = r#"
unknown | 1 | 1.0 | 99.0
keygen | 1 | 1.0
encaps | 1 | 1.0 | not-a-number
verify without delimiters
"#;

        assert!(parse_liboqs_output(output, "liboqs", "ML-KEM-768")
            .unwrap()
            .is_empty());
        assert!(parse_liboqs_output("", "liboqs", "ML-KEM-768")
            .unwrap()
            .is_empty());
    }

    #[test]
    fn parse_liboqs_output_uses_the_fourth_column() {
        let output = "keygen | 123 | 456.0 | 789.25 | 999.0";

        let results = parse_liboqs_output(output, "liboqs", "ML-KEM-768").unwrap();

        assert_eq!(results.len(), 1);
        assert_eq!(results[0].mean_us, 789.25);
    }
}
