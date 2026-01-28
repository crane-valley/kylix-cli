# Kylix CLI Development Roadmap

CLI tool for kylix-pqc post-quantum cryptography library.

---

## Not Started

| Task | Priority | Notes |
|------|----------|-------|
| Bench Compare CI | MEDIUM | Test OpenSSL/liboqs detection on Linux/macOS |
| Long Functions | MEDIUM | Break up `cmd_sign`, `cmd_verify`, `cmd_keygen` |
| Unused `is_dsa()` | LOW | Remove or use the method |
| Error Patterns | LOW | Standardize `map_err` vs `ok_or_else` usage |
| OpenSSL Dedup | LOW | Extract common logic from KEM/SIG benchmark functions |
| liboqs Parsing | LOW | Parse column headers instead of hardcoded indices |
| wolfSSL Support | LOW | Add wolfSSL as external benchmark tool |
