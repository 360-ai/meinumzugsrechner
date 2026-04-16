"use client";

import { calculateUmzug } from "@/lib/calculate";
import { STORAGE_KEY, getDefaultForm } from "@/lib/form-defaults";
import { resolvePartners } from "@/lib/partner";
import type { CalculateResult, UmzugFormData } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ErgebnisKorridor } from "./ErgebnisKorridor";
import { PartnerBanner } from "./PartnerBanner";
import { PdfExportButton } from "./PdfExportButton";
import { TrustBadges } from "./TrustBadges";

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
      parsed = JSON.parse(raw) as UmzugFormData;
    } catch {
      setError("Formulardaten ungültig.");
      setLoading(false);
      return;
    }

    setForm(parsed);

    try {
      const calc = calculateUmzug(parsed);
      setResult(calc);
    } catch {
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
        <Link href="/rechner" className="mt-4 inline-block text-accent underline">
          Zum Rechner
        </Link>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p>Ergebnis konnte nicht geladen werden.</p>
        <Link href="/rechner" className="mt-2 inline-block text-accent underline">
          Zurück
        </Link>
      </div>
    );
  }

  const partners = resolvePartners(form.buildingA.landkreisAgs, form.buildingA.bundesland);

  return (
    <div className="space-y-8">
      {/* AdSense Slot 1 — nach Genehmigung aktivieren */}
      {/* <ins className="adsbygoogle" style={{ display: "block" }}
           data-ad-client="ca-pub-IHRE_PUBLISHER_ID"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true" /> */}

      <ErgebnisKorridor result={result} />

      <AffiliateProdukte />

      <TrustBadges />
      <div className="no-print flex flex-wrap gap-3">
        <PdfExportButton form={form} result={result} />
        <Link
          href="/rechner"
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
