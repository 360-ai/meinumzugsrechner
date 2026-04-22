import assert from "node:assert/strict";
import test from "node:test";
import { calculateCartonEstimate, describeCartonLoad } from "../lib/carton-estimate.ts";

test("calculates cartons from pack zones with reserve", () => {
  const result = calculateCartonEstimate({
    rooms: 3,
    householdLevel: "normal",
    bookMeters: 2,
    kitchenCabinets: 5,
    wardrobeMeters: 2,
    fragileLevel: "normal",
    storageLevel: "some",
  });

  assert.equal(result.baseTotal, 35);
  assert.equal(result.reserve, 5);
  assert.equal(result.total, 40);
  assert.deepEqual(result.breakdown, {
    allround: 21,
    heavy: 7,
    wardrobe: 2,
    fragile: 5,
  });
});

test("describes a larger carton load without relying on exact box dimensions", () => {
  const description = describeCartonLoad(58);

  assert.equal(description.label, "größerer Haushalt");
  assert.equal(description.hint, "ähnlich wie eine gut gefüllte 4-Zimmer-Wohnung");
});
