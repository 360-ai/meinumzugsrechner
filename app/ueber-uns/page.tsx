import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns | meinumzugsrechner.com",
  description:
    "Transparente Umzugskosten-Richtwerte ohne Verkauf Ihrer Daten — die Idee und das Team hinter meinumzugsrechner.com.",
  ...pageCanonical("/ueber-uns/"),
  openGraph: {
    title: "Über meinumzugsrechner.com",
    description:
      "Transparente Umzugskosten-Richtwerte ohne Verkauf Ihrer Daten — die Idee und das Team hinter meinumzugsrechner.com.",
    url: "/ueber-uns/",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-[#FAFCFE] p-6 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-[#0D2137]">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <h1 className="mb-1 text-3xl font-bold text-[#0D2137]">Über uns</h1>
      <p className="mb-8 text-sm text-slate-400">
        Die Idee hinter meinumzugsrechner.com
      </p>

      <div className="space-y-4">
        <Section title="Wer steckt dahinter?">
          <p>
            meinumzugsrechner.com ist ein Projekt von{" "}
            <strong className="text-[#0D2137]">Denis Schmidt</strong> unter dem Label{" "}
            <strong className="text-[#0D2137]">360ai</strong> aus Frankenberg (Eder), Deutschland.
          </p>
          <p>
            Wir entwickeln digitale Werkzeuge, die Menschen bei alltäglichen Entscheidungen helfen — ohne
            unnötige Datenweitergabe, ohne versteckte Kosten.
          </p>
        </Section>

        <Section title="Die Idee">
          <p>
            Wer umzieht, möchte wissen, was ihn das kostet — bevor er bei einer Umzugsfirma anruft und sofort
            im Verkaufsgespräch landet. Genau das löst meinumzugsrechner.com:
          </p>
          <p>
            Du gibst deine Umzugsdaten ein, erhältst einen realistischen{" "}
            <strong className="text-[#0D2137]">Preiskorridor</strong> und kannst dann gezielt und auf Augenhöhe
            Angebote einholen — mit einer echten Verhandlungsgrundlage in der Hand.
          </p>
        </Section>

        <Section title="Unser Ansatz">
          <ul className="space-y-2">
            {[
              "Kostenlose Berechnung — kein Konto, keine Registrierung",
              "Keine Datenweitergabe an Umzugsfirmen zum Zweck der Kontaktaufnahme",
              "Alle Berechnungen laufen im Browser — deine Daten verlassen dein Gerät nicht",
              "Finanzierung durch Affiliate-Links und zukünftig Werbung — nicht durch Datenverkauf",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#0088CC" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Für Umzugsunternehmen">
          <p>
            Regionale Umzugsfirmen können sich in unser Partnernetzwerk eintragen. Nutzer erhalten nach ihrer
            Berechnung die Möglichkeit, passende Unternehmen direkt anzuschreiben — mit ihrer Kalkulation als
            Gesprächsgrundlage.
          </p>
          <p>
            Interesse?{" "}
            <a
              href="mailto:info@meinumzugsrechner.com?subject=Partnerschaft%20meinumzugsrechner.com"
              className="font-medium text-[#0088CC] hover:underline"
            >
              info@meinumzugsrechner.com
            </a>
          </p>
        </Section>

        <div className="rounded-2xl bg-[#EBF6FD] p-6 text-center">
          <p className="mb-3 text-sm font-bold text-[#0D2137]">Jetzt ausprobieren</p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Kostenlos berechnen →
          </Link>
        </div>
      </div>
    </div>
  );
}
