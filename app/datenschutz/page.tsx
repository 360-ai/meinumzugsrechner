export default function DatenschutzPage() {
  return (
    <article className="space-y-6 text-slate-700">
      <h1>Datenschutzerklärung</h1>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der Website und der Bezahlfunktion
        erforderlich ist. Umzugsspezifische Eingaben (Möbellisten, Adressen, freie Texte) werden{" "}
        <strong>nicht dauerhaft auf unseren Servern gespeichert</strong> und nicht an Umzugsfirmen zum Zweck der
        Kontaktaufnahme weitergegeben.
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        Denis Schmidt, 360ai, Frankenberg (Eder) – Kontakt: info@360-ai.org
      </p>

      <h2>Hosting & Zugriffsdaten</h2>
      <p>
        Beim Aufruf der Website verarbeitet der Hoster/Provider technisch bedingt Zugriffsdaten (z. B. IP-Adresse,
        Zeitstempel, User-Agent). Zweck: sicherer Betrieb, Missbrauchserkennung. Rechtsgrundlage: berechtigtes Interesse
        (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>Zahlungsabwicklung (Stripe)</h2>
      <p>
        Die Zahlung erfolgt über den Zahlungsdienstleister <strong>Stripe Payments Europe Ltd.</strong> (u. a. Checkout,
        Kartenzahlung). Dabei werden Zahlungsdaten von Stripe verarbeitet. Details:{" "}
        <a href="https://stripe.com/de/privacy" className="text-accent" target="_blank" rel="noopener noreferrer">
          Stripe Datenschutz
        </a>
        . Mit Stripe wird ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen.
      </p>

      <h2>Umrechnung / Berechnung</h2>
      <p>
        Zur Erstellung des Ergebnisses können eingegebene Daten <strong>vorübergehend im Arbeitsspeicher</strong>{" "}
        verarbeitet werden und werden nach erfolgter Berechnung verworfen. Es erfolgt keine Speicherung der Umzugsdaten
        in einer Nutzerdatenbank.
      </p>

      <h2>Werbliche Partnerlinks (Affiliate)</h2>
      <p>
        Auf der Ergebnisseite können werbliche Hinweise und Links zu Partnern erscheinen. Es findet kein Abgleich Ihrer
        Umzugseingaben mit diesen Partnern statt. Bitte beachten Sie die Kennzeichnung als Werbung.
      </p>

      <h2>Cookies</h2>
      <p>
        Soweit technisch notwendige Cookies/Local Storage verwendet werden (z. B. Zwischenspeicherung des Formulars auf
        Ihrem Gerät), erfolgt dies zur Nutzerfreundlichkeit auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. bei
        Einwilligung Art. 6 Abs. 1 lit. a DSGVO.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und
        Datenübertragbarkeit, soweit die gesetzlichen Voraussetzungen erfüllt sind. Beschwerderecht bei einer
        Datenschutzaufsichtsbehörde.
      </p>

      <p className="text-sm text-muted">
        Stand: April 2026 – Entwurf zur Einbindung einer juristischen Prüfung empfohlen.
      </p>
    </article>
  );
}
