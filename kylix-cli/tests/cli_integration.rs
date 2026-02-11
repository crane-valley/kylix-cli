//! Integration tests for the Kylix CLI.
//!
//! These tests exercise the CLI binary end-to-end, verifying that:
//! - Commands execute successfully
//! - Key generation produces valid keys
//! - Encapsulation/decapsulation roundtrip works
//! - Signing/verification roundtrip works
//! - Error handling is correct

use assert_cmd::Command;
use predicates::prelude::*;
use std::fs;
use tempfile::TempDir;

/// Get a command for the kylix binary
fn kylix() -> Command {
    #[allow(deprecated)]
    Command::cargo_bin("kylix").unwrap()
}

mod info_command {
    use super::*;

    #[test]
    fn test_info_displays_algorithms() {
        kylix()
            .arg("info")
            .assert()
            .success()
            .stdout(predicate::str::contains("ML-KEM"))
            .stdout(predicate::str::contains("ML-DSA"))
            .stdout(predicate::str::contains("ml-kem-512"))
            .stdout(predicate::str::contains("ml-kem-768"))
            .stdout(predicate::str::contains("ml-kem-1024"))
            .stdout(predicate::str::contains("ml-dsa-44"))
            .stdout(predicate::str::contains("ml-dsa-65"))
            .stdout(predicate::str::contains("ml-dsa-87"));
    }
}

mod keygen_command {
    use super::*;

    #[test]
    fn test_keygen_ml_kem_768_hex() {
        let tmp = TempDir::new().unwrap();
        let output = tmp.path().join("test_key");

        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(output.to_str().unwrap())
            .arg("-f")
            .arg("hex")
            .assert()
            .success()
            .stdout(predicate::str::contains("Public key written to"))
            .stdout(predicate::str::contains("Secret key written to"));

        // Verify files were created
        let pub_path = tmp.path().join("test_key.pub");
        let sec_path = tmp.path().join("test_key.sec");
        assert!(pub_path.exists(), "Public key file should exist");
        assert!(sec_path.exists(), "Secret key file should exist");

        // Verify hex format (all characters are hex digits)
        let pub_content = fs::read_to_string(&pub_path).unwrap();
        assert!(
            pub_content.trim().chars().all(|c| c.is_ascii_hexdigit()),
            "Public key should be hex encoded"
        );
    }

    #[test]
    fn test_keygen_ml_kem_512_base64() {
        let tmp = TempDir::new().unwrap();
        let output = tmp.path().join("test_key");

        kylix()
            .args(["keygen", "-a", "ml-kem-512", "-o"])
            .arg(output.to_str().unwrap())
            .arg("-f")
            .arg("base64")
            .assert()
            .success();

        let pub_path = tmp.path().join("test_key.pub");
        let pub_content = fs::read_to_string(&pub_path).unwrap();

        // Base64 characters
        assert!(
            pub_content
                .trim()
                .chars()
                .all(|c| c.is_ascii_alphanumeric() || c == '+' || c == '/' || c == '='),
            "Public key should be base64 encoded"
        );
    }

    #[test]
    fn test_keygen_ml_kem_1024_pem() {
        let tmp = TempDir::new().unwrap();
        let output = tmp.path().join("test_key");

        kylix()
            .args(["keygen", "-a", "ml-kem-1024", "-o"])
            .arg(output.to_str().unwrap())
            .arg("-f")
            .arg("pem")
            .assert()
            .success();

        let pub_path = tmp.path().join("test_key.pub");
        let pub_content = fs::read_to_string(&pub_path).unwrap();

        assert!(
            pub_content.starts_with("-----BEGIN ML-KEM PUBLIC KEY-----"),
            "PEM should have correct header"
        );
        assert!(
            pub_content.contains("-----END ML-KEM PUBLIC KEY-----"),
            "PEM should have correct footer"
        );
    }

    #[test]
    fn test_keygen_ml_dsa_65() {
        let tmp = TempDir::new().unwrap();
        let output = tmp.path().join("dsa_key");

        kylix()
            .args(["keygen", "-a", "ml-dsa-65", "-o"])
            .arg(output.to_str().unwrap())
            .assert()
            .success();

        let pub_path = tmp.path().join("dsa_key.pub");
        let sec_path = tmp.path().join("dsa_key.sec");
        assert!(pub_path.exists(), "Public key file should exist");
        assert!(sec_path.exists(), "Secret key file should exist");
    }

    #[test]
    fn test_keygen_all_algorithms() {
        let algorithms = [
            "ml-kem-512",
            "ml-kem-768",
            "ml-kem-1024",
            "ml-dsa-44",
            "ml-dsa-65",
            "ml-dsa-87",
            "slh-dsa-shake-128s",
            "slh-dsa-shake-128f",
            "slh-dsa-shake-192s",
            "slh-dsa-shake-192f",
            "slh-dsa-shake-256s",
            "slh-dsa-shake-256f",
        ];

        for algo in algorithms {
            let tmp = TempDir::new().unwrap();
            let output = tmp.path().join("key");

            kylix()
                .args(["keygen", "-a", algo, "-o"])
                .arg(output.to_str().unwrap())
                .assert()
                .success();
        }
    }
}

mod encaps_decaps_roundtrip {
    use super::*;

    #[test]
    fn test_ml_kem_768_roundtrip() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ciphertext");

        // Generate keys
        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        // Encapsulate
        let encaps_output = kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        // Extract shared secret from encaps output
        let encaps_stdout = String::from_utf8_lossy(&encaps_output.get_output().stdout);
        let ss_encaps = encaps_stdout
            .lines()
            .find(|l| l.starts_with("Shared secret:"))
            .map(|l| l.trim_start_matches("Shared secret:").trim())
            .expect("Should have shared secret in output");

        // Decapsulate
        let decaps_output = kylix()
            .args(["decaps", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        let ss_decaps = String::from_utf8_lossy(&decaps_output.get_output().stdout);

        // Both shared secrets should match
        assert_eq!(
            ss_encaps.trim(),
            ss_decaps.trim(),
            "Encapsulated and decapsulated shared secrets should match"
        );
    }

    #[test]
    fn test_ml_kem_512_roundtrip() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ciphertext");

        kylix()
            .args(["keygen", "-a", "ml-kem-512", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        let encaps_output = kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        let encaps_stdout = String::from_utf8_lossy(&encaps_output.get_output().stdout);
        let ss_encaps = encaps_stdout
            .lines()
            .find(|l| l.starts_with("Shared secret:"))
            .map(|l| l.trim_start_matches("Shared secret:").trim())
            .expect("Should have shared secret in encaps output");

        let decaps_output = kylix()
            .args(["decaps", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        let ss_decaps = String::from_utf8_lossy(&decaps_output.get_output().stdout);
        assert_eq!(
            ss_encaps.trim(),
            ss_decaps.trim(),
            "Encapsulated and decapsulated shared secrets should match"
        );
    }

    /// Helper function to test ML-KEM roundtrip for any variant
    fn test_ml_kem_roundtrip(algo: &str) {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ciphertext");

        // Generate keys
        kylix()
            .args(["keygen", "-a", algo, "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        // Encapsulate
        let encaps_output = kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        let encaps_stdout = String::from_utf8_lossy(&encaps_output.get_output().stdout);
        let ss_encaps = encaps_stdout
            .lines()
            .find(|l| l.starts_with("Shared secret:"))
            .map(|l| l.trim_start_matches("Shared secret:").trim())
            .expect("Should have shared secret in encaps output");

        // Decapsulate
        let decaps_output = kylix()
            .args(["decaps", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        let ss_decaps = String::from_utf8_lossy(&decaps_output.get_output().stdout);
        assert_eq!(
            ss_encaps.trim(),
            ss_decaps.trim(),
            "Encapsulated and decapsulated shared secrets should match for {}",
            algo
        );
    }

    #[test]
    fn test_ml_kem_1024_roundtrip() {
        test_ml_kem_roundtrip("ml-kem-1024");
    }
}

mod sign_verify_roundtrip {
    use super::*;

    /// Helper function to test ML-DSA roundtrip for any variant
    fn test_ml_dsa_roundtrip(algo: &str, message: &[u8]) {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let msg_path = tmp.path().join("message.txt");
        let sig_path = tmp.path().join("signature");

        // Create test message
        fs::write(&msg_path, message).unwrap();

        // Generate keys
        kylix()
            .args(["keygen", "-a", algo, "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        // Sign
        kylix()
            .args(["sign", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(msg_path.to_str().unwrap())
            .arg("-o")
            .arg(sig_path.to_str().unwrap())
            .assert()
            .success()
            .stdout(predicate::str::contains("Signature written to"));

        // Verify
        kylix()
            .args(["verify", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-i")
            .arg(msg_path.to_str().unwrap())
            .arg("-s")
            .arg(sig_path.to_str().unwrap())
            .assert()
            .success()
            .stdout(predicate::str::contains("Signature is valid"));
    }

    #[test]
    fn test_ml_dsa_65_roundtrip() {
        test_ml_dsa_roundtrip("ml-dsa-65", b"Hello, post-quantum world!");
    }

    #[test]
    fn test_ml_dsa_44_roundtrip() {
        test_ml_dsa_roundtrip("ml-dsa-44", b"Test message for ML-DSA-44");
    }

    #[test]
    fn test_ml_dsa_87_roundtrip() {
        test_ml_dsa_roundtrip("ml-dsa-87", b"Test message for ML-DSA-87");
    }

    #[test]
    fn test_verification_fails_with_wrong_message() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let msg_path = tmp.path().join("message.txt");
        let wrong_msg_path = tmp.path().join("wrong_message.txt");
        let sig_path = tmp.path().join("signature");

        fs::write(&msg_path, b"Original message").unwrap();
        fs::write(&wrong_msg_path, b"Tampered message").unwrap();

        kylix()
            .args(["keygen", "-a", "ml-dsa-65", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        kylix()
            .args(["sign", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(msg_path.to_str().unwrap())
            .arg("-o")
            .arg(sig_path.to_str().unwrap())
            .assert()
            .success();

        // Verification should fail with wrong message
        kylix()
            .args(["verify", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-i")
            .arg(wrong_msg_path.to_str().unwrap())
            .arg("-s")
            .arg(sig_path.to_str().unwrap())
            .assert()
            .failure()
            .stderr(predicate::str::contains("verification failed"));
    }
}

mod slh_dsa_roundtrip {
    use super::*;

    /// Helper function to test SLH-DSA sign/verify roundtrip.
    /// SLH-DSA requires explicit --algo since s/f variants share key sizes.
    fn test_slh_dsa_roundtrip(algo: &str, message: &[u8]) {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let msg_path = tmp.path().join("message.txt");
        let sig_path = tmp.path().join("signature");

        // Create test message
        fs::write(&msg_path, message).unwrap();

        // Generate keys
        kylix()
            .args(["keygen", "-a", algo, "-o"])
            .arg(&key_path)
            .assert()
            .success();

        // Sign (must pass --algo for SLH-DSA)
        kylix()
            .args(["sign", "--key"])
            .arg(tmp.path().join("key.sec"))
            .arg("-i")
            .arg(&msg_path)
            .arg("-o")
            .arg(&sig_path)
            .arg("--algo")
            .arg(algo)
            .assert()
            .success()
            .stdout(predicate::str::contains("Signature written to"));

        // Verify (must pass --algo for SLH-DSA)
        kylix()
            .args(["verify", "--pub"])
            .arg(tmp.path().join("key.pub"))
            .arg("-i")
            .arg(&msg_path)
            .arg("-s")
            .arg(&sig_path)
            .arg("--algo")
            .arg(algo)
            .assert()
            .success()
            .stdout(predicate::str::contains("Signature is valid"));
    }

    #[test]
    fn test_slh_dsa_shake_128f_roundtrip() {
        test_slh_dsa_roundtrip("slh-dsa-shake-128f", b"Hello, SLH-DSA!");
    }

    #[test]
    fn test_slh_dsa_sign_without_algo_fails() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let msg_path = tmp.path().join("message.txt");
        let sig_path = tmp.path().join("signature");

        fs::write(&msg_path, b"test message").unwrap();

        // Generate SLH-DSA keys
        kylix()
            .args(["keygen", "-a", "slh-dsa-shake-128f", "-o"])
            .arg(&key_path)
            .assert()
            .success();

        // Sign without --algo should fail (ambiguous s/f variant)
        kylix()
            .args(["sign", "--key"])
            .arg(tmp.path().join("key.sec"))
            .arg("-i")
            .arg(&msg_path)
            .arg("-o")
            .arg(&sig_path)
            .assert()
            .failure()
            .stderr(predicate::str::contains("ambiguous").and(predicate::str::contains("--algo")));
    }

    #[test]
    fn test_slh_dsa_verify_without_algo_fails() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let msg_path = tmp.path().join("message.txt");
        let sig_path = tmp.path().join("signature");

        fs::write(&msg_path, b"test message").unwrap();

        // Generate SLH-DSA keys
        kylix()
            .args(["keygen", "-a", "slh-dsa-shake-128f", "-o"])
            .arg(&key_path)
            .assert()
            .success();

        // Sign with explicit --algo (required)
        kylix()
            .args(["sign", "--key"])
            .arg(tmp.path().join("key.sec"))
            .arg("-i")
            .arg(&msg_path)
            .arg("-o")
            .arg(&sig_path)
            .arg("--algo")
            .arg("slh-dsa-shake-128f")
            .assert()
            .success();

        // Verify without --algo should fail (ambiguous small/fast variant)
        kylix()
            .args(["verify", "--pub"])
            .arg(tmp.path().join("key.pub"))
            .arg("-i")
            .arg(&msg_path)
            .arg("-s")
            .arg(&sig_path)
            .assert()
            .failure()
            .stderr(predicate::str::contains("ambiguous").and(predicate::str::contains("--algo")));
    }
}

mod error_handling {
    use super::*;

    #[test]
    fn test_missing_required_args() {
        // keygen without output
        kylix()
            .arg("keygen")
            .assert()
            .failure()
            .stderr(predicate::str::contains("required"));
    }

    #[test]
    fn test_invalid_algorithm() {
        let tmp = TempDir::new().unwrap();
        let output = tmp.path().join("key");

        kylix()
            .args(["keygen", "-a", "invalid-algo", "-o"])
            .arg(output.to_str().unwrap())
            .assert()
            .failure();
    }

    #[test]
    fn test_nonexistent_key_file() {
        kylix()
            .args(["encaps", "--pub", "/nonexistent/path/key.pub"])
            .assert()
            .failure();
    }

    #[test]
    #[cfg(feature = "bench")]
    fn test_bench_zero_iterations() {
        kylix()
            .args(["bench", "--iterations", "0"])
            .assert()
            .failure()
            .stderr(predicate::str::contains("at least 1"));
    }
}

#[cfg(feature = "bench")]
mod bench_command {
    use super::*;

    #[test]
    fn test_bench_single_algorithm() {
        kylix()
            .args(["bench", "-a", "ml-kem-768", "-i", "10"])
            .assert()
            .success()
            .stdout(predicate::str::contains("ML-KEM-768"))
            .stdout(predicate::str::contains("keygen"))
            .stdout(predicate::str::contains("encaps"))
            .stdout(predicate::str::contains("decaps"));
    }

    #[test]
    fn test_bench_json_output() {
        let output = kylix()
            .args(["bench", "-a", "ml-dsa-44", "-i", "5", "--report", "json"])
            .assert()
            .success();

        let stdout = String::from_utf8_lossy(&output.get_output().stdout);
        // Should be valid JSON
        assert!(
            serde_json::from_str::<serde_json::Value>(&stdout).is_ok(),
            "Output should be valid JSON"
        );
    }

    #[test]
    fn test_bench_markdown_output() {
        kylix()
            .args([
                "bench",
                "-a",
                "ml-kem-512",
                "-i",
                "5",
                "--report",
                "markdown",
            ])
            .assert()
            .success()
            .stdout(predicate::str::contains("| Algorithm |"))
            .stdout(predicate::str::contains("| ML-KEM-512 |"));
    }
}

mod format_auto_detection {
    use super::*;

    #[test]
    fn test_hex_format_auto_detection() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");

        // Generate in hex
        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .arg("-f")
            .arg("hex")
            .assert()
            .success();

        // Encaps should auto-detect hex format
        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();
    }

    #[test]
    fn test_base64_format_auto_detection() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");

        // Generate in base64
        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .arg("-f")
            .arg("base64")
            .assert()
            .success();

        // Encaps should auto-detect base64 format
        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();
    }

    #[test]
    fn test_pem_format_auto_detection() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");

        // Generate in PEM
        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .arg("-f")
            .arg("pem")
            .assert()
            .success();

        // Encaps should auto-detect PEM format
        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();
    }
}

mod secret_file {
    use super::*;

    #[test]
    fn test_encaps_secret_file() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");
        let ss_path = tmp.path().join("ss");

        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        // Encaps with both -o and --secret-file
        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .arg("--secret-file")
            .arg(ss_path.to_str().unwrap())
            .assert()
            .success()
            .stdout(predicate::str::contains("Shared secret").not());

        assert!(ss_path.exists(), "Secret file should exist");
        let ss_content = fs::read_to_string(&ss_path).unwrap();
        assert!(
            !ss_content.trim().is_empty(),
            "Secret file should not be empty"
        );
    }

    #[test]
    fn test_encaps_secret_file_without_output() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ss_path = tmp.path().join("ss");

        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        // Encaps with --secret-file only (ciphertext to stdout)
        let output = kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("--secret-file")
            .arg(ss_path.to_str().unwrap())
            .assert()
            .success();

        // Ciphertext should be on stdout
        let stdout = String::from_utf8_lossy(&output.get_output().stdout);
        assert!(!stdout.trim().is_empty(), "Ciphertext should be on stdout");
        // Shared secret should NOT be leaked to stderr
        let stderr = String::from_utf8_lossy(&output.get_output().stderr);
        assert!(
            !stderr.contains("Shared secret"),
            "Shared secret should not appear on stderr"
        );

        assert!(ss_path.exists(), "Secret file should exist");
    }

    #[test]
    fn test_decaps_secret_file() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");
        let ss_path = tmp.path().join("ss");

        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .assert()
            .success();

        // Decaps with --secret-file
        kylix()
            .args(["decaps", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(ct_path.to_str().unwrap())
            .arg("--secret-file")
            .arg(ss_path.to_str().unwrap())
            .assert()
            .success()
            .stdout(predicate::str::is_empty());

        assert!(ss_path.exists(), "Secret file should exist");
        let ss_content = fs::read_to_string(&ss_path).unwrap();
        assert!(
            !ss_content.trim().is_empty(),
            "Secret file should not be empty"
        );
    }

    #[test]
    fn test_secret_file_roundtrip() {
        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");
        let ss_encaps_path = tmp.path().join("ss_encaps");
        let ss_decaps_path = tmp.path().join("ss_decaps");

        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .arg("--secret-file")
            .arg(ss_encaps_path.to_str().unwrap())
            .assert()
            .success();

        kylix()
            .args(["decaps", "--key"])
            .arg(tmp.path().join("key.sec").to_str().unwrap())
            .arg("-i")
            .arg(ct_path.to_str().unwrap())
            .arg("--secret-file")
            .arg(ss_decaps_path.to_str().unwrap())
            .assert()
            .success();

        let ss_encaps = fs::read_to_string(&ss_encaps_path).unwrap();
        let ss_decaps = fs::read_to_string(&ss_decaps_path).unwrap();
        assert_eq!(
            ss_encaps.trim(),
            ss_decaps.trim(),
            "Encaps and decaps shared secrets should match"
        );
    }

    #[cfg(unix)]
    #[test]
    fn test_secret_file_permissions() {
        use std::os::unix::fs::PermissionsExt;

        let tmp = TempDir::new().unwrap();
        let key_path = tmp.path().join("key");
        let ct_path = tmp.path().join("ct");
        let ss_path = tmp.path().join("ss");

        kylix()
            .args(["keygen", "-a", "ml-kem-768", "-o"])
            .arg(key_path.to_str().unwrap())
            .assert()
            .success();

        kylix()
            .args(["encaps", "--pub"])
            .arg(tmp.path().join("key.pub").to_str().unwrap())
            .arg("-o")
            .arg(ct_path.to_str().unwrap())
            .arg("--secret-file")
            .arg(ss_path.to_str().unwrap())
            .assert()
            .success();

        let mode = fs::metadata(&ss_path).unwrap().permissions().mode() & 0o777;
        assert_eq!(mode, 0o600, "Secret file should have 0o600 permissions");
    }
}
