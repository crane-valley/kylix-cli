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
| Match Arm Dedup | MEDIUM | Macro refactor for keygen/sign/verify across all algorithms (unblocked by kylix-pqc 0.4.4) |
| OpenSSL Dedup | LOW | Extract common logic from KEM/SIG benchmark functions |
| liboqs Parsing | LOW | Parse column headers instead of hardcoded indices |
| wolfSSL Support | LOW | Add wolfSSL as external benchmark tool |

---

## Refactoring Notes

### Match Arm Dedup (Unblocked)

`cmd_keygen` (12 arms), `cmd_sign` (9 arms), `cmd_verify` (9 arms) all have near-identical match arms differing only in the algorithm type. As of kylix-pqc 0.4.4, the SLH-DSA API is now consistent with ML-KEM/ML-DSA:

| Issue | All algorithms (0.4.4) |
|-------|------------------------|
| `from_bytes()` return | `Result<T, E>` |
| Bytes access | `as_bytes()` |

A macro (or unified trait in kylix-pqc) can now deduplicate all arms.
