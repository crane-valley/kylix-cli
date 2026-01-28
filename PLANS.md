# Kylix CLI Development Roadmap

CLI tool for kylix-pqc post-quantum cryptography library.

---

## In Progress

| Task | Priority | Notes |
|------|----------|-------|
| Bench Compare CI | MEDIUM | PR #27 - liboqs CI test with PR comment output |

---

## Completed

| Task | Priority | Notes |
|------|----------|-------|
| Tool Detection Refactor | HIGH | PR #25 merged - Environment variable support for OpenSSL/liboqs |

---

## Not Started

| Task | Priority | Notes |
|------|----------|-------|
| OpenSSL CI Compare | LOW | Add OpenSSL 3.5+ to bench compare CI (requires source build) |
| Long Functions | MEDIUM | Requires kylix-pqc trait unification (see below) |
| OpenSSL Dedup | LOW | Extract common logic from KEM/SIG benchmark functions |
| liboqs Parsing | LOW | Parse column headers instead of hardcoded indices |
| wolfSSL Support | LOW | Add wolfSSL as external benchmark tool |

---

## Refactoring Notes

### Long Functions (Blocked)

`cmd_keygen` (98L), `cmd_sign` (131L), `cmd_verify` (122L) each contain 12-branch match statements due to:

| Issue | ML-KEM/ML-DSA | SLH-DSA |
|-------|---------------|---------|
| `from_bytes()` return | `Result<T, E>` | `Option<T>` |
| Bytes access | `as_bytes()` | `to_bytes()` / `as_ref()` |

**Resolution**: Add unified trait to kylix-pqc library, then refactor CLI.

### Error Patterns (Won't Fix)

`map_err` vs `ok_or_else` difference is due to kylix-pqc API design, not CLI code style.
