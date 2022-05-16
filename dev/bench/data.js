window.BENCHMARK_DATA = {
  "lastUpdate": 1652671630177,
  "repoUrl": "https://github.com/zkmove/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8075b216e850035cde940c96eb93bf285254ee2e",
          "message": "Merge pull request #584 from trel/remove_dsstore\n\nremove .DS_Store",
          "timestamp": "2022-05-13T15:29:23+01:00",
          "tree_id": "2ca8f65dba2529e203e102a07f99bb6ef2fc0a66",
          "url": "https://github.com/zkmove/halo2/commit/8075b216e850035cde940c96eb93bf285254ee2e"
        },
        "date": 1652671626255,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 96400652,
            "range": "± 5797032",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4344601,
            "range": "± 238350",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 223125736,
            "range": "± 7896860",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 6401082,
            "range": "± 287006",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 303899343,
            "range": "± 6655412",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7564414,
            "range": "± 240826",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 45618,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 183590,
            "range": "± 22300",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 199081,
            "range": "± 15948",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 328399,
            "range": "± 10509",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 316889,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 180997,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 196302,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 318067,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 318121,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 378671,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 394097,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 518425,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 518345,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3912187,
            "range": "± 22931",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 7399848,
            "range": "± 12781",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 14171936,
            "range": "± 280998",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 29980573,
            "range": "± 710595",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 55055777,
            "range": "± 825641",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 101682463,
            "range": "± 349181",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 9053,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 13994,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 19421,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 23666,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 34734,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 60083,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 125962,
            "range": "± 15827",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 248728,
            "range": "± 22637",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 509605,
            "range": "± 24520",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 1058179,
            "range": "± 73212",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2256288,
            "range": "± 87750",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4799953,
            "range": "± 226186",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 10510143,
            "range": "± 402593",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 22857982,
            "range": "± 923259",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 50015308,
            "range": "± 2340941",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 114676988,
            "range": "± 5124119",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 35633,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 36748,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 201076046,
            "range": "± 4119882",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 427213937,
            "range": "± 7152403",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 923707559,
            "range": "± 8460362",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1978844571,
            "range": "± 27602340",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 4222993678,
            "range": "± 68607590",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8943948750,
            "range": "± 108527251",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 18783128068,
            "range": "± 209621249",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 40050735521,
            "range": "± 440122890",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 84201835524,
            "range": "± 938623182",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 124943501,
            "range": "± 2130882",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 215259220,
            "range": "± 2784509",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 378626469,
            "range": "± 9180706",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 700030976,
            "range": "± 13198801",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1292419583,
            "range": "± 28604198",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2388614578,
            "range": "± 38557436",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4658420542,
            "range": "± 64900992",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8918893932,
            "range": "± 187040038",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 17043765073,
            "range": "± 254698770",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6825404,
            "range": "± 462023",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 10229385,
            "range": "± 1060778",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 16593067,
            "range": "± 531286",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 28404611,
            "range": "± 1220801",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 47345795,
            "range": "± 1098923",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 86121118,
            "range": "± 2776793",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 150949339,
            "range": "± 3350764",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 278617635,
            "range": "± 6278174",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 502447068,
            "range": "± 3334720",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}