import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { SPERRGUT_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Sperrgut beim Umzug: Kühlschrank, Klavier & Co. richtig transportieren | meinumzugsrechner.de";
const PAGE_DESC =
  "Was gilt als Sperrgut, wie transportiert man Kühlschrank, Waschmaschine, Klavier oder Wasserbett sicher — und wann sollte man Profis beauftragen?";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Sperrgut Umzug", "Klavier transportieren", "schwere Möbel umziehen"],
  ...pageCanonical("/ratgeber/sperrgut/"),
  openGraph: {
    title: "Sperrgut beim Umzug: Kühlschrank, Klavier & Co. richtig transportieren",
    description: PAGE_DESC,
    url: "/ratgeber/sperrgut/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Was gilt als Sperrgut?",
    items: [
      { label: "Haushaltsgeräte", text: "Kühlschrank, Gefrierschrank, Waschmaschine, Geschirrspüler, Trockner — alle großen Weißgeräte gelten als Sperrgut, weil sie wegen Gewicht, Empfindlichkeit oder Sperrigkeit besondere Handhabung erfordern." },
      { label: "Musikinstrumente", text: "Klavier, Flügel, Orgel — durch ihr Gewicht (150–500 kg) und ihre Empfindlichkeit gegenüber Erschütterungen und Temperatur eine eigene Kategorie." },
      { label: "Wasserbett", text: "Muss vor dem Transport vollständig entleert werden. Das Vinyl ist empfindlich gegen Knicke und scharfe Kanten." },
      { label: "Großmöbel und Spezialstücke", text: "Übergroße L-Sofas, schwere Esstische aus Massivholz, Kaminöfen, Werkbänke, Tresore — alles was durch Gewicht oder Abmessung den normalen Rahmen sprengt." },
    ],
  },
  {
    heading: "Kühlschrank und Gefriergeräte: Was vor dem Transport zu tun ist",
    items: [
      { label: "24 Stunden vorher ausschalten", text: "Kühlschrank und Gefrierschrank mindestens 24 Stunden vor dem Transport ausschalten und vollständig abtauen. Schmelzwasser und Kondensat restlos entfernen — feuchte Wände im Laderaum sind bei winterlichen Temperaturen rutschig." },
      { label: "Immer aufrecht transportieren", text: "Kühlgeräte stets stehend transportieren. Nie auf die Rückwand legen — dort sitzen Kompressor und Kältemittelleitungen. Kurzes Neigen ist tolerierbar, längeres Liegen nicht." },
      { label: "Nach dem Transport: Wartezeit", text: "Wenn das Gerät kurzzeitig geneigt wurde, mindestens 12 Stunden aufrecht stehen lassen bevor es wieder eingeschaltet wird. Das Kältemittel muss sich setzen — sonst kann der Kompressor Schaden nehmen." },
      { label: "Tür sichern", text: "Kühlschranktur mit Klebeband oder einem Spanngurt schließen, damit sie beim Transport nicht aufschwingt. Kabel an der Außenseite festkleben." },
    ],
  },
  {
    heading: "Waschmaschine richtig transportieren",
    items: [
      { label: "Transportsicherung einbauen — Pflicht", text: "Die meisten Waschmaschinen werden mit Transportbolzen geliefert. Diese werden an der Rückseite in dafür vorgesehene Öffnungen eingedreht und fixieren die Trommel. Wer sie nicht mehr hat: Ersatzbolzen im Fachhandel oder beim Hersteller." },
      { label: "Restwasser ablassen", text: "Über das Flusensieb und den Ablaufschlauch (meist hinten unten) das Restwasser aus der Maschine ablassen. Ohne diesen Schritt kann Wasser auslaufen und im Laderaum Schäden anrichten." },
      { label: "Immer stehend transportieren", text: "Waschmaschinen gehören stehend in den Transporter, nicht auf der Seite. Das schützt die Lager und verhindert, dass Restwasser in empfindliche Bauteile läuft." },
      { label: "Schläuche und Kabel sichern", text: "Zu- und Ablaufschlauch vom Wasser trennen, trocken wischen und mit Kabelbinder oder Klebeband am Gerät befestigen, damit nichts scheuert oder knickt." },
    ],
  },
  {
    heading: "Klavier und Flügel: Immer Profis beauftragen",
    items: [
      { label: "Warum Profis?", text: "Ein Klavier wiegt 150–300 kg, ein Flügel bis zu 500 kg. Ohne Spezialausrüstung ist das Transport-Risiko für Gerät und Helfer zu hoch. Schäden am Instrument können teurer werden als der Transport selbst." },
      { label: "Was Profis mitbringen", text: "Flügeltransportrollen, Tragegurte, Schutzdecken und das Know-how, das Instrument sicher über Treppen oder durch enge Türen zu bewegen. Flügel werden dafür auf eine Seite gestellt und teilzerlegt." },
      { label: "Empfindlichkeit gegenüber Erschütterungen", text: "Klaviere reagieren auf Erschütterungen und Temperaturwechsel. Ein Umzug im Winter sollte kurz sein — lange Standzeiten in der Kälte können die Stimmung beeinträchtigen. Nach dem Umzug neu stimmen lassen." },
    ],
  },
  {
    heading: "Wasserbett: Erst entleeren, dann transportieren",
    items: [
      { label: "Vollständig entleeren", text: "Wasserbetten müssen vor dem Transport restlos entleert werden. Dafür eine Pumpe mit passendem Adapter und einen Ablaufschlauch verwenden. Je nach Matratzentyp dauert das 20–60 Minuten." },
      { label: "Vinyl vorsichtig behandeln", text: "Die Vinylmatte nicht knicken und nicht mit scharfen Kanten in Berührung bringen. Aufgerollt und in einer Decke eingewickelt transportieren — Risse im Vinyl sind schwer zu reparieren." },
      { label: "Rahmen getrennt transportieren", text: "Den Holz- oder MDF-Rahmen demontieren und getrennt vom Vinyl transportieren. Das schützt beide Teile und spart Platz im Fahrzeug." },
    ],
  },
];

export default function SperrgutRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/sperrgut/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: SPERRGUT_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-sperrgut-faq" data={faqLd} />
      <GuideLayout
        title="Sperrgut beim Umzug: Was gilt, wie transportiert man es — und wann braucht man Profis?"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/sperrgut/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Sperrgut ist kein Randthema — es entscheidet über Schäden und Sicherheit</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Kühlschrank falsch transportiert: Kompressor kaputt. Waschmaschine ohne Transportsicherung: Lagerschaden. Klavier ohne Profis: Instrument beschädigt, Helfer verletzt. Sperrgut verzeiht Fehler weniger als ein Karton mit Büchern. Wer weiß, was zu tun ist, kann die meisten Haushaltsgeräte selbst transportieren — und erkennt, wann er besser Fachleute beauftragt.
            </p>
          </div>

          {/* Was gilt als Sperrgut */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Was zählt als Sperrgut?</h2>
            <div className="grid gap-2 sm:grid-cols-2 text-sm">
              {[
                "Kühlschrank, Gefrierschrank",
                "Waschmaschine, Trockner",
                "Geschirrspüler",
                "Klavier, Flügel",
                "Wasserbett",
                "Kaminofen",
                "Schwere Massivholzmöbel",
                "Tresor, Werkbank",
                "Übergroße L-Sofas",
                "Große Aquarien",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#5A7A8A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Kühlschrank */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Kühlschrank & Gefriergeräte</h2>
            <ul className="space-y-3">
              {[
                { label: "24 Stunden vorher ausschalten", text: "Vollständig abtauen, Schmelzwasser entfernen. Nasse Wände im Laderaum sind rutschig und schimmelig." },
                { label: "Immer aufrecht transportieren", text: "Nie auf die Rückwand legen — Kompressor und Kältemittelleitungen sitzen dort und sind empfindlich." },
                { label: "12 Stunden Wartezeit nach Transport", text: "Wenn das Gerät kurz geneigt war: mindestens 12 Stunden aufrecht stehen lassen, bevor es eingeschaltet wird." },
                { label: "Tür und Kabel sichern", text: "Tür mit Klebeband oder Spanngurt schließen, Kabel festkleben — damit nichts beim Transport aufschwingt oder scheuert." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waschmaschine */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Waschmaschine</h2>
            <ul className="space-y-3">
              {[
                { label: "Transportsicherung einbauen — Pflicht", text: "Transportbolzen in die Öffnungen an der Rückseite schrauben. Fixieren die Trommel. Wer sie nicht mehr hat: beim Hersteller oder im Fachhandel nachbestellen." },
                { label: "Restwasser ablassen", text: "Über das Flusensieb (vorne unten) das Restwasser ablassen. Ablaufschlauch (hinten) ebenfalls leeren. Sonst läuft Wasser im Laderaum aus." },
                { label: "Stehend transportieren", text: "Nie auf der Seite oder dem Rücken. Schützt die Lager und verhindert, dass Wasser in Bauteile läuft." },
                { label: "Schläuche und Kabel befestigen", text: "Zu- und Ablaufschlauch trocken wischen und am Gerät fixieren — nicht frei baumeln lassen." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Klavier + Wasserbett */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
              <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Klavier & Flügel</h2>
              <ul className="space-y-3">
                {[
                  { label: "Immer Profis", text: "150–500 kg, empfindlich gegen Erschütterungen. Das Risiko für Instrument und Helfer ist zu hoch für Laien." },
                  { label: "Spezialausrüstung nötig", text: "Flügeltransportrollen, Schutzdecken, Tragegurte. Flügel wird auf eine Seite gestellt und teilzerlegt." },
                  { label: "Nach Umzug neu stimmen", text: "Temperaturschwankungen und Erschütterungen beeinflussen die Stimmung. Nach dem Transport vom Fachmann stimmen lassen." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700", marginTop: "6px" }} />
                    <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
              <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wasserbett</h2>
              <ul className="space-y-3">
                {[
                  { label: "Vollständig entleeren", text: "Pumpe mit Adapter und Ablaufschlauch — dauert 20–60 Minuten. Kein Rest Wasser darf im Vinyl bleiben." },
                  { label: "Vinyl schützen", text: "Aufgerollt und in einer Decke eingewickelt transportieren. Knicke und scharfe Kanten hinterlassen Risse." },
                  { label: "Rahmen getrennt", text: "Den Holz- oder MDF-Rahmen demontieren und separat transportieren." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700", marginTop: "6px" }} />
                    <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
            <div className="space-y-3">
              {SPERRGUT_FAQS.map((faq) => (
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
            <strong>Umzug mit viel Sperrgut?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> berücksichtigt Sonderleistungen und gibt einen realistischen Preiskorridor für Ihren Umzug.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
