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

---

## Not Started

| Task | Priority | Notes |
|------|----------|-------|
| OpenSSL CI Compare | LOW | Add OpenSSL 3.5+ to bench compare CI (requires source build) |
| OpenSSL Dedup | LOW | Extract common logic from KEM/SIG benchmark functions |
| liboqs Parsing | LOW | Parse column headers instead of hardcoded indices |
| wolfSSL Support | LOW | Add wolfSSL as external benchmark tool |

---

## Refactoring Notes

### Match Arm Dedup (Done — PR #31)

Resolved via 6 dispatch macros (`kem_keygen!`, `dsa_keygen!`, `kem_encaps!`, `kem_decaps!`, `dsa_sign!`, `dsa_verify!`). Reduced 36 multi-line match arms to one-liner macro invocations across 5 functions.
