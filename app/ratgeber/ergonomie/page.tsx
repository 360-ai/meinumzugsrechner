import { GuideLayout } from "@/components/GuideLayout";

export const metadata = {
  title: "Ergonomie-Leitfaden: Sicher Heben und Tragen | meinumzugsrechner.de",
  description: "Präventionsleitfaden für rückenfreundliches Arbeiten beim Umzug. Tipps zum sicheren Heben und Tragen schwerer Möbel.",
};

export default function ErgonomiePage() {
  return (
    <GuideLayout
      title="Ergonomie-Leitfaden: Sicher Heben und Tragen"
      category="ratgeber"
      categoryLabel="Ratgeber"
    >
      <h2>Präventionsleitfaden: Rückenschonendes Arbeiten</h2>
      <p>
        Um Verletzungen und Überlastungen der Wirbelsäule zu vermeiden, beachten
        Sie beim Möbeltransport folgende Regeln:
      </p>

      <ul>
        <li>
          <strong>Stabilität:</strong> Sorgen Sie für einen festen Stand; die Füße
          stehen etwa schulterbreit auseinander.
        </li>
        <li>
          <strong>Kraft aus den Beinen:</strong> Gehen Sie beim Anheben in die Hocke
          und nutzen Sie die Kraft Ihrer Beinmuskulatur. Der Rücken bleibt dabei
          absolut gerade.
        </li>
        <li>
          <strong>Körpernähe:</strong> Tragen Sie Lasten so nah wie möglich am
          Schwerpunkt Ihres Körpers.
        </li>
        <li>
          <strong>Rotation vermeiden:</strong> Drehen Sie niemals den Oberkörper
          unter Last, sondern bewegen Sie immer die Füße mit.
        </li>
        <li>
          <strong>Gleichmaß:</strong> Vermeiden Sie ruckartige Bewegungen beim
          Anheben und Absetzen.
        </li>
        <li>
          <strong>Teamwork &amp; Technik:</strong> Nutzen Sie für schwere Objekte
          Transporthilfen wie Rollbretter oder Sackkarren. Sperrige Möbel sollten
          grundsätzlich von zwei Personen bewegt werden.
        </li>
        <li>
          <strong>Sichtfeld:</strong> Achten Sie immer darauf, dass Ihr Laufweg
          frei von Hindernissen ist und Ihre Sicht nicht durch das Ladegut
          eingeschränkt wird.
        </li>
      </ul>

      <h2>Schnellübersicht: Die 5 wichtigsten Regeln</h2>
      <ol>
        <li>In die Hocke gehen — nie aus dem Rücken heben</li>
        <li>Last eng am Körper halten</li>
        <li>Füße bewegen statt Oberkörper drehen</li>
        <li>Ruckartige Bewegungen vermeiden</li>
        <li>Bei schweren Gegenständen immer zu zweit oder Sackkarre nutzen</li>
      </ol>

      <h2>Empfohlene Hilfsmittel</h2>
      <p>
        Folgende Hilfsmittel reduzieren das Verletzungsrisiko erheblich und
        sind bei jedem Umzug empfehlenswert:
      </p>
      <ul>
        <li>
          <strong>Sackkarre:</strong> Für Kühlschrank, Waschmaschine und schwere
          Kartons unverzichtbar.
        </li>
        <li>
          <strong>Rollbrett / Möbelroller:</strong> Ideal für große Möbelstücke auf
          glattem Untergrund.
        </li>
        <li>
          <strong>Transportgurte (Schultertragegurte):</strong> Verteilen das
          Gewicht auf Schultern und Hüfte, entlasten so den Rücken deutlich.
        </li>
        <li>
          <strong>Schutzhandschuhe:</strong> Verbesserter Grip und Schutz vor
          Schnittverletzungen.
        </li>
        <li>
          <strong>Rückenstützgurt:</strong> Für Personen mit Vorerkrankungen als
          zusätzliche Absicherung sinnvoll.
        </li>
      </ul>

      <blockquote>
        <strong>Hinweis:</strong> Bei chronischen Rückenproblemen oder größeren
        Umzügen lohnt sich die Beauftragung eines professionellen
        Umzugsunternehmens. Nutzen Sie unseren{" "}
        <a href="/rechner">kostenlosen Rechner</a>, um den Preiskorridor zu
        ermitteln.
      </blockquote>
    </GuideLayout>
  );
}
