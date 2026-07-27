//! Benchmark functionality for Kylix CLI.
//!
//! This module is conditionally compiled with the `bench` feature.

mod external;
mod in_process;
mod report;

use anyhow::{bail, Context, Result};
use clap::ValueEnum;
use kylix_bench::BenchmarkReport;
use std::fs;
use std::path::PathBuf;

use crate::cli::Algorithm;
use external::{detect_external_tools, run_external_benchmarks, ExternalBenchResult};
use in_process::{bench_ml_dsa, bench_ml_kem, bench_slh_dsa};
use report::format_comparison_table;

/// Report output format for benchmarks.
#[derive(Copy, Clone, PartialEq, Eq, ValueEnum)]
pub enum ReportFormat {
    /// Human-readable text
    Text,
    /// JSON format
    Json,
    /// Markdown table
    Markdown,
}

/// Run performance benchmarks
pub fn cmd_bench(
    algo: Option<Algorithm>,
    iterations: u64,
    output: Option<&PathBuf>,
    report_format: ReportFormat,
    compare: bool,
    with: Option<&Vec<String>>,
    verbose: bool,
) -> Result<()> {
    if iterations == 0 {
        bail!("Iterations must be at least 1");
    }

    if verbose {
        eprintln!("Running benchmarks with {} iterations...", iterations);
    }

    // Detect external tools if comparison is requested
    let external_tools = if compare {
        let tools = detect_external_tools(with);
        if tools.is_empty() {
            eprintln!(
                "Warning: No external PQC tools detected. Comparison will show Kylix results only."
            );
            eprintln!("Supported tools: liboqs (speed_kem/speed_sig), OpenSSL 3.5+");
        } else if verbose {
            eprintln!("Detected external tools:");
            for tool in &tools {
                eprintln!("  - {} ({})", tool.name, tool.version);
            }
        }
        tools
    } else {
        vec![]
    };

    let mut report = BenchmarkReport::new("kylix");
    let mut external_results: Vec<ExternalBenchResult> = Vec::new();

    let algorithms = if let Some(a) = algo {
        vec![a]
    } else {
        // Note: SLH-DSA not included by default as it's slow (use --algo to specify)
        vec![
            Algorithm::MlKem512,
            Algorithm::MlKem768,
            Algorithm::MlKem1024,
            Algorithm::MlDsa44,
            Algorithm::MlDsa65,
            Algorithm::MlDsa87,
        ]
    };

    for algo in &algorithms {
        if verbose {
            eprintln!("Benchmarking {}...", algo);
        }

        let results = if algo.is_kem() {
            bench_ml_kem(*algo, iterations)
        } else if algo.is_slh_dsa() {
            bench_slh_dsa(*algo, iterations)
        } else {
            bench_ml_dsa(*algo, iterations)
        };

        for result in results {
            report.add_result(result);
        }

        // Run external benchmarks if comparison is requested
        if compare && !external_tools.is_empty() {
            let algo_name = format!("{}", algo);
            let is_kem = algo.is_kem();

            if verbose {
                eprintln!("  Running external tool benchmarks...");
            }

            let ext_results =
                run_external_benchmarks(&external_tools, &algo_name, is_kem, iterations);
            external_results.extend(ext_results);
        }
    }

    let output_content = if compare {
        format_comparison_table(&report.results, &external_results, report_format)
    } else {
        match report_format {
            ReportFormat::Text => {
                let mut text = String::new();
                text.push_str("Kylix Benchmark Results\n");
                text.push_str("=======================\n\n");
                for result in &report.results {
                    text.push_str(&result.format());
                    text.push('\n');
                }
                text
            }
            ReportFormat::Json => serde_json::to_string_pretty(&report)
                .context("Failed to serialize report to JSON")?,
            ReportFormat::Markdown => report.to_markdown(),
        }
    };

    if let Some(out_path) = output {
        fs::write(out_path, &output_content).context("Failed to write benchmark report")?;
        println!("Benchmark report written to: {}", out_path.display());
    } else {
        println!("{}", output_content);
    }

    Ok(())
}
