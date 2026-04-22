import { getDefaultForm } from "./form-defaults";
import type {
  AufzugKey,
  BundeslandCode,
  EtageKey,
  GebaeudeTyp,
  GartenMenge,
  HalteverbotKey,
  HaushaltGroesse,
  KuecheLfm,
  KuehlschrankKey,
  EinbauKey,
  ParkKey,
  TreppenKey,
  UmzugFormData,
} from "./types";

const BUNDESLAND = new Set<string>([
  "BW",
  "BY",
  "BE",
  "BB",
  "HB",
  "HH",
  "HE",
  "MV",
  "NI",
  "NW",
  "RP",
  "SL",
  "SN",
  "ST",
  "SH",
  "TH",
]);

const ETAGE = new Set<string>(["eg", "1", "2", "3", "4", "5plus", "dg"]);
const AUFZUG = new Set<string>(["ja", "nein", "lasten"]);
const TREPPE = new Set<string>(["normal", "eng"]);
const PARK = new Set<string>(["0_10", "10_30", "30_50", "50plus"]);
const HALTE = new Set<string>(["ja", "nein", "weiss_nicht"]);
const GEB = new Set<string>(["altbau", "neubau", "efh"]);
const KUECHE_LFM = new Set<string>(["bis_2m", "2_3m", "3_4m", "ueber_4m"]);
const KUEHL = new Set<string>(["keiner", "standard", "sidebyside"]);
const EINBAU = new Set<string>(["einbau", "freistehend", "keiner"]);
const GARTEN = new Set<string>(["wenig", "mittel", "viel"]);
const HAUSHALT = new Set<string>(["1", "2", "3_4", "5plus"]);

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const AGS = /^\d{5}$/;

function clampInt(n: unknown, min: number, max: number): number {
  if (typeof n !== "number" || !Number.isFinite(n)) return min;
  const x = Math.round(n);
  return Math.min(max, Math.max(min, x));
}

function clampFloatNonNeg(n: unknown, max: number): number {
  if (typeof n !== "number" || !Number.isFinite(n)) return 0;
  return Math.min(max, Math.max(0, n));
}

function mergeCounts(def: Record<string, number>, raw: unknown): Record<string, number> {
  const out = { ...def };
  if (!raw || typeof raw !== "object") return out;
  const o = raw as Record<string, unknown>;
  for (const k of Object.keys(def)) {
    out[k] = clampInt(o[k], 0, 999);
  }
  return out;
}

function str(x: unknown, maxLen: number, fallback = ""): string {
  if (typeof x !== "string") return fallback;
  return x.length > maxLen ? x.slice(0, maxLen) : x;
}

function pick<T extends string>(x: unknown, allowed: Set<string>, fallback: T): T {
  return typeof x === "string" && allowed.has(x) ? (x as T) : fallback;
}

/**
 * Repariert LocalStorage / Fremddaten: fehlende Keys, NaN und ungültige Enums
 * werden mit Defaults ersetzt; Zahlen werden begrenzt (keine negativen Mengen).
 */
export function sanitizeUmzugForm(raw: unknown): UmzugFormData {
  const d = getDefaultForm();
  if (!raw || typeof raw !== "object") return d;

  const r = raw as Record<string, unknown>;

  const a = r.buildingA && typeof r.buildingA === "object" ? (r.buildingA as Record<string, unknown>) : {};
  const b = r.buildingB && typeof r.buildingB === "object" ? (r.buildingB as Record<string, unknown>) : {};
  const dist = r.distance && typeof r.distance === "object" ? (r.distance as Record<string, unknown>) : {};
  const inv = r.inventory && typeof r.inventory === "object" ? (r.inventory as Record<string, unknown>) : {};
  const ex = r.extras && typeof r.extras === "object" ? (r.extras as Record<string, unknown>) : {};
  const sum = r.summary && typeof r.summary === "object" ? (r.summary as Record<string, unknown>) : {};

  const kue = inv.kueche && typeof inv.kueche === "object" ? (inv.kueche as Record<string, unknown>) : {};
  const sp = inv.sperrgut && typeof inv.sperrgut === "object" ? (inv.sperrgut as Record<string, unknown>) : {};

  const umzugsdatum =
    typeof dist.umzugsdatum === "string" && ISO_DATE.test(dist.umzugsdatum)
      ? dist.umzugsdatum
      : d.distance.umzugsdatum;

  const landA =
    typeof a.landkreisAgs === "string" && AGS.test(a.landkreisAgs) ? a.landkreisAgs : d.buildingA.landkreisAgs;
  const landB =
    typeof b.landkreisAgs === "string" && AGS.test(b.landkreisAgs) ? b.landkreisAgs : d.buildingB.landkreisAgs;

  return {
    buildingA: {
      bundesland: pick<BundeslandCode>(a.bundesland, BUNDESLAND, d.buildingA.bundesland),
      landkreisAgs: landA,
      stadtOrt: str(a.stadtOrt, 200, d.buildingA.stadtOrt),
      etage: pick<EtageKey>(a.etage, ETAGE, d.buildingA.etage),
      aufzug: pick<AufzugKey>(a.aufzug, AUFZUG, d.buildingA.aufzug),
      treppenhaus: pick<TreppenKey>(a.treppenhaus, TREPPE, d.buildingA.treppenhaus),
      parkentfernung: pick<ParkKey>(a.parkentfernung, PARK, d.buildingA.parkentfernung),
      halteverbot: pick<HalteverbotKey>(a.halteverbot, HALTE, d.buildingA.halteverbot),
      gebaeudetyp: pick<GebaeudeTyp>(a.gebaeudetyp, GEB, d.buildingA.gebaeudetyp),
    },
    buildingB: {
      gleicheStadt: typeof b.gleicheStadt === "boolean" ? b.gleicheStadt : d.buildingB.gleicheStadt,
      bundesland: pick<BundeslandCode>(b.bundesland, BUNDESLAND, d.buildingB.bundesland),
      landkreisAgs: landB,
      stadtOrt: str(b.stadtOrt, 200, d.buildingB.stadtOrt),
      etage: pick<EtageKey>(b.etage, ETAGE, d.buildingB.etage),
      aufzug: pick<AufzugKey>(b.aufzug, AUFZUG, d.buildingB.aufzug),
      treppenhaus: pick<TreppenKey>(b.treppenhaus, TREPPE, d.buildingB.treppenhaus),
      parkentfernung: pick<ParkKey>(b.parkentfernung, PARK, d.buildingB.parkentfernung),
      halteverbot: pick<HalteverbotKey>(b.halteverbot, HALTE, d.buildingB.halteverbot),
      gebaeudetyp: pick<GebaeudeTyp>(b.gebaeudetyp, GEB, d.buildingB.gebaeudetyp),
    },
    distance: {
      km: clampFloatNonNeg(dist.km, 50_000),
      umzugsdatum,
    },
    inventory: {
      schlafzimmer: mergeCounts(d.inventory.schlafzimmer, inv.schlafzimmer),
      wohnzimmer: mergeCounts(d.inventory.wohnzimmer, inv.wohnzimmer),
      kueche: {
        kueche_vorhanden: kue.kueche_vorhanden === "ja" ? "ja" : "nein",
        kueche_laufmeter: pick<KuecheLfm>(kue.kueche_laufmeter, KUECHE_LFM, d.inventory.kueche.kueche_laufmeter),
        kuehlschrank: pick<KuehlschrankKey>(kue.kuehlschrank, KUEHL, d.inventory.kueche.kuehlschrank),
        herd: pick<EinbauKey>(kue.herd, EINBAU, d.inventory.kueche.herd),
        geschirrspueler: pick<EinbauKey>(kue.geschirrspueler, EINBAU, d.inventory.kueche.geschirrspueler),
        waschmaschine: clampInt(kue.waschmaschine, 0, 20),
        trockner: clampInt(kue.trockner, 0, 20),
      },
      buero: mergeCounts(d.inventory.buero, inv.buero),
      keller: mergeCounts(d.inventory.keller, inv.keller),
      gartengeraete: pick<GartenMenge>(inv.gartengeraete, GARTEN, d.inventory.gartengeraete),
      sperrgut: {
        klavier: clampInt(sp.klavier, 0, 20),
        fluegel: clampInt(sp.fluegel, 0, 10),
        safe_schwer: clampInt(sp.safe_schwer, 0, 20),
        aquarium_gross: clampInt(sp.aquarium_gross, 0, 20),
        kunst_antik: sp.kunst_antik === true,
        kunst_antik_text: str(sp.kunst_antik_text, 500, d.inventory.sperrgut.kunst_antik_text),
      },
      kartons: mergeCounts(d.inventory.kartons, inv.kartons),
    },
    extras: {
      einpackservice_komplett: ex.einpackservice_komplett === true,
      einpackservice_teilweise: ex.einpackservice_teilweise === true,
      auspackservice: ex.auspackservice === true,
      moebelmontage: ex.moebelmontage === true,
      kueche_demo_montage: ex.kueche_demo_montage === true,
      elektro_anschluss: ex.elektro_anschluss === true,
      halteverbot_service: ex.halteverbot_service === true,
      verpackungsmaterial: ex.verpackungsmaterial === true,
      entruempelung: ex.entruempelung === true,
      zwischenlagerung: ex.zwischenlagerung === true,
      reinigung_alt: ex.reinigung_alt === true,
      moebellift: ex.moebellift === true,
      transportversicherung: ex.transportversicherung === true,
      zwischenlagerung_tage: clampInt(ex.zwischenlagerung_tage, 0, 3650),
      zwischenlagerung_m3: clampFloatNonNeg(ex.zwischenlagerung_m3, 10_000),
      entruempelung_m3: clampFloatNonNeg(ex.entruempelung_m3, 10_000),
    },
    summary: (() => {
      const nutzungsart = sum.nutzungsart === "gewerbe" ? "gewerbe" : "privat";
      const agbAccepted = sum.agbAccepted === true;
      const qe = sum.quickEstimate;
      if (qe && typeof qe === "object") {
        const q = qe as Record<string, unknown>;
        const m2 = clampFloatNonNeg(q.wohnflaecheM2, 2000);
        const zi = clampInt(q.zimmer, 1, 20);
        const hh = pick<HaushaltGroesse>(q.haushaltGroesse, HAUSHALT, "2");
        if (m2 >= 10 && zi >= 1) {
          return {
            nutzungsart,
            agbAccepted,
            quickEstimate: { wohnflaecheM2: Math.min(m2, 800), zimmer: zi, haushaltGroesse: hh },
          };
        }
      }
      return { nutzungsart, agbAccepted };
    })(),
  };
}
