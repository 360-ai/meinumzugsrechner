import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { SENIORENUMZUG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Seniorenumzug: Stressfrei umziehen im Alter 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie ein Umzug im Alter gut gelingt: Planung, Barrierefreiheit, Aussortieren und emotionale Vorbereitung — mit konkreten Tipps für Betroffene und Angehörige.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Seniorenumzug", "Umzug Senioren", "altersgerecht umziehen"],
  ...pageCanonical("/ratgeber/seniorenumzug/"),
  openGraph: {
    title: "Seniorenumzug: Stressfrei umziehen im Alter 2026",
    description: PAGE_DESC,
    url: "/ratgeber/seniorenumzug/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Früh planen: Warum 3–6 Monate Vorlauf nötig sind",
    items: [
      { label: "Wohnform entscheiden", text: "Barrierefreie Wohnung, betreutes Wohnen, Seniorenresidenz oder kleinere Mietwohnung — die Entscheidung kostet Zeit und sollte nicht unter Druck getroffen werden." },
      { label: "Wohnungsuche mit Vorlauf", text: "Barrierefreie Wohnungen sind begehrter als normale Wohnungen. Wer sechs Monate im Voraus sucht, hat mehr Auswahl und Verhandlungsspielraum." },
      { label: "Behörden und Ämter einplanen", text: "Ummeldung, KFZ, Rentenversicherung, Krankenversicherung — die bürokratischen Schritte brauchen Zeit. Nicht alles auf einmal angehen." },
      { label: "Umzugsfirma rechtzeitig buchen", text: "Seriöse Umzugsunternehmen mit Erfahrung bei Seniorenumzügen sind oft Wochen im Voraus ausgebucht. Mindestens vier Wochen vor dem Wunschtermin anfragen." },
    ],
  },
  {
    heading: "Aussortieren: In kleinen Schritten loslassen",
    items: [
      { label: "Nicht alles auf einmal", text: "Jahrzehntelang gesammelter Hausrat lässt sich nicht an einem Wochenende sortieren. Besser: Raum für Raum, eine Woche nach der anderen. Das schont Kraft und Nerven." },
      { label: "Familie einbeziehen", text: "Möbel, Fotos und Erinnerungsstücke können an Kinder oder Enkel weitergegeben werden. Das macht das Loslassen leichter — und schenkt ein Stück Kontinuität." },
      { label: "Was bleibt, was geht", text: "Pragmatische Frage: Passt es in die neue Wohnung? Wird es gebraucht? Hat es emotionalen Wert? Was auf alle drei Fragen mit Nein antwortet, kann gehen." },
      { label: "Spenden, nicht wegwerfen", text: "Gut erhaltene Möbel und Kleidung können an Sozialkaufhäuser, Kirchengemeinden oder über Kleinanzeigen weitergegeben werden. Das fühlt sich besser an als Entsorgen." },
    ],
  },
  {
    heading: "Barrierefreiheit der neuen Wohnung prüfen",
    items: [
      { label: "Vor der Entscheidung besichtigen", text: "Fotos zeigen Barrieren oft nicht. Die Wohnung persönlich besuchen und dabei auf Stufen, Türbreiten, Badgestaltung und Aufzug achten." },
      { label: "Checkliste Barrierefreiheit", text: "Ebener Eingang ohne Stufen, Aufzug oder Erdgeschoss, bodengleiche Dusche, Haltegriffe im Bad, Türen mindestens 80 cm breit, rutschfeste Böden im Bad." },
      { label: "Nachrüsten ist möglich", text: "Haltegriffe, Duschsitze und Rampen können nachträglich eingebaut werden. Vor dem Einzug mit dem Vermieter klären, was erlaubt ist — und wer die Kosten trägt." },
      { label: "ÖPNV und Einkaufsmöglichkeiten", text: "Die beste Wohnung hilft wenig, wenn Arzt, Apotheke und Supermarkt nicht gut erreichbar sind. Lage mindestens so wichtig wie die Wohnungsgröße." },
    ],
  },
  {
    heading: "Am Umzugstag: Entlasten statt belasten",
    items: [
      { label: "Profis tragen die schweren Möbel", text: "Schwerarbeit sollten Umzugshelfer oder eine Firma übernehmen. Das Verletzungsrisiko beim Selbstschleppen ist im Alter real — und ein Arbeitsunfall des Umzugsunternehmens ist versichert, der eigene Rücken nicht." },
      { label: "Rückzugsmöglichkeit schaffen", text: "Am Umzugstag sollte die umziehende Person nicht mitten im Chaos stehen. Familie oder Nachbarn können für ein paar Stunden für Ablenkung sorgen oder begleiten." },
      { label: "Wichtiges griffbereit halten", text: "Medikamente, wichtige Dokumente, Telefon und Ladekabel — diese Dinge nicht im LKW verstauen, sondern separat mitnehmen." },
      { label: "Einen ruhigen Folgetag einplanen", text: "Der Tag nach dem Umzug sollte nicht mit Aufbauarbeit vollgepackt sein. Körper und Kopf brauchen Erholung — eine gemütliche erste Nacht ist wichtiger als ausgeräumte Kartons." },
    ],
  },
  {
    heading: "Nach dem Umzug: Ankommen braucht Zeit",
    items: [
      { label: "Vertraute Gegenstände zuerst aufstellen", text: "Lieblingsstuhl, bekannte Lampe, Familienfotos — vertraute Objekte machen aus einem fremden Ort schneller ein Zuhause." },
      { label: "Neue Nachbarschaft erkunden", text: "Spaziergang in der Umgebung, Supermarkt, Apotheke, Park — die neue Umgebung in kleinen Schritten kennenlernen." },
      { label: "Kontakte aufbauen", text: "Wenn möglich: Hausgemeinschaft kennenlernen, lokale Gruppen oder Vereine suchen. Soziale Einbindung ist der stärkste Faktor für ein gutes Ankommen." },
      { label: "Geduld mit sich selbst", text: "Sich nach einigen Wochen noch nicht ganz zuhause zu fühlen ist normal. Das legt sich — bei den meisten Menschen innerhalb weniger Monate." },
    ],
  },
];

export default function SeniorenumzugRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/seniorenumzug/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: SENIORENUMZUG_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-seniorenumzug-faq" data={faqLd} />
      <GuideLayout
        title="Seniorenumzug: Stressfrei umziehen im Alter — Tipps für Betroffene & Angehörige"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/seniorenumzug/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Ein Umzug im Alter ist anders — aber er gelingt</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Wer mit 70 umzieht, hat oft Jahrzehnte in einer Wohnung gelebt. Der Hausrat ist gewachsen, die Verbundenheit mit Ort und Nachbarschaft ist tief, und gleichzeitig spielen Gesundheit und Barrierefreiheit eine Rolle, die früher keine war. Mit ausreichend Zeit, der richtigen Unterstützung und einem realistischen Plan gelingt der Umzug im Alter gut — dieser Ratgeber zeigt, worauf es wirklich ankommt.
            </p>
          </div>

          {/* Früh planen */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Früh planen: Warum 3–6 Monate Vorlauf nötig sind</h2>
            <ul className="space-y-3">
              {[
                { label: "Wohnform entscheiden", text: "Barrierefreie Wohnung, betreutes Wohnen oder Seniorenresidenz — die Entscheidung kostet Zeit und sollte nicht unter Druck getroffen werden." },
                { label: "Wohnungssuche mit Vorlauf", text: "Barrierefreie Wohnungen sind begehrter als normale Wohnungen. Sechs Monate Vorlauf bedeutet mehr Auswahl und weniger Druck." },
                { label: "Umzugsfirma rechtzeitig buchen", text: "Gute Umzugsunternehmen sind oft Wochen im Voraus ausgebucht. Mindestens vier Wochen vor dem Wunschtermin anfragen." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aussortieren */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Aussortieren: In kleinen Schritten loslassen</h2>
            <ul className="space-y-3">
              {[
                { label: "Nicht alles auf einmal", text: "Raum für Raum, Woche für Woche. Das schont Kraft und lässt Raum für Entscheidungen, die man nicht bereut." },
                { label: "Familie einbeziehen", text: "Möbel, Fotos und Erinnerungsstücke können weitergegeben werden. Das macht Loslassen leichter — und ist oft mehr wert als Entsorgen." },
                { label: "Pragmatische Frage stellen", text: "Passt es in die neue Wohnung? Wird es gebraucht? Hat es emotionalen Wert? Wer auf alle drei Fragen Nein antwortet, kann loslassen." },
                { label: "Spenden statt wegwerfen", text: "Gut erhaltene Möbel an Sozialkaufhäuser oder per Kleinanzeigen weitergeben — das fühlt sich besser an als Entsorgen." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Barrierefreiheit */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Barrierefreiheit: Checkliste für die neue Wohnung</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Ebener Eingang ohne Stufen",
                "Aufzug oder Erdgeschosslage",
                "Bodengleiche Dusche (kein Wannenrand)",
                "Haltegriffe im Bad (oder nachrüstbar)",
                "Türbreite mind. 80 cm (Rollator)",
                "Rutschfeste Böden im Nassbereich",
                "Arzt, Apotheke, Supermarkt gut erreichbar",
                "Parkplatz oder ÖPNV-Anbindung",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#5A7A8A]">
                  <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700" }} />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#5A7A8A]">Vor der Entscheidung persönlich besichtigen — Fotos zeigen Barrieren oft nicht zuverlässig.</p>
          </div>

          {/* Umzugstag */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Am Umzugstag: Entlasten statt belasten</h2>
            <ul className="space-y-3">
              {[
                { label: "Schweres den Profis überlassen", text: "Schwere Möbel selbst schleppen birgt ein reales Verletzungsrisiko. Eine Umzugsfirma ist versichert — der eigene Rücken nicht." },
                { label: "Rückzugsmöglichkeit schaffen", text: "Nicht mitten im Chaos stehen müssen. Familie kann für einige Stunden begleiten oder ablenken, während der Umzug läuft." },
                { label: "Wichtiges separat einpacken", text: "Medikamente, Ausweise, Telefon und Ladekabel gehören in eine separate Tasche, nicht in den LKW." },
                { label: "Ruhigen Folgetag einplanen", text: "Der erste Tag in der neuen Wohnung sollte entspannt sein. Kartons können noch Tage später ausgepackt werden." },
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
              {SENIORENUMZUG_FAQS.map((faq) => (
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
            <strong>Was kostet ein Seniorenumzug?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt einen realistischen Preiskorridor für Ihre Region — ohne Anmeldung, ohne Datenweitergabe.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
