window.BENCHMARK_DATA = {
  "lastUpdate": 1770462831470,
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
        "date": 1769587287697,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 89496,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 641939,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 102070,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 164340,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 551126,
            "range": "± 2066",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 162890,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 247650,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 581507,
            "range": "± 20400",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 266407,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24580,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27365,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 33848,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 42756,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 44742,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 53049,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 68284,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 68119,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 78070,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3841816,
            "range": "± 93048",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 90199413,
            "range": "± 974474",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5399294,
            "range": "± 51297",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5725908,
            "range": "± 15126",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 147226010,
            "range": "± 470641",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 8005114,
            "range": "± 46939",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14766361,
            "range": "± 40175",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 294795989,
            "range": "± 1057936",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7804132,
            "range": "± 70887",
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
          "id": "b3432cc813834676d9b62fdb359eb67127db2ab1",
          "message": "chore: update kylix-pqc to v0.4.3 (#20)\n\n- Update Cargo.lock to kylix-pqc v0.4.3\n- Adapt to breaking change: SLH-DSA SigningKey::to_bytes() now returns\n  Zeroizing<Vec<u8>>\n- Use Zeroizing<Vec<u8>> for all secret key bytes in keygen\n- Remove manual zeroize() call (Zeroizing handles it automatically)",
          "timestamp": "2026-01-28T17:01:53+09:00",
          "tree_id": "6b1c4c5a33b83650b4e845d19a32a32caf9e71da",
          "url": "https://github.com/crane-valley/kylix-cli/commit/b3432cc813834676d9b62fdb359eb67127db2ab1"
        },
        "date": 1769587713244,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95180,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 733775,
            "range": "± 13243",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 114091,
            "range": "± 3386",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172233,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 613907,
            "range": "± 3358",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 182579,
            "range": "± 4384",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 260717,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 652902,
            "range": "± 1213",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297532,
            "range": "± 5760",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24504,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27625,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34566,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 42955,
            "range": "± 1387",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45443,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54041,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69036,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 69802,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81809,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3678999,
            "range": "± 12676",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86698674,
            "range": "± 113644",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5164602,
            "range": "± 9561",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5415683,
            "range": "± 90817",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139750919,
            "range": "± 147688",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7569115,
            "range": "± 175373",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14248107,
            "range": "± 77739",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 285981299,
            "range": "± 2712535",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7589588,
            "range": "± 27491",
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
          "id": "980c7de0df4eb4681c10bc7689bdc0ef7d7d30c5",
          "message": "chore: release v0.5.1 (#21)\n\n- Update version to 0.5.1\n- Update CHANGELOG with v0.5.1 release notes",
          "timestamp": "2026-01-28T17:06:20+09:00",
          "tree_id": "af74b353512cfd55a58b715830227f71c3f0b959",
          "url": "https://github.com/crane-valley/kylix-cli/commit/980c7de0df4eb4681c10bc7689bdc0ef7d7d30c5"
        },
        "date": 1769587978864,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95166,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 731271,
            "range": "± 4488",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115454,
            "range": "± 4190",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171844,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 622988,
            "range": "± 2888",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183989,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 260619,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 662016,
            "range": "± 2718",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298317,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24881,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27820,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34858,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43493,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45773,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54320,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69915,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70223,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81087,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3681051,
            "range": "± 87644",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86689550,
            "range": "± 230685",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5195449,
            "range": "± 26416",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5416137,
            "range": "± 25472",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139766223,
            "range": "± 256946",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7599679,
            "range": "± 38377",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14249518,
            "range": "± 39206",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286018179,
            "range": "± 2543350",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7628345,
            "range": "± 243339",
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
          "id": "bd93f8d240d2d123889d3f4b0a37ece46d5d223d",
          "message": "docs: clarify release process in CLAUDE.md (#22)\n\n* docs: clarify release process in CLAUDE.md\n\ncargo-dist creates the GitHub Release automatically from a tag.\nDo not use `gh release create` as it conflicts with cargo-dist.\n\n* docs: clarify version/tag relationship per review",
          "timestamp": "2026-01-28T17:13:46+09:00",
          "tree_id": "b36733c3bd75346adc4086c311cbc42b65789e21",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bd93f8d240d2d123889d3f4b0a37ece46d5d223d"
        },
        "date": 1769588423805,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95460,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 728778,
            "range": "± 1412",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115501,
            "range": "± 3079",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171820,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 622583,
            "range": "± 1097",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183924,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 262019,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 660487,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297880,
            "range": "± 2580",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24799,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27819,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34897,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43601,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45734,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54405,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69984,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70256,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81243,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3681906,
            "range": "± 20196",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86754074,
            "range": "± 118071",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5244637,
            "range": "± 48110",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5434777,
            "range": "± 206187",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139903940,
            "range": "± 245633",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7536084,
            "range": "± 17946",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14280127,
            "range": "± 42207",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 287016145,
            "range": "± 1465210",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7571051,
            "range": "± 17758",
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
          "id": "069b54fed9eb41cd6e9168e5201e8bebf1a7adf6",
          "message": "docs: add shell completions usage examples to README (#23)\n\n* docs: add shell completions usage examples to README\n\n* docs: add mkdir -p and separate PowerShell code block",
          "timestamp": "2026-01-28T17:36:17+09:00",
          "tree_id": "757a72f96a9be288357f1871dec03e2b0e2887d5",
          "url": "https://github.com/crane-valley/kylix-cli/commit/069b54fed9eb41cd6e9168e5201e8bebf1a7adf6"
        },
        "date": 1769589776766,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95637,
            "range": "± 7514",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 729257,
            "range": "± 1426",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115415,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172042,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 622168,
            "range": "± 6135",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 185208,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 261328,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 662172,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 299864,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24775,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 28027,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34814,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43476,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45704,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54431,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70124,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70562,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81239,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3684041,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86885393,
            "range": "± 465147",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5212502,
            "range": "± 37758",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5430439,
            "range": "± 217383",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 140130409,
            "range": "± 185784",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7624475,
            "range": "± 53726",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14261786,
            "range": "± 180231",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286323968,
            "range": "± 1168501",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7637749,
            "range": "± 64306",
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
          "id": "6a6bdb5181e2873826ac549a06427d55abc70579",
          "message": "chore: increase benchmark alert threshold to 200% (#24)",
          "timestamp": "2026-01-28T17:40:50+09:00",
          "tree_id": "0946a284fe32701d76173e5b4cfe0c3e81bf5c93",
          "url": "https://github.com/crane-valley/kylix-cli/commit/6a6bdb5181e2873826ac549a06427d55abc70579"
        },
        "date": 1769590048003,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95221,
            "range": "± 3007",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 728749,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115418,
            "range": "± 3892",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171790,
            "range": "± 740",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 621583,
            "range": "± 13275",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183903,
            "range": "± 4899",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 260795,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 660515,
            "range": "± 1258",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297802,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24820,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27882,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34788,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43673,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45737,
            "range": "± 2952",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54399,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 70053,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70276,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81148,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3679948,
            "range": "± 10805",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86704751,
            "range": "± 302488",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5138791,
            "range": "± 24997",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5417226,
            "range": "± 23461",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 139780268,
            "range": "± 164878",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7527232,
            "range": "± 18342",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14248521,
            "range": "± 34802",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 285933022,
            "range": "± 354847",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7555171,
            "range": "± 230414",
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
          "id": "5cd277b2998f13334f32a5e465a21835c2636da8",
          "message": "refactor: improve external tool detection with environment variables (#25)\n\n* refactor: improve external tool detection with environment variables\n\n- Add OPENSSL_DIR and OPENSSL_ROOT_DIR environment variable support\n- Add LIBOQS_DIR environment variable support\n- Remove hardcoded vcpkg paths (C:\\vcpkg, D:\\vcpkg, E:\\vcpkg)\n- Remove hardcoded FireDaemon OpenSSL path on Windows\n\nDetection priority:\n- OpenSSL: OPENSSL_DIR/OPENSSL_ROOT_DIR → PATH → platform fallbacks\n- liboqs: LIBOQS_SPEED_KEM → LIBOQS_DIR → PATH → VCPKG_ROOT\n\n* docs: update PLANS.md with tool detection refactor status\n\n* style: apply cargo fmt\n\n* refactor: use std::env::consts::EXE_SUFFIX for portable exe names\n\n* refactor: simplify path collection by removing redundant exists() checks",
          "timestamp": "2026-01-28T19:02:20+09:00",
          "tree_id": "a3b704bb1e7408970b532ab915bfa4c7ee7935aa",
          "url": "https://github.com/crane-valley/kylix-cli/commit/5cd277b2998f13334f32a5e465a21835c2636da8"
        },
        "date": 1769594945188,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95840,
            "range": "± 3381",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 728151,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115468,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171936,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 621927,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183862,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 260632,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 661108,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298200,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24805,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27819,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34840,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43483,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45677,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54370,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69902,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70215,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81163,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3680943,
            "range": "± 31496",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 87436252,
            "range": "± 518404",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5139828,
            "range": "± 23211",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5505424,
            "range": "± 204919",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 140041551,
            "range": "± 237945",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7525491,
            "range": "± 18959",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14328949,
            "range": "± 79159",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 287220430,
            "range": "± 4495134",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7548849,
            "range": "± 87495",
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
          "id": "dab40511e863568f6bf323a555c065a22f87a89a",
          "message": "docs: clarify secret key memory protection in changelog (#26)\n\n* docs: clarify secret key memory protection in changelog\n\n- Newly generated keys use Zeroizing<Vec<u8>>\n- Keys read from files are explicitly zeroized after use\n\nAddresses review comment from PR #21\n\n* docs: use sub-bullets for clarity",
          "timestamp": "2026-01-28T20:52:57+09:00",
          "tree_id": "3ab3c7445dc3833533776244374c845d8cedc515",
          "url": "https://github.com/crane-valley/kylix-cli/commit/dab40511e863568f6bf323a555c065a22f87a89a"
        },
        "date": 1769601575112,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95167,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 728677,
            "range": "± 2489",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115457,
            "range": "± 1864",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171742,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 622690,
            "range": "± 10923",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 184085,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 260482,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 664941,
            "range": "± 2746",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 298597,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24903,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27885,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34798,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43521,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45741,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54292,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69902,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70199,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81464,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3699683,
            "range": "± 13450",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 86930502,
            "range": "± 200098",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5141689,
            "range": "± 32847",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5440641,
            "range": "± 83382",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 140156050,
            "range": "± 150408",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7589348,
            "range": "± 53254",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14251982,
            "range": "± 29574",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 286421951,
            "range": "± 879698",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7630370,
            "range": "± 67556",
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
          "id": "c1a1abd813f30d17c593dee09cbc0d8865a41bca",
          "message": "ci: add external tool comparison workflow (#27)\n\n* ci: add external tool comparison workflow\n\nAdd CI job to test liboqs detection and benchmark comparison on\nLinux and macOS. This validates the tool detection refactoring\nfrom PR #25 works correctly in CI environments.\n\nThe workflow:\n- Builds liboqs from source on ubuntu-latest and macos-latest\n- Sets LIBOQS_DIR environment variable\n- Runs `kylix bench --compare --with liboqs` to verify detection\n\n* ci: post external tool benchmark results to PR comment\n\n- Add pull-requests: write permission to external-tool-compare job\n- Output benchmark results in markdown format\n- Post results as PR comment using gh CLI\n\n* fix: show OpenSSL note only when OpenSSL is detected\n\nThe benchmark comparison output previously always displayed a note\nabout OpenSSL process overhead, even when OpenSSL was not detected.\nNow the note is only shown when OpenSSL benchmarks are included in\nthe comparison results.\n\n* docs: update PLANS.md with current progress\n\n* ci: add explicit liboqs detection verification\n\n- Add step to verify speed_kem binary exists after build\n- Check benchmark output contains \"liboqs\" to confirm detection\n- Fail CI if liboqs is not detected (addresses review feedback)\n\n* fix: remove ANSI color codes from PR comment output\n\n* ci: skip PR comment for forked PRs",
          "timestamp": "2026-01-28T23:09:37+09:00",
          "tree_id": "5ce130b2885a346b36b9b822537861b54741763a",
          "url": "https://github.com/crane-valley/kylix-cli/commit/c1a1abd813f30d17c593dee09cbc0d8865a41bca"
        },
        "date": 1769609779527,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95136,
            "range": "± 4855",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 728058,
            "range": "± 11793",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 115463,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 171756,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 621551,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 183910,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 260624,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 660843,
            "range": "± 6141",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297828,
            "range": "± 5546",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24808,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27811,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34839,
            "range": "± 1162",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43468,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45889,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 54353,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69787,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70202,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81198,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3732451,
            "range": "± 35520",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 87614233,
            "range": "± 440333",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5139172,
            "range": "± 11984",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5502237,
            "range": "± 43574",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 141118257,
            "range": "± 239585",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7522882,
            "range": "± 20417",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14310802,
            "range": "± 48634",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 288026496,
            "range": "± 380098",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7557235,
            "range": "± 54475",
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
          "id": "ad42372f44c6d67f31c0a4c2f41a97c6f02aaf4a",
          "message": "docs: mark Bench Compare CI as completed (#28)",
          "timestamp": "2026-02-02T21:29:48+09:00",
          "tree_id": "b5204c84971049b36b57319b9d7582a5c54ef34c",
          "url": "https://github.com/crane-valley/kylix-cli/commit/ad42372f44c6d67f31c0a4c2f41a97c6f02aaf4a"
        },
        "date": 1770035790018,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 89297,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 640628,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 101684,
            "range": "± 3175",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 163606,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 549529,
            "range": "± 3977",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 162343,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 247288,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 580373,
            "range": "± 1854",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 266230,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24575,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27225,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 33789,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 42729,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 44427,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 52495,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 68597,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 67754,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 77932,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3753220,
            "range": "± 26144",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 89749749,
            "range": "± 291196",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5274370,
            "range": "± 7862",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5658259,
            "range": "± 141702",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 145469985,
            "range": "± 292053",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7802850,
            "range": "± 11298",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14779206,
            "range": "± 59873",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 294848579,
            "range": "± 367344",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7731013,
            "range": "± 22260",
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
          "id": "581ff0bdc2f2de0bdc914785baff731d7056a0e3",
          "message": "deps(deps): bump clap from 4.5.54 to 4.5.56 (#30)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.54 to 4.5.56.\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.54...clap_complete-v4.5.56)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-version: 4.5.56\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-02T21:30:52+09:00",
          "tree_id": "11378311c016c24fb4472357d2b48e25c5219396",
          "url": "https://github.com/crane-valley/kylix-cli/commit/581ff0bdc2f2de0bdc914785baff731d7056a0e3"
        },
        "date": 1770035865746,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 89207,
            "range": "± 2334",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 641150,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 101651,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 163450,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 550027,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 162409,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 247236,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 581246,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 266127,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 24425,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27224,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 33641,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 42361,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 44493,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 52675,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 67804,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 67908,
            "range": "± 1031",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 77790,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3749752,
            "range": "± 6426",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 89360259,
            "range": "± 346217",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 5321280,
            "range": "± 45090",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5671228,
            "range": "± 59585",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 145493687,
            "range": "± 289064",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7867224,
            "range": "± 44221",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 14688335,
            "range": "± 28888",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 293826781,
            "range": "± 3278034",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7794270,
            "range": "± 91866",
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
          "id": "ba6de3fa1a272881559bea8a79e12118bdd88f80",
          "message": "deps(deps): bump kylix-pqc from 0.4.3 to 0.4.4 (#29)\n\n* deps(deps): bump kylix-pqc from 0.4.3 to 0.4.4\n\nBumps [kylix-pqc](https://github.com/crane-valley/kylix) from 0.4.3 to 0.4.4.\n- [Release notes](https://github.com/crane-valley/kylix/releases)\n- [Changelog](https://github.com/crane-valley/kylix/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/crane-valley/kylix/compare/v0.4.3...v0.4.4)\n\n---\nupdated-dependencies:\n- dependency-name: kylix-pqc\n  dependency-version: 0.4.4\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* fix: update SLH-DSA API calls for kylix-pqc 0.4.4\n\n- Replace `to_bytes()` with `as_bytes().to_vec()` for key serialization\n- Replace `ok_or_else()` with `map_err()` for `from_bytes()` which now\n  returns `Result` instead of `Option`\n- Replace `sig.as_ref()` with `sig.as_bytes()` for consistency\n\n* docs: update PLANS.md for kylix-pqc 0.4.4 API unification\n\nMark match arm dedup as unblocked now that all algorithms share\nconsistent as_bytes()/from_bytes() -> Result API.\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Kiyoaki Tsurutani <kiyoaki.tsurutani@gmail.com>",
          "timestamp": "2026-02-02T21:57:59+09:00",
          "tree_id": "3c716ff0c3d41776af43c3467933efd9af4c651d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/ba6de3fa1a272881559bea8a79e12118bdd88f80"
        },
        "date": 1770037467163,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 89922,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 638968,
            "range": "± 4789",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 101305,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 164471,
            "range": "± 2635",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 549870,
            "range": "± 17809",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 161689,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 247707,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 579887,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 265468,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 25321,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27785,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34657,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43694,
            "range": "± 8786",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45240,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 53892,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69566,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 68657,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 79792,
            "range": "± 4975",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3560421,
            "range": "± 17057",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 83322674,
            "range": "± 182445",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4929760,
            "range": "± 11804",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5206492,
            "range": "± 8880",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 134619908,
            "range": "± 1277373",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7228738,
            "range": "± 12240",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 13764061,
            "range": "± 21423",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 276576248,
            "range": "± 5066501",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7264625,
            "range": "± 12262",
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
          "id": "14c6725e5bb8fdfef7a1e7aa9cb11d4e10c2fb91",
          "message": "refactor: deduplicate match arms with dispatch macros (#31)\n\n* refactor: deduplicate match arms with dispatch macros\n\nAdd 6 macros (kem_keygen!, dsa_keygen!, kem_encaps!, kem_decaps!,\ndsa_sign!, dsa_verify!) that extract the per-algorithm boilerplate\nfrom cmd_keygen, cmd_encaps, cmd_decaps, cmd_sign, and cmd_verify.\n\nReduces 36 near-identical multi-line match arms to one-liner macro\ninvocations (-234/+166 lines net reduction in main.rs).\n\n* docs: update PLANS.md - match arm dedup completed (PR #31)",
          "timestamp": "2026-02-02T23:29:51+09:00",
          "tree_id": "a815c955d935d1323b7ce9a7c097b38aef04047d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/14c6725e5bb8fdfef7a1e7aa9cb11d4e10c2fb91"
        },
        "date": 1770042977429,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 90150,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 639445,
            "range": "± 1882",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 101413,
            "range": "± 2945",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 164708,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 548482,
            "range": "± 2108",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 161869,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 247835,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 580317,
            "range": "± 2115",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 265682,
            "range": "± 3220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 25344,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 27811,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 34625,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 43673,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 45323,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 53899,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 69584,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 68697,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 80031,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3560807,
            "range": "± 13186",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 83315961,
            "range": "± 164874",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4925135,
            "range": "± 8571",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5209096,
            "range": "± 8683",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 134678539,
            "range": "± 747906",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7226637,
            "range": "± 10031",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 13768906,
            "range": "± 23400",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 276792126,
            "range": "± 381708",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7273174,
            "range": "± 54121",
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
          "id": "a181b62b4bd3d3abc36f0095afba4af9966c079d",
          "message": "chore: bump version to 0.5.2 (#32)\n\n* chore: bump version to 0.5.2\n\nUpdate for kylix-pqc v0.4.4 API changes and dispatch macro refactor.\n\n* docs: merge Refactored into Changed section in CHANGELOG\n\nKeep a Changelog standard only defines Added, Changed, Deprecated,\nRemoved, Fixed, and Security categories.",
          "timestamp": "2026-02-03T00:27:55+09:00",
          "tree_id": "b6ffae839b427da29811f75dfc0343bd3e3db420",
          "url": "https://github.com/crane-valley/kylix-cli/commit/a181b62b4bd3d3abc36f0095afba4af9966c079d"
        },
        "date": 1770046463580,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 95688,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 714058,
            "range": "± 2031",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 114086,
            "range": "± 3569",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 172769,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 612462,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 182742,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 263099,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 651873,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 297488,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 25473,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 28329,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 35303,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 44373,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 46387,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 55141,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 71011,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 70951,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 81631,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3551548,
            "range": "± 6473",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 82931200,
            "range": "± 944091",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4901520,
            "range": "± 7584",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 5201037,
            "range": "± 11766",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 134173239,
            "range": "± 557167",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 7195776,
            "range": "± 16922",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 13675249,
            "range": "± 44297",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 275711048,
            "range": "± 915555",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7206730,
            "range": "± 16472",
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
          "id": "b3432cc813834676d9b62fdb359eb67127db2ab1",
          "message": "chore: update kylix-pqc to v0.4.3 (#20)\n\n- Update Cargo.lock to kylix-pqc v0.4.3\n- Adapt to breaking change: SLH-DSA SigningKey::to_bytes() now returns\n  Zeroizing<Vec<u8>>\n- Use Zeroizing<Vec<u8>> for all secret key bytes in keygen\n- Remove manual zeroize() call (Zeroizing handles it automatically)",
          "timestamp": "2026-01-28T17:01:53+09:00",
          "tree_id": "6b1c4c5a33b83650b4e845d19a32a32caf9e71da",
          "url": "https://github.com/crane-valley/kylix-cli/commit/b3432cc813834676d9b62fdb359eb67127db2ab1"
        },
        "date": 1769587672372,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 61956,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 374991,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68815,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111710,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 328021,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109259,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173246,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 357249,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181857,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16773,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16875,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20211,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28991,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28054,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32426,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46252,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43957,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50117,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2607031,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63786289,
            "range": "± 40759",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3778440,
            "range": "± 5541",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3966522,
            "range": "± 12857",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102439006,
            "range": "± 49872",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5512585,
            "range": "± 6410",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10488027,
            "range": "± 15575",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210635003,
            "range": "± 393781",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5541603,
            "range": "± 7544",
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
          "id": "980c7de0df4eb4681c10bc7689bdc0ef7d7d30c5",
          "message": "chore: release v0.5.1 (#21)\n\n- Update version to 0.5.1\n- Update CHANGELOG with v0.5.1 release notes",
          "timestamp": "2026-01-28T17:06:20+09:00",
          "tree_id": "af74b353512cfd55a58b715830227f71c3f0b959",
          "url": "https://github.com/crane-valley/kylix-cli/commit/980c7de0df4eb4681c10bc7689bdc0ef7d7d30c5"
        },
        "date": 1769587941858,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 61977,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371738,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68651,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111691,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326347,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109541,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173344,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355111,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181106,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16777,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16857,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20251,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28964,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28080,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32451,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46228,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43967,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50049,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2603382,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63729029,
            "range": "± 130864",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3773831,
            "range": "± 5972",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3962829,
            "range": "± 4989",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102224433,
            "range": "± 95145",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5501332,
            "range": "± 8233",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10493232,
            "range": "± 17882",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210592588,
            "range": "± 110628",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5547421,
            "range": "± 9033",
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
          "id": "bd93f8d240d2d123889d3f4b0a37ece46d5d223d",
          "message": "docs: clarify release process in CLAUDE.md (#22)\n\n* docs: clarify release process in CLAUDE.md\n\ncargo-dist creates the GitHub Release automatically from a tag.\nDo not use `gh release create` as it conflicts with cargo-dist.\n\n* docs: clarify version/tag relationship per review",
          "timestamp": "2026-01-28T17:13:46+09:00",
          "tree_id": "b36733c3bd75346adc4086c311cbc42b65789e21",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bd93f8d240d2d123889d3f4b0a37ece46d5d223d"
        },
        "date": 1769588384440,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62043,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371972,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68866,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111801,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326325,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109476,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173335,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355280,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181260,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16781,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16860,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20225,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28987,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28027,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32449,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46269,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43972,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50030,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2602720,
            "range": "± 1439",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63684676,
            "range": "± 50866",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3774471,
            "range": "± 7969",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3963850,
            "range": "± 5351",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102134815,
            "range": "± 56638",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5499330,
            "range": "± 7231",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10488005,
            "range": "± 17153",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210382192,
            "range": "± 290531",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5546214,
            "range": "± 8925",
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
          "id": "069b54fed9eb41cd6e9168e5201e8bebf1a7adf6",
          "message": "docs: add shell completions usage examples to README (#23)\n\n* docs: add shell completions usage examples to README\n\n* docs: add mkdir -p and separate PowerShell code block",
          "timestamp": "2026-01-28T17:36:17+09:00",
          "tree_id": "757a72f96a9be288357f1871dec03e2b0e2887d5",
          "url": "https://github.com/crane-valley/kylix-cli/commit/069b54fed9eb41cd6e9168e5201e8bebf1a7adf6"
        },
        "date": 1769589734084,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 61958,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371892,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68762,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111796,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326140,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109717,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173404,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355173,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181109,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16763,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16865,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20213,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28982,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28026,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32455,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46253,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43986,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50002,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2602313,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63664564,
            "range": "± 30706",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3778272,
            "range": "± 6730",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3965367,
            "range": "± 2964",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102144152,
            "range": "± 67877",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5498673,
            "range": "± 5954",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10482166,
            "range": "± 14741",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210260032,
            "range": "± 95720",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5545828,
            "range": "± 8869",
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
          "id": "6a6bdb5181e2873826ac549a06427d55abc70579",
          "message": "chore: increase benchmark alert threshold to 200% (#24)",
          "timestamp": "2026-01-28T17:40:50+09:00",
          "tree_id": "0946a284fe32701d76173e5b4cfe0c3e81bf5c93",
          "url": "https://github.com/crane-valley/kylix-cli/commit/6a6bdb5181e2873826ac549a06427d55abc70579"
        },
        "date": 1769590007696,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62035,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371656,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68716,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111785,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326228,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109557,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173374,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355362,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181085,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16749,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16859,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20234,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29004,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28008,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32467,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46233,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43969,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50042,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2602219,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63694155,
            "range": "± 33087",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3775564,
            "range": "± 5418",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3961216,
            "range": "± 5243",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102156996,
            "range": "± 134549",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5499303,
            "range": "± 8234",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10485643,
            "range": "± 16704",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210291509,
            "range": "± 147445",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5546022,
            "range": "± 9484",
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
          "id": "5cd277b2998f13334f32a5e465a21835c2636da8",
          "message": "refactor: improve external tool detection with environment variables (#25)\n\n* refactor: improve external tool detection with environment variables\n\n- Add OPENSSL_DIR and OPENSSL_ROOT_DIR environment variable support\n- Add LIBOQS_DIR environment variable support\n- Remove hardcoded vcpkg paths (C:\\vcpkg, D:\\vcpkg, E:\\vcpkg)\n- Remove hardcoded FireDaemon OpenSSL path on Windows\n\nDetection priority:\n- OpenSSL: OPENSSL_DIR/OPENSSL_ROOT_DIR → PATH → platform fallbacks\n- liboqs: LIBOQS_SPEED_KEM → LIBOQS_DIR → PATH → VCPKG_ROOT\n\n* docs: update PLANS.md with tool detection refactor status\n\n* style: apply cargo fmt\n\n* refactor: use std::env::consts::EXE_SUFFIX for portable exe names\n\n* refactor: simplify path collection by removing redundant exists() checks",
          "timestamp": "2026-01-28T19:02:20+09:00",
          "tree_id": "a3b704bb1e7408970b532ab915bfa4c7ee7935aa",
          "url": "https://github.com/crane-valley/kylix-cli/commit/5cd277b2998f13334f32a5e465a21835c2636da8"
        },
        "date": 1769594900224,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62031,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371814,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68724,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111674,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326286,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109581,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173420,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355298,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181326,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16751,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16873,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20231,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28976,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28036,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32468,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46200,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43914,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50041,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2602645,
            "range": "± 1131",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63694168,
            "range": "± 33756",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3774981,
            "range": "± 5042",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3962951,
            "range": "± 5075",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102136542,
            "range": "± 44979",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5498208,
            "range": "± 8567",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10484934,
            "range": "± 17171",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210267408,
            "range": "± 110841",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5544979,
            "range": "± 9903",
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
          "id": "dab40511e863568f6bf323a555c065a22f87a89a",
          "message": "docs: clarify secret key memory protection in changelog (#26)\n\n* docs: clarify secret key memory protection in changelog\n\n- Newly generated keys use Zeroizing<Vec<u8>>\n- Keys read from files are explicitly zeroized after use\n\nAddresses review comment from PR #21\n\n* docs: use sub-bullets for clarity",
          "timestamp": "2026-01-28T20:52:57+09:00",
          "tree_id": "3ab3c7445dc3833533776244374c845d8cedc515",
          "url": "https://github.com/crane-valley/kylix-cli/commit/dab40511e863568f6bf323a555c065a22f87a89a"
        },
        "date": 1769601534935,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62013,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371798,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68787,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111705,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326276,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109566,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173411,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355609,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181210,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16759,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16858,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20209,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28972,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28044,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32454,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46190,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43923,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50025,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2603992,
            "range": "± 13056",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63727859,
            "range": "± 55355",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3775823,
            "range": "± 6371",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3970664,
            "range": "± 9454",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102200926,
            "range": "± 90583",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5498751,
            "range": "± 7100",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10485165,
            "range": "± 14113",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210359889,
            "range": "± 185576",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5546606,
            "range": "± 8540",
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
          "id": "c1a1abd813f30d17c593dee09cbc0d8865a41bca",
          "message": "ci: add external tool comparison workflow (#27)\n\n* ci: add external tool comparison workflow\n\nAdd CI job to test liboqs detection and benchmark comparison on\nLinux and macOS. This validates the tool detection refactoring\nfrom PR #25 works correctly in CI environments.\n\nThe workflow:\n- Builds liboqs from source on ubuntu-latest and macos-latest\n- Sets LIBOQS_DIR environment variable\n- Runs `kylix bench --compare --with liboqs` to verify detection\n\n* ci: post external tool benchmark results to PR comment\n\n- Add pull-requests: write permission to external-tool-compare job\n- Output benchmark results in markdown format\n- Post results as PR comment using gh CLI\n\n* fix: show OpenSSL note only when OpenSSL is detected\n\nThe benchmark comparison output previously always displayed a note\nabout OpenSSL process overhead, even when OpenSSL was not detected.\nNow the note is only shown when OpenSSL benchmarks are included in\nthe comparison results.\n\n* docs: update PLANS.md with current progress\n\n* ci: add explicit liboqs detection verification\n\n- Add step to verify speed_kem binary exists after build\n- Check benchmark output contains \"liboqs\" to confirm detection\n- Fail CI if liboqs is not detected (addresses review feedback)\n\n* fix: remove ANSI color codes from PR comment output\n\n* ci: skip PR comment for forked PRs",
          "timestamp": "2026-01-28T23:09:37+09:00",
          "tree_id": "5ce130b2885a346b36b9b822537861b54741763a",
          "url": "https://github.com/crane-valley/kylix-cli/commit/c1a1abd813f30d17c593dee09cbc0d8865a41bca"
        },
        "date": 1769609738575,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 61978,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371888,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68699,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111730,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326284,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109580,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173330,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355301,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181154,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16761,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16869,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20231,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28990,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28039,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32461,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46234,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43922,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50024,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2606677,
            "range": "± 2955",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63732213,
            "range": "± 128009",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3770625,
            "range": "± 7268",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3963466,
            "range": "± 7002",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102219031,
            "range": "± 219458",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5490477,
            "range": "± 9262",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10481622,
            "range": "± 17280",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210496204,
            "range": "± 191766",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5540974,
            "range": "± 10438",
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
          "id": "ad42372f44c6d67f31c0a4c2f41a97c6f02aaf4a",
          "message": "docs: mark Bench Compare CI as completed (#28)",
          "timestamp": "2026-02-02T21:29:48+09:00",
          "tree_id": "b5204c84971049b36b57319b9d7582a5c54ef34c",
          "url": "https://github.com/crane-valley/kylix-cli/commit/ad42372f44c6d67f31c0a4c2f41a97c6f02aaf4a"
        },
        "date": 1770035748340,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 62115,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371859,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68776,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111722,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326247,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109549,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173377,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355171,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181887,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16754,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16866,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20257,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28953,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28025,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32447,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46219,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43997,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50027,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2603205,
            "range": "± 1316",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63715515,
            "range": "± 48638",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3776294,
            "range": "± 5569",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3965513,
            "range": "± 13834",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102206573,
            "range": "± 50244",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5498792,
            "range": "± 7841",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10487340,
            "range": "± 20411",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210385482,
            "range": "± 206601",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5546172,
            "range": "± 8122",
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
          "id": "581ff0bdc2f2de0bdc914785baff731d7056a0e3",
          "message": "deps(deps): bump clap from 4.5.54 to 4.5.56 (#30)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.54 to 4.5.56.\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.54...clap_complete-v4.5.56)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-version: 4.5.56\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-02T21:30:52+09:00",
          "tree_id": "11378311c016c24fb4472357d2b48e25c5219396",
          "url": "https://github.com/crane-valley/kylix-cli/commit/581ff0bdc2f2de0bdc914785baff731d7056a0e3"
        },
        "date": 1770035827917,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 61940,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371883,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 69005,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111855,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326009,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109611,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173259,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355867,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181287,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16753,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16865,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20218,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 28991,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28093,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32451,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 46208,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44147,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50129,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2606143,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63742239,
            "range": "± 44595",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3779664,
            "range": "± 7395",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3965293,
            "range": "± 4120",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 102358588,
            "range": "± 42868",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5519060,
            "range": "± 6829",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10478850,
            "range": "± 16077",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 210503068,
            "range": "± 146830",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5554136,
            "range": "± 9374",
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
          "id": "ba6de3fa1a272881559bea8a79e12118bdd88f80",
          "message": "deps(deps): bump kylix-pqc from 0.4.3 to 0.4.4 (#29)\n\n* deps(deps): bump kylix-pqc from 0.4.3 to 0.4.4\n\nBumps [kylix-pqc](https://github.com/crane-valley/kylix) from 0.4.3 to 0.4.4.\n- [Release notes](https://github.com/crane-valley/kylix/releases)\n- [Changelog](https://github.com/crane-valley/kylix/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/crane-valley/kylix/compare/v0.4.3...v0.4.4)\n\n---\nupdated-dependencies:\n- dependency-name: kylix-pqc\n  dependency-version: 0.4.4\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* fix: update SLH-DSA API calls for kylix-pqc 0.4.4\n\n- Replace `to_bytes()` with `as_bytes().to_vec()` for key serialization\n- Replace `ok_or_else()` with `map_err()` for `from_bytes()` which now\n  returns `Result` instead of `Option`\n- Replace `sig.as_ref()` with `sig.as_bytes()` for consistency\n\n* docs: update PLANS.md for kylix-pqc 0.4.4 API unification\n\nMark match arm dedup as unblocked now that all algorithms share\nconsistent as_bytes()/from_bytes() -> Result API.\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Kiyoaki Tsurutani <kiyoaki.tsurutani@gmail.com>",
          "timestamp": "2026-02-02T21:57:59+09:00",
          "tree_id": "3c716ff0c3d41776af43c3467933efd9af4c651d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/ba6de3fa1a272881559bea8a79e12118bdd88f80"
        },
        "date": 1770037443354,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 63989,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371915,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68600,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 115310,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326394,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109537,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 177776,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355376,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181286,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 18115,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16981,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20324,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 30959,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28225,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32645,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 48846,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44196,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50289,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2469320,
            "range": "± 14222",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 57550176,
            "range": "± 145942",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3386665,
            "range": "± 10500",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3590786,
            "range": "± 28969",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 92631765,
            "range": "± 201882",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4955698,
            "range": "± 4847",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9439789,
            "range": "± 59336",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 190569193,
            "range": "± 244302",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4996717,
            "range": "± 22873",
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
          "id": "14c6725e5bb8fdfef7a1e7aa9cb11d4e10c2fb91",
          "message": "refactor: deduplicate match arms with dispatch macros (#31)\n\n* refactor: deduplicate match arms with dispatch macros\n\nAdd 6 macros (kem_keygen!, dsa_keygen!, kem_encaps!, kem_decaps!,\ndsa_sign!, dsa_verify!) that extract the per-algorithm boilerplate\nfrom cmd_keygen, cmd_encaps, cmd_decaps, cmd_sign, and cmd_verify.\n\nReduces 36 near-identical multi-line match arms to one-liner macro\ninvocations (-234/+166 lines net reduction in main.rs).\n\n* docs: update PLANS.md - match arm dedup completed (PR #31)",
          "timestamp": "2026-02-02T23:29:51+09:00",
          "tree_id": "a815c955d935d1323b7ce9a7c097b38aef04047d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/14c6725e5bb8fdfef7a1e7aa9cb11d4e10c2fb91"
        },
        "date": 1770042952549,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 64031,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 372031,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68687,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 115169,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326423,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109771,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 177861,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 355464,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181251,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 18104,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16980,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20345,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 30968,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28216,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32620,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 48818,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44193,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50266,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2454772,
            "range": "± 11812",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 57418027,
            "range": "± 71241",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3397910,
            "range": "± 10390",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3591981,
            "range": "± 23327",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 92402117,
            "range": "± 61078",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4956869,
            "range": "± 5740",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9543713,
            "range": "± 49941",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 190935686,
            "range": "± 251061",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5030574,
            "range": "± 19971",
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
          "id": "a181b62b4bd3d3abc36f0095afba4af9966c079d",
          "message": "chore: bump version to 0.5.2 (#32)\n\n* chore: bump version to 0.5.2\n\nUpdate for kylix-pqc v0.4.4 API changes and dispatch macro refactor.\n\n* docs: merge Refactored into Changed section in CHANGELOG\n\nKeep a Changelog standard only defines Added, Changed, Deprecated,\nRemoved, Fixed, and Security categories.",
          "timestamp": "2026-02-03T00:27:55+09:00",
          "tree_id": "b6ffae839b427da29811f75dfc0343bd3e3db420",
          "url": "https://github.com/crane-valley/kylix-cli/commit/a181b62b4bd3d3abc36f0095afba4af9966c079d"
        },
        "date": 1770046435732,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 63974,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 371585,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 68403,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 114928,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 326299,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109508,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 177046,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 354162,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 180001,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 18175,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 17009,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20360,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 30992,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 28272,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32697,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 48902,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44179,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50411,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2470306,
            "range": "± 11256",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 57485579,
            "range": "± 78508",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3390057,
            "range": "± 15997",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3553969,
            "range": "± 23073",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 92441549,
            "range": "± 52814",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4957987,
            "range": "± 4388",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9468997,
            "range": "± 46898",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 190782095,
            "range": "± 244681",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4995413,
            "range": "± 24132",
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
        "date": 1769587275347,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 57424,
            "range": "± 7638",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 330666,
            "range": "± 47319",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 60501,
            "range": "± 9690",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 115699,
            "range": "± 16433",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 309973,
            "range": "± 63535",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 100509,
            "range": "± 10126",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 176050,
            "range": "± 20842",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 300217,
            "range": "± 10998",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 179491,
            "range": "± 21471",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 15838,
            "range": "± 2141",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13190,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15442,
            "range": "± 2996",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 26930,
            "range": "± 3956",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 22180,
            "range": "± 2798",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24976,
            "range": "± 3474",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 51103,
            "range": "± 8247",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44228,
            "range": "± 10280",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 44807,
            "range": "± 7584",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2477406,
            "range": "± 335384",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 73476416,
            "range": "± 9510545",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4739897,
            "range": "± 746872",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4662510,
            "range": "± 698393",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 105110666,
            "range": "± 20401566",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5293151,
            "range": "± 755945",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9546350,
            "range": "± 1005102",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 188242791,
            "range": "± 11425446",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4917039,
            "range": "± 597822",
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
          "id": "b3432cc813834676d9b62fdb359eb67127db2ab1",
          "message": "chore: update kylix-pqc to v0.4.3 (#20)\n\n- Update Cargo.lock to kylix-pqc v0.4.3\n- Adapt to breaking change: SLH-DSA SigningKey::to_bytes() now returns\n  Zeroizing<Vec<u8>>\n- Use Zeroizing<Vec<u8>> for all secret key bytes in keygen\n- Remove manual zeroize() call (Zeroizing handles it automatically)",
          "timestamp": "2026-01-28T17:01:53+09:00",
          "tree_id": "6b1c4c5a33b83650b4e845d19a32a32caf9e71da",
          "url": "https://github.com/crane-valley/kylix-cli/commit/b3432cc813834676d9b62fdb359eb67127db2ab1"
        },
        "date": 1769587703274,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 69064,
            "range": "± 12351",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 323962,
            "range": "± 54941",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 80671,
            "range": "± 30043",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 111055,
            "range": "± 15170",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 306443,
            "range": "± 111994",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 105714,
            "range": "± 33442",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 191289,
            "range": "± 38487",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 313109,
            "range": "± 51187",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 168941,
            "range": "± 29827",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14960,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14112,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15639,
            "range": "± 1861",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 27378,
            "range": "± 2700",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21734,
            "range": "± 2307",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24737,
            "range": "± 4255",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 45890,
            "range": "± 7981",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 35062,
            "range": "± 2465",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 39294,
            "range": "± 4792",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2693742,
            "range": "± 503524",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 68903812,
            "range": "± 41189242",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3929325,
            "range": "± 1055036",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4235259,
            "range": "± 1377070",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 101176875,
            "range": "± 20386153",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5392421,
            "range": "± 774219",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10899645,
            "range": "± 3428083",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 199889208,
            "range": "± 19016274",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5059556,
            "range": "± 486150",
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
          "id": "980c7de0df4eb4681c10bc7689bdc0ef7d7d30c5",
          "message": "chore: release v0.5.1 (#21)\n\n- Update version to 0.5.1\n- Update CHANGELOG with v0.5.1 release notes",
          "timestamp": "2026-01-28T17:06:20+09:00",
          "tree_id": "af74b353512cfd55a58b715830227f71c3f0b959",
          "url": "https://github.com/crane-valley/kylix-cli/commit/980c7de0df4eb4681c10bc7689bdc0ef7d7d30c5"
        },
        "date": 1769587926972,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 51929,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 286484,
            "range": "± 20210",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 55348,
            "range": "± 10932",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 101635,
            "range": "± 17017",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 254222,
            "range": "± 10721",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 92571,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 150655,
            "range": "± 4173",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 290639,
            "range": "± 48760",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 155307,
            "range": "± 7611",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 13027,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 12862,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 14150,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 22717,
            "range": "± 1500",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21074,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 22716,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 36839,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 34191,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 38502,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2198319,
            "range": "± 103345",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 49778229,
            "range": "± 1875785",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3201003,
            "range": "± 196048",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3354440,
            "range": "± 428180",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 88411604,
            "range": "± 28774031",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4644153,
            "range": "± 467367",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 8846850,
            "range": "± 430061",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 177423958,
            "range": "± 10552130",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4659085,
            "range": "± 700276",
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
          "id": "bd93f8d240d2d123889d3f4b0a37ece46d5d223d",
          "message": "docs: clarify release process in CLAUDE.md (#22)\n\n* docs: clarify release process in CLAUDE.md\n\ncargo-dist creates the GitHub Release automatically from a tag.\nDo not use `gh release create` as it conflicts with cargo-dist.\n\n* docs: clarify version/tag relationship per review",
          "timestamp": "2026-01-28T17:13:46+09:00",
          "tree_id": "b36733c3bd75346adc4086c311cbc42b65789e21",
          "url": "https://github.com/crane-valley/kylix-cli/commit/bd93f8d240d2d123889d3f4b0a37ece46d5d223d"
        },
        "date": 1769588407276,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 52329,
            "range": "± 3571",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 307317,
            "range": "± 87410",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 60240,
            "range": "± 15450",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 109200,
            "range": "± 16096",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 311221,
            "range": "± 60655",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 97959,
            "range": "± 11711",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 156070,
            "range": "± 16881",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 311709,
            "range": "± 45752",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 165319,
            "range": "± 30417",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14665,
            "range": "± 4334",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14475,
            "range": "± 2942",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 15066,
            "range": "± 1967",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 26304,
            "range": "± 4305",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21761,
            "range": "± 6825",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 30953,
            "range": "± 4655",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 62952,
            "range": "± 53477",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 60312,
            "range": "± 32639",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 62608,
            "range": "± 18487",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 3318875,
            "range": "± 1410575",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 64905812,
            "range": "± 18034553",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3377808,
            "range": "± 315849",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3453005,
            "range": "± 731206",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 91142062,
            "range": "± 24178416",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5001018,
            "range": "± 1019168",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9112441,
            "range": "± 1114161",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 223671833,
            "range": "± 33808910",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4804979,
            "range": "± 494907",
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
          "id": "069b54fed9eb41cd6e9168e5201e8bebf1a7adf6",
          "message": "docs: add shell completions usage examples to README (#23)\n\n* docs: add shell completions usage examples to README\n\n* docs: add mkdir -p and separate PowerShell code block",
          "timestamp": "2026-01-28T17:36:17+09:00",
          "tree_id": "757a72f96a9be288357f1871dec03e2b0e2887d5",
          "url": "https://github.com/crane-valley/kylix-cli/commit/069b54fed9eb41cd6e9168e5201e8bebf1a7adf6"
        },
        "date": 1769589748805,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 71917,
            "range": "± 18799",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 319745,
            "range": "± 103854",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 59169,
            "range": "± 9370",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 115852,
            "range": "± 22997",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 311696,
            "range": "± 68829",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109230,
            "range": "± 42995",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 173309,
            "range": "± 25904",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 313384,
            "range": "± 49932",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 186220,
            "range": "± 30274",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 18620,
            "range": "± 3231",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 16429,
            "range": "± 3448",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 20344,
            "range": "± 4582",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 32995,
            "range": "± 6977",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 27704,
            "range": "± 6652",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 32338,
            "range": "± 4088",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 51562,
            "range": "± 6643",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 48142,
            "range": "± 8959",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 49291,
            "range": "± 10318",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2838761,
            "range": "± 566749",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 70200854,
            "range": "± 11028611",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3716897,
            "range": "± 810620",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4128532,
            "range": "± 481838",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 105787770,
            "range": "± 13951292",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5998919,
            "range": "± 687127",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 11212837,
            "range": "± 1043455",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 225491020,
            "range": "± 29217432",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 6261305,
            "range": "± 1433917",
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
          "id": "6a6bdb5181e2873826ac549a06427d55abc70579",
          "message": "chore: increase benchmark alert threshold to 200% (#24)",
          "timestamp": "2026-01-28T17:40:50+09:00",
          "tree_id": "0946a284fe32701d76173e5b4cfe0c3e81bf5c93",
          "url": "https://github.com/crane-valley/kylix-cli/commit/6a6bdb5181e2873826ac549a06427d55abc70579"
        },
        "date": 1769590033717,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 83046,
            "range": "± 13950",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 515625,
            "range": "± 155055",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 73597,
            "range": "± 18853",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 122496,
            "range": "± 31273",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 386784,
            "range": "± 118951",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 110882,
            "range": "± 34083",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 168150,
            "range": "± 51150",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 376287,
            "range": "± 67779",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 228145,
            "range": "± 40999",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 20699,
            "range": "± 4956",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13005,
            "range": "± 1655",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 19309,
            "range": "± 4149",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 25235,
            "range": "± 3314",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 25639,
            "range": "± 5565",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 33039,
            "range": "± 7463",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 39950,
            "range": "± 6231",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 39164,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 48914,
            "range": "± 5229",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2741398,
            "range": "± 1161084",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 68557896,
            "range": "± 33421040",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3800498,
            "range": "± 995166",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4032026,
            "range": "± 686786",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 98831313,
            "range": "± 14213106",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6188625,
            "range": "± 1769497",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10883400,
            "range": "± 1878398",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 235851500,
            "range": "± 31755616",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5621430,
            "range": "± 1230398",
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
          "id": "5cd277b2998f13334f32a5e465a21835c2636da8",
          "message": "refactor: improve external tool detection with environment variables (#25)\n\n* refactor: improve external tool detection with environment variables\n\n- Add OPENSSL_DIR and OPENSSL_ROOT_DIR environment variable support\n- Add LIBOQS_DIR environment variable support\n- Remove hardcoded vcpkg paths (C:\\vcpkg, D:\\vcpkg, E:\\vcpkg)\n- Remove hardcoded FireDaemon OpenSSL path on Windows\n\nDetection priority:\n- OpenSSL: OPENSSL_DIR/OPENSSL_ROOT_DIR → PATH → platform fallbacks\n- liboqs: LIBOQS_SPEED_KEM → LIBOQS_DIR → PATH → VCPKG_ROOT\n\n* docs: update PLANS.md with tool detection refactor status\n\n* style: apply cargo fmt\n\n* refactor: use std::env::consts::EXE_SUFFIX for portable exe names\n\n* refactor: simplify path collection by removing redundant exists() checks",
          "timestamp": "2026-01-28T19:02:20+09:00",
          "tree_id": "a3b704bb1e7408970b532ab915bfa4c7ee7935aa",
          "url": "https://github.com/crane-valley/kylix-cli/commit/5cd277b2998f13334f32a5e465a21835c2636da8"
        },
        "date": 1769594943857,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 60039,
            "range": "± 15646",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 398647,
            "range": "± 83681",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 67541,
            "range": "± 14228",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 106993,
            "range": "± 39226",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 361779,
            "range": "± 134655",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 149652,
            "range": "± 51631",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 212321,
            "range": "± 59372",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 404890,
            "range": "± 72747",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 214431,
            "range": "± 60042",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 18735,
            "range": "± 5034",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 18006,
            "range": "± 8211",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 19809,
            "range": "± 8406",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 27569,
            "range": "± 3622",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 30444,
            "range": "± 6850",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 33223,
            "range": "± 7758",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 51853,
            "range": "± 15505",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 44543,
            "range": "± 8875",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 50229,
            "range": "± 9807",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2836591,
            "range": "± 361981",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 71677875,
            "range": "± 13017000",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4038519,
            "range": "± 544811",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4233104,
            "range": "± 570292",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 109890583,
            "range": "± 12875873",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6049429,
            "range": "± 895693",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 11125204,
            "range": "± 1954021",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 230735062,
            "range": "± 21452395",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5854949,
            "range": "± 1442215",
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
          "id": "dab40511e863568f6bf323a555c065a22f87a89a",
          "message": "docs: clarify secret key memory protection in changelog (#26)\n\n* docs: clarify secret key memory protection in changelog\n\n- Newly generated keys use Zeroizing<Vec<u8>>\n- Keys read from files are explicitly zeroized after use\n\nAddresses review comment from PR #21\n\n* docs: use sub-bullets for clarity",
          "timestamp": "2026-01-28T20:52:57+09:00",
          "tree_id": "3ab3c7445dc3833533776244374c845d8cedc515",
          "url": "https://github.com/crane-valley/kylix-cli/commit/dab40511e863568f6bf323a555c065a22f87a89a"
        },
        "date": 1769601582014,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 55130,
            "range": "± 7186",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 295246,
            "range": "± 15515",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 56530,
            "range": "± 8718",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 108145,
            "range": "± 26488",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 351991,
            "range": "± 227099",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 100915,
            "range": "± 21973",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 165415,
            "range": "± 46222",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 396595,
            "range": "± 77937",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 198866,
            "range": "± 57112",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 15571,
            "range": "± 3029",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14527,
            "range": "± 3009",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 17315,
            "range": "± 5436",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 25635,
            "range": "± 4086",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21749,
            "range": "± 3276",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 28347,
            "range": "± 8115",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 43188,
            "range": "± 4770",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 49599,
            "range": "± 12644",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 47525,
            "range": "± 8511",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2773854,
            "range": "± 382217",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 70855395,
            "range": "± 12137352",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3838810,
            "range": "± 572286",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4181437,
            "range": "± 814949",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 116345625,
            "range": "± 18888596",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 6805804,
            "range": "± 1914503",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 11227320,
            "range": "± 2651242",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 237546541,
            "range": "± 26100865",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 7280895,
            "range": "± 1566156",
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
          "id": "c1a1abd813f30d17c593dee09cbc0d8865a41bca",
          "message": "ci: add external tool comparison workflow (#27)\n\n* ci: add external tool comparison workflow\n\nAdd CI job to test liboqs detection and benchmark comparison on\nLinux and macOS. This validates the tool detection refactoring\nfrom PR #25 works correctly in CI environments.\n\nThe workflow:\n- Builds liboqs from source on ubuntu-latest and macos-latest\n- Sets LIBOQS_DIR environment variable\n- Runs `kylix bench --compare --with liboqs` to verify detection\n\n* ci: post external tool benchmark results to PR comment\n\n- Add pull-requests: write permission to external-tool-compare job\n- Output benchmark results in markdown format\n- Post results as PR comment using gh CLI\n\n* fix: show OpenSSL note only when OpenSSL is detected\n\nThe benchmark comparison output previously always displayed a note\nabout OpenSSL process overhead, even when OpenSSL was not detected.\nNow the note is only shown when OpenSSL benchmarks are included in\nthe comparison results.\n\n* docs: update PLANS.md with current progress\n\n* ci: add explicit liboqs detection verification\n\n- Add step to verify speed_kem binary exists after build\n- Check benchmark output contains \"liboqs\" to confirm detection\n- Fail CI if liboqs is not detected (addresses review feedback)\n\n* fix: remove ANSI color codes from PR comment output\n\n* ci: skip PR comment for forked PRs",
          "timestamp": "2026-01-28T23:09:37+09:00",
          "tree_id": "5ce130b2885a346b36b9b822537861b54741763a",
          "url": "https://github.com/crane-valley/kylix-cli/commit/c1a1abd813f30d17c593dee09cbc0d8865a41bca"
        },
        "date": 1769609766373,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 68342,
            "range": "± 11492",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 349225,
            "range": "± 58703",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 66355,
            "range": "± 14829",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 123787,
            "range": "± 21498",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 302580,
            "range": "± 49875",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 112501,
            "range": "± 19244",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 194729,
            "range": "± 27008",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 385513,
            "range": "± 70343",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 179810,
            "range": "± 28909",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 17617,
            "range": "± 2684",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14470,
            "range": "± 2156",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 17591,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 30547,
            "range": "± 5589",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 26224,
            "range": "± 4638",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 27821,
            "range": "± 4102",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 51449,
            "range": "± 11461",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 43455,
            "range": "± 12763",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 43970,
            "range": "± 9384",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2866616,
            "range": "± 366508",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 63754917,
            "range": "± 10764538",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3486722,
            "range": "± 437949",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4270127,
            "range": "± 579669",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 105172750,
            "range": "± 26504594",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5779740,
            "range": "± 890664",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10207070,
            "range": "± 1562894",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 217117396,
            "range": "± 21595739",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5689014,
            "range": "± 761430",
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
          "id": "ad42372f44c6d67f31c0a4c2f41a97c6f02aaf4a",
          "message": "docs: mark Bench Compare CI as completed (#28)",
          "timestamp": "2026-02-02T21:29:48+09:00",
          "tree_id": "b5204c84971049b36b57319b9d7582a5c54ef34c",
          "url": "https://github.com/crane-valley/kylix-cli/commit/ad42372f44c6d67f31c0a4c2f41a97c6f02aaf4a"
        },
        "date": 1770035766803,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 55219,
            "range": "± 8225",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 365025,
            "range": "± 235583",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 73515,
            "range": "± 17320",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 110059,
            "range": "± 24112",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 309145,
            "range": "± 129468",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 99298,
            "range": "± 17032",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 198378,
            "range": "± 65570",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 464357,
            "range": "± 104138",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 181057,
            "range": "± 39855",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14330,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14712,
            "range": "± 2621",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 24278,
            "range": "± 7042",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 39246,
            "range": "± 10325",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 33070,
            "range": "± 22616",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 33020,
            "range": "± 8049",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 43072,
            "range": "± 15286",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 38183,
            "range": "± 29461",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 40065,
            "range": "± 11282",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2329521,
            "range": "± 346723",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 56570208,
            "range": "± 9102693",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3615183,
            "range": "± 545009",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3476406,
            "range": "± 597524",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 90590562,
            "range": "± 8881526",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4786075,
            "range": "± 816157",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9406229,
            "range": "± 1713765",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 187342229,
            "range": "± 14904644",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4873939,
            "range": "± 704261",
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
          "id": "581ff0bdc2f2de0bdc914785baff731d7056a0e3",
          "message": "deps(deps): bump clap from 4.5.54 to 4.5.56 (#30)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.54 to 4.5.56.\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.54...clap_complete-v4.5.56)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-version: 4.5.56\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-02T21:30:52+09:00",
          "tree_id": "11378311c016c24fb4472357d2b48e25c5219396",
          "url": "https://github.com/crane-valley/kylix-cli/commit/581ff0bdc2f2de0bdc914785baff731d7056a0e3"
        },
        "date": 1770035817316,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53647,
            "range": "± 3072",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 305722,
            "range": "± 35907",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 56994,
            "range": "± 3730",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 103389,
            "range": "± 8714",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 269079,
            "range": "± 41410",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 93943,
            "range": "± 6419",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 156224,
            "range": "± 18136",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 299230,
            "range": "± 99208",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 157240,
            "range": "± 9312",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 13920,
            "range": "± 1208",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 12649,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 14982,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 23613,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 21271,
            "range": "± 3529",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 23953,
            "range": "± 1086",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 39394,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 34217,
            "range": "± 9205",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 38782,
            "range": "± 12815",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2309964,
            "range": "± 190806",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 53880396,
            "range": "± 5276008",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3227412,
            "range": "± 303553",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3360777,
            "range": "± 591853",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 86627979,
            "range": "± 4441278",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4714138,
            "range": "± 551744",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 8745097,
            "range": "± 541513",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 179402750,
            "range": "± 11262477",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4729770,
            "range": "± 859686",
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
          "id": "ba6de3fa1a272881559bea8a79e12118bdd88f80",
          "message": "deps(deps): bump kylix-pqc from 0.4.3 to 0.4.4 (#29)\n\n* deps(deps): bump kylix-pqc from 0.4.3 to 0.4.4\n\nBumps [kylix-pqc](https://github.com/crane-valley/kylix) from 0.4.3 to 0.4.4.\n- [Release notes](https://github.com/crane-valley/kylix/releases)\n- [Changelog](https://github.com/crane-valley/kylix/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/crane-valley/kylix/compare/v0.4.3...v0.4.4)\n\n---\nupdated-dependencies:\n- dependency-name: kylix-pqc\n  dependency-version: 0.4.4\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* fix: update SLH-DSA API calls for kylix-pqc 0.4.4\n\n- Replace `to_bytes()` with `as_bytes().to_vec()` for key serialization\n- Replace `ok_or_else()` with `map_err()` for `from_bytes()` which now\n  returns `Result` instead of `Option`\n- Replace `sig.as_ref()` with `sig.as_bytes()` for consistency\n\n* docs: update PLANS.md for kylix-pqc 0.4.4 API unification\n\nMark match arm dedup as unblocked now that all algorithms share\nconsistent as_bytes()/from_bytes() -> Result API.\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Kiyoaki Tsurutani <kiyoaki.tsurutani@gmail.com>",
          "timestamp": "2026-02-02T21:57:59+09:00",
          "tree_id": "3c716ff0c3d41776af43c3467933efd9af4c651d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/ba6de3fa1a272881559bea8a79e12118bdd88f80"
        },
        "date": 1770037452060,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 54827,
            "range": "± 3037",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 299854,
            "range": "± 14928",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 56551,
            "range": "± 5198",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 108983,
            "range": "± 13469",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 287356,
            "range": "± 29627",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 94259,
            "range": "± 51108",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 149795,
            "range": "± 6377",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 333532,
            "range": "± 46914",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 238950,
            "range": "± 38329",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 17087,
            "range": "± 3526",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14461,
            "range": "± 2477",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 14618,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 25970,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 20971,
            "range": "± 1916",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24399,
            "range": "± 3681",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 41263,
            "range": "± 2359",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 34457,
            "range": "± 2010",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 37473,
            "range": "± 3990",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2148915,
            "range": "± 339270",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 53409333,
            "range": "± 7110247",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 2967055,
            "range": "± 353456",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 3202388,
            "range": "± 378404",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 79067625,
            "range": "± 3554073",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4900573,
            "range": "± 789891",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9455468,
            "range": "± 1476693",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 170898520,
            "range": "± 25098473",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4079974,
            "range": "± 208855",
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
          "id": "14c6725e5bb8fdfef7a1e7aa9cb11d4e10c2fb91",
          "message": "refactor: deduplicate match arms with dispatch macros (#31)\n\n* refactor: deduplicate match arms with dispatch macros\n\nAdd 6 macros (kem_keygen!, dsa_keygen!, kem_encaps!, kem_decaps!,\ndsa_sign!, dsa_verify!) that extract the per-algorithm boilerplate\nfrom cmd_keygen, cmd_encaps, cmd_decaps, cmd_sign, and cmd_verify.\n\nReduces 36 near-identical multi-line match arms to one-liner macro\ninvocations (-234/+166 lines net reduction in main.rs).\n\n* docs: update PLANS.md - match arm dedup completed (PR #31)",
          "timestamp": "2026-02-02T23:29:51+09:00",
          "tree_id": "a815c955d935d1323b7ce9a7c097b38aef04047d",
          "url": "https://github.com/crane-valley/kylix-cli/commit/14c6725e5bb8fdfef7a1e7aa9cb11d4e10c2fb91"
        },
        "date": 1770042967598,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 66646,
            "range": "± 10807",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 353981,
            "range": "± 76460",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 58191,
            "range": "± 4371",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 119106,
            "range": "± 23143",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 330418,
            "range": "± 45117",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 109786,
            "range": "± 43238",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 176906,
            "range": "± 36656",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 350169,
            "range": "± 52491",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 184995,
            "range": "± 22962",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 16503,
            "range": "± 3271",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 13268,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 17450,
            "range": "± 4198",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 29275,
            "range": "± 3377",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 26793,
            "range": "± 3408",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 25490,
            "range": "± 3512",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 52566,
            "range": "± 9023",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 37964,
            "range": "± 5579",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 41083,
            "range": "± 6954",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2437172,
            "range": "± 325965",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 62044271,
            "range": "± 7462611",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 3620108,
            "range": "± 718459",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4270569,
            "range": "± 1239616",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 107702896,
            "range": "± 13772339",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5585152,
            "range": "± 745226",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 10543325,
            "range": "± 1813806",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 208605958,
            "range": "± 21860589",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5859078,
            "range": "± 682058",
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
          "id": "a181b62b4bd3d3abc36f0095afba4af9966c079d",
          "message": "chore: bump version to 0.5.2 (#32)\n\n* chore: bump version to 0.5.2\n\nUpdate for kylix-pqc v0.4.4 API changes and dispatch macro refactor.\n\n* docs: merge Refactored into Changed section in CHANGELOG\n\nKeep a Changelog standard only defines Added, Changed, Deprecated,\nRemoved, Fixed, and Security categories.",
          "timestamp": "2026-02-03T00:27:55+09:00",
          "tree_id": "b6ffae839b427da29811f75dfc0343bd3e3db420",
          "url": "https://github.com/crane-valley/kylix-cli/commit/a181b62b4bd3d3abc36f0095afba4af9966c079d"
        },
        "date": 1770046476373,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 55860,
            "range": "± 8780",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 442494,
            "range": "± 77112",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 88347,
            "range": "± 15789",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 143822,
            "range": "± 58745",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 290902,
            "range": "± 70287",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 100535,
            "range": "± 14038",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 154836,
            "range": "± 10159",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 306771,
            "range": "± 33996",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 160971,
            "range": "± 21951",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 17429,
            "range": "± 2436",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 14933,
            "range": "± 3349",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 17040,
            "range": "± 3202",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 34853,
            "range": "± 6868",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 29890,
            "range": "± 4835",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 27103,
            "range": "± 3942",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 47033,
            "range": "± 5034",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 49799,
            "range": "± 13820",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 54883,
            "range": "± 9997",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 2612902,
            "range": "± 329273",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 53673125,
            "range": "± 9095942",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 4086770,
            "range": "± 631641",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 4537962,
            "range": "± 748233",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 108106333,
            "range": "± 9587642",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 5235854,
            "range": "± 694102",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 9259687,
            "range": "± 947906",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 184116938,
            "range": "± 14724155",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 5055611,
            "range": "± 1014597",
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
          "id": "e4a4d3603f12bb064d9e76f07df9d896e4c1dcc4",
          "message": "fix: address security and quality findings from codebase review (#33)\n\n* fix: address security and quality findings from codebase review\n\n- [H-1] Add eprintln warning for unprotected secret key file on non-Unix\n- [H-3] Zeroize encoded secret key string after writing to disk\n- [M-1] Return error for ambiguous SLH-DSA s/f auto-detection, require --algo\n- [L-1] Use Zeroizing wrapper for shared secrets and secret key bytes\n        in cmd_encaps, cmd_decaps, and cmd_sign\n- [L-4] Replace HashMap with BTreeMap in bench comparison for deterministic output\n- [M-5] Add SLH-DSA integration tests (128f roundtrip, --algo requirement)\n        and include all SLH-DSA variants in test_keygen_all_algorithms\n- Update PLANS.md with completed and deferred review findings\n\n* fix: address PR review comments\n\n- Reword ambiguous variant error: \"-s/-f\" → \"small vs fast\" to avoid\n  confusion with CLI flags\n- Split SLH-DSA error arms by key size for context-specific --algo\n  examples (128f, 192f, 256f)\n- Tighten test assertion: check for both \"ambiguous\" and \"--algo\" in\n  stderr\n\n* fix: address second round of PR review comments\n\n- Show both s/f variants in ambiguous SLH-DSA error messages\n  (e.g. \"slh-dsa-shake-128s or slh-dsa-shake-128f\")\n- Wrap sk_encoded in Zeroizing<String> (cmd_keygen) for error-path safety\n- Wrap ss_encoded in Zeroizing<String> (cmd_encaps, cmd_decaps)\n- Wrap sk_data in Zeroizing<String> (cmd_decaps, cmd_sign) to ensure\n  zeroization even if decode_input fails\n- Remove unused Zeroize import (only Zeroizing needed now)\n- Add test_slh_dsa_verify_without_algo_fails integration test\n\n* fix: use explicit borrow for Zeroizing<String> deref in print macros\n\nChange *ss_encoded to &*ss_encoded to avoid implicit copy/move\nsemantics when passing Zeroizing<String> to println!/eprintln!.\n\n* fix: pass Path directly to .arg() instead of to_str().unwrap()\n\nCommand::arg() accepts AsRef<OsStr>, so converting to &str is\nunnecessary and would panic on non-UTF8 paths.\n\n* fix: avoid shadowing ss_bytes with Zeroizing wrapper\n\nRename raw match result to ss_bytes_raw before wrapping in\nZeroizing::new() for clearer ownership flow in cmd_encaps/cmd_decaps.\n\n* docs: add follow-up items from PR #33 review to PLANS.md\n\n- [M-4] Deep zeroization in encode_output/decode_input\n- [L-5] Windows ACL for secret key files\n\n* fix: use single-line string for Windows permission warning\n\nAvoids any ambiguity about whitespace with line continuation.\n\n* fix: drop Zeroizing wrappers early to minimize secret exposure time\n\n- drop(sk_encoded) immediately after write_secret_file in cmd_keygen\n- drop(sk_data) immediately after decode_input in cmd_decaps/cmd_sign\n\n* fix: drop secret data early in cmd_encaps, cmd_decaps, cmd_sign\n\n- drop(ss_bytes) and drop(ss_encoded) after output in cmd_encaps\n- drop(sk_bytes) after decapsulation, drop(ss_bytes/ss_encoded) after\n  output in cmd_decaps\n- drop(sk_bytes) after signing in cmd_sign",
          "timestamp": "2026-02-07T20:08:06+09:00",
          "tree_id": "f7d497923d11d9fc14f13e69f62522294580c4f3",
          "url": "https://github.com/crane-valley/kylix-cli/commit/e4a4d3603f12bb064d9e76f07df9d896e4c1dcc4"
        },
        "date": 1770462830360,
        "tool": "cargo",
        "benches": [
          {
            "name": "ML-DSA-44/keygen",
            "value": 53283,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/sign",
            "value": 287478,
            "range": "± 6819",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-44/verify",
            "value": 55354,
            "range": "± 2017",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/keygen",
            "value": 101349,
            "range": "± 1846",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/sign",
            "value": 258337,
            "range": "± 34858",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-65/verify",
            "value": 89916,
            "range": "± 2580",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/keygen",
            "value": 148033,
            "range": "± 3585",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/sign",
            "value": 287996,
            "range": "± 9912",
            "unit": "ns/iter"
          },
          {
            "name": "ML-DSA-87/verify",
            "value": 145319,
            "range": "± 6679",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/keygen",
            "value": 14693,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/encaps",
            "value": 12446,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-512/decaps",
            "value": 14027,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/keygen",
            "value": 26879,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/encaps",
            "value": 19857,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-768/decaps",
            "value": 24484,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/keygen",
            "value": 38451,
            "range": "± 2604",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/encaps",
            "value": 33476,
            "range": "± 1298",
            "unit": "ns/iter"
          },
          {
            "name": "ML-KEM-1024/decaps",
            "value": 38697,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/keygen",
            "value": 1999403,
            "range": "± 21057",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/sign",
            "value": 49343677,
            "range": "± 1381162",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-128f/verify",
            "value": 2903339,
            "range": "± 78701",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/keygen",
            "value": 2946002,
            "range": "± 82794",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/sign",
            "value": 80812208,
            "range": "± 4838825",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-192f/verify",
            "value": 4345336,
            "range": "± 126987",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/keygen",
            "value": 8247316,
            "range": "± 243954",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/sign",
            "value": 166187583,
            "range": "± 4723242",
            "unit": "ns/iter"
          },
          {
            "name": "SLH-DSA-SHAKE-256f/verify",
            "value": 4398046,
            "range": "± 135267",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}