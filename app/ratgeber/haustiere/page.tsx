import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { HAUSTIERE_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Umzug mit Haustieren: Katze, Hund & Co. stressfrei umziehen | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie Katzen, Hunde, Kleintiere und Aquarien den Umzug möglichst entspannt überstehen — mit konkreten Tipps für jede Phase.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/haustiere/"),
  openGraph: {
    title: "Umzug mit Haustieren: Katze, Hund & Co. stressfrei umziehen",
    description: PAGE_DESC,
    url: "/ratgeber/haustiere/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "2–4 Wochen vorher: Die Grundlage legen",
    items: [
      { label: "Transportbox vertraut machen", text: "Box offen in der Wohnung aufstellen, Lieblingsdecke hineinlegen — das Tier soll sie als normalen Gegenstand kennenlernen, nicht erst am Umzugstag." },
      { label: "Routinen konsequent beibehalten", text: "Fütterungszeiten, Spaziergänge und Spielzeiten bleiben unverändert. Tiere orientieren sich an Tagesabläufen, nicht an Orten." },
      { label: "Tierarzt aufsuchen", text: "Impfpass prüfen, Microchip kontrollieren lassen, Adresse aktualisieren. Bei angstanfälligen Tieren lohnt sich das Gespräch über Beruhigungsmittel für den Umzugstag." },
      { label: "Neue Umgebung vorbereiten", text: "Falls möglich, Tier vorab in die neue Wohnung mitnehmen. Vertrauter Geruch und erste Erkundung reduzieren den Schock am eigentlichen Umzugstag." },
    ],
  },
  {
    heading: "Am Umzugstag",
    items: [
      { label: "Eigenen Raum einrichten", text: "Einen Raum frühzeitig abschließen, der vom Trubel abgeschirmt ist. Dort hinein: Wasser, Futter, Transportbox, Lieblingsdecke und Spielzeug." },
      { label: "Tier erst spät verladen", text: "Je kürzer das Tier im Transporter ist, desto besser. Erst fahren, wenn der LKW fast fertig beladen ist." },
      { label: "Temperatur im Fahrzeug prüfen", text: "Niemals Tiere in einem heißen, geschlossenen Auto lassen. Frischluftzufuhr sicherstellen." },
      { label: "Alternative: Tierpension oder Freunde", text: "Wer einen besonders stressempfindlichen Vierbeiner hat, kann ihn für den Umzugstag in vertrauter Umgebung unterbringen." },
    ],
  },
  {
    heading: "Katzen: mehr Zeit einplanen",
    items: [
      { label: "Zunächst ein Zimmer", text: "Katzen fühlen sich in kleinen, kontrollierbaren Bereichen sicherer. Erst ein Zimmer freigeben, nach 1–2 Tagen schrittweise erweitern." },
      { label: "Mindestens 2–4 Wochen drinnen lassen", text: "Freigänger sollten die neue Wohnung vollständig als Heimat akzeptiert haben, bevor sie nach draußen dürfen — sonst besteht Weglaufgefahr." },
      { label: "Bekannte Möbel zuerst aufstellen", text: "Kratzbäume, Schlafplätze und Futternäpfe an ähnlichen Positionen wie vorher aufstellen. Vertraute Gerüche wirken beruhigend." },
      { label: "Stress-Signale erkennen", text: "Verstecken, Futterverweigerung oder übermäßiges Miauen können auf Überforderung hinweisen. In der Regel legt sich das nach einigen Tagen." },
    ],
  },
  {
    heading: "Hunde: Bewegung hilft",
    items: [
      { label: "Spaziergänge von Anfang an", text: "Bereits am ersten Tag in der neuen Umgebung mehrfach Gassi gehen — Hunde erschließen sich Territorien über Geruch und Bewegung." },
      { label: "Neue Nachbarschaft gemeinsam erkunden", text: "Ruhige Spaziergänge in der direkten Umgebung helfen dem Hund, die neue Gegend als sicher einzustufen." },
      { label: "Schlafplatz sofort einrichten", text: "Das eigene Körbchen oder die Decke sollte am neuen Ort als erstes aufgebaut werden — sie ist der Anker." },
      { label: "Auf Verhaltensänderungen achten", text: "Anhänglichkeit, Unruhe oder Appetitlosigkeit in den ersten Tagen sind normal. Hält es länger als zwei Wochen an, lohnt ein Tierarztbesuch." },
    ],
  },
  {
    heading: "Kleintiere, Vögel & Aquarien",
    items: [
      { label: "Kleintiere & Vögel im eigenen Behälter transportieren", text: "Hamster, Kaninchen, Vögel und Reptilien bleiben während des Transports in ihrer gewohnten Unterkunft. Abdecken schützt vor Reizüberflutung." },
      { label: "Aquarium: 24 Stunden vorher nicht füttern", text: "Weniger Ausscheidungen im Wasser bedeuten stabilere Wasserqualität beim Transport. Fische erst mehrere Stunden nach dem Umzug wieder füttern." },
      { label: "Temperatur beim Aquarium-Transport kritisch", text: "Styroporboxen oder spezielle Fischtransportbeutel mit Sauerstoff nutzen. Temperaturschwankungen von mehr als 2–3 Grad können Fische stressen oder töten." },
      { label: "Filterbiologie erhalten", text: "Das Filterwasser nicht komplett wechseln — die eingesessenen Bakterien sind wichtig für das biologische Gleichgewicht." },
    ],
  },
  {
    heading: "Nach dem Umzug: Geduld ist der Schlüssel",
    items: [
      { label: "Routinen sofort wiederaufnehmen", text: "Gleiche Fütterungszeiten, gleiche Spielzeiten — Tiere stabilisieren sich über vorhersehbare Abläufe, nicht über die Umgebung." },
      { label: "Mehr Aufmerksamkeit geben", text: "In den ersten Wochen mehr Zeit mit dem Tier verbringen als üblich. Körpernähe signalisiert Sicherheit." },
      { label: "Altbekannte Gegenstände nicht sofort waschen", text: "Decken, Körbchen und Spielzeug riechen nach Zuhause — das ist gewollt. Vertraute Gerüche helfen bei der Eingewöhnung mehr als jede neue Einrichtung." },
      { label: "Tierarzt informieren", text: "Neue Adresse beim Tierarzt melden und bei Bedarf einen Tierarzt in der Nähe suchen — am besten bevor man ihn dringend braucht." },
    ],
  },
];

export default function HaustiereRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/haustiere/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: HAUSTIERE_FAQS,
  });

  return (
    <>
    <JsonLd id="ld-haustiere-faq" data={faqLd} />
    <GuideLayout
      title="Umzug mit Haustieren: Katze, Hund & Co. stressfrei umziehen"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/haustiere/",
        description: PAGE_DESC,
      }}
    >
      <div className="space-y-6">

        {/* Intro */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Warum Haustiere beim Umzug besondere Aufmerksamkeit brauchen</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Für Menschen ist ein Umzug eine bewusste Entscheidung. Für Haustiere ist er schlicht ein unerwarteter Einbruch in ihr vertrautes Revier. Katzen sind territorial und reagieren auf Veränderungen oft körperlich. Hunde orientieren sich an ihren Bezugspersonen — aber auch sie brauchen Zeit. Wer das versteht und den Umzug für sein Tier mitdenkt, spart sich unruhige erste Wochen und dem Tier echten Stress.
          </p>
        </div>

        {/* Section 1: Vorbereitung */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">2–4 Wochen vorher: Die Grundlage legen</h2>
          <ul className="space-y-3">
            {[
              { label: "Transportbox vertraut machen", text: "Box offen in der Wohnung aufstellen, Lieblingsdecke hineinlegen — das Tier soll sie als normalen Gegenstand kennenlernen, nicht erst am Umzugstag." },
              { label: "Routinen konsequent beibehalten", text: "Fütterungszeiten, Spaziergänge und Spielzeiten bleiben unverändert. Tiere orientieren sich an Tagesabläufen, nicht an Orten." },
              { label: "Tierarzt aufsuchen", text: "Impfpass prüfen, Microchip kontrollieren lassen, Adresse aktualisieren. Bei angstanfälligen Tieren lohnt sich das Gespräch über Beruhigungsmittel für den Umzugstag." },
              { label: "Neue Umgebung vorbereiten", text: "Falls möglich, Tier vorab in die neue Wohnung mitnehmen. Vertrauter Geruch und erste Erkundung reduzieren den Schock am eigentlichen Umzugstag." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Umzugstag */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Am Umzugstag</h2>
          <ul className="space-y-3">
            {[
              { label: "Eigenen Raum einrichten", text: "Einen Raum frühzeitig abschließen, der vom Trubel abgeschirmt ist. Dort hinein: Wasser, Futter, Transportbox, Lieblingsdecke und Spielzeug." },
              { label: "Tier erst spät verladen", text: "Je kürzer das Tier im Transporter ist, desto besser. Erst fahren, wenn der LKW fast fertig beladen ist." },
              { label: "Temperatur im Fahrzeug prüfen", text: "Niemals Tiere in einem heißen, geschlossenen Auto lassen. Frischluftzufuhr sicherstellen, auch im Winter keine Heizungsluft direkt auf die Box blasen." },
              { label: "Alternative: Tierpension oder Freunde", text: "Wer einen besonders stressempfindlichen Vierbeiner hat, kann ihn für den Umzugstag in vertrauter Umgebung unterbringen — das ist keine Lösung zweiter Wahl, sondern oft die beste." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Katzen / Hunde nebeneinander */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Katzen: mehr Zeit einplanen</h2>
            <ul className="space-y-3">
              {[
                { label: "Zunächst ein Zimmer", text: "Kleine Bereiche geben Sicherheit. Erst nach 1–2 Tagen schrittweise erweitern." },
                { label: "2–4 Wochen drinnen lassen", text: "Freigänger erst raus, wenn die Wohnung vollständig als Heimat akzeptiert ist." },
                { label: "Bekannte Möbel zuerst", text: "Kratzbäume und Schlafplätze an ähnlichen Positionen aufstellen wie vorher." },
                { label: "Stress-Signale beobachten", text: "Verstecken, Futterverweigerung oder übermäßiges Miauen legen sich meist nach wenigen Tagen." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Hunde: Bewegung hilft</h2>
            <ul className="space-y-3">
              {[
                { label: "Spaziergänge von Anfang an", text: "Bereits am ersten Tag mehrfach Gassi — Hunde erschließen neue Reviere über Geruch und Bewegung." },
                { label: "Umgebung gemeinsam erkunden", text: "Ruhige Runden in der Nachbarschaft helfen, die neue Gegend als sicher einzustufen." },
                { label: "Schlafplatz als erstes aufbauen", text: "Das eigene Körbchen ist der Anker — sollte als erstes Möbelstück stehen." },
                { label: "Anhänglichkeit ist normal", text: "Unruhe und mehr Körpernähe in den ersten Wochen sind typisch. Hält es über zwei Wochen an: Tierarzt." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 4: Kleintiere & Aquarien */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Kleintiere, Vögel & Aquarien</h2>
          <ul className="space-y-3">
            {[
              { label: "Im eigenen Behälter transportieren", text: "Hamster, Kaninchen, Vögel und Reptilien bleiben in ihrer gewohnten Unterkunft. Abdecken schützt vor Reizüberflutung." },
              { label: "Aquarium: 24 Stunden vorher nicht füttern", text: "Weniger Ausscheidungen stabilisieren die Wasserqualität. Fische erst mehrere Stunden nach dem Umzug wieder füttern." },
              { label: "Temperaturschwankungen vermeiden", text: "Styroporboxen oder Fischtransportbeutel mit Sauerstoff nutzen. Mehr als 2–3 Grad Abweichung sind für viele Fischarten kritisch." },
              { label: "Filterbiologie erhalten", text: "Das Filterwasser nicht komplett austauschen — die eingesessenen Bakterienkulturen sind entscheidend für das biologische Gleichgewicht." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 5: Nach dem Umzug */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Nach dem Umzug: Geduld ist der Schlüssel</h2>
          <ul className="space-y-3">
            {[
              { label: "Routinen sofort wiederaufnehmen", text: "Gleiche Fütterungszeiten, gleiche Spielzeiten. Vorhersehbare Abläufe sind für Tiere beruhigender als jede neue Einrichtung." },
              { label: "Mehr Aufmerksamkeit geben", text: "In den ersten Wochen mehr Zeit mit dem Tier verbringen als üblich — Körpernähe signalisiert Sicherheit." },
              { label: "Altbekannte Gegenstände nicht sofort waschen", text: "Decken und Körbchen riechen nach Zuhause. Vertraute Gerüche helfen mehr als eine schnell aufgeräumte Wohnung." },
              { label: "Neuen Tierarzt frühzeitig suchen", text: "Neue Adresse beim Tierarzt melden und einen Arzt in der Nähe recherchieren — am besten bevor man ihn dringend braucht." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Schnellübersicht */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Schnellübersicht: Die 5 wichtigsten Punkte</h2>
          <div className="space-y-3">
            {[
              "Transportbox 2–4 Wochen vorher im Alltag einsetzen",
              "Am Umzugstag: abgeschlossener Rückzugsraum mit vertrauten Gegenständen",
              "Routinen sofort wiederaufnehmen — gleiche Zeiten, gleiche Plätze",
              "Katzen: mindestens 2–4 Wochen drinnen lassen, schrittweise Wohnung öffnen",
              "Verhaltensänderungen über 2 Wochen hinaus: Tierarzt aufsuchen",
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>{i + 1}</div>
                <span className="text-sm text-[#5A7A8A]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
          <div className="space-y-3">
            {HAUSTIERE_FAQS.map((faq) => (
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
          <strong>Umzug mit Haustier planen?</strong> Nutzen Sie unseren{" "}
          <a href="/rechner/" className="underline font-medium">kostenlosen Kostenrechner</a>, um einen realistischen Preisrahmen für Ihren Umzug zu ermitteln — damit Sie wissen, womit Sie rechnen müssen, bevor Sie Angebote einholen.
        </div>

      </div>
    </GuideLayout>
    </>
  );
}
