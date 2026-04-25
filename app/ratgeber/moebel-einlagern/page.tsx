import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { MOEBEL_EINLAGERN_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Möbel einlagern: Kosten, Self-Storage & Tipps 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Wann lohnt sich das Einlagern von Möbeln, was kostet ein Lagerraum, wie bereitet man Möbel richtig vor — und worauf sollte man bei der Wahl des Anbieters achten?";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/moebel-einlagern/"),
  openGraph: {
    title: "Möbel einlagern: Kosten, Self-Storage & Tipps 2026",
    description: PAGE_DESC,
    url: "/ratgeber/moebel-einlagern/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Wann ist das Einlagern sinnvoll?",
    items: [
      { label: "Zeitliche Lücke beim Umzug", text: "Auszug am 30., Einzug erst am 15. des Folgemonats — das ist eine der häufigsten Situationen, in der ein Lagerraum gebraucht wird. Möbel einlagern statt doppelt Miete zahlen oder bei Freunden lagern." },
      { label: "Renovierung in der neuen Wohnung", text: "Wer zuerst renoviert und dann einzieht, braucht einen Zwischenstopp für die Möbel. Ein Lagerraum ermöglicht, in Ruhe zu renovieren ohne auf Schränke aufzupassen." },
      { label: "Neue Wohnung ist kleiner", text: "Wenn man nicht weiß, was in die neue Wohnung passt oder was man behalten will: Möbel erst einlagern, in Ruhe entscheiden." },
      { label: "Erbschaft, Nachlassregelung", text: "Möbel von Angehörigen, die man nicht sofort weiterverkaufen oder entsorgen möchte, können für einen begrenzten Zeitraum zwischengelagert werden." },
      { label: "Saisonale Ausrüstung", text: "Fahrräder, Campingausrüstung, Skiausrüstung — wer zu wenig Keller hat, nutzt Self-Storage auch dauerhaft für Saisonartikel." },
    ],
  },
  {
    heading: "Self-Storage vs. klassisches Möbellager",
    items: [
      { label: "Self-Storage", text: "Man mietet eine abgeschlossene Box und hat selbst jederzeit Zugang — ohne Voranmeldung und ohne Wartezeit. Flexibel, transparent, günstiger für kurze bis mittlere Zeiträume. Verbreitet in Städten." },
      { label: "Klassisches Möbellager", text: "Das Unternehmen übernimmt Ein- und Auslagern. Kein direkter Zugang zur eigenen Einlagerung. Besser geeignet für längere Zeiträume oder wenn kein eigenes Transportmittel vorhanden ist." },
      { label: "Container-Lagerung", text: "Transportcontainer werden direkt zur Haustür geliefert, befüllt und dann abgeholt. Praktisch, aber teurer. Sinnvoll bei langen Umzugswegen oder wenn keine lokalen Lagerräume verfügbar sind." },
    ],
  },
  {
    heading: "Kosten: Was ein Lagerraum kostet",
    items: [
      { label: "Kleine Box (1–3 m²)", text: "Ca. 20–60 Euro pro Monat. Passt für ein WG-Zimmer mit Kartons und wenigen Möbeln. In Großstädten eher am oberen Ende." },
      { label: "Mittelgroßer Raum (5–10 m²)", text: "Ca. 60–130 Euro pro Monat. Reicht für eine 2-Zimmer-Wohnung. Faustregel: ca. 1 m² Lagerfläche pro 7–10 m² Wohnfläche." },
      { label: "Großer Raum (15–20 m²)", text: "Ca. 150–250 Euro pro Monat. Für 3–4 Zimmer Wohnung. In teuren Städten wie München oder Hamburg teurer." },
      { label: "Längere Mietdauer spart Geld", text: "Viele Anbieter staffeln die Preise — wer für sechs Monate oder länger mietet, zahlt weniger pro Monat als bei kurzfristiger Buchung." },
    ],
  },
  {
    heading: "Anbieter wählen: Worauf es ankommt",
    items: [
      { label: "Tägliche Zugänglichkeit", text: "Überprüfen, ob der Lagerraum täglich zugänglich ist — und zu welchen Zeiten. Manche Anbieter haben eingeschränkte Öffnungszeiten." },
      { label: "Zufahrt und Transportwege", text: "Gibt es eine Rampe, einen Aufzug, ausreichend Parkfläche? Wer schwere Möbel einlagert, braucht ebene Transportwege und breite Gänge." },
      { label: "Trocken, belüftet, frostsicher", text: "Möbel aus Holz und Polster reagieren empfindlich auf Feuchtigkeit und extreme Temperaturen. Gute Lageranbieter haben Belüftung und Heizung in den Räumen." },
      { label: "Sicherheit", text: "PIN-Code-Zugang, Videoüberwachung und Einzelschloss für jede Box sind Standard bei seriösen Anbietern. Vor Ort prüfen." },
      { label: "Versicherung klären", text: "Nicht alle Anbieter bieten automatisch Versicherungsschutz. Klären ob eigene Hausratversicherung den eingelagerten Hausrat abdeckt — oder ob eine Zusatzversicherung nötig ist." },
    ],
  },
  {
    heading: "Möbel richtig für die Lagerung vorbereiten",
    items: [
      { label: "Möbel demontieren", text: "Schränke und Regale zerlegen wo möglich — spart Platz und schützt vor Schäden durch das Eigengewicht der Konstruktion. Schrauben und Beschläge in beschrifteten Beuteln." },
      { label: "Lageplan erstellen", text: "Wer vorausplant, was wo im Lagerraum steht, findet später schneller was er sucht. Häufig benötigte Gegenstände vorne platzieren." },
      { label: "Schweres nach unten, Leichtes nach oben", text: "Stabile Möbel und schwere Kartons als Basis, fragile Gegenstände und leichtes Material darüber. Polstermöbel aufrecht stellen, nicht stapeln." },
      { label: "Holzmöbel mit Decken einwickeln", text: "Nicht in Plastikfolie — die verhindert die Belüftung und fördert Schimmelbildung. Baumwolldecken oder Möbeldecken erlauben Luftzirkulation." },
      { label: "Was nicht gelagert werden sollte", text: "Lebensmittel, Pflanzen, brennbare Flüssigkeiten, Chemikalien und Bargeld sind bei den meisten Anbietern verboten. Wertgegenstände wie Schmuck oder Dokumente besser im Banktresor oder Safe aufbewahren." },
    ],
  },
];

export default function MoebelEinlagernRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/moebel-einlagern/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: MOEBEL_EINLAGERN_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-moebel-einlagern-faq" data={faqLd} />
      <GuideLayout
        title="Möbel einlagern: Wann es sinnvoll ist, was es kostet und wie man es richtig macht"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/moebel-einlagern/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Zwischenlagern statt improvisieren</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Zwischen Auszug und Einzug liegt oft eine Lücke — manchmal Tage, manchmal Wochen. Wer Möbel in dieser Zeit bei Freunden abstellt oder auf dem Parkplatz lässt, schafft sich mehr Probleme als er löst. Ein Lagerraum ist flexibel, bezahlbar und schützt den Hausrat besser als jede Improvisationslösung. Dieser Ratgeber zeigt, wann sich das Einlagern lohnt, was es kostet und worauf man bei der Wahl achten sollte.
            </p>
          </div>

          {/* Kostenübersicht */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Kosten auf einen Blick (monatlich)</h2>
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              {[
                { label: "Kleine Box (1–3 m²)", value: "20–60 €", fuer: "WG-Zimmer, Kartons" },
                { label: "Mittelgroß (5–10 m²)", value: "60–130 €", fuer: "2-Zimmer-Wohnung" },
                { label: "Groß (15–20 m²)", value: "150–250 €", fuer: "3–4 Zimmer" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="text-xs text-amber-700 font-medium mb-1">{item.label}</div>
                  <div className="font-bold text-[#0D2137]">{item.value}</div>
                  <div className="text-xs text-[#5A7A8A] mt-0.5">{item.fuer}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-amber-700">Faustregel: ca. 1 m² Lagerfläche pro 7–10 m² Wohnfläche. Preise variieren stark je nach Stadt und Anbieter.</p>
          </div>

          {/* Self-Storage vs. Möbellager */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Self-Storage vs. klassisches Möbellager</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  titel: "Self-Storage",
                  punkte: ["Eigener Zugang jederzeit", "Keine Voranmeldung", "Flexibler Mietvertrag", "Günstiger für kurze Zeiträume", "Man bringt Möbel selbst hin"],
                  color: "#0088CC",
                },
                {
                  titel: "Klassisches Möbellager",
                  punkte: ["Unternehmen lagert ein und aus", "Kein direkter Zugang", "Besser für lange Zeiträume", "Kein eigenes Transportmittel nötig", "Oft teurer"],
                  color: "#FF7700",
                },
              ].map((item) => (
                <div key={item.titel} className="rounded-xl border border-slate-100 p-4">
                  <h3 className="mb-2 font-semibold text-sm text-[#0D2137]">{item.titel}</h3>
                  <ul className="space-y-1.5">
                    {item.punkte.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-[#5A7A8A]">
                        <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Anbieter wählen */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Anbieter wählen: Checkliste</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Tägliche Zugänglichkeit", text: "Öffnungszeiten prüfen" },
                { label: "Ebene Zufahrt", text: "Rampe oder Aufzug vorhanden?" },
                { label: "Trocken und belüftet", text: "Kein Schimmelrisiko" },
                { label: "Frostsicher", text: "Wichtig für Holz und Polster" },
                { label: "Videoüberwachung", text: "Sicherheitsstandard prüfen" },
                { label: "Einzelschloss pro Box", text: "Eigenes Schloss mitbringen" },
                { label: "Versicherungsschutz", text: "Eigene Police prüfen" },
                { label: "Kündigungsfristen", text: "Mietvertrag lesen" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vorbereitung */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Möbel richtig vorbereiten</h2>
            <ul className="space-y-3">
              {[
                { label: "Demontieren spart Platz", text: "Schränke und Regale zerlegen — spart Lagerfläche und schützt vor Schäden durch das Eigengewicht. Schrauben beschriftet einpacken." },
                { label: "Lageplan erstellen", text: "Häufig benötigte Gegenstände vorne platzieren. Wer beim Einlagern plant, spart beim Auslagern Zeit." },
                { label: "Holzmöbel mit Decken einwickeln", text: "Keine Plastikfolie — die verhindert Belüftung und fördert Schimmel. Baumwolldecken erlauben Luftzirkulation." },
                { label: "Polstermöbel aufrecht stellen", text: "Sofas und Sessel nicht stapeln — das verformt das Polster dauerhaft." },
                { label: "Nicht erlaubt", text: "Lebensmittel, Pflanzen, brennbare Flüssigkeiten, Bargeld und Wertgegenstände — in keinem seriösen Lagerraum erlaubt." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF7700", marginTop: "6px" }} />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
            <div className="space-y-3">
              {MOEBEL_EINLAGERN_FAQS.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0D2137] list-none">
                    {faq.question}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 flex-shrink-0 text-[#0088CC] transition-transform group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[#5A7A8A]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
            <strong>Umzugskosten noch nicht kalkuliert?</strong> Unser{" "}
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt, was ein Profi-Umzug in Ihrer Region kostet — ohne Anmeldung, ohne Datenweitergabe.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
