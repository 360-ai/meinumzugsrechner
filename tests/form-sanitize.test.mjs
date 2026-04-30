import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Mehrfamilienhaus is wired as a valid building type across form handling", () => {
  const types = readFileSync("lib/types.ts", "utf8");
  const sanitizer = readFileSync("lib/form-sanitize.ts", "utf8");
  const form = readFileSync("components/RechnerForm.tsx", "utf8");

  assert.match(types, /GebaeudeTyp = .*"mfh"/s);
  assert.match(sanitizer, /GEB = new Set<string>\(\[.*"mfh"/s);
  assert.match(form, /Mehrfamilienhaus/);
});
