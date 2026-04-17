import { GuideLayout } from "@/components/GuideLayout";
import type { ReactNode } from "react";
import type { GuideSection } from "@/lib/generateGuidePdf";

export const metadata = {
  title: "Essential-Kit: Checkliste für den ersten Tag | meinumzugsrechner.de",
  description: "Was muss immer griffbereit sein und darf nicht im LKW verschwinden? 8 Kategorien im Überblick.",
};

const IconCreditCard = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const IconSmartphone = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3"/>
  </svg>
);

const IconKey = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);

const IconFile = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const IconDroplet = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const IconCoffee = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const IconWrench = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconSparkles = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.72 12.72.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"/>
  </svg>
);

const items: { category: string; icon: ReactNode; entries: string[] }[] = [
  {
    category: "Identifikation & Finanzen",
    icon: IconCreditCard,
    entries: [
      "Personalausweis (eID-Funktion aktivieren)",
      "Führerschein",
      "Bargeld und Bezahlkarten",
    ],
  },
  {
    category: "Digitale Kommunikation",
    icon: IconSmartphone,
    entries: [
      "Smartphone",
      "Highspeed-Ladekabel",
      "Powerbank (vollständig geladen)",
    ],
  },
  {
    category: "Zugang",
    icon: IconKey,
    entries: [
      "Alle Schlüssel für die alte Wohnung",
      "Alle Schlüssel für die neue Wohnung",
      "Briefkastenschlüssel",
    ],
  },
  {
    category: "Wichtige Unterlagen",
    icon: IconFile,
    entries: [
      "Mietvertrag alte Wohnung",
      "Mietvertrag neue Wohnung",
      "Versicherungspolicen",
      "Umzugsplanung und Kontaktliste",
    ],
  },
  {
    category: "Hygiene & Textilien",
    icon: IconDroplet,
    entries: [
      "Frische Handtücher",
      "Waschset (Seife, Deo, Zahnbürste)",
      "Toilettenpapier",
      "Satz Wechselkleidung",
    ],
  },
  {
    category: "Verpflegung",
    icon: IconCoffee,
    entries: [
      "Ausreichend Wasser (mindestens 1,5 l pro Person)",
      "Gesunde Snacks",
      "Babynahrung falls relevant",
    ],
  },
  {
    category: "Basis-Werkzeug",
    icon: IconWrench,
    entries: [
      "Multifunktionswerkzeug",
      "Schraubendreher-Set",
      "Zange",
      "Cuttermesser (für Kartons)",
    ],
  },
  {
    category: "Sauberkeit",
    icon: IconSparkles,
    entries: [
      "Ökologische Putzmittel (Grundausstattung)",
      "Wischtücher / Mikrofasertücher",
      "Müllbeutel",
    ],
  },
];

const sections: GuideSection[] = [
  {
    heading: "Identifikation & Finanzen",
    items: [
      { label: "", text: "Personalausweis (eID-Funktion aktivieren)", isCheckbox: true },
      { label: "", text: "Führerschein", isCheckbox: true },
      { label: "", text: "Bargeld und Bezahlkarten", isCheckbox: true },
    ],
  },
  {
    heading: "Digitale Kommunikation",
    items: [
      { label: "", text: "Smartphone", isCheckbox: true },
      { label: "", text: "Highspeed-Ladekabel", isCheckbox: true },
      { label: "", text: "Powerbank (vollständig geladen)", isCheckbox: true },
    ],
  },
  {
    heading: "Zugang",
    items: [
      { label: "", text: "Alle Schlüssel für die alte Wohnung", isCheckbox: true },
      { label: "", text: "Alle Schlüssel für die neue Wohnung", isCheckbox: true },
      { label: "", text: "Briefkastenschlüssel", isCheckbox: true },
    ],
  },
  {
    heading: "Wichtige Unterlagen",
    items: [
      { label: "", text: "Mietvertrag alte Wohnung", isCheckbox: true },
      { label: "", text: "Mietvertrag neue Wohnung", isCheckbox: true },
      { label: "", text: "Versicherungspolicen", isCheckbox: true },
      { label: "", text: "Umzugsplanung und Kontaktliste", isCheckbox: true },
    ],
  },
  {
    heading: "Hygiene & Textilien",
    items: [
      { label: "", text: "Frische Handtücher", isCheckbox: true },
      { label: "", text: "Waschset (Seife, Deo, Zahnbürste)", isCheckbox: true },
      { label: "", text: "Toilettenpapier", isCheckbox: true },
      { label: "", text: "Satz Wechselkleidung", isCheckbox: true },
    ],
  },
  {
    heading: "Verpflegung",
    items: [
      { label: "", text: "Ausreichend Wasser (mindestens 1,5 l pro Person)", isCheckbox: true },
      { label: "", text: "Gesunde Snacks", isCheckbox: true },
      { label: "", text: "Babynahrung falls relevant", isCheckbox: true },
    ],
  },
  {
    heading: "Basis-Werkzeug",
    items: [
      { label: "", text: "Multifunktionswerkzeug", isCheckbox: true },
      { label: "", text: "Schraubendreher-Set", isCheckbox: true },
      { label: "", text: "Zange", isCheckbox: true },
      { label: "", text: "Cuttermesser (für Kartons)", isCheckbox: true },
    ],
  },
  {
    heading: "Sauberkeit",
    items: [
      { label: "", text: "Ökologische Putzmittel (Grundausstattung)", isCheckbox: true },
      { label: "", text: "Wischtücher / Mikrofasertücher", isCheckbox: true },
      { label: "", text: "Müllbeutel", isCheckbox: true },
    ],
  },
];

export default function EssentialKitPage() {
  return (
    <GuideLayout
      title="Essential-Kit: Checkliste für den ersten Tag"
      category="checklisten"
      categoryLabel="Checklisten"
      sections={sections}
    >
      <div className="space-y-6">

        <p className="text-sm text-[#5A7A8A] leading-relaxed">
          Diese Gegenstände sollten <strong className="text-[#0D2137]">nicht im LKW verschwinden</strong>,
          sondern jederzeit griffbereit sein — entweder in einer separaten Tasche
          oder im Privatfahrzeug.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((section) => (
            <div
              key={section.category}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <h3 className="flex items-center gap-2 font-bold text-[#0D2137] mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ backgroundColor: "#EBF6FD", color: "#0088CC" }}>
                  {section.icon}
                </span>
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.entries.map((entry) => (
                  <li key={entry}>
                    <label className="flex items-start gap-2 cursor-pointer text-sm text-[#5A7A8A]">
                      <input type="checkbox" className="mt-0.5 flex-shrink-0" style={{ accentColor: "#FF7700" }} />
                      <span>{entry}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tip box */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong>Tipp: Die Survival-Tasche</strong> — Packen Sie diese Tasche am Abend vor dem Umzug. Sie enthält alles, was
          Sie in den ersten 24 Stunden benötigen — unabhängig davon, welche
          Kartons wann ausgepackt werden. Stellen Sie sie sichtbar beiseite und
          weisen Sie alle Helfer darauf hin, dass diese Tasche <em>nicht verladen</em> wird.
        </div>

      </div>
    </GuideLayout>
  );
}
