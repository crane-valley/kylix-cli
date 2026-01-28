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
3. `cargo test --workspace --all-features` - Run tests

## Release

- Create a GitHub Release with tag `vX.Y.Z` to trigger cargo-dist binary builds
- Ensure `Cargo.toml` version matches the tag before release
- Binaries are distributed via cargo-dist (shell/PowerShell installers)

## Dependencies

- `kylix-pqc` from crates.io (not path dependency)
- When updating kylix-pqc version, update `Cargo.toml` workspace dependencies
