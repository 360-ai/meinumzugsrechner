import Link from "next/link";

export default function UeberUnsPage() {
  return (
    <article className="space-y-4 text-slate-700">
      <h1>Über uns</h1>
      <p>
        meinumzugsrechner.de ist ein Projekt von <strong>360ai</strong> mit dem Ziel, transparente Umzugskosten-Richtwerte
        anzubieten – <strong>ohne Verkauf Ihrer Umzugsdaten</strong> an Umzugsfirmen und ohne klassische Lead-Gebühren als
        Geschäftsmodell.
      </p>
      <p>
        Stattdessen zahlen Sie einmalig eine kleine Gebühr für die Berechnung und erhalten einen nachvollziehbaren
        Korridor, den Sie bei der Einholung echter Angebote als Orientierung nutzen können.
      </p>
      <p>
        <Link href="/rechner" className="text-accent">
          Zum Rechner
        </Link>
      </p>
    </article>
  );
}
