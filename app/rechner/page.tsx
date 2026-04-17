import { RechnerForm } from "@/components/RechnerForm";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Umzugskosten-Rechner (kostenlos): Preiskorridor berechnen | meinumzugsrechner.de",
  description:
    "Umzugskosten in Deutschland schätzen: Möbelliste, Streckenkilometer, Etagen & Region. Ergebnis als realistischer Preiskorridor — ohne Datenweitergabe an Umzugsfirmen.",
  ...pageCanonical("/rechner/"),
  openGraph: {
    title: "Umzugskosten-Rechner: Preiskorridor berechnen",
    description:
      "Kostenlose Schätzung Ihrer Umzugskosten mit regionalem Faktor. Kein Spam, keine Weitergabe Ihrer Daten.",
    url: "/rechner/",
  },
  robots: { index: true, follow: true },
};

export default function RechnerPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Suspense
        fallback={<p className="py-12 text-center text-muted">Formular wird geladen…</p>}
      >
        <RechnerForm />
      </Suspense>
    </div>
  );
}
