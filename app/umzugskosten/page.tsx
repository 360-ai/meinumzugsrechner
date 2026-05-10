import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CITIES } from "@/lib/city-data";
import { estimateMarketBenchmark } from "@/lib/market-benchmark";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";

const PAGE_TITLE = "Umzugskosten nach Stadt — Was kostet ein Umzug in Berlin, München, Hamburg? | meinumzugsrechner.de";
const PAGE_DESC =
  "Was kostet ein Umzug in meiner Stadt? Umzugskosten für 50 Städte vergleichen — Berlin, München, Hamburg, Köln, Frankfurt und mehr. Regionale Preiskorridore kostenlos einsehen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Umzugskosten",
    "was kostet ein Umzug",
    "Umzugskosten Berlin",
    "Umzugskosten München",
    "Umzugskosten Hamburg",
    "Umzugskosten Frankfurt",
    "Umzug Kosten Vergleich",
    "Umzugskosten nach Stadt",
    "regionale Umzugspreise",
  ],
  ...pageCanonical("/umzugskosten/"),
  openGraph: {
    type: "website",
    title: "Umzugskosten nach Stadt — Regionale Preisübersicht",
    description: PAGE_DESC,
    url: "/umzugskosten/",
  },
  robots: { index: true, follow: true },
};

function getCityPreview(bundesland: string, lokalKm: number) {
  const result = estimateMarketBenchmark({
    bundesland: bundesland as import("@/lib/types").BundeslandCode,
    wohnflaecheM2: 75,
    zimmer: 3,
    haushaltGroesse: "2",
    km: lokalKm,
  });
  return result;
}

export default function UmzugskostenHubPage() {
  return (
    <>
      <JsonLd
        id="ld-umzugskosten-hub"
        data={webPageOnlySchema({
          path: "/umzugskosten/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
        })}
      />

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
        {/* Hero */}
        <div className="mb-10 rounded-2xl p-8 text-center" style={{ backgroundColor: "#0D2137" }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: "#FFCC00" }}>
            Regionale Preisübersicht
          </p>
          <h1 className="text-3xl font-black text-white sm:text-4xl">
            Umzugskosten nach Stadt
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Vergleichen Sie Umzugskosten in {CITIES.length}&nbsp;deutschen Städten — mit regionalen
            Preisfaktoren und lokalen Besonderheiten.
          </p>
        </div>

        {/* Städte-Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => {
            const preview = getCityPreview(city.bundesland, city.lokalKm);
            return (
              <Link
                key={city.slug}
                href={`/umzugskosten/${city.slug}/`}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-[#0D2137] group-hover:text-[#0088CC] transition-colors">
                    {city.name}
                  </h2>
                  <span className="rounded-full bg-[#EBF6FD] px-2 py-0.5 text-xs font-medium text-[#0088CC]">
                    {city.bundeslandName}
                  </span>
                </div>
                <p className="text-sm text-[#5A7A8A]">
                  3-Zi. lokal: <strong className="text-[#0D2137]">
                    {preview.korridorUnten.toLocaleString("de-DE")}–{preview.korridorOben.toLocaleString("de-DE")} €
                  </strong>
                </p>
                <p className="mt-1 text-xs text-[#5A7A8A]">{city.einwohner} Einwohner</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#0088CC]">
                  Details ansehen →
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ backgroundColor: "#EBF6FD" }}>
          <p className="mb-2 text-lg font-bold text-[#0D2137]">
            Ihren individuellen Umzugspreis berechnen
          </p>
          <p className="mb-5 text-sm text-[#5A7A8A]">
            Mit regionalem Preisfaktor, Inventar und Zusatzleistungen — kostenlos und ohne Anmeldung.
          </p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner →
          </Link>
        </div>
      </div>
    </>
  );
}
