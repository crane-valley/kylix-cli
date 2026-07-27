mod liboqs;
mod openssl;

use std::path::PathBuf;

use liboqs::{detect_liboqs, run_liboqs_kem_benchmark, run_liboqs_sig_benchmark};
use openssl::{detect_openssl, run_openssl_kem_benchmark, run_openssl_sig_benchmark};

/// Detected external PQC tool
#[derive(Debug, Clone)]
pub(super) struct ExternalTool {
    pub(super) name: String,
    pub(super) path: PathBuf,
    pub(super) version: String,
}

/// Benchmark results from an external tool
#[derive(Debug, Clone)]
pub(super) struct ExternalBenchResult {
    pub(super) tool_name: String,
    pub(super) algorithm: String,
    pub(super) operation: String,
    pub(super) mean_us: f64,
}

/// Detect available external PQC tools
pub(super) fn detect_external_tools(filter: Option<&Vec<String>>) -> Vec<ExternalTool> {
    let mut tools = Vec::new();

    // Check if tool should be included based on filter
    let should_include = |name: &str| -> bool {
        filter
            .as_ref()
            .map_or(true, |f| f.iter().any(|s| s.eq_ignore_ascii_case(name)))
    };

    // Detect liboqs speed_kem tool
    if should_include("liboqs") {
        if let Some(tool) = detect_liboqs() {
            tools.push(tool);
        }
    }

    // Detect OpenSSL 3.5+ with PQC support
    if should_include("openssl") {
        if let Some(tool) = detect_openssl() {
            tools.push(tool);
        }
    }

    tools
}

/// Run benchmarks on external tools
pub(super) fn run_external_benchmarks(
    tools: &[ExternalTool],
    algo: &str,
    is_kem: bool,
    iterations: u64,
) -> Vec<ExternalBenchResult> {
    let mut results = Vec::new();

    for tool in tools {
        let tool_results = if tool.name == "liboqs" {
            if is_kem {
                run_liboqs_kem_benchmark(tool, algo, iterations)
            } else {
                run_liboqs_sig_benchmark(tool, algo, iterations)
            }
        } else if tool.name == "OpenSSL" {
            if is_kem {
                run_openssl_kem_benchmark(tool, algo, iterations)
            } else {
                run_openssl_sig_benchmark(tool, algo, iterations)
            }
        } else {
            Ok(vec![])
        };

        match tool_results {
            Ok(r) => results.extend(r),
            Err(e) => eprintln!(
                "Warning: benchmark for tool '{}' on algorithm '{}' failed: {}",
                tool.name, algo, e
            ),
        }
    }

    results
}
