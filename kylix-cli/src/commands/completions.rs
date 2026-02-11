use clap::CommandFactory;
use clap_complete::{generate, Shell};
use std::io;

use crate::cli::Cli;

/// Generate shell completions
pub(crate) fn cmd_completions(shell: Shell) {
    let mut cmd = Cli::command();
    generate(shell, &mut cmd, "kylix", &mut io::stdout());
}
