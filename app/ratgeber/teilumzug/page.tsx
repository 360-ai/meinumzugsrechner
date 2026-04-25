import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { TEILUMZUG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Teilumzug: Was es ist, wann es sich lohnt & Kostentipps 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Nicht jeder Umzug ist ein Komplettumzug: Was ein Teilumzug ist, wann Beiladung die günstigste Option ist und wie man den Platzbedarf richtig einschätzt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/teilumzug/"),
  openGraph: {
    title: "Teilumzug: Was es ist, wann es sich lohnt & Kostentipps 2026",
    description: PAGE_DESC,
    url: "/ratgeber/teilumzug/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Was ist ein Teilumzug?",
    items: [
      { label: "Definition", text: "Ein Teilumzug bezeichnet den Transport eines Teils des Hausrats — nicht des gesamten Inventars. Das kann ein einzelnes WG-Zimmer sein, ein paar Möbelstücke oder der schrittweise Umzug über mehrere Etappen." },
      { label: "Typische Szenarien", text: "Auszug aus einer Wohngemeinschaft, bei dem nur das eigene Zimmer umzieht. Transport einzelner großer Möbel zu Familienangehörigen. Umzug von Büchern und Kleidung in eine neue Stadt vorab, Möbel folgen später." },
      { label: "Abgrenzung zur Beiladung", text: "Beiladung ist eine bestimmte Transportform für Teilumzüge: das eigene Gut fährt im LKW eines anderen Kunden mit. Ein Teilumzug kann sowohl per Beiladung als auch per eigenem Transporter oder Umzugsfirma durchgeführt werden." },
    ],
  },
  {
    heading: "Transportoptionen im Vergleich",
    items: [
      { label: "Transporter selbst fahren", text: "Günstigste Option wenn man flexibel ist und genug Helfer hat. Klasse B reicht bis 3,5 Tonnen. Mietkosten ab 40–80 Euro pro Tag zzgl. Kraftstoff und Kilometerpauschale." },
      { label: "Beiladung", text: "Ideal wenn man beim Termin flexibel ist und wenig Gepäck hat. Das eigene Gut fährt in einem bereits gebuchten LKW mit — Kosten oft 30–70 % unter dem Direkttransport. Vorlaufzeit einplanen: mehrere Wochen." },
      { label: "Kleine Umzugsfirma beauftragen", text: "Sinnvoll wenn schwere Einzelmöbel transportiert werden müssen. Eine Firma für zwei bis drei Stunden zu buchen kostet in der Regel 200–400 Euro — günstiger als ein Ganztagesauftrag." },
      { label: "Paketdienst für Bücher und Kleidung", text: "Für Kartons ohne sperrige Inhalte ist auch der Paketdienst eine Option — besonders bei weiten Strecken. Kosten pro Karton: 5–15 Euro je nach Anbieter und Gewicht." },
    ],
  },
  {
    heading: "Platzbedarf richtig einschätzen",
    items: [
      { label: "WG-Zimmer mit Möbeln", text: "Ca. 8–15 m³ — passt in die meisten Transporter der Standardklasse. Wer nur Kartons und Kleidung hat, kommt mit 5–8 m³ aus." },
      { label: "Einzelne Möbelstücke", text: "Ein großer Kleiderschrank: ca. 2–3 m³. Ein Doppelbett mit Lattenrost: ca. 1,5–2 m³. Sofa: 1–2 m³. Als Faustregel: lieber etwas mehr einschätzen und sicher planen." },
      { label: "Lieber zu viel als zu wenig", text: "Wer zu knapp kalkuliert, muss entweder Möbel stehen lassen oder ein zweites Fahrzeug organisieren. Die Mehrkosten eines größeren Transporters sind gering im Vergleich zum Aufwand." },
    ],
  },
  {
    heading: "Beiladung: So funktioniert es",
    items: [
      { label: "Wie Beiladung funktioniert", text: "Umzugsunternehmen nehmen auf ihren regulären Fahrten zusätzliche Ladung mit, wenn noch Platz im LKW ist. Der Termin richtet sich nach dem Hauptauftrag — Flexibilität ist Pflicht." },
      { label: "Wo Beiladungen gebucht werden", text: "Über spezialisierte Vermittlungsplattformen oder direkt bei Umzugsunternehmen anfragen. Angaben benötigt: Abholort, Zielort, ungefähres Volumen in m³ und Gewicht." },
      { label: "Vorlaufzeit einplanen", text: "Beiladungen sind nicht kurzfristig buchbar. Je nach Route und Volumen können mehrere Wochen bis zur passenden Mitnahmemöglichkeit vergehen. Wer schnell muss, ist mit einem Direkttransport besser bedient." },
      { label: "Versicherung klären", text: "Vor der Buchung klären, was im Schadensfall gilt. Nicht alle Beiladungsoptionen bieten automatisch Transportversicherung für das mitgeführte Gut." },
    ],
  },
];

export default function TeilumzugRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/teilumzug/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: TEILUMZUG_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-teilumzug-faq" data={faqLd} />
      <GuideLayout
        title="Teilumzug: Wann er sich lohnt und wie man ihn günstig organisiert"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/teilumzug/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Nicht jeder Umzug ist ein Komplettumzug</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Wer aus einer WG auszieht, transportiert in der Regel nur ein Zimmer voller Sachen. Wer schrittweise umzieht, lässt Möbel vielleicht noch wochen- oder monatelang stehen. Und wer ein einzelnes Erbstück aus einer anderen Stadt abholen lässt, braucht keinen 40-Tonner dafür. Der Teilumzug ist der häufigste Umzugstyp — aber er wird am seltensten als solcher geplant.
            </p>
          </div>

          {/* Transportvergleich */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Transportoptionen im Vergleich</h2>
            <div className="space-y-3">
              {[
                { option: "Transporter selbst fahren", kosten: "40–80 €/Tag + Sprit", fuer: "Flexible mit Helfern, kurze Strecke" },
                { option: "Beiladung", kosten: "150–400 €", fuer: "Wenig Gepäck, flexibler Termin" },
                { option: "Kleine Umzugsfirma", kosten: "200–500 €", fuer: "Schwere Möbel, kein eigener Führerschein" },
                { option: "Paketdienst", kosten: "5–15 € pro Karton", fuer: "Bücher, Kleidung, weite Strecke" },
              ].map((row) => (
                <div key={row.option} className="rounded-xl border border-slate-100 px-4 py-3 text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[#0D2137]">{row.option}</span>
                    <span className="font-bold text-[#0088CC]">{row.kosten}</span>
                  </div>
                  <span className="text-xs text-[#5A7A8A]">Ideal: {row.fuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platzbedarf */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Platzbedarf richtig einschätzen</h2>
            <div className="space-y-3">
              {[
                { gegenstand: "WG-Zimmer mit Möbeln", volumen: "8–15 m³" },
                { gegenstand: "WG-Zimmer nur Kartons + Kleidung", volumen: "5–8 m³" },
                { gegenstand: "Großer Kleiderschrank", volumen: "ca. 2–3 m³" },
                { gegenstand: "Doppelbett mit Lattenrost", volumen: "ca. 1,5–2 m³" },
                { gegenstand: "2-Sitzer-Sofa", volumen: "ca. 1–2 m³" },
              ].map((row) => (
                <div key={row.gegenstand} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm">
                  <span className="text-[#5A7A8A]">{row.gegenstand}</span>
                  <span className="font-bold text-[#0088CC]">{row.volumen}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#5A7A8A]">Im Zweifel lieber etwas mehr einplanen — die Mehrkosten eines größeren Transporters sind gering.</p>
          </div>

          {/* Beiladung */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Beiladung: So funktioniert es</h2>
            <ul className="space-y-3">
              {[
                { label: "Mitfahren im fremden LKW", text: "Das eigene Gut fährt auf einem bereits gebuchten Umzugstransport mit — wenn noch Platz im Fahrzeug ist. Termin richtet sich nach dem Hauptauftrag." },
                { label: "Wo buchen", text: "Über Vermittlungsplattformen oder direkt bei Umzugsunternehmen anfragen. Angaben: Abholort, Zielort, Volumen in m³, ungefähres Gewicht." },
                { label: "Vorlaufzeit beachten", text: "Mehrere Wochen bis zur passenden Route. Wer kurzfristig umziehen muss, ist mit eigenem Transporter oder Direkttransport besser bedient." },
                { label: "Versicherung klären", text: "Nicht jede Beiladung ist automatisch versichert. Vor Buchung klären, was im Schadensfall gilt." },
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
              {TEILUMZUG_FAQS.map((faq) => (
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
            <strong>Was kostet Ihr Teilumzug?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> gibt einen realistischen Preiskorridor — auch für kleinere Umzüge.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
