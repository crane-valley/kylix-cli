window.BENCHMARK_DATA = {
  "lastUpdate": 1769559629979,
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
      }
    ]
  }
}