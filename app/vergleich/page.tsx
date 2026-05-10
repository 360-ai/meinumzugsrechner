import { JsonLd } from "@/components/JsonLd";
import { VergleichClient } from "@/components/VergleichClient";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "Selbst umziehen oder Umzugsfirma beauftragen? Kosten & Aufwand im Vergleich | meinumzugsrechner.de";
const PAGE_DESC =
  "Lohnt sich eine Umzugsfirma oder ist Selbstumzug günstiger? Kosten, Aufwand, Zeit und Risiko direkt vergleichen — mit konkreten Zahlen und Rechenbeispielen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Umzugskosten vergleichen", "Umzug Preisvergleich", "Umzugsfirma Kosten"],
  ...pageCanonical("/vergleich/"),
  openGraph: {
    type: "website",
    title: "Selbst umziehen oder Umzugsfirma?",
    description: PAGE_DESC,
    url: "/vergleich/",
  },
  robots: { index: true, follow: true },
};

export default function VergleichPage() {
  return (
    <>
      <JsonLd id="ld-vergleich" data={webPageOnlySchema({ path: "/vergleich/", title: PAGE_TITLE, description: PAGE_DESC })} />
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
    </>
  );
}

