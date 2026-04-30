import assert from "node:assert/strict";
import test from "node:test";
import {
  describeRoomSelection,
  describeVolume,
  estimateQuickMoveVolume,
} from "../lib/move-logistics.ts";

test("describes move volume with everyday comparisons", () => {
  const description = describeVolume(32);

  assert.equal(description.bandLabel, "3-Zimmer-Wohnung");
  assert.equal(description.cartonRange, "ca. 65-80 Kartons plus Möbel");
  assert.equal(description.vehicleLabel, "1x LKW 12t oder 2x LKW 7,5t");
});

test("quick volume estimate increases for larger households", () => {
  const single = estimateQuickMoveVolume({
    wohnflaecheM2: 70,
    zimmer: 3,
    haushaltGroesse: "1",
  });
  const family = estimateQuickMoveVolume({
    wohnflaecheM2: 70,
    zimmer: 3,
    haushaltGroesse: "3_4",
  });

  assert.ok(family > single);
  assert.ok(family >= 30);
});

test("describes selected room counts with concrete examples", () => {
  const description = describeRoomSelection(4);

  assert.equal(description.volumeM3, 38);
  assert.equal(description.example, "Familienwohnung mit mehreren Schränken");
  assert.equal(description.details, "Wohnzimmer, Schlafzimmer, 1-2 Kinder-/Arbeitszimmer, Keller oft relevant");
});
