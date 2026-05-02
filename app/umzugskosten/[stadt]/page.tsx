import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { getAllCitySlugs, getCityBySlug } from "@/lib/city-data";
import { generateCityFaqs } from "@/lib/city-faq";
import { estimateMarketBenchmark } from "@/lib/market-benchmark";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";

type Props = { params: Promise<{ stadt: string }> };

export function generateStaticParams() {
  return getAllCitySlugs().map((stadt) => ({ stadt }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);
  if (!city) return {};

  const title = `Umzugskosten ${city.name} — Was kostet ein Umzug ${new Date().getFullYear()}? | meinumzugsrechner.de`;
  const description = `Was kostet ein Umzug in ${city.name}? Aktuelle Preiskorridore für 1–5 Zimmer, lokal & Fernumzug. Kostenlos berechnen — ohne Anmeldung.`;

  return {
    title,
    description,
    keywords: [
      `Umzugskosten ${city.name}`,
      `Umzug ${city.name} Kosten`,
      `Was kostet Umzug ${city.name}`,
      `Umzugsfirma ${city.name}`,
      `Umzug ${city.name} ${new Date().getFullYear()}`,
    ],
    ...pageCanonical(`/umzugskosten/${city.slug}/`),
    openGraph: {
      type: "article",
      title: `Umzugskosten ${city.name} — Preisübersicht ${new Date().getFullYear()}`,
      description,
      url: `/umzugskosten/${city.slug}/`,
    },
    robots: { index: true, follow: true },
  };
}

type PriceRow = {
  label: string;
  zimmer: number;
  flaeche: number;
  haushalt: "1" | "2" | "3_4";
  lokalUnten: number;
  lokalOben: number;
  fernUnten: number;
  fernOben: number;
  volumen: number;
};

function buildPriceTable(bundesland: string, lokalKm: number, fernKm: number): PriceRow[] {
  const configs: { label: string; zimmer: number; flaeche: number; haushalt: "1" | "2" | "3_4" }[] = [
    { label: "1 Zimmer", zimmer: 1, flaeche: 30, haushalt: "1" },
    { label: "2 Zimmer", zimmer: 2, flaeche: 55, haushalt: "2" },
    { label: "3 Zimmer", zimmer: 3, flaeche: 75, haushalt: "2" },
    { label: "4 Zimmer", zimmer: 4, flaeche: 100, haushalt: "3_4" },
    { label: "5+ Zimmer / Haus", zimmer: 5, flaeche: 130, haushalt: "3_4" },
  ];

  return configs.map((c) => {
    const lokal = estimateMarketBenchmark({
      bundesland: bundesland as import("@/lib/types").BundeslandCode,
      wohnflaecheM2: c.flaeche,
      zimmer: c.zimmer,
      haushaltGroesse: c.haushalt,
      km: lokalKm,
    });
    const fern = estimateMarketBenchmark({
      bundesland: bundesland as import("@/lib/types").BundeslandCode,
      wohnflaecheM2: c.flaeche,
      zimmer: c.zimmer,
      haushaltGroesse: c.haushalt,
      km: fernKm,
    });
    return {
      label: c.label,
      zimmer: c.zimmer,
      flaeche: c.flaeche,
      haushalt: c.haushalt,
      lokalUnten: lokal.korridorUnten,
      lokalOben: lokal.korridorOben,
      fernUnten: fern.korridorUnten,
      fernOben: fern.korridorOben,
      volumen: lokal.volumenM3Schaetzung,
    };
  });
}

export default async function CityPage({ params }: Props) {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);
  if (!city) notFound();

  const prices = buildPriceTable(city.bundesland, city.lokalKm, city.fernKm);
  const faqs = generateCityFaqs(city);

  const PAGE_TITLE = `Umzugskosten ${city.name} — Was kostet ein Umzug ${new Date().getFullYear()}?`;
  const PAGE_DESC = `Aktuelle Preiskorridore für Umzüge in ${city.name}: 1–5 Zimmer, lokal & Fernumzug.`;

  return (
    <>
      <JsonLd
        id={`ld-umzugskosten-${city.slug}`}
        data={webPageAndFaqSchema({
          path: `/umzugskosten/${city.slug}/`,
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs,
        })}
      />

      <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-[#5A7A8A]">
          <Link href="/" className="hover:text-[#0088CC]">Start</Link>
          {" / "}
          <Link href="/umzugskosten/" className="hover:text-[#0088CC]">Umzugskosten</Link>
          {" / "}
          <span className="font-medium text-[#0D2137]">{city.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 rounded-2xl p-8" style={{ backgroundColor: "#0D2137" }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: "#FFCC00" }}>
            Umzugskosten {new Date().getFullYear()}
          </p>
          <h1 className="text-3xl font-black text-white sm:text-4xl">
            Was kostet ein Umzug in {city.name}?
          </h1>
          <p className="mt-3 text-white/70">
            {city.bundeslandName} · {city.einwohner} Einwohner · Regionalfaktor im Rechner hinterlegt
          </p>
        </div>

        {/* Preishinweis */}
        <div
          className="mb-8 rounded-2xl border p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC", borderColor: "#e2e8f0", borderLeftColor: "#0088CC" }}
        >
          <h2 className="mb-2 text-lg font-bold text-[#0D2137]">Preislage in {city.name}</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">{city.preishinweis}</p>
        </div>

        {/* Preistabelle */}
        <div className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Preisübersicht {city.name} — Richtwerte
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-3 py-2.5 text-left font-bold text-[#0D2137]">Wohnung</th>
                  <th className="px-3 py-2.5 text-left font-bold text-[#0D2137]">ca. m³</th>
                  <th className="px-3 py-2.5 text-left font-bold text-[#0D2137]">
                    Lokal ({city.lokalKm} km)
                  </th>
                  <th className="px-3 py-2.5 text-left font-bold text-[#0D2137]">
                    Fern ({city.fernKm} km)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {prices.map((row) => (
                  <tr key={row.label} className="hover:bg-[#FAFCFE]">
                    <td className="px-3 py-3 font-medium text-[#0D2137]">{row.label}</td>
                    <td className="px-3 py-3 text-[#5A7A8A]">{Math.round(row.volumen)}</td>
                    <td className="px-3 py-3 text-[#5A7A8A]">
                      {row.lokalUnten.toLocaleString("de-DE")}–{row.lokalOben.toLocaleString("de-DE")} €
                    </td>
                    <td className="px-3 py-3 text-[#5A7A8A]">
                      {row.fernUnten.toLocaleString("de-DE")}–{row.fernOben.toLocaleString("de-DE")} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#5A7A8A]">
            Alle Angaben sind unverbindliche Richtwerte auf Basis unserer Berechnungsmethodik.
            Zuschläge für Etage, Zugang, Zusatzleistungen oder Wochenend-Termine sind nicht enthalten.
          </p>
        </div>

        {/* Besonderheiten */}
        <div
          className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #FF7700" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Besonderheiten beim Umzug in {city.name}
          </h2>
          <ul className="space-y-2">
            {city.besonderheiten.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF7700]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Halteverbot */}
        <div className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-2 text-lg font-bold text-[#0D2137]">Halteverbot in {city.name}</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Eine Halteverbotszone kostet in {city.name} <strong className="text-[#0D2137]">{city.halteverbotKosten}</strong> (Genehmigungsgebühr, ohne Schilderservice).
            Besonders in den Innenstadtlagen ist eine Reservierung dringend empfohlen.
          </p>
          <Link
            href="/ratgeber/halteverbot/"
            className="mt-3 inline-block text-sm font-medium text-[#0088CC] hover:underline"
          >
            Ausführlicher Ratgeber: Halteverbot beantragen →
          </Link>
        </div>

        {/* Spartipps */}
        <div className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">So sparen Sie beim Umzug in {city.name}</h2>
          <ul className="space-y-2">
            {[
              "Unter der Woche umziehen — Montag bis Donnerstag ist günstiger",
              "Frühzeitig buchen — 6–8 Wochen Vorlauf sichert bessere Preise",
              "Entrümpelung vorher — weniger Volumen bedeutet weniger Kosten",
              "Mehrere Angebote einholen und mit unserem Richtwert vergleichen",
              "Steuerlich absetzen — bis zu 4.000 € bei berufsbedingtem Umzug",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {tip}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/steuerspartipps/"
              className="text-sm font-medium text-[#0088CC] hover:underline"
            >
              Steuerspartipps →
            </Link>
            <Link
              href="/ratgeber/selbst-vs-profi/"
              className="text-sm font-medium text-[#0088CC] hover:underline"
            >
              Selbst oder Profi? →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Häufige Fragen zu Umzugskosten in {city.name}</h2>
          <FaqAccordion items={faqs} />
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#EBF6FD" }}>
          <p className="mb-2 text-lg font-bold text-[#0D2137]">
            Ihren persönlichen Umzugspreis für {city.name} berechnen
          </p>
          <p className="mb-5 text-sm text-[#5A7A8A]">
            Kostenlos, ohne Anmeldung und ohne Datenweitergabe an Umzugsfirmen.
          </p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Jetzt berechnen →
          </Link>
        </div>

        {/* Weitere Städte */}
        <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Umzugskosten in anderen Städten</h2>
          <div className="flex flex-wrap gap-2">
            {getAllCitySlugs()
              .filter((s) => s !== city.slug)
              .slice(0, 8)
              .map((s) => {
                const other = getCityBySlug(s);
                if (!other) return null;
                return (
                  <Link
                    key={s}
                    href={`/umzugskosten/${s}/`}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-[#0D2137] transition-colors hover:border-[#0088CC] hover:text-[#0088CC]"
                  >
                    {other.name}
                  </Link>
                );
              })}
            <Link
              href="/umzugskosten/"
              className="rounded-full border border-[#0088CC] px-3 py-1.5 text-sm font-medium text-[#0088CC] hover:bg-[#EBF6FD]"
            >
              Alle Städte →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
