use kylix_bench::BenchmarkResult;
use std::collections::BTreeMap;

use super::external::ExternalBenchResult;
use super::ReportFormat;

/// Format comparison table
pub(super) fn format_comparison_table(
    kylix_results: &[BenchmarkResult],
    external_results: &[ExternalBenchResult],
    report_format: ReportFormat,
) -> String {
    // Group results by algorithm
    let mut by_algo: BTreeMap<String, Vec<(&str, &str, f64)>> = BTreeMap::new();

    // Add Kylix results
    for r in kylix_results {
        let algo = r.algorithm.clone();
        by_algo
            .entry(algo)
            .or_default()
            .push(("Kylix", &r.operation, r.mean.as_micros() as f64));
    }

    // Add external results
    for r in external_results {
        by_algo.entry(r.algorithm.clone()).or_default().push((
            &r.tool_name,
            &r.operation,
            r.mean_us,
        ));
    }

    // Check if OpenSSL was detected
    let has_openssl = external_results.iter().any(|r| r.tool_name == "OpenSSL");

    match report_format {
        ReportFormat::Markdown => format_comparison_markdown(&by_algo, has_openssl),
        ReportFormat::Json => format_comparison_json(kylix_results, external_results, has_openssl),
        ReportFormat::Text => format_comparison_text(&by_algo, has_openssl),
    }
}

fn format_comparison_text(
    by_algo: &BTreeMap<String, Vec<(&str, &str, f64)>>,
    has_openssl: bool,
) -> String {
    let mut output = String::new();
    output.push_str("Kylix Benchmark Comparison\n");
    output.push_str("==========================\n\n");

    // Add fairness note only when OpenSSL is detected
    if has_openssl {
        output.push_str("Note: OpenSSL benchmarks include process startup and file I/O overhead\n");
        output.push_str("      (each operation spawns a new process). liboqs uses its native\n");
        output.push_str("      speed_kem/speed_sig tools for fair in-process comparison.\n");
        output.push_str("      Kylix benchmarks run in-process with no I/O overhead.\n\n");
    }

    for (algo, results) in by_algo {
        output.push_str(&format!("{}\n", algo));
        output.push_str(&"-".repeat(algo.len()));
        output.push('\n');

        // Group by tool
        let mut by_tool: BTreeMap<&str, Vec<(&str, f64)>> = BTreeMap::new();
        for (tool, op, time) in results {
            by_tool.entry(*tool).or_default().push((*op, *time));
        }

        // Find Kylix times for comparison
        let kylix_times: BTreeMap<&str, f64> = by_tool
            .get("Kylix")
            .map(|v| v.iter().cloned().collect())
            .unwrap_or_default();

        for (tool, ops) in &by_tool {
            output.push_str(&format!("  {}:\n", tool));
            for (op, time) in ops {
                let speedup = if *tool != "Kylix" {
                    kylix_times
                        .get(op)
                        .filter(|kt| **kt > 0.0 && *time > 0.0)
                        .map(|kt| {
                            if *kt < *time {
                                // Kylix is faster (kt < time means Kylix took less time)
                                format!(" (Kylix {:.1}x faster)", time / kt)
                            } else if *kt > *time {
                                // Kylix is slower (kt > time means Kylix took more time)
                                format!(" (Kylix {:.1}x slower)", kt / time)
                            } else {
                                " (same speed as Kylix)".to_string()
                            }
                        })
                        .unwrap_or_default()
                } else {
                    String::new()
                };
                output.push_str(&format!("    {}: {:.1} µs{}\n", op, time, speedup));
            }
        }
        output.push('\n');
    }

    output
}

fn format_comparison_markdown(
    by_algo: &BTreeMap<String, Vec<(&str, &str, f64)>>,
    has_openssl: bool,
) -> String {
    let mut output = String::new();
    output.push_str("# Kylix Benchmark Comparison\n\n");

    // Add fairness note only when OpenSSL is detected
    if has_openssl {
        output.push_str(
            "> **Note:** OpenSSL benchmarks include process startup and file I/O overhead\n",
        );
        output.push_str("> (each operation spawns a new process). liboqs uses its native\n");
        output.push_str("> `speed_kem`/`speed_sig` tools for fair in-process comparison.\n");
        output.push_str("> Kylix benchmarks run in-process with no I/O overhead.\n\n");
    }

    for (algo, results) in by_algo {
        output.push_str(&format!("## {}\n\n", algo));

        // Collect unique tools and operations
        let mut tools: Vec<&str> = results.iter().map(|(t, _, _)| *t).collect();
        tools.sort();
        tools.dedup();

        let mut ops: Vec<&str> = results.iter().map(|(_, o, _)| *o).collect();
        ops.sort();
        ops.dedup();

        // Build table header
        output.push_str("| Library |");
        for op in &ops {
            output.push_str(&format!(" {} |", op));
        }
        output.push('\n');

        output.push_str("|---------|");
        for _ in &ops {
            output.push_str("-------:|");
        }
        output.push('\n');

        // Build table rows
        for tool in &tools {
            output.push_str(&format!("| {} |", tool));
            for op in &ops {
                let time = results
                    .iter()
                    .find(|(t, o, _)| t == tool && o == op)
                    .map(|(_, _, time)| *time);
                if let Some(t) = time {
                    output.push_str(&format!(" {:.1} µs |", t));
                } else {
                    output.push_str(" - |");
                }
            }
            output.push('\n');
        }
        output.push('\n');
    }

    output
}

fn format_comparison_json(
    kylix_results: &[BenchmarkResult],
    external_results: &[ExternalBenchResult],
    has_openssl: bool,
) -> String {
    use serde_json::json;

    let kylix: Vec<_> = kylix_results
        .iter()
        .map(|r| {
            json!({
                "tool": "Kylix",
                "algorithm": r.algorithm,
                "operation": r.operation,
                "mean_us": r.mean.as_micros(),
                "notes": "in-process benchmark"
            })
        })
        .collect();

    let external: Vec<_> = external_results
        .iter()
        .map(|r| {
            let notes = if r.tool_name == "OpenSSL" {
                "includes process startup and file I/O overhead"
            } else {
                "in-process benchmark via native speed tool"
            };
            json!({
                "tool": r.tool_name,
                "algorithm": r.algorithm,
                "operation": r.operation,
                "mean_us": r.mean_us,
                "notes": notes
            })
        })
        .collect();

    let result = if has_openssl {
        json!({
            "disclaimer": "OpenSSL benchmarks include process startup and file I/O overhead (each operation spawns a new process). liboqs uses its native speed_kem/speed_sig tools for fair in-process comparison. Kylix benchmarks run in-process with no I/O overhead.",
            "results": kylix.into_iter().chain(external).collect::<Vec<_>>()
        })
    } else {
        json!({
            "results": kylix.into_iter().chain(external).collect::<Vec<_>>()
        })
    };
    serde_json::to_string_pretty(&result).expect(
        "Failed to serialize benchmark comparison JSON; data structure should be serializable",
    )
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::time::Duration;

    fn kylix_result(algorithm: &str, operation: &str, mean_us: u64) -> BenchmarkResult {
        BenchmarkResult {
            algorithm: algorithm.to_string(),
            operation: operation.to_string(),
            iterations: 1,
            total_time: Duration::from_micros(mean_us),
            mean: Duration::from_micros(mean_us),
            std_dev: Duration::ZERO,
            throughput: 1_000_000.0 / mean_us as f64,
        }
    }

    fn external_result(
        tool_name: &str,
        algorithm: &str,
        operation: &str,
        mean_us: f64,
    ) -> ExternalBenchResult {
        ExternalBenchResult {
            tool_name: tool_name.to_string(),
            algorithm: algorithm.to_string(),
            operation: operation.to_string(),
            mean_us,
        }
    }

    #[test]
    fn comparison_json_preserves_schema_units_and_result_order() {
        let kylix = vec![kylix_result("ML-KEM-512", "keygen", 10)];
        let external = vec![
            external_result("liboqs", "ML-KEM-512", "keygen", 20.5),
            external_result("liboqs", "ML-KEM-512", "encaps", 30.25),
        ];

        let output = format_comparison_table(&kylix, &external, ReportFormat::Json);
        let value: serde_json::Value = serde_json::from_str(&output).unwrap();

        assert!(value.get("disclaimer").is_none());
        let results = value["results"].as_array().unwrap();
        assert_eq!(results.len(), 3);
        assert_eq!(
            results[0],
            serde_json::json!({
                "tool": "Kylix",
                "algorithm": "ML-KEM-512",
                "operation": "keygen",
                "mean_us": 10,
                "notes": "in-process benchmark"
            })
        );
        assert_eq!(
            results[1],
            serde_json::json!({
                "tool": "liboqs",
                "algorithm": "ML-KEM-512",
                "operation": "keygen",
                "mean_us": 20.5,
                "notes": "in-process benchmark via native speed tool"
            })
        );
        assert_eq!(
            results[2],
            serde_json::json!({
                "tool": "liboqs",
                "algorithm": "ML-KEM-512",
                "operation": "encaps",
                "mean_us": 30.25,
                "notes": "in-process benchmark via native speed tool"
            })
        );
    }

    #[test]
    fn comparison_json_adds_disclaimer_only_for_openssl_results() {
        let kylix = vec![kylix_result("ML-KEM-512", "keygen", 10)];
        let liboqs = vec![external_result("liboqs", "ML-KEM-512", "keygen", 20.0)];
        let openssl = vec![external_result("OpenSSL", "ML-KEM-512", "keygen", 20.0)];

        let without_openssl = format_comparison_table(&kylix, &liboqs, ReportFormat::Json);
        let with_openssl = format_comparison_table(&kylix, &openssl, ReportFormat::Json);
        let without_value: serde_json::Value = serde_json::from_str(&without_openssl).unwrap();
        let with_value: serde_json::Value = serde_json::from_str(&with_openssl).unwrap();

        assert!(without_value.get("disclaimer").is_none());
        assert!(with_value["disclaimer"]
            .as_str()
            .unwrap()
            .contains("process startup and file I/O overhead"));
    }

    #[test]
    fn comparison_text_preserves_order_speedup_wording_and_zero_handling() {
        let kylix = vec![
            kylix_result("ZZZ", "keygen", 10),
            kylix_result("AAA", "equal", 10),
            kylix_result("AAA", "faster", 10),
            kylix_result("AAA", "slower", 20),
            kylix_result("AAA", "zero", 10),
        ];
        let external = vec![
            external_result("liboqs", "AAA", "equal", 10.0),
            external_result("liboqs", "AAA", "faster", 20.0),
            external_result("liboqs", "AAA", "slower", 10.0),
            external_result("liboqs", "AAA", "zero", 0.0),
        ];

        let output = format_comparison_table(&kylix, &external, ReportFormat::Text);

        assert!(output.find("AAA\n---").unwrap() < output.find("ZZZ\n---").unwrap());
        assert!(output.contains("equal: 10.0 µs (same speed as Kylix)"));
        assert!(output.contains("faster: 20.0 µs (Kylix 2.0x faster)"));
        assert!(output.contains("slower: 10.0 µs (Kylix 2.0x slower)"));
        assert!(output.contains("zero: 0.0 µs\n"));
        assert!(!output.contains("zero: 0.0 µs ("));
    }

    #[test]
    fn comparison_text_adds_fairness_note_only_for_openssl_results() {
        let kylix = vec![kylix_result("ML-KEM-512", "keygen", 10)];
        let liboqs = vec![external_result("liboqs", "ML-KEM-512", "keygen", 20.0)];
        let openssl = vec![external_result("OpenSSL", "ML-KEM-512", "keygen", 20.0)];

        let without_openssl = format_comparison_table(&kylix, &liboqs, ReportFormat::Text);
        let with_openssl = format_comparison_table(&kylix, &openssl, ReportFormat::Text);

        assert!(!without_openssl.contains("process startup and file I/O overhead"));
        assert!(with_openssl.contains("process startup and file I/O overhead"));
    }

    #[test]
    fn comparison_markdown_preserves_sorted_columns_rows_and_missing_cells() {
        let kylix = vec![
            kylix_result("ML-KEM-512", "sign", 30),
            kylix_result("ML-KEM-512", "keygen", 10),
        ];
        let external = vec![external_result("liboqs", "ML-KEM-512", "keygen", 20.0)];

        let output = format_comparison_table(&kylix, &external, ReportFormat::Markdown);

        assert!(output.contains("| Library | keygen | sign |"));
        assert!(output.contains("| Kylix | 10.0 µs | 30.0 µs |"));
        assert!(output.contains("| liboqs | 20.0 µs | - |"));
        assert!(output.find("| Kylix |").unwrap() < output.find("| liboqs |").unwrap());
    }

    #[test]
    fn comparison_markdown_adds_fairness_note_only_for_openssl_results() {
        let kylix = vec![kylix_result("ML-KEM-512", "keygen", 10)];
        let liboqs = vec![external_result("liboqs", "ML-KEM-512", "keygen", 20.0)];
        let openssl = vec![external_result("OpenSSL", "ML-KEM-512", "keygen", 20.0)];

        let without_openssl = format_comparison_table(&kylix, &liboqs, ReportFormat::Markdown);
        let with_openssl = format_comparison_table(&kylix, &openssl, ReportFormat::Markdown);

        assert!(!without_openssl.contains("process startup and file I/O overhead"));
        assert!(with_openssl.contains("process startup and file I/O overhead"));
    }
}
