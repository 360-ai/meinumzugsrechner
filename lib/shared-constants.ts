import type { HaushaltGroesse } from "./types";

/**
 * Zentrale Konstanten für Volumen- und Kostenberechnungen.
 * Alle Rechner (Haupt, LKW, Benchmark) greifen auf diese Werte zu.
 */

// ── Volumen-Schätzung (Quick-Estimate / Benchmark) ──

export const VOLUME_FACTOR: Record<HaushaltGroesse, number> = {
  "1": 0.9,
  "2": 1,
  "3_4": 1.15,
  "5plus": 1.3,
};

export const VOLUME_EXTRA_M3: Record<HaushaltGroesse, number> = {
  "1": 0,
  "2": 2,
  "3_4": 5,
  "5plus": 9,
};

export const AREA_VOLUME_FACTOR = 0.34;
export const ROOM_VOLUME_FACTOR = 2.2;
export const VOLUME_MIN_M3 = 6;
export const VOLUME_MAX_M3 = 220;
export const VOLUME_MIN_AREA_M2 = 10;

export function estimateVolumeFromQuickInput(
  wohnflaecheM2: number,
  zimmer: number,
  haushaltGroesse: HaushaltGroesse,
): number {
  const wohnflaeche = Math.max(VOLUME_MIN_AREA_M2, wohnflaecheM2);
  const rooms = Math.max(1, zimmer);
  const householdFactor = VOLUME_FACTOR[haushaltGroesse];
  const householdExtra = VOLUME_EXTRA_M3[haushaltGroesse];
  const areaVolume = wohnflaeche * AREA_VOLUME_FACTOR;
  const roomVolume = rooms * ROOM_VOLUME_FACTOR;
  const raw = (areaVolume + roomVolume + householdExtra) * householdFactor;

  return Math.round(Math.min(VOLUME_MAX_M3, Math.max(VOLUME_MIN_M3, raw)) * 10) / 10;
}

// ── Helfer-Schwelle ──

export const HELFER_VOLUMEN_SCHWELLE_M3 = 35;

// ── Rundung ──

export function roundTo50(value: number): number {
  return Math.round(value / 50) * 50;
}

// ── DIY-Kostenschätzung ──

export const DIY_LKW_MIETE: [number, number][] = [
  [10, 150],
  [20, 220],
  [35, 320],
];
export const DIY_LKW_MIETE_MAX = 420;

export const DIY_KRAFTSTOFF_PRO_KM = 0.35;
export const DIY_HELFER_VERPFLEGUNG = 25;

export function estimateDiyLkwMiete(volumenM3: number): number {
  for (const [maxVol, preis] of DIY_LKW_MIETE) {
    if (volumenM3 <= maxVol) return preis;
  }
  return DIY_LKW_MIETE_MAX;
}

export function estimateDiyKosten(
  volumenM3: number,
  km: number,
  helfer: number,
): { lkwMiete: number; kraftstoff: number; helferVerpflegung: number; gesamt: number } {
  const lkwMiete = estimateDiyLkwMiete(volumenM3);
  const kraftstoff = Math.round(km * 2 * DIY_KRAFTSTOFF_PRO_KM);
  const helferVerpflegung = helfer * DIY_HELFER_VERPFLEGUNG;
  return {
    lkwMiete,
    kraftstoff,
    helferVerpflegung,
    gesamt: lkwMiete + kraftstoff + helferVerpflegung,
  };
}
