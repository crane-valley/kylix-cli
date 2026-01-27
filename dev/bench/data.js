window.BENCHMARK_DATA = {
  "lastUpdate": 1769524450989,
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
          "id": "5b6b8e24f59146563ef28ee44450ff32fbbb9225",
          "message": "ci(deps): bump actions/checkout from 4 to 6 (#6)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:20:52+09:00",
          "tree_id": "e27b554b6e1e692f37b751b27e6dd6be7ead458b",
          "url": "https://github.com/crane-valley/kylix-cli/commit/5b6b8e24f59146563ef28ee44450ff32fbbb9225"
        },
        "date": 1769524070394,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95295,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 205296,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115446,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172305,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 759897,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184084,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 262501,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 657317,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297928,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24848,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27866,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34762,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43727,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45838,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54985,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70183,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70408,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81135,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3677951,
            "range": "± 4085",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86594891,
            "range": "± 182792",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5023696,
            "range": "± 310149",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5412820,
            "range": "± 13902",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139636050,
            "range": "± 434244",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7623473,
            "range": "± 27116",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14230428,
            "range": "± 542227",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 285456634,
            "range": "± 477314",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7571001,
            "range": "± 22792",
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
          "id": "c624ed1bc5f5a70f01cfb472705ede06dc7d2ab0",
          "message": "ci(deps): bump actions/download-artifact from 4 to 7 (#7)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 7.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v7)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '7'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:22:00+09:00",
          "tree_id": "71bbb00f4c3b07b97203bd49fc08378d95d771a9",
          "url": "https://github.com/crane-valley/kylix-cli/commit/c624ed1bc5f5a70f01cfb472705ede06dc7d2ab0"
        },
        "date": 1769524143406,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95309,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 862739,
            "range": "± 3782",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115447,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172310,
            "range": "± 946",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 307485,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184613,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261690,
            "range": "± 5065",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 847877,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298777,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24874,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27917,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34805,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43805,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45957,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54700,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70126,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70443,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 80989,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3711388,
            "range": "± 61173",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 87359498,
            "range": "± 408459",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5034815,
            "range": "± 17187",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5464726,
            "range": "± 18460",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 140472583,
            "range": "± 268343",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7425254,
            "range": "± 19479",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14305686,
            "range": "± 34210",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286644426,
            "range": "± 574286",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7340372,
            "range": "± 18302",
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
          "id": "5b6b8e24f59146563ef28ee44450ff32fbbb9225",
          "message": "ci(deps): bump actions/checkout from 4 to 6 (#6)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:20:52+09:00",
          "tree_id": "e27b554b6e1e692f37b751b27e6dd6be7ead458b",
          "url": "https://github.com/crane-valley/kylix-cli/commit/5b6b8e24f59146563ef28ee44450ff32fbbb9225"
        },
        "date": 1769524039270,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62325,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 161619,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 69070,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112761,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 170730,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109145,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174421,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 545315,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181150,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16798,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17033,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20449,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29192,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28271,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32779,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46565,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44284,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50477,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2614036,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63757558,
            "range": "± 86768",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3935392,
            "range": "± 5468",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3962849,
            "range": "± 5985",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102184755,
            "range": "± 76232",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5448934,
            "range": "± 6950",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10485339,
            "range": "± 18327",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210304734,
            "range": "± 181608",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5706746,
            "range": "± 10085",
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
          "id": "c624ed1bc5f5a70f01cfb472705ede06dc7d2ab0",
          "message": "ci(deps): bump actions/download-artifact from 4 to 7 (#7)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 7.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v7)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '7'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:22:00+09:00",
          "tree_id": "71bbb00f4c3b07b97203bd49fc08378d95d771a9",
          "url": "https://github.com/crane-valley/kylix-cli/commit/c624ed1bc5f5a70f01cfb472705ede06dc7d2ab0"
        },
        "date": 1769524106846,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62330,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 282357,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68920,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112868,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 170677,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109126,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174401,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 427910,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180926,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16792,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20356,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29206,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28277,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32779,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46574,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44233,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50373,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2614107,
            "range": "± 2081",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63814961,
            "range": "± 85758",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3755242,
            "range": "± 6581",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3964253,
            "range": "± 5470",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102128185,
            "range": "± 86176",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5460869,
            "range": "± 7101",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10484170,
            "range": "± 15306",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210284157,
            "range": "± 177098",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5478337,
            "range": "± 10059",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Benchmark (arm64-macos)": [
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
        "date": 1769524072807,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 54192,
            "range": "± 4514",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 95942,
            "range": "± 5768",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 60336,
            "range": "± 20166",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 114055,
            "range": "± 31587",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 861291,
            "range": "± 171339",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 104870,
            "range": "± 32125",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 162165,
            "range": "± 21069",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 271493,
            "range": "± 70413",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 166688,
            "range": "± 27788",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 15388,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13329,
            "range": "± 1766",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 22166,
            "range": "± 4621",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28806,
            "range": "± 4575",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 30398,
            "range": "± 6239",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 31675,
            "range": "± 6026",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 50840,
            "range": "± 10125",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43528,
            "range": "± 8098",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 52785,
            "range": "± 10788",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3192363,
            "range": "± 526151",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 77040979,
            "range": "± 17993648",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4309206,
            "range": "± 867977",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4279437,
            "range": "± 1150104",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 112876458,
            "range": "± 12835816",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6079744,
            "range": "± 1083713",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10830412,
            "range": "± 1920977",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 240212833,
            "range": "± 28548981",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6408132,
            "range": "± 914464",
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
        "date": 1769524240944,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 70405,
            "range": "± 15015",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 236766,
            "range": "± 40698",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 85884,
            "range": "± 24196",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 119729,
            "range": "± 18629",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 437900,
            "range": "± 74078",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 102861,
            "range": "± 16230",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 206310,
            "range": "± 45195",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 287528,
            "range": "± 68504",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 230160,
            "range": "± 59255",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16799,
            "range": "± 2718",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 15820,
            "range": "± 2649",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 19890,
            "range": "± 4724",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 33827,
            "range": "± 9583",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 31393,
            "range": "± 6050",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 33962,
            "range": "± 6892",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 54470,
            "range": "± 12707",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 46767,
            "range": "± 21542",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 53828,
            "range": "± 11772",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3093440,
            "range": "± 756824",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 68412770,
            "range": "± 9443657",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4598581,
            "range": "± 1271013",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4287810,
            "range": "± 594617",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 109058958,
            "range": "± 10055991",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6202634,
            "range": "± 889455",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10908808,
            "range": "± 2612127",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 224803958,
            "range": "± 15063062",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5921252,
            "range": "± 1064056",
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
          "id": "5b6b8e24f59146563ef28ee44450ff32fbbb9225",
          "message": "ci(deps): bump actions/checkout from 4 to 6 (#6)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:20:52+09:00",
          "tree_id": "e27b554b6e1e692f37b751b27e6dd6be7ead458b",
          "url": "https://github.com/crane-valley/kylix-cli/commit/5b6b8e24f59146563ef28ee44450ff32fbbb9225"
        },
        "date": 1769524352887,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53946,
            "range": "± 5770",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 112265,
            "range": "± 21166",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 71504,
            "range": "± 27689",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 149688,
            "range": "± 34149",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 271706,
            "range": "± 64735",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 111709,
            "range": "± 21575",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 165805,
            "range": "± 36343",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 233814,
            "range": "± 29425",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 174757,
            "range": "± 32339",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 20153,
            "range": "± 5289",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14233,
            "range": "± 3965",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 17079,
            "range": "± 3680",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 25162,
            "range": "± 2469",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 30410,
            "range": "± 6498",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 47662,
            "range": "± 19744",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 67713,
            "range": "± 19496",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 50865,
            "range": "± 13784",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 54170,
            "range": "± 17759",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2613829,
            "range": "± 472571",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 62205000,
            "range": "± 9435163",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4374032,
            "range": "± 910113",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4267659,
            "range": "± 924970",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 114200541,
            "range": "± 19851397",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6637351,
            "range": "± 2264534",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 11185025,
            "range": "± 1614941",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 236712354,
            "range": "± 23791476",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6319926,
            "range": "± 1092854",
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
          "id": "c624ed1bc5f5a70f01cfb472705ede06dc7d2ab0",
          "message": "ci(deps): bump actions/download-artifact from 4 to 7 (#7)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 7.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v7)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '7'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-27T23:22:00+09:00",
          "tree_id": "71bbb00f4c3b07b97203bd49fc08378d95d771a9",
          "url": "https://github.com/crane-valley/kylix-cli/commit/c624ed1bc5f5a70f01cfb472705ede06dc7d2ab0"
        },
        "date": 1769524449606,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53782,
            "range": "± 3302",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 97374,
            "range": "± 13933",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 58521,
            "range": "± 9557",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 104542,
            "range": "± 15914",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 145443,
            "range": "± 33534",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 94408,
            "range": "± 3638",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 153694,
            "range": "± 10873",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 229160,
            "range": "± 20169",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 159991,
            "range": "± 11920",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14257,
            "range": "± 3186",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13014,
            "range": "± 6735",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15279,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 24926,
            "range": "± 2985",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21703,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24694,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 40942,
            "range": "± 7490",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 36968,
            "range": "± 8385",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 48477,
            "range": "± 7852",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2331964,
            "range": "± 498498",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 60362750,
            "range": "± 6819139",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3493609,
            "range": "± 1382970",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3714225,
            "range": "± 1273246",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 114342666,
            "range": "± 37480071",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4680335,
            "range": "± 2264659",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9596208,
            "range": "± 1198061",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 180959791,
            "range": "± 10413903",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4655072,
            "range": "± 350712",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}