import { GuideLayout } from "@/components/GuideLayout";

export const metadata = {
  title: "Site-Management: Standort & Catering | meinumzugsrechner.de",
  description: "Standort-Vorbereitung und Team-Verpflegung am Umzugstag — alle operativen Schritte.",
};

export default function StandortVorbereitungPage() {
  return (
    <GuideLayout
      title="Site-Management: Standort & Catering"
      category="checklisten"
      categoryLabel="Checklisten"
    >
      <h2>Letzte operative Schritte</h2>
      <p>
        Die Vorbereitung beider Standorte ist ein oft unterschätzter Faktor.
        Freie Zufahrt und koordinierte Abläufe sparen Zeit — und damit Kosten.
      </p>

      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Bereitstellung:</strong> Werkzeug, Erste-Hilfe-Sets und
              wichtige Dokumente separiert bereitstellen, damit diese nicht
              versehentlich verladen werden.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Transportsicherung:</strong> Trommeln von Waschmaschinen
              arretieren und IT-Komponenten (Smart Home Zentralen etc.) sichern.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Zugangsmanagement:</strong> Freie Anfahrtswege und
              Parkflächen direkt am Eingang sicherstellen. Nachbarschaft
              rechtzeitig über kurzzeitige Beeinträchtigungen informieren.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Halteverbotszone:</strong> Beim zuständigen Ordnungsamt
              beantragen (mind. 1 Woche vorher). Kostet meist 20–50 € pro Tag,
              spart aber Nerven und Zeit.
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              <strong>Aufzug:</strong> Nutzungszeiten mit der Hausverwaltung
              abstimmen und ggf. reservieren.
            </span>
          </label>
        </li>
      </ul>

      <h2>Hospitality für Helfer</h2>
      <p>
        Ein motiviertes Team arbeitet effizienter. Sorgen Sie für angemessene
        Verpflegung — das zahlt sich aus.
      </p>

      <h3>Getränke</h3>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>Ausreichend Wasser (mind. 0,5 l/h pro Person bei körperlicher Arbeit)</span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>Säfte, Kaffee und Tee bereitstellen</span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>Alkohol erst nach Abschluss aller Arbeiten als &bdquo;Feierabendbier&ldquo;</span>
          </label>
        </li>
      </ul>

      <h3>Verpflegung</h3>
      <ul>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>Unkomplizierte Speisen: Suppen, frische Salate oder belegte Vollkornbrötchen</span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>Mehrweggeschirr oder kompostierbare Alternativen nutzen</span>
          </label>
        </li>
        <li>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <span>
              Falls Küche bereits abgebaut: lokale Anbieter koordinieren
              (Pizza, Catering)
            </span>
          </label>
        </li>
      </ul>

      <h2>Zeitplan für den Umzugstag</h2>
      <p>
        Ein grober Zeitplan hilft allen Beteiligten, Erwartungen zu managen und
        Pausen einzuplanen:
      </p>
      <ul>
        <li>
          <strong>07:00 Uhr:</strong> Ankunft aller Helfer, kurze Einweisung
        </li>
        <li>
          <strong>07:30 Uhr:</strong> Verladebeginn (schwere Möbel zuerst)
        </li>
        <li>
          <strong>10:00 Uhr:</strong> Kurze Pause mit Getränken und Snacks
        </li>
        <li>
          <strong>12:00 Uhr:</strong> Mittagspause (30–45 Minuten)
        </li>
        <li>
          <strong>~15:00 Uhr:</strong> Entladung abgeschlossen, Aufbau beginnt
        </li>
        <li>
          <strong>~18:00 Uhr:</strong> Abschluss, Übergabe alter Wohnung,
          gemeinsames Abendessen
        </li>
      </ul>
    </GuideLayout>
  );
}
