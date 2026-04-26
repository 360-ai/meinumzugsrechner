import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { howToSchema, webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { HALTEVERBOT_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Halteverbot für Umzug beantragen: So geht es richtig 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie Sie eine temporäre Halteverbotszone für Ihren Umzug beantragen: Wo, wie früh, was es kostet — und was passiert, wenn jemand trotzdem parkt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/halteverbot/"),
  openGraph: {
    title: "Halteverbot für Umzug beantragen: So geht es richtig 2026",
    description: PAGE_DESC,
    url: "/ratgeber/halteverbot/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Warum ein Halteverbot sinnvoll ist",
    items: [
      { label: "Direkt vor der Haustür parken", text: "Je kürzer der Weg vom LKW zur Wohnungstür, desto weniger Zeit und Kraft kostet der Umzug. Ohne reservierten Bereich riskiert man, dass der LKW 50 oder 100 Meter entfernt parken muss." },
      { label: "Rechtliche Absicherung", text: "Nur mit genehmigter Halteverbotszone kann man falsch parkende Fahrzeuge abschleppen lassen. Ohne Genehmigung hat man keine rechtliche Handhabe." },
      { label: "An beiden Adressen einplanen", text: "Idealerweise wird an der alten Adresse (zum Einladen) und an der neuen (zum Ausladen) eine Zone beantragt. Das spart Zeit und Nerven an beiden Enden." },
    ],
  },
  {
    heading: "Wo und wie beantragen",
    items: [
      { label: "Zuständige Behörde", text: "Straßenverkehrsamt oder Ordnungsamt der jeweiligen Stadt oder Gemeinde — jeweils für die Adresse, an der die Zone liegen soll. Manche Städte haben Online-Formulare, andere verlangen einen persönlichen Antrag." },
      { label: "Vorlaufzeit einhalten", text: "Mindestens eine Woche, besser zwei Wochen vor dem Umzugstag beantragen. Viele Ämter brauchen mehrere Werktage für die Bearbeitung, und zu kurzfristige Anträge werden häufig abgelehnt." },
      { label: "Angaben im Antrag", text: "Straße und Hausnummer, gewünschte Länge der Zone, Datum und Uhrzeit, Art des Fahrzeugs (Transporter oder LKW). Manche Ämter fragen auch nach dem Umzugsunternehmen." },
      { label: "Schilder aufstellen", text: "In vielen Kommunen werden die Schilder vom Amt gestellt. In anderen muss man sie selbst besorgen oder mieten. Mindestens 48 Stunden vor dem Umzug aufstellen, damit Anwohner Zeit haben, ihr Fahrzeug wegzubewegen." },
    ],
  },
  {
    heading: "Kosten im Überblick",
    items: [
      { label: "Gebühren variieren stark", text: "Je nach Gemeinde liegen die Verwaltungsgebühren zwischen 30 und 100 Euro. Hinzu kommen die Kosten für die Schilder, falls diese nicht vom Amt gestellt werden (ca. 20–50 Euro Leihgebühr)." },
      { label: "Umzugsfirma übernimmt oft", text: "Viele professionelle Umzugsunternehmen beantragen die Halteverbotszone als Teil ihrer Leistung. Wer selbst umzieht, muss sich selbst darum kümmern." },
      { label: "Kosten für Falschparker", text: "Wird ein fremdes Fahrzeug abgeschleppt, trägt der Halter die Kosten — nicht der Umziehende. Das Abschleppen kann 100–300 Euro kosten." },
    ],
  },
  {
    heading: "Wie viel Fläche brauche ich?",
    items: [
      { label: "Transporter (bis 3,5 t)", text: "Ca. 6–7 Meter Länge einplanen. Das entspricht in etwa zwei normalen Parkplätzen." },
      { label: "Mittelgroßer LKW (7,5 t)", text: "Ca. 8–10 Meter. Zusätzlich Abstand zur Haustür mitdenken, damit Möbel direkt vom Fahrzeug getragen werden können." },
      { label: "Großer LKW oder Sattelzug", text: "Bis zu 18–20 Meter. In engen Altbaustraßen oft kaum möglich — hier frühzeitig mit dem Amt besprechen, ob eine Sondergenehmigung möglich ist." },
      { label: "Lieber etwas mehr beantragen", text: "Wer zu knapp kalkuliert, kämpft am Umzugstag mit dem Platz. Die Mehrkosten für ein paar zusätzliche Meter sind gering im Vergleich zum Zeitverlust." },
    ],
  },
];

export default function HalteverbotRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/halteverbot/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: HALTEVERBOT_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-halteverbot-faq" data={faqLd} />
      <JsonLd
        id="ld-halteverbot-howto"
        data={howToSchema({
          name: "Halteverbot für den Umzug beantragen",
          description: "Schritt-für-Schritt-Anleitung zum Beantragen einer temporären Halteverbotszone für den Umzugstag.",
          steps: [
            { name: "Bedarf prüfen", text: "Überlegen, ob eine Halteverbotszone an der alten Adresse (Einladen), der neuen Adresse (Ausladen) oder an beiden Stellen benötigt wird." },
            { name: "Zuständige Behörde ermitteln", text: "Straßenverkehrsamt oder Ordnungsamt der jeweiligen Stadt bzw. Gemeinde herausfinden — für jede Adresse separat." },
            { name: "Antrag rechtzeitig stellen", text: "Mindestens eine Woche vor dem Umzugstag beantragen, besser zwei Wochen. Angaben: Straße, Hausnummer, Zonenlänge, Datum, Uhrzeit und Fahrzeugtyp." },
            { name: "Schilder organisieren", text: "In vielen Kommunen werden die Schilder vom Amt gestellt; in anderen muss man sie selbst besorgen oder mieten (ca. 20–50 Euro Leihgebühr)." },
            { name: "Schilder mindestens 48 Stunden vorher aufstellen", text: "Nur so haben Anwohner genug Zeit, ihre Fahrzeuge wegzubewegen. Zu spät aufgestellte Schilder sind rechtlich unwirksam." },
          ],
        })}
      />
      <GuideLayout
        title="Halteverbot für den Umzug beantragen: Schritt für Schritt"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/halteverbot/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Warum eine Halteverbotszone den Unterschied macht</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Wer schon einmal erlebt hat, dass der Umzugs-LKW 80 Meter von der Haustür entfernt parken musste, weiß: Das kostet nicht nur Zeit, sondern auch Kraft. Eine temporäre Halteverbotszone löst das Problem — vorausgesetzt, man beantragt sie rechtzeitig. Dieser Ratgeber zeigt, wo der Antrag gestellt wird, wie viel Vorlauf nötig ist und worauf man beim Aufstellen der Schilder achten muss.
            </p>
          </div>

          {/* Schnell-Übersicht */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Auf einen Blick</h2>
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              {[
                { label: "Vorlaufzeit", value: "mind. 1 Woche (besser 2)" },
                { label: "Kosten", value: "30–100 € Gebühr + Schilder" },
                { label: "Schilder aufstellen", value: "mind. 48 h vor Umzug" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="text-xs text-amber-700 font-medium mb-1">{item.label}</div>
                  <div className="font-semibold text-[#0D2137]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Beantragen */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wo und wie beantragen</h2>
            <ul className="space-y-3">
              {[
                { label: "Zuständige Behörde", text: "Straßenverkehrsamt oder Ordnungsamt der jeweiligen Stadt oder Gemeinde — jeweils dort, wo die Zone eingerichtet werden soll. Alte und neue Adresse sind oft verschiedene Ämter." },
                { label: "Mindestens 1 Woche vorher", text: "Manche Ämter benötigen 10 Werktage. Wer zu spät kommt, bekommt den Antrag oft abgelehnt. Bei Unsicherheit frühzeitig telefonisch nachfragen." },
                { label: "Diese Angaben werden gebraucht", text: "Straße und Hausnummer, gewünschte Zonenlänge, Datum und Uhrzeit, Fahrzeugtyp. Manche Ämter verlangen auch den Namen des Umzugsunternehmens." },
                { label: "Schilder rechtzeitig aufstellen", text: "Mindestens 48 Stunden vor dem Umzugstag aufstellen, damit Anwohner ihre Fahrzeuge wegbewegen können. Zu kurzfristig aufgestellte Schilder sind rechtlich unwirksam." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Platzbedarf */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wie viel Fläche brauchen Sie?</h2>
            <div className="space-y-3">
              {[
                { fahrzeug: "Transporter bis 3,5 t", laenge: "ca. 6–7 m", hinweis: "Entspricht 2 normalen Parkplätzen" },
                { fahrzeug: "LKW 7,5 t", laenge: "ca. 8–10 m", hinweis: "Zzgl. Abstand zur Haustür einplanen" },
                { fahrzeug: "Großer LKW / Sattelzug", laenge: "bis 20 m", hinweis: "In engen Straßen vorab mit dem Amt besprechen" },
              ].map((row) => (
                <div key={row.fahrzeug} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm">
                  <span className="font-medium text-[#0D2137]">{row.fahrzeug}</span>
                  <span className="font-bold text-[#0088CC]">{row.laenge}</span>
                  <span className="text-[#5A7A8A] hidden sm:block">{row.hinweis}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#5A7A8A]">Lieber etwas mehr beantragen als zu wenig — die Mehrkosten sind gering, der Zeitverlust durch Platzmangel dagegen erheblich.</p>
          </div>

          {/* Was tun wenn jemand parkt */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was tun, wenn jemand trotzdem parkt?</h2>
            <ul className="space-y-3">
              {[
                { label: "Polizei oder Ordnungsamt rufen", text: "Nur die Behörde kann einen Abschleppvorgang einleiten. Selbst abschleppen oder das Fahrzeug berühren ist nicht erlaubt." },
                { label: "Genehmigung griffbereit haben", text: "Die behördliche Genehmigung beim Umzug dabei haben — der Abschleppdienst und das Ordnungsamt werden sie sehen wollen." },
                { label: "Kosten trägt der Falschparker", text: "Wer in einer genehmigten Zone parkt, zahlt die Abschleppkosten selbst. Das sind in der Regel 100–300 Euro plus Bußgeld." },
                { label: "Schilder früh aufstellen", text: "Je früher die Schilder stehen, desto mehr Zeit haben Anwohner, ihr Fahrzeug wegzubewegen — das vermeidet Konflikte am Umzugstag." },
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
              {HALTEVERBOT_FAQS.map((faq) => (
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
            <strong>Umzugskosten schon kalkuliert?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt, was ein Profi-Umzug in Ihrer Region realistisch kostet — inklusive typischer Zusatzkosten wie Halteverbot und Auf-/Abbau.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
