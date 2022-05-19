window.BENCHMARK_DATA = {
  "lastUpdate": 1652937528685,
  "repoUrl": "https://github.com/zkmove/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "guangyuz@gmail.com",
            "name": "Guangyu Zhu",
            "username": "guangyuz"
          },
          "committer": {
            "email": "guangyuz@gmail.com",
            "name": "Guangyu Zhu",
            "username": "guangyuz"
          },
          "distinct": true,
          "id": "e5c022414e62154b66b9fbef463912768c15556a",
          "message": "work around that allow table column can be any type",
          "timestamp": "2022-05-19T11:26:28+08:00",
          "tree_id": "ff59d12c1f1a9d32802f1b8be0cbe8de2829e2e3",
          "url": "https://github.com/zkmove/halo2/commit/e5c022414e62154b66b9fbef463912768c15556a"
        },
        "date": 1652937524753,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 78878557,
            "range": "± 1378891",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3820619,
            "range": "± 130086",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 180440190,
            "range": "± 1789449",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5750803,
            "range": "± 301567",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 250010449,
            "range": "± 1446009",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6623344,
            "range": "± 39208",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 40882,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 164683,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 179873,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 295642,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 295602,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 168167,
            "range": "± 4874",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 183313,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 299118,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 299086,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 351503,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 366937,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 482910,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 482915,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3582817,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5888102,
            "range": "± 4893",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10136424,
            "range": "± 9757",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 21487281,
            "range": "± 31260",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 40042736,
            "range": "± 241931",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 78222396,
            "range": "± 150646",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 6749,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 7739,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14617,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19662,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 28225,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 49830,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 101973,
            "range": "± 6157",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 198611,
            "range": "± 10044",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 407364,
            "range": "± 37993",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 856431,
            "range": "± 9708",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1800842,
            "range": "± 15891",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3821182,
            "range": "± 89808",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8144545,
            "range": "± 115533",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17519305,
            "range": "± 651614",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 37526868,
            "range": "± 143647",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 80881940,
            "range": "± 946670",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34955,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 35197,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 177730108,
            "range": "± 139884",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 384263358,
            "range": "± 1222257",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 826790007,
            "range": "± 1454325",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1775089549,
            "range": "± 1392895",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3802461808,
            "range": "± 2971215",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8133218245,
            "range": "± 71995625",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17315474960,
            "range": "± 16033987",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 36794111976,
            "range": "± 30874314",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 77845433908,
            "range": "± 49384432",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 108988597,
            "range": "± 320886",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 187773975,
            "range": "± 487989",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 333053287,
            "range": "± 1969159",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 606137846,
            "range": "± 2379466",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1129567727,
            "range": "± 3950692",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2131446002,
            "range": "± 12943988",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4052804362,
            "range": "± 8833988",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7808639416,
            "range": "± 11717032",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 15004194979,
            "range": "± 41194405",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5833901,
            "range": "± 39967",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9211618,
            "range": "± 236518",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15030128,
            "range": "± 774712",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 25212776,
            "range": "± 1006334",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 43098890,
            "range": "± 577753",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 76536487,
            "range": "± 3373140",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 137303621,
            "range": "± 436458",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 251222335,
            "range": "± 6553166",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 458784339,
            "range": "± 4556893",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}