import { VergleichClient } from "@/components/VergleichClient";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "Selbst umziehen oder Umzugsfirma? Aufwand und Kosten vergleichen | meinumzugsrechner.com";
const PAGE_DESC =
  "Orientierung für die Entscheidung zwischen Eigenregie und Umzugsfirma: Aufwand, Zeit, Risiko und typische Kosten übersichtlich gegenübergestellt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/vergleich/"),
  openGraph: {
    title: "Selbst umziehen oder Umzugsfirma?",
    description: PAGE_DESC,
    url: "/vergleich/",
  },
};

export default function VergleichPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">
          Selbst umziehen oder Profis beauftragen?
        </h1>
        <p className="mt-3 leading-relaxed text-[#5A7A8A]">
          Diese Seite hilft bei der Abwägung: Was sparen Sie in Eigenregie wirklich, wo entsteht
          zusätzlicher Aufwand und wann kippt der Vorteil zugunsten einer Umzugsfirma?
        </p>
      </div>
      <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
        <VergleichClient />
      </Suspense>
    </div>
  );
}
