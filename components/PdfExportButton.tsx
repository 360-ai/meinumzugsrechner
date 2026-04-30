"use client";

import { describeVolume } from "@/lib/move-logistics";
import type { CalculateResult, UmzugFormData } from "@/lib/types";
import { jsPDF } from "jspdf";

type Props = {
  form: UmzugFormData;
  result: CalculateResult;
};

type BuildingDetails = UmzugFormData["buildingA"];

const BUNDESLAND_LABELS: Record<string, string> = {
  BW: "Baden-Württemberg",
  BY: "Bayern",
  BE: "Berlin",
  BB: "Brandenburg",
  HB: "Bremen",
  HH: "Hamburg",
  HE: "Hessen",
  MV: "Mecklenburg-Vorpommern",
  NI: "Niedersachsen",
  NW: "Nordrhein-Westfalen",
  RP: "Rheinland-Pfalz",
  SL: "Saarland",
  SN: "Sachsen",
  ST: "Sachsen-Anhalt",
  SH: "Schleswig-Holstein",
  TH: "Thüringen",
};

const ETAGE_LABELS: Record<string, string> = {
  eg: "Erdgeschoss",
  "1": "1. OG",
  "2": "2. OG",
  "3": "3. OG",
  "4": "4. OG",
  "5plus": "5. OG+",
  dg: "Dachgeschoss",
};

const AUFZUG_LABELS: Record<string, string> = {
  ja: "Ja",
  nein: "Nein",
  lasten: "Lastenaufzug",
};

const TREPPEN_LABELS: Record<string, string> = {
  normal: "Normal",
  eng: "Eng (< 1,20 m)",
};

const PARK_LABELS: Record<string, string> = {
  "0_10": "0-10 m",
  "10_30": "10-30 m",
  "30_50": "30-50 m",
  "50plus": "über 50 m",
};

const HALTEVERBOT_LABELS: Record<string, string> = {
  ja: "Ja, wird benötigt",
  nein: "Nein",
  weiss_nicht: "Unbekannt",
};

const GEBAEUDE_LABELS: Record<string, string> = {
  altbau: "Altbau",
  neubau: "Neubau",
  efh: "Einfamilienhaus",
  mfh: "Mehrfamilienhaus",
};

const HAUSHALT_LABELS: Record<string, string> = {
  "1": "1 Person",
  "2": "2 Personen",
  "3_4": "3-4 Personen",
  "5plus": "5+ Personen",
};

const KUECHE_LFM_LABELS: Record<string, string> = {
  bis_2m: "bis 2 m",
  "2_3m": "2-3 m",
  "3_4m": "3-4 m",
  ueber_4m: "über 4 m",
};

const KUEHLSCHRANK_LABELS: Record<string, string> = {
  keiner: "keiner",
  standard: "Standard",
  sidebyside: "Side-by-Side",
};

const EINBAU_LABELS: Record<string, string> = {
  einbau: "Einbau",
  freistehend: "Freistehend",
  keiner: "keiner",
};

const GARTEN_LABELS: Record<string, string> = {
  wenig: "wenig",
  mittel: "mittel",
  viel: "viel",
};

const INVENTORY_LABELS: Record<string, { title: string; labels: Record<string, string> }> = {
  schlafzimmer: {
    title: "Schlafzimmer",
    labels: {
      bett_einzel: "Einzelbett",
      bett_doppel: "Doppelbett",
      boxspringbett: "Boxspringbett",
      kleiderschrank_klein: "Kleiderschrank klein",
      kleiderschrank_mittel: "Kleiderschrank mittel",
      kleiderschrank_gross: "Kleiderschrank groß",
      kleiderschrank_begehbar: "Begehbarer Kleiderschrank",
      kommode: "Kommode",
      nachttisch: "Nachttisch",
      spiegel_gross: "Spiegel groß",
      matratze_extra: "Extra-Matratze",
    },
  },
  wohnzimmer: {
    title: "Wohnzimmer",
    labels: {
      sofa_2sitzer: "Sofa 2-Sitzer",
      sofa_3sitzer: "Sofa 3-Sitzer",
      sofa_l_form: "Sofa L-Form",
      sessel: "Sessel",
      couchtisch: "Couchtisch",
      tv_moebel: "TV-Möbel",
      regal_klein: "Regal klein",
      regal_gross: "Regal groß",
      vitrine: "Vitrine",
      teppich_gross: "Teppich groß",
    },
  },
  buero: {
    title: "Arbeitszimmer / Sonstiges",
    labels: {
      schreibtisch_normal: "Schreibtisch",
      schreibtisch_eck: "Eckschreibtisch",
      buerostuhl: "Bürostuhl",
      buecherregal: "Bücherregal",
      drucker: "Drucker",
    },
  },
  keller: {
    title: "Keller / Garage",
    labels: {
      fahrrad: "Fahrrad",
      ebike: "E-Bike",
      motorrad: "Motorrad",
      werkzeugschrank: "Werkzeugschrank",
      kellerregal: "Kellerregal",
    },
  },
  kartons: {
    title: "Umzugskartons",
    labels: {
      karton_standard: "Standard-Karton",
      karton_buch: "Bücherkarton",
      haengekarton: "Hängekarton",
      karton_spezial: "Spezialkarton",
    },
  },
};

function buildingLines(title: string, building: BuildingDetails): string[] {
  return [
    title,
    `Ort: ${building.stadtOrt || "-"}, ${BUNDESLAND_LABELS[building.bundesland] ?? building.bundesland}`,
    `Landkreis/AGS: ${building.landkreisAgs}`,
    `Etage: ${ETAGE_LABELS[building.etage] ?? building.etage}`,
    `Aufzug: ${AUFZUG_LABELS[building.aufzug] ?? building.aufzug}`,
    `Treppenhaus: ${TREPPEN_LABELS[building.treppenhaus] ?? building.treppenhaus}`,
    `Entfernung Haustür -> LKW: ${PARK_LABELS[building.parkentfernung] ?? building.parkentfernung}`,
    `Halteverbot: ${HALTEVERBOT_LABELS[building.halteverbot] ?? building.halteverbot}`,
    `Gebäudetyp: ${GEBAEUDE_LABELS[building.gebaeudetyp] ?? building.gebaeudetyp}`,
  ];
}

function inventoryLines(form: UmzugFormData): string[] {
  const lines: string[] = [];

  for (const [key, group] of Object.entries(INVENTORY_LABELS)) {
    const data = form.inventory[key as keyof typeof form.inventory] as Record<string, number>;
    const entries = Object.entries(data)
      .filter(([, value]) => value > 0)
      .map(([itemKey, value]) => `${group.labels[itemKey] ?? itemKey}: ${value}x`);

    if (entries.length > 0) {
      lines.push(group.title, ...entries.map((entry) => `  ${entry}`));
    }
  }

  const kitchen = form.inventory.kueche;
  lines.push("Küche");
  lines.push(`  Einbauküche vorhanden: ${kitchen.kueche_vorhanden === "ja" ? "Ja" : "Nein"}`);
  if (kitchen.kueche_vorhanden === "ja") {
    lines.push(`  Küchenzeile: ${KUECHE_LFM_LABELS[kitchen.kueche_laufmeter] ?? kitchen.kueche_laufmeter}`);
  }
  lines.push(`  Kühlschrank: ${KUEHLSCHRANK_LABELS[kitchen.kuehlschrank] ?? kitchen.kuehlschrank}`);
  lines.push(`  Herd: ${EINBAU_LABELS[kitchen.herd] ?? kitchen.herd}`);
  lines.push(`  Geschirrspüler: ${EINBAU_LABELS[kitchen.geschirrspueler] ?? kitchen.geschirrspueler}`);
  lines.push(`  Waschmaschine: ${kitchen.waschmaschine}x`);
  lines.push(`  Trockner: ${kitchen.trockner}x`);

  lines.push("Sperrgut / Besonderes");
  lines.push(`  Klavier: ${form.inventory.sperrgut.klavier}x`);
  lines.push(`  Flügel: ${form.inventory.sperrgut.fluegel}x`);
  lines.push(`  Safe/Tresor über 50 kg: ${form.inventory.sperrgut.safe_schwer}x`);
  lines.push(`  Aquarium über 200 l: ${form.inventory.sperrgut.aquarium_gross}x`);
  lines.push(
    `  Kunst/Antikes: ${
      form.inventory.sperrgut.kunst_antik
        ? form.inventory.sperrgut.kunst_antik_text || "vorhanden"
        : "nein"
    }`,
  );
  lines.push(`Gartengeräte: ${GARTEN_LABELS[form.inventory.gartengeraete] ?? form.inventory.gartengeraete}`);

  return lines;
}

function extrasLines(form: UmzugFormData): string[] {
  const extras = form.extras;
  const lines = [
    extras.einpackservice_komplett && "Einpackservice komplett",
    extras.einpackservice_teilweise && "Einpackservice teilweise",
    extras.auspackservice && "Auspackservice",
    extras.moebelmontage && "Möbelmontage/-demontage",
    extras.kueche_demo_montage && "Küche demontieren/montieren",
    extras.elektro_anschluss && "Elektrogeräte ab-/anklemmen",
    extras.halteverbot_service && "Halteverbot beantragen",
    extras.verpackungsmaterial && "Verpackungsmaterial liefern",
    extras.entruempelung && `Entrümpelung: ca. ${extras.entruempelung_m3} m³`,
    extras.zwischenlagerung && `Zwischenlagerung: ${extras.zwischenlagerung_tage} Tage, ca. ${extras.zwischenlagerung_m3} m³`,
    extras.reinigung_alt && "Reinigung alte Wohnung",
    extras.moebellift && "Möbellift/Kran",
    extras.transportversicherung && "Transportversicherung gewünscht",
  ].filter(Boolean) as string[];

  return lines.length > 0 ? lines : ["Keine Zusatzleistungen angegeben"];
}

function pdfFilename(form: UmzugFormData): string {
  const city = (form.buildingA.stadtOrt || "umzug")
    .toLowerCase()
    .replace(/[^a-z0-9äöüß-]+/gi, "-")
    .replace(/^-|-$/g, "");
  const date = form.distance.umzugsdatum || new Date().toISOString().slice(0, 10);
  return `meinumzugsrechner-${date}-${city || "umzug"}.pdf`;
}

export function PdfExportButton({ form, result }: Props) {
  const download = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 48;
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const ensureSpace = (height = 18) => {
      if (y + height <= pageHeight - margin) return;
      doc.addPage();
      y = margin;
    };

    const addText = (text: string, options: { size?: number; bold?: boolean; gap?: number } = {}) => {
      const size = options.size ?? 10;
      const lineHeight = size + 5;
      doc.setFont("helvetica", options.bold ? "bold" : "normal");
      doc.setFontSize(size);
      const wrapped = doc.splitTextToSize(text, maxWidth) as string[];
      ensureSpace(wrapped.length * lineHeight);
      doc.text(wrapped, margin, y);
      y += wrapped.length * lineHeight + (options.gap ?? 0);
    };

    const addSection = (title: string) => {
      y += 8;
      ensureSpace(28);
      doc.setDrawColor(0, 136, 204);
      doc.line(margin, y - 8, pageWidth - margin, y - 8);
      addText(title, { size: 13, bold: true, gap: 4 });
    };

    const money = (value: number) => `${value.toLocaleString("de-DE")} EUR`;
    const volume = describeVolume(result.meta.volumenM3Schaetzung);
    const targetBuilding = form.buildingB.gleicheStadt
      ? { ...form.buildingB, bundesland: form.buildingA.bundesland, landkreisAgs: form.buildingA.landkreisAgs, stadtOrt: form.buildingA.stadtOrt }
      : form.buildingB;

    addText("meinumzugsrechner.de - Angebotsvorlage / Richtwert", { size: 16, bold: true, gap: 8 });
    addText("Unverbindlicher Orientierungswert. Diese PDF wurde lokal im Browser erzeugt; es werden keine Umzugsdaten auf unseren Servern gespeichert.", {
      size: 10,
      gap: 8,
    });

    addSection("Preisrahmen und technische Schätzgrößen");
    addText(`Preiskorridor: ${money(result.korridorUnten)} bis ${money(result.korridorOben)}`, { bold: true });
    addText(`Region: ${result.regionName} | Mindestauftrag ab ${money(result.mindestauftrag)}`);
    addText(`Volumen: ca. ${result.meta.volumenM3Schaetzung} m³ (${volume.bandLabel})`);
    addText(`Karton-Richtwert: ${volume.cartonRange}`);
    addText(`Fahrzeug-Richtwert: ${volume.vehicleLabel}`);
    addText(`Zeit: ca. ${result.meta.gesamtMinuten} Minuten Gesamtarbeit | Helfer: ${result.meta.helfer} | Zeit x Helfer: ca. ${result.meta.zeitStunden} h`);

    addSection("Gebäude und Strecke");
    buildingLines("Gebäude A / Auszug", form.buildingA).forEach((line) => addText(line));
    addText("");
    buildingLines("Gebäude B / Einzug", targetBuilding).forEach((line) => addText(line));
    addText(`Distanz: ${form.distance.km} km`);
    addText(`Umzugsdatum: ${form.distance.umzugsdatum || "-"}`);
    addText(`Nutzungsart: ${form.summary.nutzungsart === "gewerbe" ? "Gewerbe" : "Privat"}`);

    if (form.summary.quickEstimate) {
      addSection("Schnellschätzung");
      addText(`Wohnfläche: ${form.summary.quickEstimate.wohnflaecheM2} m²`);
      addText(`Zimmer: ${form.summary.quickEstimate.zimmer}`);
      addText(`Haushaltsgröße: ${HAUSHALT_LABELS[form.summary.quickEstimate.haushaltGroesse] ?? form.summary.quickEstimate.haushaltGroesse}`);
    }

    addSection("Inventar und Kartons");
    inventoryLines(form).forEach((line) => addText(line));

    addSection("Zusatzleistungen");
    extrasLines(form).forEach((line) => addText(line));

    addSection("Hinweis für Angebotsanfragen");
    addText("Diese Zusammenfassung ist als strukturierte Vorbereitung für Umzugsunternehmen gedacht. Verbindlich ist erst das individuelle Angebot nach Prüfung durch das Unternehmen.");

    doc.save(pdfFilename(form));
  };

  return (
    <button
      type="button"
      onClick={download}
      className="touch-target rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-slate-50"
    >
      PDF herunterladen
    </button>
  );
}
