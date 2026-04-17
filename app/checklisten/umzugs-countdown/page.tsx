import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Projektplan: Umzugs-Countdown 2026 | meinumzugsrechner.de";
const PAGE_DESC = "5-Phasen Umzugsplanung von der Entscheidung bis zum Einzugstag. Druckfertig als PDF.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/checklisten/umzugs-countdown/"),
  openGraph: {
    title: "Umzugs-Countdown 2026",
    description: PAGE_DESC,
    url: "/checklisten/umzugs-countdown/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Phase 1: Die Initialisierung — Sobald der Entschluss feststeht",
    items: [
      { label: "Terminierung", text: "Umzugsdatum fixieren und frühzeitig Sonderurlaub beim Arbeitgeber beantragen.", isCheckbox: true },
      { label: "Vertragsmanagement", text: "Aktuellen Mietvertrag fristgerecht kündigen und Modalitäten zur Kautionsrückzahlung klären.", isCheckbox: true },
      { label: "Inventur & Clearing", text: "Dachboden, Keller und Garage entrümpeln. Nicht benötigte Möbel verkaufen.", isCheckbox: true },
      { label: "Nachmietersuche", text: "Besichtigungstermine mit dem Vermieter abstimmen.", isCheckbox: true },
    ],
  },
  {
    heading: "Phase 2: Die heiße Phase — 3 Wochen vor dem Stichtag",
    items: [
      { label: "Digitale & analoge Ummeldung", text: "Banken, Versicherungen und Rundfunkbeitragsservice informieren.", isCheckbox: true },
      { label: "Infrastruktur", text: "Internet, Strom, Wasser und Fernwärme ummelden oder abmelden.", isCheckbox: true },
      { label: "Behörden", text: "Einwohnermeldeamt-Termin planen, Finanzamt sowie Schulen oder Kitas informieren.", isCheckbox: true },
      { label: "Logistik-Check", text: "Termin für die finale Schlüsselübergabe der alten Wohnung bestätigen.", isCheckbox: true },
    ],
  },
  {
    heading: "Phase 3: Der Endspurt — 1 Woche vorher",
    items: [
      { label: "Pack-Strategie", text: "Systematisches Verpacken starten (Richtwert: 1 Box pro m² Wohnfläche).", isCheckbox: true },
      { label: "Ressourcen-Management", text: "Vorräte aus Kühl- und Gefrierschränken verbrauchen.", isCheckbox: true },
      { label: "Equipment-Check", text: "Ausreichend Material beschaffen: Kartons, Polstermaterial, Markierstifte, Gurte und Sackkarre.", isCheckbox: true },
      { label: "Sicherheitszonen", text: "Halteverbotszonen vor dem alten und neuen Objekt organisieren.", isCheckbox: true },
    ],
  },
  {
    heading: "Phase 4: Die finale Vorbereitung — 1–2 Tage vorher",
    items: [
      { label: "Präsenz zeigen", text: "Neue Namensschilder an Briefkasten und Klingel montieren.", isCheckbox: true },
      { label: "Das Survival-Kit", text: "Tasche für den persönlichen Sofortbedarf packen: Dokumente, Ladekabel, Medikamente, Basis-Hygiene, wichtige Schlüssel.", isCheckbox: true },
      { label: "Technik & Natur", text: "IT-Hardware sichern (Backups erstellen) und Zimmerpflanzen ein letztes Mal moderat wässern.", isCheckbox: true },
    ],
  },
  {
    heading: "Phase 5: Der Umzugstag",
    items: [
      { label: "Wertgegenstände", text: "Schmuck, wichtige Policen und sensible Dokumente ausschließlich persönlich transportieren.", isCheckbox: true },
      { label: "Dokumentation", text: "Beim Einzug in die neue Wohnung etwaige Mängel protokollieren.", isCheckbox: true },
      { label: "Zählerstände", text: "Stände von Strom, Gas und Wasser notieren und vom Vermieter bestätigen lassen.", isCheckbox: true },
    ],
  },
];

export default function UmzugsCountdownPage() {
  return (
    <GuideLayout
      title="Projektplan: Umzugs-Countdown 2026"
      category="checklisten"
      categoryLabel="Checklisten"
      sections={sections}
      articleSeo={{
        path: "/checklisten/umzugs-countdown/",
        description: "5-Phasen Umzugsplanung von der Entscheidung bis zum Einzugstag. Druckfertig als PDF.",
      }}
    >
      <div className="space-y-6">

        {/* Intro card */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Strategische Umzugsplanung in 5 Phasen — von der ersten Entscheidung bis
            zum letzten Schlüssel.
          </p>
        </div>

        {/* Phase 1 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#0088CC" }}>
              1
            </div>
            <div>
              <h2 className="font-bold text-[#0D2137]">Phase 1: Die Initialisierung</h2>
              <p className="text-xs text-[#5A7A8A]">Sobald der Entschluss feststeht</p>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Terminierung:</strong> Umzugsdatum fixieren und frühzeitig Sonderurlaub beim Arbeitgeber beantragen.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Vertragsmanagement:</strong> Aktuellen Mietvertrag fristgerecht kündigen und Modalitäten zur Kautionsrückzahlung sowie Schönheitsreparaturen klären.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Inventur &amp; Clearing:</strong> Dachboden, Keller und Garage entrümpeln. Nicht benötigte Möbel über digitale Marktplätze verkaufen.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Nachmietersuche:</strong> Besichtigungstermine mit dem Vermieter abstimmen.</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#FF7700" }}>
              2
            </div>
            <div>
              <h2 className="font-bold text-[#0D2137]">Phase 2: Die heiße Phase</h2>
              <p className="text-xs text-[#5A7A8A]">3 Wochen vor dem Stichtag</p>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Digitale &amp; analoge Ummeldung:</strong> Banken, Versicherungen und Rundfunkbeitragsservice informieren.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Infrastruktur:</strong> Internet, Strom, Wasser und Fernwärme ummelden oder abmelden.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Behörden:</strong> Einwohnermeldeamt-Termin planen, Finanzamt sowie Schulen oder Kitas informieren.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Logistik-Check:</strong> Termin für die finale Schlüsselübergabe der alten Wohnung bestätigen.</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#0088CC" }}>
              3
            </div>
            <div>
              <h2 className="font-bold text-[#0D2137]">Phase 3: Der Endspurt</h2>
              <p className="text-xs text-[#5A7A8A]">1 Woche vorher</p>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Pack-Strategie:</strong> Systematisches Verpacken starten (Richtwert: 1 Box pro m² Wohnfläche).</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Ressourcen-Management:</strong> Vorräte aus Kühl- und Gefrierschränken verbrauchen.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Equipment-Check:</strong> Ausreichend Material beschaffen: Leih-Boxen oder stabile Kartons, Polstermaterial, Markierstifte, Gurte und Sackkarre.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Sicherheitszonen:</strong> Halteverbotszonen vor dem alten und neuen Objekt organisieren.</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Phase 4 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#FF7700" }}>
              4
            </div>
            <div>
              <h2 className="font-bold text-[#0D2137]">Phase 4: Die finale Vorbereitung</h2>
              <p className="text-xs text-[#5A7A8A]">1–2 Tage vorher</p>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Präsenz zeigen:</strong> Neue Namensschilder an Briefkasten und Klingel montieren.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Das &bdquo;Survival-Kit&ldquo;:</strong> Tasche für den persönlichen Sofortbedarf packen: Dokumente, Ladekabel, Medikamente, Basis-Hygiene, wichtige Schlüssel.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Technik &amp; Natur:</strong> IT-Hardware sichern (Backups erstellen) und Zimmerpflanzen ein letztes Mal moderat wässern.</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Phase 5 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#0D2137" }}>
              5
            </div>
            <div>
              <h2 className="font-bold text-[#0D2137]">Phase 5: Der Umzugstag</h2>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Wertgegenstände:</strong> Schmuck, wichtige Policen und sensible Dokumente ausschließlich persönlich transportieren.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Dokumentation:</strong> Beim Einzug in die neue Wohnung etwaige Mängel protokollieren.</span>
              </label>
            </li>
            <li>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                <span className="text-sm text-[#5A7A8A]"><strong className="text-[#0D2137]">Zählerstände:</strong> Stände von Strom, Gas und Wasser notieren und vom Vermieter bestätigen lassen.</span>
              </label>
            </li>
          </ul>
        </div>

      </div>
    </GuideLayout>
  );
}
