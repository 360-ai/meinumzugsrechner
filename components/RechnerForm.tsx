"use client";

import landkreiseData from "@/data/landkreise.json";
import { getDefaultForm, STORAGE_KEY } from "@/lib/form-defaults";
import { sanitizeUmzugForm } from "@/lib/form-sanitize";
import { validateFullForm, validateStepForm } from "@/lib/form-validation";
import type { BundeslandCode, UmzugFormData } from "@/lib/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { MoebelZaehler } from "./MoebelZaehler";
import { Stepper } from "./Stepper";

/* ── Category Icons ───────────────────────────────────────────── */
const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2 20v-8" /><path d="M22 20v-8" />
    <path d="M2 12a10 10 0 0 1 20 0" />
    <path d="M7 12V9h10v3" />
  </svg>
);
const SofaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
    <path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5H2z" />
    <path d="M4 18v2" /><path d="M20 18v2" />
    <path d="M12 11v5" />
  </svg>
);
const KitchenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 3v14" />
    <path d="M2 10h20" />
    <path d="M2 19h20" /><path d="M2 21h20" />
  </svg>
);
const DeskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="7" width="20" height="3" rx="1" />
    <path d="M5 10v7" /><path d="M19 10v7" />
    <path d="M5 14h14" />
    <path d="M8 17h8" />
  </svg>
);
const WarehouseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2 20V10L12 4l10 6v10H2z" />
    <rect x="9" y="14" width="6" height="6" />
  </svg>
);
const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

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

const TOTAL_STEPS = 6;

type Lk = { ags: string; name: string; bl: string };

export function RechnerForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<UmzugFormData>(() => getDefaultForm());
  const formTopRef = useRef<HTMLDivElement | null>(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    const s = params.get("step");
    if (s) {
      const n = parseInt(s, 10);
      if (n >= 1 && n <= TOTAL_STEPS) setStep(n);
    }
  }, [params]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as UmzugFormData;
        setForm(sanitizeUmzugForm(parsed));
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeUmzugForm(form)));
    } catch {
      /* ignore */
    }
  }, [form]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    window.setTimeout(() => {
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [step]);

  const lkFor = useCallback((bl: BundeslandCode) => {
    return (landkreiseData as Lk[]).filter(
      (x) => x.bl === bl || x.ags === "00000",
    );
  }, []);

  useEffect(() => {
    if (!form.buildingB.gleicheStadt) return;
    setForm((f) => {
      if (
        f.buildingB.bundesland === f.buildingA.bundesland &&
        f.buildingB.landkreisAgs === f.buildingA.landkreisAgs &&
        f.buildingB.stadtOrt === f.buildingA.stadtOrt
      ) {
        return f;
      }
      return {
        ...f,
        buildingB: {
          ...f.buildingB,
          bundesland: f.buildingA.bundesland,
          landkreisAgs: f.buildingA.landkreisAgs,
          stadtOrt: f.buildingA.stadtOrt,
        },
      };
    });
  }, [
    form.buildingA.bundesland,
    form.buildingA.landkreisAgs,
    form.buildingA.stadtOrt,
    form.buildingB.gleicheStadt,
  ]);

  const setA = useCallback((patch: Partial<UmzugFormData["buildingA"]>) => {
    setForm((f) => ({ ...f, buildingA: { ...f.buildingA, ...patch } }));
  }, []);

  const setB = useCallback((patch: Partial<UmzugFormData["buildingB"]>) => {
    setForm((f) => ({ ...f, buildingB: { ...f.buildingB, ...patch } }));
  }, []);

  const validateStep = useCallback(
    (s: number) => validateStepForm(form, s),
    [form],
  );

  const next = () => {
    const err = validateStep(step);
    if (err) {
      alert(err);
      return;
    }
    setStep((x) => Math.min(TOTAL_STEPS, x + 1));
  };

  const back = () => setStep((x) => Math.max(1, x - 1));

  const lkA = useMemo(() => lkFor(form.buildingA.bundesland), [form.buildingA.bundesland, lkFor]);
  const lkB = useMemo(() => lkFor(form.buildingB.bundesland), [form.buildingB.bundesland, lkFor]);

  const goErgebnis = () => {
    const err = validateFullForm(form);
    if (err) {
      alert(err);
      return;
    }
    const cleaned = sanitizeUmzugForm(form);
    setForm(cleaned);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    } catch {
      /* ignore */
    }
    router.push("/ergebnis/");
  };

  return (
    <div ref={formTopRef} className="scroll-mt-24">
      <Stepper current={step} total={TOTAL_STEPS} />

      {step === 1 && (
        <section className="space-y-4">
          <div className="rounded-xl border border-[#0088CC]/20 bg-[#F4FAFE] p-4">
            <p className="text-xs font-black uppercase tracking-wide text-[#0088CC]">
              Schritt 1 von 6 · Auszug
            </p>
            <h1 className="mt-1 text-2xl font-black text-[#0D2137]">Gebäude A</h1>
            <p className="mt-1 text-sm text-[#5A7A8A]">
              Alte Adresse, Zugang und Parkweg. Diese Angaben beschreiben den Startpunkt des Umzugs.
            </p>
          </div>
          <label className="block text-sm font-medium">Bundesland</label>
          <select
            className="w-full rounded-md border border-slate-300 p-3 text-base"
            value={form.buildingA.bundesland}
            onChange={(e) =>
              setA({
                bundesland: e.target.value as BundeslandCode,
                landkreisAgs: "00000",
              })
            }
          >
            {BUNDESLAENDER.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
          <label className="block text-sm font-medium">Landkreis / kreisfreie Stadt</label>
          <select
            className="w-full rounded-md border border-slate-300 p-3 text-base"
            value={form.buildingA.landkreisAgs}
            onChange={(e) => setA({ landkreisAgs: e.target.value })}
          >
            {lkA.map((l) => (
              <option key={l.ags} value={l.ags}>
                {l.name}
              </option>
            ))}
          </select>
          <label className="block text-sm font-medium">Stadt / Ort</label>
          <input
            className="w-full rounded-md border border-slate-300 p-3 text-base"
            value={form.buildingA.stadtOrt}
            onChange={(e) => setA({ stadtOrt: e.target.value })}
            placeholder="z. B. Frankfurt am Main"
          />
          <EtageBlock
            etage={form.buildingA.etage}
            aufzug={form.buildingA.aufzug}
            treppenhaus={form.buildingA.treppenhaus}
            parkentfernung={form.buildingA.parkentfernung}
            halteverbot={form.buildingA.halteverbot}
            gebaeudetyp={form.buildingA.gebaeudetyp}
            set={(p) => setA(p)}
          />
        </section>
      )}

      {step === 2 && (
        <section className="space-y-4">
          <div className="rounded-xl border border-[#FF7700]/25 bg-[#FFF8F3] p-4">
            <p className="text-xs font-black uppercase tracking-wide text-[#FF7700]">
              Schritt 2 von 6 · Einzug
            </p>
            <h1 className="mt-1 text-2xl font-black text-[#0D2137]">Gebäude B</h1>
            <p className="mt-1 text-sm text-[#5A7A8A]">
              Neue Adresse, Zugang und Parkweg. Ab hier geht es um den Zielort des Umzugs.
            </p>
          </div>
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <input
              type="checkbox"
              checked={form.buildingB.gleicheStadt}
              onChange={(e) => setB({ gleicheStadt: e.target.checked })}
            />
            <span className="text-sm font-medium">Selbe Stadt / Region wie Gebäude A</span>
          </label>
          {!form.buildingB.gleicheStadt && (
            <>
              <label className="block text-sm font-medium">Bundesland</label>
              <select
                className="w-full rounded-md border border-slate-300 p-3 text-base"
                value={form.buildingB.bundesland}
                onChange={(e) =>
                  setB({
                    bundesland: e.target.value as BundeslandCode,
                    landkreisAgs: "00000",
                  })
                }
              >
                {BUNDESLAENDER.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <label className="block text-sm font-medium">Landkreis / kreisfreie Stadt</label>
              <select
                className="w-full rounded-md border border-slate-300 p-3 text-base"
                value={form.buildingB.landkreisAgs}
                onChange={(e) => setB({ landkreisAgs: e.target.value })}
              >
                {lkB.map((l) => (
                  <option key={l.ags} value={l.ags}>
                    {l.name}
                  </option>
                ))}
              </select>
              <label className="block text-sm font-medium">Stadt / Ort</label>
              <input
                className="w-full rounded-md border border-slate-300 p-3 text-base"
                value={form.buildingB.stadtOrt}
                onChange={(e) => setB({ stadtOrt: e.target.value })}
              />
            </>
          )}
          <EtageBlock
            etage={form.buildingB.etage}
            aufzug={form.buildingB.aufzug}
            treppenhaus={form.buildingB.treppenhaus}
            parkentfernung={form.buildingB.parkentfernung}
            halteverbot={form.buildingB.halteverbot}
            gebaeudetyp={form.buildingB.gebaeudetyp}
            set={(p) => setB(p)}
          />
        </section>
      )}

      {step === 3 && (
        <section className="space-y-4">
          <h1 className="text-xl font-semibold text-primary">Distanz & Termin</h1>
          <label className="block text-sm font-medium">Entfernung (km)</label>
          <input
            type="number"
            min={0}
            className="w-full rounded-md border border-slate-300 p-3 text-base"
            value={form.distance.km || ""}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                distance: { ...f.distance, km: parseFloat(e.target.value) || 0 },
              }))
            }
          />
          <p className="text-sm text-muted">Kürzeste Fahrstrecke (z. B. laut Karten-App).</p>
          <label className="block text-sm font-medium">Umzugsdatum</label>
          <input
            type="date"
            className="w-full rounded-md border border-slate-300 p-3 text-base"
            value={form.distance.umzugsdatum}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                distance: { ...f.distance, umzugsdatum: e.target.value },
              }))
            }
          />
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6">
          <h1 className="text-xl font-semibold text-primary">Möbel & Inventar</h1>
          <CounterGroup
            title="Schlafzimmer"
            icon={<BedIcon />}
            labelMap={{
              bett_einzel: "Einzelbett",
              bett_doppel: "Doppelbett",
              boxspringbett: "Boxspringbett",
              kleiderschrank_klein: "Kleiderschrank (klein)",
              kleiderschrank_mittel: "Kleiderschrank (mittel)",
              kleiderschrank_gross: "Kleiderschrank (groß)",
              kleiderschrank_begehbar: "Begehbarer Kleiderschrank",
              kommode: "Kommode",
              nachttisch: "Nachttisch",
              spiegel_gross: "Spiegel (groß)",
              matratze_extra: "Extra-Matratze",
            }}
            entries={Object.entries(form.inventory.schlafzimmer)}
            onChange={(k, v) =>
              setForm((f) => ({
                ...f,
                inventory: {
                  ...f.inventory,
                  schlafzimmer: { ...f.inventory.schlafzimmer, [k]: v },
                },
              }))
            }
          />
          <CounterGroup
            title="Wohnzimmer"
            icon={<SofaIcon />}
            labelMap={{
              sofa_2sitzer: "Sofa (2-Sitzer)",
              sofa_3sitzer: "Sofa (3-Sitzer)",
              sofa_l_form: "Sofa (L-Form)",
              sessel: "Sessel",
              couchtisch: "Couchtisch",
              tv_moebel: "TV-Möbel",
              regal_klein: "Regal (klein)",
              regal_gross: "Regal (groß)",
              vitrine: "Vitrine",
              teppich_gross: "Teppich (groß)",
            }}
            entries={Object.entries(form.inventory.wohnzimmer)}
            onChange={(k, v) =>
              setForm((f) => ({
                ...f,
                inventory: {
                  ...f.inventory,
                  wohnzimmer: { ...f.inventory.wohnzimmer, [k]: v },
                },
              }))
            }
          />
          <div className="space-y-3 rounded-xl border border-slate-200 p-4">
            <h2 className="flex items-center gap-2 font-semibold text-primary">
              <span style={{ color: "#0088CC" }}><KitchenIcon /></span>
              Küche
            </h2>
            <RadioRow
              label="Einbauküche vorhanden?"
              value={form.inventory.kueche.kueche_vorhanden}
              options={[
                { v: "ja", l: "Ja (Abbau + Aufbau)" },
                { v: "nein", l: "Nein" },
              ]}
              onChange={(v) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    kueche: { ...f.inventory.kueche, kueche_vorhanden: v as "ja" | "nein" },
                  },
                }))
              }
            />
            {form.inventory.kueche.kueche_vorhanden === "ja" && (
              <select
                className="w-full rounded-md border border-slate-300 p-2"
                value={form.inventory.kueche.kueche_laufmeter}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    inventory: {
                      ...f.inventory,
                      kueche: {
                        ...f.inventory.kueche,
                        kueche_laufmeter: e.target.value as UmzugFormData["inventory"]["kueche"]["kueche_laufmeter"],
                      },
                    },
                  }))
                }
              >
                <option value="bis_2m">bis 2 m</option>
                <option value="2_3m">2–3 m</option>
                <option value="3_4m">3–4 m</option>
                <option value="ueber_4m">über 4 m</option>
              </select>
            )}
            <label className="block text-sm font-medium">Kühlschrank</label>
            <select
              className="w-full rounded-md border border-slate-300 p-2"
              value={form.inventory.kueche.kuehlschrank}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    kueche: {
                      ...f.inventory.kueche,
                      kuehlschrank: e.target.value as UmzugFormData["inventory"]["kueche"]["kuehlschrank"],
                    },
                  },
                }))
              }
            >
              <option value="keiner">Keiner</option>
              <option value="standard">Standard</option>
              <option value="sidebyside">Side-by-Side</option>
            </select>
            <RadioRow
              label="Herd"
              value={form.inventory.kueche.herd}
              options={[
                { v: "einbau", l: "Einbau" },
                { v: "freistehend", l: "Freistehend" },
                { v: "keiner", l: "Keiner" },
              ]}
              onChange={(v) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    kueche: {
                      ...f.inventory.kueche,
                      herd: v as UmzugFormData["inventory"]["kueche"]["herd"],
                    },
                  },
                }))
              }
            />
            <RadioRow
              label="Geschirrspüler"
              value={form.inventory.kueche.geschirrspueler}
              options={[
                { v: "einbau", l: "Einbau" },
                { v: "freistehend", l: "Freistehend" },
                { v: "keiner", l: "Keiner" },
              ]}
              onChange={(v) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    kueche: {
                      ...f.inventory.kueche,
                      geschirrspueler: v as UmzugFormData["inventory"]["kueche"]["geschirrspueler"],
                    },
                  },
                }))
              }
            />
            <MoebelZaehler
              label="Waschmaschine"
              value={form.inventory.kueche.waschmaschine}
              onChange={(n) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    kueche: { ...f.inventory.kueche, waschmaschine: n },
                  },
                }))
              }
            />
            <MoebelZaehler
              label="Trockner"
              value={form.inventory.kueche.trockner}
              onChange={(n) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    kueche: { ...f.inventory.kueche, trockner: n },
                  },
                }))
              }
            />
          </div>
          <CounterGroup
            title="Arbeitszimmer / Sonstiges"
            icon={<DeskIcon />}
            labelMap={{
              schreibtisch_normal: "Schreibtisch",
              schreibtisch_eck: "Eckschreibtisch",
              buerostuhl: "Bürostuhl",
              buecherregal: "Bücherregal",
              drucker: "Drucker",
            }}
            entries={Object.entries(form.inventory.buero)}
            onChange={(k, v) =>
              setForm((f) => ({
                ...f,
                inventory: {
                  ...f.inventory,
                  buero: { ...f.inventory.buero, [k]: v },
                },
              }))
            }
          />
          <div className="space-y-3 rounded-xl border border-slate-200 p-4">
            <h2 className="flex items-center gap-2 font-semibold text-primary">
              <span style={{ color: "#0088CC" }}><WarehouseIcon /></span>
              Keller / Garage
            </h2>
            <CounterGroup
              title=""
              labelMap={{
                fahrrad: "Fahrrad",
                ebike: "E-Bike",
                motorrad: "Motorrad",
                werkzeugschrank: "Werkzeugschrank",
                kellerregal: "Kellerregal",
              }}
              entries={Object.entries(form.inventory.keller)}
              onChange={(k, v) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    keller: { ...f.inventory.keller, [k]: v },
                  },
                }))
              }
            />
            <label className="block text-sm font-medium">Gartengeräte (Menge)</label>
            <select
              className="w-full rounded-md border border-slate-300 p-2"
              value={form.inventory.gartengeraete}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    gartengeraete: e.target.value as UmzugFormData["inventory"]["gartengeraete"],
                  },
                }))
              }
            >
              <option value="wenig">Wenig (1–5 Teile)</option>
              <option value="mittel">Mittel</option>
              <option value="viel">Viel</option>
            </select>
          </div>
          <div className="space-y-3 rounded-xl border border-slate-200 p-4">
            <h2 className="flex items-center gap-2 font-semibold text-primary">
              <span style={{ color: "#0088CC" }}><AlertIcon /></span>
              Sperrgut &amp; Besonderes
            </h2>
            <MoebelZaehler
              label="Klavier"
              value={form.inventory.sperrgut.klavier}
              onChange={(n) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    sperrgut: { ...f.inventory.sperrgut, klavier: n },
                  },
                }))
              }
            />
            <MoebelZaehler
              label="Flügel"
              value={form.inventory.sperrgut.fluegel}
              onChange={(n) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    sperrgut: { ...f.inventory.sperrgut, fluegel: n },
                  },
                }))
              }
            />
            <MoebelZaehler
              label="Safe / Tresor (über 50 kg)"
              value={form.inventory.sperrgut.safe_schwer}
              onChange={(n) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    sperrgut: { ...f.inventory.sperrgut, safe_schwer: n },
                  },
                }))
              }
            />
            <MoebelZaehler
              label="Aquarium (über 200 l)"
              value={form.inventory.sperrgut.aquarium_gross}
              onChange={(n) =>
                setForm((f) => ({
                  ...f,
                  inventory: {
                    ...f.inventory,
                    sperrgut: { ...f.inventory.sperrgut, aquarium_gross: n },
                  },
                }))
              }
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.inventory.sperrgut.kunst_antik}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    inventory: {
                      ...f.inventory,
                      sperrgut: { ...f.inventory.sperrgut, kunst_antik: e.target.checked },
                    },
                  }))
                }
              />
              <span className="text-sm">Kunstgegenstände / Antikes</span>
            </label>
            {form.inventory.sperrgut.kunst_antik && (
              <input
                className="w-full rounded-md border border-slate-300 p-2 text-sm"
                placeholder="Kurzbeschreibung (optional)"
                value={form.inventory.sperrgut.kunst_antik_text}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    inventory: {
                      ...f.inventory,
                      sperrgut: { ...f.inventory.sperrgut, kunst_antik_text: e.target.value },
                    },
                  }))
                }
              />
            )}
          </div>
          <CounterGroup
            title="Umzugskartons"
            icon={<PackageIcon />}
            labelMap={{
              karton_standard: "Standard-Karton",
              karton_buch: "Bücherkarton",
              haengekarton: "Hängekarton",
              karton_spezial: "Spezialkarton",
            }}
            entries={Object.entries(form.inventory.kartons)}
            onChange={(k, v) =>
              setForm((f) => ({
                ...f,
                inventory: {
                  ...f.inventory,
                  kartons: { ...f.inventory.kartons, [k]: v },
                },
              }))
            }
          />
        </section>
      )}

      {step === 5 && (
        <section className="space-y-4">
          <h1 className="flex items-center gap-2 text-xl font-semibold text-primary">
            <span style={{ color: "#0088CC" }}><ListIcon /></span>
            Zusatzleistungen
          </h1>
          <CheckboxList form={form} setForm={setForm} />
        </section>
      )}

      {step === 6 && (
        <section className="space-y-4">
          <h1 className="text-xl font-semibold text-primary">Zusammenfassung</h1>
          <p className="text-sm text-muted">
            Der Richtwert ist unverbindlich und basiert auf regionalen Durchschnittswerten. Wir speichern
            keine Ihrer Umzugsdaten auf unseren Servern.
          </p>
          <RadioRow
            label="Nutzung"
            value={form.summary.nutzungsart}
            options={[
              { v: "privat", l: "Privat" },
              { v: "gewerbe", l: "Gewerbe / Büro (MVP ohne gespeicherte Rechnungsdaten)" },
            ]}
            onChange={(v) =>
              setForm((f) => ({
                ...f,
                summary: {
                  ...f.summary,
                  nutzungsart: v as UmzugFormData["summary"]["nutzungsart"],
                },
              }))
            }
          />
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4">
            <input
              type="checkbox"
              checked={form.summary.agbAccepted}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  summary: { ...f.summary, agbAccepted: e.target.checked },
                }))
              }
              className="mt-1"
            />
            <span className="text-sm">
              Ich habe die{" "}
              <Link href="/agb/" className="text-accent underline">
                AGB
              </Link>{" "}
              und die{" "}
              <Link href="/datenschutz/" className="text-accent underline">
                Datenschutzerklärung
              </Link>{" "}
              gelesen.
            </span>
          </label>
        </section>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={back}
            className="touch-target rounded-md border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50"
          >
            Zurück
          </button>
        )}
        {step < TOTAL_STEPS && (
          <button
            type="button"
            onClick={next}
            className="touch-target rounded-md bg-primary px-5 py-3 font-medium text-white hover:opacity-95"
          >
            Weiter
          </button>
        )}
        {step === TOTAL_STEPS && (
          <button
            type="button"
            onClick={goErgebnis}
            className="touch-target rounded-md bg-accent px-5 py-3 font-semibold text-white hover:opacity-95"
          >
            Kostenlos berechnen
          </button>
        )}
      </div>
    </div>
  );
}

function EtageBlock({
  etage,
  aufzug,
  treppenhaus,
  parkentfernung,
  halteverbot,
  gebaeudetyp,
  set,
}: {
  etage: UmzugFormData["buildingA"]["etage"];
  aufzug: UmzugFormData["buildingA"]["aufzug"];
  treppenhaus: UmzugFormData["buildingA"]["treppenhaus"];
  parkentfernung: UmzugFormData["buildingA"]["parkentfernung"];
  halteverbot: UmzugFormData["buildingA"]["halteverbot"];
  gebaeudetyp: UmzugFormData["buildingA"]["gebaeudetyp"];
  set: (p: Partial<UmzugFormData["buildingA"]>) => void;
}) {
  return (
    <>
      <label className="block text-sm font-medium">Etage</label>
      <select
        className="w-full rounded-md border border-slate-300 p-3"
        value={etage}
        onChange={(e) => set({ etage: e.target.value as UmzugFormData["buildingA"]["etage"] })}
      >
        <option value="eg">EG</option>
        <option value="1">1. OG</option>
        <option value="2">2. OG</option>
        <option value="3">3. OG</option>
        <option value="4">4. OG</option>
        <option value="5plus">5. OG+</option>
        <option value="dg">Dachgeschoss</option>
      </select>
      <RadioRow
        label="Aufzug"
        value={aufzug}
        options={[
          { v: "ja", l: "Ja" },
          { v: "nein", l: "Nein" },
          { v: "lasten", l: "Lastenaufzug" },
        ]}
        onChange={(v) => set({ aufzug: v as UmzugFormData["buildingA"]["aufzug"] })}
      />
      <RadioRow
        label="Treppenhaus"
        value={treppenhaus}
        options={[
          { v: "normal", l: "Normal" },
          { v: "eng", l: "Eng (unter 1,20 m)" },
        ]}
        onChange={(v) => set({ treppenhaus: v as UmzugFormData["buildingA"]["treppenhaus"] })}
      />
      <label className="block text-sm font-medium">Entfernung Haustür → LKW</label>
      <select
        className="w-full rounded-md border border-slate-300 p-3"
        value={parkentfernung}
        onChange={(e) =>
          set({ parkentfernung: e.target.value as UmzugFormData["buildingA"]["parkentfernung"] })
        }
      >
        <option value="0_10">0–10 m</option>
        <option value="10_30">10–30 m</option>
        <option value="30_50">30–50 m</option>
        <option value="50plus">über 50 m</option>
      </select>
      <RadioRow
        label="Halteverbotszone nötig?"
        value={halteverbot}
        options={[
          { v: "ja", l: "Ja" },
          { v: "nein", l: "Nein" },
          { v: "weiss_nicht", l: "Weiß nicht" },
        ]}
        onChange={(v) => set({ halteverbot: v as UmzugFormData["buildingA"]["halteverbot"] })}
      />
      <RadioRow
        label="Gebäudetyp"
        value={gebaeudetyp}
        options={[
          { v: "altbau", l: "Altbau" },
          { v: "neubau", l: "Neubau" },
          { v: "efh", l: "Einfamilienhaus" },
          { v: "mfh", l: "Mehrfamilienhaus" },
        ]}
        onChange={(v) => set({ gebaeudetyp: v as UmzugFormData["buildingA"]["gebaeudetyp"] })}
      />
    </>
  );
}

function RadioRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { v: string; l: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">{label}</legend>
      <div className="flex flex-wrap gap-3">
        {options.map((o) => (
          <label
            key={o.v}
            className={`cursor-pointer rounded-lg border px-3 py-2 text-sm ${
              value === o.v ? "border-accent bg-orange-50" : "border-slate-200"
            }`}
          >
            <input
              type="radio"
              className="sr-only"
              name={label}
              checked={value === o.v}
              onChange={() => onChange(o.v)}
            />
            {o.l}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CounterGroup({
  title,
  entries,
  onChange,
  icon,
  labelMap,
}: {
  title: string;
  entries: [string, number][];
  onChange: (key: string, val: number) => void;
  icon?: ReactNode;
  labelMap?: Record<string, string>;
}) {
  return (
    <div className={title ? "space-y-3 rounded-xl border border-slate-200 p-4" : "space-y-2"}>
      {title ? (
        <h2 className="flex items-center gap-2 font-semibold text-primary">
          {icon && <span style={{ color: "#0088CC" }}>{icon}</span>}
          {title}
        </h2>
      ) : null}
      <div className="grid gap-2">
        {entries.map(([k, v]) => (
          <MoebelZaehler
            key={k}
            label={labelMap?.[k] ?? k.replace(/_/g, " ")}
            value={v}
            onChange={(n) => onChange(k, n)}
          />
        ))}
      </div>
    </div>
  );
}

function CheckboxList({
  form,
  setForm,
}: {
  form: UmzugFormData;
  setForm: Dispatch<SetStateAction<UmzugFormData>>;
}) {
  const ex = form.extras;
  const toggle = (key: keyof UmzugFormData["extras"]) => {
    setForm((f) => ({
      ...f,
      extras: { ...f.extras, [key]: !f.extras[key] },
    }));
  };

  const items: { key: keyof UmzugFormData["extras"]; label: string }[] = [
    { key: "einpackservice_komplett", label: "Einpackservice (alles)" },
    { key: "einpackservice_teilweise", label: "Einpackservice (nur Küche / Porzellan)" },
    { key: "auspackservice", label: "Auspackservice am Zielort" },
    { key: "moebelmontage", label: "Möbelabbau & Aufbau" },
    { key: "kueche_demo_montage", label: "Küche demontieren & montieren (zusätzlich)" },
    { key: "elektro_anschluss", label: "Elektrogeräte ab-/anklemmen" },
    { key: "halteverbot_service", label: "Halteverbotsschild beantragen (Service)" },
    { key: "verpackungsmaterial", label: "Verpackungsmaterial liefern" },
    { key: "entruempelung", label: "Entrümpelung vor dem Umzug" },
    { key: "zwischenlagerung", label: "Zwischenlagerung" },
    { key: "reinigung_alt", label: "Reinigung alte Wohnung" },
    { key: "moebellift", label: "Möbellift / Kran" },
    { key: "transportversicherung", label: "Transportversicherung (Erweiterung)" },
  ];

  return (
    <div className="space-y-3">
      {items.map(({ key, label }) => (
        <label
          key={key}
          className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
        >
          <input
            type="checkbox"
            checked={!!ex[key]}
            onChange={() => toggle(key)}
            className="mt-1"
          />
          <span className="text-sm">{label}</span>
        </label>
      ))}
      {ex.zwischenlagerung && (
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <label className="text-xs text-muted">Zwischenlagerung: Tage</label>
            <input
              type="number"
              min={0}
              className="w-full rounded border border-slate-300 p-2"
              value={ex.zwischenlagerung_tage}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  extras: {
                    ...f.extras,
                    zwischenlagerung_tage: parseInt(e.target.value, 10) || 0,
                  },
                }))
              }
            />
          </div>
          <div>
            <label className="text-xs text-muted">geschätzte m³</label>
            <input
              type="number"
              min={0}
              className="w-full rounded border border-slate-300 p-2"
              value={ex.zwischenlagerung_m3}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  extras: {
                    ...f.extras,
                    zwischenlagerung_m3: parseFloat(e.target.value) || 0,
                  },
                }))
              }
            />
          </div>
        </div>
      )}
      {ex.entruempelung && (
        <div>
          <label className="text-xs text-muted">Entrümpelung: geschätzte m³</label>
          <input
            type="number"
            min={0}
            className="w-full rounded border border-slate-300 p-2"
            value={ex.entruempelung_m3}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                extras: {
                  ...f.extras,
                  entruempelung_m3: parseFloat(e.target.value) || 0,
                },
              }))
            }
          />
        </div>
      )}
    </div>
  );
}
