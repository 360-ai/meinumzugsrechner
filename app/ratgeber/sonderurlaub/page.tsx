import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { SONDERURLAUB_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";

const PAGE_TITLE = "Sonderurlaub beim Umzug: Anspruch, Tarifverträge & wie beantragen 2026 | meinumzugsrechner.de";
const PAGE_DESC =
  "Haben Sie beim Umzug Anspruch auf bezahlten Sonderurlaub? Was Tarifverträge regeln, wie Sie den freien Tag beantragen — und was gilt, wenn gar keine Regelung existiert.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/sonderurlaub/"),
  openGraph: {
    title: "Sonderurlaub beim Umzug: Anspruch, Tarifverträge & wie beantragen 2026",
    description: PAGE_DESC,
    url: "/ratgeber/sonderurlaub/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Gesetzlicher Anspruch — gibt es den?",
    items: [
      { label: "Kein allgemeiner gesetzlicher Anspruch", text: "Das deutsche Bundesurlaubsgesetz (BUrlG) kennt keinen eigenen Sonderurlaubsanspruch für private Umzüge. Ein Anspruch entsteht nur durch Arbeitsvertrag, Betriebsvereinbarung oder Tarifvertrag." },
      { label: "Ausnahme: beruflich bedingter Umzug", text: "Wer auf Anweisung des Arbeitgebers umzieht, hat nach der Bundesumzugskostenverordnung (BUKG) Anspruch auf einen bezahlten Umzugstag sowie auf Umzugskostenerstattung. Das gilt vor allem im öffentlichen Dienst und bei bestimmten Branchen." },
      { label: "Betriebliche Regelungen prüfen", text: "Viele Arbeitgeber gewähren freiwillig einen oder zwei bezahlte Sonderurlaubstage, auch wenn keine Tarifbindung besteht. Ein Blick in den Arbeitsvertrag oder eine direkte Rückfrage bei der Personalabteilung lohnt sich." },
    ],
  },
  {
    heading: "Was Tarifverträge regeln",
    items: [
      { label: "TVöD und TV-L (öffentlicher Dienst)", text: "Im öffentlichen Dienst gewährt der Tarifvertrag bei einem eigenen Hausstand in der Regel einen bezahlten Sonderurlaubstag pro Umzug." },
      { label: "Branchentarifverträge", text: "Viele Branchentarifverträge — etwa im Handel, Bankenwesen oder der chemischen Industrie — enthalten ähnliche Regelungen. Die genauen Bedingungen variieren jedoch. Im Zweifel die Gewerkschaft oder den Betriebsrat fragen." },
      { label: "Voraussetzung: eigener Hausstand", text: "Fast alle Tarifverträge knüpfen den Anspruch daran, dass man einen eigenen Hausstand führt und tatsächlich in eine neue Wohnung zieht — nicht innerhalb desselben Hauses oder Gebäudes wechselt." },
      { label: "Kein Anspruch für Familienmitglieder", text: "Sonderurlaub für das Helfen beim Umzug von Eltern, Kindern oder Geschwistern ist in den meisten Regelungen nicht vorgesehen. Hier gilt regulärer Urlaub oder eine individuelle Absprache mit dem Arbeitgeber." },
    ],
  },
  {
    heading: "Wie Sie Sonderurlaub beantragen",
    items: [
      { label: "Rechtzeitig ankündigen", text: "Den Umzug so früh wie möglich beim Vorgesetzten oder der Personalabteilung melden. Je früher die Ankündigung, desto besser die Chancen auf Entgegenkommen — auch wenn kein formaler Anspruch besteht." },
      { label: "Schriftlich anfragen", text: "Den Antrag schriftlich stellen, damit er dokumentiert ist. Kurze E-Mail reicht: Datum des Umzugs, Adressänderung, Bitte um Sonderurlaubstag mit Verweis auf Tarifvertrag oder Arbeitsvertrag." },
      { label: "Nachweis bereithalten", text: "Manche Arbeitgeber verlangen einen Nachweis über den tatsächlichen Umzug — etwa die Ummeldebescheinigung oder den neuen Mietvertrag. Diese sollte man nach dem Umzug einreichen können." },
      { label: "Umzugstag geschickt wählen", text: "Wer den Umzug auf einen Tag legt, an dem ohnehin wenig los ist (z. B. Ende des Monats, Freitag), erhöht die Bereitschaft des Arbeitgebers, unkompliziert einen freien Tag zu gewähren." },
    ],
  },
  {
    heading: "Kein Anspruch — was dann?",
    items: [
      { label: "Regulärer Urlaub", text: "Die einfachste Lösung: einen oder zwei Urlaubstage nehmen. Das verringert das Jahreskontingent, aber der Umzugstag ist damit planbar und abgesichert." },
      { label: "Unbezahlte Freistellung", text: "Wer keine Urlaubstage opfern will, kann eine unbezahlte Freistellung beantragen. Der Arbeitgeber muss nicht zustimmen, viele tun es aber bei einmaliger Anfrage." },
      { label: "Umzug auf den Wochenend legen", text: "Viele Umzüge finden an Samstagen statt. Das erspart die Diskussion über Sonderurlaub komplett — sofern Helfer und Umzugsfirma an diesem Tag verfügbar sind." },
      { label: "Mehrere Tage einplanen", text: "Wer nur einen Tag einplant und den Umzug unterschätzt, nimmt sich den Puffer. Für einen 3-Zimmer-Haushalt oder mehr sind oft zwei Tage realistisch — einen für den eigentlichen Transport, einen für den Aufbau." },
    ],
  },
];

export default function SonderurlaubRatgeberPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/sonderurlaub/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: SONDERURLAUB_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-sonderurlaub-faq" data={faqLd} />
      <GuideLayout
        title="Sonderurlaub beim Umzug: Wer hat Anspruch — und wie beantragen?"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/sonderurlaub/",
          description: PAGE_DESC,
        }}
      >
        <div className="space-y-6">

          {/* Intro */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Sonderurlaub beim Umzug: Was wirklich gilt</h2>
            <p className="text-sm text-[#5A7A8A] leading-relaxed">
              Viele gehen davon aus, dass man beim Umzug automatisch einen freien Tag bekommt. Das stimmt so nicht. Einen gesetzlichen Anspruch gibt es nicht — es sei denn, der Arbeitgeber selbst ordnet den Umzug an. Ob und wie viel Sonderurlaub man bekommt, hängt vom Arbeitsvertrag, dem Tarifvertrag und letztlich vom Arbeitgeber ab. Dieser Ratgeber klärt, worauf Sie sich berufen können und wie Sie den Antrag richtig stellen.
            </p>
          </div>

          {/* Übersichts-Box */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-3 text-sm font-bold text-amber-800">Schnellcheck: Haben Sie Anspruch?</h2>
            <div className="space-y-2 text-sm">
              {[
                { check: "Tarifvertrag (TVöD, TV-L, Branche)", result: "Meist 1 bezahlter Sonderurlaubstag" },
                { check: "Betriebsvereinbarung im Unternehmen", result: "Prüfen — oft 1–2 Tage möglich" },
                { check: "Beruflich bedingter Umzug (BUKG)", result: "1 bezahlter Tag + Kostenerstattung" },
                { check: "Kein Tarif, kein Vertrag, keine Vereinbarung", result: "Kein gesetzlicher Anspruch — Antrag trotzdem stellen" },
              ].map((row) => (
                <div key={row.check} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3">
                  <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" style={{ marginTop: "6px" }} />
                  <div>
                    <span className="font-medium text-[#0D2137]">{row.check}:</span>{" "}
                    <span className="text-[#5A7A8A]">{row.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gesetzliches */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Gesetzlicher Anspruch — was gilt wirklich?</h2>
            <ul className="space-y-3">
              {[
                { label: "Kein allgemeiner Anspruch", text: "Das Bundesurlaubsgesetz regelt Sonderurlaub für private Umzüge nicht. Ein Anspruch entsteht nur durch Vertrag, Betriebsvereinbarung oder Tarifvertrag." },
                { label: "Ausnahme: Arbeitgeber ordnet Umzug an", text: "Nach BUKG gilt dann: ein bezahlter Umzugstag plus Kostenerstattung. Betrifft vor allem Bundesbedienstete und Teile des öffentlichen Dienstes." },
                { label: "Freiwillige Gewährung", text: "Viele Arbeitgeber gewähren auch ohne Anspruch einen freien Tag — besonders wenn man den Umzug frühzeitig ankündigt und einen ruhigen Termin wählt." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarifverträge */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Was Tarifverträge regeln</h2>
            <ul className="space-y-3">
              {[
                { label: "TVöD / TV-L (öffentlicher Dienst)", text: "In der Regel ein bezahlter Sonderurlaubstag bei Umzug mit eigenem Hausstand. Gilt für Bundes-, Landes- und Kommunalbedienstete." },
                { label: "Branchentarifverträge", text: "Handel, Banken, Chemie, Bau und andere Branchen haben eigene Regelungen — meist ebenfalls ein Tag. Im Zweifel: Betriebsrat oder Gewerkschaft fragen." },
                { label: "Voraussetzung: eigener Hausstand", text: "Fast alle Regelungen setzen voraus, dass man selbst einen eigenen Haushalt führt und in eine neue Wohnung zieht — nicht innerhalb desselben Hauses wechselt." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Beantragen */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">So beantragen Sie den Sonderurlaub</h2>
            <ul className="space-y-3">
              {[
                { label: "Frühzeitig ankündigen", text: "Den Umzugstermin so früh wie möglich melden. Je mehr Vorlaufzeit, desto besser — auch wenn kein formaler Anspruch besteht." },
                { label: "Schriftlich anfragen", text: "Kurze E-Mail an Vorgesetzten oder Personalabteilung: Datum, neue Adresse, Bitte um Sonderurlaubstag mit Verweis auf Tarifvertrag oder Arbeitsvertrag." },
                { label: "Nachweis bereithalten", text: "Ummeldebescheinigung oder neuen Mietvertrag bereithalten — manche Arbeitgeber verlangen einen Beleg für den tatsächlichen Umzug." },
                { label: "Termin geschickt wählen", text: "Freitag oder Monatsletzter sind oft leichter genehmigbar als mitten in der Woche. Ein ruhiger Tag erhöht die Kulanzbereitschaft." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
                  <span><strong className="text-[#0D2137]">{item.label}:</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kein Anspruch */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #FF7700" }}>
            <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Kein Anspruch — was dann?</h2>
            <ul className="space-y-3">
              {[
                { label: "Regulärer Urlaub", text: "Einen Urlaubstag nehmen — zählt auf das Jahreskontingent, ist aber planbar und unkompliziert." },
                { label: "Unbezahlte Freistellung", text: "Wer keine Urlaubstage opfern will: unbezahlte Freistellung beantragen. Kein Rechtsanspruch, viele Arbeitgeber stimmen bei einmaliger Anfrage aber zu." },
                { label: "Umzug auf Samstag legen", text: "Das erspart die Diskussion komplett. Helfer und Umzugsfirmen sind samstags oft verfügbar — Vorlaufzeit beim Buchen einplanen." },
                { label: "Zwei Tage einplanen", text: "Ab drei Zimmern wird ein einzelner Umzugstag oft eng. Lieber einen Tag Puffer für Aufbau und Auspacken einrechnen." },
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
              {SONDERURLAUB_FAQS.map((faq) => (
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
            <a href="/rechner/" className="font-medium underline">kostenloser Rechner</a> zeigt, was ein Profi-Umzug in Ihrer Region realistisch kostet — ohne Datenweitergabe an Umzugsfirmen.
          </div>

        </div>
      </GuideLayout>
    </>
  );
}
