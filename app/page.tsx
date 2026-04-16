import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Umzugskosten. Realistisch. Ohne Datenweitergabe.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Detaillierte Eingabe wie bei einem Profi-Umzug – Sie erhalten einen Preiskorridor. Kein Spam, keine
          Weitergabe Ihrer Umzugsdaten an Umzugsfirmen.
        </p>
        <Link
          href="/rechner"
          className="mt-8 inline-flex touch-target items-center justify-center rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm hover:opacity-95"
        >
          Jetzt berechnen
        </Link>
        <p className="mt-4 text-sm text-muted">Kostenlos · DSGVO-orientierte Architektur</p>
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-[var(--bg-soft)] p-8 sm:grid-cols-3">
        <div>
          <h2 className="font-semibold text-primary">Kein Lead-Verkauf</h2>
          <p className="mt-2 text-sm text-muted">
            Ihre Möbelliste und Standorte werden nicht an Umzugsfirmen verkauft.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-primary">Sofortiges Ergebnis</h2>
          <p className="mt-2 text-sm text-muted">Nach dem Ausfüllen sehen Sie den Korridor direkt – kostenlos.</p>
        </div>
        <div>
          <h2 className="font-semibold text-primary">Regional</h2>
          <p className="mt-2 text-sm text-muted">
            Preisfaktoren nach Region – optional Partnerhinweise ohne Datenabgleich.
          </p>
        </div>
      </section>
    </div>
  );
}
