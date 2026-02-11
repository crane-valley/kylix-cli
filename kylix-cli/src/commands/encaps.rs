use anyhow::{Context, Result};
use kylix_pqc::ml_kem::{self, Kem};
use std::fs;
use std::path::PathBuf;
use zeroize::Zeroizing;

use crate::cli::{Algorithm, OutputFormat};
use crate::io::{decode_input, encode_output, write_secret_file};

/// Encapsulate a shared secret
pub(crate) fn cmd_encaps(
    pubkey: &PathBuf,
    output: Option<&PathBuf>,
    secret_file: Option<&PathBuf>,
    format: Option<OutputFormat>,
    verbose: bool,
) -> Result<()> {
    let pk_data = fs::read_to_string(pubkey).context("Failed to read public key file")?;
    let pk_bytes = decode_input(&pk_data, format)?;

    let out_format = format.unwrap_or(OutputFormat::DEFAULT);

    let algo = Algorithm::detect_kem_from_pub_key(pk_bytes.len())?;

    if verbose {
        eprintln!("Detected algorithm: {}", algo);
        eprintln!("Public key size: {} bytes", pk_bytes.len());
    }

    let (ct_bytes, ss_bytes_raw): (Vec<u8>, Vec<u8>) = match algo {
        Algorithm::MlKem512 => kem_encaps!(ml_kem::ml_kem_512, ml_kem::MlKem512, pk_bytes),
        Algorithm::MlKem768 => kem_encaps!(ml_kem::ml_kem_768, ml_kem::MlKem768, pk_bytes),
        Algorithm::MlKem1024 => kem_encaps!(ml_kem::ml_kem_1024, ml_kem::MlKem1024, pk_bytes),
        // detect_kem_from_pub_key only returns ML-KEM variants, so DSA variants are unreachable
        _ => unreachable!(),
    };
    let ss_bytes = Zeroizing::new(ss_bytes_raw);

    let ct_encoded = encode_output(&ct_bytes, out_format, "ML-KEM CIPHERTEXT");

    if let Some(out_path) = output {
        fs::write(out_path, &ct_encoded).context("Failed to write ciphertext")?;
        if verbose {
            eprintln!("Ciphertext written to: {}", out_path.display());
            eprintln!("Ciphertext size: {} bytes", ct_bytes.len());
        }
    } else {
        println!("{}", ct_encoded);
    }

    let ss_len = ss_bytes.len();
    let ss_encoded = Zeroizing::new(encode_output(&ss_bytes, out_format, "SHARED SECRET"));
    drop(ss_bytes); // zeroize shared secret bytes immediately after encoding
    if let Some(sf_path) = secret_file {
        write_secret_file(sf_path, &ss_encoded)?;
        if verbose {
            eprintln!("Shared secret written to: {}", sf_path.display());
        }
    } else if output.is_some() {
        println!("Shared secret: {}", &*ss_encoded);
    } else {
        eprintln!("Shared secret: {}", &*ss_encoded);
    }
    drop(ss_encoded); // zeroize encoded shared secret immediately after output

    if verbose {
        eprintln!("Shared secret size: {} bytes", ss_len);
    }

    Ok(())
}
