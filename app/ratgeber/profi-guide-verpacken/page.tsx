import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Profi-Guide: Systematisches Verpacken 2026 | meinumzugsrechner.de";
const PAGE_DESC = "Die richtige Packtechnik für Glas, Möbel und Dokumente — damit nichts zu Bruch geht.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/profi-guide-verpacken/"),
  openGraph: {
    title: "Systematisches Verpacken beim Umzug",
    description: PAGE_DESC,
    url: "/ratgeber/profi-guide-verpacken/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Die Kunst des richtigen Packens",
    items: [
      { label: "Bedarfsanalyse", text: "Kalkulieren Sie pro Quadratmeter Wohnfläche mindestens einen Standard-Karton ein." },
      { label: "Qualitätsmaterial", text: "Nutzen Sie zertifizierte, stapelbare Boxen. Kleinteile in Unterboxen vororganisieren." },
      { label: "Schutz & Polsterung", text: "Verwenden Sie nachhaltiges Einschlagpapier oder Textilien für Glas und Porzellan." },
      { label: "Gewichtskontrolle", text: "Ein Karton sollte 15–20 kg nicht überschreiten." },
      { label: "Schichtprinzip", text: "Schwere Lasten nach unten, leichte Gegenstände nach oben in die Box." },
      { label: "Inhaltstrennung", text: "Sortieren Sie Unnötiges aus. Kennzeichnen Sie Boxen klar nach Inhalt und Zielraum." },
    ],
  },
  {
    heading: "Spezial-Handling",
    items: [
      { label: "Glaswaren", text: "Einzeln einwickeln, immer stehend transportieren — niemals liegend." },
      { label: "Flüssigkeiten", text: "Verschlüsse prüfen und mit Klebeband sichern. Gefahrgut separat transportieren." },
      { label: "Möbeloberflächen", text: "Lackierte oder furnierte Möbel mit Schutzfolie oder Umzugsdecken sichern." },
      { label: "Wertsachen & Dokumente", text: "Wichtige Dokumente und Schmuck persönlich transportieren — niemals im LKW." },
    ],
  },
  {
    heading: "Am Umzugstag",
    items: [
      { label: "", text: "Halten Sie Reserve-Boxen bereit. Es tauchen immer Last-Minute-Gegenstände auf: Gardinen, Reinigungsutensilien, vergessene Küchenutensilien." },
    ],
  },
  {
    heading: "Beschriftungs-System",
    items: [
      { label: "", text: "Zielraum (z. B. Küche, Schlafzimmer Kind)" },
      { label: "", text: "Kurzinhalt (z. B. Bücher / Deko)" },
      { label: "", text: "Handhabungshinweis bei Bedarf (z. B. OBEN / ZERBRECHLICH)" },
      { label: "", text: "Priorität beim Auspacken (z. B. Tag 1, später)" },
    ],
  },
];

export default function ProfiGuideVerpackenPage() {
  return (
    <GuideLayout
      title="Profi-Guide: Systematisches Verpacken 2026"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/profi-guide-verpacken/",
        description: "Die richtige Packtechnik für Glas, Möbel und Dokumente — damit nichts zu Bruch geht.",
      }}
    >
      <div className="space-y-6">

        {/* Section 1 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Die Kunst des richtigen Packens</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Professionelles Verpacken spart Zeit, schützt Ihr Eigentum und macht das
            Auspacken am neuen Standort deutlich angenehmer. Diese Grundregeln haben
            sich bewährt:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Bedarfsanalyse:</strong> Kalkulieren Sie pro Quadratmeter Wohnfläche mindestens einen Standard-Karton ein.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Qualitätsmaterial:</strong> Nutzen Sie zertifizierte, stapelbare Boxen. Kleinteile sollten in Unterboxen (z. B. wiederverwendbare Behälter) vororganisiert werden.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Schutz &amp; Polsterung:</strong> Verwenden Sie nachhaltiges Einschlagpapier oder Textilien für Glas und Porzellan. Vermeiden Sie Zeitungspapier, um Verschmutzungen durch Druckerschwärze zu verhindern.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Gewichtskontrolle:</strong> Ein Karton sollte die Grenze von 15 bis 20 kg nicht überschreiten. Testen Sie das Gewicht durch kurzes Anheben.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Schichtprinzip:</strong> Schwere Lasten nach unten, leichte Gegenstände nach oben in die Box.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Inhaltstrennung:</strong> Sortieren Sie Unnötiges konsequent aus (Spenden statt Entsorgen). Kennzeichnen Sie Boxen klar nach Inhalt und Zielraum.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 — 2×2 grid */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Spezial-Handling für besondere Gegenstände</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-bold text-[#0088CC] text-sm">Glaswaren</h3>
              <p className="text-sm text-[#5A7A8A]">
                Polstern Sie Gläser und Porzellan einzeln mit Einschlagpapier oder
                Küchentüchern. Glaswaren müssen grundsätzlich stehend transportiert
                werden — niemals liegend.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-bold text-[#0088CC] text-sm">Flüssigkeiten</h3>
              <p className="text-sm text-[#5A7A8A]">
                Prüfen Sie jeden Verschluss sorgfältig und sichern Sie ihn mit Klebeband
                oder Frischhaltefolie. Gefahrgut (Reinigungsmittel, Farben) erfordert
                zusätzliche Schutzhüllen oder sollte separat transportiert werden.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-bold text-[#0088CC] text-sm">Empfindliche Möbeloberflächen</h3>
              <p className="text-sm text-[#5A7A8A]">
                Schützen Sie lackierte oder furnierte Möbel mit Schutzfolie oder
                Umzugsdecken. Besonders anfällig sind Tischplatten und Türfronten.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-bold text-[#0088CC] text-sm">Wertsachen &amp; Dokumente</h3>
              <p className="text-sm text-[#5A7A8A]">
                Wichtige Dokumente und Schmuck verbleiben in Ihrer persönlichen Obhut —
                niemals im LKW. Nutzen Sie eine separate Tasche oder einen verschlossenen
                Rucksack.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Am Umzugstag</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Halten Sie am Umzugstag einige leere Reserve-Boxen bereit. Erfahrungsgemäß
            tauchen immer Last-Minute-Gegenstände auf: Gardinen, Reinigungsutensilien
            oder vergessene Küchenutensilien.
          </p>
        </div>

        {/* Section 4 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Beschriftungs-System</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Bewährt hat sich folgende Beschriftung auf jeder Box — gut sichtbar auf
            mindestens zwei Seiten:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Zielraum (z. B. &bdquo;Küche&ldquo;, &bdquo;Schlafzimmer Kind&ldquo;)</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Kurzinhalt (z. B. &bdquo;Bücher / Deko&ldquo;)</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Handhabungshinweis bei Bedarf (z. B. &bdquo;OBEN&ldquo; / &bdquo;ZERBRECHLICH&ldquo;)</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Priorität beim Auspacken (z. B. &bdquo;Tag 1&ldquo;, &bdquo;später&ldquo;)</span>
            </li>
          </ul>
        </div>

      </div>
    </GuideLayout>
  );
}
