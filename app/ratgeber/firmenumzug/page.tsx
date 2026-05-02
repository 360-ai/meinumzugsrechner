import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { FIRMENUMZUG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Firmenumzug planen: Checkliste für Büro & Gewerbe 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie ein Firmenumzug reibungslos gelingt: Planungsvorlauf, Mietvertrag kündigen, IT sichern, Mitarbeiter informieren und alle Adressen aktualisieren — kompakt erklärt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Firmenumzug", "Büroumzug", "Gewerbeumzug Kosten"],
  ...pageCanonical("/ratgeber/firmenumzug/"),
  openGraph: {
    title: "Firmenumzug planen: Checkliste für Büro & Gewerbe 2026",
    description: PAGE_DESC,
    url: "/ratgeber/firmenumzug/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Planung: 6–12 Monate Vorlauf sind Pflicht",
    items: [
      { label: "Zeitplan festlegen", text: "Größere Firmenumzüge brauchen 6–12 Monate Vorlaufzeit. Der Grund: Gewerbemietverträge haben oft sechs Monate Kündigungsfrist, IT-Infrastruktur braucht Planung, und Mitarbeiter benötigen Zeit zur eigenen Vorbereitung." },
      { label: "Projektverantwortlichen benennen", text: "Ein Firmenumzug ist ein Projekt. Wer keinen klaren Verantwortlichen hat, riskiert, dass wichtige Aufgaben im Alltagsbetrieb untergehen." },
      { label: "Budget frühzeitig kalkulieren", text: "Neben dem Transport kommen Kosten für IT-Umzug, neue Ausstattung, doppelte Miete in der Übergangszeit und eventuelle Renovierungsarbeiten dazu." },
      { label: "Umzugsfirma mit Gewerbeerfahrung beauftragen", text: "Büroumzüge unterscheiden sich von Privatumzügen: Server, Aktenschränke, Großgeräte. Eine auf Gewerbe spezialisierte Firma kennt die Anforderungen." },
    ],
  },
  {
    heading: "Mietvertrag und Gewerbeanmeldung",
    items: [
      { label: "Kündigungsfrist im Vertrag prüfen", text: "Gewerbemietverträge haben gesetzlich keine einheitliche Kündigungsfrist — was im Vertrag steht, gilt. Üblich sind sechs Monate zum Quartalsende. Den Vertrag frühzeitig lesen und den Stichtag vormerken." },
      { label: "Schriftlich kündigen", text: "Kündigung per Einschreiben mit Rückschein — damit ist der Empfang belegt. E-Mail reicht rechtlich oft nicht aus, wenn der Vertrag Schriftform vorschreibt." },
      { label: "Gewerbeummeldung", text: "Bei einem Ortswechsel muss das Gewerbe am alten Standort abgemeldet und am neuen neu angemeldet werden. Zuständig ist das Gewerbeamt der jeweiligen Gemeinde." },
      { label: "Handelsregister und Finanzamt", text: "Handelsregistereintrag und Finanzamt über die neue Adresse informieren. Bei Finanzamtswechsel prüfen, ob sich die USt-Identifikationsnummer ändert." },
    ],
  },
  {
    heading: "IT und Infrastruktur — der kritischste Punkt",
    items: [
      { label: "Internetanschluss früh bestellen", text: "Vorlaufzeiten für Geschäftsanschlüsse betragen je nach Anbieter und Lage sechs bis zwölf Wochen. Wer zu spät bestellt, arbeitet am ersten Tag im neuen Büro ohne Netz." },
      { label: "Server und Workstations professionell umziehen", text: "IT-Equipment sollte von Fachleuten transportiert und neu aufgesetzt werden. Antivibrations-Verpackung, dokumentiertes Verkabeln, Funktionstest vor und nach dem Umzug." },
      { label: "Datensicherung vor dem Umzug", text: "Vor dem physischen Transport aller Geräte: vollständige Datensicherung auf externen Medien oder in der Cloud. Kein Umzug ohne aktuelles Backup." },
      { label: "Telefonnummern portieren", text: "Bestehende Telefonnummern können in der Regel zum neuen Anschluss mitgenommen werden. Frühzeitig mit dem Anbieter klären und die Portierung beauftragen — das dauert manchmal mehrere Wochen." },
    ],
  },
  {
    heading: "Mitarbeiter informieren",
    items: [
      { label: "So früh wie möglich", text: "Gerüchte entstehen schnell und verunsichern. Klare, frühzeitige Kommunikation schafft Vertrauen und gibt Mitarbeitern Zeit, ihre eigene Situation (Anfahrtsweg, Parkplatz) zu klären." },
      { label: "Neue Adresse und Erreichbarkeit", text: "Neue Anschrift, ÖPNV-Verbindungen, Parkmöglichkeiten, Adresse für das Navi — diese Informationen sollten allen Mitarbeitern rechtzeitig vorliegen." },
      { label: "Umzugskosten für Mitarbeiter", text: "Falls der neue Standort zu weit für den bisherigen Arbeitsweg ist, sind Gespräche über Homeoffice-Regelungen, Kilometerpauschalen oder andere Lösungen sinnvoll — möglichst vor dem Umzug." },
    ],
  },
  {
    heading: "Adressen aktualisieren: Was alles geändert werden muss",
    items: [
      { label: "Impressum und Website", text: "Das Impressum auf der Unternehmenswebsite muss die neue Adresse enthalten — das ist gesetzlich vorgeschrieben. Außerdem: Google Business-Profil, Social-Media-Profile." },
      { label: "Kunden und Lieferanten", text: "Aktive Geschäftspartner per E-Mail informieren und die neue Adresse in die Signatur aufnehmen. Rechnungen und Vertragsunterlagen auf neue Briefköpfe umstellen." },
      { label: "Behörden und Institutionen", text: "Finanzamt, Gewerbeamt, Handelsregister, Berufsgenossenschaft, Krankenkassen der Mitarbeiter, Berufsverbände. Alles schriftlich und mit Bestätigung." },
      { label: "Nachsendeauftrag für Post", text: "Einen gewerblichen Nachsendeauftrag bei der Deutschen Post einrichten — fängt Briefe auf, die trotz aller Änderungen noch an die alte Adresse gehen." },
    ],
  },
];

export default function FirmenumzugRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/firmenumzug/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: FIRMENUMZUG_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-firmenumzug-faq" data={faqLd} />
      <GuideLayout
        title="Firmenumzug planen: Von der Kündigung des Mietvertrags bis zum ersten Arbeitstag"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/firmenumzug/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Ein Firmenumzug ist kein Privatumzug — er braucht mehr Vorlauf</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Beim Privatumzug hängt der Erfolg vor allem von Planung und Muskelkraft ab. Beim Firmenumzug kommen Mietrecht, IT-Infrastruktur, Mitarbeiterkommunikation und Hunderte von Adressänderungen dazu. Wer zu spät anfängt, arbeitet am ersten Tag im neuen Büro ohne Internet — oder zahlt noch Monate Miete für Räume, die längst leer stehen. Dieser Ratgeber zeigt, was in welcher Reihenfolge zu tun ist.
            </p>
          </div>

          {/* Zeitplan */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Zeitplan: Was wann zu tun ist</h2>
            <div className="space-y-2 text-sm">
              {[
                { zeitpunkt: "12 Monate vorher", aufgabe: "Entscheidung treffen, Projektverantwortlichen benennen, neue Räume suchen" },
                { zeitpunkt: "8–6 Monate vorher", aufgabe: "Alten Mietvertrag kündigen, neue Räume unterschreiben, Umzugsfirma anfragen" },
                { zeitpunkt: "3 Monate vorher", aufgabe: "Mitarbeiter informieren, Internetanschluss bestellen, IT planen" },
                { zeitpunkt: "6 Wochen vorher", aufgabe: "Kunden und Lieferanten informieren, Nachsendeauftrag einrichten" },
                { zeitpunkt: "1 Woche vorher", aufgabe: "Datensicherung, Geräte beschriften, Zugangsdaten für neue Räume sichern" },
                { zeitpunkt: "Umzugstag", aufgabe: "IT-Team vor Ort, Funktionstest aller Systeme, erste Arbeitsfähigkeit herstellen" },
              ].map((row) => (
                <div key={row.zeitpunkt} className="flex gap-3 rounded-xl bg-white px-4 py-3">
                  <span className="w-36 flex-shrink-0 font-medium text-[#0088CC]">{row.zeitpunkt}</span>
                  <span className="text-[#5A7A8A]">{row.aufgabe}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mietvertrag */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Mietvertrag & Gewerbeanmeldung</h2>
            <ul className="space-y-3">
              {[
                { label: "Kündigungsfrist im Vertrag prüfen", text: "Gewerbemietverträge haben keine gesetzliche Einheitsfrist. Üblich sind sechs Monate zum Quartal. Den exakten Stichtag im Kalender vormerken." },
                { label: "Schriftlich per Einschreiben kündigen", text: "E-Mail reicht rechtlich oft nicht aus, wenn der Vertrag Schriftform vorschreibt. Kündigung per Einschreiben mit Rückschein — damit ist der Empfang belegt." },
                { label: "Gewerbe ummelden", text: "Am alten Standort abmelden, am neuen anmelden. Zuständig ist das Gewerbeamt der jeweiligen Gemeinde." },
                { label: "Handelsregister und Finanzamt", text: "Neue Adresse in den Registern aktualisieren. Bei Finanzamtswechsel prüfen, ob sich etwas an der USt-IdNr. ändert." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IT */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">IT & Infrastruktur — der kritischste Punkt</h2>
            <ul className="space-y-3">
              {[
                { label: "Internetanschluss 8–12 Wochen vorher bestellen", text: "Vorlaufzeiten für Geschäftsanschlüsse sind lang. Wer zu spät bestellt, arbeitet am ersten Tag ohne Netz." },
                { label: "Datensicherung vor dem Transport", text: "Vollständige Sicherung aller Daten auf externen Medien oder in der Cloud — kein IT-Umzug ohne aktuelles Backup." },
                { label: "Server und Workstations professionell umziehen", text: "Antivibrations-Verpackung, dokumentiertes Verkabeln, Funktionstest vor und nach dem Umzug." },
                { label: "Telefonnummern portieren", text: "Bestehende Nummern können mitgenommen werden — Portierung frühzeitig beauftragen, das dauert mehrere Wochen." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700", marginTop: "6px" }} />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Adressen */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Adressen aktualisieren: Die komplette Liste</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Impressum & Website",
                "Google Business-Profil",
                "Kunden und Lieferanten",
                "Briefköpfe und Rechnungsvorlagen",
                "Finanzamt",
                "Gewerbeamt & Handelsregister",
                "Berufsgenossenschaft",
                "Krankenkassen der Mitarbeiter",
                "Banken und Kreditinstitute",
                "Berufsverbände und Kammern",
                "Stromanbieter und Versicherungen",
                "Deutsche Post (Nachsendeauftrag)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#5A7A8A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
            <div className="space-y-3">
              {FIRMENUMZUG_FAQS.map((faq) => (
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
            <strong>Was kostet ein Firmenumzug?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> gibt einen ersten Anhaltspunkt — auch für gewerbliche Umzüge.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
