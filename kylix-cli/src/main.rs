//! Kylix CLI - Post-quantum cryptography command-line tool.

#[macro_use]
mod macros;
mod cli;
mod commands;
mod io;

#[cfg(feature = "bench")]
mod bench;

use anyhow::Result;
use clap::Parser;

use cli::{Cli, Commands};
use commands::{
    cmd_completions, cmd_decaps, cmd_encaps, cmd_info, cmd_keygen, cmd_sign, cmd_verify,
};

fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Keygen {
            algo,
            output,
            format,
        } => cmd_keygen(algo, &output, format, cli.verbose),

        Commands::Encaps {
            pubkey,
            output,
            secret_file,
            format,
        } => cmd_encaps(
            &pubkey,
            output.as_ref(),
            secret_file.as_ref(),
            format,
            cli.verbose,
        ),

        Commands::Decaps {
            key,
            input,
            secret_file,
            format,
        } => cmd_decaps(
            &key,
            input.as_ref(),
            secret_file.as_ref(),
            format,
            cli.verbose,
        ),

        Commands::Sign {
            key,
            input,
            output,
            format,
            algo,
        } => cmd_sign(&key, &input, &output, format, algo, cli.verbose),

        Commands::Verify {
            pubkey,
            input,
            signature,
            format,
            algo,
        } => cmd_verify(&pubkey, &input, &signature, format, algo, cli.verbose),

        Commands::Info => {
            cmd_info();
            Ok(())
        }

        Commands::Completions { shell } => {
            cmd_completions(shell);
            Ok(())
        }

        #[cfg(feature = "bench")]
        Commands::Bench {
            algo,
            iterations,
            output,
            report,
            compare,
            with,
        } => bench::cmd_bench(
            algo,
            iterations,
            output.as_ref(),
            report,
            compare,
            with.as_ref(),
            cli.verbose,
        ),
    }
}
