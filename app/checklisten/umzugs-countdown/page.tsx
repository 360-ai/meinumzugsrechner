import { GuideLayout } from "@/components/GuideLayout";

export const metadata = {
  title: "Projektplan: Umzugs-Countdown 2026 | meinumzugsrechner.de",
  description: "5-Phasen Umzugsplanung von der Entscheidung bis zum Einzugstag. Druckfertig als PDF.",
};

export default function UmzugsCountdownPage() {
  return (
    <GuideLayout
      title="Projektplan: Umzugs-Countdown 2026"
      category="checklisten"
      categoryLabel="Checklisten"
    >
      <p>
        Strategische Umzugsplanung in 5 Phasen — von der ersten Entscheidung bis
        zum letzten Schlüssel.
      </p>

      <h2>Phase 1: Die Initialisierung</h2>
      <p className="text-sm text-gray-500 -mt-2 mb-3">Sobald der Entschluss feststeht</p>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Terminierung:</strong> Umzugsdatum fixieren und frühzeitig
              Sonderurlaub beim Arbeitgeber beantragen.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Vertragsmanagement:</strong> Aktuellen Mietvertrag
              fristgerecht kündigen und Modalitäten zur Kautionsrückzahlung sowie
              Schönheitsreparaturen klären.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Inventur &amp; Clearing:</strong> Dachboden, Keller und
              Garage entrümpeln. Nicht benötigte Möbel über digitale Marktplätze
              verkaufen.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Nachmietersuche:</strong> Besichtigungstermine mit dem
              Vermieter abstimmen.
            </span>
          </label>
        </li>
      </ul>

      <h2>Phase 2: Die heiße Phase</h2>
      <p className="text-sm text-gray-500 -mt-2 mb-3">3 Wochen vor dem Stichtag</p>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Digitale &amp; analoge Ummeldung:</strong> Banken,
              Versicherungen und Rundfunkbeitragsservice informieren.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Infrastruktur:</strong> Internet, Strom, Wasser und
              Fernwärme ummelden oder abmelden.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Behörden:</strong> Einwohnermeldeamt-Termin planen,
              Finanzamt sowie Schulen oder Kitas informieren.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Logistik-Check:</strong> Termin für die finale
              Schlüsselübergabe der alten Wohnung bestätigen.
            </span>
          </label>
        </li>
      </ul>

      <h2>Phase 3: Der Endspurt</h2>
      <p className="text-sm text-gray-500 -mt-2 mb-3">1 Woche vorher</p>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Pack-Strategie:</strong> Systematisches Verpacken starten
              (Richtwert: 1 Box pro m² Wohnfläche).
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Ressourcen-Management:</strong> Vorräte aus Kühl- und
              Gefrierschränken verbrauchen.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Equipment-Check:</strong> Ausreichend Material beschaffen:
              Leih-Boxen oder stabile Kartons, Polstermaterial, Markierstifte,
              Gurte und Sackkarre.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Sicherheitszonen:</strong> Halteverbotszonen vor dem alten
              und neuen Objekt organisieren.
            </span>
          </label>
        </li>
      </ul>

      <h2>Phase 4: Die finale Vorbereitung</h2>
      <p className="text-sm text-gray-500 -mt-2 mb-3">1–2 Tage vorher</p>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Präsenz zeigen:</strong> Neue Namensschilder an Briefkasten
              und Klingel montieren.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Das &bdquo;Survival-Kit&ldquo;:</strong> Tasche für den persönlichen
              Sofortbedarf packen: Dokumente, Ladekabel, Medikamente,
              Basis-Hygiene, wichtige Schlüssel.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Technik &amp; Natur:</strong> IT-Hardware sichern (Backups
              erstellen) und Zimmerpflanzen ein letztes Mal moderat wässern.
            </span>
          </label>
        </li>
      </ul>

      <h2>Phase 5: Der Umzugstag</h2>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Wertgegenstände:</strong> Schmuck, wichtige Policen und
              sensible Dokumente ausschließlich persönlich transportieren.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Dokumentation:</strong> Beim Einzug in die neue Wohnung
              etwaige Mängel protokollieren.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Zählerstände:</strong> Stände von Strom, Gas und Wasser
              notieren und vom Vermieter bestätigen lassen.
            </span>
          </label>
        </li>
      </ul>
    </GuideLayout>
  );
}
