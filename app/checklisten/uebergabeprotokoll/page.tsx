import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { UEBERGABEPROTOKOLL_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Übergabeprotokoll Wohnung: Vorlage & Checkliste 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Übergabeprotokoll für die Wohnungsübergabe — was dokumentiert werden muss, Zählerstände, Mängel, Schlüssel. Mit druckbarer Checkliste.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Übergabeprotokoll Wohnung",
    "Wohnungsübergabe Protokoll",
    "Übergabeprotokoll Vorlage",
    "Wohnungsübergabe Checkliste",
    "Mängel dokumentieren Auszug",
  ],
  ...pageCanonical("/checklisten/uebergabeprotokoll/"),
  openGraph: {
    title: "Übergabeprotokoll Wohnung: Vorlage & Checkliste 2026",
    description: PAGE_DESC,
    url: "/checklisten/uebergabeprotokoll/",
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
    heading: "Warum ein Übergabeprotokoll wichtig ist",
    items: [
      { label: "Schutz", text: "Schützt Mieter und Vermieter vor ungerechtfertigten Forderungen nach der Übergabe." },
      { label: "Kein Pflichtformat", text: "Es gibt kein gesetzlich vorgeschriebenes Format, aber ein Protokoll wird dringend empfohlen." },
      { label: "Einzug & Auszug", text: "Ein Übergabeprotokoll sollte bei Einzug UND Auszug erstellt werden." },
    ],
  },
  {
    heading: "Allgemeine Angaben",
    items: [
      { label: "Datum und Uhrzeit", text: "Genaues Datum und Uhrzeit der Übergabe festhalten." },
      { label: "Parteien", text: "Namen und Adressen beider Parteien (Mieter und Vermieter)." },
      { label: "Wohnungsanschrift", text: "Vollständige Anschrift der übergebenen Wohnung." },
      { label: "Übergabegrund", text: "Einzug oder Auszug angeben." },
      { label: "Zeugen", text: "Anwesende Zeugen mit Name und Kontaktdaten aufnehmen." },
    ],
  },
  {
    heading: "Raumweise Zustandsbeschreibung",
    items: [
      { label: "Wände und Decken", text: "Zustand, Farbe, Risse, Flecken dokumentieren." },
      { label: "Böden", text: "Kratzer, Beschädigungen, Flecken notieren." },
      { label: "Fenster und Türen", text: "Funktion, Dichtungen, Schäden prüfen." },
      { label: "Heizkörper", text: "Funktion und Ventile testen." },
      { label: "Steckdosen und Lichtschalter", text: "Funktion prüfen." },
    ],
  },
  {
    heading: "Zählerstände",
    items: [
      { label: "Strom", text: "Zählernummer und Stand in kWh notieren." },
      { label: "Gas", text: "Zählernummer und Stand in m³ notieren." },
      { label: "Wasser", text: "Kalt- und Warmwasser getrennt erfassen." },
      { label: "Heizung", text: "Zählernummer und Stand notieren." },
    ],
  },
  {
    heading: "Schlüsselübergabe",
    items: [
      { label: "Wohnungsschlüssel", text: "Anzahl der übergebenen Wohnungsschlüssel." },
      { label: "Kellerschlüssel", text: "Anzahl der Kellerschlüssel." },
      { label: "Briefkastenschlüssel", text: "Anzahl der Briefkastenschlüssel." },
      { label: "Sonstige Schlüssel", text: "Garage, Tiefgarage, Waschküche, Gemeinschaftsräume." },
    ],
  },
  {
    heading: "Mängel und Schäden",
    items: [
      { label: "Beschreibung", text: "Jeden Mangel einzeln beschreiben: Wo? Was? Wie groß?" },
      { label: "Fotos", text: "Fotos mit Zeitstempel als Nachweis anfertigen." },
      { label: "Zuordnung", text: "Bestehende Mängel vs. neue Mängel kennzeichnen." },
    ],
  },
  {
    heading: "Unterschriften",
    items: [
      { label: "Beide Parteien", text: "Mieter und Vermieter unterschreiben das Protokoll." },
      { label: "Kopien", text: "Jede Partei erhält eine Kopie des unterschriebenen Protokolls." },
    ],
  },
];

const ROOMS = [
  "Flur",
  "Küche",
  "Bad / WC",
  "Wohnzimmer",
  "Schlafzimmer",
  "Kinderzimmer",
  "Balkon / Terrasse",
  "Keller",
  "Dachboden",
];

const ROOM_CHECKS = [
  { label: "Wände und Decken", text: "Zustand, Farbe, Risse, Flecken" },
  { label: "Böden", text: "Kratzer, Beschädigungen, Flecken" },
  { label: "Fenster und Türen", text: "Funktion, Dichtungen, Schäden" },
  { label: "Heizkörper", text: "Funktion, Ventile" },
  { label: "Steckdosen und Lichtschalter", text: "Funktion prüfen" },
  { label: "Einbauschränke / Einbauküche", text: "Falls vorhanden: Zustand dokumentieren" },
  { label: "Spezielle Mängel", text: "Mit genauen Angaben zu Ort, Art und Umfang" },
];

const ZAEHLER_ROWS = [
  { name: "Strom", unit: "kWh" },
  { name: "Gas", unit: "m³" },
  { name: "Wasser (kalt)", unit: "m³" },
  { name: "Wasser (warm)", unit: "m³" },
  { name: "Heizung", unit: "" },
];

export default function UebergabeprotokollPage() {
  return (
    <>
      <JsonLd
        id="ld-uebergabeprotokoll-faq"
        data={webPageAndFaqSchema({
          path: "/checklisten/uebergabeprotokoll/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: UEBERGABEPROTOKOLL_FAQS,
        })}
      />
      <GuideLayout
        title="Übergabeprotokoll Wohnung"
        category="checklisten"
        categoryLabel="Checklisten"
        sections={sections}
        articleSeo={{
          path: "/checklisten/uebergabeprotokoll/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* 1 — Warum ein Übergabeprotokoll wichtig ist */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
              Warum ein Übergabeprotokoll wichtig ist
            </h2>
            <p className="text-sm leading-relaxed text-[#5A7A8A]">
              Ein Übergabeprotokoll dokumentiert den Zustand einer Wohnung zum
              Zeitpunkt der Übergabe. Es schützt beide Seiten — Mieter und
              Vermieter — vor ungerechtfertigten Forderungen nach dem Auszug. Ein
              gesetzlich vorgeschriebenes Format gibt es nicht, doch ein sorgfältig
              ausgefülltes Protokoll wird von Gerichten als starkes Beweismittel
              anerkannt.
            </p>
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: "#0088CC40", backgroundColor: "#EBF6FD" }}
            >
              <p className="text-sm font-semibold text-[#0D2137]">
                Tipp: Auch beim Einzug ein Protokoll erstellen
              </p>
              <p className="mt-1 text-sm text-[#5A7A8A]">
                Nur wer den Zustand bei Einzug dokumentiert hat, kann bei Auszug
                beweisen, welche Mängel bereits vorhanden waren. Das
                Einzugsprotokoll ist genauso wichtig wie das Auszugsprotokoll.
              </p>
            </div>
          </div>

          {/* 2 — Allgemeine Angaben */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
              Allgemeine Angaben
            </h2>
            <CheckList
              items={[
                { label: "Datum und Uhrzeit", text: "Genaues Datum und Uhrzeit der Übergabe festhalten." },
                { label: "Namen und Adressen", text: "Vollständige Namen und Adressen beider Parteien (Mieter und Vermieter bzw. Hausverwaltung)." },
                { label: "Anschrift der Wohnung", text: "Vollständige Adresse der übergebenen Wohnung inkl. Stockwerk und Lage." },
                { label: "Grund der Übergabe", text: "Einzug oder Auszug klar angeben." },
                { label: "Anwesende Zeugen", text: "Name und Kontaktdaten aller anwesenden Zeugen notieren — im Streitfall sehr wertvoll." },
              ]}
            />
          </div>

          {/* 3 — Raumweise Zustandsbeschreibung */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
              Raumweise Zustandsbeschreibung
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
              Gehen Sie jeden Raum einzeln durch und dokumentieren Sie den Zustand
              anhand der folgenden Punkte:
            </p>

            <CheckList items={ROOM_CHECKS} />

            <h3 className="mb-3 mt-6 text-sm font-bold text-[#0D2137]">
              Zu prüfende Räume
            </h3>
            <div className="flex flex-wrap gap-2">
              {ROOMS.map((room) => (
                <span
                  key={room}
                  className="rounded-full px-3 py-1 text-xs font-medium text-[#0D2137]"
                  style={{ backgroundColor: "#EBF6FD" }}
                >
                  {room}
                </span>
              ))}
            </div>
          </div>

          {/* 4 — Zählerstände */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Zählerstände</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
              Notieren Sie alle Zählerstände am Tag der Übergabe. Vergleichen Sie
              die Nummern auf dem Zähler mit den Angaben im Mietvertrag.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#EBF6FD" }}>
                    <th className="rounded-tl-lg px-4 py-2 font-bold text-[#0D2137]">Zähler</th>
                    <th className="px-4 py-2 font-bold text-[#0D2137]">Zählernummer</th>
                    <th className="rounded-tr-lg px-4 py-2 font-bold text-[#0D2137]">Stand</th>
                  </tr>
                </thead>
                <tbody>
                  {ZAEHLER_ROWS.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-slate-100 transition-colors hover:bg-[#FAFCFE]"
                    >
                      <td className="px-4 py-2 font-medium text-[#0D2137]">{row.name}</td>
                      <td className="px-4 py-2 text-[#5A7A8A]">_______________</td>
                      <td className="px-4 py-2 text-[#5A7A8A]">
                        ___________{row.unit ? ` ${row.unit}` : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: "#0088CC40", backgroundColor: "#EBF6FD" }}
            >
              <p className="text-sm font-semibold text-[#0D2137]">
                Tipp: Zählerstände fotografieren!
              </p>
              <p className="mt-1 text-sm text-[#5A7A8A]">
                Machen Sie von jedem Zählerstand ein Foto mit sichtbarer
                Zählernummer. So haben Sie bei späteren Unstimmigkeiten mit dem
                Versorger oder Vermieter einen sicheren Nachweis.
              </p>
            </div>
          </div>

          {/* 5 — Schlüsselübergabe */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Schlüsselübergabe</h2>
            <CheckList
              items={[
                { label: "Wohnungsschlüssel", text: "Anzahl der übergebenen Wohnungsschlüssel notieren." },
                { label: "Kellerschlüssel", text: "Anzahl der Kellerschlüssel festhalten." },
                { label: "Briefkastenschlüssel", text: "Anzahl der Briefkastenschlüssel dokumentieren." },
                { label: "Garagenschlüssel / Tiefgarage", text: "Schlüssel oder Fernbedienung für Garage bzw. Tiefgarage." },
                { label: "Sonstige Schlüssel", text: "Waschküche, Gemeinschaftsräume, Fahrradkeller und weitere." },
                { label: "Gesamtzahl und Empfangsbestätigung", text: "Gesamtanzahl aller Schlüssel vermerken und den Empfang von beiden Parteien bestätigen lassen." },
              ]}
            />
          </div>

          {/* 6 — Mängel und Schäden (orange Info-Box) */}
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
              Mängel und Schäden
            </h2>
            <ul className="space-y-3">
              {[
                { label: "Einzeln beschreiben", text: "Jeden Mangel separat dokumentieren: Wo genau? Was ist beschädigt? Wie groß ist der Schaden?" },
                { label: "Fotos mit Zeitstempel", text: "Fotografieren Sie jeden Mangel — idealerweise mit aktiviertem Zeitstempel in der Kamera-App." },
                { label: "Bestehend vs. neu", text: "Kennzeichnen Sie klar, ob ein Mangel bereits bei Einzug vorhanden war oder neu entstanden ist." },
                { label: "Bei Streit", text: "Protokoll nicht unterschreiben, wenn Sie mit der Darstellung nicht einverstanden sind. Im Zweifel den Mieterschutzbund kontaktieren." },
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

          {/* 7 — Unterschriften-Block */}
          <div
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ borderLeft: "4px solid #0088CC" }}
          >
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Unterschriften</h2>
            <CheckList
              items={[
                { label: "Beide Parteien unterschreiben", text: "Mieter und Vermieter (bzw. Hausverwaltung) unterschreiben jeweils das Protokoll." },
                { label: "Jede Partei erhält eine Kopie", text: "Stellen Sie sicher, dass beide Seiten ein unterschriebenes Exemplar erhalten." },
              ]}
            />
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ borderColor: "#0088CC40", backgroundColor: "#EBF6FD" }}
            >
              <p className="text-sm font-semibold text-[#0D2137]">
                Tipp: Protokoll in doppelter Ausführung mitbringen
              </p>
              <p className="mt-1 text-sm text-[#5A7A8A]">
                Drucken Sie das Protokoll zweimal aus und lassen Sie beide
                Exemplare von allen Beteiligten unterschreiben. So hat jede Partei
                sofort ein rechtsgültiges Original.
              </p>
            </div>
          </div>

          {/* 8 — FAQ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
              Häufige Fragen zum Übergabeprotokoll
            </h2>
            <FaqAccordion items={UEBERGABEPROTOKOLL_FAQS} />
          </div>

          {/* 9 — CTA */}
          <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#EBF6FD" }}>
            <p className="mb-4 font-bold text-[#0D2137]">Umzugskosten berechnen</p>
            <p className="mb-5 text-sm text-[#5A7A8A]">
              Was kostet Ihr Umzug mit Profis? Unser Rechner zeigt realistische
              Kosten — ohne Datenweitergabe an Umzugsfirmen.
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
