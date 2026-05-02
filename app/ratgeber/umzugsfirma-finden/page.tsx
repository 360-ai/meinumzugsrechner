import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { UMZUGSFIRMA_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Umzugsfirma finden: Seriositäts-Check, Kosten & Vertragstipps | meinumzugsrechner.de";
const PAGE_DESC =
  "Woran Sie eine seriöse Umzugsfirma erkennen, was im Vertrag stehen muss und wie Sie Angebote richtig vergleichen — ohne auf Abzocker hereinzufallen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Umzugsfirma finden",
    "seriöse Umzugsfirma",
    "Umzugsfirma Kosten",
    "Umzugsunternehmen Vergleich",
    "Umzugsfirma Vertrag",
  ],
  ...pageCanonical("/ratgeber/umzugsfirma-finden/"),
  openGraph: {
    title:
      "Umzugsfirma finden: Seriositäts-Check, Kosten & Vertragstipps",
    description: PAGE_DESC,
    url: "/ratgeber/umzugsfirma-finden/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {
    heading: "Seriositäts-Check: 8 Warnsignale",
    items: [
      {
        label: "Kein Festpreisangebot",
        text: "Nur Stundensatz am Telefon — seriöse Firmen kalkulieren nach Aufwand und bieten einen verbindlichen Kostenvoranschlag.",
      },
      {
        label: "Keine Vor-Ort-Besichtigung",
        text: "Wer den Umfang nicht kennt, kann keinen realistischen Preis nennen. Seriöse Anbieter besichtigen immer vor Ort oder per Video.",
      },
      {
        label: "Vorauszahlung verlangt",
        text: "Zahlung vor dem Umzug ist unüblich. Bezahlt wird nach Abschluss der Arbeiten.",
      },
      {
        label: "Extrem günstiger Preis",
        text: "Liegt ein Angebot deutlich unter dem Markt, folgen oft Nachforderungen am Umzugstag.",
      },
    ],
  },
  {
    heading: "So vergleichen Sie Angebote richtig",
    items: [
      {
        label: "Mindestens 3 Angebote",
        text: "Holen Sie mindestens drei Angebote ein, idealerweise nach Vor-Ort-Besichtigung.",
      },
      {
        label: "Leistungsumfang vergleichen",
        text: "Nicht nur den Preis, sondern auch den Umfang: Verpackung, Montage, Versicherung — was ist inklusive?",
      },
      {
        label: "Festpreis vs. Stundensatz",
        text: "Festpreise geben Planungssicherheit. Stundenpreise können bei Verzögerungen teuer werden.",
      },
    ],
  },
  {
    heading: "Was muss im Vertrag stehen?",
    items: [
      {
        label: "Umzugsdatum und Zeitfenster",
        text: "Verbindlicher Termin mit Start- und voraussichtlicher Endzeit.",
      },
      {
        label: "Leistungsbeschreibung",
        text: "Detailliert: Was wird transportiert, was wird montiert, was wird verpackt.",
      },
      {
        label: "Gesamtpreis",
        text: "Verbindlicher Gesamtpreis oder Kostenvoranschlag mit maximalem Aufschlag.",
      },
      {
        label: "Versicherung & Haftung",
        text: "Versicherungsumfang, Summe, Selbstbeteiligung und Haftung bei Beschädigung.",
      },
    ],
  },
  {
    heading: "Transportversicherung: Das Minimum",
    items: [
      {
        label: "Gesetzliches Minimum",
        text: "Branchenüblich sind 620 Euro pro Kubikmeter Ladegut (AMÖ-Bedingungen) — reicht oft nicht für hochwertige Möbel oder Elektronik.",
      },
      {
        label: "Zusatzversicherung",
        text: "Für Einzelstücke mit hohem Wert lohnt sich eine separate Zusatzversicherung.",
      },
      {
        label: "Hausratversicherung prüfen",
        text: "Viele Hausratversicherungen decken Umzugsschäden bereits mit ab — vorher prüfen.",
      },
    ],
  },
  {
    heading: "Kosten richtig einschätzen",
    items: [
      {
        label: "1–2 Zimmer",
        text: "Lokal (< 50 km): 400–900 Euro. Fernumzug (> 100 km): 800–1.800 Euro.",
      },
      {
        label: "3 Zimmer",
        text: "Lokal: 800–1.800 Euro. Fernumzug: 1.500–3.500 Euro.",
      },
      {
        label: "4–5 Zimmer",
        text: "Lokal: 1.200–2.800 Euro. Fernumzug: 2.500–5.000 Euro.",
      },
    ],
  },
];

export default function UmzugsfirmaFindenPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/umzugsfirma-finden/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: UMZUGSFIRMA_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-umzugsfirma-faq" data={faqLd} />

      <GuideLayout
        title="Umzugsfirma finden"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/umzugsfirma-finden/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Warum die richtige Firma entscheidend ist
          </h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Schwarze Schafe gibt es in der Umzugsbranche leider häufig:
            Lockvogelangebote, saftige Nachforderungen am Umzugstag und fehlende
            Versicherung sind keine Seltenheit. Wer blind bucht, riskiert nicht
            nur sein Budget, sondern auch seine Möbel. Dieser Ratgeber zeigt
            Ihnen Schritt für Schritt, woran Sie seriöse Anbieter erkennen, wie
            Sie Angebote vergleichen und was im Vertrag stehen muss.
          </p>
        </div>

        {/* Seriositäts-Check: 8 Warnsignale */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Seriositäts-Check: 8 Warnsignale
          </h2>
          <ul className="space-y-3">
            {[
              {
                icon: "!",
                color: "#E53E3E",
                label: "Kein Festpreisangebot",
                text: "Nur Stundensatz am Telefon — seriöse Firmen kalkulieren nach Aufwand und bieten einen verbindlichen Kostenvoranschlag.",
              },
              {
                icon: "!",
                color: "#E53E3E",
                label: "Keine Vor-Ort-Besichtigung angeboten",
                text: "Wer den Umfang nicht kennt, kann keinen realistischen Preis nennen. Seriöse Anbieter besichtigen immer vor Ort oder per Video.",
              },
              {
                icon: "!",
                color: "#E53E3E",
                label: "Keine nachvollziehbare Firmenadresse oder Impressum",
                text: "Prüfen Sie Website, Handelsregister und Google Maps. Fehlt ein Impressum, ist das ein klares Warnsignal.",
              },
              {
                icon: "!",
                color: "#DD6B20",
                label: "Vorauszahlung vor dem Umzug verlangt",
                text: "Branchenüblich ist die Zahlung nach Abschluss der Arbeiten. Vorkasse ist ein Warnzeichen.",
              },
              {
                icon: "!",
                color: "#DD6B20",
                label: "Keine schriftliche Auftragsbestätigung",
                text: "Alles Mündliche ist im Streitfall wertlos. Bestehen Sie immer auf einer schriftlichen Bestätigung.",
              },
              {
                icon: "!",
                color: "#DD6B20",
                label: "Keine Transportversicherung vorhanden",
                text: "Ohne Versicherung haften Sie selbst für Schäden an Ihren Möbeln während des Transports.",
              },
              {
                icon: "!",
                color: "#E53E3E",
                label: "Extrem günstiger Preis (deutlich unter Markt)",
                text: "Lockvogelangebote enden fast immer in Nachforderungen am Umzugstag, wenn das Gut bereits auf dem LKW ist.",
              },
              {
                icon: "!",
                color: "#DD6B20",
                label: "Drängen auf sofortigen Vertragsabschluss",
                text: "Seriöse Unternehmen geben Ihnen Bedenkzeit. Zeitdruck ist ein klassisches Mittel unseriöser Anbieter.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 text-sm text-[#5A7A8A]"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </span>
                <span>
                  <strong className="text-[#0D2137]">{item.label}:</strong>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Angebote vergleichen */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            So vergleichen Sie Angebote richtig
          </h2>
          <ul className="space-y-3">
            {[
              "Mindestens 3 Angebote einholen, idealerweise nach Vor-Ort-Besichtigung",
              "Leistungsumfang vergleichen, nicht nur den Preis",
              "Fragen: Was ist inklusive? (Verpackung, Montage, Versicherung)",
              "Festpreis vs. Stundensatz: Festpreis gibt Planungssicherheit",
              "Versicherungssumme und Selbstbeteiligung klären",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 text-sm text-[#5A7A8A]"
              >
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
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertrag */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Was muss im Vertrag stehen?
          </h2>
          <ul className="space-y-2">
            {[
              "Umzugsdatum und Zeitfenster",
              "Start- und Zieladresse",
              "Detaillierte Leistungsbeschreibung (was wird transportiert)",
              "Gesamtpreis oder verbindlicher Kostenvoranschlag",
              "Versicherungsumfang und -summe",
              "Stornierungsbedingungen",
              "Haftung bei Beschädigung",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 text-sm text-[#5A7A8A]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transportversicherung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Transportversicherung: Das Minimum
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Branchenüblicher Standard:
                </strong>{" "}
                620 Euro pro Kubikmeter Ladegut nach den AMÖ-Bedingungen — kein gesetzliches Minimum, sondern
                der in der Branche übliche Haftungsrahmen.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Reicht oft nicht:</strong>{" "}
                Hochwertige Möbel, Elektronik oder Antiquitäten übersteigen
                diesen Wert schnell.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Zusatzversicherung möglich:
                </strong>{" "}
                Für Einzelstücke mit hohem Wert eine separate Zusatzversicherung
                abschließen.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Hausratversicherung prüfen:
                </strong>{" "}
                Viele Hausratversicherungen decken Umzugsschäden bereits mit ab —
                vorher prüfen lohnt sich.
              </span>
            </li>
          </ul>
        </div>

        {/* Kosten-Tabelle */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Kosten richtig einschätzen
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="rounded-tl-lg px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Wohnungsgröße
                  </th>
                  <th className="px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Lokal (&lt; 50 km)
                  </th>
                  <th className="rounded-tr-lg px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Fernumzug (&gt; 100 km)
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#5A7A8A]">
                <tr className="border-b border-slate-100 hover:bg-[#FAFCFE]">
                  <td className="px-4 py-2.5 font-medium text-[#0D2137]">
                    1–2 Zimmer
                  </td>
                  <td className="px-4 py-2.5">400–900 EUR</td>
                  <td className="px-4 py-2.5">800–1.800 EUR</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-[#FAFCFE]">
                  <td className="px-4 py-2.5 font-medium text-[#0D2137]">
                    3 Zimmer
                  </td>
                  <td className="px-4 py-2.5">800–1.800 EUR</td>
                  <td className="px-4 py-2.5">1.500–3.500 EUR</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-2.5 font-medium text-[#0D2137]">
                    4–5 Zimmer
                  </td>
                  <td className="px-4 py-2.5">1.200–2.800 EUR</td>
                  <td className="px-4 py-2.5">2.500–5.000 EUR</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#5A7A8A]">
            Hinweis: Zusatzleistungen (Packen, Montage) erhöhen den Preis um
            20–40 %.
          </p>
        </div>

        {/* Tipp-Box */}
        <div
          className="rounded-2xl border p-4 text-sm"
          style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
        >
          <strong className="text-[#0D2137]">Tipp:</strong>{" "}
          <span className="text-[#5A7A8A]">
            Nutzen Sie unseren{" "}
            <Link
              href="/rechner/"
              className="font-medium text-[#0088CC] hover:underline"
            >
              Umzugskosten-Rechner
            </Link>
            , um vorab einen realistischen Preiskorridor zu ermitteln. So
            erkennen Sie sofort, ob ein Angebot im marktüblichen Rahmen liegt.
          </span>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Häufige Fragen
          </h2>
          <FaqAccordion items={UMZUGSFIRMA_FAQS} />
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: "#EBF6FD" }}
        >
          <p className="mb-4 font-bold text-[#0D2137]">
            Ihren individuellen Preiskorridor berechnen
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
