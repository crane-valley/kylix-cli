use anyhow::{anyhow, Context, Result};
use kylix_pqc::ml_dsa::{self, Signer};
use kylix_pqc::ml_kem::{self, Kem};
use kylix_pqc::slh_dsa;
use rand::rng;
use std::fs;
use zeroize::Zeroizing;

use crate::cli::{Algorithm, OutputFormat};
use crate::io::{encode_output, write_secret_file};

/// Generate a key pair for the specified algorithm
pub(crate) fn cmd_keygen(
    algo: Algorithm,
    output: &str,
    format: OutputFormat,
    verbose: bool,
) -> Result<()> {
    if verbose {
        eprintln!("Generating {} key pair...", algo);
    }

    let info = algo.info();
    let (pk_label, sk_label) = (info.pub_label, info.sec_label);

    let (pk_bytes, sk_bytes): (Vec<u8>, Zeroizing<Vec<u8>>) = match algo {
        Algorithm::MlKem512 => kem_keygen!(ml_kem::MlKem512),
        Algorithm::MlKem768 => kem_keygen!(ml_kem::MlKem768),
        Algorithm::MlKem1024 => kem_keygen!(ml_kem::MlKem1024),
        Algorithm::MlDsa44 => dsa_keygen!(ml_dsa::MlDsa44),
        Algorithm::MlDsa65 => dsa_keygen!(ml_dsa::MlDsa65),
        Algorithm::MlDsa87 => dsa_keygen!(ml_dsa::MlDsa87),
        Algorithm::SlhDsaShake128s => dsa_keygen!(slh_dsa::SlhDsaShake128s),
        Algorithm::SlhDsaShake128f => dsa_keygen!(slh_dsa::SlhDsaShake128f),
        Algorithm::SlhDsaShake192s => dsa_keygen!(slh_dsa::SlhDsaShake192s),
        Algorithm::SlhDsaShake192f => dsa_keygen!(slh_dsa::SlhDsaShake192f),
        Algorithm::SlhDsaShake256s => dsa_keygen!(slh_dsa::SlhDsaShake256s),
        Algorithm::SlhDsaShake256f => dsa_keygen!(slh_dsa::SlhDsaShake256f),
    };

    // Store sizes before zeroization for verbose output
    let pk_size = pk_bytes.len();
    let sk_size = sk_bytes.len();

    let pk_encoded = encode_output(&pk_bytes, format, pk_label);
    let sk_encoded = Zeroizing::new(encode_output(&sk_bytes, format, sk_label));
    // sk_bytes is Zeroizing<Vec<u8>>, automatically zeroized on drop

    let pub_path = format!("{}.pub", output);
    let sec_path = format!("{}.sec", output);

    fs::write(&pub_path, &pk_encoded).context("Failed to write public key")?;
    // Use restrictive permissions (0o600) for secret key on Unix
    write_secret_file(sec_path.as_ref(), &sk_encoded)?;
    drop(sk_encoded); // zeroize encoded secret key immediately after writing

    if verbose {
        eprintln!("Public key size: {} bytes", pk_size);
        eprintln!("Secret key size: {} bytes", sk_size);
    }

    println!("Public key written to: {}", pub_path);
    println!("Secret key written to: {}", sec_path);

    Ok(())
}
