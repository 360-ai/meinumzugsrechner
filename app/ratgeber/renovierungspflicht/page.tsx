import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { RENOVIERUNGSPFLICHT_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Renovierungspflicht beim Auszug: Was Mieter wirklich müssen | meinumzugsrechner.de";
const PAGE_DESC =
  "Schönheitsreparaturen beim Auszug — wann Sie renovieren müssen, welche Klauseln unwirksam sind und was 'besenrein' wirklich bedeutet.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Renovierungspflicht Auszug",
    "Schönheitsreparaturen Mietrecht",
    "Wohnung streichen Auszug",
    "besenrein Bedeutung",
    "Renovierung beim Umzug",
  ],
  ...pageCanonical("/ratgeber/renovierungspflicht/"),
  openGraph: {
    title:
      "Renovierungspflicht beim Auszug: Was Mieter wirklich müssen",
    description: PAGE_DESC,
    url: "/ratgeber/renovierungspflicht/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {
    heading: "Was sind Schönheitsreparaturen?",
    items: [
      {
        label: "Tapezieren, Anstreichen, Kalken",
        text: "Wände und Decken tapezieren, anstreichen oder kalken gehört zu den klassischen Schönheitsreparaturen.",
      },
      {
        label: "Streichen von Böden und Heizkörpern",
        text: "Fußböden, Heizkörper, Innentüren sowie Fenster und Außentüren von innen streichen.",
      },
      {
        label: "Nicht dazugehörend",
        text: "Parkett abschleifen, Teppich erneuern, Außenanstrich und Reparaturen an der Bausubstanz sind KEINE Schönheitsreparaturen.",
      },
    ],
  },
  {
    heading: "Wann müssen Sie renovieren — und wann nicht?",
    items: [
      {
        label: "Wirksame Klausel erforderlich",
        text: "Nur wenn der Mietvertrag eine wirksame Schönheitsreparaturklausel enthält und Sie die Wohnung renoviert übernommen haben.",
      },
      {
        label: "Unrenoviert übernommen",
        text: "Wer die Wohnung unrenoviert übernommen hat, darf sie unrenoviert zurückgeben (BGH 2015).",
      },
      {
        label: "Keine Klausel im Vertrag",
        text: "Enthält der Mietvertrag keine Renovierungsklausel, besteht keine Renovierungspflicht.",
      },
    ],
  },
  {
    heading: "Unwirksame Klauseln im Mietvertrag",
    items: [
      {
        label: "Starre Fristenpläne",
        text: "Klauseln wie 'alle 3 Jahre Küche streichen' sind unwirksam, da sie den tatsächlichen Zustand nicht berücksichtigen.",
      },
      {
        label: "Endrenovierungsklausel",
        text: "Eine Pflicht, bei Auszug immer zu renovieren, benachteiligt Mieter unangemessen.",
      },
      {
        label: "Fachhandwerkerklausel",
        text: "Die Vorgabe, nur durch einen Maler renovieren zu lassen, ist wegen unangemessener Kostenlast unwirksam.",
      },
    ],
  },
  {
    heading: "Besenrein: Was bedeutet das wirklich?",
    items: [
      {
        label: "Grob gereinigt",
        text: "Böden gefegt oder gesaugt, keine groben Verschmutzungen, keine persönlichen Gegenstände.",
      },
      {
        label: "Keine professionelle Reinigung",
        text: "Besenrein bedeutet nicht: professionelle Grundreinigung oder blitzblanke Fenster.",
      },
    ],
  },
  {
    heading: "Übergabeprotokoll: Ihr Schutzschild",
    items: [
      {
        label: "Bei Ein- und Auszug erstellen",
        text: "Zählerstände notieren, Mängel fotografieren und beschreiben, von beiden Parteien unterschreiben lassen.",
      },
      {
        label: "Schlüsselübergabe dokumentieren",
        text: "Anzahl und Art der übergebenen Schlüssel festhalten. Fotos mit Zeitstempel dienen als Beweismittel.",
      },
    ],
  },
  {
    heading: "Was tun bei Streit?",
    items: [
      {
        label: "Mieterschutzbund",
        text: "Rechtsberatung für Mitglieder, Beitrag ca. 60–90 Euro pro Jahr.",
      },
      {
        label: "Anwaltliche Beratung",
        text: "Erstberatung ca. 50–200 Euro. Wichtig: Nichts voreilig renovieren — erst Rechtslage prüfen.",
      },
    ],
  },
];

export default function RenovierungspflichtPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/renovierungspflicht/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: RENOVIERUNGSPFLICHT_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-renovierungspflicht-faq" data={faqLd} />

      <GuideLayout
        title="Renovierungspflicht beim Auszug"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/renovierungspflicht/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Die häufigste Streitfrage beim Auszug
          </h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Renovierungspflicht ist einer der häufigsten Streitpunkte zwischen
            Mieter und Vermieter. Viele Mietverträge enthalten unwirksame
            Klauseln, die Mieter zu Schönheitsreparaturen verpflichten sollen.
            Der Bundesgerichtshof hat in mehreren Grundsatzurteilen die Rechte
            der Mieter deutlich gestärkt. Dieser Ratgeber klärt auf, was Sie
            beim Auszug wirklich renovieren müssen — und wann Sie sich die
            Arbeit sparen können.
          </p>
        </div>

        {/* Was sind Schönheitsreparaturen? */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Was sind Schönheitsreparaturen?
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Tapezieren, Anstreichen oder Kalken der Wände und Decken
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Streichen der Fußböden, Heizkörper und Innentüren
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Streichen der Fenster und Außentüren von innen
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF4444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Nicht dazugehörend:</strong>{" "}
                Parkett abschleifen, Teppich erneuern, Außenanstrich,
                Reparaturen an der Bausubstanz
              </span>
            </li>
          </ul>
        </div>

        {/* Wann müssen Sie renovieren? */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Wann müssen Sie renovieren — und wann nicht?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Grundregel:</strong>{" "}
                Nur wenn der Mietvertrag eine wirksame Klausel enthält
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Und:</strong>{" "}
                Sie die Wohnung in renoviertem Zustand übernommen haben
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Unrenoviert übernommen:
                </strong>{" "}
                Unrenoviert zurückgeben — BGH-Urteil von 2015 schützt Sie
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Teilrenoviert übernommen:
                </strong>{" "}
                Quotenklausel kann greifen, ist aber oft unwirksam
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Keine Klausel im Vertrag:
                </strong>{" "}
                Keine Renovierungspflicht
              </span>
            </li>
          </ul>
        </div>

        {/* Unwirksame Klauseln — Tabelle */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Unwirksame Klauseln im Mietvertrag
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="rounded-tl-lg px-4 py-3 text-left font-bold text-[#0D2137]">
                    Klausel
                  </th>
                  <th className="rounded-tr-lg px-4 py-3 text-left font-bold text-[#0D2137]">
                    Warum unwirksam?
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#5A7A8A]">
                <tr className="border-b border-slate-100 transition-colors hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">
                    Starre Fristenpläne
                  </td>
                  <td className="px-4 py-3">
                    Keine Berücksichtigung des tatsächlichen Zustands
                    (z.&nbsp;B. &quot;alle 3 Jahre Küche streichen&quot;)
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">
                    Endrenovierungsklausel
                  </td>
                  <td className="px-4 py-3">
                    &quot;Bei Auszug immer renovieren&quot; benachteiligt Mieter
                    unangemessen
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">
                    Farbvorgabe während der Mietzeit
                  </td>
                  <td className="px-4 py-3">
                    Einschränkung des Gebrauchsrechts (BGH 2009)
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">
                    Renovierung bei unrenovierter Übernahme
                  </td>
                  <td className="px-4 py-3">
                    Mieter würde Wohnung aufwerten müssen
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">
                    Fachhandwerkerklausel
                  </td>
                  <td className="px-4 py-3">
                    &quot;Nur durch Maler&quot; — unangemessene Kostenlast
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Besenrein */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Besenrein: Was bedeutet das wirklich?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Grob gereinigt:</strong>{" "}
                Böden gefegt oder gesaugt, keine groben Verschmutzungen
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                Keine persönlichen Gegenstände in der Wohnung
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Nicht erforderlich:</strong>{" "}
                Professionelle Grundreinigung oder blitzblanke Fenster
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                Besenrein ist der Mindeststandard — unabhängig von der
                Renovierungsklausel
              </span>
            </li>
          </ul>
        </div>

        {/* Übergabeprotokoll */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Übergabeprotokoll: Ihr Schutzschild
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Bei Ein- <strong className="text-[#0D2137]">und</strong> Auszug
                erstellen
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Zählerstände notieren (Strom, Gas, Wasser)
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Vorhandene Mängel und Schäden fotografieren + beschreiben
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Von beiden Parteien unterschreiben lassen
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                Schlüsselübergabe dokumentieren
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Tipp:</strong> Fotos mit
                Zeitstempel sind Beweismittel
              </span>
            </li>
          </ul>
        </div>

        {/* Info-Box: Was tun bei Streit? */}
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Was tun bei Streit?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF7700]" />
              <span>
                <strong className="text-[#0D2137]">Mieterschutzbund:</strong>{" "}
                Rechtsberatung für Mitglieder (60–90 Euro/Jahr)
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF7700]" />
              <span>
                <strong className="text-[#0D2137]">Schlichtungsstelle:</strong>{" "}
                Vor Gericht oft vorgeschrieben
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF7700]" />
              <span>
                <strong className="text-[#0D2137]">
                  Anwaltliche Beratung:
                </strong>{" "}
                Erstberatung ca. 50–200 Euro
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF7700]" />
              <span>
                <strong className="text-[#0D2137]">Wichtig:</strong> Nichts
                voreilig renovieren — erst Rechtslage prüfen
              </span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Häufige Fragen
          </h2>
          <FaqAccordion items={RENOVIERUNGSPFLICHT_FAQS} />
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: "#EBF6FD" }}
        >
          <p className="mb-4 font-bold text-[#0D2137]">
            Umzugskosten jetzt berechnen
          </p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner →
          </Link>
        </div>
      </GuideLayout>
    </>
  );
}
