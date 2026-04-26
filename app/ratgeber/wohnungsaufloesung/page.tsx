import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { WOHNUNGSAUFLOESUNG_FAQS } from "@/lib/tool-faq";
import type { GuideSection } from "@/lib/generateGuidePdf";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Wohnungsauflösung: Todesfall, Pflegeheim & Umzug — Ratgeber | meinumzugsrechner.de";
const PAGE_DESC =
  "Wohnungsauflösung nach Todesfall oder Pflegeheimeinzug: Sonderkündigungsrecht § 580 BGB, Vollmacht, Sozialamt, Kosten und Steuern — alles Wichtige kompakt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/wohnungsaufloesung/"),
  openGraph: {
    title: "Wohnungsauflösung: Todesfall, Pflegeheim & Umzug",
    description: PAGE_DESC,
    url: "/ratgeber/wohnungsaufloesung/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Wohnungsauflösung nach Todesfall",
    items: [
      {
        label: "Sonderkündigungsrecht § 580 BGB",
        text: "Erben können das Mietverhältnis innerhalb eines Monats nach Kenntnis des Todesfalls außerordentlich kündigen. Danach gilt die reguläre Frist von drei Monaten.",
      },
      {
        label: "Erbschaftssteuer & Kosten",
        text: "Auflösungskosten zählen als Nachlassverbindlichkeit — innerhalb von 6 Monaten nach dem Tod steuerlich absetzbar.",
      },
    ],
  },
  {
    heading: "Wohnungsauflösung beim Pflegeheimeinzug",
    items: [
      {
        label: "Kein Sonderkündigungsrecht",
        text: "Bei lebendem Mieter gilt die reguläre Kündigungsfrist von drei Monaten.",
      },
      {
        label: "Pflegeversicherung zahlt nicht",
        text: "Die Pflegeversicherung übernimmt die Kosten der Wohnungsauflösung nicht. Bei Mittellosigkeit kann das Sozialamt einspringen (§ 35 SGB XII) — Antrag muss vor Auftragsvergabe gestellt werden.",
      },
      {
        label: "Vollmacht bei Demenz",
        text: "Ohne notariell beglaubigte Vorsorgevollmacht ist eine Kündigung durch Angehörige unwirksam. Betreuungsgericht muss eingeschaltet werden.",
      },
    ],
  },
  {
    heading: "Kosten & Steuer",
    items: [
      {
        label: "Richtwert 60 m²",
        text: "950–1.650 € in deutschen Großstädten, abhängig von Inhalt, Etage und Zustand.",
      },
      {
        label: "Steuerabzug",
        text: "Nachlassverbindlichkeit bei Erbschaftssteuer oder haushaltsnahe Dienstleistungen § 35a EStG (20 %, max. 4.000 € Ersparnis/Jahr).",
      },
    ],
  },
];

export default function WohnungsaufloeungPage() {
  return (
    <>
      <JsonLd
        id="ld-wohnungsaufloesung-faq"
        data={webPageAndFaqSchema({
          path: "/ratgeber/wohnungsaufloesung/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: WOHNUNGSAUFLOESUNG_FAQS,
        })}
      />
      <GuideLayout
        title="Wohnungsauflösung: Todesfall, Pflegeheim & Umzug"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/wohnungsaufloesung/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Warum die Wohnungsauflösung so oft unterschätzt wird
          </h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Eine Wohnung aufzulösen ist selten nur eine logistische Aufgabe. Meist entsteht der
            Handlungsdruck in einer emotional belastenden Situation — nach einem Todesfall oder weil
            ein Elternteil ins Pflegeheim muss. Gleichzeitig laufen Fristen, Verträge müssen
            gekündigt werden, und oft ist unklar, wer eigentlich handeln darf. Dieser Ratgeber
            klärt die rechtlichen Grundlagen, typische Kostenpositionen und praktische Schritte
            — damit Sie in einer schwierigen Phase den Überblick behalten.
          </p>
        </div>

        {/* Todesfall */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Wohnungsauflösung nach einem Todesfall
          </h2>

          <h3 className="mb-2 text-sm font-bold text-[#0D2137]">
            Sonderkündigungsrecht § 580 BGB
          </h3>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Verstirbt ein Mieter, treten die Erben automatisch in das Mietverhältnis ein. Sie
            können es dann innerhalb eines Monats nach Kenntnis des Todesfalls außerordentlich
            kündigen. Die Kündigung muss schriftlich erfolgen und wird üblicherweise mit einer
            Sterbeurkunde belegt. Nach Ablauf der Monatsfrist gilt die reguläre dreimonatige
            Kündigungsfrist — das Mietverhältnis endet insgesamt frühestens vier Monate nach dem
            Todesfall.
          </p>

          <h3 className="mb-2 text-sm font-bold text-[#0D2137]">
            Wer darf kündigen — und wer muss zahlen?
          </h3>
          <ul className="mb-4 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Erbschein:</strong> Für die Legitimation
                gegenüber dem Vermieter benötigen Erben häufig einen Erbschein oder eine
                notarielle Urkunde.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Erbausschlagung:</strong> Wer das Erbe
                ausschlägt, haftet nicht für Miet- oder Auflösungskosten. Die Frist beträgt
                6 Wochen ab Kenntnis des Erbfalls und muss beim Nachlassgericht erklärt werden.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Kein Erbe vorhanden:</strong> Das Gericht
                bestellt einen Nachlasspfleger, der die Wohnung abwickelt.
              </span>
            </li>
          </ul>

          <div
            className="rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Wichtig zur Frist:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Die Monatsfrist für das Sonderkündigungsrecht beginnt erst ab dem Zeitpunkt, an dem
              die Erben tatsächlich Kenntnis vom Tod erhalten — nicht rückwirkend ab dem
              Sterbedatum.
            </span>
          </div>
        </div>

        {/* Pflegeheim */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Wohnungsauflösung beim Pflegeheimeinzug
          </h2>

          <h3 className="mb-2 text-sm font-bold text-[#0D2137]">
            Kein Sonderkündigungsrecht — andere Regeln gelten
          </h3>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Der Einzug ins Pflegeheim löst kein Sonderkündigungsrecht aus. Die Wohnung muss
            regulär mit drei Monaten Frist gekündigt werden. Das klingt überschaubar, birgt aber
            Fallstricke — besonders wenn die betroffene Person nicht mehr selbst handlungsfähig ist.
            Und: Solange die Wohnung nicht geräumt und übergeben ist, läuft die Miete weiter.
            Diese Doppelbelastung aus Pflegeheimkosten und Miete macht schnelles Handeln häufig
            wirtschaftlich notwendig.
          </p>

          {/* Vollmacht */}
          <h3 className="mb-2 text-sm font-bold text-[#0D2137]">
            Vorsorgevollmacht oder Betreuungsgericht
          </h3>
          <ul className="mb-4 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Mit Vollmacht:</strong> Eine notariell
                beglaubigte Vorsorgevollmacht, die ausdrücklich Wohnungskündigungen einschließt,
                erlaubt Angehörigen, im Namen der Person zu handeln.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Ohne Vollmacht:</strong> Das Betreuungsgericht
                muss eingeschaltet werden. Der bestellte Betreuer braucht gerichtliche Genehmigung
                nach § 1833 BGB, um die Wohnung kündigen zu dürfen. Das kostet Zeit — einplanen.
              </span>
            </li>
          </ul>

          {/* Kosten & Sozialamt */}
          <h3 className="mb-2 text-sm font-bold text-[#0D2137]">
            Wer zahlt die Auflösung?
          </h3>
          <ul className="mb-4 space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Eigenes Vermögen:</strong> Primär trägt die
                betroffene Person die Kosten selbst.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Sozialamt § 35 SGB XII:</strong> Liegt das
                Vermögen unter dem Schonvermögen von 10.000 Euro, kann das Sozialamt einspringen.
                Den Antrag stellen, bevor eine Firma beauftragt wird — nachträgliche Übernahme
                ist selten möglich. Das Sozialamt fordert in der Regel mindestens zwei bis drei
                Vergleichsangebote. Wird ein Antrag abgelehnt, ist Widerspruch möglich und hat
                bei gut begründeten Fällen erfahrungsgemäß gute Erfolgsaussichten.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Pflegeversicherung:</strong> Zahlt die
                Wohnungsauflösung grundsätzlich nicht.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Kinder:</strong> Haften nach dem
                Angehörigen-Entlastungsgesetz nicht persönlich, sofern ihr Bruttoeinkommen unter
                100.000 Euro/Jahr liegt.
              </span>
            </li>
          </ul>

          <div
            className="rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Tipp:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Eine Vorsorgevollmacht, die ausdrücklich Wohnungskündigungen umfasst, erspart im
              Ernstfall Monate. Lassen Sie diese rechtzeitig — also lange vor einem möglichen
              Pflegefall — notariell beglaubigen.
            </span>
          </div>
        </div>

        {/* Kosten & Ablauf */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Kosten und was sie beeinflusst
          </h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Die Kosten für eine Wohnungsauflösung sind variabel. Ein Richtwert für eine 60-m²-Wohnung
            in einer deutschen Großstadt liegt zwischen 950 und 1.650 Euro. Kleinere Städte und
            weniger Inhalt drücken den Preis, Sonderpositionen treiben ihn hoch. Was viele
            unterschätzen: Eine 2- bis 3-Zimmer-Wohnung lässt sich in der Regel an einem einzigen
            Arbeitstag räumen, bei größeren Objekten sollte man zwei bis drei Tage einplanen.
          </p>
          <div
            className="mb-4 rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Kosten senken:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Antiquitäten, Schmuck und hochwertige Möbel lassen sich vorab privat verkaufen —
              über Flohmärkte, Nachbarschaftsgruppen oder Auktionshäuser. Was die Firma nicht
              mehr entsorgen muss, senkt den Preis. Viele Firmen bieten auch aktiv
              Wertanrechnung an: brauchbare Gegenstände werden direkt verrechnet.
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Einflussfaktor</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Wirkung auf den Preis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Wohnungsgröße</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">Grundlage der Kalkulation</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Menge & Art der Gegenstände</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">Mehr Sperrgut = mehr Entsorgungskosten</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Etage & Aufzug</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">Kein Aufzug in hoher Etage: Aufpreis</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Keller / Dachboden</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">Zusätzliche Räume oft vergessen — separat berechnen</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Wertanrechnung</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">Brauchbare Möbel können Preis senken</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Region</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">Städte teurer als ländliche Gebiete</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">Zeitrahmen</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">2–3 Zimmer: 1 Tag · größere Wohnungen: 2–3 Tage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Steuer */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Kosten steuerlich absetzen
          </h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Je nach Situation gibt es zwei Wege, die Auflösungskosten steuerlich geltend zu machen:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Nachlassverbindlichkeit (Todesfall):</strong>{" "}
                Kosten für Wohnungsauflösung, Beerdigung und Grabpflege können innerhalb der
                ersten 6 Monate nach dem Tod als Nachlassverbindlichkeit in der
                Erbschaftssteuererklärung abgezogen werden. Dies lohnt sich, wenn Erbschaftssteuer
                anfällt.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Haushaltsnahe Dienstleistungen § 35a EStG:</strong>{" "}
                Wer keine Erbschaftssteuer zahlt, kann alternativ 20 Prozent der Auflösungskosten
                als haushaltsnahe Dienstleistung abziehen — maximal 4.000 Euro Steuerersparnis
                pro Jahr. Die Firma muss eine Rechnung und Banküberweisung nachweisen, keine
                Barzahlung.
              </span>
            </li>
          </ul>
          <div
            className="mt-4 rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Hinweis:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Beide Wege schließen sich gegenseitig aus. Welcher günstiger ist, hängt vom
              Nachlass und der individuellen Steuersituation ab — im Zweifel einen Steuerberater
              fragen.
            </span>
          </div>
        </div>

        {/* Praktischer Ablauf */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Praktischer Ablauf: Schritt für Schritt
          </h2>
          <ul className="space-y-3">
            {[
              {
                nr: "1",
                label: "Überblick verschaffen",
                text: "Alle Räume besichtigen — inklusive Keller, Dachboden, Garage. Erst wenn Sie wissen, was vorhanden ist, können Sie realistisch planen.",
              },
              {
                nr: "2",
                label: "Erinnerungsstücke sichern",
                text: "Fotos, Dokumente, persönliche Gegenstände sofort aussortieren — bevor eine Firma beauftragt wird. Einmal weg ist weg.",
              },
              {
                nr: "3",
                label: "Dokumente sichern",
                text: "Testament, Versicherungspolicen, Kontoauszüge, Rentenunterlagen, Mietvertrag — alles an einem sicheren Ort sammeln.",
              },
              {
                nr: "4",
                label: "Rechtliche Lage klären",
                text: "Erbschein oder Vollmacht besorgen, ggf. Betreuungsgericht einschalten, Sozialamt kontaktieren (Pflegefall), Frist für § 580 BGB prüfen (Todesfall).",
              },
              {
                nr: "5",
                label: "Mindestens drei Angebote einholen",
                text: "Nur Firmen mit Festpreisangebot und schriftlichem Vertrag beauftragen. Wertanrechnung für brauchbare Gegenstände anfragen.",
              },
              {
                nr: "6",
                label: "Wohnung übergeben",
                text: "Besenreine Übergabe mit Übergabeprotokoll. Kautionsrückforderung und Ummeldung nicht vergessen.",
              },
            ].map((step) => (
              <li key={step.nr} className="flex items-start gap-3 text-sm text-[#5A7A8A]">
                <span
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#0088CC" }}
                >
                  {step.nr}
                </span>
                <span>
                  <strong className="text-[#0D2137]">{step.label}:</strong> {step.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Digitaler Nachlass */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Digitaler Nachlass — oft vergessen
          </h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Neben der physischen Wohnung hinterlässt fast jeder Mensch heute auch einen digitalen
            Nachlass: E-Mail-Konten, Online-Banking, Social-Media-Profile, Streaming-Abonnements.
            Angehörige haben ohne explizite Regelung meist keinen rechtlichen Zugang — Passwörter
            sind nicht automatisch vererbbar.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Passwort-Dokument</strong> mit allen wichtigen
                Zugängen sicher hinterlegen und im Testament oder bei der Vollmacht vermerken.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Abonnements kündigen</strong> (Netflix, Spotify,
                Zeitungen) — laufen sonst weiter und belasten das Konto des Nachlasses.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Social-Media-Profile</strong> können auf
                Gedenkseite umgestellt oder gelöscht werden — Plattformen haben dafür eigene
                Formulare für Angehörige.
              </span>
            </li>
          </ul>
        </div>

        {/* Querlink Entrümpelung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #FF7700" }}
        >
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FF7700]">
            Verwandtes Thema
          </h2>
          <p className="mb-3 text-sm text-[#5A7A8A]">
            Wer eine Wohnung auflöst, steht vor ähnlichen Fragen wie bei einer Entrümpelung —
            was kommt in den Container, was lässt sich noch verkaufen?
          </p>
          <Link
            href="/ratgeber/entruempelung/"
            className="inline-flex items-center text-sm font-medium text-[#0088CC] hover:underline"
          >
            Entrümpelung vor dem Umzug →
          </Link>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Häufige Fragen</h2>
          <FaqAccordion items={WOHNUNGSAUFLOESUNG_FAQS} />
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#EBF6FD" }}>
          <p className="mb-1 text-sm font-bold text-[#0D2137]">
            Umzugskosten nach der Wohnungsauflösung einschätzen
          </p>
          <p className="mb-4 text-sm text-[#5A7A8A]">
            Unser Rechner hilft, den nächsten Schritt zu planen — ohne Anmeldung, ohne Datenweitergabe.
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
