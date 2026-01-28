# Kylix CLI Development Roadmap

CLI tool for kylix-pqc post-quantum cryptography library.

---

## Current Status

### Completed

- Binary distribution via cargo-dist (shell/PowerShell installers)
- Security improvements: secret key file permissions (Unix 0o600), consistent zeroization, atomic file writes
- Bench feature extraction: benchmark code moved to optional `bench` feature in `src/bench.rs`
- `AlgorithmInfo` metadata struct for algorithm detection and display

> See `CHANGELOG.md` for release history.

---

## Not Started

| Task | Priority | Notes |
|------|----------|-------|
| Bench Compare CI | MEDIUM | Test OpenSSL/liboqs detection on Linux/macOS |
| Long Functions | MEDIUM | Break up `cmd_sign` (135L), `cmd_verify` (127L), `cmd_keygen` (94L) |
| Unused `is_dsa()` | LOW | Remove or use the method |
| Error Patterns | LOW | Standardize `map_err` vs `ok_or_else` usage |
| OpenSSL Dedup | LOW | Extract common logic from KEM/SIG benchmark functions (~50 LOC) |
| Speedup Helper | LOW | Extract speedup calculation into shared function (~20 LOC) |
| liboqs Parsing | LOW | Parse column headers instead of hardcoded indices |
| Test Message | LOW | Define module-level constant for test phrases |
| wolfSSL Support | LOW | Add wolfSSL as external benchmark tool |

---

## Task Details

### Bench Compare CI (MEDIUM)

Add CI workflow to test `kylix bench --compare` with external tools:

- **Linux**: Install liboqs via apt/build from source, test detection
- **macOS**: Install liboqs via Homebrew, test detection
- **OpenSSL 3.5+**: Test PQC provider detection when available

Goal: Verify cross-platform tool detection works correctly.

### Long Functions (MEDIUM)

Current function lengths exceed recommended limits:

| Function | Lines | Target |
|----------|-------|--------|
| `cmd_sign` | 135 | < 50 |
| `cmd_verify` | 127 | < 50 |
| `cmd_keygen` | 94 | < 50 |

Suggested approach:
- Extract algorithm-specific logic into helper functions
- Separate file I/O from cryptographic operations
- Create shared validation utilities

### wolfSSL Support (LOW)

Add wolfSSL as an external benchmark comparison tool alongside OpenSSL and liboqs.

Requirements:
- Detect wolfSSL installation
- Run wolfSSL PQC benchmarks
- Parse and display comparison results

---

## Quality Checklist

- [x] cargo-dist binary distribution
- [x] Cross-platform CI (Linux, macOS, Windows)
- [x] Secure file handling
- [ ] Bench compare CI testing
- [ ] Function length compliance
- [ ] Code pattern consistency
