import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { METHODOLOGY_FAQS } from "@/lib/methodology-faq";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "So rechnen wir: Methodik & Preiskorridor | meinumzugsrechner.de";
const DESC =
  "Wie der Umzugskosten-Rechner arbeitet: Regionalfaktoren, Zeitwerte, typische Zusatzkosten und ein Rechenbeispiel — transparent erklärt.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  ...pageCanonical("/so-rechnen-wir/"),
  openGraph: { title: "So rechnen wir", description: DESC, url: "/so-rechnen-wir/" },
  robots: { index: true, follow: true },
};

export default function SoRechnenWirPage() {
  const ld = webPageAndFaqSchema({
    path: "/so-rechnen-wir/",
    title: TITLE,
    description: DESC,
    faqs: METHODOLOGY_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-so-rechnen-wir" data={ld} />
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6">
        <nav className="text-sm text-[#5A7A8A] mb-6">
          <Link href="/" className="hover:text-[#0088CC]">
            Start
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0D2137]">So rechnen wir</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">So rechnen wir</h1>
        <p className="mt-3 text-[#5A7A8A] leading-relaxed">
          Hier beschreiben wir, wie aus Ihren Eingaben ein <strong className="text-[#0D2137]">Preiskorridor</strong>{" "}
          entsteht — ohne Behauptung eines Festpreises und ohne Ihre Daten an Umzugsfirmen zu übermitteln.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Grundlagen</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5A7A8A] leading-relaxed">
            <li>
              <strong className="text-[#0D2137]">Personalkosten:</strong> Die geschätzte Dauer wird mit
              Stundensätzen für Umzugshelfer in Ihrer Region bewertet (inkl. Mindestzeiten).
            </li>
            <li>
              <strong className="text-[#0D2137]">Transport:</strong> Zur Kalkulation gehören u. a. eine
              Lkw-Grundpauschale und eine Kilometerkomponente für die Strecke zwischen Auszug und Einzug.
            </li>
            <li>
              <strong className="text-[#0D2137]">Gebäude &amp; Weg:</strong> Etage ohne Aufzug, enge
              Treppenhäuser, Parkentfernung und Gebäudetyp können als Zuschläge einfließen.
            </li>
            <li>
              <strong className="text-[#0D2137]">Termin:</strong> Wochenende oder hohe Nachfrage können über
              einen Tagesfaktor berücksichtigt werden.
            </li>
            <li>
              <strong className="text-[#0D2137]">Volumen:</strong> Bei der detaillierten Erfassung leiten wir
              das Transportvolumen aus Möbelstücken und Kartons ab; bei der Schnellschätzung nutzen wir eine
              Heuristik aus Wohnfläche und Zimmeranzahl.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Genauigkeit</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Marktpreise schwanken je nach Saison, Auslastung und Auftragsdetails. Realistisch sind oft
            Abweichungen in der Größenordnung von etwa ±20–30 % zu unserem Korridor — bei Sperrgut,
            schwierigen Zufahrten oder kurzfristiger Buchung auch mehr. Nutzen Sie das Ergebnis als{" "}
            <strong className="text-[#0D2137]">Orientierung</strong> und holen Sie mehrere Festpreisangebote
            ein.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Typische Zusatzkosten (Richtwerte)</h2>
          <p className="text-sm text-[#5A7A8A]">
            Diese Positionen sind oft <em>nicht</em> in einem einfachen Pauschalpreis enthalten — deshalb
            tauchen sie in Angeboten separat auf. Beträge sind Erfahrungsrahmen für Deutschland, keine
            Garantie.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#EBF6FD] text-left text-[#0D2137]">
                  <th className="px-4 py-3 font-bold">Leistung</th>
                  <th className="px-4 py-3 font-bold">Typischer Preisrahmen</th>
                  <th className="px-4 py-3 font-bold">Hinweis</th>
                </tr>
              </thead>
              <tbody className="text-[#5A7A8A] divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3">Küche demontieren / montieren</td>
                  <td className="px-4 py-3 whitespace-nowrap">ca. 250–450 €</td>
                  <td className="px-4 py-3">Abhängig von Küchentyp und Elektro</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Möbelmontage (komplett)</td>
                  <td className="px-4 py-3 whitespace-nowrap">ca. 150–350 €</td>
                  <td className="px-4 py-3">Oft pro Raum oder Stückliste</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Einpackservice (komplett)</td>
                  <td className="px-4 py-3 whitespace-nowrap">ca. 200–500 €</td>
                  <td className="px-4 py-3">Material oft extra</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Halteverbotszone beantragen</td>
                  <td className="px-4 py-3 whitespace-nowrap">ca. 50–120 €</td>
                  <td className="px-4 py-3">Behörde + ggf. Schilderstellung</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Klaviertransport</td>
                  <td className="px-4 py-3 whitespace-nowrap">ca. 200–500 €</td>
                  <td className="px-4 py-3">Flügel deutlich höher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Umzugskartons (20 Stück, neu)</td>
                  <td className="px-4 py-3 whitespace-nowrap">ca. 25–45 €</td>
                  <td className="px-4 py-3">
                    Bedarf auch mit unserem{" "}
                    <Link href="/kartonrechner/" className="text-[#0088CC] hover:underline">
                      Kartonrechner
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Rechenbeispiel (vereinfacht)</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            <strong className="text-[#0D2137]">Ausgangslage:</strong> Familie zieht mit einer
            detailliert erfassten 3-Zimmer-Wohnung (ca. 75 m² Wohnfläche) über etwa 80 km innerhalb
            Deutschlands — Umzug unter der Woche, normale Zufahrt, Aufzug vorhanden.
          </p>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Der Rechner ermittelt daraus u. a. Personalzeit, Transportanteil und regionale Faktoren und
            zeigt einen <strong className="text-[#0D2137]">Korridor</strong> (z. B. zwei gerundete Beträge
            als Unter- und Obergrenze). So sehen Sie schnell, ob spätere Angebote im erwartbaren Rahmen
            liegen — ohne dass wir einen Festpreis versprechen.
          </p>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            <strong className="text-[#0D2137]">Steuern &amp; Absetzbarkeit:</strong> Ob und wie Sie Kosten
            absetzen können, hängt von Ihrer Situation ab — siehe{" "}
            <Link href="/ratgeber/steuerspartipps/" className="text-[#0088CC] hover:underline">
              Steuern sparen beim Umzug
            </Link>
            .
          </p>
        </section>

        <section className="mt-10 rounded-2xl bg-[#EBF6FD] p-6">
          <h2 className="text-lg font-bold text-[#0D2137]">Jetzt selbst rechnen</h2>
          <p className="mt-2 text-sm text-[#5A7A8A]">
            Schnellschätzung oder detaillierte Möbelliste — Sie wählen im Rechner den passenden Modus.
          </p>
          <Link
            href="/rechner/"
            className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold text-[#0D2137] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner →
          </Link>
        </section>

        <section className="mt-14" id="faq-methodik" aria-labelledby="faq-methodik-h">
          <h2 id="faq-methodik-h" className="text-xl font-bold text-[#0D2137] mb-6">
            Fragen zur Methodik
          </h2>
          <FaqAccordion items={METHODOLOGY_FAQS} />
        </section>
      </div>
    </>
  );
}
