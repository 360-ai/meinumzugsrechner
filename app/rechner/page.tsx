import { RechnerModeTabs } from "@/components/RechnerModeTabs";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Umzugskosten-Rechner (kostenlos): Preiskorridor berechnen | meinumzugsrechner.de",
  description:
    "Umzugskosten in Deutschland schätzen: Schnellüberblick oder detaillierte Kalkulation mit Möbelliste und Region. Keine Datenweitergabe an Umzugsfirmen.",
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0D2137] sm:text-3xl">Umzugskosten-Rechner</h1>
        <p className="mt-2 text-sm text-[#5A7A8A]">
          Wählen Sie zwischen einer schnellen Orientierung und der ausführlichen Berechnung mit
          Möbelliste.
        </p>
      </div>
      <Suspense
        fallback={<p className="py-12 text-center text-muted">Formular wird geladen…</p>}
      >
        <RechnerModeTabs />
      </Suspense>
    </div>
  );
}
