import { JsonLd } from "@/components/JsonLd";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const MT_TITLE = "Materialtipps für deinen Umzug | meinumzugsrechner.de";
const MT_DESC =
  "Empfohlenes Umzugsmaterial bei Amazon — von Kartons über Polstermaterial bis zum Transportwerkzeug.";

export const metadata: Metadata = {
  title: MT_TITLE,
  description: MT_DESC,
  ...pageCanonical("/materialtipps/"),
  openGraph: {
    title: "Materialtipps für deinen Umzug",
    description: MT_DESC,
    url: "/materialtipps/",
  },
};

// ─── Amazon Partnerprogramm ──────────────────────────────────────────────────
// 1. Account anlegen: https://affiliate-program.amazon.de/
// 2. Tracking-ID (z. B. "meinumzug-21") hier eintragen:
const AMAZON_TAG = "360ai-21";
// 3. Für jedes Produkt die ASIN aus der Amazon-URL holen (amazon.de/dp/ASIN/...)
//    und in das href-Feld eintragen: `${amazonLink("ASIN")}`
// ─────────────────────────────────────────────────────────────────────────────

function amazonLink(asin: string) {
  return `https://www.amazon.de/dp/${asin}/?tag=${AMAZON_TAG}`;
}

export default function MaterialtippsPage() {
  const categories = [
    {
      label: "Verpackung",
      icon: <BoxIcon />,
      color: "#0088CC",
      products: [
        {
          name: "Umzugskartons (25er-Set, zweiwellig)",
          description: "Stabile doppelwellige Kartons mit Grifflöchern — bewährt für Haushaltsumzüge aller Größen.",
          tag: "Bestseller",
          href: amazonLink("B00PB03S5S"),
        },
        {
          name: "Packpapier / Einschlagpapier",
          description: "Unbedrucktes Papier in Industriequalität für Glas, Porzellan und Keramik. Schützt besser als Zeitungspapier.",
          tag: "Empfohlen",
          href: amazonLink("B00EZNLETE"),
        },
        {
          name: "Paketband-Abroller (tesa-Set)",
          description: "Abroller mit Paketbändern im Set — macht das Verschließen schwerer Kartons deutlich schneller und sicherer.",
          tag: "Zeitsparend",
          href: amazonLink("B000Z6F7IY"),
        },
      ],
    },
    {
      label: "Schutz",
      icon: <ShieldIcon />,
      color: "#FF7700",
      products: [
        {
          name: "Möbelschutzdecken (Set)",
          description: "Gepolsterte Decken für Holzmöbel, Türfronten und empfindliche Oberflächen beim Transport.",
          tag: "Top-Qualität",
          href: amazonLink("B01MRO5PDS"),
        },
        {
          name: "Stretchfolie transparent",
          description: "Hält Schubladen und Türen geschlossen, bündelt Stangen, schützt Polstermöbel vor Schmutz.",
          tag: "Vielseitig",
          href: amazonLink("B08GNNDDWH"),
        },
        {
          name: "Luftpolsterfolie (40 cm Breite)",
          description: "Für zerbrechliche Gegenstände, die kein Papier ausreichend schützt — Figuren, Elektronik, Vasen.",
          tag: "Stoßschutz",
          href: amazonLink("B09685PW98"),
        },
        {
          name: "Matratzenhülle / Matratzenfolie",
          description: "Schützt die Matratze vor Schmutz, Feuchtigkeit und Beschädigungen beim Transport — unverzichtbar bei jedem Umzug.",
          tag: "Hygieneschutz",
          href: amazonLink("B0C4LJ1G2L"),
        },
      ],
    },
    {
      label: "Werkzeug & Transport",
      icon: <WrenchIcon />,
      color: "#0D2137",
      products: [
        {
          name: "Möbeltransportgurt (Schultertragegurt)",
          description: "Verteilt das Gewicht auf Schultern und Hüfte statt auf den Rücken — unverzichtbar für schwere Möbel.",
          tag: "Rückenschonend",
          href: amazonLink("B0CFPP9GW2"),
        },
        {
          name: "Möbelheber / Möbelroller",
          description: "Für glatten Untergrund: Kühlschrank, Waschmaschine oder Schrank mühelos alleine bewegen.",
          tag: "Zeitsparer",
          href: amazonLink("B0B3XTLW16"),
        },
        {
          name: "Spanngurte / Zurrgurte mit Ratsche",
          description: "Sichern Ladung im LKW gegen Verrutschen. Bei Eigenumzug mit Mietfahrzeug Pflicht.",
          tag: "Ladungssicherung",
          href: amazonLink("B09VPD324B"),
        },
        {
          name: "Werkzeugkoffer (bestückt, Alu)",
          description: "Beim Umzug unverzichtbar: Möbel zerlegen, aufbauen, Haken montieren — alles Nötige in einem Koffer.",
          tag: "Komplett-Set",
          href: amazonLink("B005ERFK9U"),
        },
        {
          name: "Arbeitshandschuhe (ATG MaxiFlex)",
          description: "Rutschfeste Montagehandschuhe für sicheren Grip beim Tragen schwerer Kartons und Möbel.",
          tag: "Griffsicher",
          href: amazonLink("B07B8TNL1J"),
        },
      ],
    },
  ];
  return (
    <>
      <JsonLd
        id="ld-materialtipps"
        data={webPageOnlySchema({
          path: "/materialtipps/",
          title: MT_TITLE,
          description: MT_DESC,
        })}
      />
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">
          Materialtipps für deinen Umzug
        </h1>
        <p className="mt-3 text-[#5A7A8A]">
          Empfohlenes Material für einen reibungslosen Umzug — kuratiert und verlinkt bei Amazon.
        </p>
      </div>

      {/* Affiliate disclaimer — Amazon-Pflichttext + ehrliche Erklärung */}
      <div
        className="mb-10 rounded-2xl border p-5 text-sm"
        style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
      >
        <p className="mb-1 font-bold text-[#0D2137]">
          Anzeige · Als Amazon-Partner verdiene ich an qualifizierten Käufen.
        </p>
        <p className="text-[#5A7A8A] leading-relaxed">
          meinumzugsrechner.de ist und bleibt kostenlos: kein Konto, kein Formular, keine
          Datenweitergabe. Damit das so bleibt, finanzieren wir uns über Amazon-Partnerlinks auf
          dieser Seite. Wenn Sie über einen unserer Links einkaufen, erhalten wir eine kleine
          Provision — der Preis für Sie bleibt dabei exakt gleich. Die Produktauswahl treffen wir
          unabhängig davon: Hier landen nur Artikel, die wir wirklich empfehlen würden. Danke,
          dass Sie den Service dadurch am Leben halten.
        </p>
      </div>

      {/* Product categories */}
      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat.label}>
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: cat.color + "18", color: cat.color }}
              >
                {cat.icon}
              </div>
              <h2
                className="text-xl font-bold"
                style={{ color: cat.color }}
              >
                {cat.label}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cat.products.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-[#0D2137] group-hover:text-[#0088CC] transition-colors">
                      {p.name}
                    </h3>
                    <span
                      className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ backgroundColor: cat.color }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#5A7A8A]">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#0088CC] group-hover:underline">
                      Bei Amazon ansehen →
                    </span>
                    <span className="text-[10px] text-slate-400">Anzeige</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-2xl bg-[#EBF6FD] p-8 text-center">
        <p className="text-lg font-bold text-[#0D2137] mb-2">
          Noch nicht sicher, was Ihr Umzug kostet?
        </p>
        <p className="text-sm text-[#5A7A8A] mb-4">
          Jetzt Umzugskosten als realistischen Preiskorridor schätzen — kostenlos und ohne
          Datenweitergabe an Umzugsfirmen.
        </p>
        <a
          href="/rechner/"
          className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold text-[#0D2137] transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Zum Umzugskosten-Rechner →
        </a>
      </div>
    </div>
    </>
  );
}

