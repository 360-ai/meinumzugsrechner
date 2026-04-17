import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | meinumzugsrechner.de",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei meinumzugsrechner.de (Stand April 2026).",
  ...pageCanonical("/datenschutz/"),
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <article className="space-y-6 text-slate-700">
      <h1>Datenschutzerklärung</h1>
      <p className="text-sm text-muted">
        Stand: April 2026. Diese Erklärung beschreibt die Verarbeitung personenbezogener Daten beim Besuch von
        meinumzugsrechner.de. Eine abschließende juristische Prüfung wird für den produktiven Betrieb empfohlen.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">1. Verantwortlicher</h2>
      <p>
        Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        <br />
        Denis Schmidt (geschäftlich <strong>360ai</strong>), Wangershäuser Str. 7, 35066 Frankenberg (Eder),
        Deutschland. Die Website meinumzugsrechner.de wird im Rahmen von 360ai betrieben.
        <br />
        Kontakt:{" "}
        <a href="mailto:info@meinumzugsrechner.de" className="text-accent">
          info@meinumzugsrechner.de
        </a>
      </p>

      <h2 className="text-lg font-semibold text-slate-900">2. Hosting und Bereitstellung der Website</h2>
      <p>
        Die Website wird über die Plattform{" "}
        <strong>Cloudflare Pages</strong> (Anbieter: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107,
        USA; europäische Vertretung u. a. über Cloudflare Ireland Ltd.) bereitgestellt. Dabei werden technisch
        erforderliche Daten verarbeitet (z. B. IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Ressource,
        User-Agent, ggf. Fehlercodes), um die Auslieferung zu ermöglichen und Missbrauch zu erkennen.
      </p>
      <p>
        Mit Cloudflare besteht ein Auftragsverarbeitungsverhältnis im Rahmen der Nutzungsbedingungen; es können
        Datenübermittlungen in Drittländer (u. a. USA) erfolgen, abgesichert durch geeignete Garantien (u. a.
        Standardvertragsklauseln). Weitere Informationen:{" "}
        <a
          href="https://www.cloudflare.com/de-de/privacypolicy/"
          className="text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutz bei Cloudflare
        </a>
        ,{" "}
        <a
          href="https://www.cloudflare.com/de-de/cloudflare-customer-dpa/"
          className="text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Processing Addendum
        </a>
        .
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an einem sicheren, stabilen Webauftritt (Artikel 6
        Absatz 1 Buchstabe f DSGVO); soweit IP-Adressen als personenbezogen gelten, ist die Verarbeitung zur
        Bereitstellung des Dienstes erforderlich.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">3. Nutzung des Umzugsrechners</h2>
      <p>
        Umzugsspezifische Eingaben (Möbellisten, Adressen, freie Texte) werden{" "}
        <strong>nicht dauerhaft auf unseren Servern gespeichert</strong> und nicht an Umzugsfirmen zum Zweck der
        Kontaktaufnahme weitergegeben. Die Berechnung des Preiskorridors erfolgt im Browser (clientseitig); es
        werden keine Umzugsdaten zur Berechnung an unsere Server übermittelt oder dort abgelegt.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">4. Werbung (Google AdSense)</h2>
      <p>
        <strong>Hinweis zum aktuellen Stand:</strong> Im Quellcode der Website ist Google AdSense derzeit nicht
        aktiv eingebunden (Skript auskommentiert). Sobald AdSense tatsächlich geladen wird, gilt Folgendes:
      </p>
      <p>
        Google AdSense ist ein Angebot der Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland.
        Google kann Cookies, Werbe-IDs und ähnliche Technologien nutzen, um Werbung zu personalisieren und
        Anzeigenperformance zu messen; dabei können auch Daten in die USA übermittelt werden.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Vorliegend Einwilligung (Artikel 6 Absatz 1 Buchstabe a DSGVO), sofern
        Sie über ein Einwilligungs-Banner zustimmen, oder – je nach Einbindung – berechtigtes Interesse an
        finanzierter redaktioneller Angebotsbereitstellung (Artikel 6 Absatz 1 Buchstabe f DSGVO) in Verbindung mit
        den Vorgaben des TTDSG für Endgerätezugriff.
      </p>
      <p>
        Details:{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google-Datenschutzerklärung
        </a>
        .
      </p>

      <h2 className="text-lg font-semibold text-slate-900">5. Werbliche Partnerlinks (Amazon Affiliate)</h2>
      <p>
        Die Website kann am Amazon-Partnerprogramm teilnehmen. Mit * gekennzeichnete Links können Affiliate-Links
        sein; beim Kauf über solche Links kann eine Provision anfallen, ohne dass sich der Preis für Sie erhöht.
        Amazon und das Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder verbundenen Unternehmen.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an der Refinanzierung des Angebots (Artikel 6
        Absatz 1 Buchstabe f DSGVO).
      </p>

      <h2 className="text-lg font-semibold text-slate-900">6. Regionale Partnerhinweise</h2>
      <p>
        Auf der Ergebnisseite können werbliche Hinweise und Links zu regionalen Partnern erscheinen. Es findet kein
        Abgleich Ihrer Umzugseingaben mit diesen Partnern statt.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">7. Local Storage im Browser</h2>
      <p>
        Zur Zwischenspeicherung des Formulars auf Ihrem Endgerät kann der Local Storage des Browsers genutzt
        werden. Diese Daten verlassen Ihr Gerät nicht über diese Funktion hinweg.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an nutzerfreundlicher Bedienung (Artikel 6 Absatz
        1 Buchstabe f DSGVO); soweit der Local Storage nicht unbedingt erforderlich ist, kann zusätzlich die
        Einwilligung nach dem TTDSG erforderlich sein – dann erfolgt diese über die Cookie-/Speicher-Einstellungen
        Ihres Browsers bzw. ein entsprechendes Banner.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">8. Zahlungsabwicklung (geplant)</h2>
      <p>
        Sollte später eine kostenpflichtige Zahlung (z. B. über Stripe oder PayPal) angeboten werden, verarbeitet
        der jeweilige Zahlungsdienstleister die dafür erforderlichen Daten (z. B. Zahlungs- und Transaktionsdaten).
        Hierzu gelten die Datenschutzhinweise des jeweiligen Anbieters. Wir speichern keine vollständigen
        Zahlungskartendaten auf unseren Servern.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">9. Speicherdauer</h2>
      <p>
        Serverseitige Protokolldaten beim Hosting werden nach den dortigen technischen und rechtlichen Vorgaben
        gelöscht oder anonymisiert, sobald sie nicht mehr benötigt werden. Umzugsdaten aus dem Rechner werden von
        uns nicht dauerhaft serverseitig gespeichert (siehe oben).
      </p>

      <h2 className="text-lg font-semibold text-slate-900">10. Ihre Rechte</h2>
      <p>
        Sie haben nach Maßgabe der gesetzlichen Voraussetzungen Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Außerdem
        haben Sie das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">11. Beschwerde bei einer Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere die
        Behörde des Bundeslandes Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
        mutmaßlichen Verstoßes. Für Hessen (Anschrift des Anbieters) ist dies beispielsweise:
      </p>
      <p>
        Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
        <br />
        Wilhelmstraße 7, 65185 Wiesbaden
        <br />
        Telefon: +49 611 1408-0
        <br />
        <a href="https://www.datenschutz.hessen.de/" className="text-accent" target="_blank" rel="noopener noreferrer">
          www.datenschutz.hessen.de
        </a>
      </p>

      <p className="text-sm text-muted">
        Anschrift und Kontakt des Verantwortlichen entsprechen dem Impressum.
      </p>
    </article>
  );
}
