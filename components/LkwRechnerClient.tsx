"use client";

import {
  MAX_ROOM_SELECTION,
  describeRoomSelection,
  describeVolume,
  estimateTruckTrips,
} from "@/lib/move-logistics";
import Link from "next/link";
import { useState } from "react";

type InputMode = "zimmer" | "m3";

export function LkwRechnerClient() {
  const [mode, setMode] = useState<InputMode>("zimmer");
  const [zimmer, setZimmer] = useState(3);
  const [m3, setM3] = useState(28);

  const roomDescription = describeRoomSelection(zimmer);
  const volumen = mode === "zimmer" ? roomDescription.volumeM3 : m3;
  const vol = Math.max(1, volumen);
  const volumeDescription = describeVolume(vol);
  const truckTrips = estimateTruckTrips(vol);
  const roomMarks = [1, 3, 6, 9, 12, MAX_ROOM_SELECTION];

  return (
    <div className="space-y-8">
      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #0088CC" }}
      >
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Wie groß ist dein Umzug?</h2>

        <div className="mb-5 flex w-fit overflow-hidden rounded-xl border border-slate-200">
          {(["zimmer", "m3"] as InputMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: mode === m ? "#0088CC" : "white",
                color: mode === m ? "white" : "#5A7A8A",
              }}
              type="button"
            >
              {m === "zimmer" ? "Nach Zimmern" : "Nach m³"}
            </button>
          ))}
        </div>

        {mode === "zimmer" ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-[#0D2137]">
              Anzahl Zimmer: <strong>{zimmer}</strong>
            </label>
            <input
              type="range"
              min={1}
              max={MAX_ROOM_SELECTION}
              step={1}
              value={zimmer}
              onChange={(e) => setZimmer(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="mt-1 flex justify-between text-xs text-[#5A7A8A]">
              {roomMarks.map((mark) => (
                <span key={mark}>{mark === 1 ? "1 Zi." : mark}</span>
              ))}
            </div>
            <p className="mt-3 text-sm text-[#5A7A8A]">
              Geschätztes Volumen:{" "}
              <strong className="text-[#0D2137]">ca. {roomDescription.volumeM3} m³</strong>
            </p>
            <div className="mt-3 rounded-xl bg-[#F4FAFE] p-4 text-sm">
              <p className="font-semibold text-[#0D2137]">Typisch für: {roomDescription.example}</p>
              <p className="mt-1 text-[#5A7A8A]">{roomDescription.details}</p>
            </div>
          </div>
        ) : (
          <div>
            <label className="mb-2 block text-sm font-medium text-[#0D2137]">
              Volumen in m³: <strong>{m3}</strong>
            </label>
            <input
              type="range"
              min={5}
              max={80}
              step={1}
              value={m3}
              onChange={(e) => setM3(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#0088CC" }}
            />
            <div className="mt-1 flex justify-between text-xs text-[#5A7A8A]">
              <span>5 m³</span>
              <span>80 m³</span>
            </div>
          </div>
        )}

        <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-xl bg-[#F4FAFE] p-3">
            <span className="block text-xs font-bold uppercase tracking-wide text-[#5A7A8A]">Kartons</span>
            <span className="mt-1 block text-[#0D2137]">{volumeDescription.cartonRange}</span>
          </div>
          <div className="rounded-xl bg-[#FFF8F3] p-3">
            <span className="block text-xs font-bold uppercase tracking-wide text-[#5A7A8A]">Wohnung</span>
            <span className="mt-1 block text-[#0D2137]">{volumeDescription.bandLabel}</span>
          </div>
          <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
            <span className="block text-xs font-bold uppercase tracking-wide text-[#5A7A8A]">Fahrzeug</span>
            <span className="mt-1 block text-[#0D2137]">{volumeDescription.vehicleLabel}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Wie viele Fahrten?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {truckTrips.map(({ truck, fahrten, fitsOneTrip }) => {
            return (
              <div
                key={truck.name}
                className="rounded-2xl border p-5 shadow-sm"
                style={{
                  borderColor: fitsOneTrip ? "#22c55e" : "#e2e8f0",
                  backgroundColor: fitsOneTrip ? "#f0fdf4" : "white",
                }}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-[#0D2137]">{truck.name}</h3>
                    <p className="text-xs text-[#5A7A8A]">
                      {truck.label} · max. {truck.m3} m³
                    </p>
                    <p className="text-xs text-[#5A7A8A]">{truck.example}</p>
                  </div>
                  <span
                    className="flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: truck.fsk === "B" ? "#22c55e" : "#FF7700" }}
                  >
                    FS {truck.fsk}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black" style={{ color: fitsOneTrip ? "#22c55e" : "#0088CC" }}>
                    {fahrten}x
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

      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #FF7700" }}
      >
        <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Führerschein-Klassen</h2>
        <div className="space-y-2 text-sm text-[#5A7A8A]">
          <p>
            <strong className="text-[#0D2137]">Klasse B (PKW-Führerschein):</strong> Fahrzeuge bis
            3,5t - Sprinter und kleine Transporter. Ausreichend für die meisten privaten Umzüge.
          </p>
          <p>
            <strong className="text-[#0D2137]">Klasse C1:</strong> Fahrzeuge von 3,5t bis 7,5t -
            mittlere LKW. Separat zu erwerben.
          </p>
          <p>
            <strong className="text-[#0D2137]">Klasse C:</strong> Fahrzeuge über 7,5t - große LKW.
            Für private Umzüge kaum relevant.
          </p>
        </div>
        <p className="mt-3 text-xs text-[#5A7A8A]">
          Tipp: Ohne C1 einfach 2 Fahrten mit einem kleineren LKW einplanen - oft günstiger als der
          große Führerschein.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold text-[#0D2137]">Lieber Profis beauftragen?</p>
          <p className="text-sm text-[#5A7A8A]">
            Berechne deinen genauen Preiskorridor - kostenlos und ohne Datenweitergabe.
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
