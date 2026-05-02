import type { CityData } from "./city-data";
import { estimateMarketBenchmark } from "./market-benchmark";

export function generateCityFaqs(
  city: CityData,
): { question: string; answer: string }[] {
  const local1 = estimateMarketBenchmark({
    bundesland: city.bundesland,
    wohnflaecheM2: 30,
    zimmer: 1,
    haushaltGroesse: "1",
    km: city.lokalKm,
  });
  const local3 = estimateMarketBenchmark({
    bundesland: city.bundesland,
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: "2",
    km: city.lokalKm,
  });
  const fern3 = estimateMarketBenchmark({
    bundesland: city.bundesland,
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: "2",
    km: city.fernKm,
  });

  return [
    {
      question: `Was kostet ein Umzug in ${city.name}?`,
      answer: `Ein lokaler Umzug in ${city.name} kostet je nach Wohnungsgröße zwischen ca. ${local1.korridorUnten.toLocaleString("de-DE")} € (1 Zimmer) und ${local3.korridorOben.toLocaleString("de-DE")} € (3 Zimmer). Die genauen Kosten hängen von Faktoren wie Etage, Zugang und Zusatzleistungen ab. Nutzen Sie unseren Rechner für eine individuelle Schätzung.`,
    },
    {
      question: `Was kostet ein Umzug von ${city.name} nach ${city.fernZiel}?`,
      answer: `Ein Fernumzug einer 3-Zimmer-Wohnung von ${city.name} nach ${city.fernZiel} (ca. ${city.fernKm} km) kostet in der Regel zwischen ${fern3.korridorUnten.toLocaleString("de-DE")} € und ${fern3.korridorOben.toLocaleString("de-DE")} €. Bei größeren Haushalten oder Zusatzleistungen wie Einpackservice kann der Preis höher liegen.`,
    },
    {
      question: `Wann ist ein Umzug in ${city.name} am günstigsten?`,
      answer: `Umzüge unter der Woche (Dienstag bis Donnerstag) und außerhalb der Hauptsaison (Oktober bis März) sind in ${city.name} in der Regel günstiger. Monatsanfang und -ende sowie Ferienbeginn sind besonders gefragt und daher teurer.`,
    },
    {
      question: `Brauche ich ein Halteverbot für meinen Umzug in ${city.name}?`,
      answer: `In ${city.name} ist eine Halteverbotszone besonders in dicht bebauten Vierteln empfehlenswert. Die Kosten liegen ${city.halteverbotKosten} (Genehmigungsgebühr). Ohne Halteverbot riskieren Sie längere Laufwege und deutlich höhere Umzugskosten durch Zeitverzögerungen.`,
    },
    {
      question: `Wie finde ich eine seriöse Umzugsfirma in ${city.name}?`,
      answer: `Achten Sie auf eine gültige Gewerbelizenz, eine Transportversicherung und transparente Preisangaben. Holen Sie mindestens drei Angebote ein und vergleichen Sie nicht nur den Preis, sondern auch den Leistungsumfang. Unser Rechner gibt Ihnen vorab einen Richtwert, damit Sie Angebote besser einordnen können.`,
    },
  ];
}
