import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { ENTRUEMPELUNG_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "Entrümpelung vor dem Umzug: Kosten, Tipps & wann sich ein Profi lohnt | meinumzugsrechner.de";
const PAGE_DESC =
  "Wohnung oder Keller vor dem Umzug entrümpeln: Was kostet ein Profi, wann lohnt Eigenleistung, was ist Wertanrechnung — und wie Sie Abzocke vermeiden.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/entruempelung/"),
  openGraph: {
    title: "Entrümpelung vor dem Umzug: Kosten & Tipps",
    description: PAGE_DESC,
    url: "/ratgeber/entruempelung/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Warum vor dem Umzug entrümpeln?",
    items: [
      { label: "Weniger Volumen", text: "Jeder Gegenstand den Sie nicht mitnehmen, spart Transportkosten." },
      { label: "Geringeres Umzugsvolumen", text: "Weniger Kubikmeter bedeuten oft ein kleineres Fahrzeug oder weniger Fahrten." },
      { label: "Frischer Start", text: "Unnötiger Ballast zieht nicht in die neue Wohnung um." },
    ],
  },
  {
    heading: "Entrümpelung vs. Haushaltsauflösung",
    items: [
      { label: "Entrümpelung", text: "Sperrmüll, Gerümpel und überflüssige Gegenstände werden entsorgt. Der Haushalt bleibt weitgehend bestehen." },
      { label: "Haushaltsauflösung", text: "Der gesamte Haushalt wird geräumt — typisch bei Umzügen ins Pflegeheim, nach einem Todesfall oder bei einer vollständigen Wohnungsübergabe." },
      { label: "Teilentrümpelung", text: "Nur Keller, Dachboden oder Garage werden geräumt. Oft die günstigste Option." },
    ],
  },
  {
    heading: "Was kostet eine Entrümpelung?",
    items: [
      { label: "Wohnung", text: "15–40 € pro m² (Großstädte: bis 55 €/m²)" },
      { label: "Haus", text: "20–45 € pro m²" },
      { label: "Keller / Garage", text: "ab 150 €, typisch 15–35 €/m²" },
      { label: "Dachboden", text: "15–35 € pro m²" },
      { label: "Haushaltsauflösung", text: "2.000–4.500 € je nach Größe und Inventar" },
      { label: "Pro Zimmer (Profi)", text: "ca. 500–800 € als grobe Orientierung" },
    ],
  },
  {
    heading: "Wertanrechnung: Wie funktioniert das?",
    items: [
      { label: "Prinzip", text: "Seriöse Entrümpler schätzen den Marktwert verwertbarer Gegenstände und ziehen diesen vom Gesamtpreis ab." },
      { label: "Was wird angerechnet", text: "Antiquitäten, gut erhaltene Möbel, funktionstüchtige Elektrogeräte, Sammlerstücke." },
      { label: "Im besten Fall", text: "Bei sehr hochwertigem Nachlass kann die Entrümpelung kostenlos sein oder es gibt sogar eine Auszahlung." },
      { label: "Wichtig", text: "Immer schriftliche Aufschlüsselung anfordern — Wertansätze ohne Begründung sind schwer nachzuvollziehen." },
    ],
  },
  {
    heading: "Selbst entrümpeln: Was ist realistisch?",
    items: [
      { label: "Gut selbst machbar", text: "Kleidung, Bücher, Kleinkram, kleine Elektrogeräte — über Wertstoffhöfe, Spendenboxen oder Kleinanzeigen." },
      { label: "Wertstoffhof", text: "In vielen Kommunen können bis zu 2 m³ Sperrmüll kostenlos angeliefert werden." },
      { label: "Verkaufen statt entsorgen", text: "Gut erhaltene Möbel, Geschirr und Elektronik auf Kleinanzeigen oder beim Flohmarkt verkaufen — spart Entsorgungskosten und bringt Geld zurück." },
      { label: "Zeitaufwand realistisch planen", text: "Eine 3-Zimmer-Wohnung schafft eine Profifirma an einem Tag — selbst sind es leicht mehrere Wochenenden." },
      { label: "Wenn Profis sinnvoller sind", text: "Schwerer Sperrmüll, Dachboden ohne Aufzug, Sondermüll (Asbest, Farben), oder wenn Zeit fehlt." },
    ],
  },
  {
    heading: "Abzocke erkennen und vermeiden",
    items: [
      { label: "Mindeststandard", text: "Seriöse Firmen besichtigen das Objekt kostenlos vor Ort oder verlangen Fotos aller relevanten Bereiche." },
      { label: "Schriftliches Festpreisangebot", text: "Niemals ohne schriftliches Angebot beauftragen — mündliche Absprachen sind schwer durchsetzbar." },
      { label: "Entsorgungsnachweise", text: "Fragen Sie nach, wie und wo das Material entsorgt wird. Seriöse Betriebe können Nachweise vorlegen." },
      { label: "Vergleich", text: "Mindestens 3 Angebote einholen — regionale Unterschiede können 40 % des Gesamtpreises ausmachen." },
      { label: "Vorsicht", text: "Firmen, die nur telefonische Sofortpreise nennen oder Vorauszahlung verlangen, sind ein Warnsignal." },
    ],
  },
];

export default function EntruempelungPage() {
  return (
    <>
      <JsonLd
        id="ld-entruempelung-faq"
        data={webPageAndFaqSchema({
          path: "/ratgeber/entruempelung/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: ENTRUEMPELUNG_FAQS,
        })}
      />
      <GuideLayout
        title="Entrümpelung vor dem Umzug"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/entruempelung/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Warum vor dem Umzug entrümpeln?</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Jeder Gegenstand, der beim Umzug nicht mitgenommen wird, spart Transportvolumen — und damit bares Geld.
            Wer vor dem Einpacken konsequent aussortiert, braucht oft einen kleineren LKW, weniger Fahrten und
            weniger Kartons. Dazu kommt der psychologische Effekt: Ein Umzug ist ein natürlicher Schnitt. Was
            jahrelang im Keller verstaubt hat, zieht sinnvollerweise nicht in die neue Wohnung um.
          </p>
        </div>

        {/* Entrümpelung vs. Haushaltsauflösung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Entrümpelung, Teilentrümpelung, Haushaltsauflösung</h2>
          <div className="space-y-4">
            {[
              {
                label: "Teilentrümpelung",
                text: "Nur ein bestimmter Bereich wird geräumt — Keller, Dachboden, Garage. Die günstigste Option, oft ab 150 €.",
              },
              {
                label: "Entrümpelung",
                text: "Sperrmüll, Gerümpel und überflüssige Gegenstände werden aus dem Haushalt entfernt. Der Haushalt selbst bleibt bestehen.",
              },
              {
                label: "Haushaltsauflösung",
                text: "Der gesamte Haushalt wird komplett geräumt — typisch bei Umzügen ins Pflegeheim, nach einem Todesfall oder wenn die Wohnung besenrein übergeben werden muss. Oft verbunden mit Wertermittlung und Verkauf verwertbarer Stücke.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-100 bg-[#FAFCFE] p-4">
                <p className="mb-1 font-bold text-[#0D2137]">{item.label}</p>
                <p className="text-sm leading-relaxed text-[#5A7A8A]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kosten */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Was kostet eine Entrümpelung?</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Die Kosten richten sich nach Fläche, Menge des Entrümpelungsguts, Zugänglichkeit und Region.
            Großstädte liegen am oberen Rand, ländliche Regionen darunter.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Objekt</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Kosten pro m²</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Richtwert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Wohnung (regional)", "15–40 €/m²", "–"],
                  ["Wohnung (Großstadt)", "30–55 €/m²", "–"],
                  ["Haus", "20–45 €/m²", "–"],
                  ["Keller / Garage", "15–35 €/m²", "ab ca. 150 €"],
                  ["3-Zimmer-Wohnung (Profi)", "pro Zimmer", "500–800 €"],
                  ["Haushaltsauflösung", "komplett", "2.000–4.500 €"],
                ].map(([obj, preis, richtwert]) => (
                  <tr key={obj} className="hover:bg-[#FAFCFE]">
                    <td className="px-4 py-3 font-medium text-[#0D2137]">{obj}</td>
                    <td className="px-4 py-3 text-[#5A7A8A]">{preis}</td>
                    <td className="px-4 py-3 text-[#5A7A8A]">{richtwert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#5A7A8A]">
            Alle Angaben sind Orientierungswerte. Regionale Unterschiede können bis zu 40 % betragen — immer mehrere Angebote einholen.
          </p>
        </div>

        {/* Wertanrechnung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wertanrechnung: Wenn Entrümpelung sich selbst finanziert</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Viele Entrümpelungsunternehmen bieten eine Wertanrechnung an: Verwertbare Gegenstände — gut erhaltene Möbel,
            Antiquitäten, funktionstüchtige Elektrogeräte, Sammlerstücke — werden bewertet und ihr Marktwert direkt
            vom Rechnungsbetrag abgezogen. Bei sehr hochwertigem Inventar kann die Entrümpelung dadurch erheblich
            günstiger werden, im Idealfall sogar kostenlos.
          </p>
          <ul className="space-y-2">
            {[
              "Immer schriftliche Aufschlüsselung der angerechneten Werte verlangen",
              "Bei wertvollen Einzelstücken vorab selbst recherchieren (Auktionshäuser, Kleinanzeigen)",
              "Wertanrechnung ≠ Garantie — manche Firmen setzen Werte sehr niedrig an",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Selbst machen */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Selbst entrümpeln: Was ist realistisch?</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Wer selbst vorarbeitet, kann die Kosten für den Profi um 20 bis 40 Prozent senken. Entscheidend ist
            zu wissen, was sich einfach erledigen lässt — und wo Profis schneller sind.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[#EBF6FD] p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#0088CC]">Gut selbst machbar</p>
              <ul className="space-y-1">
                {[
                  "Kleidung, Bücher, Kleinzeug",
                  "Wertstoffhof (oft bis 2 m³ kostenlos)",
                  "Verkauf über Kleinanzeigen",
                  "Spendenboxen für gut Erhaltenes",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-1.5 text-sm text-[#5A7A8A]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF3E8" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: "#FF7700" }}>Besser dem Profi überlassen</p>
              <ul className="space-y-1">
                {[
                  "Schwerer Sperrmüll ohne Aufzug",
                  "Sondermüll (Asbest, Lacke, Farben)",
                  "Mehrere Etagen unter Zeitdruck",
                  "Vollständige Haushaltsauflösung",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-1.5 text-sm text-[#5A7A8A]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#FF7700" }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Abzocke vermeiden */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Seriöse Anbieter erkennen</h2>
          <ul className="space-y-3">
            {[
              { label: "Kostenlose Besichtigung", text: "Seriöse Firmen schauen sich das Objekt vor Ort an oder verlangen aussagekräftige Fotos — ohne Besichtigung ist kein seriöses Angebot möglich." },
              { label: "Schriftliches Festpreisangebot", text: "Nur schriftliche Angebote sind verbindlich. Mündliche Sofortpreise am Telefon sind ein Warnsignal." },
              { label: "Entsorgungsnachweise", text: "Fragen Sie, wo und wie entsorgt wird. Seriöse Betriebe können Nachweise vorlegen." },
              { label: "Mindestens 3 Angebote", text: "Regionale Unterschiede können bis zu 40 Prozent betragen — Vergleiche lohnen sich immer." },
              { label: "Kein Vorauszahlung", text: "Zahlung nach erbrachter Leistung ist Standard. Vorkasse-Forderungen sind untypisch." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#EBF6FD" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong className="text-[#0D2137]">{item.label}:</strong>{" "}
                  <span className="text-[#5A7A8A]">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verknüpfung Seniorenumzug */}
        <div
          className="rounded-2xl border p-4 text-sm"
          style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
        >
          <strong className="text-[#0D2137]">Tipp bei Seniorenumzügen:</strong>{" "}
          <span className="text-[#5A7A8A]">
            Wenn Sie einen älteren Angehörigen beim Umzug ins Pflegeheim oder in eine kleinere Wohnung begleiten,
            lohnt sich ein Blick in unseren Ratgeber zum Seniorenumzug — dort finden Sie auch Hinweise zu
            Haushaltsauflösungen im familiären Umfeld.{" "}
            <Link href="/ratgeber/seniorenumzug/" className="font-medium text-[#0088CC] hover:underline">
              Zum Seniorenumzug-Ratgeber →
            </Link>
          </span>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Häufige Fragen zur Entrümpelung</h2>
          <FaqAccordion items={ENTRUEMPELUNG_FAQS} />
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#EBF6FD" }}>
          <p className="mb-1 font-bold text-[#0D2137]">Wie viel spart die Entrümpelung beim Umzug?</p>
          <p className="mb-4 text-sm text-[#5A7A8A]">
            Berechnen Sie vorab Ihren Preisrahmen — mit weniger Volumen sinkt oft der Gesamtpreis spürbar.
          </p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner →
          </Link>
        </div>
      </GuideLayout>
    </>
  );
}
