import type { CalculateResult } from "@/lib/types";
import { describeVolume } from "@/lib/volume-explanation";

type Props = {
  result: CalculateResult;
  anfragMailto?: string;
};

export function ErgebnisKorridor({ result, anfragMailto }: Props) {
  const fmt = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);
  const volume = describeVolume(result.meta.volumenM3Schaetzung);
  const roundedVolume = Math.round(result.meta.volumenM3Schaetzung);

  return (
    <div className="rounded-2xl border border-slate-200 bg-[var(--bg-soft)] p-8 text-center border-t-4 border-t-accent">
      <p className="text-sm font-medium text-muted">Geschätzter Preiskorridor</p>
      <p className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {fmt(result.korridorUnten)} – {fmt(result.korridorOben)}
      </p>
      <p className="mt-4 text-sm text-muted">
        Region: {result.regionName} · Mindestauftrag ab {fmt(result.mindestauftrag)}
      </p>
      <div className="mt-6 rounded-xl border border-white/70 bg-white p-4 text-left shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wide text-[#FF7700]">
          Was bedeutet ca. {roundedVolume} m³?
        </p>
        <p className="mt-2 text-sm font-semibold text-primary">
          Ungefähr wie eine {volume.bandLabel}.
        </p>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-lg bg-[#F4FAFE] p-3">
            <span className="block text-xs font-bold text-[#5A7A8A]">Kartons</span>
            <span className="mt-1 block text-primary">{volume.cartonRange}</span>
          </div>
          <div className="rounded-lg bg-[#FFF8F3] p-3">
            <span className="block text-xs font-bold text-[#5A7A8A]">Wohnung</span>
            <span className="mt-1 block text-primary">{volume.bandLabel}</span>
          </div>
          <div className="rounded-lg bg-white p-3 ring-1 ring-slate-100">
            <span className="block text-xs font-bold text-[#5A7A8A]">Fahrzeug</span>
            <span className="mt-1 block text-primary">{volume.vehicleLabel}</span>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">{volume.note}</p>
      </div>
      <details className="mt-6 text-left text-sm text-muted">
        <summary className="cursor-pointer font-medium text-slate-700">Technische Schätzgrößen</summary>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Zeit (Richtwert): ca. {result.meta.gesamtMinuten} Minuten Gesamtarbeit</li>
          <li>Helfer: {result.meta.helfer}</li>
          <li>Zeit × Helfer: ca. {result.meta.zeitStunden} h</li>
          <li>Volumen (Schätzung): ca. {result.meta.volumenM3Schaetzung} m³</li>
        </ul>
        <div className="no-print mt-4 flex flex-wrap gap-3">
          <a
            href="#export-pdf"
            className="touch-target inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Zur PDF springen
          </a>
          {anfragMailto && (
            <a
              href={anfragMailto}
              className="touch-target inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-slate-50"
            >
              E-Mail-Vorlage öffnen
            </a>
          )}
        </div>
      </details>
    </div>
  );
}
