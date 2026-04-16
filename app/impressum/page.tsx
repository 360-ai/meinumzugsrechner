export default function ImpressumPage() {
  return (
    <article className="space-y-4 text-slate-700">
      <h1>Impressum</h1>
      <p>
        <strong>Angaben gemäß § 5 TMG / E-Commerce-Gesetz (Österreich: ECG analog – Anbieterkennzeichnung)</strong>
      </p>
      <p>
        Denis Schmidt
        <br />
        360ai
        <br />
        Frankenberg (Eder)
        <br />
        Deutschland
      </p>
      <p>
        <strong>Kontakt</strong>
        <br />
        E-Mail:{" "}
        <a href="mailto:info@360-ai.org" className="text-accent">
          info@360-ai.org
        </a>
      </p>
      <p>
        <strong>Haftung für Inhalte</strong>
        <br />
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>
      <p>
        <strong>Haftung für Links</strong>
        <br />
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
      </p>
    </article>
  );
}
