use anyhow::{bail, Context, Result};
use kylix_pqc::ml_dsa::{self, Signer};
use kylix_pqc::slh_dsa;
use std::fs;
use std::path::PathBuf;
use zeroize::Zeroizing;

use crate::cli::{Algorithm, OutputFormat};
use crate::io::{decode_input, encode_output};

/// Sign a file with ML-DSA or SLH-DSA
pub(crate) fn cmd_sign(
    key: &PathBuf,
    input: &PathBuf,
    output: &PathBuf,
    format: Option<OutputFormat>,
    explicit_algo: Option<Algorithm>,
    verbose: bool,
) -> Result<()> {
    let sk_data =
        Zeroizing::new(fs::read_to_string(key).context("Failed to read signing key file")?);
    let sk_bytes = Zeroizing::new(decode_input(&sk_data, format)?);
    drop(sk_data); // zeroize raw key string immediately after decoding

    let out_format = format.unwrap_or(OutputFormat::DEFAULT);

    // Use explicit algorithm if provided, otherwise detect from key size
    let algo = if let Some(a) = explicit_algo {
        // Validate key size matches the explicit algorithm
        if a.is_kem() {
            bail!("Algorithm {} is not a signature algorithm", a);
        }
        let expected_size = a.info().sec_key_size;
        if sk_bytes.len() != expected_size {
            bail!(
                "Key size {} bytes does not match algorithm {} (expected {} bytes)",
                sk_bytes.len(),
                a,
                expected_size
            );
        }
        a
    } else {
        Algorithm::detect_dsa_from_signing_key(sk_bytes.len())?
    };

    if verbose {
        eprintln!("Detected algorithm: {}", algo);
        eprintln!("Signing key size: {} bytes", sk_bytes.len());
    }

    let message = fs::read(input).context("Failed to read input file")?;

    if verbose {
        eprintln!("Message size: {} bytes", message.len());
    }

    let sig_bytes: Vec<u8> = match algo {
        Algorithm::MlDsa44 => dsa_sign!(ml_dsa::dsa44, ml_dsa::MlDsa44, sk_bytes, message),
        Algorithm::MlDsa65 => dsa_sign!(ml_dsa::dsa65, ml_dsa::MlDsa65, sk_bytes, message),
        Algorithm::MlDsa87 => dsa_sign!(ml_dsa::dsa87, ml_dsa::MlDsa87, sk_bytes, message),
        Algorithm::SlhDsaShake128s => {
            dsa_sign!(
                slh_dsa::slh_dsa_shake_128s,
                slh_dsa::SlhDsaShake128s,
                sk_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake128f => {
            dsa_sign!(
                slh_dsa::slh_dsa_shake_128f,
                slh_dsa::SlhDsaShake128f,
                sk_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake192s => {
            dsa_sign!(
                slh_dsa::slh_dsa_shake_192s,
                slh_dsa::SlhDsaShake192s,
                sk_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake192f => {
            dsa_sign!(
                slh_dsa::slh_dsa_shake_192f,
                slh_dsa::SlhDsaShake192f,
                sk_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake256s => {
            dsa_sign!(
                slh_dsa::slh_dsa_shake_256s,
                slh_dsa::SlhDsaShake256s,
                sk_bytes,
                message
            )
        }
        Algorithm::SlhDsaShake256f => {
            dsa_sign!(
                slh_dsa::slh_dsa_shake_256f,
                slh_dsa::SlhDsaShake256f,
                sk_bytes,
                message
            )
        }
        _ => bail!("Algorithm {} does not support signing", algo),
    };
    drop(sk_bytes); // zeroize signing key bytes immediately after signing

    let sig_label = if algo.is_slh_dsa() {
        "SLH-DSA SIGNATURE"
    } else {
        "ML-DSA SIGNATURE"
    };
    let sig_encoded = encode_output(&sig_bytes, out_format, sig_label);
    fs::write(output, &sig_encoded).context("Failed to write signature")?;

    if verbose {
        eprintln!("Signature size: {} bytes", sig_bytes.len());
    }

    println!("Signature written to: {}", output.display());

    Ok(())
}
