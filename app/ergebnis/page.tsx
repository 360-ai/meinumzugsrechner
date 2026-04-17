import { ErgebnisClient } from "@/components/ErgebnisClient";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Ihr Ergebnis: Umzugskosten-Preiskorridor | meinumzugsrechner.de",
  description:
    "Auswertung Ihrer Umzugskosten-Berechnung: Preiskorridor und Hinweise. Persönliches Ergebnis — nicht für die allgemeine Suche indexiert.",
  ...pageCanonical("/ergebnis/"),
  robots: { index: false, follow: true },
};

export default function ErgebnisPage() {
  return (
    <Suspense
      fallback={<p className="py-12 text-center text-muted">Ergebnis wird geladen…</p>}
    >
      <ErgebnisClient />
    </Suspense>
  );
}
