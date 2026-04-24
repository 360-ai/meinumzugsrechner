export type HouseholdLevel = "minimal" | "normal" | "full";
export type FragileLevel = "low" | "normal" | "high";
export type StorageLevel = "none" | "some" | "full";
export type WohndauerLevel = "kurz" | "mittel" | "lang";

export type CartonEstimateInput = {
  rooms: number;
  householdLevel: HouseholdLevel;
  wohndauer: WohndauerLevel;
  bookMeters: number;
  kitchenCabinets: number;
  wardrobeMeters: number;
  fragileLevel: FragileLevel;
  storageLevel: StorageLevel;
};

export type CartonBreakdown = {
  allround: number;
  heavy: number;
  wardrobe: number;
  fragile: number;
};

export type CartonEstimateResult = {
  breakdown: CartonBreakdown;
  baseTotal: number;
  reserve: number;
  total: number;
};

export type CartonLoadDescription = {
  label: string;
  hint: string;
};

const HOUSEHOLD_MULTIPLIER: Record<HouseholdLevel, number> = {
  minimal: 0.75,
  normal: 1,
  full: 1.25,
};

const WOHNDAUER_MULTIPLIER: Record<WohndauerLevel, number> = {
  kurz: 0.85,  // 0–3 Jahre: wenig angesammelt
  mittel: 1.0, // 3–10 Jahre: typisch
  lang: 1.2,   // 10+ Jahre: viel angesammelt
};

const FRAGILE_BOXES: Record<FragileLevel, number> = {
  low: 2,
  normal: 5,
  high: 8,
};

const STORAGE_BOXES: Record<StorageLevel, number> = {
  none: 0,
  some: 4,
  full: 9,
};

function roundCartons(value: number): number {
  return Math.max(0, Math.round(value));
}

export function calculateCartonEstimate(input: CartonEstimateInput): CartonEstimateResult {
  const rooms = Math.max(0, input.rooms);
  const householdMultiplier = HOUSEHOLD_MULTIPLIER[input.householdLevel];
  const wohndauerMultiplier = WOHNDAUER_MULTIPLIER[input.wohndauer];

  const allround = roundCartons(
    (rooms * 4 + input.kitchenCabinets + STORAGE_BOXES[input.storageLevel]) *
      householdMultiplier *
      wohndauerMultiplier,
  );
  const heavy = roundCartons(input.bookMeters * 2.2 + Math.max(0, input.kitchenCabinets) * 0.6);
  const wardrobe = roundCartons(Math.max(0, input.wardrobeMeters));
  const fragile = FRAGILE_BOXES[input.fragileLevel];

  const breakdown = { allround, heavy, wardrobe, fragile };
  const baseTotal = allround + heavy + wardrobe + fragile;
  const reserve = Math.ceil(baseTotal * 0.12);

  return {
    breakdown,
    baseTotal,
    reserve,
    total: baseTotal + reserve,
  };
}

export function describeCartonLoad(total: number): CartonLoadDescription {
  if (total <= 20) {
    return {
      label: "kleiner Umzug",
      hint: "ähnlich wie ein WG-Zimmer oder ein reduziertes 1-Zimmer-Apartment",
    };
  }

  if (total <= 35) {
    return {
      label: "mittlerer Haushalt",
      hint: "ähnlich wie eine 2- bis 3-Zimmer-Wohnung mit normaler Ausstattung",
    };
  }

  if (total <= 60) {
    return {
      label: "größerer Haushalt",
      hint: "ähnlich wie eine gut gefüllte 4-Zimmer-Wohnung",
    };
  }

  return {
    label: "sehr großer Haushalt",
    hint: "ähnlich wie Haus, Keller und mehrere voll genutzte Räume zusammen",
  };
}
