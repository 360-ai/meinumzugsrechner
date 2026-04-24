"use client";

import {
  calculateCartonEstimate,
  describeCartonLoad,
  type CartonEstimateInput,
  type FragileLevel,
  type HouseholdLevel,
  type StorageLevel,
  type WohndauerLevel,
} from "@/lib/carton-estimate";
import Link from "next/link";
import { useState } from "react";

type CounterKey = "rooms" | "bookMeters" | "kitchenCabinets" | "wardrobeMeters";

const COUNTERS: {
  key: CounterKey;
  label: string;
  sub: string;
  min: number;
  max: number;
  step: number;
  suffix: string;
}[] = [
  {
    key: "rooms",
    label: "Räume, die gepackt werden",
    sub: "Wohn-, Schlaf-, Kinderzimmer, Büro und Flur",
    min: 1,
    max: 10,
    step: 1,
    suffix: "Räume",
  },
  {
    key: "bookMeters",
    label: "Bücher, Akten und schwere Kleinteile",
    sub: "Als Regalbreite gedacht: ein 80-cm-Regal zählt grob als 0,8 m",
    min: 0,
    max: 20,
    step: 0.5,
    suffix: "m",
  },
  {
    key: "kitchenCabinets",
    label: "Gefüllte Küchenschränke",
    sub: "Nur Schränke mit Inhalt, nicht leere Fronten zählen",
    min: 0,
    max: 18,
    step: 1,
    suffix: "Stk.",
  },
  {
    key: "wardrobeMeters",
    label: "Hängende Kleidung",
    sub: "Grobe Länge der Kleiderstangen, die knitterarm umziehen sollen",
    min: 0,
    max: 8,
    step: 0.5,
    suffix: "m",
  },
];

const HOUSEHOLD_OPTIONS: { value: HouseholdLevel; label: string; hint: string }[] = [
  { value: "minimal", label: "Reduziert", hint: "wenig Deko, wenig Vorrat, eher aussortiert" },
  { value: "normal", label: "Normal", hint: "typischer Haushalt mit gemischtem Inhalt" },
  { value: "full", label: "Voll", hint: "viel Deko, Vorräte, Hobby- oder Familienbestand" },
];

const FRAGILE_OPTIONS: { value: FragileLevel; label: string }[] = [
  { value: "low", label: "Wenig" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "Viel" },
];

const STORAGE_OPTIONS: { value: StorageLevel; label: string }[] = [
  { value: "none", label: "Kein Keller" },
  { value: "some", label: "Etwas Stauraum" },
  { value: "full", label: "Voller Keller/Garage" },
];

const WOHNDAUER_OPTIONS: { value: WohndauerLevel; label: string; hint: string }[] = [
  { value: "kurz", label: "Bis 3 Jahre", hint: "wenig Zeit zum Ansammeln" },
  { value: "mittel", label: "3–10 Jahre", hint: "typischer Haushalt" },
  { value: "lang", label: "10+ Jahre", hint: "viel angesammelt über die Zeit" },
];

const RESULT_ROWS = [
  {
    key: "allround",
    label: "Alltagskartons",
    hint: "für Textilien, Deko, Spielzeug, Vorräte und leichte Haushaltsdinge",
  },
  {
    key: "heavy",
    label: "Schwere Kartons",
    hint: "für Bücher, Akten, Werkzeug, Geschirr und kompakte schwere Inhalte",
  },
  {
    key: "wardrobe",
    label: "Kleiderboxen",
    hint: "für Kleidung auf Bügeln, wenn sie möglichst knitterarm bleiben soll",
  },
  {
    key: "fragile",
    label: "Schutzkartons",
    hint: "für Gläser, Porzellan, Elektronik und Dinge mit Polsterbedarf",
  },
] as const;

export function KartonrechnerClient() {
  const [state, setState] = useState<CartonEstimateInput>({
    rooms: 3,
    householdLevel: "normal",
    wohndauer: "mittel",
    bookMeters: 2,
    kitchenCabinets: 5,
    wardrobeMeters: 2,
    fragileLevel: "normal",
    storageLevel: "some",
  });

  const updateCounter = (key: CounterKey, value: number) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  const estimate = calculateCartonEstimate(state);
  const load = describeCartonLoad(estimate.total);
  const activeHousehold = HOUSEHOLD_OPTIONS.find((o) => o.value === state.householdLevel);

  return (
    <div className="space-y-8">
      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #0088CC" }}
      >
        <h2 className="mb-2 text-lg font-bold text-[#0D2137]">Packzonen statt Bauchgefühl</h2>
        <p className="mb-5 text-sm text-[#5A7A8A]">
          Schätze die Bereiche, die Kartons füllen. So bleibt die Rechnung eigenständig und näher am
          echten Packaufwand als eine reine Zimmer-Pauschale.
        </p>

        <div className="space-y-5">
          <div>
            <p className="mb-2 text-sm font-medium text-[#0D2137]">Haushaltsprofil</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {HOUSEHOLD_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, householdLevel: option.value }))}
                  className={`rounded-xl border p-3 text-left text-sm transition-colors ${
                    state.householdLevel === option.value
                      ? "border-[#0088CC] bg-[#F4FAFE] text-[#0D2137]"
                      : "border-slate-200 bg-white text-[#5A7A8A] hover:border-[#0088CC]/50"
                  }`}
                >
                  <span className="block font-bold">{option.label}</span>
                  <span className="mt-1 block text-xs">{option.hint}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-[#0D2137]">Wie lange wohnst du schon dort?</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {WOHNDAUER_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, wohndauer: option.value }))}
                  className={`rounded-xl border p-3 text-left text-sm transition-colors ${
                    state.wohndauer === option.value
                      ? "border-[#0088CC] bg-[#F4FAFE] text-[#0D2137]"
                      : "border-slate-200 bg-white text-[#5A7A8A] hover:border-[#0088CC]/50"
                  }`}
                >
                  <span className="block font-bold">{option.label}</span>
                  <span className="mt-1 block text-xs">{option.hint}</span>
                </button>
              ))}
            </div>
          </div>

          {COUNTERS.map(({ key, label, sub, min, max, step, suffix }) => (
            <div key={key}>
              <div className="mb-2 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#0D2137]">{label}</p>
                  <p className="text-xs text-[#5A7A8A]">{sub}</p>
                </div>
                <p className="shrink-0 text-sm font-bold text-[#0D2137]">
                  {state[key]} {suffix}
                </p>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={state[key]}
                onChange={(e) => updateCounter(key, Number(e.target.value))}
                className="w-full"
                style={{ accentColor: "#0088CC" }}
              />
            </div>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-[#0D2137]">Zerbrechliche Dinge</span>
              <select
                value={state.fragileLevel}
                onChange={(e) =>
                  setState((s) => ({ ...s, fragileLevel: e.target.value as FragileLevel }))
                }
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                {FRAGILE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[#0D2137]">Keller / Abstellraum</span>
              <select
                value={state.storageLevel}
                onChange={(e) =>
                  setState((s) => ({ ...s, storageLevel: e.target.value as StorageLevel }))
                }
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                {STORAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {activeHousehold && (
            <p className="rounded-xl bg-[#F4FAFE] p-3 text-xs text-[#5A7A8A]">
              Profil „{activeHousehold.label}“: {activeHousehold.hint}.
            </p>
          )}
        </div>
      </div>

      <div className="rounded-2xl bg-[#0D2137] p-6 text-white shadow-sm">
        <p className="text-sm font-medium text-white/70">Richtwert mit Reserve</p>
        <h2 className="mt-2 text-4xl font-black text-[#FFCC00]">ca. {estimate.total} Kartons</h2>
        <p className="mt-2 text-sm text-white/70">
          {load.label}: {load.hint}. Enthält {estimate.reserve} Reservekartons für Dinge, die beim
          Packen fast immer noch auftauchen.
        </p>

        <div className="mt-5 space-y-3">
          {RESULT_ROWS.map((row) => {
            const count = estimate.breakdown[row.key];
            return (
              <div key={row.key} className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                <div>
                  <p className="font-bold text-white">{row.label}</p>
                  <p className="text-xs leading-relaxed text-white/60">{row.hint}</p>
                </div>
                <span className="shrink-0 text-2xl font-black text-[#FFCC00]">{count}x</span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">So liest du das Ergebnis</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Schwere Inhalte klein halten",
              text: "Bücher, Akten und Werkzeug werden schnell unangenehm schwer. Plane dafür lieber mehr kleine Kartons ein.",
            },
            {
              title: "Einheitlich stapeln",
              text: "Viele ähnliche Kartons lassen sich im Transporter besser schichten als ein Mix aus zu großen Einzelboxen.",
            },
            {
              title: "Schutzmaterial mitzählen",
              text: "Gläser und Elektronik brauchen Platz für Papier, Decken oder Luftpolster. Deshalb zählt Zerbrechliches extra.",
            },
            {
              title: "Reserve ernst nehmen",
              text: "Die letzten 10 Prozent entstehen oft in Bad, Flur, Abstellraum und Schubladen, die vorher unsichtbar waren.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-[#0D2137]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A7A8A]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold text-[#0D2137]">Material gleich mitdenken?</p>
          <p className="text-sm text-[#5A7A8A]">
            Neben Kartons brauchst du meist auch Klebeband, Marker, Papier und Schutzdecken.
          </p>
        </div>
        <Link
          href="/materialtipps/"
          className="inline-flex flex-shrink-0 items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Materialtipps ansehen →
        </Link>
      </div>
    </div>
  );
}
