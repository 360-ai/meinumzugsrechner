import assert from "node:assert/strict";
import test from "node:test";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const Module = require("node:module");
const originalResolve = Module._resolveFilename;

Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
  if (typeof request === "string" && request.startsWith("@/")) {
    request = path.join(process.cwd(), request.slice(2));
  }
  return originalResolve.call(this, request, parent, isMain, options);
};

const jiti = require("jiti")(path.join(process.cwd(), "tests", "jiti-entry.cjs"));
const { calculateUmzug } = jiti("../lib/calculate.ts");
const { getDefaultForm } = jiti("../lib/form-defaults.ts");

function quickForm({ km = 42, household = "2" } = {}) {
  const form = getDefaultForm();
  form.buildingA.bundesland = "HE";
  form.distance.km = km;
  form.summary.agbAccepted = true;
  form.summary.quickEstimate = {
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: household,
  };
  return form;
}

test("quick estimate uses market benchmark ranges in calculateUmzug", () => {
  const result = calculateUmzug(quickForm());

  assert.deepEqual([result.korridorUnten, result.korridorOben], [900, 1500]);
  assert.equal(result.netto, 1200);
  assert.equal(result.meta.volumenM3Schaetzung, 34.1);
});

test("quick estimate increases when distance class changes", () => {
  const local = calculateUmzug(quickForm({ km: 42 }));
  const regional = calculateUmzug(quickForm({ km: 120, household: "3_4" }));

  assert.ok(regional.korridorUnten > local.korridorUnten);
  assert.ok(regional.korridorOben > local.korridorOben);
});
