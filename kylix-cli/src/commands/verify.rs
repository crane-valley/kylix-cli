use anyhow::{anyhow, bail, Context, Result};
use kylix_pqc::ml_dsa::{self, Signer};
use kylix_pqc::slh_dsa;
use std::fs;
use std::path::PathBuf;

use crate::cli::{Algorithm, OutputFormat};
use crate::io::decode_input;

/// Verify a signature with ML-DSA or SLH-DSA
pub(crate) fn cmd_verify(
    pubkey: &PathBuf,
    input: &PathBuf,
    signature: &PathBuf,
    format: OutputFormat,
    explicit_algo: Option<Algorithm>,
    verbose: bool,
) -> Result<()> {
    let pk_data = fs::read_to_string(pubkey).context("Failed to read public key file")?;
    let pk_bytes = decode_input(&pk_data, format)?;

    // Use explicit algorithm if provided, otherwise detect from key size
    let algo = if let Some(a) = explicit_algo {
        // Validate key size matches the explicit algorithm
        if a.is_kem() {
            bail!("Algorithm {} is not a signature algorithm", a);
        }
        let expected_size = a.info().pub_key_size;
        if pk_bytes.len() != expected_size {
            bail!(
                "Key size {} bytes does not match algorithm {} (expected {} bytes)",
                pk_bytes.len(),
                a,
                expected_size
            );
        }
        a
    } else {
        Algorithm::detect_dsa_from_verification_key(pk_bytes.len())?
    };

    if verbose {
        eprintln!("Detected algorithm: {}", algo);
        eprintln!("Verification key size: {} bytes", pk_bytes.len());
    }

    let message = fs::read(input).context("Failed to read input file")?;
    let sig_data = fs::read_to_string(signature).context("Failed to read signature file")?;
    let sig_bytes = decode_input(&sig_data, format)?;

    if verbose {
        eprintln!("Message size: {} bytes", message.len());
        eprintln!("Signature size: {} bytes", sig_bytes.len());
    }

    let result = match algo {
        Algorithm::MlDsa44 => {
            dsa_verify!(ml_dsa::dsa44, ml_dsa::MlDsa44, pk_bytes, sig_bytes, message)
        }
        Algorithm::MlDsa65 => {
            dsa_verify!(ml_dsa::dsa65, ml_dsa::MlDsa65, pk_bytes, sig_bytes, message)
        }
        Algorithm::MlDsa87 => {
            dsa_verify!(ml_dsa::dsa87, ml_dsa::MlDsa87, pk_bytes, sig_bytes, message)
        }
        Algorithm::SlhDsaShake128s => {
            dsa_verify!(
                slh_dsa::slh_dsa_shake_128s,
                slh_dsa::SlhDsaShake128s,
                pk_bytes,
                sig_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake128f => {
            dsa_verify!(
                slh_dsa::slh_dsa_shake_128f,
                slh_dsa::SlhDsaShake128f,
                pk_bytes,
                sig_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake192s => {
            dsa_verify!(
                slh_dsa::slh_dsa_shake_192s,
                slh_dsa::SlhDsaShake192s,
                pk_bytes,
                sig_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake192f => {
            dsa_verify!(
                slh_dsa::slh_dsa_shake_192f,
                slh_dsa::SlhDsaShake192f,
                pk_bytes,
                sig_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake256s => {
            dsa_verify!(
                slh_dsa::slh_dsa_shake_256s,
                slh_dsa::SlhDsaShake256s,
                pk_bytes,
                sig_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake256f => {
            dsa_verify!(
                slh_dsa::slh_dsa_shake_256f,
                slh_dsa::SlhDsaShake256f,
                pk_bytes,
                sig_bytes,
                message
            )
        }
        _ => bail!("Algorithm {} does not support verification", algo),
    };

    match result {
        Ok(()) => {
            println!("Signature is valid.");
            Ok(())
        }
        Err(_) => {
            bail!("Signature verification failed.")
        }
    }
}
