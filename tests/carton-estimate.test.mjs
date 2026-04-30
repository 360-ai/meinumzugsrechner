import assert from "node:assert/strict";
import test from "node:test";
import { calculateCartonEstimate, describeCartonLoad } from "../lib/carton-estimate.ts";

test("calculates cartons from pack zones with reserve", () => {
  const result = calculateCartonEstimate({
    rooms: 3,
    householdLevel: "normal",
    wohndauer: "mittel",
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

test("describes carton loads with the shared volume bands", () => {
  const description = describeCartonLoad(90);

  assert.equal(description.label, "größerer Haushalt");
  assert.equal(description.hint, "ähnlich wie eine gut gefüllte 4-Zimmer-Wohnung");
});
