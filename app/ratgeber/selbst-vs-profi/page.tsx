import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { SELBST_VS_PROFI_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Selbst umziehen oder Umzugsfirma? Ehrlicher Vergleich | meinumzugsrechner.de";
const PAGE_DESC =
  "Was kostet wirklich mehr — Eigenregie oder Profi? Ein nüchterner Vergleich nach Aufwand, Risiko und versteckten Kosten.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Umzug selber machen", "Umzugsfirma oder selbst", "DIY Umzug"],
  ...pageCanonical("/ratgeber/selbst-vs-profi/"),
  openGraph: {
    title: "Selbst umziehen oder Umzugsfirma? Ehrlicher Vergleich",
    description: PAGE_DESC,
    url: "/ratgeber/selbst-vs-profi/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Was Eigenregie beim Umzug wirklich bedeutet",
    items: [
      { label: "Zeitaufwand", text: "Ein 3-Zimmer-Haushalt bindet realistisch einen kompletten Urlaubstag — häufig auch zwei." },
      { label: "Organisation", text: "LKW buchen, Helfer koordinieren, Parkgenehmigung beantragen, Werkzeug für Möbelmontage besorgen." },
      { label: "Körperliche Belastung", text: "Kühlschrank, Waschmaschine und Kleiderschrank lassen sich nicht zu zweit ohne Sackkarre und Erfahrung sicher transportieren." },
      { label: "Schäden ohne Absicherung", text: "Wer selbst lädt, haftet selbst — für Kratzer am Parkett, eingedrückte Türrahmen und beschädigte Möbel." },
    ],
  },
  {
    heading: "Was eine Umzugsfirma leistet",
    items: [
      { label: "Zeitersparnis", text: "Profis arbeiten mit eingespielten Abläufen. Was selbst zwei Tage dauert, ist oft in einem Arbeitstag erledigt." },
      { label: "Haftpflicht und Transportversicherung", text: "Seriöse Unternehmen haften für Schäden, die während des Transports entstehen — das ist ein echter Unterschied." },
      { label: "Ausrüstung inklusive", text: "Sackkarren, Möbeldecken, Stretchfolie, Hebebänder und der passende LKW sind im Preis." },
      { label: "Zusatzleistungen buchbar", text: "Küchenmontage, Ein- und Auspacken, Entsorgung alter Möbel — wer das braucht, zahlt gezielt dazu." },
    ],
  },
  {
    heading: "Die versteckten Kosten beim Selbstumzug",
    items: [
      { label: "LKW-Miete", text: "Je nach Größe und Strecke 80–200 € für einen Tag, Kraftstoff nicht eingerechnet." },
      { label: "Urlaubstage", text: "Wer angestellt ist, nimmt Urlaub — das hat einen realen Gegenwert." },
      { label: "Helfer-Verpflegung", text: "Pizza, Getränke, Trinkgeld für Freunde: 50–150 € je nach Gruppe." },
      { label: "Werkzeug und Material", text: "Kartons, Klebeband, Möbeldecken, Stretchfolie — alles zusammen schnell 80–150 €." },
      { label: "Schäden", text: "Ein einziges zerkratztes Parkett oder ein beschädigter Türrahmen kann teurer werden als die gesamte Kostendifferenz." },
    ],
  },
  {
    heading: "Wann lohnt sich die Eigenregie?",
    items: [
      { label: "Kleiner Haushalt, kurze Strecke", text: "WG-Zimmer, 1-Zimmer-Apartment, Entfernung unter 20 km — hier ist Eigenregie oft sinnvoll." },
      { label: "Viele verlässliche Helfer", text: "Wer 4–5 kräftige und zuverlässige Helfer mobilisieren kann, hat einen echten Vorteil." },
      { label: "Wenig sperrige Möbel", text: "Ohne Klavier, Kühlschrank oder massive Schränke sinkt das Verletzungsrisiko deutlich." },
      { label: "Flexibles Zeitfenster", text: "Wer nicht unter Zeitdruck steht und sich mehrere Tage nehmen kann, hat weniger Stress." },
    ],
  },
  {
    heading: "Wann ist eine Umzugsfirma die bessere Wahl?",
    items: [
      { label: "Ab 3 Zimmer aufwärts", text: "Der Aufwand steigt nicht linear — ab 3 Zimmern wird die Koordination deutlich komplexer." },
      { label: "Hohe Etage ohne Aufzug", text: "Schwere Möbel über mehrere Stockwerke sind körperlich riskant ohne Erfahrung und Equipment." },
      { label: "Wertvolle oder empfindliche Gegenstände", text: "Kunst, Antiquitäten, Klavier oder hochwertiger Wein brauchen fachgerechte Behandlung und Absicherung." },
      { label: "Lange Strecke oder Auslandsumzug", text: "Ab 100 km oder über Grenzen hinweg werden Logistik und Rechtslage komplexer." },
      { label: "Keine Zeit und keine Helfer", text: "Wer weder Urlaub nehmen möchte noch verlässliche Unterstützung hat, ist mit einem Profi besser bedient." },
    ],
  },
  {
    heading: "Mischform: Das Beste aus beiden Welten",
    items: [
      { label: "Kartons selbst packen", text: "Den größten Zeitblock beim Profi-Umzug spart man, wenn Kartons bereits fertig gepackt und beschriftet bereitstehen." },
      { label: "Spezialgut auslagern", text: "Profis nur für schwere oder wertvolle Objekte buchen — den Rest selbst organisieren." },
      { label: "Einpackservice gezielt nutzen", text: "Küche und Wohnzimmer vom Profi einpacken lassen, Schlafzimmer und Kleidung selbst — so reduziert man Kosten gezielt." },
    ],
  },
];

export default function SelbstVsProfiPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/selbst-vs-profi/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: SELBST_VS_PROFI_FAQS,
  });

  return (
    <>
    <JsonLd id="ld-selbst-vs-profi-faq" data={faqLd} />
    <GuideLayout
      title="Selbst umziehen oder Umzugsfirma? Ehrlicher Vergleich"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/selbst-vs-profi/",
        description: PAGE_DESC,
      }}
    >
      <div className="space-y-6">

        {/* Intro */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Die Frage hinter der Frage</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Wer fragt, ob er selbst umziehen oder Profis beauftragen soll, meint eigentlich: Was kostet mich das wirklich — an Geld, Zeit und Nerven? Die Antwort hängt weniger vom Budget ab als von Haushaltsgröße, verfügbarer Zeit und Risikobereitschaft. Dieser Ratgeber hilft, die richtige Entscheidung für die eigene Situation zu treffen.
          </p>
        </div>

        {/* Vergleichstabelle */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Direktvergleich auf einen Blick</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-3 text-left font-semibold text-[#0D2137]">Kriterium</th>
                  <th className="pb-3 text-left font-semibold text-[#0D2137]">Eigenregie</th>
                  <th className="pb-3 text-left font-semibold text-[#0D2137]">Umzugsfirma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { k: "Grundkosten", e: "Gering (LKW + Material)", p: "Höher, aber kalkulierbar" },
                  { k: "Versteckte Kosten", e: "Hoch (Urlaub, Schäden, Verpflegung)", p: "Gering" },
                  { k: "Zeitaufwand", e: "1–3 Tage", p: "Meist 1 Tag" },
                  { k: "Körperliches Risiko", e: "Hoch", p: "Gering" },
                  { k: "Schadenshaftung", e: "Selbst", p: "Firma" },
                  { k: "Flexibilität", e: "Hoch", p: "Abhängig vom Anbieter" },
                  { k: "Geeignet für", e: "1–2 Zimmer, kurze Strecke", p: "Ab 3 Zimmer, lange Strecke" },
                ].map((row) => (
                  <tr key={row.k}>
                    <td className="py-2.5 font-medium text-[#0D2137]">{row.k}</td>
                    <td className="py-2.5 text-[#5A7A8A]">{row.e}</td>
                    <td className="py-2.5 text-[#5A7A8A]">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eigenregie */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was Eigenregie beim Umzug wirklich bedeutet</h2>
          <ul className="space-y-3">
            {[
              { label: "Zeitaufwand", text: "Ein 3-Zimmer-Haushalt bindet realistisch einen kompletten Urlaubstag — häufig auch zwei." },
              { label: "Organisation", text: "LKW buchen, Helfer koordinieren, Parkgenehmigung beantragen, Werkzeug für Möbelmontage besorgen." },
              { label: "Körperliche Belastung", text: "Kühlschrank, Waschmaschine und Kleiderschrank lassen sich nicht zu zweit ohne Sackkarre und Erfahrung sicher transportieren." },
              { label: "Schäden ohne Absicherung", text: "Wer selbst lädt, haftet selbst — für Kratzer am Parkett, eingedrückte Türrahmen und beschädigte Möbel." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Versteckte Kosten */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Die versteckten Kosten beim Selbstumzug</h2>
          <div className="space-y-3">
            {[
              { label: "LKW-Miete", text: "80–200 €/Tag, Kraftstoff extra." },
              { label: "Urlaubstage", text: "Wer angestellt ist, gibt realen Gegenwert aus — meistens 1–2 Tage." },
              { label: "Verpflegung für Helfer", text: "Pizza, Getränke, Trinkgeld: 50–150 € je nach Gruppe." },
              { label: "Verpackungsmaterial", text: "Kartons, Klebeband, Möbeldecken, Stretchfolie: 80–150 €." },
              { label: "Schäden", text: "Ein zerkratztes Parkett kann teurer werden als die gesamte Kostendifferenz zum Profi-Umzug." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>{i + 1}</div>
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wann was */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wann lohnt Eigenregie?</h2>
            <ul className="space-y-3">
              {[
                { label: "1–2 Zimmer, kurze Strecke", text: "WG-Zimmer oder 1-Zimmer-Apartment unter 20 km." },
                { label: "Verlässliche Helfer", text: "4–5 kräftige Unterstützer, die wirklich kommen." },
                { label: "Wenig Sperrgut", text: "Kein Klavier, kein Kühlschrank über mehrere Stockwerke." },
                { label: "Flexible Zeit", text: "Kein Zeitdruck, mehrere Tage verfügbar." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wann ist der Profi besser?</h2>
            <ul className="space-y-3">
              {[
                { label: "Ab 3 Zimmer", text: "Koordination und Volumen werden schnell komplex." },
                { label: "Hohe Etage ohne Aufzug", text: "Körperlich riskant ohne Erfahrung und Equipment." },
                { label: "Wertvolle Gegenstände", text: "Kunst, Antiquitäten oder Klavier brauchen Fachleute." },
                { label: "Keine Zeit, keine Helfer", text: "Wer beides nicht hat, spart mit dem Profi am Ende mehr." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mischform */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Mischform: Das Beste aus beiden Welten</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Die Wahl ist nicht binär. Viele Umzüge lassen sich sinnvoll aufteilen:
          </p>
          <ul className="space-y-3">
            {[
              { label: "Kartons selbst packen", text: "Den größten Zeitblock beim Profi spart man, wenn alles fertig gepackt und beschriftet bereitsteht." },
              { label: "Schweres auslagern", text: "Profis nur für Sperrgut und schwere Möbel buchen — den Rest selbst organisieren." },
              { label: "Einpackservice gezielt einsetzen", text: "Küche und Wohnzimmer vom Profi einpacken lassen, Schlafzimmer selbst — das drückt den Preis." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
          <div className="space-y-3">
            {SELBST_VS_PROFI_FAQS.map((faq) => (
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
          <strong>Noch unsicher?</strong> Unser{" "}
          <a href="/rechner/" className="underline font-medium">Umzugskosten-Rechner</a> zeigt Ihnen, was ein Profi-Umzug in Ihrer Region ungefähr kostet — damit Sie eine fundierte Entscheidung treffen können, bevor Sie Angebote einholen.
        </div>

      </div>
    </GuideLayout>
    </>
  );
}
