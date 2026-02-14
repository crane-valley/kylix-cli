# Kylix CLI Development Roadmap

CLI tool for kylix-pqc post-quantum cryptography library.

---

## In Progress

| Task | Priority | Notes |
|------|----------|-------|
| (none) | | |

---

## Completed

| Task | Priority | Notes |
|------|----------|-------|
| Bench Compare CI | MEDIUM | PR #27 merged - liboqs CI test with PR comment output |
| Tool Detection Refactor | HIGH | PR #25 merged - Environment variable support for OpenSSL/liboqs |
| Match Arm Dedup | MEDIUM | PR #31 - 6 dispatch macros to deduplicate 36 match arms across 5 cmd_* functions |
| Review Findings Fix | HIGH | [H-1] Windows permission warning, [H-3] Zeroize sk_encoded, [M-1] SLH-DSA ambiguous detection error, [L-1] Zeroizing wrappers, [L-4] BTreeMap for deterministic output, [M-5] SLH-DSA integration tests |
| Bench Release Build Fix | HIGH | `--release` missing from external-tool-compare CI job, causing ~100x slowdown vs liboqs |
| [H-2] Shared Secret Output Control | HIGH | `--secret-file` option for encaps/decaps to write shared secret to file instead of console |
| [M-2] Split main.rs into Modules | MEDIUM | Split 1256-line main.rs into cli.rs, io.rs, macros.rs, and commands/ directory |
| [M-3] Input Format Disambiguation | MEDIUM | `--format` now uses `Option<OutputFormat>`: explicit format prevents fallback, None preserves auto-detect |
| [L-6] PEM Label Validation | LOW | PR #45 - Validate BEGIN/END labels match exactly in `decode_pem`, reject empty labels and malformed headers/footers |

---

## Not Started

| Task | Priority | Notes |
|------|----------|-------|
| OpenSSL CI Compare | LOW | Add OpenSSL 3.5+ to bench compare CI (requires source build) |
| OpenSSL Dedup | LOW | Extract common logic from KEM/SIG benchmark functions |
| liboqs Parsing | LOW | Parse column headers instead of hardcoded indices |
| wolfSSL Support | LOW | Add wolfSSL as external benchmark tool |
| [M-4] Deep Zeroization in encode_output | MEDIUM | Zeroize intermediate strings in `encode_output` (PEM wrapping, base64). `decode_pem` side done in PR #45. |
| [L-5] Windows ACL for Secret Keys | LOW | Enforce restrictive ACLs on secret key files on Windows (e.g. `windows-acl` crate) |
| [L-7] Separate Input/Output Format Flags | LOW | Split `--format` into `--in-format` / `--out-format` so users can read PEM keys and output hex (currently a single flag controls both) |
| [L-8] Auto-Detection Documentation | LOW | Document hex/base64 auto-detection ambiguity in README (e.g., hex-only strings like "deadbeef" are detected as hex, not base64) |

---

## Refactoring Notes

### Match Arm Dedup (Done — PR #31)

Resolved via 6 dispatch macros (`kem_keygen!`, `dsa_keygen!`, `kem_encaps!`, `kem_decaps!`, `dsa_sign!`, `dsa_verify!`). Reduced 36 multi-line match arms to one-liner macro invocations across 5 functions.
