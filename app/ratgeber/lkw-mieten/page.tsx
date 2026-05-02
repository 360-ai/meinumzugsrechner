import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { LKW_MIETEN_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Umzugswagen mieten: Führerschein, Größe & Beladetipps 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Welcher Führerschein reicht, welche Transportergröße brauche ich, wie lade ich richtig — alles Wichtige zum Transporter mieten für den Umzug, kompakt erklärt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["LKW mieten Umzug", "Transporter mieten", "Umzugswagen leihen"],
  ...pageCanonical("/ratgeber/lkw-mieten/"),
  openGraph: {
    title: "Umzugswagen mieten: Führerschein, Größe & Beladetipps 2026",
    description: PAGE_DESC,
    url: "/ratgeber/lkw-mieten/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Führerschein: Was ist erlaubt?",
    items: [
      { label: "Klasse B (bis 3,5 t)", text: "Reicht für die meisten Sprinter und Kastenwagen. Wichtig: Das Gesamtgewicht umfasst Fahrzeug plus Beladung — ein vollgeladener Transporter kann schnell über die 3,5-Tonnen-Grenze rutschen." },
      { label: "Alter Führerschein Klasse 3", text: "Wer den alten Führerschein vor 1999 gemacht hat, darf damit Fahrzeuge bis 7,5 Tonnen fahren — deutlich mehr Spielraum." },
      { label: "Klasse C1 (bis 7,5 t)", text: "Für mittelgroße LKW. Erforderlich wenn Klasse B nicht ausreicht und kein alter Klasse-3-Schein vorhanden ist." },
      { label: "Klasse C / CE", text: "Für große LKW ohne Gewichtsgrenze. Bei Privatumzügen selten notwendig." },
      { label: "Altersanforderungen", text: "Viele Vermieter verlangen mindestens 21 Jahre für Transporter, bei größeren LKW oft 25 Jahre. Vorab beim Anbieter prüfen." },
    ],
  },
  {
    heading: "Welche Größe brauche ich?",
    items: [
      { label: "1-Zimmer / WG-Zimmer", text: "8–10 m³ Ladevolumen. Kleintransporter oder Sprinter reicht aus — passt mit Klasse B und ist günstiger in Miete und Sprit." },
      { label: "2-Zimmer-Wohnung", text: "12–15 m³. Großer Sprinter oder kleiner Kastenwagen. Für eine Fahrt meist ausreichend, wenn Möbel kompakt verpackt sind." },
      { label: "3-Zimmer-Wohnung", text: "20–25 m³. Hier wird ein LKW sinnvoll — oder zwei Fahrten mit einem Sprinter bei kurzer Strecke." },
      { label: "4 Zimmer und mehr", text: "30 m³ und aufwärts. Ab hier lohnt sich der Vergleich mit einer Umzugsfirma, da ein LKW dieser Größe Klasse C1 erfordert." },
      { label: "Im Zweifel größer buchen", text: "Eine Nummer größer kostet meist nur wenig mehr — spart aber eine zweite Fahrt, die Zeit, Sprit und Nerven kostet." },
    ],
  },
  {
    heading: "Richtig beladen: Was viele falsch machen",
    items: [
      { label: "Schweres nach unten, Leichtes nach oben", text: "Kartons mit Büchern, Geschirr oder Werkzeug gehören in die unterste Lage. Leichte Kartons obendrauf. Verringert das Kipprisiko und schützt empfindliche Inhalte." },
      { label: "Gewicht gleichmäßig verteilen", text: "Alles auf eine Fahrzeugseite zu laden erzeugt beim Fahren und Bremsen gefährliche Fliehkräfte. Links wie rechts gleich schwer beladen." },
      { label: "Packdecken statt Schnüre", text: "Stricke und Schnüre schneiden in Möbeloberflächen ein. Packdecken polstern und schützen — für 20–30 Stück reicht ein normales Set aus dem Baumarkt oder der Vermietung." },
      { label: "Spanngurte sichern alles", text: "Kartons und Möbel mit Spanngurten gegen Verrutschen fixieren. Ungesichertes Ladegut ist nicht nur ein Schaden-Risiko, sondern auch eine Ordnungswidrigkeit." },
      { label: "Schränke front-to-front stellen", text: "Zwei Schränke mit den Sichtflächen zueinander stellen — so schützen sie sich gegenseitig und die empfindlichen Oberflächen kommen nicht mit Wänden oder Schienen in Berührung." },
    ],
  },
  {
    heading: "Sonderfall: Kühlgeräte & Elektrogeräte",
    items: [
      { label: "Kühlschrank immer aufrecht", text: "Nie auf die Rückwand legen — dort sitzen Kompressor und Kältemittelleitungen. Wenn kurz auf der Seite transportiert: mindestens 12 Stunden stehen lassen, bevor er wieder eingeschaltet wird." },
      { label: "24 Stunden vorher abtauen", text: "Kühlschrank und Gefrierschrank mindestens 24 Stunden vor dem Transport ausschalten und vollständig abtauen. Schmelzwasser und Kondensat entfernen." },
      { label: "Waschmaschine: Transportsicherung einbauen", text: "Die mitgelieferten Transportbolzen an der Rückseite fixieren die Trommel. Ohne Sicherung kann die Trommel beim Transport Schaden nehmen. Restwasser vorher ablassen." },
      { label: "Ladebordwand bei schweren Geräten", text: "Transporter mit Ladebordwand machen das Be- und Entladen schwerer Haushaltsgeräte deutlich sicherer — keine steile Rampe, kein Tragen über hohe Kanten." },
    ],
  },
  {
    heading: "Versicherung & praktisches",
    items: [
      { label: "Vollkasko empfehlenswert", text: "Die meisten Mietverträge haben Selbstbeteiligungen von 500–2.000 Euro. Vollkasko reduziert das Risiko. Manche Kreditkarten bieten Mietwagenschutz — aber oft nur für PKW, nicht für Transporter. Vorab prüfen." },
      { label: "Rechtzeitig buchen", text: "In der Umzugshochsaison (April bis September, Monats- und Quartalsenden) sind Transporter schnell ausgebucht. Mindestens zwei bis drei Wochen im Voraus buchen." },
      { label: "Fahrzeug bei Übernahme dokumentieren", text: "Vor Abfahrt den Zustand des Fahrzeugs gemeinsam mit dem Vermieter festhalten — Kratzer, Dellen, Felgenschäden. Schäden die vorhanden sind sofort melden, sonst droht die Haftung nach der Rückgabe." },
    ],
  },
];

export default function LkwMietenRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/lkw-mieten/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: LKW_MIETEN_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-lkw-mieten-faq" data={faqLd} />
      <GuideLayout
        title="Umzugswagen mieten: Führerschein, Größe & wie man richtig belädt"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/lkw-mieten/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Transporter oder LKW — und was darf ich überhaupt fahren?</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Wer selbst umzieht, braucht ein passendes Fahrzeug. Die Frage nach Führerschein, Größe und Beladung entscheidet darüber, ob der Umzug reibungslos läuft — oder ob man mit zu kleinem Fahrzeug eine zweite Fahrt dreht oder mit zu viel Ladung die 3,5-Tonnen-Grenze überschreitet. Dieser Ratgeber klärt, was wirklich wichtig ist.
            </p>
          </div>

          {/* Führerschein-Tabelle */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Führerscheinklassen auf einen Blick</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-2 text-left font-semibold text-[#0D2137]">Klasse</th>
                    <th className="pb-2 text-left font-semibold text-[#0D2137]">Max. Gesamtgewicht</th>
                    <th className="pb-2 text-left font-semibold text-[#0D2137]">Typisches Fahrzeug</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { klasse: "B", gewicht: "bis 3,5 t", fahrzeug: "Sprinter, Kastenwagen" },
                    { klasse: "Klasse 3 (alt)", gewicht: "bis 7,5 t", fahrzeug: "Mittelgroßer LKW" },
                    { klasse: "C1", gewicht: "bis 7,5 t", fahrzeug: "Mittelgroßer LKW" },
                    { klasse: "C1E", gewicht: "bis 12 t", fahrzeug: "LKW mit Anhänger" },
                    { klasse: "C / CE", gewicht: "unbegrenzt", fahrzeug: "Großer LKW" },
                  ].map((row) => (
                    <tr key={row.klasse}>
                      <td className="py-2.5 font-medium text-[#0088CC]">{row.klasse}</td>
                      <td className="py-2.5 text-[#5A7A8A]">{row.gewicht}</td>
                      <td className="py-2.5 text-[#5A7A8A]">{row.fahrzeug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#5A7A8A]">Wichtig: Das Gesamtgewicht = Fahrzeugleergewicht + Beladung. Ein vollgeladener Sprinter kann schnell die 3,5-Tonnen-Grenze überschreiten.</p>
          </div>

          {/* Größentabelle */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Welche Transportergröße brauche ich?</h2>
            <div className="space-y-3">
              {[
                { wohnung: "WG-Zimmer / 1 Zimmer", volumen: "8–10 m³", hinweis: "Kleintransporter, Klasse B" },
                { wohnung: "2-Zimmer-Wohnung", volumen: "12–15 m³", hinweis: "Großer Sprinter, Klasse B" },
                { wohnung: "3-Zimmer-Wohnung", volumen: "20–25 m³", hinweis: "Kleiner LKW" },
                { wohnung: "4+ Zimmer", volumen: "30+ m³", hinweis: "Großer LKW oder Umzugsfirma" },
              ].map((row) => (
                <div key={row.wohnung} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm">
                  <span className="font-medium text-[#0D2137]">{row.wohnung}</span>
                  <span className="font-bold text-[#0088CC]">{row.volumen}</span>
                  <span className="text-[#5A7A8A] hidden sm:block text-xs">{row.hinweis}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beladetipps */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Richtig beladen: Was viele falsch machen</h2>
            <ul className="space-y-3">
              {[
                { label: "Schweres nach unten", text: "Bücher, Geschirr, Werkzeug — unterste Lage. Leichte Kartons obendrauf. Kipprisiko sinkt, empfindliche Inhalte bleiben geschützt." },
                { label: "Gewicht gleichmäßig verteilen", text: "Links wie rechts gleich schwer beladen. Einseitige Last erzeugt beim Fahren gefährliche Fliehkräfte." },
                { label: "Packdecken, keine Schnüre", text: "Stricke und Schnüre schneiden in Oberflächen ein. Packdecken schützen und polstern — 20–30 Stück reichen für einen normalen Haushalt." },
                { label: "Spanngurte sichern alles", text: "Ungesichertes Ladegut ist Ordnungswidrigkeit und Schadensrisiko. Jeden größeren Gegenstand fixieren." },
                { label: "Schränke front-to-front", text: "Sichtflächen einander zugewandt stellen — so schützen sie sich gegenseitig vor Kratzern." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kühlgeräte */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Sonderfall: Kühlschrank, Waschmaschine & Co.</h2>
            <ul className="space-y-3">
              {[
                { label: "Kühlschrank immer aufrecht", text: "Nie auf die Rückwand legen — Kompressor und Kältemittelleitungen sitzen dort. Nach liegendem Transport: mindestens 12 Stunden stehen lassen vor dem Einschalten." },
                { label: "24 Stunden vorher abtauen", text: "Kühlschrank und Gefrierschrank mindestens 24 Stunden vor Transport ausschalten, vollständig abtauen und Schmelzwasser entfernen." },
                { label: "Waschmaschine: Transportsicherung", text: "Transportbolzen an der Rückseite fixieren die Trommel. Ohne Sicherung kann die Trommel beim Transport beschädigt werden. Restwasser vorher ablassen." },
                { label: "Ladebordwand lohnt sich", text: "Bei schweren Geräten: Transporter mit Ladebordwand mieten. Kein Tragen über hohe Rampe — Gerät wird ebenerdig aufgestellt und per Hebebühne hochgefahren." },
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
              {LKW_MIETEN_FAQS.map((faq) => (
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
            <strong>Noch unsicher, ob Transporter oder Profi?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt, was ein professioneller Umzug in Ihrer Region kostet — dann können Sie selbst vergleichen.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
