window.BENCHMARK_DATA = {
  "lastUpdate": 1769587243508,
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
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f40e6825c1d38761f422b901003e7efdb0dfc00",
          "message": "fix: add packages:write permission to release workflow (#8)",
          "timestamp": "2026-01-28T00:04:37+09:00",
          "tree_id": "36ea56bda936ff7465690d176a6d96d89030e52d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/1f40e6825c1d38761f422b901003e7efdb0dfc00"
        },
        "date": 1769526670198,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95544,
            "range": "± 3571",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 314437,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115637,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171910,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 627240,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183984,
            "range": "± 2243",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261966,
            "range": "± 3796",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1574126,
            "range": "± 6326",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297899,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24980,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27849,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34607,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43790,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45759,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54759,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70201,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70475,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81088,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3678605,
            "range": "± 33807",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86669773,
            "range": "± 153656",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4973506,
            "range": "± 18205",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5412307,
            "range": "± 18093",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139509997,
            "range": "± 377282",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7618082,
            "range": "± 29750",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14229733,
            "range": "± 165365",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 285516649,
            "range": "± 637581",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7754726,
            "range": "± 21402",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208b4429e794c3d35ea86a9aca6c121ac8c02678",
          "message": "fix: allow dirty CI for Dependabot updates (#9)",
          "timestamp": "2026-01-28T00:11:57+09:00",
          "tree_id": "f341f9342e6a714db8426662179c8f5b0cc4a977",
          "url": "https://github.com/crane-valley/kylix-cli/commit/208b4429e794c3d35ea86a9aca6c121ac8c02678"
        },
        "date": 1769527107766,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 97203,
            "range": "± 1950",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 268873,
            "range": "± 1699",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115758,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172836,
            "range": "± 3325",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 307827,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184383,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261617,
            "range": "± 2096",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1018730,
            "range": "± 18927",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297824,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24906,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27905,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34664,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43738,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 46030,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54780,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70193,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70535,
            "range": "± 5135",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81146,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3679340,
            "range": "± 26472",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86546200,
            "range": "± 133987",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5256160,
            "range": "± 45912",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5412366,
            "range": "± 18681",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139585464,
            "range": "± 259022",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7525383,
            "range": "± 20812",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14226386,
            "range": "± 36201",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 285529094,
            "range": "± 312094",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7642081,
            "range": "± 22944",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc62604b92c62c3ea40d157ddc976ba9f46997dd",
          "message": "docs: add CI, release, and license badges (#11)",
          "timestamp": "2026-01-28T01:05:34+09:00",
          "tree_id": "028aafd6279d8e771c171b9cc6540df69f5d9190",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bc62604b92c62c3ea40d157ddc976ba9f46997dd"
        },
        "date": 1769530327005,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95264,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 205428,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115508,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172222,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 570217,
            "range": "± 4381",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184010,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261313,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1060425,
            "range": "± 16272",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297913,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24935,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27947,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34686,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43640,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45798,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54772,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70131,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70680,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81353,
            "range": "± 520",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3679726,
            "range": "± 15684",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86621918,
            "range": "± 195709",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5215898,
            "range": "± 103657",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5417797,
            "range": "± 14058",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 140405591,
            "range": "± 586421",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7613128,
            "range": "± 21277",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14458062,
            "range": "± 166558",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286620100,
            "range": "± 543902",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7590049,
            "range": "± 32391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "761132bc2464584799699f4aa83c906c697f26b9",
          "message": "docs: add website badge (#12)\n\n* docs: add website badge\n\n* docs: use dynamic website badge showing online status\n\nApply reviewer suggestion to use shields.io dynamic badge\nthat displays the website's active status instead of a static badge.",
          "timestamp": "2026-01-28T08:54:32+09:00",
          "tree_id": "ef366c70250e901009fa0bc188d244a02d9092e8",
          "url": "https://github.com/crane-valley/kylix-cli/commit/761132bc2464584799699f4aa83c906c697f26b9"
        },
        "date": 1769558467068,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95275,
            "range": "± 4703",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 205430,
            "range": "± 6157",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115519,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172025,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 841036,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184039,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261791,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 663694,
            "range": "± 1966",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298447,
            "range": "± 5691",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24866,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 28341,
            "range": "± 1186",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34752,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43646,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45794,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54814,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70168,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70468,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81090,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3677988,
            "range": "± 5981",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 87502204,
            "range": "± 262063",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5217148,
            "range": "± 90950",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5502491,
            "range": "± 98205",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 140347713,
            "range": "± 415628",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7389974,
            "range": "± 131960",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14443075,
            "range": "± 305472",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 288045099,
            "range": "± 1366791",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7502900,
            "range": "± 164056",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe905c163449de6ca3f5cb6b345dea736a3cebdd",
          "message": "fix: use URL-encoded format for shields.io website badge (#13)\n\n* docs: add website badge\n\n* docs: use dynamic website badge showing online status\n\nApply reviewer suggestion to use shields.io dynamic badge\nthat displays the website's active status instead of a static badge.\n\n* fix: use URL-encoded format for shields.io website badge\n\nUse official shields.io generator format with query parameter\nand URL encoding instead of path-based format.",
          "timestamp": "2026-01-28T09:14:30+09:00",
          "tree_id": "41f26597b74c752dc816c31159529816a7a95d9c",
          "url": "https://github.com/crane-valley/kylix-cli/commit/fe905c163449de6ca3f5cb6b345dea736a3cebdd"
        },
        "date": 1769559657996,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95178,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 520213,
            "range": "± 1544",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115506,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172056,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 440059,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184128,
            "range": "± 1897",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261612,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 2149593,
            "range": "± 8630",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297892,
            "range": "± 3948",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24904,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27905,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34675,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43738,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45855,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54803,
            "range": "± 778",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70149,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70537,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81131,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3686772,
            "range": "± 76143",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86799116,
            "range": "± 244113",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5242283,
            "range": "± 20016",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5445366,
            "range": "± 25272",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139840813,
            "range": "± 1749072",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7764473,
            "range": "± 127358",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14246457,
            "range": "± 51242",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286044518,
            "range": "± 1553406",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7477581,
            "range": "± 222681",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eec1ad3db417af3b1c551ed425600cf0312a7a95",
          "message": "docs: add PLANS.md with CLI development roadmap (#14)\n\n* docs: add PLANS.md with CLI development roadmap\n\nMove CLI-related tasks from kylix repository to track development\npriorities including bench compare CI, function refactoring, and\ncode quality improvements.\n\n* docs: simplify PLANS.md\n\nRemove redundant sections and consolidate task list.",
          "timestamp": "2026-01-28T11:38:11+09:00",
          "tree_id": "9dab9097dfd49e7d829f5603699f2bac7cf88553",
          "url": "https://github.com/crane-valley/kylix-cli/commit/eec1ad3db417af3b1c551ed425600cf0312a7a95"
        },
        "date": 1769568292141,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95409,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 455525,
            "range": "± 10981",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115381,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 173568,
            "range": "± 4745",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 694044,
            "range": "± 5160",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184143,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261336,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 853362,
            "range": "± 10171",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297962,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24867,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27954,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34747,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43637,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45921,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54776,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70234,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70860,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81013,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3679817,
            "range": "± 18176",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86520266,
            "range": "± 279850",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5081586,
            "range": "± 13614",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5410859,
            "range": "± 19292",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139579836,
            "range": "± 315120",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7417045,
            "range": "± 26972",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14227767,
            "range": "± 81142",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286327698,
            "range": "± 1147449",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7590832,
            "range": "± 21625",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfb26e7c8fb5d48d4ab59c5f56bf935cb5471199",
          "message": "fix: use fixed seed for ML-DSA benchmark stability (#15)\n\n* fix: use fixed seed for ML-DSA benchmark stability\n\nUse a seeded RNG for keygen in sign/verify benchmarks to eliminate\nvariance from rejection sampling. The same key is now generated\nacross benchmark runs, ensuring consistent rejection sampling paths.\n\nThis addresses the benchmark instability seen in CI where ML-DSA-65\nsign times varied significantly (e.g., 170ms vs 674ms).\n\n* fix: use fixed seed for ML-KEM benchmark consistency\n\nApply the same seeded RNG approach to ML-KEM benchmarks for\nconsistency with ML-DSA and improved reproducibility across\nCI runs.\n\n* fix: use fixed seed for SLH-DSA benchmark consistency\n\nApply the same seeded RNG approach to SLH-DSA benchmarks for\nconsistency across all algorithm benchmarks.\n\n* ci: reduce benchmark alert threshold to 150%\n\nWith fixed seeds eliminating rejection sampling variance, we can\nuse a stricter threshold to detect actual performance regressions.\n\n* style: consolidate imports and simplify comments\n\nAddress review feedback:\n- Consolidate rand imports into single use statement\n- Remove misleading hex comment from seed value",
          "timestamp": "2026-01-28T12:25:08+09:00",
          "tree_id": "59726eda5aada9da1c4a668bab1d4bb3805f5b81",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bfb26e7c8fb5d48d4ab59c5f56bf935cb5471199"
        },
        "date": 1769571100552,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95250,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 736382,
            "range": "± 10653",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115931,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172076,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 625978,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184189,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261317,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 666222,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 300704,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24681,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27734,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34443,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43295,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45650,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54270,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69827,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70328,
            "range": "± 1532",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 80426,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3626242,
            "range": "± 83622",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 85299453,
            "range": "± 168840",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5061634,
            "range": "± 190637",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5332960,
            "range": "± 14915",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 138561836,
            "range": "± 568744",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7410788,
            "range": "± 22179",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14072680,
            "range": "± 184763",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 282706089,
            "range": "± 1025024",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7433584,
            "range": "± 19929",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb3d7e3051e146f4f1cac9559b20fcf358ff9a12",
          "message": "docs: add security warning to README (#16)\n\n* docs: add security warning to README\n\nAdd a prominent warning that this CLI uses the experimental Kylix\nlibrary which has NOT been audited and is NOT intended for production\nuse. Link to the security policy in the main kylix repository.\n\n* docs: move security warning to top of README\n\nMove the Security section right after the intro paragraph so users\nsee the warning before proceeding with installation or usage.",
          "timestamp": "2026-01-28T12:39:02+09:00",
          "tree_id": "46a4b4238b20e92ee030d906d4a52b53447cb117",
          "url": "https://github.com/crane-valley/kylix-cli/commit/fb3d7e3051e146f4f1cac9559b20fcf358ff9a12"
        },
        "date": 1769571936986,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95620,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 734163,
            "range": "± 6680",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115907,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172295,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 625705,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184732,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 265076,
            "range": "± 1657",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 666368,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 301354,
            "range": "± 1600",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24765,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27770,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34504,
            "range": "± 679",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43403,
            "range": "± 1555",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45530,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54362,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69744,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 69994,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 80481,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3631177,
            "range": "± 114464",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 85524017,
            "range": "± 411933",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5073724,
            "range": "± 13846",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5327578,
            "range": "± 189760",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 137878286,
            "range": "± 225299",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7413251,
            "range": "± 173607",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14020924,
            "range": "± 30876",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 281157311,
            "range": "± 296122",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7434787,
            "range": "± 20663",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "207159354d2fe1b564512a60186207b6d4cd3862",
          "message": "docs: update PLANS.md with refactoring analysis (#18)\n\n- Remove is_dsa() task (addressed in PR #17)\n- Document Long Functions dependency on kylix-pqc trait unification\n- Document Error Patterns as Won't Fix (library API design)",
          "timestamp": "2026-01-28T13:44:09+09:00",
          "tree_id": "d2aa0065c9fce90615fb654c69ee5aa2647172f0",
          "url": "https://github.com/crane-valley/kylix-cli/commit/207159354d2fe1b564512a60186207b6d4cd3862"
        },
        "date": 1769575837820,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95468,
            "range": "± 3891",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 734670,
            "range": "± 4558",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 116791,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172255,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 626308,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184385,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261588,
            "range": "± 3686",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 666699,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 300660,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24722,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27795,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34578,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43521,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45830,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54656,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69686,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70094,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 80908,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3630031,
            "range": "± 12060",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 85410300,
            "range": "± 150145",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5115385,
            "range": "± 24069",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5330784,
            "range": "± 18642",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 137617628,
            "range": "± 130843",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7489707,
            "range": "± 32778",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14053699,
            "range": "± 71028",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 281993864,
            "range": "± 402506",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7492135,
            "range": "± 39772",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "881702a7a61af774f46b98becb35350d08d9493f",
          "message": "refactor: remove unused is_dsa() method (#17)\n\nThe method was marked with #[allow(dead_code)] and never called.\nIt can be replaced with !is_kem() if needed in the future.",
          "timestamp": "2026-01-28T13:44:29+09:00",
          "tree_id": "95f0f4dc67ac79dc982a994cf3b2fe0374635d14",
          "url": "https://github.com/crane-valley/kylix-cli/commit/881702a7a61af774f46b98becb35350d08d9493f"
        },
        "date": 1769575863558,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95226,
            "range": "± 1412",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 734590,
            "range": "± 5284",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115912,
            "range": "± 2090",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172122,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 625878,
            "range": "± 1588",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184307,
            "range": "± 2614",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261613,
            "range": "± 2782",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 667871,
            "range": "± 1825",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 300482,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24701,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27837,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34433,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43359,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45693,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54326,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69794,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70112,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 80368,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3652736,
            "range": "± 14557",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 85931697,
            "range": "± 279571",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5067224,
            "range": "± 62211",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5362171,
            "range": "± 18242",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 138705550,
            "range": "± 194348",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7445160,
            "range": "± 22053",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14094005,
            "range": "± 52688",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 282781041,
            "range": "± 2615911",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7456636,
            "range": "± 16679",
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
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f40e6825c1d38761f422b901003e7efdb0dfc00",
          "message": "fix: add packages:write permission to release workflow (#8)",
          "timestamp": "2026-01-28T00:04:37+09:00",
          "tree_id": "36ea56bda936ff7465690d176a6d96d89030e52d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/1f40e6825c1d38761f422b901003e7efdb0dfc00"
        },
        "date": 1769526639332,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62338,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 268651,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68761,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112825,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 291407,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109152,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174367,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 430044,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180914,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16799,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17019,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20404,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29205,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28265,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32806,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46557,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44272,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50376,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2613842,
            "range": "± 1806",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63776898,
            "range": "± 83307",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3791022,
            "range": "± 5311",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3962767,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102160175,
            "range": "± 84962",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5477286,
            "range": "± 5995",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10485124,
            "range": "± 15581",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210295336,
            "range": "± 169649",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5498790,
            "range": "± 7938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208b4429e794c3d35ea86a9aca6c121ac8c02678",
          "message": "fix: allow dirty CI for Dependabot updates (#9)",
          "timestamp": "2026-01-28T00:11:57+09:00",
          "tree_id": "f341f9342e6a714db8426662179c8f5b0cc4a977",
          "url": "https://github.com/crane-valley/kylix-cli/commit/208b4429e794c3d35ea86a9aca6c121ac8c02678"
        },
        "date": 1769527080741,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62335,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 319483,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68676,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112912,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 654920,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109235,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174356,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 264692,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180892,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16791,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17008,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20381,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29243,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28254,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32753,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46551,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44286,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50454,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2615295,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63902846,
            "range": "± 83814",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3808481,
            "range": "± 5450",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3964104,
            "range": "± 5229",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102295029,
            "range": "± 181926",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5421678,
            "range": "± 6516",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10501595,
            "range": "± 17419",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210355986,
            "range": "± 234243",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5604594,
            "range": "± 9584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc62604b92c62c3ea40d157ddc976ba9f46997dd",
          "message": "docs: add CI, release, and license badges (#11)",
          "timestamp": "2026-01-28T01:05:34+09:00",
          "tree_id": "028aafd6279d8e771c171b9cc6540df69f5d9190",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bc62604b92c62c3ea40d157ddc976ba9f46997dd"
        },
        "date": 1769530290259,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62307,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 198877,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68812,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112801,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 258432,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109228,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174424,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 264605,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180923,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16805,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17048,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20407,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29203,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28306,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32786,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46561,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44240,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50386,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2613505,
            "range": "± 1810",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63762382,
            "range": "± 73104",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3690135,
            "range": "± 4606",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3964023,
            "range": "± 5577",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102140424,
            "range": "± 87532",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5557011,
            "range": "± 6525",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10489580,
            "range": "± 19339",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210349757,
            "range": "± 417305",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5581978,
            "range": "± 10299",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "761132bc2464584799699f4aa83c906c697f26b9",
          "message": "docs: add website badge (#12)\n\n* docs: add website badge\n\n* docs: use dynamic website badge showing online status\n\nApply reviewer suggestion to use shields.io dynamic badge\nthat displays the website's active status instead of a static badge.",
          "timestamp": "2026-01-28T08:54:32+09:00",
          "tree_id": "ef366c70250e901009fa0bc188d244a02d9092e8",
          "url": "https://github.com/crane-valley/kylix-cli/commit/761132bc2464584799699f4aa83c906c697f26b9"
        },
        "date": 1769558430255,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62343,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 148128,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 69017,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112711,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 262334,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109107,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174483,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 264506,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181076,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16805,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17023,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20429,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29185,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28563,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 33080,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46573,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44413,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50363,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2615126,
            "range": "± 11734",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63828384,
            "range": "± 68140",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3698334,
            "range": "± 6477",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3962674,
            "range": "± 6519",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102174409,
            "range": "± 99968",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5231681,
            "range": "± 7141",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10483252,
            "range": "± 15267",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210275863,
            "range": "± 160597",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5528685,
            "range": "± 8878",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe905c163449de6ca3f5cb6b345dea736a3cebdd",
          "message": "fix: use URL-encoded format for shields.io website badge (#13)\n\n* docs: add website badge\n\n* docs: use dynamic website badge showing online status\n\nApply reviewer suggestion to use shields.io dynamic badge\nthat displays the website's active status instead of a static badge.\n\n* fix: use URL-encoded format for shields.io website badge\n\nUse official shields.io generator format with query parameter\nand URL encoding instead of path-based format.",
          "timestamp": "2026-01-28T09:14:30+09:00",
          "tree_id": "41f26597b74c752dc816c31159529816a7a95d9c",
          "url": "https://github.com/crane-valley/kylix-cli/commit/fe905c163449de6ca3f5cb6b345dea736a3cebdd"
        },
        "date": 1769559629665,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62386,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 183499,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 69078,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112847,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 170783,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109275,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174332,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1422953,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180857,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16783,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17042,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20427,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29215,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28227,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32740,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46628,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44255,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50384,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2614075,
            "range": "± 1777",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63730534,
            "range": "± 64580",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3738616,
            "range": "± 6126",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3963831,
            "range": "± 7472",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102203599,
            "range": "± 102301",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5430699,
            "range": "± 5604",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10486635,
            "range": "± 20447",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210369403,
            "range": "± 230731",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5562487,
            "range": "± 8598",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eec1ad3db417af3b1c551ed425600cf0312a7a95",
          "message": "docs: add PLANS.md with CLI development roadmap (#14)\n\n* docs: add PLANS.md with CLI development roadmap\n\nMove CLI-related tasks from kylix repository to track development\npriorities including bench compare CI, function refactoring, and\ncode quality improvements.\n\n* docs: simplify PLANS.md\n\nRemove redundant sections and consolidate task list.",
          "timestamp": "2026-01-28T11:38:11+09:00",
          "tree_id": "9dab9097dfd49e7d829f5603699f2bac7cf88553",
          "url": "https://github.com/crane-valley/kylix-cli/commit/eec1ad3db417af3b1c551ed425600cf0312a7a95"
        },
        "date": 1769568259833,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62368,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 639120,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68716,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112803,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 552942,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109200,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 174399,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 357728,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181014,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16798,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17010,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20407,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29222,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28266,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32744,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46600,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44234,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50397,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2616333,
            "range": "± 4634",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63811796,
            "range": "± 123193",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3881638,
            "range": "± 6945",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3973158,
            "range": "± 8155",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102211183,
            "range": "± 255306",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5615746,
            "range": "± 9282",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10486940,
            "range": "± 25088",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210533722,
            "range": "± 295496",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5636814,
            "range": "± 11819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfb26e7c8fb5d48d4ab59c5f56bf935cb5471199",
          "message": "fix: use fixed seed for ML-DSA benchmark stability (#15)\n\n* fix: use fixed seed for ML-DSA benchmark stability\n\nUse a seeded RNG for keygen in sign/verify benchmarks to eliminate\nvariance from rejection sampling. The same key is now generated\nacross benchmark runs, ensuring consistent rejection sampling paths.\n\nThis addresses the benchmark instability seen in CI where ML-DSA-65\nsign times varied significantly (e.g., 170ms vs 674ms).\n\n* fix: use fixed seed for ML-KEM benchmark consistency\n\nApply the same seeded RNG approach to ML-KEM benchmarks for\nconsistency with ML-DSA and improved reproducibility across\nCI runs.\n\n* fix: use fixed seed for SLH-DSA benchmark consistency\n\nApply the same seeded RNG approach to SLH-DSA benchmarks for\nconsistency across all algorithm benchmarks.\n\n* ci: reduce benchmark alert threshold to 150%\n\nWith fixed seeds eliminating rejection sampling variance, we can\nuse a stricter threshold to detect actual performance regressions.\n\n* style: consolidate imports and simplify comments\n\nAddress review feedback:\n- Consolidate rand imports into single use statement\n- Remove misleading hex comment from seed value",
          "timestamp": "2026-01-28T12:25:08+09:00",
          "tree_id": "59726eda5aada9da1c4a668bab1d4bb3805f5b81",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bfb26e7c8fb5d48d4ab59c5f56bf935cb5471199"
        },
        "date": 1769571068682,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62093,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371950,
            "range": "± 679",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68584,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112429,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326401,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109670,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173948,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355454,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180793,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16858,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17024,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20353,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29162,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28255,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32694,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46506,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44238,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50361,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2603126,
            "range": "± 4270",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63653513,
            "range": "± 116975",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3776441,
            "range": "± 6314",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3956754,
            "range": "± 4551",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102045237,
            "range": "± 232354",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5504730,
            "range": "± 6569",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10468375,
            "range": "± 48996",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 209868924,
            "range": "± 435462",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5546424,
            "range": "± 7850",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb3d7e3051e146f4f1cac9559b20fcf358ff9a12",
          "message": "docs: add security warning to README (#16)\n\n* docs: add security warning to README\n\nAdd a prominent warning that this CLI uses the experimental Kylix\nlibrary which has NOT been audited and is NOT intended for production\nuse. Link to the security policy in the main kylix repository.\n\n* docs: move security warning to top of README\n\nMove the Security section right after the intro paragraph so users\nsee the warning before proceeding with installation or usage.",
          "timestamp": "2026-01-28T12:39:02+09:00",
          "tree_id": "46a4b4238b20e92ee030d906d4a52b53447cb117",
          "url": "https://github.com/crane-valley/kylix-cli/commit/fb3d7e3051e146f4f1cac9559b20fcf358ff9a12"
        },
        "date": 1769571899763,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62071,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371952,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68571,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112339,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326437,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109510,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173770,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355509,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180808,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16842,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17012,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20378,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29188,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28267,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32705,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46514,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44273,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50359,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2600683,
            "range": "± 2443",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63617174,
            "range": "± 80520",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3777892,
            "range": "± 8038",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3956848,
            "range": "± 3669",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102005581,
            "range": "± 70506",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5513955,
            "range": "± 7523",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10458807,
            "range": "± 14390",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 209709995,
            "range": "± 152650",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5553954,
            "range": "± 9071",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "207159354d2fe1b564512a60186207b6d4cd3862",
          "message": "docs: update PLANS.md with refactoring analysis (#18)\n\n- Remove is_dsa() task (addressed in PR #17)\n- Document Long Functions dependency on kylix-pqc trait unification\n- Document Error Patterns as Won't Fix (library API design)",
          "timestamp": "2026-01-28T13:44:09+09:00",
          "tree_id": "d2aa0065c9fce90615fb654c69ee5aa2647172f0",
          "url": "https://github.com/crane-valley/kylix-cli/commit/207159354d2fe1b564512a60186207b6d4cd3862"
        },
        "date": 1769575806189,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62149,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 372107,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68702,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112285,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326532,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109628,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173755,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355486,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180820,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16868,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17027,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20386,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29191,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28287,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32705,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46534,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44265,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50359,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2600190,
            "range": "± 1868",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63614213,
            "range": "± 66855",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3776089,
            "range": "± 5787",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3957061,
            "range": "± 6729",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102002038,
            "range": "± 88264",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5506366,
            "range": "± 7687",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10457152,
            "range": "± 17471",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 209724871,
            "range": "± 199681",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5545042,
            "range": "± 9975",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "881702a7a61af774f46b98becb35350d08d9493f",
          "message": "refactor: remove unused is_dsa() method (#17)\n\nThe method was marked with #[allow(dead_code)] and never called.\nIt can be replaced with !is_kem() if needed in the future.",
          "timestamp": "2026-01-28T13:44:29+09:00",
          "tree_id": "95f0f4dc67ac79dc982a994cf3b2fe0374635d14",
          "url": "https://github.com/crane-valley/kylix-cli/commit/881702a7a61af774f46b98becb35350d08d9493f"
        },
        "date": 1769575832627,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62106,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 372034,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68605,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112394,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326519,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109843,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173739,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355408,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180931,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16856,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17010,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20371,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29208,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28247,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32713,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46481,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44232,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50362,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2599667,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63571270,
            "range": "± 90395",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3776568,
            "range": "± 6156",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3963887,
            "range": "± 6731",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 101981456,
            "range": "± 56843",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5506308,
            "range": "± 7439",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10458743,
            "range": "± 11786",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 209724653,
            "range": "± 171805",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5546619,
            "range": "± 9345",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b212738997e2a846f8169a50b28de55a7b302dc0",
          "message": "chore: remove manual release tag restriction from CLAUDE.md (#19)",
          "timestamp": "2026-01-28T16:54:43+09:00",
          "tree_id": "701446da2f889c710bb34998724b2c892201b832",
          "url": "https://github.com/crane-valley/kylix-cli/commit/b212738997e2a846f8169a50b28de55a7b302dc0"
        },
        "date": 1769587243051,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62082,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371834,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68572,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112551,
            "range": "± 1981",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326456,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109689,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173808,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355489,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181051,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16848,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16993,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20388,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29173,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28257,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32731,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46528,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44285,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50337,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2600841,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63518095,
            "range": "± 94928",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3775611,
            "range": "± 5425",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3954156,
            "range": "± 4949",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102014653,
            "range": "± 57283",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5505625,
            "range": "± 6681",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10459259,
            "range": "± 14624",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 209741839,
            "range": "± 133985",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5547047,
            "range": "± 7680",
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
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f40e6825c1d38761f422b901003e7efdb0dfc00",
          "message": "fix: add packages:write permission to release workflow (#8)",
          "timestamp": "2026-01-28T00:04:37+09:00",
          "tree_id": "36ea56bda936ff7465690d176a6d96d89030e52d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/1f40e6825c1d38761f422b901003e7efdb0dfc00"
        },
        "date": 1769526648062,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53742,
            "range": "± 4855",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 176218,
            "range": "± 31503",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 53704,
            "range": "± 2699",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 113452,
            "range": "± 81834",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 254933,
            "range": "± 42076",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 95631,
            "range": "± 13441",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 152628,
            "range": "± 15144",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 297179,
            "range": "± 44320",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 157740,
            "range": "± 20033",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14332,
            "range": "± 4491",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 12960,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15707,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 24705,
            "range": "± 2966",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 22839,
            "range": "± 5388",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24201,
            "range": "± 2985",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 38460,
            "range": "± 16707",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 35587,
            "range": "± 5007",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 57701,
            "range": "± 11916",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2827878,
            "range": "± 757017",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63925062,
            "range": "± 9474814",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3259819,
            "range": "± 377361",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4640699,
            "range": "± 3297518",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 120304500,
            "range": "± 24128682",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5449026,
            "range": "± 1893610",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 11886609,
            "range": "± 2549026",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 243562833,
            "range": "± 42670870",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6048979,
            "range": "± 1439809",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208b4429e794c3d35ea86a9aca6c121ac8c02678",
          "message": "fix: allow dirty CI for Dependabot updates (#9)",
          "timestamp": "2026-01-28T00:11:57+09:00",
          "tree_id": "f341f9342e6a714db8426662179c8f5b0cc4a977",
          "url": "https://github.com/crane-valley/kylix-cli/commit/208b4429e794c3d35ea86a9aca6c121ac8c02678"
        },
        "date": 1769527134812,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 75513,
            "range": "± 15180",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 142416,
            "range": "± 28477",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68669,
            "range": "± 18783",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 143058,
            "range": "± 28546",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 355772,
            "range": "± 227808",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 133196,
            "range": "± 40341",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 201342,
            "range": "± 50402",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 290951,
            "range": "± 74064",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 201290,
            "range": "± 53368",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 18146,
            "range": "± 6434",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16577,
            "range": "± 3907",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20538,
            "range": "± 6508",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 30547,
            "range": "± 7762",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 29582,
            "range": "± 7658",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 33692,
            "range": "± 11652",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 56239,
            "range": "± 13661",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 39458,
            "range": "± 14638",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 55039,
            "range": "± 8477",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3612036,
            "range": "± 522756",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 88526375,
            "range": "± 17888550",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3826844,
            "range": "± 619068",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4399171,
            "range": "± 885752",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 100866792,
            "range": "± 19695390",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6261118,
            "range": "± 1122991",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10946875,
            "range": "± 1958116",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 234469937,
            "range": "± 25816069",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6160736,
            "range": "± 1025291",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc62604b92c62c3ea40d157ddc976ba9f46997dd",
          "message": "docs: add CI, release, and license badges (#11)",
          "timestamp": "2026-01-28T01:05:34+09:00",
          "tree_id": "028aafd6279d8e771c171b9cc6540df69f5d9190",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bc62604b92c62c3ea40d157ddc976ba9f46997dd"
        },
        "date": 1769530377311,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 87652,
            "range": "± 49326",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 151730,
            "range": "± 47283",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 88319,
            "range": "± 20769",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 164265,
            "range": "± 32974",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 286498,
            "range": "± 84188",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 138325,
            "range": "± 34897",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 242066,
            "range": "± 100500",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 437249,
            "range": "± 105163",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 218572,
            "range": "± 48998",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 22952,
            "range": "± 6328",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 19251,
            "range": "± 5649",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 25652,
            "range": "± 22930",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 35864,
            "range": "± 8907",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 31196,
            "range": "± 8285",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 41275,
            "range": "± 11220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 67249,
            "range": "± 14975",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 58301,
            "range": "± 27398",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 66037,
            "range": "± 18935",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3201568,
            "range": "± 593439",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 83532958,
            "range": "± 14122557",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5067144,
            "range": "± 930767",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4721295,
            "range": "± 822748",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 136051041,
            "range": "± 21466216",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6080770,
            "range": "± 1040319",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 13388453,
            "range": "± 2731712",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 282209062,
            "range": "± 39856145",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6798856,
            "range": "± 1719268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "761132bc2464584799699f4aa83c906c697f26b9",
          "message": "docs: add website badge (#12)\n\n* docs: add website badge\n\n* docs: use dynamic website badge showing online status\n\nApply reviewer suggestion to use shields.io dynamic badge\nthat displays the website's active status instead of a static badge.",
          "timestamp": "2026-01-28T08:54:32+09:00",
          "tree_id": "ef366c70250e901009fa0bc188d244a02d9092e8",
          "url": "https://github.com/crane-valley/kylix-cli/commit/761132bc2464584799699f4aa83c906c697f26b9"
        },
        "date": 1769558485964,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 55755,
            "range": "± 6081",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 765270,
            "range": "± 67705",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 58165,
            "range": "± 7082",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111118,
            "range": "± 29255",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 396196,
            "range": "± 62036",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 113642,
            "range": "± 51692",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 156672,
            "range": "± 15437",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 232606,
            "range": "± 23330",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 162612,
            "range": "± 22533",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14417,
            "range": "± 1668",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13157,
            "range": "± 1970",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 17283,
            "range": "± 3927",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 27117,
            "range": "± 6895",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21989,
            "range": "± 2813",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 25156,
            "range": "± 6141",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 41375,
            "range": "± 4939",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 39844,
            "range": "± 12931",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 42526,
            "range": "± 6357",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2329436,
            "range": "± 394741",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 58473000,
            "range": "± 13645191",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3249165,
            "range": "± 725930",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4693552,
            "range": "± 1588862",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 124736854,
            "range": "± 19341235",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5680393,
            "range": "± 917087",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 12341312,
            "range": "± 3637649",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 231570062,
            "range": "± 23027241",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6023155,
            "range": "± 832781",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe905c163449de6ca3f5cb6b345dea736a3cebdd",
          "message": "fix: use URL-encoded format for shields.io website badge (#13)\n\n* docs: add website badge\n\n* docs: use dynamic website badge showing online status\n\nApply reviewer suggestion to use shields.io dynamic badge\nthat displays the website's active status instead of a static badge.\n\n* fix: use URL-encoded format for shields.io website badge\n\nUse official shields.io generator format with query parameter\nand URL encoding instead of path-based format.",
          "timestamp": "2026-01-28T09:14:30+09:00",
          "tree_id": "41f26597b74c752dc816c31159529816a7a95d9c",
          "url": "https://github.com/crane-valley/kylix-cli/commit/fe905c163449de6ca3f5cb6b345dea736a3cebdd"
        },
        "date": 1769559636163,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53835,
            "range": "± 3022",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 292214,
            "range": "± 8202",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 56827,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 104467,
            "range": "± 3619",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 342918,
            "range": "± 6910",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 94418,
            "range": "± 3594",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 151421,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 711351,
            "range": "± 22487",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 178118,
            "range": "± 22724",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 15016,
            "range": "± 1763",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13109,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15592,
            "range": "± 1668",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 24961,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 23069,
            "range": "± 2639",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 25630,
            "range": "± 2523",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 39873,
            "range": "± 2985",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 35037,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 39399,
            "range": "± 5695",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2570967,
            "range": "± 115211",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 68572458,
            "range": "± 7600024",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3407950,
            "range": "± 397025",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3768674,
            "range": "± 487524",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 87868188,
            "range": "± 8604103",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4683113,
            "range": "± 147987",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 8829961,
            "range": "± 309124",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 180291645,
            "range": "± 9743403",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4915456,
            "range": "± 441333",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eec1ad3db417af3b1c551ed425600cf0312a7a95",
          "message": "docs: add PLANS.md with CLI development roadmap (#14)\n\n* docs: add PLANS.md with CLI development roadmap\n\nMove CLI-related tasks from kylix repository to track development\npriorities including bench compare CI, function refactoring, and\ncode quality improvements.\n\n* docs: simplify PLANS.md\n\nRemove redundant sections and consolidate task list.",
          "timestamp": "2026-01-28T11:38:11+09:00",
          "tree_id": "9dab9097dfd49e7d829f5603699f2bac7cf88553",
          "url": "https://github.com/crane-valley/kylix-cli/commit/eec1ad3db417af3b1c551ed425600cf0312a7a95"
        },
        "date": 1769568320193,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 75794,
            "range": "± 16767",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 159640,
            "range": "± 83680",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 83905,
            "range": "± 33439",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 169543,
            "range": "± 97742",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 421429,
            "range": "± 97154",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 118315,
            "range": "± 26818",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 259884,
            "range": "± 69899",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 1080074,
            "range": "± 294529",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 215242,
            "range": "± 66191",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 21001,
            "range": "± 6606",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 20278,
            "range": "± 5876",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 21977,
            "range": "± 13582",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 31415,
            "range": "± 6377",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 30110,
            "range": "± 6246",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 36559,
            "range": "± 7161",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 53278,
            "range": "± 14991",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 55233,
            "range": "± 13155",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 41272,
            "range": "± 16031",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3038407,
            "range": "± 416677",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 83749604,
            "range": "± 17835113",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4887108,
            "range": "± 950475",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3905472,
            "range": "± 811541",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 104639979,
            "range": "± 17170330",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5003118,
            "range": "± 1581005",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 8950309,
            "range": "± 1220038",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 254063562,
            "range": "± 30601154",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6200304,
            "range": "± 1073013",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfb26e7c8fb5d48d4ab59c5f56bf935cb5471199",
          "message": "fix: use fixed seed for ML-DSA benchmark stability (#15)\n\n* fix: use fixed seed for ML-DSA benchmark stability\n\nUse a seeded RNG for keygen in sign/verify benchmarks to eliminate\nvariance from rejection sampling. The same key is now generated\nacross benchmark runs, ensuring consistent rejection sampling paths.\n\nThis addresses the benchmark instability seen in CI where ML-DSA-65\nsign times varied significantly (e.g., 170ms vs 674ms).\n\n* fix: use fixed seed for ML-KEM benchmark consistency\n\nApply the same seeded RNG approach to ML-KEM benchmarks for\nconsistency with ML-DSA and improved reproducibility across\nCI runs.\n\n* fix: use fixed seed for SLH-DSA benchmark consistency\n\nApply the same seeded RNG approach to SLH-DSA benchmarks for\nconsistency across all algorithm benchmarks.\n\n* ci: reduce benchmark alert threshold to 150%\n\nWith fixed seeds eliminating rejection sampling variance, we can\nuse a stricter threshold to detect actual performance regressions.\n\n* style: consolidate imports and simplify comments\n\nAddress review feedback:\n- Consolidate rand imports into single use statement\n- Remove misleading hex comment from seed value",
          "timestamp": "2026-01-28T12:25:08+09:00",
          "tree_id": "59726eda5aada9da1c4a668bab1d4bb3805f5b81",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bfb26e7c8fb5d48d4ab59c5f56bf935cb5471199"
        },
        "date": 1769571090583,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 56809,
            "range": "± 2842",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 445528,
            "range": "± 63801",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 65733,
            "range": "± 10876",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 124173,
            "range": "± 23496",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 261748,
            "range": "± 58951",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 94096,
            "range": "± 10832",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 149982,
            "range": "± 16291",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 326198,
            "range": "± 48093",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 152482,
            "range": "± 12401",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 13618,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 12801,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15197,
            "range": "± 4308",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 24862,
            "range": "± 4260",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 24399,
            "range": "± 5400",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24593,
            "range": "± 3540",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 51638,
            "range": "± 11094",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 34685,
            "range": "± 5396",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 44633,
            "range": "± 7316",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2356823,
            "range": "± 355698",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63457521,
            "range": "± 7610330",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3189562,
            "range": "± 349873",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3453479,
            "range": "± 305670",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 85257812,
            "range": "± 5039763",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4459479,
            "range": "± 146488",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 11282430,
            "range": "± 2060471",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 221464937,
            "range": "± 38993855",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5161418,
            "range": "± 741779",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb3d7e3051e146f4f1cac9559b20fcf358ff9a12",
          "message": "docs: add security warning to README (#16)\n\n* docs: add security warning to README\n\nAdd a prominent warning that this CLI uses the experimental Kylix\nlibrary which has NOT been audited and is NOT intended for production\nuse. Link to the security policy in the main kylix repository.\n\n* docs: move security warning to top of README\n\nMove the Security section right after the intro paragraph so users\nsee the warning before proceeding with installation or usage.",
          "timestamp": "2026-01-28T12:39:02+09:00",
          "tree_id": "46a4b4238b20e92ee030d906d4a52b53447cb117",
          "url": "https://github.com/crane-valley/kylix-cli/commit/fb3d7e3051e146f4f1cac9559b20fcf358ff9a12"
        },
        "date": 1769571937106,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 72154,
            "range": "± 24271",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 317359,
            "range": "± 131251",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 60908,
            "range": "± 9277",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 112979,
            "range": "± 26867",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 280525,
            "range": "± 44950",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109518,
            "range": "± 82866",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 157037,
            "range": "± 20676",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 303395,
            "range": "± 51501",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 163183,
            "range": "± 19756",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16135,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13234,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 16188,
            "range": "± 2130",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29720,
            "range": "± 5703",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 24993,
            "range": "± 3575",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32110,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 49390,
            "range": "± 9943",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 48303,
            "range": "± 29316",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 53349,
            "range": "± 11435",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2542582,
            "range": "± 415066",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 71340771,
            "range": "± 16096516",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4232362,
            "range": "± 729386",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4089531,
            "range": "± 657071",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 97481208,
            "range": "± 25070821",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6230257,
            "range": "± 1279783",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 13078875,
            "range": "± 2484073",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 239777604,
            "range": "± 35459268",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4950643,
            "range": "± 667265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "207159354d2fe1b564512a60186207b6d4cd3862",
          "message": "docs: update PLANS.md with refactoring analysis (#18)\n\n- Remove is_dsa() task (addressed in PR #17)\n- Document Long Functions dependency on kylix-pqc trait unification\n- Document Error Patterns as Won't Fix (library API design)",
          "timestamp": "2026-01-28T13:44:09+09:00",
          "tree_id": "d2aa0065c9fce90615fb654c69ee5aa2647172f0",
          "url": "https://github.com/crane-valley/kylix-cli/commit/207159354d2fe1b564512a60186207b6d4cd3862"
        },
        "date": 1769575832710,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53236,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 302206,
            "range": "± 8117",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 56933,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 104978,
            "range": "± 9673",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 268660,
            "range": "± 16894",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 96349,
            "range": "± 11831",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 150244,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 323756,
            "range": "± 43667",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 163829,
            "range": "± 14637",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14135,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13212,
            "range": "± 1320",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15045,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 25300,
            "range": "± 2237",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21612,
            "range": "± 1097",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24828,
            "range": "± 3289",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 39521,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 35063,
            "range": "± 3744",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 41496,
            "range": "± 5522",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2279448,
            "range": "± 94023",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 54864813,
            "range": "± 4442161",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3167122,
            "range": "± 137354",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3757437,
            "range": "± 374958",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 87071749,
            "range": "± 6201703",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4945029,
            "range": "± 472516",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10192812,
            "range": "± 1401049",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 198810354,
            "range": "± 16694675",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5669220,
            "range": "± 586477",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiyoaki.tsurutani@gmail.com",
            "name": "Kiyoaki Tsurutani",
            "username": "kiyoaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "881702a7a61af774f46b98becb35350d08d9493f",
          "message": "refactor: remove unused is_dsa() method (#17)\n\nThe method was marked with #[allow(dead_code)] and never called.\nIt can be replaced with !is_kem() if needed in the future.",
          "timestamp": "2026-01-28T13:44:29+09:00",
          "tree_id": "95f0f4dc67ac79dc982a994cf3b2fe0374635d14",
          "url": "https://github.com/crane-valley/kylix-cli/commit/881702a7a61af774f46b98becb35350d08d9493f"
        },
        "date": 1769575855054,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 74646,
            "range": "± 12304",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 347745,
            "range": "± 73427",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 63025,
            "range": "± 9509",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 103879,
            "range": "± 4030",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 271403,
            "range": "± 12508",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 93991,
            "range": "± 10679",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 153827,
            "range": "± 11255",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 339892,
            "range": "± 56176",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 183210,
            "range": "± 44707",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14335,
            "range": "± 3347",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16143,
            "range": "± 3510",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 19523,
            "range": "± 4148",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 30500,
            "range": "± 6280",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28146,
            "range": "± 7740",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 27906,
            "range": "± 7418",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 43768,
            "range": "± 6768",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 35981,
            "range": "± 8991",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 44258,
            "range": "± 6150",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2432885,
            "range": "± 357129",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 61004833,
            "range": "± 7388130",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3235068,
            "range": "± 332449",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3833427,
            "range": "± 462364",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 97572771,
            "range": "± 15397000",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4893202,
            "range": "± 663629",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 8865593,
            "range": "± 1845821",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 260829854,
            "range": "± 25578235",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6789297,
            "range": "± 1385171",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}