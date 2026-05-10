import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RechnerModeTabs } from "@/components/RechnerModeTabs";
import { webApplicationSchema, webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { RECHNER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "Umzugskostenrechner online — kostenlos & ohne Anmeldung berechnen | meinumzugsrechner.de";
const PAGE_DESC =
  "Was kostet mein Umzug? Umzugskosten jetzt kostenlos berechnen — ohne Registrierung, ohne Datenweitergabe. Schnellschätzung oder Detailmodus mit Möbelliste und regionalen Preisen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Umzugskostenrechner", "Umzugskostenrechner online", "Umzugskosten berechnen", "was kostet ein Umzug", "Umzugskosten berechnen ohne Anmeldung", "Umzug Kosten berechnen kostenlos"],
  ...pageCanonical("/rechner/"),
  openGraph: {
    title: "Umzugskostenrechner online — kostenlos & ohne Anmeldung",
    description:
      "Was kostet mein Umzug? Jetzt kostenlos berechnen — ohne Registrierung, ohne Datenweitergabe. Schnellschätzung oder Detailmodus mit regionalen Preisen.",
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

        <section className="mt-14 rounded-2xl border border-slate-100 bg-[#FAFCFE] p-6">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Umzugskosten berechnen — so funktioniert es
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[#5A7A8A]">
            <p>
              Unser <strong>Umzugskostenrechner</strong> zeigt Ihnen einen realistischen Preiskorridor
              für Ihren Umzug in Deutschland. Egal ob Lokalumzug innerhalb der Stadt oder Fernumzug in
              eine andere Region — der Rechner berücksichtigt <strong>Wohnfläche, Zimmerzahl, Entfernung,
              Bundesland und Haushaltsgröße</strong>.
            </p>
            <p>
              Im Detailmodus können Sie zusätzlich Ihre Möbel, Etage, Aufzug, Zugangsweg und
              Zusatzleistungen wie Ein-/Auspacken oder Möbelmontage angeben. So erhalten Sie eine
              Schätzung, die näher am tatsächlichen Firmenangebot liegt.
            </p>
            <p>
              <strong>Typische Kosten:</strong> Ein lokaler Umzug (unter 50 km) einer 2-Zimmer-Wohnung
              kostet mit Firma 500–1.200 Euro. Eine 3-Zimmer-Wohnung liegt bei 800–1.800 Euro. Bei
              Fernumzügen ab 200 km verdoppeln sich die Kosten häufig. Die genauen Preise hängen von
              Saison, Zugang und Sonderaufwand ab.
            </p>
          </div>
        </section>

        <section className="mt-10" id="faq-rechner" aria-labelledby="faq-rechner-h">
          <h2 id="faq-rechner-h" className="mb-6 text-xl font-bold text-[#0D2137]">
            Häufige Fragen zum Rechner
          </h2>
          <FaqAccordion items={RECHNER_FAQS} />
        </section>
      </div>
    </>
  );
}

