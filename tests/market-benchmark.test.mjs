import assert from "node:assert/strict";
import test from "node:test";
import { estimateMarketBenchmark } from "../lib/market-benchmark.ts";

test("benchmarks a local three-room move against public market ranges", () => {
  const result = estimateMarketBenchmark({
    bundesland: "HE",
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: "2",
    km: 42,
  });

  assert.equal(result.distanceClass, "local");
  assert.equal(result.sizeClass, "3_rooms");
  assert.deepEqual([result.korridorUnten, result.korridorOben], [900, 1500]);
  assert.equal(result.volumenM3Schaetzung, 34.1);
});

test("raises the benchmark for regional distance and larger households", () => {
  const local = estimateMarketBenchmark({
    bundesland: "HE",
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: "2",
    km: 42,
  });
  const regionalFamily = estimateMarketBenchmark({
    bundesland: "HE",
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: "3_4",
    km: 120,
  });

  assert.equal(regionalFamily.distanceClass, "regional");
  assert.ok(regionalFamily.korridorUnten > local.korridorUnten);
  assert.ok(regionalFamily.korridorOben > local.korridorOben);
  assert.equal(regionalFamily.helfer, 3);
});
