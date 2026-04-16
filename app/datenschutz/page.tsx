export default function DatenschutzPage() {
  return (
    <article className="space-y-6 text-slate-700">
      <h1>Datenschutzerklärung</h1>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der Website
        erforderlich ist. Umzugsspezifische Eingaben (Möbellisten, Adressen, freie Texte) werden{" "}
        <strong>nicht dauerhaft auf unseren Servern gespeichert</strong> und nicht an Umzugsfirmen
        zum Zweck der Kontaktaufnahme weitergegeben.
      </p>

      <h2>Verantwortlicher</h2>
      <p>Denis Schmidt, 360ai, Frankenberg (Eder) – Kontakt: info@360-ai.org</p>

      <h2>Hosting & Zugriffsdaten</h2>
      <p>
        Beim Aufruf der Website verarbeitet der Hoster/Provider technisch bedingt Zugriffsdaten
        (z. B. IP-Adresse, Zeitstempel, User-Agent). Zweck: sicherer Betrieb, Missbrauchserkennung.
        Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>Umrechnung / Berechnung</h2>
      <p>
        Die Berechnung erfolgt vollständig im Browser des Nutzers (clientseitig). Es werden keine
        Umzugsdaten an unsere Server übertragen oder gespeichert.
      </p>

      <h2>Werbung (Google AdSense)</h2>
      <p>
        Diese Website verwendet Google AdSense, einen Dienst der Google Ireland Ltd., Gordon House,
        Barrow Street, Dublin 4, Irland. Google AdSense verwendet Cookies und Web-Beacons, um
        interessenbezogene Werbung anzuzeigen. Dabei können Daten (z. B. IP-Adresse, Browser-Typ)
        an Google-Server in den USA übermittelt werden. Rechtsgrundlage: Einwilligung
        (Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen:{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Datenschutzrichtlinie
        </a>
        .
      </p>

      <h2>Werbliche Partnerlinks (Amazon Affiliate)</h2>
      <p>
        Diese Website nimmt am Amazon-Partnerprogramm teil. Mit * gekennzeichnete Links sind
        Affiliate-Links zu Amazon. Beim Kauf über diese Links erhalten wir eine kleine Provision.
        Für Sie entstehen keine Mehrkosten. Amazon und das Amazon-Logo sind Warenzeichen von
        Amazon.com, Inc. oder seinen Tochtergesellschaften.
      </p>

      <h2>Weitere Partnerlinks</h2>
      <p>
        Auf der Ergebnisseite können weitere werbliche Hinweise und Links zu regionalen Partnern
        erscheinen. Es findet kein Abgleich Ihrer Umzugseingaben mit diesen Partnern statt.
      </p>

      <h2>Cookies / Local Storage</h2>
      <p>
        Zur Zwischenspeicherung des Formulars auf Ihrem Gerät wird der Local Storage des Browsers
        verwendet. Diese Daten verlassen Ihr Gerät nicht. Rechtsgrundlage: berechtigtes Interesse
        (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Widerspruch und Datenübertragbarkeit, soweit die gesetzlichen Voraussetzungen erfüllt sind.
        Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
      </p>

      <p className="text-sm text-muted">
        Stand: April 2026 – Entwurf, Einbindung einer juristischen Prüfung empfohlen.
      </p>
    </article>
  );
}
