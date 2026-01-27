window.BENCHMARK_DATA = {
  "lastUpdate": 1769523959905,
  "repoUrl": "https://github.com/crane-valley/kylix-cli",
  "entries": {
    "Benchmark (x86_64-linux)": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f498b9a351d2756916effa5d8a9d1da266453bc0",
          "message": "deps(deps): bump criterion from 0.5.1 to 0.8.1 (#5)\n\nBumps [criterion](https://github.com/criterion-rs/criterion.rs) from 0.5.1 to 0.8.1.\n- [Release notes](https://github.com/criterion-rs/criterion.rs/releases)\n- [Changelog](https://github.com/criterion-rs/criterion.rs/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/criterion-rs/criterion.rs/compare/0.5.1...criterion-v0.8.1)\n\n---\nupdated-dependencies:\n- dependency-name: criterion\n  dependency-version: 0.8.1\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:17:35+09:00",
          "tree_id": "96de94b734fcad9356c4a88aaa184408d5b751ed",
          "url": "https://github.com/crane-valley/kylix-cli/commit/f498b9a351d2756916effa5d8a9d1da266453bc0"
        },
        "date": 1769523879076,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95243,
            "range": "± 1189",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 833756,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115439,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172100,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 595846,
            "range": "± 1420",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183967,
            "range": "± 1821",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261406,
            "range": "± 1057",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1738746,
            "range": "± 47686",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298154,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24916,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 28005,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34733,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43686,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 46315,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54937,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70129,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70499,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81026,
            "range": "± 1968",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3681399,
            "range": "± 59703",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86742481,
            "range": "± 1392672",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5347905,
            "range": "± 59755",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5414205,
            "range": "± 350463",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139736789,
            "range": "± 2373949",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7706012,
            "range": "± 84746",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14233902,
            "range": "± 48458",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286025529,
            "range": "± 3401065",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7613819,
            "range": "± 62409",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2030bd8d78cd4e9b0059b07b0db606879b50584b",
          "message": "ci(deps): bump actions/upload-artifact from 4 to 6 (#4)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 4 to 6.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:18:57+09:00",
          "tree_id": "c5e4c899b513015cc551e7b2969b3e1aa7bc752b",
          "url": "https://github.com/crane-valley/kylix-cli/commit/2030bd8d78cd4e9b0059b07b0db606879b50584b"
        },
        "date": 1769523959659,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95225,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 205939,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115523,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172248,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 534479,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184603,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261457,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1452427,
            "range": "± 16281",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298008,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24865,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27928,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34776,
            "range": "± 4771",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43795,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45863,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54940,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70231,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70454,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81036,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3684827,
            "range": "± 7060",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 87415147,
            "range": "± 1077371",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5140787,
            "range": "± 12246",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5454216,
            "range": "± 15038",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139991194,
            "range": "± 321330",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7471546,
            "range": "± 76337",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14296205,
            "range": "± 54338",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 287242058,
            "range": "± 1925543",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7778170,
            "range": "± 71181",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Benchmark (arm64-linux)": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2030bd8d78cd4e9b0059b07b0db606879b50584b",
          "message": "ci(deps): bump actions/upload-artifact from 4 to 6 (#4)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 4 to 6.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:18:57+09:00",
          "tree_id": "c5e4c899b513015cc551e7b2969b3e1aa7bc752b",
          "url": "https://github.com/crane-valley/kylix-cli/commit/2030bd8d78cd4e9b0059b07b0db606879b50584b"
        },
        "date": 1769523928427,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62348,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 216273,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 69085,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112854,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 373477,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109280,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174412,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 529269,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181084,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16799,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17004,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20414,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29206,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28220,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32739,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46539,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44533,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50665,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2613856,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63794948,
            "range": "± 71857",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3828107,
            "range": "± 7262",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3963297,
            "range": "± 6134",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102144453,
            "range": "± 85708",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5740818,
            "range": "± 6305",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10483403,
            "range": "± 16869",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210158122,
            "range": "± 176857",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5744119,
            "range": "± 7249",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}