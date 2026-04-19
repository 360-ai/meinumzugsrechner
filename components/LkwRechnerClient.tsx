"use client";

import Link from "next/link";
import { useState } from "react";

// Gleiche Truck-Daten wie in ErgebnisClient
const TRUCKS = [
  { name: "Sprinter", m3: 10, fsk: "B", label: "bis 1-Zi.-Wohnung", example: "Studio, Single-Haushalt" },
  { name: "Transporter 3,5t", m3: 16, fsk: "B", label: "2-Zi.-Wohnung", example: "Paar oder kleiner Haushalt" },
  { name: "LKW 7,5t", m3: 30, fsk: "C1", label: "3–4-Zi.-Wohnung", example: "Familie, mehr Möbel" },
  { name: "LKW 12t", m3: 45, fsk: "C", label: "Großer Haushalt", example: "Haus oder großes Inventar" },
] as const;

// Zimmer → ca. m³ Richtwert
const ZIMMER_TO_M3: Record<number, number> = {
  1: 8, 2: 16, 3: 28, 4: 38, 5: 50, 6: 65,
};

type InputMode = "zimmer" | "m3";

export function LkwRechnerClient() {
  const [mode, setMode] = useState<InputMode>("zimmer");
  const [zimmer, setZimmer] = useState(3);
  const [m3, setM3] = useState(28);

  const volumen = mode === "zimmer" ? (ZIMMER_TO_M3[zimmer] ?? zimmer * 10) : m3;
  const vol = Math.max(1, volumen);

  return (
    <div className="space-y-8">

      {/* Input Toggle */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Wie groß ist dein Umzug?</h2>

        {/* Mode Toggle */}
        <div className="mb-5 flex rounded-xl overflow-hidden border border-slate-200 w-fit">
          {(["zimmer", "m3"] as InputMode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: mode === m ? "#0088CC" : "white",
                color: mode === m ? "white" : "#5A7A8A",
              }}
            >
              {m === "zimmer" ? "Nach Zimmern" : "Nach m³"}
            </button>
          ))}
        </div>

        {mode === "zimmer" ? (
          <div>
            <label className="block text-sm font-medium text-[#0D2137] mb-2">
              Anzahl Zimmer: <strong>{zimmer}</strong>
            </label>
            <input
              type="range"
              min={1} max={6} step={1}
              value={zimmer}
              onChange={e => setZimmer(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="flex justify-between text-xs text-[#5A7A8A] mt-1">
              <span>1 Zi.</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6+ Zi.</span>
            </div>
            <p className="mt-3 text-sm text-[#5A7A8A]">
              Geschätztes Volumen: <strong className="text-[#0D2137]">ca. {ZIMMER_TO_M3[zimmer] ?? zimmer * 10} m³</strong>
            </p>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-[#0D2137] mb-2">
              Volumen in m³: <strong>{m3}</strong>
            </label>
            <input
              type="range"
              min={5} max={80} step={1}
              value={m3}
              onChange={e => setM3(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="flex justify-between text-xs text-[#5A7A8A] mt-1">
              <span>5 m³</span><span>80 m³</span>
            </div>
          </div>
        )}
      </div>

      {/* Results Grid */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Wie viele Fahrten?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {TRUCKS.map(truck => {
            const fahrten = Math.ceil(vol / truck.m3);
            const isOne = fahrten === 1;
            return (
              <div
                key={truck.name}
                className="rounded-2xl border p-5 shadow-sm"
                style={{
                  borderColor: isOne ? "#22c55e" : "#e2e8f0",
                  backgroundColor: isOne ? "#f0fdf4" : "white",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-[#0D2137]">{truck.name}</h3>
                    <p className="text-xs text-[#5A7A8A]">{truck.label} · max. {truck.m3} m³</p>
                    <p className="text-xs text-[#5A7A8A]">{truck.example}</p>
                  </div>
                  <span
                    className="text-xs font-bold rounded-full px-2 py-0.5 text-white flex-shrink-0"
                    style={{ backgroundColor: truck.fsk === "B" ? "#22c55e" : "#FF7700" }}
                  >
                    FS {truck.fsk}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black" style={{ color: isOne ? "#22c55e" : "#0088CC" }}>
                    {fahrten}×
                  </span>
                  <span className="text-sm text-[#5A7A8A]">
                    {fahrten === 1 ? "Fahrt reicht aus" : "Fahrten nötig"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Führerschein Info */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
        <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Führerschein-Klassen</h2>
        <div className="space-y-2 text-sm text-[#5A7A8A]">
          <p><strong className="text-[#0D2137]">Klasse B (PKW-Führerschein):</strong> Fahrzeuge bis 3,5t — Sprinter und kleine Transporter. Ausreichend für die meisten privaten Umzüge.</p>
          <p><strong className="text-[#0D2137]">Klasse C1:</strong> Fahrzeuge von 3,5t bis 7,5t — mittlere LKW. Separat zu erwerben.</p>
          <p><strong className="text-[#0D2137]">Klasse C:</strong> Fahrzeuge über 7,5t — große LKW. Für private Umzüge kaum relevant.</p>
        </div>
        <p className="mt-3 text-xs text-[#5A7A8A]">
          Tipp: Ohne C1 einfach 2 Fahrten mit einem kleineren LKW einplanen — oft günstiger als der große Führerschein.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <p className="font-bold text-[#0D2137]">Lieber Profis beauftragen?</p>
          <p className="text-sm text-[#5A7A8A]">Berechne deinen genauen Preiskorridor — kostenlos und ohne Datenweitergabe.</p>
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
