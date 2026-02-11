use crate::cli::Algorithm;

/// Display information about supported algorithms
pub(crate) fn cmd_info() {
    println!("Kylix - Post-Quantum Cryptography Library");
    println!();
    println!("Supported algorithms:");
    println!();

    // ML-KEM algorithms
    println!("  ML-KEM (FIPS 203) - Key Encapsulation Mechanism");
    for (algo, level) in [
        (Algorithm::MlKem512, "Security Level 1 (128-bit)"),
        (Algorithm::MlKem768, "Security Level 3 (192-bit)"),
        (Algorithm::MlKem1024, "Security Level 5 (256-bit)"),
    ] {
        let info = algo.info();
        println!(
            "    {:<12} {}  PK: {}B  SK: {}B  CT: {}B",
            format!("{}", algo).to_lowercase(),
            level,
            info.pub_key_size,
            info.sec_key_size,
            info.output_size
        );
    }
    println!();

    // ML-DSA algorithms
    println!("  ML-DSA (FIPS 204) - Digital Signature Algorithm");
    for (algo, level) in [
        (Algorithm::MlDsa44, "Security Level 2 (128-bit)"),
        (Algorithm::MlDsa65, "Security Level 3 (192-bit)"),
        (Algorithm::MlDsa87, "Security Level 5 (256-bit)"),
    ] {
        let info = algo.info();
        println!(
            "    {:<12} {}  PK: {}B  SK: {}B  SIG: {}B",
            format!("{}", algo).to_lowercase(),
            level,
            info.pub_key_size,
            info.sec_key_size,
            info.output_size
        );
    }
    println!();

    // SLH-DSA algorithms
    println!("  SLH-DSA (FIPS 205) - Stateless Hash-Based Digital Signature Algorithm");
    for (algo, level) in [
        (Algorithm::SlhDsaShake128s, "Security Level 1 (small)"),
        (Algorithm::SlhDsaShake128f, "Security Level 1 (fast)"),
        (Algorithm::SlhDsaShake192s, "Security Level 3 (small)"),
        (Algorithm::SlhDsaShake192f, "Security Level 3 (fast)"),
        (Algorithm::SlhDsaShake256s, "Security Level 5 (small)"),
        (Algorithm::SlhDsaShake256f, "Security Level 5 (fast)"),
    ] {
        let info = algo.info();
        println!(
            "    {:<20} {}  PK: {}B  SK: {}B  SIG: {}B",
            format!("{}", algo).to_lowercase(),
            level,
            info.pub_key_size,
            info.sec_key_size,
            info.output_size
        );
    }
    println!();

    println!("Output formats:");
    println!("    hex    - Hexadecimal encoding (default)");
    println!("    base64 - Base64 encoding");
    println!("    pem    - PEM format with headers");
}
