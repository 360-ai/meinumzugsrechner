import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { ERSTE_WOHNUNG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Erste eigene Wohnung: Checkliste, Kosten & Grundausstattung 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Was Sie für die erste eigene Wohnung brauchen: Grundausstattung, laufende Kosten, Mietvertrag, Versicherungen — mit Budget-Übersicht und Checkliste.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "erste eigene Wohnung",
    "erste Wohnung Checkliste",
    "Grundausstattung Wohnung",
    "erste Wohnung Kosten",
    "Erstausstattung Wohnung",
  ],
  ...pageCanonical("/ratgeber/erste-eigene-wohnung/"),
  openGraph: {
    title:
      "Erste eigene Wohnung: Checkliste, Kosten & Grundausstattung 2026",
    description: PAGE_DESC,
    url: "/ratgeber/erste-eigene-wohnung/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {
    heading: "Budget-Übersicht: Einmalige Kosten",
    items: [
      {
        label: "Mietkaution",
        text: "Meist 3 Monatsmieten kalt, also 1.200–2.400 Euro je nach Stadt und Wohnungsgröße.",
      },
      {
        label: "Grundausstattung Möbel",
        text: "Bett, Schrank, Tisch, Stuhl — rechnen Sie mit 1.500–3.000 Euro für Neuware.",
      },
      {
        label: "Küche / Küchengeräte",
        text: "500–2.000 Euro je nach Ausstattung. Viele Mietwohnungen haben keine Einbauküche.",
      },
      {
        label: "Umzug (lokal, 1–2 Zimmer)",
        text: "300–800 Euro mit Umzugsunternehmen, deutlich günstiger in Eigenregie.",
      },
    ],
  },
  {
    heading: "Grundausstattung: Was Sie wirklich brauchen",
    items: [
      {
        label: "Schlafzimmer",
        text: "Bett + Matratze, Bettwäsche, Kleiderschrank oder Kleiderstange.",
      },
      {
        label: "Küche",
        text: "Kühlschrank, Herd/Kochfeld, Topf + Pfanne, Geschirr, Besteck, Schneidebrett + Messer.",
      },
      {
        label: "Bad",
        text: "Handtücher, Duschvorhang, Toilettenpapier, Grundreinigungsmittel.",
      },
      {
        label: "Wohnbereich",
        text: "Schreibtisch/Tisch, Stuhl, Lampe, Mülleimer.",
      },
    ],
  },
  {
    heading: "Laufende Kosten im Überblick",
    items: [
      {
        label: "Warmmiete",
        text: "Abhängig von Stadt und Lage — Faustregel: max. 1/3 des Nettoeinkommens.",
      },
      {
        label: "Strom, Internet, Rundfunkbeitrag",
        text: "Zusammen ca. 85–125 Euro pro Monat.",
      },
      {
        label: "Haftpflicht & Lebensmittel",
        text: "Haftpflichtversicherung ab 5 Euro, Lebensmittel 200–350 Euro monatlich.",
      },
    ],
  },
  {
    heading: "Mietvertrag: Worauf achten?",
    items: [
      {
        label: "Kaltmiete vs. Warmmiete",
        text: "Verstehen, was in den Nebenkosten enthalten ist und was nicht.",
      },
      {
        label: "Kündigungsfrist & Renovierung",
        text: "Standard sind 3 Monate. Renovierungsklausel genau prüfen.",
      },
      {
        label: "Übergabeprotokoll",
        text: "Alle Schäden bei Einzug dokumentieren — schützt vor Streit bei Auszug.",
      },
    ],
  },
  {
    heading: "Versicherungen: Was ist Pflicht?",
    items: [
      {
        label: "Haftpflichtversicherung",
        text: "Absolutes Muss — schon ab 5–10 Euro im Monat.",
      },
      {
        label: "Hausratversicherung",
        text: "Erst lohnenswert, wenn nennenswerter Besitz vorhanden ist.",
      },
      {
        label: "Berufsunfähigkeit",
        text: "Keine Pflicht, aber gerade für Berufseinsteiger empfehlenswert.",
      },
    ],
  },
  {
    heading: "Vor dem Einzug erledigen",
    items: [
      {
        label: "Strom + Gas anmelden",
        text: "Rechtzeitig vor Einzug beim Versorger anmelden.",
      },
      {
        label: "Internet bestellen",
        text: "2–4 Wochen Vorlauf einplanen.",
      },
      {
        label: "Einwohnermeldeamt",
        text: "Innerhalb von 14 Tagen nach Einzug ummelden.",
      },
      {
        label: "Rundfunkbeitrag (GEZ)",
        text: "Eigener Haushalt = eigene Anmeldung.",
      },
    ],
  },
];

export default function ErsteEigeneWohnungPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/erste-eigene-wohnung/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: ERSTE_WOHNUNG_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-erste-wohnung-faq" data={faqLd} />

      <GuideLayout
        title="Erste eigene Wohnung"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/erste-eigene-wohnung/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro: Der große Schritt */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Der große Schritt
          </h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Die erste eigene Wohnung ist aufregend — aber sie braucht Planung.
            Viele unterschätzen die Kosten: Neben der Miete kommen Kaution,
            Erstausstattung und der Umzug selbst dazu. Kalkulieren Sie Ihr
            Budget realistisch, bevor Sie unterschreiben.
          </p>
          <p className="mt-3 text-sm text-[#5A7A8A] leading-relaxed">
            <strong className="text-[#0D2137]">Faustregel:</strong> Die
            Warmmiete sollte maximal ein Drittel Ihres Nettoeinkommens
            ausmachen. Wer 1.800 Euro netto verdient, sollte nicht mehr als
            600 Euro warm zahlen.
          </p>
        </div>

        {/* Budget-Übersicht: Einmalige Kosten */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Budget-Übersicht: Einmalige Kosten
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Position
                  </th>
                  <th className="px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Richtwert
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#5A7A8A]">
                {[
                  ["Mietkaution (3 Monatsmieten)", "1.200–2.400 \u20AC"],
                  ["Grundausstattung Möbel", "1.500–3.000 \u20AC"],
                  ["Küche / Küchengeräte", "500–2.000 \u20AC"],
                  ["Umzug (lokal, 1–2 Zi.)", "300–800 \u20AC"],
                  ["Erstausstattung Haushalt", "200–400 \u20AC"],
                  ["Maklergebühr (falls)", "0–2 Kaltmieten"],
                ].map(([pos, val]) => (
                  <tr
                    key={pos}
                    className="border-t border-slate-100 transition-colors hover:bg-[#FAFCFE]"
                  >
                    <td className="px-4 py-2.5">{pos}</td>
                    <td className="px-4 py-2.5 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grundausstattung: Was Sie wirklich brauchen */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Grundausstattung: Was Sie wirklich brauchen
          </h2>
          <div className="space-y-4">
            {/* Schlafzimmer */}
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">Schlafzimmer</h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Bett + Matratze",
                  "Bettwäsche (mind. 2 Garnituren)",
                  "Kleiderschrank oder Kleiderstange",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Küche */}
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">Küche</h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Kühlschrank",
                  "Herd / Kochfeld",
                  "Topf + Pfanne",
                  "Geschirr (4 Teller, 4 Tassen)",
                  "Besteck",
                  "Schneidebrett + Messer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Bad */}
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">Bad</h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Handtücher",
                  "Duschvorhang",
                  "Toilettenpapier",
                  "Grundreinigungsmittel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Wohnbereich */}
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">Wohnbereich</h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Schreibtisch / Tisch",
                  "Stuhl",
                  "Lampe",
                  "Mülleimer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Tipp gebraucht kaufen */}
          <div
            className="mt-4 rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Tipp:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Gebraucht kaufen (Kleinanzeigen, Sozialkaufhaus) spart 50–70 %
              bei Möbeln und Haushaltsgeräten.
            </span>
          </div>
        </div>

        {/* Laufende Kosten */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Laufende Kosten im Überblick
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Position
                  </th>
                  <th className="px-4 py-2.5 text-left font-bold text-[#0D2137]">
                    Richtwert / Monat
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#5A7A8A]">
                {[
                  ["Warmmiete (inkl. NK)", "je nach Stadt"],
                  ["Strom", "40–60 \u20AC"],
                  ["Internet", "25–45 \u20AC"],
                  ["Rundfunkbeitrag", "18,36 \u20AC"],
                  ["Haftpflichtversicherung", "5–10 \u20AC"],
                  ["Lebensmittel", "200–350 \u20AC"],
                ].map(([pos, val]) => (
                  <tr
                    key={pos}
                    className="border-t border-slate-100 transition-colors hover:bg-[#FAFCFE]"
                  >
                    <td className="px-4 py-2.5">{pos}</td>
                    <td className="px-4 py-2.5 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mietvertrag: Worauf achten? */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Mietvertrag: Worauf achten?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Kaltmiete vs. Warmmiete:
                </strong>{" "}
                Verstehen Sie den Unterschied — die Nebenkosten-Vorauszahlung
                deckt Heizung, Wasser, Müll, aber nicht Strom und Internet.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Kündigungsfrist:</strong>{" "}
                Standard sind 3 Monate zum Monatsende. Kürzere Fristen sind
                möglich, aber selten.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Renovierungsklausel prüfen:
                </strong>{" "}
                Viele Klauseln sind unwirksam. Lesen Sie dazu unseren{" "}
                <Link
                  href="/ratgeber/renovierungspflicht/"
                  className="font-medium text-[#0088CC] hover:underline"
                >
                  Ratgeber zur Renovierungspflicht
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Übergabeprotokoll bei Einzug:
                </strong>{" "}
                Dokumentieren Sie jeden Schaden mit Fotos und lassen Sie das
                Protokoll vom Vermieter unterschreiben.
              </span>
            </li>
          </ul>
        </div>

        {/* Versicherungen */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Versicherungen: Was ist Pflicht?
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
                <strong className="text-[#0D2137]">
                  Haftpflichtversicherung:
                </strong>{" "}
                Absolutes Muss — deckt Schäden, die Sie Dritten zufügen. Schon
                ab 5–10 Euro im Monat.
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
                <strong className="text-[#0D2137]">
                  Hausratversicherung:
                </strong>{" "}
                Erst lohnenswert, wenn Sie nennenswerten Besitz haben. In der
                ersten Wohnung oft verzichtbar.
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
                <strong className="text-[#0D2137]">
                  Berufsunfähigkeit:
                </strong>{" "}
                Keine Pflicht, aber gerade für Berufseinsteiger empfehlenswert —
                je jünger, desto günstiger der Einstieg.
              </span>
            </li>
          </ul>
        </div>

        {/* Vor dem Einzug erledigen — Info-Box orange */}
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Vor dem Einzug erledigen
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
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
                <strong className="text-[#0D2137]">Strom + Gas anmelden</strong>{" "}
                — rechtzeitig vor dem Einzugstermin
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
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
                <strong className="text-[#0D2137]">Internet bestellen</strong>{" "}
                — 2–4 Wochen Vorlauf einplanen
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
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
                <strong className="text-[#0D2137]">Einwohnermeldeamt</strong>{" "}
                — innerhalb von 14 Tagen nach Einzug ummelden
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
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
                <strong className="text-[#0D2137]">GEZ anmelden</strong>{" "}
                — eigener Haushalt = eigene Anmeldung
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
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
                <strong className="text-[#0D2137]">Nachsendeauftrag</strong>{" "}
                — bei der Post online beauftragen (ca. 30 Euro / 12 Monate)
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
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
                <strong className="text-[#0D2137]">
                  Schlüsselübergabe + Übergabeprotokoll
                </strong>{" "}
                — alle Schäden fotografieren und dokumentieren
              </span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Häufige Fragen
          </h2>
          <FaqAccordion items={ERSTE_WOHNUNG_FAQS} />
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: "#EBF6FD" }}
        >
          <p className="mb-4 font-bold text-[#0D2137]">
            Was kostet Ihr Umzug in die erste Wohnung?
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
