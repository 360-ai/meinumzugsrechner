import { EntruempelungsRechner } from "@/components/EntruempelungsRechner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { ENTRUEMPELUNG_RECHNER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Entrümpelungsrechner: Was kostet eine Entrümpelung? Kostenlos berechnen | meinumzugsrechner.de";
const PAGE_DESC =
  "Was kostet eine Entrümpelung pro qm? Kosten für Container oder Entrümpelungsfirma kostenlos berechnen — nach Wohnfläche, Füllgrad und Etage. Ohne Anmeldung.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Entrümpelung Kosten",
    "Entrümpelungsrechner",
    "Entrümpelung Kosten pro qm",
    "Wohnungsauflösung Kosten",
    "Container Entrümpelung",
  ],
  ...pageCanonical("/entruempelungsrechner/"),
  openGraph: {
    type: "website",
    title: "Entrümpelungs-Rechner: Kosten berechnen",
    description: PAGE_DESC,
    url: "/entruempelungsrechner/",
  },
  robots: { index: true, follow: true },
};

export default function EntruempelungsRechnerPage() {
  return (
    <>
      <JsonLd
        id="ld-entruempelungsrechner"
        data={webPageAndFaqSchema({
          path: "/entruempelungsrechner/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: ENTRUEMPELUNG_RECHNER_FAQS,
        })}
      />

      <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
        {/* Hero */}
        <div className="mb-8">
          <Link
            href="/"
            className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-[#0088CC] hover:underline"
          >
            ← Startseite
          </Link>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#0D2137" }}
          >
            <p
              className="mb-1 text-xs font-bold uppercase tracking-wider"
              style={{ color: "#FFCC00" }}
            >
              Interaktives Tool
            </p>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Entrümpelungs-Rechner
            </h1>
            <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
              Schätzen Sie die Kosten einer Entrümpelung — ob Container mieten
              oder Firma beauftragen. Unverbindlich und ohne Anmeldung.
            </p>
          </div>
        </div>

        {/* Rechner */}
        <EntruempelungsRechner />

        {/* Tipps + FAQ + CTA */}
        <div className="mt-8 space-y-6">
          <div
            className="rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Spartipp:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Sortieren Sie vor der Entrümpelung selbst aus: Brauchbares
              verschenken (z.&nbsp;B. nebenan.de, eBay Kleinanzeigen) oder
              zum Wertstoffhof bringen — so reduzieren Sie das Volumen und
              sparen bei Container und Firma.
            </span>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
              Häufige Fragen
            </h2>
            <FaqAccordion items={ENTRUEMPELUNG_RECHNER_FAQS} />
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#EBF6FD" }}
          >
            <p className="mb-4 font-bold text-[#0D2137]">
              Entrümpelung erledigt? Jetzt den Umzug planen!
            </p>
            <Link
              href="/rechner/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Zum Umzugskosten-Rechner →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
