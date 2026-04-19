"use client";

import Link from "next/link";
import { useState } from "react";

interface CounterState {
  buecher: number;      // Regalmeter Bücher (0–20)
  kleider: number;      // Kleiderschränke (0–8)
  kueche: number;       // Küchenschränke (0–15)
  zimmer: number;       // Zimmer allgemein (0–10)
  elektronik: number;   // Elektronik-Einheiten (0–8)
}

function calcKartons(s: CounterState) {
  const standard = Math.round(s.zimmer * 5 + s.kueche * 1);
  const buecher  = Math.ceil(s.buecher * 2);      // 1 pro 0.5 lm
  const kleider  = s.kleider;                       // 1 pro Schrank
  const spezial  = Math.ceil(s.elektronik / 2);
  return { standard, buecher, kleider, spezial };
}

const COUNTERS: { key: keyof CounterState; label: string; sub: string; min: number; max: number; step: number }[] = [
  { key: "zimmer",     label: "Zimmer (Allgemeines)",  sub: "Wohn-, Schlaf-, Kinderzimmer etc.",  min: 0, max: 10, step: 1 },
  { key: "buecher",    label: "Bücher (Regalmeter)",   sub: "z.B. 2 m = ca. 60 Bücher",           min: 0, max: 20, step: 0.5 },
  { key: "kleider",    label: "Kleiderschränke",        sub: "Anzahl Türen / Kleiderstangen",       min: 0, max: 8,  step: 1 },
  { key: "kueche",     label: "Küchenschränke",         sub: "Anzahl Schränke mit Inhalt",         min: 0, max: 15, step: 1 },
  { key: "elektronik", label: "Elektronik / Kabel",     sub: "Geräte, Kabel, Zubehör-Kisten",      min: 0, max: 8,  step: 1 },
];

export function KartonrechnerClient() {
  const [state, setState] = useState<CounterState>({
    buecher: 2, kleider: 2, kueche: 4, zimmer: 3, elektronik: 1,
  });

  const inc = (key: keyof CounterState, step: number, max: number) =>
    setState(s => ({ ...s, [key]: Math.min(max, parseFloat((s[key] + step).toFixed(1))) }));
  const dec = (key: keyof CounterState, step: number, min: number) =>
    setState(s => ({ ...s, [key]: Math.max(min, parseFloat((s[key] - step).toFixed(1))) }));

  const k = calcKartons(state);
  const gesamt = k.standard + k.buecher + k.kleider + k.spezial;

  return (
    <div className="space-y-8">

      {/* Input Section */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
        <h2 className="mb-5 text-lg font-bold text-[#0D2137]">Schritt 1: Was nimmst du mit?</h2>
        <div className="space-y-4">
          {COUNTERS.map(({ key, label, sub, min, max, step }) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#0D2137] text-sm">{label}</p>
                <p className="text-xs text-[#5A7A8A]">{sub}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => dec(key, step, min)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-[#0D2137] font-bold hover:bg-slate-50 disabled:opacity-40"
                  disabled={state[key] <= min}
                  aria-label={`${label} verringern`}
                >–</button>
                <span className="w-10 text-center font-bold text-[#0D2137] text-sm tabular-nums">
                  {state[key]}
                </span>
                <button
                  onClick={() => inc(key, step, max)}
                  className="flex h-8 w-8 items-center justify-center rounded-full font-bold text-white hover:opacity-90 disabled:opacity-40"
                  style={{ backgroundColor: "#0088CC" }}
                  disabled={state[key] >= max}
                  aria-label={`${label} erhöhen`}
                >+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Result Box */}
      <div className="rounded-2xl p-6 shadow-sm text-white" style={{ backgroundColor: "#0D2137" }}>
        <h2 className="mb-4 text-lg font-bold">Richtwert: Deine Karton-Schätzung</h2>
        {gesamt === 0 ? (
          <p className="text-white/60 text-sm">Gib oben deine Angaben ein, um einen Richtwert zu erhalten.</p>
        ) : (
          <div className="space-y-3">
            {k.standard > 0 && (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">Standardkartons</p>
                  <p className="text-xs text-white/60">60 × 40 × 40 cm — für allgemeinen Haushalt</p>
                </div>
                <span className="text-2xl font-black text-[#FFCC00]">{k.standard}×</span>
              </div>
            )}
            {k.buecher > 0 && (
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="font-bold text-white">Bücherkartons</p>
                  <p className="text-xs text-white/60">40 × 30 × 30 cm — verstärkt, kleiner & stabiler</p>
                </div>
                <span className="text-2xl font-black text-[#FFCC00]">{k.buecher}×</span>
              </div>
            )}
            {k.kleider > 0 && (
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="font-bold text-white">Kleiderboxen</p>
                  <p className="text-xs text-white/60">Mit Kleiderstange — kein Falten, kein Knittern</p>
                </div>
                <span className="text-2xl font-black text-[#FFCC00]">{k.kleider}×</span>
              </div>
            )}
            {k.spezial > 0 && (
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="font-bold text-white">Spezialkartons</p>
                  <p className="text-xs text-white/60">Mit Einlagen — für Elektronik, Geschirr, Gläser</p>
                </div>
                <span className="text-2xl font-black text-[#FFCC00]">{k.spezial}×</span>
              </div>
            )}
            <div className="border-t border-white/20 pt-3 flex items-center justify-between">
              <p className="text-sm text-white/70">Richtwert gesamt</p>
              <p className="text-lg font-black text-white">ca. {gesamt} Kartons</p>
            </div>
          </div>
        )}
        <p className="mt-4 text-xs text-white/40">
          Alle Angaben sind Schätzwerte — individuelle Packmenge kann abweichen. Wir empfehlen, 10–15 % mehr zu kaufen.
        </p>
      </div>

      {/* Box Type Info Cards */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Welche Kartons gibt es?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Standardkarton",
              dim: "60 × 40 × 40 cm",
              color: "#0088CC",
              desc: "Das Arbeitspferd des Umzugs. Ideal für Bücher (kleine Mengen), Küchenutensilien, Kleidung und allgemeinen Haushaltskram. Tragkraft: ca. 20–25 kg.",
              tip: "Tipp: Nicht zu voll füllen — lieber mehr Kartons als Rückenschäden.",
            },
            {
              title: "Bücherkarton",
              dim: "40 × 30 × 30 cm",
              color: "#FF7700",
              desc: "Kleiner, aber doppelwellig verstärkt — für schwere Lasten. Perfekt für Bücher, Werkzeug, Glaswaren und Schallplatten. Tragkraft: ca. 30 kg.",
              tip: "Tipp: Bücher immer liegend oder stehend stapeln, nie schräg.",
            },
            {
              title: "Kleiderbox",
              dim: "60 × 50 × 120 cm",
              color: "#0088CC",
              desc: "Mit integrierter Kleiderstange. Hemden, Anzüge und Kleider bleiben knitterfrei hängend. Eine Box fasst ca. 40–60 cm Kleiderstange.",
              tip: "Tipp: Unten noch Schuhe, Taschen oder Textilien einlegen — Platz optimal nutzen.",
            },
            {
              title: "Spezialkarton",
              dim: "verschiedene Größen",
              color: "#FF7700",
              desc: "Mit Zelleneinlagen oder Fächern — für Gläser, Flaschen und Elektronik. Schützt zerbrechliches Gut besser als Blasenfolie allein.",
              tip: "Tipp: Auch für teure Weinflaschen oder Uhrensammlungen empfehlenswert.",
            },
          ].map((box) => (
            <div key={box.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm" style={{ borderTop: `4px solid ${box.color}` }}>
              <h3 className="font-bold text-[#0D2137]">{box.title}</h3>
              <p className="text-xs font-medium mb-2" style={{ color: box.color }}>{box.dim}</p>
              <p className="text-sm text-[#5A7A8A] leading-relaxed mb-2">{box.desc}</p>
              <p className="text-xs text-[#5A7A8A] italic">{box.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <p className="font-bold text-[#0D2137]">Kartons bestellen?</p>
          <p className="text-sm text-[#5A7A8A]">Kuratierte Empfehlungen für Kartons, Polstermaterial und mehr.</p>
        </div>
        <Link
          href="/materialtipps/"
          className="flex-shrink-0 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Materialtipps ansehen →
        </Link>
      </div>

    </div>
  );
}
