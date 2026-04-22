import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { KartonrechnerClient } from "@/components/KartonrechnerClient";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { KARTONRECHNER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "Kartonrechner: Wie viele Umzugskartons brauche ich? | meinumzugsrechner.de";
const PAGE_DESC =
  "Kostenloser Kartonrechner für deinen Umzug: Kartonbedarf nach Packzonen, Haushaltsprofil, schweren Inhalten und Reserve schätzen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/kartonrechner/"),
  openGraph: {
    title: "Kartonrechner: Wie viele Umzugskartons brauche ich?",
    description: PAGE_DESC,
    url: "/kartonrechner/",
  },
};

export default function KartonrechnerPage() {
  const ld = webPageAndFaqSchema({
    path: "/kartonrechner/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: KARTONRECHNER_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-kartonrechner" data={ld} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">
            Kartonrechner für den Umzug
          </h1>
          <p className="mt-3 leading-relaxed text-[#5A7A8A]">
            Der Kartonrechner gibt dir in wenigen Klicks einen belastbaren Richtwert für deinen
            Kartonbedarf. Statt nur eine pauschale Zimmerzahl zu nutzen, rechnest du nach
            Packzonen: Räume, Küche, Bücher, Kleidung, Zerbrechliches und Stauraum.
          </p>
        </div>
        <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
          <KartonrechnerClient />
        </Suspense>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Wofür der Rechner gut ist</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Der Richtwert hilft vor allem bei der Einkaufsplanung: Wie viele Alltagskartons
            sollten bereitstehen, wie viel Reserve ist sinnvoll und welche Inhalte brauchen eher
            kleine, stabile oder gut gepolsterte Kartons. Gerade bei größeren Haushalten spart das
            unnötige Nachbestellungen kurz vor dem Umzug.
          </p>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Wenn du zusätzlich abschätzen möchtest, welches Fahrzeug du brauchst oder was ein
            professioneller Umzug ungefähr kostet, passen dazu auch unser{" "}
            <a href="/lkw-rechner/" className="text-[#0088CC] hover:underline">
              LKW-Rechner
            </a>{" "}
            und der{" "}
            <a href="/rechner/?mode=einfach" className="text-[#0088CC] hover:underline">
              schnelle Umzugskosten-Rechner
            </a>
            .
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Praktische Faustregeln</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#5A7A8A]">
            <li>Schwere Inhalte lieber auf mehrere kleine, tragbare Kartons verteilen.</li>
            <li>Hängende Kleidung separat planen, wenn sie nicht gefaltet werden soll.</li>
            <li>Glas, Elektronik und Erinnerungsstücke brauchen mehr Polsterraum als gedacht.</li>
            <li>Plane rund 10 bis 15 Prozent Reserve ein, damit am Umzugstag nichts knapp wird.</li>
          </ul>
        </section>

        <section className="mt-14" id="faq-kartonrechner" aria-labelledby="faq-kartonrechner-h">
          <h2 id="faq-kartonrechner-h" className="mb-6 text-xl font-bold text-[#0D2137]">
            Häufige Fragen zum Kartonbedarf
          </h2>
          <FaqAccordion items={KARTONRECHNER_FAQS} />
        </section>
      </div>
    </>
  );
}
