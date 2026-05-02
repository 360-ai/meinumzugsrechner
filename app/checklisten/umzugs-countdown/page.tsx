import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { UmzugsCountdownClient } from "@/components/UmzugsCountdownClient";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Projektplan: Umzugs-Countdown 2026 | meinumzugsrechner.de";
const PAGE_DESC = "5-Phasen Umzugsplanung von der Entscheidung bis zum Einzugstag. Druckfertig als PDF.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Umzug Countdown", "Umzug Zeitplan", "Umzug Wochen vorher"],
  ...pageCanonical("/checklisten/umzugs-countdown/"),
  openGraph: {
    title: "Umzugs-Countdown 2026",
    description: PAGE_DESC,
    url: "/checklisten/umzugs-countdown/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
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
    <>
      <JsonLd id="ld-umzugs-countdown" data={webPageOnlySchema({ path: "/checklisten/umzugs-countdown/", title: PAGE_TITLE, description: PAGE_DESC })} />
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
      <UmzugsCountdownClient />
    </GuideLayout>
    </>
  );
}

