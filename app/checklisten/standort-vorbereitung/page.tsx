import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Site-Management: Standort & Catering | meinumzugsrechner.com";
const PAGE_DESC = "Standort-Vorbereitung und Team-Verpflegung am Umzugstag — alle operativen Schritte.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/checklisten/standort-vorbereitung/"),
  openGraph: {
    title: "Standort & Catering am Umzugstag",
    description: PAGE_DESC,
    url: "/checklisten/standort-vorbereitung/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Letzte operative Schritte",
    items: [
      { label: "Bereitstellung", text: "Werkzeug, Erste-Hilfe-Sets und wichtige Dokumente separiert bereitstellen.", isCheckbox: true },
      { label: "Transportsicherung", text: "Trommeln von Waschmaschinen arretieren und IT-Komponenten sichern.", isCheckbox: true },
      { label: "Zugangsmanagement", text: "Freie Anfahrtswege sicherstellen. Nachbarschaft rechtzeitig informieren.", isCheckbox: true },
      { label: "Halteverbotszone", text: "Beim zuständigen Ordnungsamt beantragen (mind. 1 Woche vorher).", isCheckbox: true },
      { label: "Aufzug", text: "Nutzungszeiten mit der Hausverwaltung abstimmen und ggf. reservieren.", isCheckbox: true },
    ],
  },
  {
    heading: "Hospitality: Getränke",
    items: [
      { label: "", text: "Ausreichend Wasser (mind. 0,5 l/h pro Person bei körperlicher Arbeit)", isCheckbox: true },
      { label: "", text: "Säfte, Kaffee und Tee bereitstellen", isCheckbox: true },
      { label: "", text: "Alkohol erst nach Abschluss aller Arbeiten", isCheckbox: true },
    ],
  },
  {
    heading: "Hospitality: Verpflegung",
    items: [
      { label: "", text: "Unkomplizierte Speisen: Suppen, frische Salate oder belegte Vollkornbrötchen", isCheckbox: true },
      { label: "", text: "Mehrweggeschirr oder kompostierbare Alternativen nutzen", isCheckbox: true },
      { label: "", text: "Falls Küche bereits abgebaut: lokale Anbieter koordinieren (Pizza, Catering)", isCheckbox: true },
    ],
  },
  {
    heading: "Zeitplan für den Umzugstag",
    items: [
      { label: "07:00 Uhr", text: "Ankunft aller Helfer, kurze Einweisung" },
      { label: "07:30 Uhr", text: "Verladebeginn (schwere Möbel zuerst)" },
      { label: "10:00 Uhr", text: "Kurze Pause mit Getränken und Snacks" },
      { label: "12:00 Uhr", text: "Mittagspause (30–45 Minuten)" },
      { label: "~15:00 Uhr", text: "Entladung abgeschlossen, Aufbau beginnt" },
      { label: "~18:00 Uhr", text: "Abschluss, Übergabe alter Wohnung, gemeinsames Abendessen" },
    ],
  },
];

export default function StandortVorbereitungPage() {
  return (
    <GuideLayout
      title="Site-Management: Standort & Catering"
      category="checklisten"
      categoryLabel="Checklisten"
      sections={sections}
      articleSeo={{
        path: "/checklisten/standort-vorbereitung/",
        description: "Standort-Vorbereitung und Team-Verpflegung am Umzugstag — alle operativen Schritte.",
      }}
    >
      <div className="space-y-6">

        {/* Section 1: Letzte operative Schritte */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-1 font-bold text-[#0D2137]">Letzte operative Schritte</h2>
          <p className="mb-4 text-xs text-[#5A7A8A]">
            Die Vorbereitung beider Standorte ist ein oft unterschätzter Faktor.
            Freie Zufahrt und koordinierte Abläufe sparen Zeit — und damit Kosten.
          </p>
          <ul className="space-y-3">
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Bereitstellung:</strong> Werkzeug, Erste-Hilfe-Sets und wichtige Dokumente separiert bereitstellen, damit diese nicht versehentlich verladen werden.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Transportsicherung:</strong> Trommeln von Waschmaschinen arretieren und IT-Komponenten (Smart Home Zentralen etc.) sichern.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Zugangsmanagement:</strong> Freie Anfahrtswege und Parkflächen direkt am Eingang sicherstellen. Nachbarschaft rechtzeitig über kurzzeitige Beeinträchtigungen informieren.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Halteverbotszone:</strong> Beim zuständigen Ordnungsamt beantragen (mind. 1 Woche vorher). Kostet meist 20–50 € pro Tag, spart aber Nerven und Zeit.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Aufzug:</strong> Nutzungszeiten mit der Hausverwaltung abstimmen und ggf. reservieren.</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Section 2: Hospitality */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-1 font-bold text-[#0D2137]">Hospitality für Helfer</h2>
          <p className="mb-4 text-xs text-[#5A7A8A]">
            Ein motiviertes Team arbeitet effizienter. Sorgen Sie für angemessene
            Verpflegung — das zahlt sich aus.
          </p>

          <div className="space-y-5">
            {/* Sub-group: Getränke */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-[#0D2137]">Getränke</h3>
              <ul className="space-y-3">
                <li>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                    <span className="text-sm text-[#5A7A8A]">Ausreichend Wasser (mind. 0,5 l/h pro Person bei körperlicher Arbeit)</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                    <span className="text-sm text-[#5A7A8A]">Säfte, Kaffee und Tee bereitstellen</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                    <span className="text-sm text-[#5A7A8A]">Alkohol erst nach Abschluss aller Arbeiten als &bdquo;Feierabendbier&ldquo;</span>
                  </label>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-100" />

            {/* Sub-group: Verpflegung */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-[#0D2137]">Verpflegung</h3>
              <ul className="space-y-3">
                <li>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                    <span className="text-sm text-[#5A7A8A]">Unkomplizierte Speisen: Suppen, frische Salate oder belegte Vollkornbrötchen</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                    <span className="text-sm text-[#5A7A8A]">Mehrweggeschirr oder kompostierbare Alternativen nutzen</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                    <span className="text-sm text-[#5A7A8A]">
                      Falls Küche bereits abgebaut: lokale Anbieter koordinieren
                      (Pizza, Catering)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Zeitplan */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-1 font-bold text-[#0D2137]">Zeitplan für den Umzugstag</h2>
          <p className="mb-4 text-xs text-[#5A7A8A]">
            Ein grober Zeitplan hilft allen Beteiligten, Erwartungen zu managen und
            Pausen einzuplanen:
          </p>
          <div className="space-y-2">
            {[
              { time: "07:00 Uhr", text: "Ankunft aller Helfer, kurze Einweisung" },
              { time: "07:30 Uhr", text: "Verladebeginn (schwere Möbel zuerst)" },
              { time: "10:00 Uhr", text: "Kurze Pause mit Getränken und Snacks" },
              { time: "12:00 Uhr", text: "Mittagspause (30–45 Minuten)" },
              { time: "~15:00 Uhr", text: "Entladung abgeschlossen, Aufbau beginnt" },
              { time: "~18:00 Uhr", text: "Abschluss, Übergabe alter Wohnung, gemeinsames Abendessen" },
            ].map((item) => (
              <div key={item.time} className="flex items-start gap-3">
                <span className="flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>{item.time}</span>
                <span className="text-sm text-[#5A7A8A]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </GuideLayout>
  );
}
