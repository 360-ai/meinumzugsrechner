import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | meinumzugsrechner.de",
  description:
    "Gesetzliche Anbieterkennzeichnung nach DDG: Kontakt, Verantwortlicher und Hinweise zu meinumzugsrechner.de.",
  ...pageCanonical("/impressum/"),
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <article className="space-y-6 text-slate-700">
      <h1>Impressum</h1>
      <p className="text-sm text-muted">
        Informationspflichten nach dem Digitale-Dienste-Gesetz (DDG), zuvor vergleichbar Telemediengesetz (TMG).
      </p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Diensteanbieter</h2>
        <p>
          Denis Schmidt
          <br />
          <span className="text-slate-600">
            Geschäftlich unter der Bezeichnung <strong>360ai</strong>; dieses Angebot (Website meinumzugsrechner.de)
            wird im Rahmen von 360ai betrieben.
          </span>
          <br />
          Wangershäuser Str. 7
          <br />
          35066 Frankenberg (Eder)
          <br />
          Deutschland
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Kontakt</h2>
        <p>
          E-Mail (meinumzugsrechner.de):{" "}
          <a href="mailto:info@meinumzugsrechner.de" className="text-accent">
            info@meinumzugsrechner.de
          </a>
        </p>
        <p className="text-sm">
          Telefon: nicht eingerichtet. Erreichbarkeit erfolgt in der Regel per E-Mail innerhalb weniger Werktage.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Umsatzsteuer / Wirtschafts-ID</h2>
        <p className="text-sm">
          Sofern eine Umsatzsteuer-Identifikationsnummer nach dem Umsatzsteuergesetz oder eine
          Wirtschafts-Identifikationsnummer nach der Abgabenordnung vorliegt, ist diese hier anzugeben
          (Stand ab 2026 in der Praxis häufig erforderlich, sobald die Nummer zugeteilt wurde).
        </p>
        <p>
          USt-IdNr.: <span className="text-muted">[falls vorhanden eintragen]</span>
          <br />
          W-IdNr.: <span className="text-muted">[falls vorhanden eintragen]</span>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Verantwortlich für den Inhalt</h2>
        <p>Denis Schmidt, Anschrift wie oben.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte wird keine Gewähr übernommen. Als Diensteanbieter sind wir nach allgemeinem
          Gesetz für eigene Inhalte auf diesen Seiten verantwortlich; für fremde Inhalte (z. B. verlinkte Seiten)
          gilt dies nur, soweit uns Kenntnis rechtswidriger Inhalte zugekommen ist und eine technisch zumutbare
          Sperrung möglich ist.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Haftung für Links</h2>
        <p>
          Unser Angebot kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen
          Einfluss; für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Online-Streitbeilegung</h2>
        <p className="text-sm">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            className="text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </article>
  );
}
