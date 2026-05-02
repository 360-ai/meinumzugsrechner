"use client";

import { useState } from "react";

type Task = {
  id: number;
  label: string;
  durationMin: number;
  category: "vorbereitung" | "beladen" | "transport" | "entladen" | "einrichten";
  done: boolean;
};

const CATEGORY_LABELS: Record<Task["category"], string> = {
  vorbereitung: "Vorbereitung",
  beladen: "Beladen",
  transport: "Transport",
  entladen: "Entladen",
  einrichten: "Einrichten",
};

const CATEGORY_COLORS: Record<Task["category"], string> = {
  vorbereitung: "#0088CC",
  beladen: "#FF7700",
  transport: "#0D2137",
  entladen: "#FF7700",
  einrichten: "#0088CC",
};

const DEFAULT_TASKS: Omit<Task, "id" | "done">[] = [
  { label: "Halteverbotszone prüfen, LKW bereitstellen", durationMin: 15, category: "vorbereitung" },
  { label: "Letzte Kartons packen, Restmüll entsorgen", durationMin: 30, category: "vorbereitung" },
  { label: "Möbel demontieren (Betten, Regale)", durationMin: 45, category: "vorbereitung" },
  { label: "Große Möbel in den LKW laden", durationMin: 60, category: "beladen" },
  { label: "Kartons und Kleinteile verladen", durationMin: 45, category: "beladen" },
  { label: "Empfindliche Geräte sichern und verladen", durationMin: 20, category: "beladen" },
  { label: "Letzter Rundgang: alle Räume, Keller, Briefkasten", durationMin: 15, category: "beladen" },
  { label: "Zählerstände ablesen, Schlüsselübergabe alte Wohnung", durationMin: 15, category: "beladen" },
  { label: "Pause & Verpflegung für Helfer", durationMin: 30, category: "transport" },
  { label: "Fahrt zur neuen Wohnung", durationMin: 30, category: "transport" },
  { label: "LKW entladen: Möbel zuerst", durationMin: 60, category: "entladen" },
  { label: "Kartons in Zielräume verteilen", durationMin: 30, category: "entladen" },
  { label: "Betten aufbauen, Matratzen einlegen", durationMin: 30, category: "einrichten" },
  { label: "Kühlschrank anschließen, Küche grob einrichten", durationMin: 20, category: "einrichten" },
  { label: "Bad einrichten: Handtücher, Toilettenpapier, Seife", durationMin: 10, category: "einrichten" },
  { label: "Zählerstände neue Wohnung notieren", durationMin: 10, category: "einrichten" },
];

function formatTime(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

export function UmzugstagPlaner() {
  const [startHour, setStartHour] = useState(7);
  const [startMinute, setStartMinute] = useState(0);
  const [tasks, setTasks] = useState<Task[]>(
    DEFAULT_TASKS.map((t, i) => ({ ...t, id: i, done: false }))
  );

  const startTotalMin = startHour * 60 + startMinute;

  const toggleDone = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const totalMinutes = tasks.reduce((sum, t) => sum + t.durationMin, 0);
  const doneMinutes = tasks.filter((t) => t.done).reduce((sum, t) => sum + t.durationMin, 0);
  const progress = totalMinutes > 0 ? Math.round((doneMinutes / totalMinutes) * 100) : 0;

  let runningMin = startTotalMin;

  return (
    <div className="space-y-6">
      {/* Startzeit */}
      <div
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        style={{ borderLeft: "4px solid #0088CC" }}
      >
        <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Startzeit festlegen</h2>
        <div className="flex items-center gap-3">
          <label className="text-sm text-[#5A7A8A]">Umzug beginnt um</label>
          <select
            value={startHour}
            onChange={(e) => setStartHour(Number(e.target.value))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-[#0D2137] font-medium"
          >
            {Array.from({ length: 15 }, (_, i) => i + 5).map((h) => (
              <option key={h} value={h}>
                {h.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          <span className="text-[#0D2137] font-bold">:</span>
          <select
            value={startMinute}
            onChange={(e) => setStartMinute(Number(e.target.value))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-[#0D2137] font-medium"
          >
            {[0, 15, 30, 45].map((m) => (
              <option key={m} value={m}>
                {m.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          <span className="text-sm text-[#5A7A8A]">Uhr</span>
        </div>
        <p className="mt-2 text-xs text-[#5A7A8A]">
          Geschätzte Dauer: ca. {Math.floor(totalMinutes / 60)} Std. {totalMinutes % 60} Min. — Fertig um ca.{" "}
          <strong className="text-[#0D2137]">{formatTime(startTotalMin + totalMinutes)} Uhr</strong>
        </p>
      </div>

      {/* Fortschritt */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-[#0D2137]">Fortschritt</span>
          <span className="text-sm font-bold" style={{ color: "#0088CC" }}>
            {progress}%
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-[#EBF6FD] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: progress === 100 ? "#22c55e" : "#0088CC" }}
          />
        </div>
        <p className="mt-2 text-xs text-[#5A7A8A]">
          {tasks.filter((t) => t.done).length} von {tasks.length} Aufgaben erledigt
        </p>
      </div>

      {/* Aufgaben nach Kategorie */}
      {(["vorbereitung", "beladen", "transport", "entladen", "einrichten"] as const).map(
        (cat) => {
          const catTasks = tasks.filter((t) => t.category === cat);
          if (catTasks.length === 0) return null;

          return (
            <div key={cat} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[cat] }}
                />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D2137]">
                  {CATEGORY_LABELS[cat]}
                </h3>
              </div>
              <ul className="space-y-2">
                {catTasks.map((task) => {
                  const taskStart = formatTime(runningMin);
                  const taskEnd = formatTime(runningMin + task.durationMin);
                  runningMin += task.durationMin;

                  return (
                    <li key={task.id}>
                      <button
                        type="button"
                        onClick={() => toggleDone(task.id)}
                        className={`w-full flex items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                          task.done
                            ? "bg-[#f0fdf4] border border-green-200"
                            : "bg-[#FAFCFE] border border-slate-100 hover:border-[#0088CC]/30"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            task.done
                              ? "border-green-500 bg-green-500"
                              : "border-slate-300"
                          }`}
                        >
                          {task.done && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span
                            className={`text-sm ${
                              task.done
                                ? "line-through text-[#5A7A8A]/60"
                                : "text-[#0D2137] font-medium"
                            }`}
                          >
                            {task.label}
                          </span>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <span className="text-xs font-medium text-[#0088CC]">
                            {taskStart}–{taskEnd}
                          </span>
                          <br />
                          <span className="text-xs text-[#5A7A8A]">
                            {task.durationMin} Min.
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
      )}
    </div>
  );
}
