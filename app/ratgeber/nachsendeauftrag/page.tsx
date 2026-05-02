import { GuideLayout } from "@/components/GuideLayout";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { NACHSENDEAUFTRAG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "Nachsendeauftrag: Kosten, Dauer & Schritt-für-Schritt-Anleitung | meinumzugsrechner.de";
const PAGE_DESC =
  "Nachsendeauftrag bei der Post einrichten: Was er kostet, wie lange er dauert, online vs. Filiale — und welche Post trotzdem nicht weitergeleitet wird.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Nachsendeauftrag", "Post Nachsendeauftrag Kosten", "Nachsendeauftrag online", "Umzug Post umleiten"],
  ...pageCanonical("/ratgeber/nachsendeauftrag/"),
  openGraph: {
    title: "Nachsendeauftrag: Kosten, Dauer & Anleitung",
    description: PAGE_DESC,
    url: "/ratgeber/nachsendeauftrag/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {
    heading: "Was ist ein Nachsendeauftrag?",
    items: [
      { label: "Funktion", text: "Die Deutsche Post leitet Briefe und Pakete von Ihrer alten Adresse an Ihre neue weiter — für einen festgelegten Zeitraum." },
      { label: "Geltungsbereich", text: "Gilt für Sendungen der Deutschen Post und DHL. Andere Paketdienste wie Hermes, DPD oder GLS leiten nicht automatisch weiter." },
      { label: "Warum wichtig", text: "Bis alle Stellen Ihre neue Adresse kennen, vergehen oft Wochen bis Monate. Der Nachsendeauftrag verhindert, dass wichtige Post verloren geht." },
    ],
  },
  {
    heading: "Kosten & Laufzeit",
    items: [
      { label: "6 Monate online", text: "Ab 31,90 € online (34,90 € in der Filiale) — in der Regel ausreichend für private Umzüge." },
      { label: "12 Monate online", text: "Verlängerung um weitere 6 Monate möglich — empfohlen, wenn viele Verträge und Abos umgestellt werden müssen." },
      { label: "In der Filiale", text: "Aufschlag von ca. 4–5 €. Vorteil: sofortige Identitätsprüfung vor Ort." },
      { label: "Verlängerung", text: "Einmalig um 6 oder 12 Monate möglich. Maximale Gesamtlaufzeit: 24 Monate." },
    ],
  },
  {
    heading: "Online einrichten — Schritt für Schritt",
    items: [
      { label: "Schritt 1", text: "Gehen Sie auf nachsendeauftrag.de (offizielle Seite der Deutschen Post)." },
      { label: "Schritt 2", text: "Wählen Sie Privat oder Geschäftlich, dann Laufzeit (6 oder 12 Monate)." },
      { label: "Schritt 3", text: "Geben Sie Ihre alte und neue Adresse ein." },
      { label: "Schritt 4", text: "Identität bestätigen — per Online-Ausweisfunktion, PostIdent oder Kreditkarte." },
      { label: "Schritt 5", text: "Bezahlen per Kreditkarte, PayPal oder SEPA-Lastschrift. Fertig." },
      { label: "Aktivierung", text: "Der Auftrag ist nach ca. 5 Werktagen aktiv. Planen Sie den Auftrag daher mindestens eine Woche vor dem Umzug." },
    ],
  },
  {
    heading: "Was wird nicht nachgesendet?",
    items: [
      { label: "Andere Paketdienste", text: "Hermes, DPD, GLS, UPS und Amazon-Logistik leiten nicht weiter. Adresse dort separat ändern." },
      { label: "Zeitungen & Zeitschriften", text: "Abonnements werden in der Regel nicht nachgesendet. Adressänderung direkt beim Verlag melden." },
      { label: "Werbesendungen", text: "Unadressierte Werbung wird nicht weitergeleitet — nur adressierte Post." },
      { label: "Einschreiben mit Rückschein", text: "Können unter Umständen nicht nachgesendet werden. Wichtige behördliche Post vorab umleiten." },
    ],
  },
  {
    heading: "Tipps für einen reibungslosen Übergang",
    items: [
      { label: "Früh starten", text: "Nachsendeauftrag mindestens 7-10 Tage vor dem Umzug einrichten." },
      { label: "Parallel informieren", text: "Nutzen Sie die Laufzeit des Nachsendeauftrags, um alle Stellen systematisch zu informieren. Unsere Adressänderungs-Checkliste hilft dabei." },
      { label: "Briefkasten beschriften", text: "Am neuen Wohnort sofort Ihren Namen am Briefkasten anbringen — sonst kann die Post nicht zugestellt werden." },
      { label: "Alten Briefkasten beobachten", text: "In den ersten Tagen nach dem Umzug ggf. noch den alten Briefkasten prüfen, bis der Nachsendeauftrag greift." },
    ],
  },
];

export default function NachsendeauftragPage() {
  return (
    <>
      <JsonLd
        id="ld-nachsendeauftrag-faq"
        data={webPageAndFaqSchema({
          path: "/ratgeber/nachsendeauftrag/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: NACHSENDEAUFTRAG_FAQS,
        })}
      />
      <GuideLayout
        title="Nachsendeauftrag: Kosten, Dauer & Anleitung"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/nachsendeauftrag/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Warum ein Nachsendeauftrag unverzichtbar ist</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Nach einem Umzug dauert es oft Wochen, bis alle Vertragspartner, Behörden und Bekannten Ihre neue Adresse haben. In dieser Übergangszeit sorgt der Nachsendeauftrag der Deutschen Post dafür, dass wichtige Briefe, Bescheide und Pakete nicht ins Leere gehen. Besonders für Steuerbescheide, Versicherungsunterlagen und Bankpost ist das entscheidend.
          </p>
        </div>

        {/* Kosten-Übersicht */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was kostet ein Nachsendeauftrag?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Laufzeit</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Online</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Filiale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">6 Monate (Privat)</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">31,90 €</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">34,90 €</td>
                </tr>
                <tr className="hover:bg-[#FAFCFE]">
                  <td className="px-4 py-3 font-medium text-[#0D2137]">6 Monate (Geschäftlich)</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">51,90 €</td>
                  <td className="px-4 py-3 text-[#5A7A8A]">–</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#5A7A8A]">Preise Stand 2026, können sich ändern. Für Geschäftskunden gelten andere Tarife.</p>
        </div>

        {/* Schritt für Schritt */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Online einrichten — Schritt für Schritt</h2>
          <ol className="space-y-3">
            {[
              { step: "1", text: "Auf nachsendeauftrag.de gehen (offizielle Seite der Deutschen Post)" },
              { step: "2", text: "Privat oder Geschäftlich wählen, Laufzeit festlegen (6 oder 12 Monate)" },
              { step: "3", text: "Alte und neue Adresse eingeben" },
              { step: "4", text: "Identität bestätigen — per Online-Ausweisfunktion, PostIdent oder Kreditkarte" },
              { step: "5", text: "Bezahlen per Kreditkarte, PayPal oder SEPA-Lastschrift" },
            ].map((s) => (
              <li key={s.step} className="flex items-start gap-3 text-sm text-[#5A7A8A]">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#0088CC" }}>
                  {s.step}
                </span>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-xl border p-3 text-sm" style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}>
            <strong className="text-[#0D2137]">Wichtig:</strong>{" "}
            <span className="text-[#5A7A8A]">Der Auftrag wird nach ca. 5 Werktagen aktiv. Richten Sie ihn daher mindestens 7–10 Tage vor dem Umzug ein.</span>
          </div>
        </div>

        {/* Was wird nicht nachgesendet */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was wird nicht nachgesendet?</h2>
          <ul className="space-y-2">
            {[
              { label: "Hermes, DPD, GLS, UPS", text: "Adresse dort separat ändern" },
              { label: "Amazon-Logistik", text: "Im Amazon-Konto Adresse aktualisieren" },
              { label: "Zeitungen & Zeitschriften", text: "Direkt beim Verlag Adresse ändern" },
              { label: "Unadressierte Werbung", text: "Wird nie nachgesendet" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF7700" strokeWidth="2.5" strokeLinecap="round" className="h-3 w-3">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tipps */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Tipps für einen reibungslosen Übergang</h2>
          <ul className="space-y-2">
            {[
              "Nachsendeauftrag mindestens 7–10 Tage vor dem Umzug einrichten",
              "Parallel alle wichtigen Stellen über die neue Adresse informieren",
              "Am neuen Wohnort sofort Ihren Namen am Briefkasten anbringen",
              "In den ersten Tagen den alten Briefkasten noch prüfen",
              "Nach Ablauf des Nachsendeauftrags prüfen, ob noch Post an die alte Adresse geht",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Verwandte Links */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Weiterführende Informationen</h2>
          <ul className="space-y-2">
            <li className="text-sm">
              <Link href="/ratgeber/ummelden/" className="font-medium text-[#0088CC] hover:underline">Ummelden nach dem Umzug →</Link>
              <span className="text-[#5A7A8A]"> — Fristen, Dokumente und Behörden-Checkliste</span>
            </li>
            <li className="text-sm">
              <Link href="/checklisten/umzugscheckliste/" className="font-medium text-[#0088CC] hover:underline">Vollständige Umzugscheckliste →</Link>
              <span className="text-[#5A7A8A]"> — Alle Aufgaben von der Planung bis zum Einzug</span>
            </li>
            <li className="text-sm">
              <Link href="/ratgeber/steuerspartipps/" className="font-medium text-[#0088CC] hover:underline">Steuern sparen beim Umzug →</Link>
              <span className="text-[#5A7A8A]"> — Auch der Nachsendeauftrag kann absetzbar sein</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Häufige Fragen zum Nachsendeauftrag</h2>
          <FaqAccordion items={NACHSENDEAUFTRAG_FAQS} />
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#EBF6FD" }}>
          <p className="mb-4 font-bold text-[#0D2137]">Umzugskosten vorab einordnen?</p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner →
          </Link>
        </div>
      </GuideLayout>
    </>
  );
}
