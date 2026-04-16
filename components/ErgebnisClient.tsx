"use client";

import { STORAGE_KEY, getDefaultForm } from "@/lib/form-defaults";
import { resolvePartners } from "@/lib/partner";
import type { CalculateResult, UmzugFormData } from "@/lib/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ErgebnisKorridor } from "./ErgebnisKorridor";
import { PartnerBanner } from "./PartnerBanner";
import { PdfExportButton } from "./PdfExportButton";
import { TrustBadges } from "./TrustBadges";

export function ErgebnisClient() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [form, setForm] = useState<UmzugFormData | null>(null);
  const [result, setResult] = useState<CalculateResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setError("Keine gültige Zahlungssession. Bitte erneut starten.");
      setLoading(false);
      return;
    }

    let raw: string | null = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (!raw) {
      setError("Keine Formulardaten im Browser gefunden. Bitte Rechner erneut ausfüllen.");
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

    (async () => {
      try {
        const res = await fetch("/api/calculate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, formData: parsed }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Berechnung fehlgeschlagen.");
          setLoading(false);
          return;
        }
        setResult(data.result as CalculateResult);
      } catch {
        setError("Netzwerkfehler. Bitte später erneut versuchen.");
      } finally {
        setLoading(false);
      }
    })();
  }, [sessionId]);

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
      <ErgebnisKorridor result={result} />
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
    </div>
  );
}
