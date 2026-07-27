use kylix_bench::BenchmarkResult;
use kylix_pqc::ml_dsa::{MlDsa44, MlDsa65, MlDsa87, Signer};
use kylix_pqc::ml_kem::{Kem, MlKem1024, MlKem512, MlKem768};
use kylix_pqc::slh_dsa::{
    SlhDsaShake128f, SlhDsaShake128s, SlhDsaShake192f, SlhDsaShake192s, SlhDsaShake256f,
    SlhDsaShake256s,
};
use rand::rng;
use std::time::{Duration, Instant};

use crate::cli::Algorithm;

/// Run a single benchmark and return timing data
fn run_benchmark<F>(iterations: u64, mut f: F) -> Vec<Duration>
where
    F: FnMut(),
{
    // Warmup
    for _ in 0..10 {
        f();
    }

    // Actual benchmark
    let mut times = Vec::with_capacity(iterations as usize);
    for _ in 0..iterations {
        let start = Instant::now();
        f();
        times.push(start.elapsed());
    }
    times
}

/// Generic benchmark for KEM algorithms
fn bench_kem_variant<K: Kem>(algo_name: &str, iterations: u64) -> Vec<BenchmarkResult> {
    let mut results = Vec::new();

    // KeyGen - RNG initialized outside the loop
    {
        let mut bench_rng = rng();
        let times = run_benchmark(iterations, || {
            K::keygen(&mut bench_rng).unwrap();
        });
        results.push(BenchmarkResult::new(
            algo_name, "keygen", iterations, &times,
        ));
    }

    // Encaps - RNG initialized outside the loop
    {
        let mut setup_rng = rng();
        let (_dk, ek) = K::keygen(&mut setup_rng).unwrap();
        let mut bench_rng = rng();
        let times = run_benchmark(iterations, || {
            K::encaps(&ek, &mut bench_rng).unwrap();
        });
        results.push(BenchmarkResult::new(
            algo_name, "encaps", iterations, &times,
        ));
    }

    // Decaps
    {
        let mut setup_rng = rng();
        let (dk, ek) = K::keygen(&mut setup_rng).unwrap();
        let (ct, _) = K::encaps(&ek, &mut setup_rng).unwrap();
        let times = run_benchmark(iterations, || {
            K::decaps(&dk, &ct).unwrap();
        });
        results.push(BenchmarkResult::new(
            algo_name, "decaps", iterations, &times,
        ));
    }

    results
}

/// Run benchmarks for ML-KEM algorithms
pub(super) fn bench_ml_kem(algo: Algorithm, iterations: u64) -> Vec<BenchmarkResult> {
    let algo_name = algo.to_string();
    match algo {
        Algorithm::MlKem512 => bench_kem_variant::<MlKem512>(&algo_name, iterations),
        Algorithm::MlKem768 => bench_kem_variant::<MlKem768>(&algo_name, iterations),
        Algorithm::MlKem1024 => bench_kem_variant::<MlKem1024>(&algo_name, iterations),
        _ => Vec::new(),
    }
}

/// Generic benchmark for DSA algorithms
fn bench_dsa_variant<S: Signer>(
    algo_name: &str,
    iterations: u64,
    message: &[u8],
) -> Vec<BenchmarkResult> {
    let mut results = Vec::new();

    // KeyGen - RNG initialized outside the loop
    {
        let mut bench_rng = rng();
        let times = run_benchmark(iterations, || {
            S::keygen(&mut bench_rng).unwrap();
        });
        results.push(BenchmarkResult::new(
            algo_name, "keygen", iterations, &times,
        ));
    }

    // Sign
    {
        let mut setup_rng = rng();
        let (sk, _vk) = S::keygen(&mut setup_rng).unwrap();
        let times = run_benchmark(iterations, || {
            S::sign(&sk, message).unwrap();
        });
        results.push(BenchmarkResult::new(algo_name, "sign", iterations, &times));
    }

    // Verify
    {
        let mut setup_rng = rng();
        let (sk, vk) = S::keygen(&mut setup_rng).unwrap();
        let sig = S::sign(&sk, message).unwrap();
        let times = run_benchmark(iterations, || {
            S::verify(&vk, message, &sig).unwrap();
        });
        results.push(BenchmarkResult::new(
            algo_name, "verify", iterations, &times,
        ));
    }

    results
}

/// Run benchmarks for ML-DSA algorithms
pub(super) fn bench_ml_dsa(algo: Algorithm, iterations: u64) -> Vec<BenchmarkResult> {
    let algo_name = algo.to_string();
    let message = b"The quick brown fox jumps over the lazy dog";

    match algo {
        Algorithm::MlDsa44 => bench_dsa_variant::<MlDsa44>(&algo_name, iterations, message),
        Algorithm::MlDsa65 => bench_dsa_variant::<MlDsa65>(&algo_name, iterations, message),
        Algorithm::MlDsa87 => bench_dsa_variant::<MlDsa87>(&algo_name, iterations, message),
        _ => Vec::new(),
    }
}

/// Run benchmarks for SLH-DSA algorithms
pub(super) fn bench_slh_dsa(algo: Algorithm, iterations: u64) -> Vec<BenchmarkResult> {
    let algo_name = algo.to_string();
    let message = b"The quick brown fox jumps over the lazy dog";

    match algo {
        Algorithm::SlhDsaShake128s => {
            bench_dsa_variant::<SlhDsaShake128s>(&algo_name, iterations, message)
        }
        Algorithm::SlhDsaShake128f => {
            bench_dsa_variant::<SlhDsaShake128f>(&algo_name, iterations, message)
        }
        Algorithm::SlhDsaShake192s => {
            bench_dsa_variant::<SlhDsaShake192s>(&algo_name, iterations, message)
        }
        Algorithm::SlhDsaShake192f => {
            bench_dsa_variant::<SlhDsaShake192f>(&algo_name, iterations, message)
        }
        Algorithm::SlhDsaShake256s => {
            bench_dsa_variant::<SlhDsaShake256s>(&algo_name, iterations, message)
        }
        Algorithm::SlhDsaShake256f => {
            bench_dsa_variant::<SlhDsaShake256f>(&algo_name, iterations, message)
        }
        _ => Vec::new(),
    }
}
