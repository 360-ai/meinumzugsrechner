"use client";

import Link from "next/link";
import { useState } from "react";

const ZIMMER_TO_M3: Record<number, number> = { 1: 8, 2: 16, 3: 28, 4: 38, 5: 50, 6: 65 };
const PROFI_KORRIDOR: Record<number, [number, number]> = {
  1: [350, 600],
  2: [600, 1000],
  3: [900, 1500],
  4: [1300, 2200],
  5: [1800, 3000],
  6: [2500, 4000],
};

export function VergleichClient() {
  const [zimmer, setZimmer] = useState(3);
  const [km, setKm] = useState(20);
  const [helfer, setHelfer] = useState(2);

  const vol = ZIMMER_TO_M3[zimmer] ?? 28;
  const lkwMiete = vol <= 10 ? 150 : vol <= 20 ? 220 : vol <= 35 ? 320 : 420;
  const kraftstoff = Math.round(km * 2 * 0.35);
  const verpflegung = helfer * 25;
  const puffer = Math.round((lkwMiete + kraftstoff) * 0.12);
  const diyGesamt = lkwMiete + kraftstoff + verpflegung + puffer;
  const [profiUnten, profiOben] = PROFI_KORRIDOR[zimmer] ?? [900, 1500];

  const rows = [
    {
      label: "Direkte Kosten",
      diy: `ca. ${diyGesamt.toLocaleString("de-DE")} €`,
      profi: `${profiUnten.toLocaleString("de-DE")}–${profiOben.toLocaleString("de-DE")} €`,
    },
    { label: "Eigene Organisation", diy: "hoch", profi: "deutlich geringer" },
    { label: "Körperlicher Aufwand", diy: "hoch", profi: "niedriger" },
    { label: "Zeit am Umzugstag", diy: "oft ganzer Tag", profi: "meist kompakter" },
    { label: "Schadensrisiko", diy: "selbst tragen", profi: "vertraglich geregelt" },
    { label: "Steuerliche Chance", diy: "meist gering", profi: "Arbeitskosten oft relevanter" },
  ];

  const recommendation =
    km > 100 || zimmer >= 4
      ? "Bei größerem Haushalt oder längerer Distanz kippt der Vorteil oft Richtung Umzugsfirma, weil Zeit, Koordination und Zusatzfahrten schnell teuer werden."
      : "Bei überschaubarem Haushalt und kurzer Strecke kann Eigenregie wirtschaftlich sein, solange genug Helfer und realistische Zeitpuffer vorhanden sind.";

  return (
    <div className="space-y-8">
      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #0088CC" }}
      >
        <h2 className="mb-5 text-lg font-bold text-[#0D2137]">Rahmen für Ihren Vergleich</h2>
        <div className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0D2137]">
              Zimmeranzahl: <strong>{zimmer}</strong>
            </label>
            <input
              type="range"
              min={1}
              max={6}
              step={1}
              value={zimmer}
              onChange={(e) => setZimmer(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="mt-0.5 flex justify-between text-xs text-[#5A7A8A]">
              <span>1 Zi.</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6+</span>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0D2137]">
              Entfernung: <strong>{km} km</strong>
            </label>
            <input
              type="range"
              min={0}
              max={200}
              step={5}
              value={km}
              onChange={(e) => setKm(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="mt-0.5 flex justify-between text-xs text-[#5A7A8A]">
              <span>0 km</span>
              <span>200 km</span>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0D2137]">
              Helfer in Eigenregie: <strong>{helfer} Personen</strong>
            </label>
            <input
              type="range"
              min={1}
              max={6}
              step={1}
              value={helfer}
              onChange={(e) => setHelfer(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="mt-0.5 flex justify-between text-xs text-[#5A7A8A]">
              <span>1</span>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Direkter Kosten- und Aufwandvergleich</h2>
        <div className="-mx-2 overflow-x-auto">
          <table className="min-w-[360px] w-full text-sm">
            <thead>
              <tr>
                <th className="w-40 px-3 py-2 text-left text-xs font-medium text-[#5A7A8A]">
                  Kriterium
                </th>
                <th className="px-3 py-2 text-center text-xs font-medium text-[#5A7A8A]">
                  Eigenregie
                </th>
                <th className="px-3 py-2 text-center text-xs font-bold" style={{ color: "#0088CC" }}>
                  Umzugsfirma
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-3 py-2.5 font-medium text-[#0D2137]">{row.label}</td>
                  <td className="px-3 py-2.5 text-center text-[#5A7A8A]">{row.diy}</td>
                  <td className="px-3 py-2.5 text-center font-semibold" style={{ color: "#0088CC" }}>
                    {row.profi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#5A7A8A]">
          Eigenregie-Richtwert: LKW-Miete {lkwMiete} €, Kraftstoff {kraftstoff} €, Verpflegung{" "}
          {verpflegung} € und ein kleiner Puffer von {puffer} €. Der Firmenwert ist ein grober
          Erfahrungsrahmen für {zimmer} Zimmer bei {km} km.
        </p>
      </div>

      <div className="rounded-2xl bg-[#EBF6FD] p-5">
        <p className="mb-2 text-sm font-bold text-[#0D2137]">Wann kippt die Entscheidung?</p>
        <p className="text-sm leading-relaxed text-[#5A7A8A]">{recommendation}</p>
      </div>

      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #FF7700" }}
      >
        <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was im DIY-Vergleich oft vergessen wird</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#5A7A8A]">
          <li>Zusatzfahrten, Parkprobleme und kurzfristig fehlende Helfer kosten schnell mehr als gedacht.</li>
          <li>Schwere Möbel, enge Treppenhäuser und lange Tragewege verschieben die Rechnung stark.</li>
          <li>Ein niedriger Geldbetrag bedeutet nicht automatisch wenig Stress oder wenig Zeitaufwand.</li>
          <li>Eine gute Entscheidung hängt nicht nur am Preis, sondern auch an Kraft, Zeitfenster und Risiko.</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="mb-1 text-sm font-bold text-[#0D2137]">Steuerhinweis</p>
        <p className="text-sm text-[#5A7A8A]">
          Bei professionellen Leistungen können die Arbeitskosten steuerlich interessanter sein als
          bei reiner Eigenregie. Mehr dazu auf unserer Seite{" "}
          <a href="/ratgeber/steuerspartipps/" className="font-medium text-[#0088CC] hover:underline">
            Steuern sparen beim Umzug
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold text-[#0D2137]">Mit echten Umzugsdaten weiterrechnen</p>
          <p className="text-sm text-[#5A7A8A]">
            Für eine belastbarere Einschätzung mit Möbeln, Etagen und Region.
          </p>
        </div>
        <Link
          href="/rechner/"
          className="inline-flex flex-shrink-0 items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Jetzt berechnen →
        </Link>
      </div>
    </div>
  );
}
