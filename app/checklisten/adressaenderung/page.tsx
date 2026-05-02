import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { ADRESSAENDERUNG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Adressänderung beim Umzug: Vollständige Checkliste 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Alle Stellen die bei einem Umzug über die neue Adresse informiert werden müssen — von Behörden über Versicherungen bis Online-Shops. Zum Abhaken.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Adressänderung Umzug",
    "Adresse ändern Umzug",
    "Ummeldung Checkliste",
    "Adressänderung Checkliste",
    "Umzug Adresse mitteilen",
  ],
  ...pageCanonical("/checklisten/adressaenderung/"),
  openGraph: {
    title: "Adressänderung beim Umzug: Vollständige Checkliste 2026",
    description: PAGE_DESC,
    url: "/checklisten/adressaenderung/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

/* ---------- Checkmark helper ---------- */
function Check({ color = "#0088CC", bg = "#EBF6FD" }: { color?: string; bg?: string }) {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: bg }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function CheckList({
  items,
  color,
  bg,
}: {
  items: { label: string; text: string }[];
  color?: string;
  bg?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
          <Check color={color} bg={bg} />
          <span>
            <strong className="text-[#0D2137]">{item.label}:</strong> {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Sections for PDF export ---------- */
const sections: GuideSection[] = [
  {
    heading: "Warum eine Checkliste für die Adressänderung?",
    items: [
      { label: "Viele Stellen", text: "Die meisten Menschen vergessen mindestens 5 Stellen bei der Adressänderung — oft mit unangenehmen Folgen." },
      { label: "Nachsendeauftrag", text: "Ein Nachsendeauftrag ist ein gutes Sicherheitsnetz, aber kein Ersatz für eine vollständige Adressänderung." },
    ],
  },
  {
    heading: "Behörden & Pflichtmeldungen",
    items: [
      { label: "Einwohnermeldeamt", text: "Innerhalb von 14 Tagen ummelden (Pflicht). Wohnungsgeberbestätigung + Ausweis mitbringen." },
      { label: "Finanzamt / ELSTER", text: "Zuständigkeit wechselt zum Finanzamt am neuen Wohnort." },
      { label: "KFZ-Zulassungsstelle", text: "Bei Kreiswechsel: Fahrzeug ummelden." },
      { label: "Beitragsservice / GEZ", text: "Adresse online unter rundfunkbeitrag.de ändern." },
      { label: "Bundesagentur für Arbeit", text: "Falls ALG-Bezug: Adresse melden, Zuständigkeit kann wechseln." },
      { label: "BAföG-Amt", text: "Falls Student: Adresse melden, ggf. neues Amt zuständig." },
    ],
  },
  {
    heading: "Arbeitgeber & Sozialversicherung",
    items: [
      { label: "Arbeitgeber / Personalabteilung", text: "Neue Adresse für Lohnabrechnung und Steuer." },
      { label: "Krankenkasse", text: "Adresse melden, damit Bescheide ankommen." },
      { label: "Rentenversicherung", text: "Adresse für Rentenbescheide aktualisieren." },
      { label: "Berufsgenossenschaft", text: "Für Selbständige: Adresse melden." },
      { label: "Riester / Rürup-Anbieter", text: "Falls vorhanden: Adresse beim Anbieter ändern." },
    ],
  },
  {
    heading: "Finanzen & Versicherungen",
    items: [
      { label: "Bank / Sparkasse", text: "Adresse im Online-Banking oder in der Filiale ändern." },
      { label: "Kreditkartenunternehmen", text: "Rechnungsadresse aktualisieren." },
      { label: "Versicherungen", text: "Haftpflicht, Hausrat, KFZ, BU etc. — Adresse und ggf. Wohnfläche melden." },
      { label: "Bausparkasse", text: "Adresse für Bescheide und Kontoauszüge aktualisieren." },
      { label: "Depot / Broker", text: "Adresse im Kundenkonto ändern." },
    ],
  },
  {
    heading: "Versorger & Telekommunikation",
    items: [
      { label: "Strom- und Gasanbieter", text: "Umzug melden oder kündigen. Zählerstand am Umzugstag notieren." },
      { label: "Wasserwerk", text: "Oft über den Vermieter geregelt. Bei Eigenheim: Stadtwerke kontaktieren." },
      { label: "Internetanbieter", text: "Umzug melden. Sonderkündigungsrecht prüfen." },
      { label: "Mobilfunkanbieter", text: "Adresse im Kundenkonto ändern." },
    ],
  },
  {
    heading: "Post & Abonnements",
    items: [
      { label: "Nachsendeauftrag", text: "Deutsche Post: ab 28,90 Euro für 6 Monate. Mindestens 7-10 Tage vor Umzug." },
      { label: "Zeitungen / Zeitschriften", text: "Adresse direkt beim Verlag ändern." },
      { label: "Streaming-Dienste", text: "Rechnungsadresse aktualisieren." },
      { label: "Online-Shops", text: "Amazon, Zalando etc. — Lieferadresse in den Einstellungen ändern." },
      { label: "Vereinsmitgliedschaften", text: "Adresse für Beitragseinzug und Post melden." },
    ],
  },
  {
    heading: "Sonstiges",
    items: [
      { label: "Schule / Kindergarten", text: "Neue Adresse melden. Bei Schulwechsel frühzeitig anmelden." },
      { label: "Hausarzt / Zahnarzt", text: "Adresse aktualisieren oder Unterlagen zum neuen Arzt übertragen." },
      { label: "Tierarzt", text: "Falls Haustier: neue Adresse melden, Impfpass aktualisieren." },
      { label: "ADAC / Automobilclub", text: "Adresse für Mitgliedschaft und Pannenhilfe aktualisieren." },
      { label: "Gemeindebücherei", text: "Ausweis auf neue Adresse umschreiben lassen." },
      { label: "Fitnessstudio", text: "Adresse melden. Bei langem Anfahrtsweg ggf. Sonderkündigungsrecht." },
    ],
  },
  {
    heading: "Die richtige Reihenfolge",
    items: [
      { label: "1-2 Wochen vorher", text: "Nachsendeauftrag einrichten." },
      { label: "Umzugswoche", text: "Einwohnermeldeamt, Arbeitgeber." },
      { label: "Erste 2 Wochen danach", text: "Bank, Versicherungen, Versorger." },
      { label: "Innerhalb 1 Monat", text: "Online-Shops, Vereine, Abos." },
    ],
  },
];

export default function AdressaenderungPage() {
  return (
    <>
      <JsonLd
        id="ld-adressaenderung-faq"
        data={webPageAndFaqSchema({
          path: "/checklisten/adressaenderung/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: ADRESSAENDERUNG_FAQS,
        })}
      />
      <GuideLayout
        title="Adressänderung beim Umzug"
        category="checklisten"
        categoryLabel="Checklisten"
        sections={sections}
        articleSeo={{
          path: "/checklisten/adressaenderung/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* 1 — Warum eine Checkliste? */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
              Warum eine Checkliste für die Adressänderung?
            </h2>
            <p className="text-sm leading-relaxed text-[#5A7A8A]">
              Bei einem Umzug müssen dutzende Stellen über die neue Adresse informiert werden.
              Wer Stellen vergisst, riskiert verlorene Post, versäumte Fristen und im schlimmsten
              Fall Bußgelder. Ein{" "}
              <Link href="/ratgeber/nachsendeauftrag/" className="font-medium text-[#0088CC] hover:underline">
                Nachsendeauftrag
              </Link>{" "}
              ist ein gutes Sicherheitsnetz — aber kein Ersatz für eine vollständige Adressänderung
              bei allen relevanten Stellen.
            </p>
          </div>

          {/* 2 — Behörden & Pflichtmeldungen */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-1 text-lg font-bold text-[#0D2137]">Behörden & Pflichtmeldungen</h2>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FF7700]">
              Pflicht — zuerst erledigen
            </p>
            <CheckList
              color="#FF7700"
              bg="#FFF3E8"
              items={[
                { label: "Einwohnermeldeamt", text: "Innerhalb von 14 Tagen ummelden (Pflicht!). Wohnungsgeberbestätigung + Personalausweis mitbringen. Wer die Frist versäumt, riskiert ein Bußgeld bis 1.000 Euro." },
                { label: "Finanzamt / ELSTER", text: "Zuständigkeit wechselt zum Finanzamt am neuen Wohnort. Adressänderung online über ELSTER oder per Brief melden." },
                { label: "KFZ-Zulassungsstelle", text: "Bei Kreiswechsel: Fahrzeug ummelden. Fahrzeugschein, Personalausweis und eVB-Nummer der KFZ-Versicherung mitbringen." },
                { label: "Beitragsservice / GEZ", text: "Adresse online unter rundfunkbeitrag.de ändern. Bei Zusammenzug: eine Person zahlt, andere abmelden." },
                { label: "Bundesagentur für Arbeit", text: "Falls ALG-Bezug: Adresse melden, Zuständigkeit kann wechseln." },
                { label: "BAföG-Amt", text: "Falls Student: Adresse melden, ggf. wird ein anderes Amt zuständig." },
              ]}
            />
          </div>

          {/* 3 — Arbeitgeber & Sozialversicherung */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Arbeitgeber & Sozialversicherung</h2>
            <CheckList
              items={[
                { label: "Arbeitgeber / Personalabteilung", text: "Neue Adresse für Lohnabrechnung, Lohnsteuer und Sozialversicherung melden." },
                { label: "Krankenkasse", text: "Adresse mitteilen, damit Bescheide und Beitragsunterlagen ankommen." },
                { label: "Rentenversicherung", text: "Wird häufig vergessen — ist aber relevant für spätere Rentenbescheide. Online oder per Brief melden." },
                { label: "Berufsgenossenschaft", text: "Für Selbständige: Adresse für Beitrags- und Unfallmeldungen aktualisieren." },
                { label: "Riester / Rürup-Anbieter", text: "Falls vorhanden: Adresse beim jeweiligen Anbieter ändern." },
              ]}
            />
          </div>

          {/* 4 — Finanzen & Versicherungen */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Finanzen & Versicherungen</h2>
            <CheckList
              items={[
                { label: "Banken und Sparkassen", text: "Adresse im Online-Banking ändern oder in der Filiale. Wichtig für Kontoauszüge, Kreditkarten und TAN-Briefe." },
                { label: "Kreditkartenunternehmen", text: "Rechnungsadresse aktualisieren — sonst gehen Abrechnungen ins Leere." },
                { label: "Versicherungen", text: "Haftpflicht, Hausrat, KFZ, BU und weitere: Adresse ändern. Bei Hausrat ggf. neue Wohnfläche und Versicherungssumme prüfen." },
                { label: "Bausparkasse", text: "Adresse für Bescheide und Kontoauszüge aktualisieren." },
                { label: "Depot / Broker", text: "Adresse im Kundenkonto ändern — relevant für steuerliche Bescheinigungen." },
              ]}
            />
          </div>

          {/* 5 — Versorger & Telekommunikation */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Versorger & Telekommunikation</h2>
            <CheckList
              items={[
                { label: "Strom- und Gasanbieter", text: "Alten Vertrag kündigen oder Umzug melden. Zählerstand am Umzugstag an beiden Standorten notieren!" },
                { label: "Wasserwerk", text: "Oft über den Vermieter geregelt. Bei Eigenheim: Stadtwerke direkt kontaktieren." },
                { label: "Internetanbieter", text: "Umzug beim Provider melden. Prüfen, ob der Vertrag am neuen Standort verfügbar ist — sonst Sonderkündigungsrecht." },
                { label: "Mobilfunkanbieter", text: "Adresse im Kundenkonto ändern. Vertrag läuft standortunabhängig weiter." },
                { label: "GEZ / Rundfunkbeitrag", text: "Bereits bei Behörden erwähnt — siehe oben." },
              ]}
            />
          </div>

          {/* 6 — Post & Abonnements */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Post & Abonnements</h2>
            <CheckList
              items={[
                { label: "Nachsendeauftrag", text: "Bei der Deutschen Post einrichten (ab 28,90 Euro für 6 Monate). Mindestens 7-10 Tage vor dem Umzug bestellen." },
                { label: "Zeitungen und Zeitschriften", text: "Adresse direkt beim Verlag ändern — der Nachsendeauftrag erfasst diese oft nicht." },
                { label: "Streaming-Dienste", text: "Netflix, Spotify, Disney+ etc. — Rechnungsadresse im Konto aktualisieren." },
                { label: "Online-Shops", text: "Amazon, Zalando, Otto & Co. — neue Standardadresse setzen, bevor das erste Paket weggeht." },
                { label: "Vereinsmitgliedschaften", text: "Sportverein, Gewerkschaft, Berufsverband etc. — Adresse für Beitragseinzug und Post melden." },
              ]}
            />
          </div>

          {/* 7 — Sonstiges */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Sonstiges</h2>
            <CheckList
              items={[
                { label: "Schule / Kindergarten", text: "Neue Adresse melden. Bei Schulwechsel frühzeitig an der neuen Schule anmelden." },
                { label: "Hausarzt / Zahnarzt", text: "Adresse aktualisieren. Falls Arztwechsel: Unterlagen übertragen lassen." },
                { label: "Tierarzt", text: "Falls Haustier vorhanden: neue Adresse melden, Impfpass und Chip-Daten aktualisieren." },
                { label: "ADAC / Automobilclub", text: "Adresse für Mitgliedschaft und Pannenhilfe aktualisieren." },
                { label: "Gemeindebücherei", text: "Ausweis auf neue Adresse umschreiben lassen oder abmelden." },
                { label: "Fitnessstudio", text: "Adresse melden. Bei langem Anfahrtsweg nach dem Umzug ggf. Sonderkündigungsrecht prüfen." },
              ]}
            />
          </div>

          {/* 8 — Profi-Tipp: Die richtige Reihenfolge (orange Info-Box) */}
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
              Profi-Tipp: Die richtige Reihenfolge
            </h2>
            <ul className="space-y-3">
              {[
                { label: "1-2 Wochen vor dem Umzug", text: "Nachsendeauftrag bei der Deutschen Post einrichten." },
                { label: "Umzugswoche", text: "Einwohnermeldeamt (innerhalb 14 Tage nach Einzug) und Arbeitgeber informieren." },
                { label: "Erste 2 Wochen danach", text: "Bank, Versicherungen und Versorger (Strom, Gas, Internet) umstellen." },
                { label: "Innerhalb von 1 Monat", text: "Online-Shops, Vereine, Abos und alle weiteren Stellen aktualisieren." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#FFE0B3" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF7700"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong className="text-[#0D2137]">{item.label}:</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 9 — FAQ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
              Häufige Fragen zur Adressänderung
            </h2>
            <FaqAccordion items={ADRESSAENDERUNG_FAQS} />
          </div>

          {/* 10 — CTA */}
          <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#EBF6FD" }}>
            <p className="mb-4 font-bold text-[#0D2137]">Umzugskosten berechnen</p>
            <p className="mb-5 text-sm text-[#5A7A8A]">
              Was kostet Ihr Umzug mit Profis? Unser Rechner zeigt realistische Kosten
              — ohne Datenweitergabe an Umzugsfirmen.
            </p>
            <Link
              href="/rechner/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Zum Umzugskosten-Rechner
            </Link>
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
