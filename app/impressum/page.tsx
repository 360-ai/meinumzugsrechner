import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | meinumzugsrechner.de",
  description:
    "Gesetzliche Anbieterkennzeichnung nach DDG: Kontakt, Verantwortlicher und Hinweise zu meinumzugsrechner.de.",
  ...pageCanonical("/impressum/"),
  robots: { index: true, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-[#FAFCFE] p-6 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-[#0D2137]">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <h1 className="mb-1 text-3xl font-bold text-[#0D2137]">Impressum</h1>
      <p className="mb-8 text-sm text-slate-400">
        Informationspflichten nach dem Digitale-Dienste-Gesetz (DDG)
      </p>

      <div className="space-y-4">
        <Section title="Diensteanbieter">
          <p>
            <strong className="text-[#0D2137]">Denis Schmidt</strong>
            <br />
            Geschäftlich unter der Bezeichnung <strong>360ai</strong>
            <br />
            Wangershäuser Str. 7
            <br />
            35066 Frankenberg (Eder)
            <br />
            Deutschland
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            E-Mail:{" "}
            <a href="mailto:info@meinumzugsrechner.de" className="font-medium text-[#0088CC] hover:underline">
              info@meinumzugsrechner.de
            </a>
          </p>
          <p className="text-slate-400">
            Telefon: nicht eingerichtet — Erreichbarkeit in der Regel per E-Mail innerhalb weniger Werktage.
          </p>
        </Section>

        <Section title="Umsatzsteuer / Steuernummer">
          <p>
            Steuernummer: <strong className="text-[#0D2137]">027 866 03049</strong> (Finanzamt Frankenberg)
            <br />
            USt-IdNr.: wird nach Erteilung ergänzt, sofern umsatzsteuerpflichtig ausgewiesen wird.
            <br />
            Wirtschafts-Identifikationsnummer: <span className="text-slate-400">[falls vorhanden]</span>
          </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt">
          <p>Denis Schmidt, Anschrift wie oben.</p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität wird keine Gewähr übernommen. Für eigene Inhalte sind wir nach allgemeinem Gesetz
            verantwortlich; für fremde Inhalte (z. B. verlinkte Seiten) gilt dies nur, soweit uns Kenntnis
            rechtswidriger Inhalte zugekommen ist und eine technisch zumutbare Sperrung möglich ist.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Unser Angebot kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen
            Einfluss; für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </Section>

        <Section title="Online-Streitbeilegung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="font-medium text-[#0088CC] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>
      </div>
    </div>
  );
}
