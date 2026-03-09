# CLAUDE.md

- Source code, comments, logs, error messages: English
- PR titles, summaries, and comments: English
- Create feature branch → commit → push → PR (merge is done by humans)

## Related Repository

- Library: [crane-valley/kylix](https://github.com/crane-valley/kylix) (kylix-pqc on crates.io)

## CI Notes

- CI uses `-Dwarnings` so all warnings are treated as errors

## Code Quality Rules

Before committing or creating a PR, always run:
1. `cargo fmt --all` - Format all code
2. `cargo clippy --workspace --all-features -- -D warnings` - Check for lints
3. `cargo clippy --workspace --no-default-features -- -D warnings` - Check for lints (no default features)
4. `cargo test --workspace --all-features` - Run tests

## Release

1. Update `CHANGELOG.md`: move Unreleased items to new `[X.Y.Z]` section, update comparison links
2. Ensure the `version` in `Cargo.toml` is set to `X.Y.Z` before creating the `vX.Y.Z` tag
3. Create a **tag only** with `git tag vX.Y.Z && git push origin vX.Y.Z`
   - Do NOT use `gh release create` - cargo-dist creates the release automatically
4. cargo-dist will build binaries and create the GitHub Release with installers

## Dependencies

- `kylix-pqc` from crates.io (not path dependency)
- When updating kylix-pqc version, update `Cargo.toml` workspace dependencies

## CLI Design

### Subcommands

keygen, encaps, decaps, sign, verify, info, completions, bench (feature-gated)

### Input Format Handling (io.rs)

- Auto-detection: hex if all chars are valid hex digits AND length matches expected size, else base64
- PEM: label validation ensures BEGIN/END labels match exactly
- `--format` flag for explicit format override (hex/base64/pem)

### Output Security

- Secret outputs (shared secrets, secret keys) go to `--secret-file` or stderr, not stdout
- All sensitive buffers wrapped in `Zeroizing<T>` for automatic drop-based cleanup
- PEM encoding path uses deep zeroization for intermediate base64 + wrapped strings

### Module Structure

- cli.rs: clap derive-based argument parsing + subcommand dispatch
- commands/: one file per subcommand
- io.rs: hex/base64/PEM encode/decode with zeroization
- macros.rs: 6 dispatch macros (kem_keygen!, dsa_keygen!, etc.) to deduplicate match arms

### Benchmarking (kylix-bench crate)

- Criterion benchmarks for all algorithms
- Comparative benchmarks against liboqs (via env var tool detection)
- Dev/test profiles use opt-level=2 for kylix-pqc (avoids ~100x slowdown)
