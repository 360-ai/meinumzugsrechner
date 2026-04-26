import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RechnerModeTabs } from "@/components/RechnerModeTabs";
import { webApplicationSchema, webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { RECHNER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "Umzugskosten-Rechner (kostenlos): Preiskorridor berechnen | meinumzugsrechner.de";
const PAGE_DESC =
  "Umzugskosten in Deutschland schätzen: marktnahe Schnellschätzung oder Detailmodus in Beta mit Möbelliste und Region. Keine Datenweitergabe an Umzugsfirmen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/rechner/"),
  openGraph: {
    title: "Umzugskosten-Rechner: Preiskorridor berechnen",
    description:
      "Kostenlose Schätzung Ihrer Umzugskosten mit marktnahem Schnellmodus und Detailmodus in Beta. Kein Spam, keine Weitergabe Ihrer Daten.",
    url: "/rechner/",
  },
  robots: { index: true, follow: true },
};

export default function RechnerPage() {
  const ld = webPageAndFaqSchema({
    path: "/rechner/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: RECHNER_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-rechner" data={ld} />
      <JsonLd id="ld-rechner-app" data={webApplicationSchema()} />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0D2137] sm:text-3xl">Umzugskosten-Rechner</h1>
          <p className="mt-2 text-sm leading-relaxed text-[#5A7A8A]">
            Wählen Sie zwischen einer marktnah kalibrierten Schnellschätzung und einem
            detaillierteren Beta-Modus mit Inventar, Gebäudedetails und Zusatzleistungen. So sehen
            Sie sofort, welcher Preisrahmen heute schon belastbar ist und wo wir noch Praxisdaten
            nachschärfen.
          </p>
        </div>
        <Suspense fallback={<p className="py-12 text-center text-muted">Formular wird geladen...</p>}>
          <RechnerModeTabs />
        </Suspense>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Welcher Modus passt zu Ihnen?</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Die Schnellschätzung ist ideal, wenn Sie in unter einer Minute ein Gefühl für den
            möglichen Kostenrahmen bekommen möchten. Der Detailmodus lohnt sich, wenn Sie Möbel,
            schwierige Zugänge oder Zusatzleistungen bereits konkreter einordnen wollen und mit
            einer laufend kalibrierten Beta arbeiten können.
          </p>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Wenn Sie verstehen möchten, wie der Korridor zustande kommt, finden Sie die Logik
            transparent auf{" "}
            <a href="/so-rechnen-wir/" className="text-[#0088CC] hover:underline">
              So rechnen wir
            </a>
            .
          </p>
        </section>

        <section className="mt-14" id="faq-rechner" aria-labelledby="faq-rechner-h">
          <h2 id="faq-rechner-h" className="mb-6 text-xl font-bold text-[#0D2137]">
            Häufige Fragen zum Rechner
          </h2>
          <FaqAccordion items={RECHNER_FAQS} />
        </section>
      </div>
    </>
  );
}

