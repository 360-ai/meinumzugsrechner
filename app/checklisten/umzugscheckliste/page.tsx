import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { UmzugschecklisteClient } from "@/components/UmzugschecklisteClient";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

const PAGE_TITLE = "Vollständige Umzugscheckliste 2026: 48 Aufgaben von A bis Z | meinumzugsrechner.de";
const PAGE_DESC =
  "Die komplette Umzugscheckliste mit 48 Aufgaben in 7 Phasen: von der Kündigung über Adressänderungen bis zur Ummeldung — interaktiv abhaken, Fortschritt wird gespeichert.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ["Umzugscheckliste", "Umzug Checkliste PDF", "Umzug planen Liste"],
  ...pageCanonical("/checklisten/umzugscheckliste/"),
  openGraph: {
    title: "Vollständige Umzugscheckliste 2026: 48 Aufgaben von A bis Z",
    description: PAGE_DESC,
    url: "/checklisten/umzugscheckliste/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
};

const FAQS = [
  {
    question: "Wann muss ich mich nach einem Umzug ummelden?",
    answer:
      "Die Ummeldung beim Einwohnermeldeamt ist gesetzlich vorgeschrieben und muss in den meisten Bundesländern innerhalb von 14 Tagen nach dem Einzug erfolgen, in einigen bereits innerhalb einer Woche. Mitbringen: Personalausweis oder Reisepass sowie die Wohnungsgeberbestätigung vom Vermieter. Wer die Frist versäumt, riskiert ein Bußgeld.",
  },
  {
    question: "Was ist ein Nachsendeauftrag und wie lange dauert er?",
    answer:
      "Der Nachsendeauftrag der Deutschen Post leitet Post von der alten an die neue Adresse weiter. Er kostet ca. 28 Euro für 6 Monate und sollte mindestens eine Woche vor dem Umzug beantragt werden, da die Aktivierung 3–5 Werktage dauert. Online buchbar unter deutschepost.de. Er überbrückt die Zeit, bis alle Adressänderungen wirksam sind.",
  },
  {
    question: "Welche Stellen müssen bei einem Umzug unbedingt informiert werden?",
    answer:
      "Pflichtmäßig: Einwohnermeldeamt (gesetzlich), Finanzamt, KFZ-Zulassungsstelle bei Landkreiswechsel. Dringend empfohlen: Arbeitgeber, alle Banken und Kreditkartenunternehmen, Kranken- und Hausratversicherung, Rentenversicherung, Beitragsservice (GEZ), Deutsche Post (Nachsendeauftrag), Internet- und Telefonanbieter sowie Strom- und Gasanbieter.",
  },
  {
    question: "Wie lange hat der alte Vermieter Zeit, die Kaution zurückzuzahlen?",
    answer:
      "Gesetzlich gibt es keine starre Frist, aber die Rechtsprechung akzeptiert üblicherweise bis zu 6 Monate nach Mietende. Innerhalb dieser Zeit darf der Vermieter berechtigte Forderungen (Schäden, Betriebskostenabrechnung) verrechnen. Schriftliche Anforderung der Kaution nach dem Auszug empfohlen — bei unberechtigten Abzügen kann man schriftlich widersprechen.",
  },
  {
    question: "Muss ich das KFZ nach einem Umzug ummelden?",
    answer:
      "Ja, wenn man in einen anderen Landkreis zieht. Das Fahrzeug muss bei der neuen Zulassungsstelle umgemeldet werden, und es gibt in der Regel ein neues Kennzeichen. Mitbringen: Fahrzeugschein, Personalausweis, eVB-Nummer der KFZ-Versicherung. Die Versicherung muss zudem über den neuen Wohnort informiert werden, da sich die Regionalklasse ändern kann.",
  },
  {
    question: "Was tun, wenn man vergisst, eine Adresse zu ändern?",
    answer:
      "Dafür ist der Nachsendeauftrag der Deutschen Post die erste Absicherung. Zusätzlich hilft es, eine Liste aller Stellen zu führen, die eine Adresse haben. Besonders häufig vergessen werden: Online-Shops, Streamingdienste mit Rechnungsadresse, Abonnements, ADAC, Bibliotheksausweise, Vereinsmitgliedschaften und Behörden wie die Rentenversicherung.",
  },
];

const sections = FAQS.map((f) => ({ heading: f.question, items: [{ label: "", text: f.answer }] }));

export default function UmzugschecklistePage() {
  const faqLd = webPageAndFaqSchema({
    path: "/checklisten/umzugscheckliste/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: FAQS,
  });

  return (
    <>
      <JsonLd id="ld-umzugscheckliste-faq" data={faqLd} />
      <GuideLayout
        title="Vollständige Umzugscheckliste: 48 Aufgaben in 7 Phasen"
        category="checklisten"
        categoryLabel="Checklisten"
        sections={sections}
        articleSeo={{
          path: "/checklisten/umzugscheckliste/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-2 text-lg font-bold text-[#0D2137]">Die vollständige Liste — nicht die komprimierte</h2>
            <p className="text-sm leading-relaxed text-[#5A7A8A]">
              Diese Checkliste deckt alle 7 Phasen eines Umzugs ab: von der Kündigung 8 Wochen vorher bis zur Ummeldung nach dem Einzug.
              Der Fortschritt wird automatisch im Browser gespeichert — du kannst also jederzeit weitermachen, wo du aufgehört hast.
              Drucken über den Button oben rechts.
            </p>
          </div>

          {/* Interaktive Checkliste */}
          <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
            <UmzugschecklisteClient />
          </Suspense>

          {/* Häufig vergessene Punkte */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Diese 6 Punkte werden am häufigsten vergessen</h2>
            <ul className="space-y-2">
              {[
                { label: "Nachsendeauftrag", text: "Muss mindestens 5 Werktage vor dem Umzug bestellt sein — nicht auf den letzten Tag warten." },
                { label: "Beitragsservice (GEZ)", text: "Wird oft erst Monate später bemerkt, wenn Mahnungen an die alte Adresse gehen." },
                { label: "Hausratversicherung anpassen", text: "Neue Fläche melden — sonst droht Unterversicherung im Schadensfall." },
                { label: "KFZ ummelden", text: "Bei Landkreiswechsel Pflicht. Versicherung informieren: Regionalklasse kann sich ändern." },
                { label: "Online-Shop-Adressen", text: "Amazon, Zalando, eBay & Co. — die neue Standardadresse setzen, bevor das erste Paket weggeht." },
                { label: "Deutsche Rentenversicherung", text: "Wird von fast allen vergessen, obwohl relevant für spätere Rentenbescheide." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#FF7700" }} />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#0D2137]">Häufige Fragen</h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-[#0D2137]">
                    {faq.question}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 flex-shrink-0 text-[#FF7700] transition-transform group-open:rotate-180">
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
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt, was ein Profi-Umzug in Ihrer Region realistisch kostet — ohne Datenweitergabe an Umzugsfirmen.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
