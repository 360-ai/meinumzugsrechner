"use client";

import { useState } from "react";

type Fuellgrad = "leicht" | "mittel" | "voll" | "extrem";

const FUELLGRAD_LABELS: Record<Fuellgrad, string> = {
  leicht: "Wenig (25 %)",
  mittel: "Normal (50 %)",
  voll: "Voll (75 %)",
  extrem: "Sehr voll (100 %)",
};

const FUELLGRAD_FACTOR: Record<Fuellgrad, number> = {
  leicht: 0.25,
  mittel: 0.5,
  voll: 0.75,
  extrem: 1.0,
};

/** m³ per m² living space (fully loaded baseline) */
const CBM_PER_SQM = 0.4;

/** Container sizes in m³ */
const CONTAINER_SIZES = [3, 5, 7, 10] as const;

/** Container cost ranges [min, max] per size in EUR */
const CONTAINER_COST: Record<number, [number, number]> = {
  3: [150, 280],
  5: [200, 400],
  7: [300, 550],
  10: [400, 750],
};

/** Firma cost per m³ */
const FIRMA_COST_PER_CBM: [number, number] = [80, 160];

/** Etage surcharge per floor (%) */
const ETAGE_SURCHARGE = 0.08;

function pickContainer(cbm: number): (typeof CONTAINER_SIZES)[number] {
  for (const size of CONTAINER_SIZES) {
    if (cbm <= size) return size;
  }
  return 10;
}

function formatEuro(v: number): string {
  return Math.round(v).toLocaleString("de-DE") + " €";
}

export function EntruempelungsRechner() {
  const [flaeche, setFlaeche] = useState(60);
  const [etage, setEtage] = useState(0);
  const [aufzug, setAufzug] = useState(false);
  const [fuellgrad, setFuellgrad] = useState<Fuellgrad>("mittel");
  const [showResult, setShowResult] = useState(false);

  const cbm = flaeche * CBM_PER_SQM * FUELLGRAD_FACTOR[fuellgrad];
  const etageFactor = aufzug ? 1 : 1 + etage * ETAGE_SURCHARGE;

  const containerSize = pickContainer(cbm);
  const containerCount = Math.ceil(cbm / containerSize);
  const containerRange = CONTAINER_COST[containerSize];
  const containerMin = containerCount * containerRange[0];
  const containerMax = containerCount * containerRange[1];

  const firmaMin = Math.round(cbm * FIRMA_COST_PER_CBM[0] * etageFactor);
  const firmaMax = Math.round(cbm * FIRMA_COST_PER_CBM[1] * etageFactor);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-5">
        <h2 className="text-lg font-bold text-[#0D2137]">Ihre Angaben</h2>

        {/* Wohnfläche */}
        <div>
          <label className="block text-sm font-medium text-[#0D2137] mb-1">
            Wohnfläche
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={20}
              max={200}
              step={5}
              value={flaeche}
              onChange={(e) => setFlaeche(Number(e.target.value))}
              className="flex-1 accent-[#0088CC]"
            />
            <span className="w-20 text-right text-sm font-bold text-[#0D2137]">
              {flaeche} m²
            </span>
          </div>
        </div>

        {/* Etage */}
        <div>
          <label className="block text-sm font-medium text-[#0D2137] mb-1">
            Etage
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={8}
              step={1}
              value={etage}
              onChange={(e) => setEtage(Number(e.target.value))}
              className="flex-1 accent-[#0088CC]"
            />
            <span className="w-20 text-right text-sm font-bold text-[#0D2137]">
              {etage === 0 ? "EG" : `${etage}. OG`}
            </span>
          </div>
        </div>

        {/* Aufzug */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            role="switch"
            aria-checked={aufzug}
            onClick={() => setAufzug(!aufzug)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              aufzug ? "bg-[#0088CC]" : "bg-slate-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                aufzug ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-sm text-[#0D2137]">Aufzug vorhanden</span>
        </div>

        {/* Füllgrad */}
        <div>
          <label className="block text-sm font-medium text-[#0D2137] mb-2">
            Füllgrad der Wohnung
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {(Object.keys(FUELLGRAD_LABELS) as Fuellgrad[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFuellgrad(key)}
                className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                  fuellgrad === key
                    ? "border-[#0088CC] bg-[#EBF6FD] text-[#0088CC]"
                    : "border-slate-200 text-[#5A7A8A] hover:border-slate-300"
                }`}
              >
                {FUELLGRAD_LABELS[key]}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => setShowResult(true)}
          className="w-full rounded-full py-3 font-bold text-[#0D2137] transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Kosten berechnen
        </button>
      </div>

      {/* Result */}
      {showResult && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-[#0D2137]">
            Geschätzte Kosten
          </h2>

          {/* Volume */}
          <div
            className="rounded-xl p-4 text-center"
            style={{ backgroundColor: "#EBF6FD" }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#0088CC] mb-1">
              Geschätztes Volumen
            </p>
            <p className="text-2xl font-bold text-[#0D2137]">
              ca. {cbm.toFixed(1)} m³
            </p>
          </div>

          {/* Container */}
          <div
            className="rounded-xl border p-4"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h3 className="font-bold text-[#0D2137] mb-2">
              Option A: Container mieten
            </h3>
            <p className="text-sm text-[#5A7A8A] mb-3">
              {containerCount}x {containerSize}-m³-Container, Selbstbefüllung
            </p>
            <p className="text-xl font-bold text-[#0088CC]">
              {formatEuro(containerMin)} – {formatEuro(containerMax)}
            </p>
          </div>

          {/* Firma */}
          <div
            className="rounded-xl border p-4"
            style={{ borderLeft: "4px solid #FF7700" }}
          >
            <h3 className="font-bold text-[#0D2137] mb-2">
              Option B: Entrümpelungsfirma
            </h3>
            <p className="text-sm text-[#5A7A8A] mb-3">
              Komplett-Service inkl. Abtransport
              {etage > 0 && !aufzug && (
                <span className="block mt-1 text-xs">
                  (inkl. Etagenzuschlag {etage}. OG ohne Aufzug)
                </span>
              )}
            </p>
            <p className="text-xl font-bold" style={{ color: "#FF7700" }}>
              {formatEuro(firmaMin)} – {formatEuro(firmaMax)}
            </p>
          </div>

          {/* Disclaimer */}
          <div
            className="rounded-xl border p-3 text-xs"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Hinweis:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Die Werte sind unverbindliche Richtwerte. Tatsächliche Kosten
              hängen von Region, Entsorgungsart (Sperrmüll, Sondermüll) und
              Zugänglichkeit ab. Holen Sie mindestens 2–3 Angebote ein.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
