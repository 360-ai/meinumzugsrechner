import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | meinumzugsrechner.com",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei meinumzugsrechner.com (Stand April 2026).",
  ...pageCanonical("/datenschutz/"),
  robots: { index: true, follow: true },
};

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-[#FAFCFE] p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#0088CC" }}
        >
          {num}
        </span>
        <h2 className="text-base font-bold text-[#0D2137]">{title}</h2>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <h1 className="mb-1 text-3xl font-bold text-[#0D2137]">Datenschutzerklärung</h1>
      <p className="mb-8 text-sm text-slate-400">
        Stand: April 2026 · meinumzugsrechner.com
      </p>

      <div className="space-y-4">
        <Section num="1" title="Verantwortlicher">
          <p>
            Verantwortlich im Sinne der DSGVO ist:
            <br />
            <strong className="text-[#0D2137]">Denis Schmidt</strong> (geschäftlich <strong>360ai</strong>)
            <br />
            Wangershäuser Str. 7, 35066 Frankenberg (Eder), Deutschland
          </p>
          <p>
            Kontakt:{" "}
            <a href="mailto:info@meinumzugsrechner.com" className="font-medium text-[#0088CC] hover:underline">
              info@meinumzugsrechner.com
            </a>
          </p>
          <p>
            Im Impressum finden Sie die gesetzliche Anbieterkennzeichnung inkl. Steuernummer; dort
            veröffentlichte Kontaktdaten und steuerliche Kennnummern dürfen nicht für unerwünschte
            Werbung genutzt werden.
          </p>
        </Section>

        <Section num="2" title="Hosting (Cloudflare Pages)">
          <p>
            Die Website wird über <strong>Cloudflare Pages</strong> (Cloudflare, Inc., 101 Townsend St, San
            Francisco, CA 94107, USA) bereitgestellt. Dabei werden technisch erforderliche Daten verarbeitet
            (IP-Adresse, Zeitpunkt des Zugriffs, User-Agent, ggf. Fehlercodes).
          </p>
          <p>
            Es besteht ein Auftragsverarbeitungsverhältnis; Datenübermittlungen in Drittländer sind durch
            Standardvertragsklauseln abgesichert.{" "}
            <a
              href="https://www.cloudflare.com/de-de/privacypolicy/"
              className="font-medium text-[#0088CC] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare Datenschutz
            </a>
          </p>
          <p className="text-slate-400">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
          </p>
        </Section>

        <Section num="3" title="Nutzung des Umzugsrechners">
          <p>
            Umzugsspezifische Eingaben (Möbellisten, Adressen, freie Texte) werden{" "}
            <strong className="text-[#0D2137]">nicht dauerhaft auf unseren Servern gespeichert</strong> und nicht
            an Umzugsfirmen zum Zweck der Kontaktaufnahme weitergegeben. Die Berechnung erfolgt vollständig im
            Browser (clientseitig) — es werden keine Umzugsdaten an unsere Server übermittelt.
          </p>
        </Section>

        <Section num="4" title="Werbung (Google AdSense)">
          <p>
            Google AdSense ist derzeit im Quellcode <strong>nicht aktiv</strong> (auskommentiert). Sobald AdSense
            geladen wird, kann Google Cookies und Werbe-IDs nutzen, um Werbung zu personalisieren; dabei können
            Daten in die USA übermittelt werden.{" "}
            <a
              href="https://policies.google.com/privacy"
              className="font-medium text-[#0088CC] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google-Datenschutzerklärung
            </a>
          </p>
          <p className="text-slate-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
        </Section>

        <Section num="5" title="Affiliate-Links (Amazon)">
          <p>
            Die Website kann am Amazon-Partnerprogramm teilnehmen. Mit * gekennzeichnete Links können
            Affiliate-Links sein; beim Kauf über solche Links kann eine Provision anfallen, ohne dass sich der
            Preis für Sie erhöht.
          </p>
          <p className="text-slate-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
        </Section>

        <Section num="6" title="Regionale Partnerhinweise">
          <p>
            Auf der Ergebnisseite können werbliche Hinweise zu regionalen Partnern erscheinen. Es findet kein
            Abgleich Ihrer Umzugseingaben mit diesen Partnern statt.
          </p>
        </Section>

        <Section num="7" title="Local Storage im Browser">
          <p>
            Zur Zwischenspeicherung des Formulars kann der Local Storage Ihres Browsers genutzt werden. Diese
            Daten verlassen Ihr Gerät nicht über diese Funktion hinweg.
          </p>
          <p className="text-slate-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
        </Section>

        <Section num="8" title="Speicherdauer">
          <p>
            Serverseitige Protokolldaten beim Hosting werden nach den dortigen technischen und rechtlichen
            Vorgaben gelöscht oder anonymisiert. Umzugsdaten aus dem Rechner werden von uns nicht dauerhaft
            serverseitig gespeichert.
          </p>
        </Section>

        <Section num="9" title="Ihre Rechte">
          <p>
            Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Erteilte
            Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Kontakt für Datenschutzanfragen:{" "}
            <a href="mailto:info@meinumzugsrechner.com" className="font-medium text-[#0088CC] hover:underline">
              info@meinumzugsrechner.com
            </a>
          </p>
        </Section>

        <Section num="10" title="Beschwerderecht bei einer Aufsichtsbehörde">
          <p>
            Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Zuständig für Hessen ist:
          </p>
          <p>
            <strong className="text-[#0D2137]">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</strong>
            <br />
            Wilhelmstraße 7, 65185 Wiesbaden · Telefon: +49 611 1408-0
            <br />
            <a
              href="https://www.datenschutz.hessen.de/"
              className="font-medium text-[#0088CC] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.datenschutz.hessen.de
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
