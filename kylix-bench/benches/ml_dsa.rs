//! ML-DSA benchmarks

use criterion::{criterion_group, criterion_main, Criterion};
use kylix_pqc::ml_dsa::{MlDsa44, MlDsa65, MlDsa87, Signer};
use rand::rng;

const MESSAGE: &[u8] = b"Benchmark message for ML-DSA signature testing";

fn bench_ml_dsa_44(c: &mut Criterion) {
    let mut group = c.benchmark_group("ML-DSA-44");

    group.bench_function("keygen", |b| {
        b.iter(|| MlDsa44::keygen(&mut rng()).unwrap())
    });

    let (sk, vk) = MlDsa44::keygen(&mut rng()).unwrap();

    group.bench_function("sign", |b| b.iter(|| MlDsa44::sign(&sk, MESSAGE).unwrap()));

    let sig = MlDsa44::sign(&sk, MESSAGE).unwrap();

    group.bench_function("verify", |b| {
        b.iter(|| MlDsa44::verify(&vk, MESSAGE, &sig).unwrap())
    });

    group.finish();
}

fn bench_ml_dsa_65(c: &mut Criterion) {
    let mut group = c.benchmark_group("ML-DSA-65");

    group.bench_function("keygen", |b| {
        b.iter(|| MlDsa65::keygen(&mut rng()).unwrap())
    });

    let (sk, vk) = MlDsa65::keygen(&mut rng()).unwrap();

    group.bench_function("sign", |b| b.iter(|| MlDsa65::sign(&sk, MESSAGE).unwrap()));

    let sig = MlDsa65::sign(&sk, MESSAGE).unwrap();

    group.bench_function("verify", |b| {
        b.iter(|| MlDsa65::verify(&vk, MESSAGE, &sig).unwrap())
    });

    group.finish();
}

fn bench_ml_dsa_87(c: &mut Criterion) {
    let mut group = c.benchmark_group("ML-DSA-87");

    group.bench_function("keygen", |b| {
        b.iter(|| MlDsa87::keygen(&mut rng()).unwrap())
    });

    let (sk, vk) = MlDsa87::keygen(&mut rng()).unwrap();

    group.bench_function("sign", |b| b.iter(|| MlDsa87::sign(&sk, MESSAGE).unwrap()));

    let sig = MlDsa87::sign(&sk, MESSAGE).unwrap();

    group.bench_function("verify", |b| {
        b.iter(|| MlDsa87::verify(&vk, MESSAGE, &sig).unwrap())
    });

    group.finish();
}

criterion_group!(benches, bench_ml_dsa_44, bench_ml_dsa_65, bench_ml_dsa_87);
criterion_main!(benches);
