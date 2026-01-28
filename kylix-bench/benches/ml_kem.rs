//! ML-KEM benchmarks

use criterion::{criterion_group, criterion_main, Criterion};
use kylix_pqc::ml_kem::{Kem, MlKem1024, MlKem512, MlKem768};
use rand::{rng, rngs::StdRng, SeedableRng};

/// Create a seeded RNG for reproducible benchmarks.
fn seeded_rng() -> StdRng {
    StdRng::seed_from_u64(0x4b594c4958)
}

fn bench_ml_kem_512(c: &mut Criterion) {
    let mut group = c.benchmark_group("ML-KEM-512");

    group.bench_function("keygen", |b| {
        b.iter(|| MlKem512::keygen(&mut rng()).unwrap())
    });

    // Use seeded RNG for reproducible encaps/decaps benchmarks
    let (dk, ek) = MlKem512::keygen(&mut seeded_rng()).unwrap();

    group.bench_function("encaps", |b| {
        b.iter(|| MlKem512::encaps(&ek, &mut rng()).unwrap())
    });

    let (ct, _ss) = MlKem512::encaps(&ek, &mut seeded_rng()).unwrap();

    group.bench_function("decaps", |b| b.iter(|| MlKem512::decaps(&dk, &ct).unwrap()));

    group.finish();
}

fn bench_ml_kem_768(c: &mut Criterion) {
    let mut group = c.benchmark_group("ML-KEM-768");

    group.bench_function("keygen", |b| {
        b.iter(|| MlKem768::keygen(&mut rng()).unwrap())
    });

    // Use seeded RNG for reproducible encaps/decaps benchmarks
    let (dk, ek) = MlKem768::keygen(&mut seeded_rng()).unwrap();

    group.bench_function("encaps", |b| {
        b.iter(|| MlKem768::encaps(&ek, &mut rng()).unwrap())
    });

    let (ct, _ss) = MlKem768::encaps(&ek, &mut seeded_rng()).unwrap();

    group.bench_function("decaps", |b| b.iter(|| MlKem768::decaps(&dk, &ct).unwrap()));

    group.finish();
}

fn bench_ml_kem_1024(c: &mut Criterion) {
    let mut group = c.benchmark_group("ML-KEM-1024");

    group.bench_function("keygen", |b| {
        b.iter(|| MlKem1024::keygen(&mut rng()).unwrap())
    });

    // Use seeded RNG for reproducible encaps/decaps benchmarks
    let (dk, ek) = MlKem1024::keygen(&mut seeded_rng()).unwrap();

    group.bench_function("encaps", |b| {
        b.iter(|| MlKem1024::encaps(&ek, &mut rng()).unwrap())
    });

    let (ct, _ss) = MlKem1024::encaps(&ek, &mut seeded_rng()).unwrap();

    group.bench_function("decaps", |b| {
        b.iter(|| MlKem1024::decaps(&dk, &ct).unwrap())
    });

    group.finish();
}

criterion_group!(
    benches,
    bench_ml_kem_512,
    bench_ml_kem_768,
    bench_ml_kem_1024
);
criterion_main!(benches);
