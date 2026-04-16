import { GuideLayout } from "@/components/GuideLayout";

export const metadata = {
  title: "Profi-Guide: Systematisches Verpacken 2026 | meinumzugsrechner.de",
  description: "Die richtige Packtechnik für Glas, Möbel und Dokumente — damit nichts zu Bruch geht.",
};

export default function ProfiGuideVerpackenPage() {
  return (
    <GuideLayout
      title="Profi-Guide: Systematisches Verpacken 2026"
      category="ratgeber"
      categoryLabel="Ratgeber"
    >
      <h2>Die Kunst des richtigen Packens</h2>
      <p>
        Professionelles Verpacken spart Zeit, schützt Ihr Eigentum und macht das
        Auspacken am neuen Standort deutlich angenehmer. Diese Grundregeln haben
        sich bewährt:
      </p>

      <ul>
        <li>
          <strong>Bedarfsanalyse:</strong> Kalkulieren Sie pro Quadratmeter
          Wohnfläche mindestens einen Standard-Karton ein.
        </li>
        <li>
          <strong>Qualitätsmaterial:</strong> Nutzen Sie zertifizierte,
          stapelbare Boxen. Kleinteile sollten in Unterboxen (z. B.
          wiederverwendbare Behälter) vororganisiert werden.
        </li>
        <li>
          <strong>Schutz &amp; Polsterung:</strong> Verwenden Sie nachhaltiges
          Einschlagpapier oder Textilien für Glas und Porzellan. Vermeiden Sie
          Zeitungspapier, um Verschmutzungen durch Druckerschwärze zu
          verhindern.
        </li>
        <li>
          <strong>Gewichtskontrolle:</strong> Ein Karton sollte die Grenze von
          15 bis 20 kg nicht überschreiten. Testen Sie das Gewicht durch kurzes
          Anheben.
        </li>
        <li>
          <strong>Schichtprinzip:</strong> Schwere Lasten nach unten, leichte
          Gegenstände nach oben in die Box.
        </li>
        <li>
          <strong>Inhaltstrennung:</strong> Sortieren Sie Unnötiges konsequent
          aus (Spenden statt Entsorgen). Kennzeichnen Sie Boxen klar nach Inhalt
          und Zielraum.
        </li>
      </ul>

      <h2>Spezial-Handling für besondere Gegenstände</h2>

      <h3>Glaswaren</h3>
      <p>
        Polstern Sie Gläser und Porzellan einzeln mit Einschlagpapier oder
        Küchentüchern. Glaswaren müssen grundsätzlich stehend transportiert
        werden — niemals liegend.
      </p>

      <h3>Flüssigkeiten</h3>
      <p>
        Prüfen Sie jeden Verschluss sorgfältig und sichern Sie ihn mit Klebeband
        oder Frischhaltefolie. Gefahrgut (Reinigungsmittel, Farben) erfordert
        zusätzliche Schutzhüllen oder sollte separat transportiert werden.
      </p>

      <h3>Empfindliche Möbeloberflächen</h3>
      <p>
        Schützen Sie lackierte oder furnierte Möbel mit Schutzfolie oder
        Umzugsdecken. Besonders anfällig sind Tischplatten und Türfronten.
      </p>

      <h3>Wertsachen &amp; Dokumente</h3>
      <p>
        Wichtige Dokumente und Schmuck verbleiben in Ihrer persönlichen Obhut —
        niemals im LKW. Nutzen Sie eine separate Tasche oder einen verschlossenen
        Rucksack.
      </p>

      <h2>Am Umzugstag</h2>
      <p>
        Halten Sie am Umzugstag einige leere Reserve-Boxen bereit. Erfahrungsgemäß
        tauchen immer Last-Minute-Gegenstände auf: Gardinen, Reinigungsutensilien
        oder vergessene Küchenutensilien.
      </p>

      <h2>Beschriftungs-System</h2>
      <p>
        Bewährt hat sich folgende Beschriftung auf jeder Box — gut sichtbar auf
        mindestens zwei Seiten:
      </p>
      <ul>
        <li>Zielraum (z. B. &bdquo;Küche&ldquo;, &bdquo;Schlafzimmer Kind&ldquo;)</li>
        <li>Kurzinhalt (z. B. &bdquo;Bücher / Deko&ldquo;)</li>
        <li>Handhabungshinweis bei Bedarf (z. B. &bdquo;OBEN&ldquo; / &bdquo;ZERBRECHLICH&ldquo;)</li>
        <li>Priorität beim Auspacken (z. B. &bdquo;Tag 1&ldquo;, &bdquo;später&ldquo;)</li>
      </ul>
    </GuideLayout>
  );
}
