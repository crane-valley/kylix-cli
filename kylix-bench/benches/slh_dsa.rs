//! SLH-DSA benchmarks
//!
//! Only benchmarks fast (-f) variants to keep CI times reasonable.

use criterion::{criterion_group, criterion_main, Criterion};
use kylix_pqc::slh_dsa::{Signer, SlhDsaShake128f, SlhDsaShake192f, SlhDsaShake256f};
use rand::{rng, rngs::StdRng, SeedableRng};

const MESSAGE: &[u8] = b"Benchmark message for SLH-DSA signature testing";

/// Create a seeded RNG for reproducible benchmarks.
fn seeded_rng() -> StdRng {
    StdRng::seed_from_u64(0x4b594c4958)
}

fn bench_slh_dsa_shake_128f(c: &mut Criterion) {
    let mut group = c.benchmark_group("SLH-DSA-SHAKE-128f");

    group.bench_function("keygen", |b| {
        b.iter(|| SlhDsaShake128f::keygen(&mut rng()).unwrap())
    });

    // Use seeded RNG for reproducible sign/verify benchmarks
    let (sk, vk) = SlhDsaShake128f::keygen(&mut seeded_rng()).unwrap();

    group.bench_function("sign", |b| {
        b.iter(|| SlhDsaShake128f::sign(&sk, MESSAGE).unwrap())
    });

    let sig = SlhDsaShake128f::sign(&sk, MESSAGE).unwrap();

    group.bench_function("verify", |b| {
        b.iter(|| SlhDsaShake128f::verify(&vk, MESSAGE, &sig).unwrap())
    });

    group.finish();
}

fn bench_slh_dsa_shake_192f(c: &mut Criterion) {
    let mut group = c.benchmark_group("SLH-DSA-SHAKE-192f");

    group.bench_function("keygen", |b| {
        b.iter(|| SlhDsaShake192f::keygen(&mut rng()).unwrap())
    });

    // Use seeded RNG for reproducible sign/verify benchmarks
    let (sk, vk) = SlhDsaShake192f::keygen(&mut seeded_rng()).unwrap();

    group.bench_function("sign", |b| {
        b.iter(|| SlhDsaShake192f::sign(&sk, MESSAGE).unwrap())
    });

    let sig = SlhDsaShake192f::sign(&sk, MESSAGE).unwrap();

    group.bench_function("verify", |b| {
        b.iter(|| SlhDsaShake192f::verify(&vk, MESSAGE, &sig).unwrap())
    });

    group.finish();
}

fn bench_slh_dsa_shake_256f(c: &mut Criterion) {
    let mut group = c.benchmark_group("SLH-DSA-SHAKE-256f");

    group.bench_function("keygen", |b| {
        b.iter(|| SlhDsaShake256f::keygen(&mut rng()).unwrap())
    });

    // Use seeded RNG for reproducible sign/verify benchmarks
    let (sk, vk) = SlhDsaShake256f::keygen(&mut seeded_rng()).unwrap();

    group.bench_function("sign", |b| {
        b.iter(|| SlhDsaShake256f::sign(&sk, MESSAGE).unwrap())
    });

    let sig = SlhDsaShake256f::sign(&sk, MESSAGE).unwrap();

    group.bench_function("verify", |b| {
        b.iter(|| SlhDsaShake256f::verify(&vk, MESSAGE, &sig).unwrap())
    });

    group.finish();
}

criterion_group!(
    benches,
    bench_slh_dsa_shake_128f,
    bench_slh_dsa_shake_192f,
    bench_slh_dsa_shake_256f
);
criterion_main!(benches);
