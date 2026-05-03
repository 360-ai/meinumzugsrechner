import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { howToSchema, webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { UMZUGSHELFER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "Umzugshelfer organisieren: Freunde, Studenten oder Profis? | meinumzugsrechner.de";
const PAGE_DESC =
  "Umzugshelfer richtig organisieren: Was kosten Profis und private Helfer, was gilt bei Haftung und Mindestlohn — und wie Sie den Umzugstag reibungslos planen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Umzugshelfer finden", "Umzugshelfer Kosten", "private Umzugshelfer"],
  ...pageCanonical("/ratgeber/umzugshelfer/"),
  openGraph: {
    title: "Umzugshelfer: Freunde, Studenten oder Profis?",
    description: PAGE_DESC,
    url: "/ratgeber/umzugshelfer/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Die drei Optionen im Überblick",
    items: [
      { label: "Freunde & Familie", text: "Keine direkte Bezahlung, dafür Verpflegung und Dankeschön. Kein Versicherungsschutz, eingeschränkte Verlässlichkeit." },
      { label: "Studentische Helfer", text: "13–17 €/h (Mindestlohn 2026: 13,90 €). Flexibel buchbar, meist ohne eigenes Werkzeug." },
      { label: "Profis vom Umzugsunternehmen", text: "17–28 €/h. Erfahrung, Ausrüstung und Versicherungsschutz inklusive." },
    ],
  },
  {
    heading: "Kosten im Überblick",
    items: [
      { label: "Freunde", text: "Verpflegung + ggf. gemeinsames Abendessen" },
      { label: "Studentische Helfer", text: "13–17 €/h (mind. Mindestlohn 13,90 € Stand 2026)" },
      { label: "Möbelpacker (Profi)", text: "17–28 €/h je nach Region und Firma" },
    ],
  },
  {
    heading: "Haftung und Versicherung",
    items: [
      { label: "Gefälligkeitsdienst", text: "Freunde haften grundsätzlich nicht für Schäden, außer bei grober Fahrlässigkeit oder Absicht." },
      { label: "Privathaftpflicht", text: "Viele moderne Privathaftpflichtversicherungen decken Gefälligkeitsschäden mit ab — ob das im konkreten Tarif gilt, sollte vorab in der Police geprüft werden." },
      { label: "Bezahlte private Helfer", text: "Kein automatischer Versicherungsschutz. Im Schadensfall kann es kompliziert werden." },
      { label: "Profis", text: "Umzugsunternehmen haften nach dem Handelsgesetzbuch für Transportschäden." },
    ],
  },
  {
    heading: "Wie viele Helfer brauche ich?",
    items: [
      { label: "1–2 Zimmer", text: "2 Helfer reichen in den meisten Fällen aus." },
      { label: "3–4 Zimmer", text: "3–4 Helfer, klare Rollenverteilung wichtig." },
      { label: "5+ Zimmer", text: "Profis empfehlenswert — der Koordinationsaufwand bei vielen privaten Helfern übersteigt oft den Nutzen." },
    ],
  },
  {
    heading: "Was für Helfer bereitstellen",
    items: [
      { label: "Verpflegung", text: "Wasser, Snacks, eine warme Mahlzeit — keine Option, sondern Pflicht." },
      { label: "Werkzeug", text: "Sackkarre, Tragegurte, Akkuschrauber, Inbusschlüssel." },
      { label: "Kartons", text: "Nicht überladen — schwere Kisten erhöhen Verletzungsrisiko." },
      { label: "Klare Aufgaben", text: "Wer koordiniert beim LKW, wer beim Einräumen — ohne Plan entsteht Chaos." },
    ],
  },
];

export default function UmzugshelferPage() {
  return (
    <>
      <JsonLd
        id="ld-umzugshelfer-howto"
        data={howToSchema({
          name: "Umzugshelfer organisieren: Schritt für Schritt",
          description: "Wie man Umzugshelfer richtig plant, auswählt und auf den Umzugstag vorbereitet — von der Bedarfsermittlung bis zur Aufgabenverteilung.",
          steps: [
            { name: "Bedarf ermitteln", text: "Wohnungsgröße und Möbelumfang einschätzen: Bis 2 Zimmer reichen 2 Helfer, bei 3–4 Zimmern sind 3–4 Helfer sinnvoll, ab 5 Zimmern empfehlen sich Profis." },
            { name: "Helfertyp auswählen", text: "Entscheiden zwischen Freunden (kostenlos, kein Versicherungsschutz), studentischen Helfern (13–17 €/h, Mindestlohn beachten) und professionellen Möbelpackern (17–28 €/h, mit Versicherung)." },
            { name: "Helfer rechtzeitig einplanen oder buchen", text: "Freunde und Studenten früh fragen — gute Profis sind an Wochenenden schnell ausgebucht. Mindestens 2–3 Wochen Vorlauf einplanen." },
            { name: "Halteverbotszone beantragen", text: "Beim zuständigen Ordnungsamt mindestens 1 Woche vor dem Umzugstag beantragen. Schilder mindestens 3 volle Tage (72 Stunden) vorher aufstellen." },
            { name: "Werkzeug und Verpflegung vorbereiten", text: "Sackkarre, Tragegurte, Akkuschrauber und Inbusschlüssel bereitstellen. Ausreichend Wasser, Snacks und eine warme Mahlzeit einplanen." },
            { name: "Klare Aufgaben zuweisen", text: "Vor dem Umzugstag festlegen, wer am LKW koordiniert, wer trägt und wer in der neuen Wohnung einräumt. Ohne klare Rollen geht viel Zeit verloren." },
          ],
        })}
      />
      <JsonLd
        id="ld-umzugshelfer-faq"
        data={webPageAndFaqSchema({
          path: "/ratgeber/umzugshelfer/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: UMZUGSHELFER_FAQS,
        })}
      />
      <GuideLayout
        title="Umzugshelfer organisieren"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/umzugshelfer/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Freunde, Studenten oder Profis?</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Wer beim Umzug hilft, entscheidet mit über Stress und Kosten am Umzugstag. Die drei Optionen —
            Freunde und Familie, studentische Helfer und professionelle Möbelpacker — unterscheiden sich nicht
            nur im Preis, sondern auch in Verlässlichkeit, Erfahrung und Haftung. Wer die Unterschiede kennt,
            kann besser entscheiden und häufige Fehler vermeiden.
          </p>
        </div>

        {/* Die 3 Optionen */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Die drei Optionen im Vergleich</h2>
          <div className="space-y-4">
            {[
              {
                title: "Freunde & Familie",
                kosten: "Verpflegung + Dankeschön",
                pro: ["Keine Kosten, persönliches Vertrauen", "Flexibel bei Absprachen"],
                contra: ["Können kurzfristig absagen", "Kein Versicherungsschutz", "Fehlende Erfahrung bei schweren Möbeln"],
                color: "#EBF6FD",
                accent: "#0088CC",
              },
              {
                title: "Studentische Helfer",
                kosten: "13–17 €/h (mind. Mindestlohn)",
                pro: ["Günstig und flexibel buchbar", "Kurzfristig verfügbar"],
                contra: ["Kein eigenes Werkzeug", "Kein Versicherungsschutz", "Erfahrung variiert stark"],
                color: "#FFF3E8",
                accent: "#FF7700",
              },
              {
                title: "Profis vom Umzugsunternehmen",
                kosten: "17–28 €/h",
                pro: ["Erfahrung mit schweren und sperrigen Möbeln", "Eigenes Werkzeug und Ausrüstung", "Versicherungsschutz bei Transportschäden"],
                contra: ["Höhere Kosten", "Terminplanung früher nötig"],
                color: "#F0FDF4",
                accent: "#16a34a",
              },
            ].map((opt) => (
              <div key={opt.title} className="rounded-xl border border-slate-100 p-4" style={{ backgroundColor: opt.color }}>
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-bold text-[#0D2137]">{opt.title}</p>
                  <span className="text-xs font-bold" style={{ color: opt.accent }}>{opt.kosten}</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#5A7A8A]">Vorteile</p>
                    <ul className="space-y-1">
                      {opt.pro.map((p) => (
                        <li key={p} className="flex items-start gap-1.5 text-sm text-[#5A7A8A]">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: opt.accent }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#5A7A8A]">Nachteile</p>
                    <ul className="space-y-1">
                      {opt.contra.map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-sm text-[#5A7A8A]">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kosten & Mindestlohn */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Kosten und Mindestlohn 2026</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Wer Helfer privat bezahlt, muss den gesetzlichen Mindestlohn beachten: Er liegt 2026 bei{" "}
            <strong className="text-[#0D2137]">13,90 Euro pro Stunde</strong> und gilt auch für kurzfristige
            Aushilfen. Darunter darf nicht bezahlt werden.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#EBF6FD" }}>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Helfertyp</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Kosten pro Stunde</th>
                  <th className="px-4 py-2 text-left font-bold text-[#0D2137]">Hinweis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Freunde / Familie", "0 € (+ Verpflegung)", "Gefälligkeitsdienst"],
                  ["Studentische Helfer (privat)", "13–17 €", "mind. Mindestlohn 13,90 €"],
                  ["Helfer über Plattform / Agentur", "15–20 €", "Versicherung oft inklusive"],
                  ["Möbelpacker (Umzugsfirma)", "17–28 €", "HGB-Haftung, Ausrüstung dabei"],
                ].map(([typ, kosten, hinweis]) => (
                  <tr key={typ} className="hover:bg-[#FAFCFE]">
                    <td className="px-4 py-3 font-medium text-[#0D2137]">{typ}</td>
                    <td className="px-4 py-3 text-[#5A7A8A]">{kosten}</td>
                    <td className="px-4 py-3 text-[#5A7A8A]">{hinweis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Haftung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Haftung: Was passiert bei Schäden?</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Freundschaftshilfe gilt rechtlich als Gefälligkeitsdienst. Das bedeutet: Helfer haften grundsätzlich
            nicht für Schäden — außer bei grober Fahrlässigkeit oder Absicht. Viele moderne
            Privathaftpflichtversicherungen decken Gefälligkeitsschäden mit ab — ob der konkrete Tarif das einschließt, sollte vorab geprüft werden.
          </p>
          <ul className="space-y-3">
            {[
              { label: "Freunde (Gefälligkeit)", text: "Keine Haftung außer bei grober Fahrlässigkeit. Moderne PHV-Policen greifen aber oft trotzdem — vorher prüfen." },
              { label: "Privat bezahlte Helfer", text: "Kein automatischer Versicherungsschutz. Im Schadensfall ist die Rechtslage unklarer als bei Profis." },
              { label: "Helfer über Agentur", text: "In der Regel durch die Agentur versichert — Konditionen vorab erfragen." },
              { label: "Umzugsunternehmen", text: "Haften nach HGB für Transportschäden. Das ist der einzige Weg zu verlässlichem Schutz bei wertvollen Gegenständen." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#EBF6FD" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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

        {/* Wie viele Helfer */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Wie viele Helfer brauche ich?</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Die Anzahl allein ist nicht entscheidend — die Rollenverteilung ist mindestens genauso wichtig.
            Ohne klare Aufgaben verlieren selbst viele Helfer wertvolle Zeit.
          </p>
          <div className="space-y-3">
            {[
              { wohnung: "1–2 Zimmer", helfer: "2 Helfer", hinweis: "Einer trägt, einer koordiniert — reicht für kompakte Haushalte." },
              { wohnung: "3–4 Zimmer", helfer: "3–4 Helfer", hinweis: "Klare Aufteilung: Träger, LKW-Koordinator, Einräumer in der neuen Wohnung." },
              { wohnung: "5+ Zimmer", helfer: "4+ oder Profis", hinweis: "Ab dieser Größe übersteigt der Koordinationsaufwand bei privaten Helfern oft den Nutzen." },
            ].map((row) => (
              <div key={row.wohnung} className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-[#FAFCFE] p-4 sm:flex-row sm:items-start sm:gap-4">
                <div className="min-w-[120px]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5A7A8A]">{row.wohnung}</p>
                  <p className="font-bold text-[#0088CC]">{row.helfer}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#5A7A8A]">{row.hinweis}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Was bereitstellen */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was müssen Sie für Ihre Helfer bereitstellen?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { titel: "Verpflegung", punkte: ["Ausreichend Wasser", "Snacks zwischendurch", "Eine warme Mahlzeit (Pizza, Döner etc.)"] },
              { titel: "Werkzeug", punkte: ["Sackkarre (unverzichtbar)", "Tragegurte für Möbel", "Akkuschrauber + Inbusschlüssel", "Stöße und Schoner für Möbelkanten"] },
              { titel: "Verpackung", punkte: ["Kartons nicht überladen (max. 15–20 kg)", "Klebeband, Schere griffbereit", "Schrumpffolie für Schubladen"] },
              { titel: "Organisation", punkte: ["Klare Aufgaben vorab zuweisen", "Halteverbotszone frühzeitig beantragen", "Parkplatz für LKW klären"] },
            ].map((block) => (
              <div key={block.titel} className="rounded-xl bg-[#EBF6FD] p-4">
                <p className="mb-2 font-bold text-[#0D2137]">{block.titel}</p>
                <ul className="space-y-1">
                  {block.punkte.map((p) => (
                    <li key={p} className="flex items-start gap-1.5 text-sm text-[#5A7A8A]">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hinweis Halteverbot */}
        <div
          className="rounded-2xl border p-4 text-sm"
          style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
        >
          <strong className="text-[#0D2137]">Tipp:</strong>{" "}
          <span className="text-[#5A7A8A]">
            Ohne Halteverbotszone vor der Tür parken oft fremde Autos den LKW-Stellplatz zu. Beantragen Sie das
            Halteverbot mindestens 1–2 Wochen vor dem Umzugstag beim zuständigen Ordnungsamt.{" "}
            <Link href="/ratgeber/halteverbot/" className="font-medium text-[#0088CC] hover:underline">
              Wie das geht, erklärt unser Halteverbot-Ratgeber →
            </Link>
          </span>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Häufige Fragen zu Umzugshelfern</h2>
          <FaqAccordion items={UMZUGSHELFER_FAQS} />
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#EBF6FD" }}>
          <p className="mb-1 font-bold text-[#0D2137]">Erst den Kostenrahmen kennen, dann Helfer einteilen</p>
          <p className="mb-4 text-sm text-[#5A7A8A]">
            Mit einem realistischen Preisrahmen wissen Sie, ob Profis oder Eigenregie wirtschaftlicher ist.
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
