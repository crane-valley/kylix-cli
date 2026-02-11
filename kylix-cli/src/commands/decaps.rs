use anyhow::{Context, Result};
use kylix_pqc::ml_kem::{self, Kem};
use std::fs;
use std::io::{self, Read};
use std::path::PathBuf;
use zeroize::Zeroizing;

use crate::cli::{Algorithm, OutputFormat};
use crate::io::{decode_input, encode_output, write_secret_file};

/// Decapsulate a shared secret
pub(crate) fn cmd_decaps(
    key: &PathBuf,
    input: Option<&PathBuf>,
    secret_file: Option<&PathBuf>,
    format: OutputFormat,
    verbose: bool,
) -> Result<()> {
    let sk_data =
        Zeroizing::new(fs::read_to_string(key).context("Failed to read secret key file")?);
    let sk_bytes = Zeroizing::new(decode_input(&sk_data, format)?);
    drop(sk_data); // zeroize raw key string immediately after decoding

    let algo = Algorithm::detect_kem_from_sec_key(sk_bytes.len())?;

    if verbose {
        eprintln!("Detected algorithm: {}", algo);
        eprintln!("Secret key size: {} bytes", sk_bytes.len());
    }

    let ct_data = if let Some(ct_path) = input {
        fs::read_to_string(ct_path).context("Failed to read ciphertext file")?
    } else {
        let mut buf = String::new();
        io::stdin()
            .read_to_string(&mut buf)
            .context("Failed to read ciphertext from stdin")?;
        buf
    };
    let ct_bytes = decode_input(&ct_data, format)?;

    if verbose {
        eprintln!("Ciphertext size: {} bytes", ct_bytes.len());
    }

    let ss_bytes_raw: Vec<u8> = match algo {
        Algorithm::MlKem512 => {
            kem_decaps!(ml_kem::ml_kem_512, ml_kem::MlKem512, sk_bytes, ct_bytes)
        }
        Algorithm::MlKem768 => {
            kem_decaps!(ml_kem::ml_kem_768, ml_kem::MlKem768, sk_bytes, ct_bytes)
        }
        Algorithm::MlKem1024 => {
            kem_decaps!(ml_kem::ml_kem_1024, ml_kem::MlKem1024, sk_bytes, ct_bytes)
        }
        // detect_kem_from_sec_key only returns ML-KEM variants, so this is unreachable
        _ => unreachable!(),
    };
    let ss_bytes = Zeroizing::new(ss_bytes_raw);
    drop(sk_bytes); // zeroize secret key bytes immediately after decapsulation

    let ss_len = ss_bytes.len();
    let ss_encoded = Zeroizing::new(encode_output(&ss_bytes, format, "SHARED SECRET"));
    drop(ss_bytes); // zeroize shared secret bytes immediately after encoding
    if let Some(sf_path) = secret_file {
        write_secret_file(sf_path, &ss_encoded)?;
        if verbose {
            eprintln!("Shared secret written to: {}", sf_path.display());
        }
    } else {
        println!("{}", &*ss_encoded);
    }
    drop(ss_encoded); // zeroize encoded shared secret immediately after output

    if verbose {
        eprintln!("Shared secret size: {} bytes", ss_len);
    }

    Ok(())
}
