use anyhow::{bail, Result};
use clap::{Parser, Subcommand, ValueEnum};
use clap_complete::Shell;
use kylix_pqc::ml_dsa::{MlDsa44, MlDsa65, MlDsa87, Signer};
use kylix_pqc::ml_kem::{Kem, MlKem1024, MlKem512, MlKem768};
use kylix_pqc::slh_dsa::{
    SlhDsaShake128f, SlhDsaShake128s, SlhDsaShake192f, SlhDsaShake192s, SlhDsaShake256f,
    SlhDsaShake256s,
};
use std::path::PathBuf;

/// Post-quantum cryptography CLI tool
#[derive(Parser)]
#[command(name = "kylix")]
#[command(author, version, about, long_about = None)]
pub(crate) struct Cli {
    /// Enable verbose output
    #[arg(short, long, global = true)]
    pub verbose: bool,

    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub(crate) enum Commands {
    /// Generate a new key pair
    Keygen {
        /// Algorithm to use
        #[arg(short, long, value_enum, default_value = "ml-kem-768")]
        algo: Algorithm,

        /// Output file prefix (creates `<prefix>.pub` and `<prefix>.sec`)
        #[arg(short, long)]
        output: String,

        /// Encoding format (default: hex for output, auto-detect for input)
        #[arg(short, long, value_enum)]
        format: Option<OutputFormat>,
    },

    /// Encapsulate a shared secret using a public key
    Encaps {
        /// Path to the public key file
        #[arg(long = "pub")]
        pubkey: PathBuf,

        /// Output file for ciphertext (writes to stdout if not specified)
        #[arg(short, long)]
        output: Option<PathBuf>,

        /// Write shared secret to file instead of printing to console
        #[arg(long = "secret-file")]
        secret_file: Option<PathBuf>,

        /// Encoding format (default: hex for output, auto-detect for input)
        #[arg(short, long, value_enum)]
        format: Option<OutputFormat>,
    },

    /// Decapsulate a shared secret using a secret key
    Decaps {
        /// Path to the secret key file
        #[arg(long = "key")]
        key: PathBuf,

        /// Path to the ciphertext file (reads from stdin if not specified)
        #[arg(short, long)]
        input: Option<PathBuf>,

        /// Write shared secret to file instead of printing to console
        #[arg(long = "secret-file")]
        secret_file: Option<PathBuf>,

        /// Encoding format (default: hex for output, auto-detect for input)
        #[arg(short, long, value_enum)]
        format: Option<OutputFormat>,
    },

    /// Sign a file using ML-DSA or SLH-DSA
    Sign {
        /// Path to the signing key file
        #[arg(long = "key")]
        key: PathBuf,

        /// Input file to sign
        #[arg(short, long)]
        input: PathBuf,

        /// Output file for signature
        #[arg(short, long)]
        output: PathBuf,

        /// Encoding format (default: hex for output, auto-detect for input)
        #[arg(short, long, value_enum)]
        format: Option<OutputFormat>,

        /// Algorithm (required for SLH-DSA to distinguish -s/-f variants)
        #[arg(long, value_enum)]
        algo: Option<Algorithm>,
    },

    /// Verify a signature using ML-DSA or SLH-DSA
    Verify {
        /// Path to the verification (public) key file
        #[arg(long = "pub")]
        pubkey: PathBuf,

        /// Input file that was signed
        #[arg(short, long)]
        input: PathBuf,

        /// Signature file
        #[arg(short, long)]
        signature: PathBuf,

        /// Input encoding (auto-detect if omitted)
        #[arg(short, long, value_enum)]
        format: Option<OutputFormat>,

        /// Algorithm (required for SLH-DSA to distinguish -s/-f variants)
        #[arg(long, value_enum)]
        algo: Option<Algorithm>,
    },

    /// Display information about supported algorithms
    Info,

    /// Generate shell completion scripts
    Completions {
        /// Shell to generate completions for
        #[arg(value_enum)]
        shell: Shell,
    },

    /// Run performance benchmarks
    #[cfg(feature = "bench")]
    Bench {
        /// Algorithm to benchmark (defaults to all if not specified)
        #[arg(short, long, value_enum)]
        algo: Option<Algorithm>,

        /// Number of iterations
        #[arg(short, long, default_value = "1000")]
        iterations: u64,

        /// Output file for results (stdout if not specified)
        #[arg(short, long)]
        output: Option<PathBuf>,

        /// Output format
        #[arg(long, value_enum, default_value = "text")]
        report: crate::bench::ReportFormat,

        /// Compare with external PQC implementations (OpenSSL, liboqs)
        #[arg(long)]
        compare: bool,

        /// Specific tools to compare with (comma-separated: openssl,liboqs)
        #[arg(long, value_delimiter = ',')]
        with: Option<Vec<String>>,
    },
}

/// Supported post-quantum cryptographic algorithms for CLI operations.
///
/// This enum is used across all CLI subcommands (keygen, encaps, decaps, sign, verify, bench)
/// to specify which algorithm variant to use.
#[derive(Copy, Clone, PartialEq, Eq, ValueEnum)]
pub enum Algorithm {
    /// ML-KEM-512 (NIST Security Level 1, 128-bit)
    #[value(name = "ml-kem-512")]
    MlKem512,
    /// ML-KEM-768 (NIST Security Level 3, 192-bit)
    #[value(name = "ml-kem-768")]
    MlKem768,
    /// ML-KEM-1024 (NIST Security Level 5, 256-bit)
    #[value(name = "ml-kem-1024")]
    MlKem1024,
    /// ML-DSA-44 (NIST Security Level 2, 128-bit)
    #[value(name = "ml-dsa-44")]
    MlDsa44,
    /// ML-DSA-65 (NIST Security Level 3, 192-bit)
    #[value(name = "ml-dsa-65")]
    MlDsa65,
    /// ML-DSA-87 (NIST Security Level 5, 256-bit)
    #[value(name = "ml-dsa-87")]
    MlDsa87,
    /// SLH-DSA-SHAKE-128s (NIST Security Level 1, small signatures)
    #[value(name = "slh-dsa-shake-128s")]
    SlhDsaShake128s,
    /// SLH-DSA-SHAKE-128f (NIST Security Level 1, fast signing)
    #[value(name = "slh-dsa-shake-128f")]
    SlhDsaShake128f,
    /// SLH-DSA-SHAKE-192s (NIST Security Level 3, small signatures)
    #[value(name = "slh-dsa-shake-192s")]
    SlhDsaShake192s,
    /// SLH-DSA-SHAKE-192f (NIST Security Level 3, fast signing)
    #[value(name = "slh-dsa-shake-192f")]
    SlhDsaShake192f,
    /// SLH-DSA-SHAKE-256s (NIST Security Level 5, small signatures)
    #[value(name = "slh-dsa-shake-256s")]
    SlhDsaShake256s,
    /// SLH-DSA-SHAKE-256f (NIST Security Level 5, fast signing)
    #[value(name = "slh-dsa-shake-256f")]
    SlhDsaShake256f,
}

impl Algorithm {
    /// Returns true if this is a KEM algorithm
    pub(crate) fn is_kem(&self) -> bool {
        matches!(
            self,
            Algorithm::MlKem512 | Algorithm::MlKem768 | Algorithm::MlKem1024
        )
    }

    /// Returns true if this is an SLH-DSA algorithm
    pub(crate) fn is_slh_dsa(&self) -> bool {
        matches!(
            self,
            Algorithm::SlhDsaShake128s
                | Algorithm::SlhDsaShake128f
                | Algorithm::SlhDsaShake192s
                | Algorithm::SlhDsaShake192f
                | Algorithm::SlhDsaShake256s
                | Algorithm::SlhDsaShake256f
        )
    }
}

impl std::fmt::Display for Algorithm {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Algorithm::MlKem512 => write!(f, "ML-KEM-512"),
            Algorithm::MlKem768 => write!(f, "ML-KEM-768"),
            Algorithm::MlKem1024 => write!(f, "ML-KEM-1024"),
            Algorithm::MlDsa44 => write!(f, "ML-DSA-44"),
            Algorithm::MlDsa65 => write!(f, "ML-DSA-65"),
            Algorithm::MlDsa87 => write!(f, "ML-DSA-87"),
            Algorithm::SlhDsaShake128s => write!(f, "SLH-DSA-SHAKE-128s"),
            Algorithm::SlhDsaShake128f => write!(f, "SLH-DSA-SHAKE-128f"),
            Algorithm::SlhDsaShake192s => write!(f, "SLH-DSA-SHAKE-192s"),
            Algorithm::SlhDsaShake192f => write!(f, "SLH-DSA-SHAKE-192f"),
            Algorithm::SlhDsaShake256s => write!(f, "SLH-DSA-SHAKE-256s"),
            Algorithm::SlhDsaShake256f => write!(f, "SLH-DSA-SHAKE-256f"),
        }
    }
}

/// Algorithm metadata for size detection and display.
pub struct AlgorithmInfo {
    pub pub_key_size: usize,
    pub sec_key_size: usize,
    pub output_size: usize, // ciphertext for KEM, signature for DSA
    pub pub_label: &'static str,
    pub sec_label: &'static str,
}

impl Algorithm {
    /// Get algorithm metadata.
    pub const fn info(&self) -> AlgorithmInfo {
        match self {
            Algorithm::MlKem512 => AlgorithmInfo {
                pub_key_size: MlKem512::ENCAPSULATION_KEY_SIZE,
                sec_key_size: MlKem512::DECAPSULATION_KEY_SIZE,
                output_size: MlKem512::CIPHERTEXT_SIZE,
                pub_label: "ML-KEM PUBLIC KEY",
                sec_label: "ML-KEM SECRET KEY",
            },
            Algorithm::MlKem768 => AlgorithmInfo {
                pub_key_size: MlKem768::ENCAPSULATION_KEY_SIZE,
                sec_key_size: MlKem768::DECAPSULATION_KEY_SIZE,
                output_size: MlKem768::CIPHERTEXT_SIZE,
                pub_label: "ML-KEM PUBLIC KEY",
                sec_label: "ML-KEM SECRET KEY",
            },
            Algorithm::MlKem1024 => AlgorithmInfo {
                pub_key_size: MlKem1024::ENCAPSULATION_KEY_SIZE,
                sec_key_size: MlKem1024::DECAPSULATION_KEY_SIZE,
                output_size: MlKem1024::CIPHERTEXT_SIZE,
                pub_label: "ML-KEM PUBLIC KEY",
                sec_label: "ML-KEM SECRET KEY",
            },
            Algorithm::MlDsa44 => AlgorithmInfo {
                pub_key_size: MlDsa44::VERIFICATION_KEY_SIZE,
                sec_key_size: MlDsa44::SIGNING_KEY_SIZE,
                output_size: MlDsa44::SIGNATURE_SIZE,
                pub_label: "ML-DSA PUBLIC KEY",
                sec_label: "ML-DSA SECRET KEY",
            },
            Algorithm::MlDsa65 => AlgorithmInfo {
                pub_key_size: MlDsa65::VERIFICATION_KEY_SIZE,
                sec_key_size: MlDsa65::SIGNING_KEY_SIZE,
                output_size: MlDsa65::SIGNATURE_SIZE,
                pub_label: "ML-DSA PUBLIC KEY",
                sec_label: "ML-DSA SECRET KEY",
            },
            Algorithm::MlDsa87 => AlgorithmInfo {
                pub_key_size: MlDsa87::VERIFICATION_KEY_SIZE,
                sec_key_size: MlDsa87::SIGNING_KEY_SIZE,
                output_size: MlDsa87::SIGNATURE_SIZE,
                pub_label: "ML-DSA PUBLIC KEY",
                sec_label: "ML-DSA SECRET KEY",
            },
            Algorithm::SlhDsaShake128s => AlgorithmInfo {
                pub_key_size: SlhDsaShake128s::VERIFICATION_KEY_SIZE,
                sec_key_size: SlhDsaShake128s::SIGNING_KEY_SIZE,
                output_size: SlhDsaShake128s::SIGNATURE_SIZE,
                pub_label: "SLH-DSA PUBLIC KEY",
                sec_label: "SLH-DSA SECRET KEY",
            },
            Algorithm::SlhDsaShake128f => AlgorithmInfo {
                pub_key_size: SlhDsaShake128f::VERIFICATION_KEY_SIZE,
                sec_key_size: SlhDsaShake128f::SIGNING_KEY_SIZE,
                output_size: SlhDsaShake128f::SIGNATURE_SIZE,
                pub_label: "SLH-DSA PUBLIC KEY",
                sec_label: "SLH-DSA SECRET KEY",
            },
            Algorithm::SlhDsaShake192s => AlgorithmInfo {
                pub_key_size: SlhDsaShake192s::VERIFICATION_KEY_SIZE,
                sec_key_size: SlhDsaShake192s::SIGNING_KEY_SIZE,
                output_size: SlhDsaShake192s::SIGNATURE_SIZE,
                pub_label: "SLH-DSA PUBLIC KEY",
                sec_label: "SLH-DSA SECRET KEY",
            },
            Algorithm::SlhDsaShake192f => AlgorithmInfo {
                pub_key_size: SlhDsaShake192f::VERIFICATION_KEY_SIZE,
                sec_key_size: SlhDsaShake192f::SIGNING_KEY_SIZE,
                output_size: SlhDsaShake192f::SIGNATURE_SIZE,
                pub_label: "SLH-DSA PUBLIC KEY",
                sec_label: "SLH-DSA SECRET KEY",
            },
            Algorithm::SlhDsaShake256s => AlgorithmInfo {
                pub_key_size: SlhDsaShake256s::VERIFICATION_KEY_SIZE,
                sec_key_size: SlhDsaShake256s::SIGNING_KEY_SIZE,
                output_size: SlhDsaShake256s::SIGNATURE_SIZE,
                pub_label: "SLH-DSA PUBLIC KEY",
                sec_label: "SLH-DSA SECRET KEY",
            },
            Algorithm::SlhDsaShake256f => AlgorithmInfo {
                pub_key_size: SlhDsaShake256f::VERIFICATION_KEY_SIZE,
                sec_key_size: SlhDsaShake256f::SIGNING_KEY_SIZE,
                output_size: SlhDsaShake256f::SIGNATURE_SIZE,
                pub_label: "SLH-DSA PUBLIC KEY",
                sec_label: "SLH-DSA SECRET KEY",
            },
        }
    }

    /// Detect KEM algorithm from public key size.
    pub(crate) fn detect_kem_from_pub_key(size: usize) -> Result<Self> {
        match size {
            MlKem512::ENCAPSULATION_KEY_SIZE => Ok(Algorithm::MlKem512),
            MlKem768::ENCAPSULATION_KEY_SIZE => Ok(Algorithm::MlKem768),
            MlKem1024::ENCAPSULATION_KEY_SIZE => Ok(Algorithm::MlKem1024),
            _ => bail!(
                "Unknown public key size: {} bytes. Expected {}, {}, or {}.",
                size,
                MlKem512::ENCAPSULATION_KEY_SIZE,
                MlKem768::ENCAPSULATION_KEY_SIZE,
                MlKem1024::ENCAPSULATION_KEY_SIZE
            ),
        }
    }

    /// Detect KEM algorithm from secret key size.
    pub(crate) fn detect_kem_from_sec_key(size: usize) -> Result<Self> {
        match size {
            MlKem512::DECAPSULATION_KEY_SIZE => Ok(Algorithm::MlKem512),
            MlKem768::DECAPSULATION_KEY_SIZE => Ok(Algorithm::MlKem768),
            MlKem1024::DECAPSULATION_KEY_SIZE => Ok(Algorithm::MlKem1024),
            _ => bail!(
                "Unknown secret key size: {} bytes. Expected {}, {}, or {}.",
                size,
                MlKem512::DECAPSULATION_KEY_SIZE,
                MlKem768::DECAPSULATION_KEY_SIZE,
                MlKem1024::DECAPSULATION_KEY_SIZE
            ),
        }
    }

    /// Detect DSA algorithm from signing key size.
    /// SLH-DSA small/fast variants share key sizes, so auto-detection is ambiguous.
    pub(crate) fn detect_dsa_from_signing_key(size: usize) -> Result<Self> {
        match size {
            MlDsa44::SIGNING_KEY_SIZE => Ok(Algorithm::MlDsa44),
            MlDsa65::SIGNING_KEY_SIZE => Ok(Algorithm::MlDsa65),
            MlDsa87::SIGNING_KEY_SIZE => Ok(Algorithm::MlDsa87),
            SlhDsaShake128f::SIGNING_KEY_SIZE => bail!(
                "SLH-DSA key detected ({} bytes) but small vs fast variant is ambiguous. \
                 Please specify the algorithm explicitly with --algo \
                 (e.g. --algo slh-dsa-shake-128s or slh-dsa-shake-128f).",
                size
            ),
            SlhDsaShake192f::SIGNING_KEY_SIZE => bail!(
                "SLH-DSA key detected ({} bytes) but small vs fast variant is ambiguous. \
                 Please specify the algorithm explicitly with --algo \
                 (e.g. --algo slh-dsa-shake-192s or slh-dsa-shake-192f).",
                size
            ),
            SlhDsaShake256f::SIGNING_KEY_SIZE => bail!(
                "SLH-DSA key detected ({} bytes) but small vs fast variant is ambiguous. \
                 Please specify the algorithm explicitly with --algo \
                 (e.g. --algo slh-dsa-shake-256s or slh-dsa-shake-256f).",
                size
            ),
            _ => bail!(
                "Unknown signing key size: {} bytes. Expected ML-DSA (2560/4032/4896) or SLH-DSA (64/96/128).",
                size
            ),
        }
    }

    /// Detect DSA algorithm from verification key size.
    /// SLH-DSA small/fast variants share key sizes, so auto-detection is ambiguous.
    pub(crate) fn detect_dsa_from_verification_key(size: usize) -> Result<Self> {
        match size {
            MlDsa44::VERIFICATION_KEY_SIZE => Ok(Algorithm::MlDsa44),
            MlDsa65::VERIFICATION_KEY_SIZE => Ok(Algorithm::MlDsa65),
            MlDsa87::VERIFICATION_KEY_SIZE => Ok(Algorithm::MlDsa87),
            SlhDsaShake128f::VERIFICATION_KEY_SIZE => bail!(
                "SLH-DSA key detected ({} bytes) but small vs fast variant is ambiguous. \
                 Please specify the algorithm explicitly with --algo \
                 (e.g. --algo slh-dsa-shake-128s or slh-dsa-shake-128f).",
                size
            ),
            SlhDsaShake192f::VERIFICATION_KEY_SIZE => bail!(
                "SLH-DSA key detected ({} bytes) but small vs fast variant is ambiguous. \
                 Please specify the algorithm explicitly with --algo \
                 (e.g. --algo slh-dsa-shake-192s or slh-dsa-shake-192f).",
                size
            ),
            SlhDsaShake256f::VERIFICATION_KEY_SIZE => bail!(
                "SLH-DSA key detected ({} bytes) but small vs fast variant is ambiguous. \
                 Please specify the algorithm explicitly with --algo \
                 (e.g. --algo slh-dsa-shake-256s or slh-dsa-shake-256f).",
                size
            ),
            _ => bail!(
                "Unknown verification key size: {} bytes. Expected ML-DSA (1312/1952/2592) or SLH-DSA (32/48/64).",
                size
            ),
        }
    }
}

#[derive(Copy, Clone, PartialEq, Eq, ValueEnum)]
pub(crate) enum OutputFormat {
    /// Hexadecimal encoding
    Hex,
    /// Base64 encoding
    Base64,
    /// PEM format
    Pem,
}

impl OutputFormat {
    /// Default format used for output when `--format` is not specified.
    pub(crate) const DEFAULT: Self = Self::Hex;
}
