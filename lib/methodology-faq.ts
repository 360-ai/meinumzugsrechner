/** FAQ für /so-rechnen-wir/ — FAQPage-Schema + sichtbares Accordion */
export const METHODOLOGY_FAQS: { question: string; answer: string }[] = [
  {
    question: "Ist der angezeigte Betrag ein Festpreis?",
    answer:
      "Nein. Es handelt sich um einen Preiskorridor (untere und obere Schranke), der typische Marktpreise widerspiegelt. Ein Umzugsunternehmen gibt erst nach Besichtigung oder detailliertem Angebot einen Festpreis.",
  },
  {
    question: "Woher kommen die Stundensätze und Regionalfaktoren?",
    answer:
      "Die Berechnung nutzt eine interne Preismatrix mit regionalen Sätzen (u. a. nach Bundesland und optional Landkreis), Zuschlägen für Etage, Treppenhaus und Termin sowie Annahmen zu Personalzeit und Transport. Details stehen auf dieser Seite unter „Grundlagen“.",
  },
  {
    question: "Warum weicht mein Angebot von der Schätzung ab?",
    answer:
      "Vor-Ort-Faktoren (Parken, lange Wege, Sperrgut, kurzfristige Buchung, Saison) können den Preis stark beeinflussen. Nutzen Sie den Korridor als Orientierung und holen Sie mehrere Angebote ein.",
  },
  {
    question: "Was ist der Unterschied zwischen „Schnell schätzen“ und der detaillierten Kalkulation?",
    answer:
      "Die Schnellschätzung nutzt Wohnfläche, Zimmer und Entfernung mit pauschalen Annahmen. Die detaillierte Kalkulation erfasst Möbelstücke und Gebäudedetails — ideal für vergleichbare Angebotsanfragen.",
  },
  {
    question: "Werden meine Eingaben gespeichert?",
    answer:
      "Die Berechnung erfolgt im Browser; dauerhafte Speicherung auf unseren Servern findet für Ihre Umzugsdaten nicht statt. Siehe auch die Datenschutzerklärung.",
  },
];
