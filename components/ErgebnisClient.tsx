"use client";

import { calculateUmzug } from "@/lib/calculate";
import { STORAGE_KEY, getDefaultForm } from "@/lib/form-defaults";
import { sanitizeUmzugForm } from "@/lib/form-sanitize";
import { resolvePartners } from "@/lib/partner";
import type { CalculateResult, UmzugFormData } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ErgebnisKorridor } from "./ErgebnisKorridor";
import { PartnerBanner } from "./PartnerBanner";
import { PdfExportButton } from "./PdfExportButton";
import { TrustBadges } from "./TrustBadges";
import { WunschfirmaSection } from "./WunschfirmaSection";

const BUNDESLAND_LABELS: Record<string, string> = {
  BW: "Baden-Württemberg", BY: "Bayern", BE: "Berlin", BB: "Brandenburg",
  HB: "Bremen", HH: "Hamburg", HE: "Hessen", MV: "Mecklenburg-Vorpommern",
  NI: "Niedersachsen", NW: "Nordrhein-Westfalen", RP: "Rheinland-Pfalz",
  SL: "Saarland", SN: "Sachsen", ST: "Sachsen-Anhalt", SH: "Schleswig-Holstein",
  TH: "Thüringen",
};
const ETAGE_LABELS: Record<string, string> = {
  eg: "Erdgeschoss", "1": "1. OG", "2": "2. OG", "3": "3. OG",
  "4": "4. OG", "5plus": "5. OG+", dg: "Dachgeschoss",
};
const AUFZUG_LABELS: Record<string, string> = { ja: "Ja", nein: "Nein", lasten: "Lastenaufzug" };
const TREPPEN_LABELS: Record<string, string> = { normal: "Normal", eng: "Eng (< 1,20 m)" };
const PARK_LABELS: Record<string, string> = { "0_10": "0–10 m", "10_30": "10–30 m", "30_50": "30–50 m", "50plus": "über 50 m" };
const HALTEVERBOT_LABELS: Record<string, string> = { ja: "Ja, wird benötigt", nein: "Nein", weiss_nicht: "Unbekannt" };
const GEBAEUDE_LABELS: Record<string, string> = { altbau: "Altbau", neubau: "Neubau", efh: "Einfamilienhaus" };
const KUECHE_LFM_LABELS: Record<string, string> = { bis_2m: "bis 2 m", "2_3m": "2–3 m", "3_4m": "3–4 m", ueber_4m: "über 4 m" };
const KUEHLSCHRANK_LABELS: Record<string, string> = { keiner: "keiner", standard: "Standard", sidebyside: "Side-by-Side" };
const EINBAU_LABELS: Record<string, string> = { einbau: "Einbau", freistehend: "Freistehend", keiner: "–" };
const GARTEN_LABELS: Record<string, string> = { wenig: "wenig", mittel: "mittel", viel: "viel" };

const INVENTORY_LABELS: Record<string, Record<string, string>> = {
  schlafzimmer: {
    bett_einzel: "Bett Einzel", bett_doppel: "Bett Doppel", boxspringbett: "Boxspringbett",
    kleiderschrank_klein: "Kleiderschrank klein", kleiderschrank_mittel: "Kleiderschrank mittel",
    kleiderschrank_gross: "Kleiderschrank groß", kleiderschrank_begehbar: "Begehbarer Kleiderschrank",
    kommode: "Kommode", nachttisch: "Nachttisch", spiegel_gross: "Spiegel groß", matratze_extra: "Matratze extra",
  },
  wohnzimmer: {
    sofa_2sitzer: "Sofa 2-Sitzer", sofa_3sitzer: "Sofa 3-Sitzer", sofa_l_form: "Sofa L-Form",
    sessel: "Sessel", couchtisch: "Couchtisch", tv_moebel: "TV-Möbel/Sideboard",
    regal_klein: "Regal klein", regal_gross: "Regal groß", vitrine: "Vitrine", teppich_gross: "Teppich groß",
  },
  buero: {
    schreibtisch_normal: "Schreibtisch", schreibtisch_eck: "Eck-Schreibtisch", buerostuhl: "Bürostuhl",
    aktenschrank: "Aktenschrank", drucker: "Drucker/Scanner",
  },
  keller: {
    werkzeugschrank: "Werkzeugschrank", fahrrad: "Fahrrad", motorrad: "Motorrad",
    kellerregal: "Kellerregal", gefriertruhe: "Gefriertruhe",
  },
};

function inventoryLines(form: UmzugFormData): string[] {
  const lines: string[] = [];
  for (const [room, items] of Object.entries(INVENTORY_LABELS)) {
    const roomKey = room as keyof typeof form.inventory;
    const data = form.inventory[roomKey] as Record<string, number>;
    if (!data) continue;
    const entries = Object.entries(data)
      .filter(([, v]) => v > 0)
      .map(([k, v]) => `  ${items[k] ?? k}: ${v}x`);
    if (entries.length > 0) {
      lines.push(`${room.charAt(0).toUpperCase() + room.slice(1)}:`);
      lines.push(...entries);
    }
  }
  // Küche
  const k = form.inventory.kueche;
  if (k.kueche_vorhanden === "ja") {
    lines.push("Küche:");
    lines.push(`  Küchenzeile: ${KUECHE_LFM_LABELS[k.kueche_laufmeter] ?? k.kueche_laufmeter}`);
    lines.push(`  Kühlschrank: ${KUEHLSCHRANK_LABELS[k.kuehlschrank] ?? k.kuehlschrank}`);
    if (k.herd !== "keiner") lines.push(`  Herd: ${EINBAU_LABELS[k.herd]}`);
    if (k.geschirrspueler !== "keiner") lines.push(`  Geschirrspüler: ${EINBAU_LABELS[k.geschirrspueler]}`);
    if (k.waschmaschine > 0) lines.push(`  Waschmaschine: ${k.waschmaschine}x`);
    if (k.trockner > 0) lines.push(`  Trockner: ${k.trockner}x`);
  }
  // Sperrgut
  const s = form.inventory.sperrgut;
  const sperr = [
    s.klavier > 0 && `Klavier: ${s.klavier}x`,
    s.fluegel > 0 && `Flügel: ${s.fluegel}x`,
    s.safe_schwer > 0 && `Tresor/Schwerlast: ${s.safe_schwer}x`,
    s.aquarium_gross > 0 && `Aquarium groß: ${s.aquarium_gross}x`,
    s.kunst_antik && `Kunst/Antiquitäten: ${s.kunst_antik_text || "vorhanden"}`,
  ].filter(Boolean);
  if (sperr.length > 0) {
    lines.push("Sperrgut / Sondergüter:");
    sperr.forEach((l) => lines.push(`  ${l}`));
  }
  // Garten
  if (form.inventory.gartengeraete !== "wenig") {
    lines.push(`Gartengeräte: ${GARTEN_LABELS[form.inventory.gartengeraete]}`);
  }
  return lines;
}

function extrasLines(form: UmzugFormData): string[] {
  const e = form.extras;
  const active = [
    e.einpackservice_komplett && "Einpackservice (komplett)",
    e.einpackservice_teilweise && "Einpackservice (teilweise)",
    e.auspackservice && "Auspackservice",
    e.moebelmontage && "Möbelmontage/-demontage",
    e.kueche_demo_montage && "Küche de-/montieren",
    e.elektro_anschluss && "Elektro-Anschluss",
    e.halteverbot_service && "Halteverbotszone einrichten",
    e.verpackungsmaterial && "Verpackungsmaterial liefern",
    e.entruempelung && `Entrümpelung (ca. ${e.entruempelung_m3} m³)`,
    e.zwischenlagerung && `Zwischenlagerung (${e.zwischenlagerung_tage} Tage, ca. ${e.zwischenlagerung_m3} m³)`,
    e.reinigung_alt && "Endreinigung alte Wohnung",
    e.moebellift && "Möbellift erforderlich",
    e.transportversicherung && "Transportversicherung gewünscht",
  ].filter(Boolean) as string[];
  return active;
}

function buildMailtoLink(form: UmzugFormData, result: CalculateResult, partnerUrl: string): string {
  const email = partnerUrl.startsWith("mailto:")
    ? partnerUrl.replace(/^mailto:/, "").split("?")[0]
    : "info@meinumzugsrechner.de";

  const stadtA = form.buildingA.stadtOrt || "–";
  const stadtB = form.buildingB.gleicheStadt ? stadtA : (form.buildingB.stadtOrt || "–");
  const blA = BUNDESLAND_LABELS[form.buildingA.bundesland] ?? form.buildingA.bundesland;
  const blB = form.buildingB.gleicheStadt ? blA : (BUNDESLAND_LABELS[form.buildingB.bundesland] ?? form.buildingB.bundesland);
  const datum = form.distance.umzugsdatum || "–";
  const km = form.distance.km > 0 ? `ca. ${form.distance.km} km` : "–";

  const bldLine = (b: typeof form.buildingA) =>
    `Aufzug: ${AUFZUG_LABELS[b.aufzug] ?? b.aufzug} | Treppenhaus: ${TREPPEN_LABELS[b.treppenhaus] ?? b.treppenhaus} | LKW-Abstand: ${PARK_LABELS[b.parkentfernung] ?? b.parkentfernung} | Halteverbot: ${HALTEVERBOT_LABELS[b.halteverbot] ?? b.halteverbot} | Gebäude: ${GEBAEUDE_LABELS[b.gebaeudetyp] ?? b.gebaeudetyp}`;

  const invLines = inventoryLines(form);
  const extraList = extrasLines(form);
  const preisUnten = result.korridorUnten.toLocaleString("de-DE") + " €";
  const preisOben = result.korridorOben.toLocaleString("de-DE") + " €";

  const subject = `Umzugsanfrage: ${stadtA} → ${stadtB} am ${datum}`;
  const body = [
    "Guten Tag,",
    "",
    "ich habe meinen Umzug auf meinumzugsrechner.de vorkalkuliert und möchte ein Angebot anfragen.",
    "Alle relevanten Details sind unten aufgeführt — eine Rückfrage sollte damit nicht mehr nötig sein.",
    "",
    "══ AUSZUG ══",
    `Ort: ${stadtA}, ${blA}`,
    `Etage: ${ETAGE_LABELS[form.buildingA.etage] ?? form.buildingA.etage}`,
    bldLine(form.buildingA),
    "",
    "══ EINZUG ══",
    `Ort: ${stadtB}, ${blB}`,
    `Etage: ${ETAGE_LABELS[form.buildingB.etage] ?? form.buildingB.etage}`,
    bldLine(form.buildingB.gleicheStadt ? form.buildingA : form.buildingB),
    "",
    "══ TERMIN & DISTANZ ══",
    `Umzugsdatum: ${datum}`,
    `Distanz: ${km}`,
    `Nutzungsart: ${form.summary.nutzungsart === "gewerbe" ? "Gewerbe" : "Privat"}`,
    "",
    "══ MOBILIAR & VOLUMEN ══",
    `Geschätztes Volumen: ca. ${result.meta.volumenM3Schaetzung.toFixed(0)} m³`,
    `Empfohlene Helferanzahl: ${result.meta.helfer}`,
    "",
    ...(invLines.length > 0 ? invLines : ["(keine Angaben)"]),
    "",
    "══ GEWÜNSCHTE ZUSATZLEISTUNGEN ══",
    ...(extraList.length > 0 ? extraList.map((l) => `- ${l}`) : ["Keine"]),
    "",
    "══ PREISKORRIDOR (Eigenberechnung) ══",
    `${preisUnten} – ${preisOben}`,
    "(Orientierungswert aus meinumzugsrechner.de — kein verbindlicher Preis)",
    "",
    "Ich freue mich auf Ihr Angebot.",
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ErgebnisClient() {
  const [form, setForm] = useState<UmzugFormData | null>(null);
  const [result, setResult] = useState<CalculateResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (!raw) {
      setError("Keine Formulardaten gefunden. Bitte Rechner erneut ausfüllen.");
      setLoading(false);
      return;
    }

    let parsed: UmzugFormData;
    try {
      parsed = sanitizeUmzugForm(JSON.parse(raw) as UmzugFormData);
    } catch {
      setError("Formulardaten ungültig.");
      setLoading(false);
      return;
    }

    setForm(parsed);

    try {
      const calc = calculateUmzug(parsed);
      setResult(calc);
    } catch (e) {
      console.error("calculateUmzug failed:", e);
      setError("Berechnung fehlgeschlagen. Bitte Rechner erneut ausfüllen.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-medium text-primary">Wird berechnet…</p>
        <p className="mt-2 text-sm text-muted">Bitte einen Moment.</p>
      </div>
    );
  }

  if (error || !form) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-900">
        <p className="font-semibold">{error ?? "Fehler"}</p>
        <Link href="/rechner/" className="mt-4 inline-block text-accent underline">
          Zum Rechner
        </Link>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p>Ergebnis konnte nicht geladen werden.</p>
        <Link href="/rechner/" className="mt-2 inline-block text-accent underline">
          Zurück
        </Link>
      </div>
    );
  }

  const partners = resolvePartners(form.buildingA.landkreisAgs, form.buildingA.bundesland);
  const anfragMailto = buildMailtoLink(form, result, partners.primary.url);

  return (
    <div className="space-y-8">
      {/* AdSense Slot 1 — nach Genehmigung aktivieren */}
      {/* <ins className="adsbygoogle" style={{ display: "block" }}
           data-ad-client="ca-pub-IHRE_PUBLISHER_ID"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true" /> */}

      <ErgebnisKorridor result={result} />

      <WunschfirmaSection
        bundesland={form.buildingA.bundesland}
        anfragMailtoBase={(partnerUrl) => buildMailtoLink(form, result, partnerUrl)}
      />

      <AffiliateProdukte />

      <TrustBadges />
      <div className="no-print flex flex-wrap gap-3">
        <PdfExportButton form={form} result={result} />
        <Link
          href="/rechner/"
          className="touch-target inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(getDefaultForm()));
            } catch {
              /* ignore */
            }
          }}
        >
          Neue Berechnung
        </Link>
      </div>
      <PartnerBanner
        primary={partners.primary}
        listings={partners.listings}
        affiliateNote={partners.note}
        anfragMailto={anfragMailto}
      />

      {/* AdSense Slot 2 — nach Genehmigung aktivieren */}
      {/* <ins className="adsbygoogle" style={{ display: "block" }}
           data-ad-client="ca-pub-IHRE_PUBLISHER_ID"
           data-ad-slot="YYYYYYYYYY"
           data-ad-format="auto"
           data-full-width-responsive="true" /> */}
    </div>
  );
}

const AFFILIATE_PRODUCTS = [
  {
    name: "Umzugskartons (10er Set)",
    desc: "Stabile Kartons in Standardgröße",
    emoji: "📦",
    href: "#",
  },
  {
    name: "Packband (6 Rollen)",
    desc: "Reißfestes Klebeband für Kartons",
    emoji: "🎀",
    href: "#",
  },
  {
    name: "Luftpolsterfolie",
    desc: "Schutz für Gläser & Elektrogeräte",
    emoji: "🫧",
    href: "#",
  },
  {
    name: "Möbelschutzdecken (2er Set)",
    desc: "Schützt Möbel vor Kratzern",
    emoji: "🛋️",
    href: "#",
  },
  {
    name: "Beschriftungsaufkleber-Set",
    desc: "Farbige Aufkleber für Raumzuordnung",
    emoji: "🏷️",
    href: "#",
  },
  {
    name: "Cuttermesser",
    desc: "Zum Öffnen und Schließen von Kartons",
    emoji: "🔪",
    href: "#",
  },
];

function AffiliateProdukte() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-primary">Das brauchst du für deinen Umzug</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {AFFILIATE_PRODUCTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col gap-1 rounded-xl border border-slate-200 p-3 hover:border-accent hover:bg-slate-50 transition-colors"
          >
            <span className="text-2xl">{p.emoji}</span>
            <span className="text-sm font-semibold text-primary leading-tight">{p.name} *</span>
            <span className="text-xs text-muted">{p.desc}</span>
            <span className="mt-auto text-xs text-accent font-medium">Bei Amazon ansehen →</span>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted">
        * Mit * gekennzeichnete Links sind Affiliate-Links. Wir erhalten eine kleine Provision,
        für dich entstehen keine Mehrkosten.
      </p>
    </section>
  );
}
