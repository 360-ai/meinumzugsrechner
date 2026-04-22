import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LkwRechnerClient } from "@/components/LkwRechnerClient";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { LKW_RECHNER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "LKW-Rechner: Wie groß muss der LKW beim Umzug sein? | meinumzugsrechner.com";
const PAGE_DESC =
  "Kostenloser LKW-Rechner für deinen Umzug: Abschätzen, welches Fahrzeugvolumen passt, wie viele Fahrten nötig sind und welche Führerscheinklasse relevant wird.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/lkw-rechner/"),
  openGraph: {
    title: "LKW-Rechner: Welches Fahrzeug brauche ich beim Umzug?",
    description: PAGE_DESC,
    url: "/lkw-rechner/",
  },
};

export default function LkwRechnerPage() {
  const ld = webPageAndFaqSchema({
    path: "/lkw-rechner/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: LKW_RECHNER_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-lkw-rechner" data={ld} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">LKW-Rechner für Umzüge</h1>
          <p className="mt-3 leading-relaxed text-[#5A7A8A]">
            Mit dem LKW-Rechner schätzt du ab, ob ein Sprinter, ein 3,5-Tonner oder ein größerer
            LKW zu deinem Umzugsvolumen passt. Zusätzlich siehst du sofort, ob eher eine Fahrt
            reicht oder ob mehrere Touren realistischer sind.
          </p>
        </div>
        <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
          <LkwRechnerClient />
        </Suspense>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">So nutzt du den Richtwert sinnvoll</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Für private Umzüge ist nicht nur das Ladevolumen wichtig, sondern auch Strecke,
            Parkmöglichkeiten, Tragewege und die verfügbare Helferzahl. Ein kleineres Fahrzeug mit
            zwei Fahrten kann bei kurzen Distanzen ausreichen, während bei längeren Strecken meist
            jede zusätzliche Fahrt Zeit und Geld kostet.
          </p>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Wenn du den Aufwand nicht nur fahrzeugseitig, sondern auch preislich einordnen willst,
            kannst du den Richtwert direkt mit unserem{" "}
            <a href="/rechner/" className="text-[#0088CC] hover:underline">
              Umzugskosten-Rechner
            </a>{" "}
            kombinieren.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Wichtige Stolperfallen bei der Fahrzeugwahl</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#5A7A8A]">
            <li>Zu knapp kalkuliertes Volumen führt fast immer zu Zusatzfahrten.</li>
            <li>Schwere Möbel brauchen nicht nur Platz, sondern gute Beladbarkeit und Helfer.</li>
            <li>Führerschein, Zufahrt und Parkraum begrenzen oft die realistische Fahrzeuggröße.</li>
            <li>Bei Fernumzügen ist ein größerer LKW häufig effizienter als mehrere kleine Touren.</li>
          </ul>
        </section>

        <section className="mt-14" id="faq-lkw-rechner" aria-labelledby="faq-lkw-rechner-h">
          <h2 id="faq-lkw-rechner-h" className="mb-6 text-xl font-bold text-[#0D2137]">
            Häufige Fragen zur Fahrzeuggröße
          </h2>
          <FaqAccordion items={LKW_RECHNER_FAQS} />
        </section>
      </div>
    </>
  );
}
