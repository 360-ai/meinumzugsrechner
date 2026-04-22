import preismatrix from "@/data/preismatrix.json";
import type { CalculateResult, UmzugFormData } from "./types";
import { estimateQuickMoveVolume } from "./volume-explanation";

type Matrix = typeof preismatrix;

function etageToFloors(e: UmzugFormData["buildingA"]["etage"]): number {
  if (e === "eg") return 0;
  if (e === "5plus") return 5;
  if (e === "dg") return 4;
  const n = parseInt(e, 10);
  return Number.isFinite(n) ? n : 0;
}

function parkToZuschlag(
  z: Matrix["zuschlage"],
  p: UmzugFormData["buildingA"]["parkentfernung"],
): number {
  switch (p) {
    case "0_10":
      return 0;
    case "10_30":
      return z.parkentfernung_10_30m;
    case "30_50":
      return z.parkentfernung_30_50m;
    case "50plus":
      return z.parkentfernung_50plus;
    default:
      return 0;
  }
}

function dayMultiplier(z: Matrix["zuschlage"], isoDate: string): number {
  const d = new Date(isoDate + "T12:00:00");
  const day = d.getDay();
  if (day === 6) return 1 + z.samstag;
  if (day === 0) return 1 + z.sonntag_feiertag;
  if (day === 1) return 1 + (z.werktag_montag ?? 0);
  return 1;
}

function sumCounterMinutes(
  m: Matrix["moebel_zeitwerte_minuten"],
  counts: Record<string, number>,
  keys: (keyof typeof m)[],
): number {
  let sum = 0;
  for (const k of keys) {
    const v = counts[k as string] ?? 0;
    const minutes = m[k as keyof typeof m];
    if (typeof minutes === "number") sum += v * minutes;
  }
  return sum;
}

function estimateM3(form: UmzugFormData): number {
  const k = form.inventory.kartons;
  let m3 =
    (k.karton_standard ?? 0) * 0.06 +
    (k.karton_buch ?? 0) * 0.04 +
    (k.haengekarton ?? 0) * 0.1 +
    (k.karton_spezial ?? 0) * 0.08;

  const addItem = (n: number, per: number) => {
    m3 += n * per;
  };

  const sz = form.inventory.schlafzimmer;
  const wz = form.inventory.wohnzimmer;
  const b = form.inventory.buero;
  const kel = form.inventory.keller;
  Object.values(sz).forEach((n) => addItem(n, 0.8));
  Object.values(wz).forEach((n) => addItem(n, 1.0));
  Object.values(b).forEach((n) => addItem(n, 0.4));
  Object.values(kel).forEach((n) => addItem(n, 0.5));

  if (form.inventory.kueche.kueche_vorhanden === "ja") {
    m3 += 3;
  }
  if (form.inventory.kueche.kuehlschrank !== "keiner") m3 += 1;
  m3 += form.inventory.kueche.waschmaschine * 0.4;
  m3 += form.inventory.kueche.trockner * 0.4;

  const sp = form.inventory.sperrgut;
  m3 += sp.klavier * 2 + sp.fluegel * 3 + sp.safe_schwer * 0.5 + sp.aquarium_gross * 1;

  const gg = form.inventory.gartengeraete;
  if (gg === "mittel") m3 += 1.5;
  if (gg === "viel") m3 += 3;

  return Math.round(m3 * 10) / 10;
}

type RegionRow = Matrix["regions"][keyof Matrix["regions"]];

function finalizeKorridor(
  form: UmzugFormData,
  region: RegionRow,
  regionKeyOut: string,
  minuten: number,
  volumenM3: number,
): CalculateResult {
  const z = preismatrix.zuschlage;
  const zx = preismatrix.zusatzleistungen;

  let helfer = preismatrix.anzahl_helfer_basis;
  const volThreshold =
    (preismatrix as Matrix & { volumen_m3_fuer_dritter_helfer?: number })
      .volumen_m3_fuer_dritter_helfer ?? 35;
  if (volumenM3 >= volThreshold) helfer = 3;
  if (minuten > 720) helfer = 3;

  const mindestzeit = preismatrix.mindestzeit_stunden ?? 3;
  let zeitStunden = minuten / 60 / helfer;
  if (zeitStunden < mindestzeit) zeitStunden = mindestzeit;

  let stundenlohn = zeitStunden * region.stundensatz_helfer * helfer;

  const etageA = etageToFloors(form.buildingA.etage);
  const etageB = etageToFloors(form.buildingB.etage);
  const fEtage =
    z.etage_ohne_aufzug_pro_etage ?? 0.08;
  if (form.buildingA.aufzug === "nein") {
    stundenlohn *= 1 + etageA * fEtage;
  }
  if (form.buildingB.aufzug === "nein") {
    stundenlohn *= 1 + etageB * fEtage;
  }

  let zuschlagSum = 0;
  if (form.buildingA.treppenhaus === "eng") zuschlagSum += z.enger_treppenflur;
  if (form.buildingB.treppenhaus === "eng") zuschlagSum += z.enger_treppenflur;
  if (form.buildingA.gebaeudetyp === "altbau") zuschlagSum += z.altbau;
  if (form.buildingB.gebaeudetyp === "altbau") zuschlagSum += z.altbau;

  zuschlagSum += parkToZuschlag(z, form.buildingA.parkentfernung);
  zuschlagSum += parkToZuschlag(z, form.buildingB.parkentfernung);

  stundenlohn *= 1 + zuschlagSum;
  stundenlohn *= dayMultiplier(z, form.distance.umzugsdatum);

  let basis = stundenlohn + region.lkw_grundpauschale;
  basis += form.distance.km * region.km_pauschale;

  const ex = form.extras;
  let addFix = 0;
  if (ex.kueche_demo_montage) addFix += zx.kueche_demontage_montage;
  if (ex.elektro_anschluss) addFix += zx.elektrogeraete_anschluss;
  if (ex.halteverbot_service) addFix += zx.halteverbot_beantragen;
  if (ex.reinigung_alt) addFix += zx.reinigung_alte_wohnung;
  if (ex.moebellift) addFix += zx.moebellift;

  if (ex.zwischenlagerung) {
    addFix +=
      ex.zwischenlagerung_tage *
      ex.zwischenlagerung_m3 *
      zx.zwischenlagerung_pro_tag_pro_m3;
  }
  if (ex.entruempelung) {
    addFix += ex.entruempelung_m3 * zx.entruempelung_pro_m3;
  }

  let prozentAufschlag = 0;
  if (ex.einpackservice_komplett) prozentAufschlag += zx.einpackservice_komplett;
  if (ex.einpackservice_teilweise) prozentAufschlag += zx.einpackservice_teilweise;
  if (ex.auspackservice) prozentAufschlag += zx.auspackservice;
  if (ex.moebelmontage) prozentAufschlag += zx.moebelmontage;
  if (ex.verpackungsmaterial) prozentAufschlag += zx.verpackungsmaterial_lieferung;

  let netto = basis * (1 + prozentAufschlag) + addFix;

  if (ex.transportversicherung) {
    netto += (netto * zx.transportversicherung_promille) / 1000;
  }

  const puffer = 1 + (preismatrix.puffer_prozent ?? 15) / 100;
  netto *= puffer;

  const ku = preismatrix.korridor_unten ?? 0.9;
  const ko = preismatrix.korridor_oben ?? 1.15;
  const rnd = preismatrix.rundung_euro ?? 50;

  let unten = netto * ku;
  let oben = netto * ko;

  const round50 = (x: number) => Math.round(x / rnd) * rnd;
  unten = round50(unten);
  oben = round50(oben);

  if (unten < region.mindestauftrag) unten = region.mindestauftrag;
  if (oben < unten) oben = unten + rnd;

  return {
    netto: Math.round(netto),
    korridorUnten: unten,
    korridorOben: oben,
    regionKey: regionKeyOut,
    regionName: region.name,
    mindestauftrag: region.mindestauftrag,
    meta: {
      gesamtMinuten: Math.round(minuten),
      helfer,
      zeitStunden: Math.round(zeitStunden * 100) / 100,
      volumenM3Schaetzung: volumenM3,
    },
  };
}

export function calculateUmzug(form: UmzugFormData): CalculateResult {
  const matrix = preismatrix as Matrix & {
    region_overrides_by_ags?: Record<string, RegionRow>;
  };
  const regions = matrix.regions as Record<string, RegionRow>;
  const bl = form.buildingA.bundesland;
  const ags = form.buildingA.landkreisAgs;

  let region: RegionRow =
    (regions as Record<string, RegionRow>)[bl] ?? regions.DEFAULT;
  let regionKeyOut: string = bl;

  const ov = matrix.region_overrides_by_ags;
  if (ov && ags && ags !== "00000" && ov[ags]) {
    region = ov[ags];
    regionKeyOut = ags;
  }

  const zm = preismatrix.moebel_zeitwerte_minuten;

  let minuten = 0;
  let volumenM3: number;

  if (form.summary.quickEstimate) {
    const q = form.summary.quickEstimate;
    volumenM3 = estimateQuickMoveVolume(q);
    minuten = Math.round(
      Math.min(
        3200,
        Math.max(180, 170 + volumenM3 * 10 + q.zimmer * 55),
      ),
    );
    return finalizeKorridor(form, region, regionKeyOut, minuten, volumenM3);
  }

  minuten += sumCounterMinutes(
    zm,
    form.inventory.schlafzimmer,
    [
      "bett_einzel",
      "bett_doppel",
      "boxspringbett",
      "kleiderschrank_klein",
      "kleiderschrank_mittel",
      "kleiderschrank_gross",
      "kleiderschrank_begehbar",
      "kommode",
      "nachttisch",
      "spiegel_gross",
      "matratze_extra",
    ] as (keyof typeof zm)[],
  );

  minuten += sumCounterMinutes(
    zm,
    form.inventory.wohnzimmer,
    [
      "sofa_2sitzer",
      "sofa_3sitzer",
      "sofa_l_form",
      "sessel",
      "couchtisch",
      "tv_moebel",
      "regal_klein",
      "regal_gross",
      "vitrine",
      "teppich_gross",
    ] as (keyof typeof zm)[],
  );

  if (form.inventory.kueche.kueche_vorhanden === "ja") {
    const lfm = form.inventory.kueche.kueche_laufmeter;
    const add = preismatrix.kueche_laufmeter[lfm as keyof typeof preismatrix.kueche_laufmeter];
    minuten += Math.round(add / 5);
  }

  if (form.inventory.kueche.kuehlschrank === "standard")
    minuten += zm.kuehlschrank_standard;
  if (form.inventory.kueche.kuehlschrank === "sidebyside")
    minuten += zm.kuehlschrank_sidebyside;

  if (form.inventory.kueche.herd !== "keiner") minuten += 10;
  if (form.inventory.kueche.geschirrspueler !== "keiner") minuten += 10;

  minuten += form.inventory.kueche.waschmaschine * zm.waschmaschine;
  minuten += form.inventory.kueche.trockner * zm.trockner;

  minuten += sumCounterMinutes(
    zm,
    form.inventory.buero,
    [
      "schreibtisch_normal",
      "schreibtisch_eck",
      "buerostuhl",
      "buecherregal",
      "drucker",
    ] as (keyof typeof zm)[],
  );

  minuten += sumCounterMinutes(
    zm,
    form.inventory.keller,
    ["fahrrad", "ebike", "motorrad", "werkzeugschrank", "kellerregal"] as (keyof typeof zm)[],
  );

  const gg = form.inventory.gartengeraete;
  if (gg === "wenig") minuten += zm.gartengeraete_wenig;
  else if (gg === "mittel") minuten += zm.gartengeraete_mittel;
  else minuten += zm.gartengeraete_viel;

  const sp = form.inventory.sperrgut;
  minuten += sp.klavier * zm.klavier;
  minuten += sp.fluegel * zm.fluegel;
  minuten += sp.safe_schwer * zm.safe_schwer;
  minuten += sp.aquarium_gross * zm.aquarium_gross;
  if (sp.kunst_antik) minuten += 45;

  minuten += sumCounterMinutes(
    zm,
    form.inventory.kartons,
    ["karton_standard", "karton_buch", "haengekarton", "karton_spezial"] as (keyof typeof zm)[],
  );

  volumenM3 = estimateM3(form);
  return finalizeKorridor(form, region, regionKeyOut, minuten, volumenM3);
}
