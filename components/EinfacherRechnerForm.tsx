"use client";

import { getDefaultForm, STORAGE_KEY } from "@/lib/form-defaults";
import { sanitizeUmzugForm } from "@/lib/form-sanitize";
import type { BundeslandCode, HaushaltGroesse, UmzugFormData } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const BUNDESLAENDER: { value: BundeslandCode; label: string }[] = [
  { value: "BW", label: "Baden-Württemberg" },
  { value: "BY", label: "Bayern" },
  { value: "BE", label: "Berlin" },
  { value: "BB", label: "Brandenburg" },
  { value: "HB", label: "Bremen" },
  { value: "HH", label: "Hamburg" },
  { value: "HE", label: "Hessen" },
  { value: "MV", label: "Mecklenburg-Vorpommern" },
  { value: "NI", label: "Niedersachsen" },
  { value: "NW", label: "Nordrhein-Westfalen" },
  { value: "RP", label: "Rheinland-Pfalz" },
  { value: "SL", label: "Saarland" },
  { value: "SN", label: "Sachsen" },
  { value: "ST", label: "Sachsen-Anhalt" },
  { value: "SH", label: "Schleswig-Holstein" },
  { value: "TH", label: "Thüringen" },
];

const HAUSHALT_OPTIONS: { value: HaushaltGroesse; label: string; hint: string }[] = [
  { value: "1", label: "1 Person", hint: "kleiner Haushalt, ca. 20-40 Kartons" },
  { value: "2", label: "2 Personen", hint: "Paar-Haushalt, ca. 40-70 Kartons" },
  { value: "3_4", label: "3-4 Personen", hint: "Familie, ca. 70-110 Kartons" },
  { value: "5plus", label: "5+ Personen", hint: "großer Haushalt, oft 110+ Kartons" },
];

export function EinfacherRechnerForm() {
  const router = useRouter();
  const [bundesland, setBundesland] = useState<BundeslandCode>("HE");
  const [wohnflaeche, setWohnflaeche] = useState(70);
  const [zimmer, setZimmer] = useState(3);
  const [haushaltGroesse, setHaushaltGroesse] = useState<HaushaltGroesse>("2");
  const [km, setKm] = useState(50);
  const [agb, setAgb] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const zimmerOptions = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1), []);

  const submit = useCallback(() => {
    setErr(null);
    if (!agb) {
      setErr("Bitte die AGB und Datenschutzhinweise bestätigen.");
      return;
    }
    if (wohnflaeche < 10 || wohnflaeche > 500) {
      setErr("Bitte eine Wohnfläche zwischen 10 und 500 m² angeben.");
      return;
    }
    if (km < 0 || km > 2000) {
      setErr("Bitte eine Entfernung zwischen 0 und 2.000 km angeben.");
      return;
    }

    const base = getDefaultForm();
    const form: UmzugFormData = {
      ...base,
      buildingA: {
        ...base.buildingA,
        bundesland,
        landkreisAgs: "00000",
      },
      buildingB: {
        ...base.buildingB,
        bundesland,
        gleicheStadt: false,
        landkreisAgs: "00000",
      },
      distance: {
        ...base.distance,
        km,
      },
      summary: {
        nutzungsart: "privat",
        agbAccepted: true,
        quickEstimate: { wohnflaecheM2: wohnflaeche, zimmer, haushaltGroesse },
      },
    };

    const clean = sanitizeUmzugForm(form);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    } catch {
      setErr("Speichern im Browser fehlgeschlagen.");
      return;
    }
    router.push("/ergebnis/");
  }, [agb, bundesland, haushaltGroesse, km, wohnflaeche, zimmer, router]);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#0D2137]">Schnell schätzen</h2>
      <p className="mt-1 text-sm text-[#5A7A8A]">
        Wohnfläche, Zimmer und Entfernung — ideal für eine erste Orientierung. Für Angebote mit
        detaillierter Möbelliste nutzen Sie die{" "}
        <a href="/rechner/?mode=detail" className="font-medium text-[#0088CC] hover:underline">
          detaillierte Kalkulation
        </a>
        .
      </p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-[#0D2137]">Bundesland (Region für Preisfaktor)</span>
          <select
            value={bundesland}
            onChange={(e) => setBundesland(e.target.value as BundeslandCode)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            {BUNDESLAENDER.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#0D2137]">Wohnfläche (m²)</span>
          <input
            type="number"
            min={10}
            max={500}
            value={wohnflaeche}
            onChange={(e) => setWohnflaeche(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#0D2137]">Anzahl Zimmer</span>
          <select
            value={zimmer}
            onChange={(e) => setZimmer(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            {zimmerOptions.map((z) => (
              <option key={z} value={z}>
                {z} Zimmer
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#0D2137]">Haushaltsgröße</span>
          <select
            value={haushaltGroesse}
            onChange={(e) => setHaushaltGroesse(e.target.value as HaushaltGroesse)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            {HAUSHALT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-[#5A7A8A]">
            {HAUSHALT_OPTIONS.find((o) => o.value === haushaltGroesse)?.hint}
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#0D2137]">Entfernung (km)</span>
          <input
            type="number"
            min={0}
            max={2000}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </label>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agb}
            onChange={(e) => setAgb(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300"
          />
          <span className="text-sm text-[#5A7A8A]">
            Ich habe die{" "}
            <a href="/agb/" className="text-[#0088CC] hover:underline">
              AGB
            </a>{" "}
            und die{" "}
            <a href="/datenschutz/" className="text-[#0088CC] hover:underline">
              Datenschutzerklärung
            </a>{" "}
            gelesen und akzeptiere diese.
          </span>
        </label>

        {err && <p className="text-sm text-red-600">{err}</p>}

        <button
          type="button"
          onClick={submit}
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-95"
        >
          Preiskorridor berechnen
        </button>
      </div>
    </div>
  );
}
