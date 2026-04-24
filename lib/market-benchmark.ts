import type { BundeslandCode, HaushaltGroesse } from "./types";

export type BenchmarkDistanceClass = "local" | "regional" | "long_distance";
export type BenchmarkSizeClass = "1_room" | "2_rooms" | "3_rooms" | "4_rooms" | "house";

export type MarketBenchmarkInput = {
  bundesland: BundeslandCode;
  wohnflaecheM2: number;
  zimmer: number;
  haushaltGroesse: HaushaltGroesse;
  km: number;
};

export type MarketBenchmarkResult = {
  korridorUnten: number;
  korridorOben: number;
  netto: number;
  volumenM3Schaetzung: number;
  helfer: number;
  gesamtMinuten: number;
  zeitStunden: number;
  distanceClass: BenchmarkDistanceClass;
  sizeClass: BenchmarkSizeClass;
};

const SIZE_ORDER: BenchmarkSizeClass[] = ["1_room", "2_rooms", "3_rooms", "4_rooms", "house"];

const BENCHMARK_RANGES: Record<
  BenchmarkDistanceClass,
  Record<BenchmarkSizeClass, [number, number]>
> = {
  local: {
    "1_room": [400, 700],
    "2_rooms": [600, 1000],
    "3_rooms": [900, 1500],
    "4_rooms": [1200, 2000],
    house: [2000, 3500],
  },
  regional: {
    "1_room": [700, 1200],
    "2_rooms": [1000, 1800],
    "3_rooms": [1300, 2200],
    "4_rooms": [1900, 3200],
    house: [3200, 5500],
  },
  long_distance: {
    "1_room": [1200, 2000],
    "2_rooms": [1800, 3000],
    "3_rooms": [2500, 4500],
    "4_rooms": [3500, 6000],
    house: [5500, 9500],
  },
};

const HOUSEHOLD_FACTOR: Record<HaushaltGroesse, number> = {
  "1": 0.92,
  "2": 1,
  "3_4": 1.1,
  "5plus": 1.2,
};

const REGION_FACTOR: Partial<Record<BundeslandCode, number>> = {
  BW: 1.06,
  BY: 1.06,
  BE: 1.04,
  HH: 1.08,
  HE: 1,
  NW: 1.02,
  SN: 0.95,
  ST: 0.94,
  TH: 0.94,
  MV: 0.95,
};

const VOLUME_FACTOR: Record<HaushaltGroesse, number> = {
  "1": 0.9,
  "2": 1,
  "3_4": 1.15,
  "5plus": 1.3,
};

const VOLUME_EXTRA_M3: Record<HaushaltGroesse, number> = {
  "1": 0,
  "2": 2,
  "3_4": 5,
  "5plus": 9,
};

function roundTo50(value: number): number {
  return Math.round(value / 50) * 50;
}

function distanceClass(km: number): BenchmarkDistanceClass {
  if (km <= 50) return "local";
  if (km <= 200) return "regional";
  return "long_distance";
}

function roomSizeClass(zimmer: number): BenchmarkSizeClass {
  if (zimmer <= 1) return "1_room";
  if (zimmer === 2) return "2_rooms";
  if (zimmer === 3) return "3_rooms";
  if (zimmer === 4) return "4_rooms";
  return "house";
}

function areaSizeClass(wohnflaecheM2: number): BenchmarkSizeClass {
  if (wohnflaecheM2 <= 35) return "1_room";
  if (wohnflaecheM2 <= 65) return "2_rooms";
  if (wohnflaecheM2 <= 95) return "3_rooms";
  if (wohnflaecheM2 <= 125) return "4_rooms";
  return "house";
}

function maxSizeClass(a: BenchmarkSizeClass, b: BenchmarkSizeClass): BenchmarkSizeClass {
  return SIZE_ORDER[Math.max(SIZE_ORDER.indexOf(a), SIZE_ORDER.indexOf(b))];
}

function estimateBenchmarkVolume(input: MarketBenchmarkInput): number {
  const wohnflaeche = Math.max(10, input.wohnflaecheM2);
  const zimmer = Math.max(1, input.zimmer);
  const householdFactor = VOLUME_FACTOR[input.haushaltGroesse];
  const householdExtra = VOLUME_EXTRA_M3[input.haushaltGroesse];
  const areaVolume = wohnflaeche * 0.34;
  const roomVolume = zimmer * 2.2;
  const raw = (areaVolume + roomVolume + householdExtra) * householdFactor;

  return Math.round(Math.min(95, Math.max(6, raw)) * 10) / 10;
}

export function estimateMarketBenchmark(input: MarketBenchmarkInput): MarketBenchmarkResult {
  const sizeClass = maxSizeClass(
    roomSizeClass(Math.max(1, Math.round(input.zimmer))),
    areaSizeClass(Math.max(10, input.wohnflaecheM2)),
  );
  const dc = distanceClass(Math.max(0, input.km));
  const [baseLow, baseHigh] = BENCHMARK_RANGES[dc][sizeClass];
  const householdFactor = HOUSEHOLD_FACTOR[input.haushaltGroesse] ?? 1;
  const regionFactor = REGION_FACTOR[input.bundesland] ?? 1;
  const factor = householdFactor * regionFactor;
  const korridorUnten = roundTo50(baseLow * factor);
  const korridorOben = Math.max(korridorUnten + 50, roundTo50(baseHigh * factor));
  const volumenM3Schaetzung = estimateBenchmarkVolume(input);
  const helfer = volumenM3Schaetzung >= 35 || sizeClass === "house" ? 3 : 2;
  const zeitStunden = Math.round(Math.max(3, volumenM3Schaetzung / 7.5) * 100) / 100;
  const gesamtMinuten = Math.round(zeitStunden * 60 * helfer);

  return {
    korridorUnten,
    korridorOben,
    netto: Math.round((korridorUnten + korridorOben) / 2),
    volumenM3Schaetzung,
    helfer,
    gesamtMinuten,
    zeitStunden,
    distanceClass: dc,
    sizeClass,
  };
}
