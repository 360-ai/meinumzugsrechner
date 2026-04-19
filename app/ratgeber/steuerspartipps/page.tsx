import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Steuern sparen beim Umzug: §35a EStG & Umzugskostenpauschale | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie Sie Umzugskosten steuerlich absetzen: Haushaltsnahe Dienstleistungen nach §35a, Umzugskostenpauschale bei beruflichem Umzug. Praxis-Tipps für die Steuererklärung.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/steuerspartipps/"),
  openGraph: {
    title: "Steuern sparen beim Umzug: §35a EStG & Umzugskostenpauschale",
    description: PAGE_DESC,
    url: "/ratgeber/steuerspartipps/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Privater Umzug — §35a EStG",
    items: [
      { label: "Haushaltsnahe Dienstleistungen", text: "20 % der Lohnkosten sind steuerlich absetzbar." },
      { label: "Maximale Steuererstattung", text: "4.000 € pro Jahr." },
      { label: "Voraussetzung", text: "Rechnung + Überweisung (kein Barzahlungsnachweis anerkannt)." },
      { label: "Beispiel", text: "Umzugsunternehmen stellt 3.000 € Lohnanteil in Rechnung → 600 € Erstattung vom Finanzamt." },
      { label: "Hinweis", text: "Nur der Lohnanteil zählt (nicht Material/Anfahrt)." },
    ],
  },
  {
    heading: "Beruflicher Umzug — Umzugskostenpauschale",
    items: [
      { label: "Voraussetzung", text: "Berufliche Veranlassung: neuer Job, Versetzung oder Arbeitsweg mindestens 30 Minuten kürzer." },
      { label: "Pauschbetrag 2026", text: "964 € (Alleinstehende), 1.928 € (mit weiterer Person im Haushalt), +430 € pro weiteres Haushaltsmitglied." },
      { label: "Zusätzlich absetzbar", text: "Kosten fürs Umzugsunternehmen, doppelte Miete (max. 6 Monate), Maklergebühren." },
      { label: "Nachweis", text: "Beruflicher Nachweis durch Arbeitgeber oder Versetzungsschreiben erforderlich." },
    ],
  },
  {
    heading: "Praxis-Tipps für die Steuererklärung",
    items: [
      { label: "Aufbewahrung", text: "Rechnung immer aufheben (10 Jahre)." },
      { label: "Lohnanteil", text: "Lohnanteil vom Umzugsunternehmen separat ausweisen lassen." },
      { label: "Steuerberater", text: "Lohnt sich ab ca. 2.000 € Umzugskosten." },
      { label: "Formular", text: "Anlage Haushaltsnahe Dienstleistungen (Zeile 71–72 in der Steuererklärung)." },
      { label: "Tipp", text: "Auch Handwerkerarbeiten in der neuen Wohnung (z. B. Bodenverlegung) können zusätzlich abgesetzt werden." },
    ],
  },
];

export default function SteuerspartippsPage() {
  return (
    <GuideLayout
      title="Steuern sparen beim Umzug"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/steuerspartipps/",
        description: PAGE_DESC,
      }}
    >
      <div className="space-y-6">

        {/* Section 1 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Privater Umzug — §35a EStG</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Als Privatperson können Sie die Kosten Ihres Umzugsunternehmens über
            §35a EStG (Haushaltsnahe Dienstleistungen) steuerlich geltend machen:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Haushaltsnahe Dienstleistungen:</strong> 20 % der Lohnkosten sind steuerlich absetzbar.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Maximale Steuererstattung:</strong> 4.000 € pro Jahr.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Voraussetzung:</strong> Rechnung + Überweisung — kein Barzahlungsnachweis wird vom Finanzamt anerkannt.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Beispiel:</strong> Das Umzugsunternehmen stellt 3.000 € Lohnanteil in Rechnung → 600 € Erstattung vom Finanzamt.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Wichtig:</strong> Nur der Lohnanteil zählt — Material- und Anfahrtskosten sind nicht absetzbar.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Beruflicher Umzug — Umzugskostenpauschale</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Bei beruflich bedingtem Umzug greift die Umzugskostenpauschale — zusätzlich
            zu den tatsächlich entstandenen Kosten:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>1</div>
              <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Voraussetzung:</strong> Berufliche Veranlassung — neuer Job, Versetzung oder Arbeitsweg mindestens 30 Minuten kürzer.</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>2</div>
              <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Pauschbetrag 2026:</strong> 964 € (Alleinstehende), 1.928 € (mit weiterer Person im Haushalt), +430 € pro weiteres Haushaltsmitglied.</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>3</div>
              <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Zusätzlich absetzbar:</strong> Kosten fürs Umzugsunternehmen, doppelte Miete (max. 6 Monate), Maklergebühren.</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>4</div>
              <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Nachweis:</strong> Berufliche Veranlassung durch Arbeitgeber oder Versetzungsschreiben belegen.</span>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Praxis-Tipps für die Steuererklärung</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            So bereiten Sie Ihre Unterlagen optimal vor und holen das Maximum heraus:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFCC00] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Belege aufheben:</strong> Rechnung immer aufheben (Aufbewahrungspflicht: 10 Jahre).</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFCC00] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Lohnanteil ausweisen:</strong> Lohnanteil vom Umzugsunternehmen separat auf der Rechnung ausweisen lassen.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFCC00] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Steuerberater:</strong> Lohnt sich ab ca. 2.000 € Umzugskosten.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFCC00] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Formular:</strong> Anlage Haushaltsnahe Dienstleistungen (Zeile 71–72 in der Steuererklärung).</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFCC00] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Bonus-Tipp:</strong> Auch Handwerkerarbeiten in der neuen Wohnung (z. B. Bodenverlegung) können zusätzlich abgesetzt werden.</span>
            </li>
          </ul>
        </div>

        {/* Hinweis-Box */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong>Hinweis:</strong> Dieser Leitfaden dient zur Orientierung und ersetzt keine Steuerberatung. Bei komplexen Situationen empfehlen wir einen Steuerberater.
        </div>

      </div>
    </GuideLayout>
  );
}
