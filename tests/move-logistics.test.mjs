import assert from "node:assert/strict";
import test from "node:test";
import {
  MOVING_TRUCKS,
  describeRoomSelection,
  describeVolume,
  estimateTruckTrips,
} from "../lib/move-logistics.ts";

test("uses one shared truck table for all calculator views", () => {
  assert.deepEqual(
    MOVING_TRUCKS.map((truck) => [truck.name, truck.m3, truck.fsk]),
    [
      ["Sprinter", 10, "B"],
      ["Transporter 3,5t", 16, "B"],
      ["LKW 7,5t", 30, "C1"],
      ["LKW 12t", 45, "C"],
    ],
  );
});

test("calculates truck trips from the shared vehicle capacities", () => {
  const trips = estimateTruckTrips(32);

  assert.deepEqual(
    trips.map((entry) => [entry.truck.name, entry.fahrten]),
    [
      ["Sprinter", 4],
      ["Transporter 3,5t", 2],
      ["LKW 7,5t", 2],
      ["LKW 12t", 1],
    ],
  );
});

test("room based volume estimates keep growing up to large homes", () => {
  assert.equal(describeRoomSelection(6).volumeM3, 65);
  assert.ok(describeRoomSelection(15).volumeM3 > describeRoomSelection(6).volumeM3);
});

test("volume descriptions do not recommend an impossible one-trip truck", () => {
  const description = describeVolume(32);

  assert.equal(description.vehicleLabel, "1x LKW 12t oder 2x LKW 7,5t");
  assert.equal(description.cartonRange, "ca. 65-80 Kartons plus M\u00f6bel");
});
