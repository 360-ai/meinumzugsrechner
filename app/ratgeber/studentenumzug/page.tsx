import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { STUDENTENUMZUG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Studentenumzug: Günstig & stressfrei ins WG-Zimmer 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Tipps für den Studentenumzug: Kosten senken, BAföG-Adressänderung nicht vergessen, Erstausstattung realistisch planen — ohne teure Fehler beim ersten eigenen Umzug.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/studentenumzug/"),
  openGraph: {
    title: "Studentenumzug: Günstig & stressfrei ins WG-Zimmer 2026",
    description: PAGE_DESC,
    url: "/ratgeber/studentenumzug/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Kosten senken: So bleibt der Umzug erschwinglich",
    items: [
      { label: "Beiladung nutzen", text: "Wer beim Termin flexibel ist, kann seinen Hausrat im LKW eines anderen Kunden mitfahren lassen. Das spart oft 30–70 % gegenüber einem Direkttransport — ideal für ein WG-Zimmer voller Sachen." },
      { label: "Gratis-Kartons organisieren", text: "Schwarzes Brett und Aushänge an der Uni sind die erste Anlaufstelle. Auch Supermärkte und Getränkemärkte geben stabile Kartons oft kostenlos ab. Für 20–30 Stück zahlt man so nichts." },
      { label: "Transporter selbst fahren", text: "Für ein WG-Zimmer reicht meist ein Transporter mit 10–15 m³. Führerschein Klasse B genügt bis 3,5 Tonnen. Mietkosten: ab 40–80 Euro pro Tag zzgl. Kraftstoff." },
      { label: "Freunde einspannen — aber richtig", text: "Helfer brauchen klare Aufgaben, ausreichend Verpflegung und einen realistischen Zeitplan. Wer das organisiert, spart die Kosten für Träger. Wer darauf vertraut, dass es irgendwie klappt, riskiert Chaos am Umzugstag." },
    ],
  },
  {
    heading: "Wohnform wählen: WG, Wohnheim oder Einzelwohnung?",
    items: [
      { label: "Studentenwohnheim", text: "Günstigste Option: wenig Nebenkosten, kürzeste Mietvertragslaufzeiten, meist möbliert. Nachteil: Wartelisten, kein freier Markt. Über das Studentenwerk der Uni bewerben — möglichst früh." },
      { label: "WG-Zimmer", text: "Oft kurzfristiger verfügbar als ein Wohnheimplatz und günstiger als eine Einzelwohnung. Küche und manchmal Möbel sind bereits vorhanden — das spart Erstausstattungskosten erheblich." },
      { label: "Einzelwohnung", text: "Mehr Privatsphäre, aber deutlich teurer und mit mehr Erstausstattungsaufwand. Nur sinnvoll, wenn das Budget es zulässt oder ein Vollzeitstudium mit Eigenständigkeit kombiniert werden soll." },
    ],
  },
  {
    heading: "Erstausstattung: Was wirklich nötig ist",
    items: [
      { label: "Tag 1 — ohne das geht gar nichts", text: "Matratze oder Bett, Bettdecke und Bettwäsche, ein Handtuch, Duschvorhang (falls nötig), Seife und Zahnbürste, ein Topf, ein Teller, eine Gabel. Alles andere kann in den ersten Tagen nachgekauft werden." },
      { label: "Erste Woche ergänzen", text: "Küchenmesser, zweite Pfanne, Gläser, Wasserkocher, Staubsauger oder Besen, Schreibtisch und Stuhl, eine Lampe pro Zimmer. Kein Grund, alles auf einmal zu kaufen." },
      { label: "Gebraucht kaufen spart viel", text: "Kleinanzeigen, Facebook Marketplace, WG-Auflösungen: Möbel aus zweiter Hand sind oft stabiler als billiges Neuware-Regal aus dem Discounter. Besonders Matratzen, Sofas und Schreibtische lohnen sich gebraucht." },
      { label: "BAföG-Erstausstattung prüfen", text: "Wer BAföG bezieht und in eine eigene Wohnung zieht, kann unter Umständen eine einmalige Beihilfe für die Wohnungserstausstattung beim Sozialamt beantragen. Das ist kein Darlehen, sondern eine Leistung — Voraussetzungen prüfen." },
    ],
  },
  {
    heading: "Behördliches: Was Studenten häufig vergessen",
    items: [
      { label: "Ummelden beim Einwohnermeldeamt", text: "Pflicht innerhalb von 14 Tagen nach Einzug. Mitzubringen: Personalausweis und Wohnungsgeberbestätigung vom Vermieter." },
      { label: "BAföG-Amt separat informieren", text: "Die Ummeldung beim Einwohnermeldeamt informiert das BAföG-Amt nicht automatisch. Adressänderung direkt beim BAföG-Amt melden — sonst kann es zu Problemen bei der Auszahlung kommen." },
      { label: "Wohngeld-Anspruch prüfen", text: "Studenten haben in der Regel keinen Wohngeld-Anspruch solange sie BAföG-berechtigt sind. Ausnahmen gibt es bei reinen Darlehenszahlern oder gemischten WGs mit nicht-BAföG-Berechtigten. Im Zweifelsfall beim Studentenwerk nachfragen." },
      { label: "Krankenversicherung und Banken", text: "Adresse bei der Krankenkasse und allen Banken aktualisieren. Klingt selbstverständlich, wird aber oft erst nach der ersten falsch zugestellten Post erledigt." },
    ],
  },
  {
    heading: "WG-Einzug: Worauf man achtet",
    items: [
      { label: "Übergabeprotokoll immer machen", text: "Beim Einzug gemeinsam mit dem Vermieter oder den bisherigen Mietern den Zustand des Zimmers festhalten — schriftlich und mit Fotos. Ohne Protokoll ist man bei Auszugsstreitigkeiten schlecht aufgestellt." },
      { label: "Kaution auf separates Konto", text: "Die Kaution darf nicht mit dem normalen Mietkonto vermischt werden. Der Vermieter muss sie auf einem gesonderten Konto anlegen — darauf bestehen." },
      { label: "WG-Vertrag lesen", text: "Wer Untermieter in einer WG ist, hat einen Vertrag mit dem Hauptmieter, nicht mit dem Vermieter. Das hat Konsequenzen für Kündigungsfristen und Haftung. Vertrag vor dem Einzug lesen und verstehen." },
    ],
  },
];

export default function StudentenumzugRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/studentenumzug/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: STUDENTENUMZUG_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-studentenumzug-faq" data={faqLd} />
      <GuideLayout
        title="Studentenumzug: Günstig, organisiert und ohne teure Fehler"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/studentenumzug/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Der erste eigene Umzug — kleines Budget, große Lernkurve</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Für die meisten Studenten ist der Umzug ins WG-Zimmer oder die erste eigene Wohnung auch der erste selbst organisierte Umzug. Budget ist knapp, Erfahrung fehlt, und gleichzeitig stehen Semesterbeginn und Eingewöhnungsphase unmittelbar bevor. Wer ein paar Grundregeln kennt, spart bares Geld — und umgeht die klassischen Fehler, die später teuer werden.
            </p>
          </div>

          {/* Kostenübersicht */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Typische Kosten im Überblick</h2>
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              {[
                { label: "Transporter (1 Tag)", value: "40–80 € + Sprit" },
                { label: "Beiladung", value: "150–400 €" },
                { label: "Erstausstattung", value: "500–2.500 €" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="text-xs text-amber-700 font-medium mb-1">{item.label}</div>
                  <div className="font-semibold text-[#0D2137]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kosten senken */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Kosten senken: So bleibt der Umzug erschwinglich</h2>
            <ul className="space-y-3">
              {[
                { label: "Beiladung nutzen", text: "Wer beim Termin flexibel ist, fährt im LKW eines anderen Kunden mit. Spart 30–70 % gegenüber einem Direkttransport — ideal für ein WG-Zimmer voller Sachen." },
                { label: "Gratis-Kartons organisieren", text: "Schwarzes Brett an der Uni, Supermärkte, Kleinanzeigen. Für 20–30 Kartons zahlt man so oft nichts." },
                { label: "Transporter selbst fahren", text: "Führerschein Klasse B reicht bis 3,5 Tonnen. Ein WG-Zimmer passt meist in 10–15 m³ Laderaum." },
                { label: "Freunde einspannen", text: "Klare Aufgaben, gute Verpflegung, realistischer Zeitplan — dann klappt es. Spontan auf Hilfe hoffen führt oft zu Stress." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Erstausstattung */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Erstausstattung: Was wirklich gebraucht wird</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#0088CC]">Tag 1 — ohne das geht gar nichts</p>
                <ul className="space-y-1.5">
                  {["Matratze, Bettdecke, Bettwäsche", "Handtuch, Duschvorhang, Seife", "Ein Topf, ein Teller, eine Gabel, ein Glas", "Wasserkocher, Toilettenpapier"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#5A7A8A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#FF7700]">Erste Woche nachrüsten</p>
                <ul className="space-y-1.5">
                  {["Pfanne, Küchenmesser, Schneidebrett", "Staubsauger oder Besen, Putzmittel", "Schreibtisch und Stuhl, eine Lampe", "Schlüsselhalter, Türstopper, Werkzeugset"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#5A7A8A]">
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#5A7A8A]">Den Rest kauft man in Ruhe in den ersten Wochen nach — gebraucht ist bei Möbeln oft besser als billig neu.</p>
          </div>

          {/* Behördliches */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was Studenten am häufigsten vergessen</h2>
            <ul className="space-y-3">
              {[
                { label: "BAföG-Amt separat informieren", text: "Die Ummeldung beim Einwohnermeldeamt informiert das BAföG-Amt nicht. Adressänderung direkt dort melden — sonst drohen Auszahlungsprobleme." },
                { label: "Wohnungsgeberbestätigung vom Vermieter", text: "Ohne dieses Dokument ist die Ummeldung nicht möglich. Den Vermieter direkt beim Einzug darum bitten." },
                { label: "Übergabeprotokoll beim Einzug", text: "Zustand des Zimmers schriftlich und per Foto festhalten. Ohne Protokoll ist man bei Auszugsstreitigkeiten schlecht aufgestellt." },
                { label: "Krankenkasse und Bank", text: "Adresse aktualisieren, sonst gehen wichtige Unterlagen an die alte Adresse." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700", marginTop: "6px" }} />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
            <div className="space-y-3">
              {STUDENTENUMZUG_FAQS.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0D2137] list-none">
                    {faq.question}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 flex-shrink-0 text-[#0088CC] transition-transform group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[#5A7A8A]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
            <strong>Was kostet ein Studentenumzug in Ihrer Region?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> gibt einen realistischen Preiskorridor — ohne Anmeldung und ohne Datenweitergabe.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
