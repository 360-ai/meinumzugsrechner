"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EinfacherRechnerForm } from "./EinfacherRechnerForm";
import { RechnerForm } from "./RechnerForm";

type CalculatorMode = "einfach" | "detail";

export function RechnerModeTabs() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const mode: CalculatorMode = sp.get("mode") === "detail" ? "detail" : "einfach";

  const setMode = (next: CalculatorMode) => {
    router.push(`${pathname}?mode=${next}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#0088CC]/20 bg-[#F4FAFE] p-4 shadow-sm">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#FF7700]">
              Erst ausw&auml;hlen
            </p>
            <h2 className="text-lg font-bold text-[#0D2137]">
              Wie genau m&ouml;chten Sie rechnen?
            </h2>
          </div>
          <p className="text-sm text-[#5A7A8A]">Schnell starten oder genauer erfassen.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMode("einfach")}
            aria-pressed={mode === "einfach"}
            className={`group rounded-xl border-2 p-4 text-left transition-all ${
              mode === "einfach"
                ? "border-[#0088CC] bg-white shadow-md shadow-[#0088CC]/10"
                : "border-white bg-white/80 hover:border-[#0088CC]/50 hover:bg-white"
            }`}
          >
            <span className="flex items-start justify-between gap-3">
              <span>
                <span className="block text-base font-bold text-[#0D2137]">
                  Schnell sch&auml;tzen
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[#5A7A8A]">
                  Wenige Angaben f&uuml;r eine schnelle Orientierung.
                </span>
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                  mode === "einfach"
                    ? "border-[#0088CC] bg-[#0088CC] text-white"
                    : "border-slate-200 bg-white text-transparent group-hover:text-[#0088CC]"
                }`}
                aria-hidden="true"
              >
                ✓
              </span>
            </span>
            <span
              className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                mode === "einfach" ? "bg-[#FF7700] text-white" : "bg-slate-100 text-[#5A7A8A]"
              }`}
            >
              Empfohlen zum Einstieg
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode("detail")}
            aria-pressed={mode === "detail"}
            className={`group rounded-xl border-2 p-4 text-left transition-all ${
              mode === "detail"
                ? "border-[#0088CC] bg-white shadow-md shadow-[#0088CC]/10"
                : "border-white bg-white/80 hover:border-[#0088CC]/50 hover:bg-white"
            }`}
          >
            <span className="flex items-start justify-between gap-3">
              <span>
                <span className="block text-base font-bold text-[#0D2137]">
                  Detaillierte Kalkulation
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[#5A7A8A]">
                  M&ouml;bel, Zugang und Zusatzleistungen genauer erfassen.
                </span>
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                  mode === "detail"
                    ? "border-[#0088CC] bg-[#0088CC] text-white"
                    : "border-slate-200 bg-white text-transparent group-hover:text-[#0088CC]"
                }`}
                aria-hidden="true"
              >
                ✓
              </span>
            </span>
            <span
              className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                mode === "detail" ? "bg-[#FF7700] text-white" : "bg-slate-100 text-[#5A7A8A]"
              }`}
            >
              Beta / Testphase
            </span>
          </button>
        </div>
      </div>

      {mode === "einfach" ? (
        <>
          <div className="rounded-2xl border border-[#FF7700]/20 bg-[#FFF8F3] p-4 text-sm text-[#5A7A8A]">
            <span className="mb-1 block font-bold text-[#0D2137]">
              Schnelle Orientierung aktiv
            </span>
            Die Schnellsch&auml;tzung konzentriert sich auf Wohnfl&auml;che, Zimmerzahl,
            Haushaltsgr&ouml;&szlig;e, Region und Distanz. Sie ist gedacht f&uuml;r eine erste Preisorientierung, wenn Sie
            noch keine vollst&auml;ndige M&ouml;belliste vorbereitet haben.
          </div>
          <EinfacherRechnerForm />
        </>
      ) : (
        <>
          <div className="rounded-2xl border border-[#FF7700]/20 bg-[#FFF8F3] p-4 text-sm text-[#5A7A8A]">
            <span className="mb-1 block font-bold text-[#0D2137]">
              Detaillierte Kalkulation in Testphase
            </span>
            Die M&ouml;belliste hilft beim Vorbereiten einer Anfrage. Der Preisrahmen wird
            schrittweise mit echten Angebotsdaten kalibriert und ist aktuell als Beta-Wert zu
            verstehen.
          </div>
          <RechnerForm />
        </>
      )}
    </div>
  );
}
