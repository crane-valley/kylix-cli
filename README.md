# Kylix CLI

[![CI](https://github.com/crane-valley/kylix-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/crane-valley/kylix-cli/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/crane-valley/kylix-cli)](https://github.com/crane-valley/kylix-cli/releases/latest)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fkylix-pqc.dev%2F)](https://kylix-pqc.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Command-line interface for post-quantum cryptography operations using the [Kylix](https://github.com/crane-valley/kylix) library.

## Security

> [!WARNING]
> This CLI uses the [Kylix](https://github.com/crane-valley/kylix) library, which is experimental and has **NOT been audited**. It is **NOT intended for production use**.

See [SECURITY.md](https://github.com/crane-valley/kylix/blob/main/SECURITY.md) for security policy and vulnerability reporting.

## Installation

### Pre-built Binaries

**Linux/macOS:**

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/crane-valley/kylix-cli/releases/latest/download/kylix-cli-installer.sh | sh
```

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://github.com/crane-valley/kylix-cli/releases/latest/download/kylix-cli-installer.ps1 | iex"
```

### From Source

```sh
cargo install --git https://github.com/crane-valley/kylix-cli kylix-cli
```

With benchmark feature:

```sh
cargo install --git https://github.com/crane-valley/kylix-cli kylix-cli --features bench
```

## Usage

### Key Generation

```sh
# ML-KEM (Key Encapsulation)
kylix keygen -a ml-kem-768 -o mykey

# ML-DSA (Digital Signature)
kylix keygen -a ml-dsa-65 -o mykey

# SLH-DSA (Stateless Hash-Based Signature)
kylix keygen -a slh-dsa-shake-128f -o mykey
```

### Encapsulation/Decapsulation (ML-KEM)

```sh
# Encapsulate (creates shared secret and ciphertext)
kylix encaps --pub mykey.pub -o ciphertext.ct

# Decapsulate (recovers shared secret from ciphertext)
kylix decaps --key mykey.sec -i ciphertext.ct

# Write shared secret to file instead of console
kylix encaps --pub mykey.pub -o ciphertext.ct --secret-file shared.secret
kylix decaps --key mykey.sec -i ciphertext.ct --secret-file shared.secret
```

### Sign/Verify (ML-DSA, SLH-DSA)

```sh
# Sign a file
kylix sign --key mykey.sec -i document.txt -o document.sig

# Verify a signature
kylix verify --pub mykey.pub -i document.txt -s document.sig
```

### Algorithm Information

```sh
kylix info
```

### Benchmarks (requires `bench` feature)

```sh
# Run benchmarks for all algorithms
kylix bench

# Benchmark specific algorithm
kylix bench -a ml-kem-768 -i 1000

# Compare with external tools (OpenSSL, liboqs)
kylix bench -a ml-kem-768 --compare
```

### Shell Completions

```sh
# Bash
mkdir -p ~/.local/share/bash-completion/completions
kylix completions bash > ~/.local/share/bash-completion/completions/kylix

# Zsh (add ~/.zfunc to fpath in .zshrc)
mkdir -p ~/.zfunc
kylix completions zsh > ~/.zfunc/_kylix

# Fish
mkdir -p ~/.config/fish/completions
kylix completions fish > ~/.config/fish/completions/kylix.fish
```

```powershell
# PowerShell (add to $PROFILE)
kylix completions powershell >> $PROFILE
```

## Supported Algorithms

| Algorithm | Type | NIST Level | Standard |
|-----------|------|------------|----------|
| ML-KEM-512 | KEM | 1 | FIPS 203 |
| ML-KEM-768 | KEM | 3 | FIPS 203 |
| ML-KEM-1024 | KEM | 5 | FIPS 203 |
| ML-DSA-44 | Signature | 2 | FIPS 204 |
| ML-DSA-65 | Signature | 3 | FIPS 204 |
| ML-DSA-87 | Signature | 5 | FIPS 204 |
| SLH-DSA-SHAKE-128s/f | Signature | 1 | FIPS 205 |
| SLH-DSA-SHAKE-192s/f | Signature | 3 | FIPS 205 |
| SLH-DSA-SHAKE-256s/f | Signature | 5 | FIPS 205 |

## Encoding Formats

- `hex` - Hexadecimal encoding (default output)
- `base64` - Base64 encoding
- `pem` - PEM format with algorithm-specific headers

When `--format` is omitted, output defaults to hex and input is auto-detected (PEM → hex → base64). When `--format` is specified, it applies to both input and output with no auto-detect fallback.

```sh
# Explicit format (input must be base64, output is base64)
kylix encaps --pub mykey.pub -o ciphertext.ct -f base64

# No --format: auto-detect input, hex output
kylix decaps --key mykey.sec -i ciphertext.ct
```

## License

MIT License - see [LICENSE](LICENSE) for details.
