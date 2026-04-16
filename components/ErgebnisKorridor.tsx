import type { CalculateResult } from "@/lib/types";

type Props = {
  result: CalculateResult;
};

export function ErgebnisKorridor({ result }: Props) {
  const fmt = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);

  return (
    <div className="rounded-2xl border border-slate-200 bg-[var(--bg-soft)] p-8 text-center">
      <p className="text-sm font-medium text-muted">Geschätzter Preiskorridor</p>
      <p className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {fmt(result.korridorUnten)} – {fmt(result.korridorOben)}
      </p>
      <p className="mt-4 text-sm text-muted">
        Region: {result.regionName} · Mindestauftrag ab {fmt(result.mindestauftrag)}
      </p>
      <details className="mt-6 text-left text-sm text-muted">
        <summary className="cursor-pointer font-medium text-slate-700">Technische Schätzgrößen</summary>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Zeit (Richtwert): ca. {result.meta.gesamtMinuten} Minuten Gesamtarbeit</li>
          <li>Helfer: {result.meta.helfer}</li>
          <li>Zeit × Helfer: ca. {result.meta.zeitStunden} h</li>
          <li>Volumen (Schätzung): ca. {result.meta.volumenM3Schaetzung} m³</li>
        </ul>
      </details>
    </div>
  );
}
