import { GuideLayout } from "@/components/GuideLayout";

export const metadata = {
  title: "Essential-Kit: Checkliste für den ersten Tag | meinumzugsrechner.de",
  description: "Was muss immer griffbereit sein und darf nicht im LKW verschwinden? 8 Kategorien im Überblick.",
};

const items = [
  {
    category: "Identifikation & Finanzen",
    icon: "💳",
    entries: [
      "Personalausweis (eID-Funktion aktivieren)",
      "Führerschein",
      "Bargeld und Bezahlkarten",
    ],
  },
  {
    category: "Digitale Kommunikation",
    icon: "📱",
    entries: [
      "Smartphone",
      "Highspeed-Ladekabel",
      "Powerbank (vollständig geladen)",
    ],
  },
  {
    category: "Zugang",
    icon: "🔑",
    entries: [
      "Alle Schlüssel für die alte Wohnung",
      "Alle Schlüssel für die neue Wohnung",
      "Briefkastenschlüssel",
    ],
  },
  {
    category: "Wichtige Unterlagen",
    icon: "📄",
    entries: [
      "Mietvertrag alte Wohnung",
      "Mietvertrag neue Wohnung",
      "Versicherungspolicen",
      "Umzugsplanung und Kontaktliste",
    ],
  },
  {
    category: "Hygiene & Textilien",
    icon: "🚿",
    entries: [
      "Frische Handtücher",
      "Waschset (Seife, Deo, Zahnbürste)",
      "Toilettenpapier",
      "Satz Wechselkleidung",
    ],
  },
  {
    category: "Verpflegung",
    icon: "🥤",
    entries: [
      "Ausreichend Wasser (mindestens 1,5 l pro Person)",
      "Gesunde Snacks",
      "Babynahrung falls relevant",
    ],
  },
  {
    category: "Basis-Werkzeug",
    icon: "🔧",
    entries: [
      "Multifunktionswerkzeug",
      "Schraubendreher-Set",
      "Zange",
      "Cuttermesser (für Kartons)",
    ],
  },
  {
    category: "Sauberkeit",
    icon: "🧹",
    entries: [
      "Ökologische Putzmittel (Grundausstattung)",
      "Wischtücher / Mikrofasertücher",
      "Müllbeutel",
    ],
  },
];

export default function EssentialKitPage() {
  return (
    <GuideLayout
      title="Essential-Kit: Checkliste für den ersten Tag"
      category="checklisten"
      categoryLabel="Checklisten"
    >
      <p>
        Diese Gegenstände sollten <strong>nicht im LKW verschwinden</strong>,
        sondern jederzeit griffbereit sein — entweder in einer separaten Tasche
        oder im Privatfahrzeug.
      </p>

      <div className="not-prose space-y-6 mt-6">
        {items.map((section) => (
          <div
            key={section.category}
            className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <h3 className="flex items-center gap-2 font-bold text-[#0D2137] mb-3">
              <span className="text-xl">{section.icon}</span>
              {section.category}
            </h3>
            <ul className="space-y-2">
              {section.entries.map((entry) => (
                <li key={entry}>
                  <label className="flex items-start gap-2 cursor-pointer text-sm text-[#5A7A8A]">
                    <input type="checkbox" className="mt-0.5 flex-shrink-0" />
                    <span>{entry}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2>Tipp: Die Survival-Tasche</h2>
        <p>
          Packen Sie diese Tasche am Abend vor dem Umzug. Sie enthält alles, was
          Sie in den ersten 24 Stunden benötigen — unabhängig davon, welche
          Kartons wann ausgepackt werden. Stellen Sie sie sichtbar beiseite und
          weisen Sie alle Helfer darauf hin, dass diese Tasche <em>nicht verladen</em> wird.
        </p>
      </div>
    </GuideLayout>
  );
}
