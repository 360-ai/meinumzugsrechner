import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Umzugskosten und Steuer: was privat und beruflich möglich ist | meinumzugsrechner.de";
const PAGE_DESC =
  "Orientierung zu Umzugskosten in der Steuer: §35a EStG bei privaten Umzügen und Werbungskosten bei beruflicher Veranlassung, kompakt erklärt.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/steuerspartipps/"),
  openGraph: {
    title: "Umzugskosten und Steuer verständlich erklärt",
    description: PAGE_DESC,
    url: "/ratgeber/steuerspartipps/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Private Umzüge: oft zählt §35a EStG",
    items: [
      { label: "Grundidee", text: "Bei einem privaten Umzug können Arbeitskosten eines beauftragten Unternehmens unter §35a EStG fallen." },
      { label: "Steuerermäßigung", text: "20 Prozent der begünstigten Arbeitskosten, höchstens 4.000 Euro pro Jahr." },
      { label: "Wichtig", text: "Maßgeblich sind Rechnung und unbare Zahlung auf das Konto des Leistungserbringers." },
      { label: "Einschränkung", text: "Material, Warenanteile und rein begleitende Nebenkosten sind nicht automatisch im selben Umfang begünstigt." },
    ],
  },
  {
    heading: "Beruflich veranlasste Umzüge",
    items: [
      { label: "Grundsatz", text: "Ist der Wohnungswechsel beruflich veranlasst, kommen Werbungskosten in Betracht." },
      { label: "Orientierung aus den Lohnsteuer-Hinweisen", text: "Die LStH 2026 verweist bei der Höhe typischerweise auf die umzugskostenrechtlichen Beträge nach BUKG/AUV." },
      { label: "Pauschbeträge", text: "Für sonstige Umzugsauslagen nennt das amtliche BMF-Material weiterhin 964 Euro für den Berechtigten, 643 Euro je weitere Person und 193 Euro in Sonderfällen ohne eigene Wohnung; Stand der dort genannten Werte: Umzüge ab 1. März 2024." },
      { label: "Zusätzliche Kosten", text: "Neben Pauschalen können je nach Fall weitere tatsächlich angefallene, beruflich veranlasste Kosten relevant sein." },
    ],
  },
  {
    heading: "Was Sie praktisch vorbereiten sollten",
    items: [
      { label: "Rechnung sauber prüfen", text: "Lassen Sie Arbeitskosten möglichst nachvollziehbar ausweisen." },
      { label: "Zahlungsweg dokumentieren", text: "Barzahlungen sind für §35a EStG regelmäßig problematisch; Überweisung ist der sichere Weg." },
      { label: "Beruflichen Anlass festhalten", text: "Bei Jobwechsel, Versetzung oder ähnlichen Fällen helfen Unterlagen, den Anlass nachvollziehbar zu dokumentieren." },
      { label: "Einzelfall nicht überschätzen", text: "Steuerthemen rund um Umzüge hängen stark von der konkreten Situation ab." },
    ],
  },
];

export default function SteuerspartippsPage() {
  return (
    <GuideLayout
      title="Umzugskosten und Steuer verständlich erklärt"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/steuerspartipps/",
        description: PAGE_DESC,
      }}
    >
      <div className="space-y-6">
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Worum es bei Umzugskosten steuerlich geht</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Rund um den Umzug tauchen steuerlich meist zwei Fragen auf: Erstens, ob bei einem
            privaten Umzug die Rechnung eines Dienstleisters nach §35a EStG begünstigt sein kann.
            Zweitens, ob ein beruflich veranlasster Umzug als Werbungskosten anzusetzen ist. Diese
            Seite gibt dafür eine Orientierung, ersetzt aber keine individuelle Steuerberatung.
          </p>
        </div>

        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Private Umzüge: der typische Anknüpfungspunkt</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Bei privaten Umzügen geht es oft nicht um Werbungskosten, sondern um eine mögliche
            Steuerermäßigung für haushaltsnahe Dienstleistungen. Praktisch relevant ist dabei vor
            allem der Arbeitslohn eines beauftragten Unternehmens.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">§35a EStG:</strong> 20 Prozent der begünstigten
                Aufwendungen, höchstens 4.000 Euro pro Jahr.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Nachweis:</strong> Rechnung und Zahlung aufs
                Konto des Leistungserbringers sind der sichere Standard.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Wichtig für die Praxis:</strong> Nicht jede
                Rechnungsposition ist automatisch gleich begünstigt; relevant sind typischerweise
                die Arbeitskosten.
              </span>
            </li>
          </ul>
        </div>

        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Beruflich veranlasster Umzug</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A7A8A]">
            Wenn der Wohnungswechsel beruflich veranlasst ist, sprechen die amtlichen
            Lohnsteuer-Hinweise von Werbungskosten. Für die Höhe wird dort typischerweise auf die
            umzugskostenrechtlichen Beträge nach BUKG und AUV verwiesen.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>
                1
              </div>
              <span className="text-sm text-[#5A7A8A]">
                <strong className="text-[#0D2137]">Amtliche Richtung:</strong> Beruflich veranlasste
                Umzugskosten können Werbungskosten sein.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>
                2
              </div>
              <span className="text-sm text-[#5A7A8A]">
                <strong className="text-[#0D2137]">Pauschbeträge aus dem amtlichen Material:</strong>{" "}
                964 Euro für den Berechtigten, 643 Euro je weitere Person und 193 Euro in den dort
                beschriebenen Sonderfällen; die genannten Werte gelten laut BMF-Unterlage für Umzüge
                ab dem 1. März 2024.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>
                3
              </div>
              <span className="text-sm text-[#5A7A8A]">
                <strong className="text-[#0D2137]">Einzelfall bleibt wichtig:</strong> Welche Kosten
                zusätzlich ansetzbar sind, hängt von Anlass und Nachweisen ab.
              </span>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Praktische Vorbereitung für die Steuer</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFCC00]" />
              <span>Rechnungen vollständig aufbewahren und Zahlungen nachvollziehbar dokumentieren.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFCC00]" />
              <span>Bei Firmenrechnungen den Arbeitsanteil möglichst getrennt ausweisen lassen.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFCC00]" />
              <span>Bei beruflichen Gründen den Anlass mit passenden Unterlagen greifbar halten.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFCC00]" />
              <span>Bei Unsicherheit lieber einmal fachlich prüfen lassen als zu viel anzunehmen.</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong>Hinweis:</strong> Diese Seite bietet nur eine allgemeine Orientierung. Für Ihren
          konkreten Fall können steuerliche Details anders zu bewerten sein. Maßgeblich sind die
          jeweils aktuellen amtlichen Regelungen und Ihre individuelle Situation.
        </div>
      </div>
    </GuideLayout>
  );
}
