"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "umzug-countdown-v1";

interface CheckItem {
  id: string;
  label: string;
  text: string;
}

interface Phase {
  num: number;
  title: string;
  subtitle?: string;
  color: string;
  items: CheckItem[];
}

const PHASES: Phase[] = [
  {
    num: 1,
    title: "Phase 1: Die Initialisierung",
    subtitle: "Sobald der Entschluss feststeht",
    color: "#0088CC",
    items: [
      { id: "p1-terminierung", label: "Terminierung", text: "Umzugsdatum fixieren und frühzeitig Sonderurlaub beim Arbeitgeber beantragen." },
      { id: "p1-vertrag", label: "Vertragsmanagement", text: "Aktuellen Mietvertrag fristgerecht kündigen und Modalitäten zur Kautionsrückzahlung sowie Schönheitsreparaturen klären." },
      { id: "p1-inventur", label: "Inventur & Clearing", text: "Dachboden, Keller und Garage entrümpeln. Nicht benötigte Möbel über digitale Marktplätze verkaufen." },
      { id: "p1-nachmieter", label: "Nachmietersuche", text: "Besichtigungstermine mit dem Vermieter abstimmen." },
    ],
  },
  {
    num: 2,
    title: "Phase 2: Die heiße Phase",
    subtitle: "3 Wochen vor dem Stichtag",
    color: "#FF7700",
    items: [
      { id: "p2-ummeldung", label: "Digitale & analoge Ummeldung", text: "Banken, Versicherungen und Rundfunkbeitragsservice informieren." },
      { id: "p2-infrastruktur", label: "Infrastruktur", text: "Internet, Strom, Wasser und Fernwärme ummelden oder abmelden." },
      { id: "p2-behoerden", label: "Behörden", text: "Einwohnermeldeamt-Termin planen, Finanzamt sowie Schulen oder Kitas informieren." },
      { id: "p2-logistik", label: "Logistik-Check", text: "Termin für die finale Schlüsselübergabe der alten Wohnung bestätigen." },
    ],
  },
  {
    num: 3,
    title: "Phase 3: Der Endspurt",
    subtitle: "1 Woche vorher",
    color: "#0088CC",
    items: [
      { id: "p3-pack", label: "Pack-Strategie", text: "Systematisches Verpacken starten (Richtwert: 1 Box pro m² Wohnfläche)." },
      { id: "p3-ressourcen", label: "Ressourcen-Management", text: "Vorräte aus Kühl- und Gefrierschränken verbrauchen." },
      { id: "p3-equipment", label: "Equipment-Check", text: "Ausreichend Material beschaffen: Leih-Boxen oder stabile Kartons, Polstermaterial, Markierstifte, Gurte und Sackkarre." },
      { id: "p3-halteverbot", label: "Sicherheitszonen", text: "Halteverbotszonen vor dem alten und neuen Objekt organisieren." },
    ],
  },
  {
    num: 4,
    title: "Phase 4: Die finale Vorbereitung",
    subtitle: "1–2 Tage vorher",
    color: "#FF7700",
    items: [
      { id: "p4-namensschilder", label: "Präsenz zeigen", text: "Neue Namensschilder an Briefkasten und Klingel montieren." },
      { id: "p4-survival", label: "Das \u201eSurvival-Kit\u201c", text: "Tasche für den persönlichen Sofortbedarf packen: Dokumente, Ladekabel, Medikamente, Basis-Hygiene, wichtige Schlüssel." },
      { id: "p4-technik", label: "Technik & Natur", text: "IT-Hardware sichern (Backups erstellen) und Zimmerpflanzen ein letztes Mal moderat wässern." },
    ],
  },
  {
    num: 5,
    title: "Phase 5: Der Umzugstag",
    color: "#0D2137",
    items: [
      { id: "p5-wertgegenstaende", label: "Wertgegenstände", text: "Schmuck, wichtige Policen und sensible Dokumente ausschließlich persönlich transportieren." },
      { id: "p5-dokumentation", label: "Dokumentation", text: "Beim Einzug in die neue Wohnung etwaige Mängel protokollieren." },
      { id: "p5-zaehler", label: "Zählerstände", text: "Stände von Strom, Gas und Wasser notieren und vom Vermieter bestätigen lassen." },
    ],
  },
];

const ALL_IDS = PHASES.flatMap((p) => p.items.map((i) => i.id));
const TOTAL = ALL_IDS.length;

export function UmzugsCountdownClient() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompleted(new Set(JSON.parse(stored) as string[]));
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const doneCount = completed.size;
  const pct = TOTAL > 0 ? Math.round((doneCount / TOTAL) * 100) : 0;

  return (
    <div className="space-y-6">

      {/* Intro card */}
      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #0088CC" }}
      >
        <p className="text-sm text-[#5A7A8A] leading-relaxed">
          Strategische Umzugsplanung in 5 Phasen — von der ersten Entscheidung bis zum letzten Schlüssel.
          Hake erledigte Punkte ab — dein Fortschritt wird gespeichert.
        </p>
      </div>

      {/* Progress Bar */}
      {mounted && (
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-[#0D2137]">Dein Fortschritt</span>
            <span
              className="text-sm font-bold"
              style={{ color: pct === 100 ? "#22c55e" : "#0088CC" }}
            >
              {doneCount} / {TOTAL} Aufgaben erledigt
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                backgroundColor: pct === 100 ? "#22c55e" : "#0088CC",
              }}
            />
          </div>
          {pct === 100 && (
            <p className="mt-2 text-sm font-medium text-green-600">
              Alles erledigt — viel Erfolg beim Umzug!
            </p>
          )}
        </div>
      )}

      {/* Phases */}
      {PHASES.map((phase) => (
        <div
          key={phase.num}
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        >
          <div className="mb-3 flex items-center gap-3">
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: phase.color }}
            >
              {phase.num}
            </div>
            <div>
              <h2 className="font-bold text-[#0D2137]">{phase.title}</h2>
              {phase.subtitle && (
                <p className="text-xs text-[#5A7A8A]">{phase.subtitle}</p>
              )}
            </div>
          </div>
          <ul className="space-y-3">
            {phase.items.map((item) => {
              const done = completed.has(item.id);
              return (
                <li key={item.id}>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-0.5 flex-shrink-0"
                      style={{ accentColor: "#FF7700" }}
                      checked={done}
                      onChange={() => toggle(item.id)}
                    />
                    <span
                      className={`text-sm transition-colors ${
                        done ? "line-through text-slate-400" : "text-[#5A7A8A]"
                      }`}
                    >
                      <strong className={done ? "text-slate-400" : "text-[#0D2137]"}>
                        {item.label}:
                      </strong>{" "}
                      {item.text}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

    </div>
  );
}
