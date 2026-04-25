import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { UMMELDEN_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Ummelden nach dem Umzug: Fristen, Dokumente & Checkliste 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Was Sie bei der Ummeldung nach dem Umzug beachten müssen: gesetzliche Fristen, benötigte Dokumente, welche Behörden informiert werden müssen — kompakt und aktuell.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/ummelden/"),
  openGraph: {
    title: "Ummelden nach dem Umzug: Fristen, Dokumente & Checkliste 2026",
    description: PAGE_DESC,
    url: "/ratgeber/ummelden/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Pflicht: Ummeldung beim Einwohnermeldeamt",
    items: [
      { label: "Gesetzliche Frist", text: "In den meisten Bundesländern 14 Tage nach Einzug, in einigen nur 7 Tage. Wer zu spät kommt, riskiert ein Bußgeld bis 1.000 Euro." },
      { label: "Wohnungsgeberbestätigung", text: "Pflichtdokument seit 2015. Der Vermieter muss es innerhalb von zwei Wochen nach Einzug ausstellen — ohne dieses Papier ist die Ummeldung nicht möglich." },
      { label: "Personalausweis / Reisepass", text: "Gültiges Ausweisdokument zwingend erforderlich. Wer nur einen abgelaufenen Ausweis hat, muss diesen parallel erneuern lassen." },
      { label: "Termin vorab buchen", text: "Viele Einwohnermeldeämter bieten Online-Terminbuchung an. Ohne Termin sind die Wartezeiten oft lang — am besten schon vor dem Umzug buchen." },
    ],
  },
  {
    heading: "KFZ ummelden",
    items: [
      { label: "Pflicht bei Landkreiswechsel", text: "Wer in einen anderen Landkreis oder eine andere kreisfreie Stadt zieht, muss das Fahrzeug bei der neuen Zulassungsstelle ummelden. Neues Kennzeichen ist in der Regel Pflicht." },
      { label: "Mitbringen zur Zulassungsstelle", text: "Fahrzeugschein (Zulassungsbescheinigung Teil I), Personalausweis, eVB-Nummer der KFZ-Versicherung — und bei Bedarf die Zulassungsbescheinigung Teil II." },
      { label: "Versicherung informieren", text: "Die KFZ-Versicherung muss über den Wohnortwechsel informiert werden, da sich die Regionalklasse ändern kann. Das kann den Beitrag beeinflussen — in beide Richtungen." },
      { label: "Innerhalb desselben Landkreises", text: "Kein neues Kennzeichen nötig. Die Zulassungsstelle muss trotzdem informiert werden, damit die Adresse im Fahrzeugschein aktualisiert wird." },
    ],
  },
  {
    heading: "Diese Stellen müssen Sie selbst informieren",
    items: [
      { label: "Finanzamt", text: "Zuständig wird das Finanzamt am neuen Wohnort. Adressänderung online über ELSTER oder per Brief melden — relevant für Steuerbescheide und Steuer-ID." },
      { label: "Kranken- und Pflegeversicherung", text: "Adresse mitteilen, damit Bescheide und Beitragsunterlagen ankommen. Bei einem Kassenwechsel wegen regionaler Tarife lohnt sich ein Vergleich." },
      { label: "Deutsche Rentenversicherung", text: "Wird häufig vergessen, ist aber relevant für spätere Rentenbescheide. Adressänderung per Brief oder Online-Service melden." },
      { label: "Beitragsservice (GEZ)", text: "Neuer Wohnort muss gemeldet werden, auch wenn man bereits angemeldet ist. Sonst gehen Bescheide an die alte Adresse — inklusive Mahnungen." },
      { label: "Arbeitgeber", text: "Für Gehaltsabrechnungen, Lohnsteuer und Sozialversicherung. Personalabteilung informieren, die kümmert sich um den Rest." },
      { label: "Alle Banken und Kreditinstitute", text: "Konto-Korrespondenz, Kreditkartenbescheide, Depotauszüge — alle müssen auf die neue Adresse umgestellt werden." },
    ],
  },
  {
    heading: "Empfehlung: Nachsendeauftrag als Sicherheitsnetz",
    items: [
      { label: "Was er leistet", text: "Der Nachsendeauftrag der Deutschen Post leitet Post von der alten Adresse an die neue weiter. Er fängt Sendungen auf, die trotz aller Änderungen noch an die alte Adresse gehen." },
      { label: "Mindestens 5 Werktage vorher bestellen", text: "Die Aktivierung dauert 3–5 Werktage. Wer zu spät bestellt, hat in den ersten Tagen nach dem Umzug eine Lücke." },
      { label: "Kosten und Laufzeit", text: "Sechs Monate kosten ca. 28 Euro, ein Jahr ca. 40 Euro. Online buchbar. Verlängerung möglich." },
      { label: "Kein Ersatz für Adressänderungen", text: "Der Nachsendeauftrag ist eine Überbrückung, kein Dauerzustand. Parallel dazu sollten alle wichtigen Stellen direkt informiert werden." },
    ],
  },
];

export default function UmmeldenRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/ummelden/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: UMMELDEN_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-ummelden-faq" data={faqLd} />
      <GuideLayout
        title="Ummelden nach dem Umzug: Fristen, Dokumente & was viele vergessen"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/ummelden/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Ummelden ist Pflicht — und hat eine kurze Frist</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Die Ummeldung beim Einwohnermeldeamt ist in Deutschland gesetzlich vorgeschrieben. Wer sie vergisst oder zu lange aufschiebt, riskiert ein Bußgeld. Gleichzeitig gilt: Die Ummeldung informiert nicht automatisch alle anderen Stellen. Finanzamt, Versicherungen, Rentenversicherung und Banken müssen separat benachrichtigt werden. Dieser Ratgeber zeigt, wer zu informieren ist, was mitgebracht werden muss — und welche Fehler am häufigsten gemacht werden.
            </p>
          </div>

          {/* Fristen-Box */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Frist auf einen Blick</h2>
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              {[
                { label: "Einwohnermeldeamt", value: "14 Tage (einige BL: 7 Tage)" },
                { label: "KFZ-Zulassung", value: "kein fixer Termin, aber zügig" },
                { label: "Nachsendeauftrag", value: "mind. 5 Werktage vorher" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="text-xs text-amber-700 font-medium mb-1">{item.label}</div>
                  <div className="font-semibold text-[#0D2137]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Einwohnermeldeamt */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Pflicht: Ummeldung beim Einwohnermeldeamt</h2>
            <ul className="space-y-3">
              {[
                { label: "Gesetzliche Frist", text: "14 Tage nach Einzug in den meisten Bundesländern, in einigen nur 7 Tage. Bußgeld bei Versäumnis: bis zu 1.000 Euro." },
                { label: "Wohnungsgeberbestätigung", text: "Pflichtdokument seit 2015 — muss vom Vermieter ausgestellt werden. Ohne dieses Formular läuft die Ummeldung nicht." },
                { label: "Personalausweis / Reisepass", text: "Gültiges Ausweisdokument mitbringen. Wer nur einen abgelaufenen Ausweis hat, sollte diesen parallel erneuern lassen." },
                { label: "Termin vorab buchen", text: "Online-Terminbuchung nutzen, viele Ämter haben lange Wartezeiten. Am besten bereits vor dem Umzugstag buchen." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* KFZ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">KFZ ummelden — wann ist es Pflicht?</h2>
            <ul className="space-y-3">
              {[
                { label: "Landkreiswechsel", text: "Bei einem Umzug in einen anderen Landkreis oder eine andere kreisfreie Stadt ist die KFZ-Ummeldung Pflicht. Neues Kennzeichen ist in der Regel erforderlich." },
                { label: "Mitbringen zur Zulassungsstelle", text: "Zulassungsbescheinigung Teil I, Personalausweis, eVB-Nummer der KFZ-Versicherung — und bei Bedarf Teil II der Zulassungsbescheinigung." },
                { label: "Versicherung informieren", text: "Pflicht: Die Regionalklasse kann sich ändern und damit der Beitrag. Manche Versicherer passen die Prämie automatisch an, sobald die neue Adresse gemeldet ist." },
                { label: "Innerhalb desselben Landkreises", text: "Kein neues Kennzeichen nötig, aber die Adresse im Fahrzeugschein sollte trotzdem bei der Zulassungsstelle aktualisiert werden." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alle Stellen */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Diese Stellen informieren Sie selbst</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Finanzamt", text: "Zuständig wird das Finanzamt am neuen Wohnort. Adressänderung per ELSTER oder Brief." },
                { label: "Kranken- & Pflegeversicherung", text: "Adresse melden, damit Bescheide und Unterlagen ankommen." },
                { label: "Deutsche Rentenversicherung", text: "Wird oft vergessen — relevant für spätere Rentenbescheide." },
                { label: "Beitragsservice (GEZ)", text: "Neue Adresse melden, sonst gehen Mahnungen an die alte Adresse." },
                { label: "Arbeitgeber / Personalabteilung", text: "Für Gehaltsabrechnungen und Lohnsteuerdaten." },
                { label: "Alle Banken & Kreditkarten", text: "Kontokorrespondenz, Depotauszüge, Kreditkartenbescheide." },
                { label: "Internet- & Stromanbieter", text: "Vertrag kündigen oder ummelden — je nach Anbieter unterschiedlich." },
                { label: "Online-Shops & Abos", text: "Amazon, Zalando und Co.: Standardadresse aktualisieren, bevor das erste Paket weggeht." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nachsendeauftrag */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Nachsendeauftrag: Sicherheitsnetz, kein Ersatz</h2>
            <p className="mb-3 text-sm text-[#5A7A8A] leading-relaxed">
              Der Nachsendeauftrag leitet Post von der alten Adresse weiter — er fängt auf, was bei den Adressänderungen durchrutscht. Mindestens 5 Werktage vor dem Umzug bestellen. Kosten: ca. 28 Euro für 6 Monate.
            </p>
            <p className="text-sm text-[#5A7A8A]">
              Wichtig: Er ist eine Brücke, kein Dauerzustand. Alle wichtigen Stellen sollten trotzdem direkt informiert werden.
            </p>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
            <div className="space-y-3">
              {UMMELDEN_FAQS.map((faq) => (
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
            <strong>Umzugskosten noch nicht kalkuliert?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt, was ein Profi-Umzug in Ihrer Region realistisch kostet — ohne Datenweitergabe an Umzugsfirmen.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
