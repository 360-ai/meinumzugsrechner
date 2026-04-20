"use client";

import Link from "next/link";
import { useState } from "react";

const ZIMMER_TO_M3: Record<number, number> = { 1: 8, 2: 16, 3: 28, 4: 38, 5: 50, 6: 65 };
const PROFI_KORRIDOR: Record<number, [number, number]> = {
  1: [350, 600], 2: [600, 1000], 3: [900, 1500], 4: [1300, 2200], 5: [1800, 3000], 6: [2500, 4000],
};

export function VergleichClient() {
  const [zimmer, setZimmer] = useState(3);
  const [km, setKm] = useState(20);
  const [helfer, setHelfer] = useState(2);

  const vol = ZIMMER_TO_M3[zimmer] ?? 28;
  const lkwMiete = vol <= 10 ? 150 : vol <= 20 ? 220 : vol <= 35 ? 320 : 420;
  const kraftstoff = Math.round(km * 2 * 0.35);
  const verpflegung = helfer * 25;
  const diyGesamt = lkwMiete + kraftstoff + verpflegung;
  const [profiUnten, profiOben] = PROFI_KORRIDOR[zimmer] ?? [900, 1500];

  const rows = [
    { label: "Kosten", diy: `ca. ${diyGesamt.toLocaleString("de-DE")} €`, profi: `${profiUnten.toLocaleString("de-DE")}–${profiOben.toLocaleString("de-DE")} €` },
    { label: "Zeitaufwand", diy: "12–16 Stunden", profi: "3–6 Stunden" },
    { label: "Versicherung", diy: "Privathaftpflicht", profi: "Inklusive" },
    { label: "Steuervorteil", diy: "Nein", profi: "Ja (35a EStG)" },
    { label: "Stresslevel", diy: "Hoch", profi: "Niedrig" },
    { label: "Haftung bei Schäden", diy: "Selbst", profi: "Umzugsfirma" },
  ];

  return (
    <div className="space-y-8">

      {/* Inputs */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
        <h2 className="mb-5 text-lg font-bold text-[#0D2137]">Dein Umzug</h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#0D2137] mb-1">
              Zimmeranzahl: <strong>{zimmer}</strong>
            </label>
            <input type="range" min={1} max={6} step={1} value={zimmer}
              onChange={e => setZimmer(Number(e.target.value))}
              className="w-full" style={{ accentColor: "#0088CC" }} />
            <div className="flex justify-between text-xs text-[#5A7A8A] mt-0.5">
              <span>1 Zi.</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6+</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0D2137] mb-1">
              Entfernung: <strong>{km} km</strong>
            </label>
            <input type="range" min={0} max={200} step={5} value={km}
              onChange={e => setKm(Number(e.target.value))}
              className="w-full" style={{ accentColor: "#0088CC" }} />
            <div className="flex justify-between text-xs text-[#5A7A8A] mt-0.5">
              <span>0 km</span><span>200 km</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0D2137] mb-1">
              Helfer (DIY): <strong>{helfer} Personen</strong>
            </label>
            <input type="range" min={1} max={6} step={1} value={helfer}
              onChange={e => setHelfer(Number(e.target.value))}
              className="w-full" style={{ accentColor: "#0088CC" }} />
            <div className="flex justify-between text-xs text-[#5A7A8A] mt-0.5">
              <span>1</span><span>6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Direktvergleich</h2>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full min-w-[360px] text-sm">
            <thead>
              <tr>
                <th className="text-left py-2 px-3 text-[#5A7A8A] font-medium text-xs w-40">Kriterium</th>
                <th className="text-center py-2 px-3 text-[#5A7A8A] font-medium text-xs">Selbst (DIY)</th>
                <th className="text-center py-2 px-3 font-bold text-xs" style={{ color: "#0088CC" }}>Profi-Firma</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                  <td className="py-2.5 px-3 font-medium text-[#0D2137]">{row.label}</td>
                  <td className="py-2.5 px-3 text-center text-[#5A7A8A]">{row.diy}</td>
                  <td className="py-2.5 px-3 text-center font-semibold" style={{ color: "#0088CC" }}>{row.profi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#5A7A8A]">
          DIY-Kosten: LKW-Miete {lkwMiete} €{km > 0 ? ` + Kraftstoff ${kraftstoff} €` : ""} + Verpflegung {verpflegung} €. Profi-Korridor: Erfahrungswerte für {zimmer}-Zimmer-Wohnung, {km} km.
        </p>
      </div>

      {/* Tax hint */}
      <div className="rounded-2xl p-5" style={{ backgroundColor: "#EBF6FD" }}>
        <p className="text-sm font-bold text-[#0D2137] mb-1">Steuertipp: Bis zu 4.000 € zurück</p>
        <p className="text-sm text-[#5A7A8A]">
          Bei einer Profi-Firma kann der Lohnanteil der Rechnung nach §35a EStG steuerlich geltend gemacht werden — 20 % der Arbeitskosten, bis 4.000 €/Jahr.
        </p>
        <a href="/ratgeber/steuerspartipps/" className="mt-2 inline-block text-sm font-medium hover:underline" style={{ color: "#0088CC" }}>
          Mehr zu Steuerspartipps →
        </a>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <p className="font-bold text-[#0D2137]">Genauen Preis berechnen</p>
          <p className="text-sm text-[#5A7A8A]">Mit deinen echten Möbeln, Etagen und Region — kostenlos.</p>
        </div>
        <Link
          href="/rechner/"
          className="flex-shrink-0 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Jetzt berechnen →
        </Link>
      </div>

    </div>
  );
}
