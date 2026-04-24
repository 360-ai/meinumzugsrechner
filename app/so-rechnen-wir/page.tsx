import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { METHODOLOGY_FAQS } from "@/lib/methodology-faq";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "So rechnen wir: Methodik & Preiskorridor | meinumzugsrechner.de";
const DESC =
  "Wie der Umzugskosten-Rechner arbeitet: marktnahe Schnellschätzung, Detailmodus in Beta und Preisrahmen transparent erklärt.";

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
        <nav className="mb-6 text-sm text-[#5A7A8A]">
          <Link href="/" className="hover:text-[#0088CC]">
            Start
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0D2137]">So rechnen wir</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">So rechnen wir</h1>
        <p className="mt-3 leading-relaxed text-[#5A7A8A]">
          Auf dieser Seite erklären wir, wie aus Ihren Angaben ein{" "}
          <strong className="text-[#0D2137]">nachvollziehbarer Preisrahmen</strong> entsteht. Dabei
          unterscheiden wir bewusst zwischen einer heute schon marktnah kalibrierten
          Schnellschätzung und einer detaillierten Beta-Berechnung, die wir laufend mit
          Praxisdaten verbessern.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Welche Faktoren fließen ein?</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#5A7A8A]">
            <li>
              <strong className="text-[#0D2137]">Schnellmodus:</strong> Die marktnahe
              Schnellschätzung nutzt Wohnfläche, Zimmerzahl, Haushaltsgröße, Region und
              Distanz, um einen belastbaren Orientierungsrahmen abzuleiten.
            </li>
            <li>
              <strong className="text-[#0D2137]">Gebäudesituation:</strong> Etage, Aufzug,
              Treppenhaus, Parkdistanz oder knappe Zufahrten können den Aufwand deutlich
              verändern.
            </li>
            <li>
              <strong className="text-[#0D2137]">Transport und Strecke:</strong> Die Entfernung
              beeinflusst Fahrzeugkosten, Fahrzeit und organisatorischen Aufwand zwischen Auszug und
              Einzug.
            </li>
            <li>
              <strong className="text-[#0D2137]">Termin und Nachfrage:</strong> Stark gefragte Tage,
              kurze Vorlaufzeiten oder saisonale Spitzen wirken sich häufig auf Preise aus.
            </li>
            <li>
              <strong className="text-[#0D2137]">Detailmodus in Beta:</strong> Im Detailmodus werden
              Möbel, Kartons und Besonderheiten genauer erfasst. Die Struktur ist bereits nützlich
              für Angebotsanfragen, der Preisrahmen wird aber noch schrittweise kalibriert.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Warum wir mit einem Korridor arbeiten</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Umzugsangebote unterscheiden sich oft stärker als viele erwarten. Schon kleine Details
            wie lange Laufwege, kurzfristige Buchung, schwere Einzelstücke oder eine enge
            Parksituation können den Aufwand sichtbar erhöhen. Deshalb zeigen wir keinen
            Fantasie-Festpreis, sondern einen Bereich, in dem sich vergleichbare Angebote häufig
            bewegen.
          </p>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Die Schnellschätzung ist dabei unser aktueller Live-Standard für die erste
            Preisorientierung. Der Detailmodus ist bewusst als Werkzeug zur{" "}
            <strong className="text-[#0D2137]">Einordnung und Vorbereitung</strong> markiert, bis
            genug echte Angebotsdaten für eine stabile Kalibrierung vorliegen.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Typische Zusatzkosten im Überblick</h2>
          <p className="text-sm text-[#5A7A8A]">
            Viele Angebote wirken auf den ersten Blick günstig und werden erst durch Zusatzposten
            teurer. Die folgenden Werte sind grobe Erfahrungsrahmen für Deutschland und helfen
            dabei, Angebote besser zu lesen und nachzufragen.
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
              <tbody className="divide-y divide-slate-100 text-[#5A7A8A]">
                <tr>
                  <td className="px-4 py-3">Küche ab- und aufbauen</td>
                  <td className="whitespace-nowrap px-4 py-3">ca. 250-450 EUR</td>
                  <td className="px-4 py-3">Je nach Aufbau, Anschlüssen und Zuschnitt</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Möbelmontage</td>
                  <td className="whitespace-nowrap px-4 py-3">ca. 150-350 EUR</td>
                  <td className="px-4 py-3">Häufig abhängig von Raumzahl und Möbelliste</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Einpackservice</td>
                  <td className="whitespace-nowrap px-4 py-3">ca. 200-500 EUR</td>
                  <td className="px-4 py-3">Verpackungsmaterial wird oft separat berechnet</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Halteverbotszone beantragen</td>
                  <td className="whitespace-nowrap px-4 py-3">ca. 50-120 EUR</td>
                  <td className="px-4 py-3">Gebühren plus mögliche Schilder- und Servicekosten</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Klaviertransport</td>
                  <td className="whitespace-nowrap px-4 py-3">ca. 200-500 EUR</td>
                  <td className="px-4 py-3">Für Flügel oder schwierige Wege meist deutlich mehr</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Umzugskartons (20 Stück, neu)</td>
                  <td className="whitespace-nowrap px-4 py-3">ca. 25-45 EUR</td>
                  <td className="px-4 py-3">
                    Bedarf vorab mit unserem{" "}
                    <Link href="/kartonrechner/" className="text-[#0088CC] hover:underline">
                      Kartonrechner
                    </Link>{" "}
                    abschätzen
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-[#0D2137]">Ein vereinfachtes Beispiel</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            <strong className="text-[#0D2137]">Ausgangslage:</strong> Ein Haushalt mit etwa 75 m2,
            drei Zimmern und normaler Möblierung zieht rund 80 Kilometer weit. Beide Adressen sind
            gut erreichbar, der Termin liegt unter der Woche und ein Aufzug ist vorhanden.
          </p>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Im Schnellmodus leiten wir daraus einen marktnahen Preisrahmen ab, der zu öffentlich
            sichtbaren Vergleichswerten passt. Im Detailmodus können dieselben Angaben später
            um Möbel, Zugänge und Zusatzleistungen ergänzt werden, um eine Angebotsanfrage
            sauberer vorzubereiten.
          </p>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            <strong className="text-[#0D2137]">Steuern &amp; Absetzbarkeit:</strong> Ob und in
            welchem Umfang Kosten steuerlich relevant sind, hängt von Ihrer persönlichen Situation
            ab. Einen kompakten Überblick finden Sie in unserem Beitrag{" "}
            <Link href="/ratgeber/steuerspartipps/" className="text-[#0088CC] hover:underline">
              Steuern sparen beim Umzug
            </Link>
            .
          </p>
        </section>

        <section className="mt-10 rounded-2xl bg-[#EBF6FD] p-6">
          <h2 className="text-lg font-bold text-[#0D2137]">Jetzt selbst rechnen</h2>
          <p className="mt-2 text-sm text-[#5A7A8A]">
            Ob marktnahe Schnellschätzung oder detaillierte Beta-Eingabe: Sie wählen die passende
            Tiefe und sehen sofort, welcher Preisrahmen heute belastbar ist.
          </p>
          <Link
            href="/rechner/"
            className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold text-[#0D2137] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner {"→"}
          </Link>
        </section>

        <section className="mt-14" id="faq-methodik" aria-labelledby="faq-methodik-h">
          <h2 id="faq-methodik-h" className="mb-6 text-xl font-bold text-[#0D2137]">
            Fragen zur Methodik
          </h2>
          <FaqAccordion items={METHODOLOGY_FAQS} />
        </section>
      </div>
    </>
  );
}

