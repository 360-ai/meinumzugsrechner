import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Moderne Umzugslogistik: besser planen statt hektisch reagieren | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie zeitgemäße Umzugsplanung funktioniert: Ressourcen passend einsetzen, Wege vorbereiten und Kosten durch gute Abläufe beherrschbarer machen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/ratgeber/moderne-umzugslogistik/"),
  openGraph: {
    title: "Moderne Umzugslogistik verständlich erklärt",
    description: PAGE_DESC,
    url: "/ratgeber/moderne-umzugslogistik/",
    type: "article",
  },
};

const sections: GuideSection[] = [
  {
    heading: "Worum es bei guter Umzugslogistik heute geht",
    items: [
      { label: "", text: "Ein gut geplanter Umzug ist vor allem ein Koordinationsproblem: Volumen, Zeitfenster, Zugang und Helfer müssen zusammenpassen." },
    ],
  },
  {
    heading: "Vier Hebel, die den Ablauf spürbar verbessern",
    items: [
      { label: "1. Früh strukturieren", text: "Nicht erst am Umzugstag entscheiden, sondern Möbel, Kartons, Wege und Zuständigkeiten vorher festlegen." },
      { label: "2. Fahrzeug passend wählen", text: "Zu klein bedeutet Zusatzfahrten, zu groß bedeutet unnötige Kosten und manchmal schlechtere Zufahrt." },
      { label: "3. Wege entschärfen", text: "Parken, Aufzug, Treppenhaus und Laufwege wirken stärker auf Zeit und Preis als viele erwarten." },
      { label: "4. Übergaben sauber timen", text: "Schlüssel, Hausverwaltung, Helfer und Ladefenster sollten möglichst nicht gegeneinander arbeiten." },
    ],
  },
  {
    heading: "Standortvorbereitung",
    items: [
      { label: "", text: "Park- und Ladeflächen früh prüfen" },
      { label: "", text: "Aufzugsnutzung und Hausregeln vorher klären" },
      { label: "", text: "Tragewege freihalten und Stolperstellen minimieren" },
      { label: "", text: "Schlüssel- und Zeitfenster nicht zu knapp takten" },
    ],
  },
  {
    heading: "Fazit",
    items: [
      { label: "", text: "Moderne Umzugslogistik ist weniger eine Frage großer Theorie als guter Vorbereitung. Wer die Engstellen vorher erkennt, spart am Ende meist Zeit, Nerven und oft auch Geld." },
    ],
  },
];

export default function ModerneUmzugslogistikPage() {
  return (
    <GuideLayout
      title="Moderne Umzugslogistik verständlich erklärt"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
      articleSeo={{
        path: "/ratgeber/moderne-umzugslogistik/",
        description: PAGE_DESC,
      }}
    >
      <div className="space-y-6">
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Weniger Improvisation, mehr Ablaufklarheit</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Viele Umzüge scheitern nicht an fehlender Motivation, sondern an schlecht vorbereiteten
            Übergängen: zu kleines Fahrzeug, blockierte Zufahrt, unklare Helferrollen oder zu knapp
            gesetzte Zeitfenster. Moderne Umzugslogistik bedeutet deshalb vor allem, diese Stellen
            früh sichtbar zu machen.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Vier Hebel mit großem Effekt</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                n: "1",
                title: "Früh strukturieren",
                text: "Inventar, Kartonbedarf, Reihenfolge und Helferrollen sollten vor dem Umzugstag geklärt sein. Dadurch sinkt das Chaos deutlich.",
              },
              {
                n: "2",
                title: "Fahrzeug passend wählen",
                text: "Die richtige Größe spart entweder Fahrten oder unnötige Miet- und Betriebskosten. Zu groß ist nicht automatisch besser.",
              },
              {
                n: "3",
                title: "Wege vorbereiten",
                text: "Treppenhaus, Aufzug, Parken und Laufwege bestimmen oft den echten Aufwand stärker als die reine Distanz zwischen den Adressen.",
              },
              {
                n: "4",
                title: "Übergaben sauber koordinieren",
                text: "Schlüssel, Hausverwaltung, Helferankunft und Ladezeiten sollten zusammenpassen, damit kein Leerlauf entsteht.",
              },
            ].map((item) => (
              <div key={item.n} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "#0088CC" }}
                  >
                    {item.n}
                  </div>
                  <h3 className="text-sm font-bold text-[#0D2137]">{item.title}</h3>
                </div>
                <p className="text-sm text-[#5A7A8A]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Standortvorbereitung in der Praxis</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>Prüfen Sie früh, wo realistisch geladen und entladen werden kann.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>Klären Sie Hausregeln, Aufzugszeiten und sensible Flächen vorher ab.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>Halten Sie Laufwege frei und planen Sie Engstellen nicht nur auf dem Papier.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>Setzen Sie Übergaben und Einzugsfenster mit etwas Puffer statt auf die Minute.</span>
            </li>
          </ul>
        </div>

        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Fazit</h2>
          <p className="text-sm leading-relaxed text-[#5A7A8A]">
            Gute Umzugslogistik heißt nicht, alles maximal groß oder maximal professionell zu
            machen. Entscheidend ist, Engpässe rechtzeitig zu erkennen und Aufwand realistisch zu
            verteilen. Genau dabei helfen Rechner, Checklisten und eine saubere Vorbereitung.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          Noch unsicher beim Aufwand?{" "}
          <a href="/rechner/" className="font-medium underline">
            Berechnen Sie jetzt Ihren Preisrahmen
          </a>{" "}
          und prüfen Sie danach Fahrzeug, Material und Ablauf gezielter.
        </div>
      </div>
    </GuideLayout>
  );
}
