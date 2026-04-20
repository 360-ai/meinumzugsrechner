"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RechnerForm } from "./RechnerForm";
import { EinfacherRechnerForm } from "./EinfacherRechnerForm";

export function RechnerModeTabs() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const mode = sp.get("mode") === "einfach" ? "einfach" : "detail";

  const setMode = (next: "einfach" | "detail") => {
    router.push(`${pathname}?mode=${next}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
        <button
          type="button"
          onClick={() => setMode("detail")}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
            mode === "detail"
              ? "bg-[#0088CC] text-white"
              : "border border-slate-200 bg-white text-[#0D2137] hover:border-[#0088CC]/50"
          }`}
        >
          Detaillierte Kalkulation
        </button>
        <button
          type="button"
          onClick={() => setMode("einfach")}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
            mode === "einfach"
              ? "bg-[#0088CC] text-white"
              : "border border-slate-200 bg-white text-[#0D2137] hover:border-[#0088CC]/50"
          }`}
        >
          Schnell schätzen
        </button>
      </div>

      {mode === "einfach" ? (
        <EinfacherRechnerForm />
      ) : (
        <>
          <p className="text-sm text-[#5A7A8A]">
            Volle Möbelliste, Streckendetails und Zusatzleistungen — ideal, wenn Sie später
            vergleichbare Angebote einholen möchten.
          </p>
          <RechnerForm />
        </>
      )}
    </div>
  );
}
