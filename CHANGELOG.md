# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **`--format` flag behavior** (breaking): `--format` now controls both input decoding and output encoding. Previously it only affected output while input was always auto-detected. If you relied on `--format` to set the output format only, remove the flag to restore auto-detect input with hex output, or ensure input files match the specified format.

### Added

- PEM label validation: reject labels with non-printable or control characters
- Early error for empty input files instead of cryptic algorithm-detection failures
- Zeroize intermediate buffers in PEM decoding (CRLF normalization, base64 body)
- Zeroize intermediate buffers in PEM encoding (base64 string, line-wrapped body)

## [0.5.3] - 2026-02-11

### Changed

- **kylix-pqc v0.4.5**: Updated to latest library version
- **SLH-DSA ambiguous variant detection**: `detect_dsa_from_signing_key` / `detect_dsa_from_verification_key` now return an error for ambiguous s/f variants, requiring explicit `--algo`

### Security

- Zeroize encoded secret key string (`sk_encoded`) in `cmd_keygen` after writing to disk
- Replace manual `.zeroize()` calls with `Zeroizing::new()` wrappers for `ss_bytes` in `cmd_encaps`/`cmd_decaps` and `sk_bytes` in `cmd_decaps`/`cmd_sign`

### Fixed

- Add `eprintln!` warning on non-Unix platforms when secret key file permissions cannot be restricted
- Use release builds in `external-tool-compare` CI benchmark (was ~100x slower than liboqs due to debug mode)
- Optimize `kylix-pqc` in dev/test profiles with `opt-level = 2`
- Use `BTreeMap` instead of `HashMap` in bench comparison tables for deterministic output order

### Added

- SLH-DSA integration tests: 128f sign/verify roundtrip, `--algo` requirement test, and all 6 SLH-DSA variants in `test_keygen_all_algorithms`

## [0.5.2] - 2026-02-02

### Changed

- **kylix-pqc v0.4.4**: Updated to latest library version with consistent API across all algorithms
  - SLH-DSA `from_bytes()` now returns `Result<T, E>` (was `Option<T>`)
  - SLH-DSA byte access unified to `as_bytes()` (was `to_bytes()`)
- **Dispatch macros**: Introduced 6 macros to deduplicate 36 near-identical match arms across 5 command functions (`cmd_keygen`, `cmd_encaps`, `cmd_decaps`, `cmd_sign`, `cmd_verify`)

## [0.5.1] - 2026-01-28

### Changed

- **kylix-pqc v0.4.3**: Updated to latest library version with security and performance improvements

### Security

- **Secret key memory protection**: Improved handling of secret keys in memory:
  - Newly generated keys are wrapped in `Zeroizing<Vec<u8>>` for automatic cleanup on drop
  - Keys read from files are explicitly zeroized after use
- **Inherited from kylix-pqc v0.4.3**:
  - SLH-DSA `SigningKey::to_bytes()` returns `Zeroizing<Vec<u8>>`
  - SLH-DSA PRF outputs automatically zeroized

### Performance

- **Inherited from kylix-pqc v0.4.3**:
  - ML-KEM: Reduced buffer allocations in keygen and encrypt
  - ML-DSA: Reduced buffer allocations in keygen and sign

### Removed

- Unused `is_dsa()` method

## [0.5.0] - 2026-01-27

Initial release as a standalone repository. Previously part of [crane-valley/kylix](https://github.com/crane-valley/kylix).

### Added

- **CLI commands**: keygen, encaps, decaps, sign, verify, info, completions
- **Benchmark feature**: Performance benchmarking with `--features bench`
  - Compare with OpenSSL 3.5+ and liboqs
  - Multiple output formats: text, json, markdown
- **Binary distribution**: Pre-built binaries via cargo-dist
  - Linux (x64, ARM64)
  - macOS (x64, ARM64)
  - Windows (x64)
- **Shell completions**: Bash, Zsh, Fish, PowerShell

### Algorithms

All algorithms from kylix-pqc 0.4.x:

- **ML-KEM** (FIPS 203): ML-KEM-512, ML-KEM-768, ML-KEM-1024
- **ML-DSA** (FIPS 204): ML-DSA-44, ML-DSA-65, ML-DSA-87
- **SLH-DSA** (FIPS 205): All SHAKE variants (128s/f, 192s/f, 256s/f)

[Unreleased]: https://github.com/crane-valley/kylix-cli/compare/v0.5.3...HEAD
[0.5.3]: https://github.com/crane-valley/kylix-cli/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/crane-valley/kylix-cli/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/crane-valley/kylix-cli/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/crane-valley/kylix-cli/releases/tag/v0.5.0
