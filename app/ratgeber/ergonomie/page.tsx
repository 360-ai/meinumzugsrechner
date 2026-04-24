import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Ergonomie-Leitfaden: Sicher Heben und Tragen | meinumzugsrechner.de";
const PAGE_DESC =
  "Präventionsleitfaden für rückenfreundliches Arbeiten beim Umzug. Tipps zum sicheren Heben und Tragen schwerer Möbel.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/ergonomie/"),
  openGraph: {
    title: "Ergonomie-Leitfaden: Sicher Heben und Tragen",
    description: PAGE_DESC,
    url: "/ratgeber/ergonomie/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Präventionsleitfaden: Rückenschonendes Arbeiten",
    items: [
      { label: "Stabilität", text: "Sorgen Sie für einen festen Stand; die Füße stehen etwa schulterbreit auseinander." },
      { label: "Kraft aus den Beinen", text: "Gehen Sie beim Anheben in die Hocke und nutzen Sie die Kraft Ihrer Beinmuskulatur. Der Rücken bleibt dabei absolut gerade." },
      { label: "Körpernähe", text: "Tragen Sie Lasten so nah wie möglich am Schwerpunkt Ihres Körpers." },
      { label: "Rotation vermeiden", text: "Drehen Sie niemals den Oberkörper unter Last, sondern bewegen Sie immer die Füße mit." },
      { label: "Gleichmaß", text: "Vermeiden Sie ruckartige Bewegungen beim Anheben und Absetzen." },
      { label: "Teamwork & Technik", text: "Nutzen Sie für schwere Objekte Transporthilfen wie Rollbretter oder Sackkarren." },
      { label: "Sichtfeld", text: "Achten Sie immer darauf, dass Ihr Laufweg frei von Hindernissen ist." },
    ],
  },
  {
    heading: "Schnellübersicht: Die 5 wichtigsten Regeln",
    items: [
      { label: "", text: "In die Hocke gehen — nie aus dem Rücken heben" },
      { label: "", text: "Last eng am Körper halten" },
      { label: "", text: "Füße bewegen statt Oberkörper drehen" },
      { label: "", text: "Ruckartige Bewegungen vermeiden" },
      { label: "", text: "Bei schweren Gegenständen immer zu zweit oder Sackkarre nutzen" },
    ],
  },
  {
    heading: "Empfohlene Hilfsmittel",
    items: [
      { label: "Sackkarre", text: "Für Kühlschrank, Waschmaschine und schwere Kartons unverzichtbar." },
      { label: "Rollbrett / Möbelroller", text: "Ideal für große Möbelstücke auf glattem Untergrund." },
      { label: "Transportgurte", text: "Verteilen das Gewicht auf Schultern und Hüfte, entlasten so den Rücken deutlich." },
      { label: "Schutzhandschuhe", text: "Verbesserter Grip und Schutz vor Schnittverletzungen." },
      { label: "Rückenstützgurt", text: "Für Personen mit Vorerkrankungen als zusätzliche Absicherung sinnvoll." },
    ],
  },
];

export default function ErgonomiePage() {
  return (
    <GuideLayout
      title="Ergonomie-Leitfaden: Sicher Heben und Tragen"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/ergonomie/",
        description:
          "Präventionsleitfaden für rückenfreundliches Arbeiten beim Umzug. Tipps zum sicheren Heben und Tragen schwerer Möbel.",
      }}
    >
      <div className="space-y-6">

        {/* Section 1 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Präventionsleitfaden: Rückenschonendes Arbeiten</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Um Verletzungen und Überlastungen der Wirbelsäule zu vermeiden, beachten
            Sie beim Möbeltransport folgende Regeln:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Stabilität:</strong> Sorgen Sie für einen festen Stand; die Füße stehen etwa schulterbreit auseinander.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Kraft aus den Beinen:</strong> Gehen Sie beim Anheben in die Hocke und nutzen Sie die Kraft Ihrer Beinmuskulatur. Der Rücken bleibt dabei absolut gerade.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Körpernähe:</strong> Tragen Sie Lasten so nah wie möglich am Schwerpunkt Ihres Körpers.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Rotation vermeiden:</strong> Drehen Sie niemals den Oberkörper unter Last, sondern bewegen Sie immer die Füße mit.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Gleichmaß:</strong> Vermeiden Sie ruckartige Bewegungen beim Anheben und Absetzen.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Teamwork &amp; Technik:</strong> Nutzen Sie für schwere Objekte Transporthilfen wie Rollbretter oder Sackkarren. Sperrige Möbel sollten grundsätzlich von zwei Personen bewegt werden.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Sichtfeld:</strong> Achten Sie immer darauf, dass Ihr Laufweg frei von Hindernissen ist und Ihre Sicht nicht durch das Ladegut eingeschränkt wird.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Schnellübersicht: Die 5 wichtigsten Regeln</h2>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>1</div>
              <span className="text-sm text-[#5A7A8A]">In die Hocke gehen — nie aus dem Rücken heben</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>2</div>
              <span className="text-sm text-[#5A7A8A]">Last eng am Körper halten</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>3</div>
              <span className="text-sm text-[#5A7A8A]">Füße bewegen statt Oberkörper drehen</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>4</div>
              <span className="text-sm text-[#5A7A8A]">Ruckartige Bewegungen vermeiden</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#FF7700" }}>5</div>
              <span className="text-sm text-[#5A7A8A]">Bei schweren Gegenständen immer zu zweit oder Sackkarre nutzen</span>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Empfohlene Hilfsmittel</h2>
          <p className="mb-4 text-sm text-[#5A7A8A] leading-relaxed">
            Folgende Hilfsmittel reduzieren das Verletzungsrisiko erheblich und
            sind bei jedem Umzug empfehlenswert:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Sackkarre:</strong> Für Kühlschrank, Waschmaschine und schwere Kartons unverzichtbar.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Rollbrett / Möbelroller:</strong> Ideal für große Möbelstücke auf glattem Untergrund.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Transportgurte (Schultertragegurte):</strong> Verteilen das Gewicht auf Schultern und Hüfte, entlasten so den Rücken deutlich.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Schutzhandschuhe:</strong> Verbesserter Grip und Schutz vor Schnittverletzungen.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span><strong className="text-[#0D2137]">Rückenstützgurt:</strong> Für Personen mit Vorerkrankungen als zusätzliche Absicherung sinnvoll.</span>
            </li>
          </ul>
        </div>

        {/* Tip box */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong>Hinweis:</strong> Bei chronischen Rückenproblemen oder größeren
          Umzügen lohnt sich die Beauftragung eines professionellen
          Umzugsunternehmens. Nutzen Sie unseren{" "}
          <a href="/rechner/" className="underline font-medium">kostenlosen Rechner</a>, um den Preiskorridor zu
          ermitteln.
        </div>

      </div>
    </GuideLayout>
  );
}

