import { GuideLayout } from "@/components/GuideLayout";
import type { GuideSection } from "@/lib/generateGuidePdf";

export const metadata = {
  title: "Leitbild: Moderne Umzugslogistik 2026 | meinumzugsrechner.de",
  description: "So planen Sie Ihren Umzug wie ein Profi — effizient, nachhaltig und stressfrei.",
};

const sections: GuideSection[] = [
  {
    heading: "Vision 2026: Intelligente Logistiklösungen",
    items: [
      { label: "", text: "Wir definieren Umzug neu: Effizienz trifft auf maximale Sorgfalt. Unser Ziel ist eine nahtlose Transition in Ihr neues Zuhause durch technologisch gestützte Planung und erstklassigen Service." },
    ],
  },
  {
    heading: "Die 5 Säulen moderner Umzugslogistik",
    items: [
      { label: "1. Digitale Planung", text: "Moderne Umzüge beginnen nicht am Umzugstag, sondern Wochen vorher am Bildschirm. Tools wie digitale Möbelplaner und Online-Kostenrechner ermöglichen präzise Vorbereitung." },
      { label: "2. Ressourceneffizienz", text: "Das richtige Fahrzeug für das richtige Volumen. Richtwert: 1 m³ Ladevolumen pro 4–6 m² Wohnfläche." },
      { label: "3. Nachhaltigkeit", text: "Mietboxen aus recyceltem Kunststoff, Textilien als Polstermaterial, Möbel verkaufen statt entsorgen." },
      { label: "4. Transparente Preisgestaltung", text: "Seriöse Anbieter geben Preise pro Stunde oder als Festpreis an. Nutzen Sie unseren Rechner für einen realistischen Vergleichswert." },
      { label: "5. Standort-Management", text: "Freie Zufahrt, gesicherte Parkflächen und koordinierte Schlüsselübergaben reduzieren Wartezeiten und Kosten." },
    ],
  },
  {
    heading: "Checkliste: Standort-Vorbereitung",
    items: [
      { label: "", text: "Halteverbotszone vor altem und neuem Objekt frühzeitig beantragen" },
      { label: "", text: "Aufzugszeiten mit Hausverwaltung abstimmen" },
      { label: "", text: "Nachbarn über Lärm und Beeinträchtigungen informieren" },
      { label: "", text: "Freie Gehwege und Flure sicherstellen" },
      { label: "", text: "Schlüsselübergabe beider Wohnungen koordinieren" },
    ],
  },
  {
    heading: "Fazit",
    items: [
      { label: "", text: "Moderner Umzug ist keine Frage des Budgets, sondern der Vorbereitung. Mit dem richtigen Werkzeug, einer klaren Planung und einem seriösen Partner gelingt der Wohnungswechsel auch ohne professionelle Umzugsfirma." },
    ],
  },
];

export default function ModerneUmzugslogistikPage() {
  return (
    <GuideLayout
      title="Leitbild: Moderne Umzugslogistik 2026"
      category="ratgeber"
      categoryLabel="Ratgeber"
      sections={sections}
    >
      <div className="space-y-6">

        {/* Intro */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Vision 2026: Intelligente Logistiklösungen</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Wir definieren Umzug neu: Effizienz trifft auf maximale Sorgfalt. Unser
            Ziel ist eine nahtlose Transition in Ihr neues Zuhause durch technologisch
            gestützte Planung und erstklassigen Service.
          </p>
        </div>

        {/* Die 5 Säulen */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Die 5 Säulen moderner Umzugslogistik</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 rounded-full items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#0088CC" }}>1</div>
                <h3 className="font-bold text-[#0D2137] text-sm">Digitale Planung</h3>
              </div>
              <p className="text-xs text-[#5A7A8A]">
                Moderne Umzüge beginnen nicht am Umzugstag, sondern Wochen vorher am
                Bildschirm. Tools wie digitale Möbelplaner, Online-Kostenrechner und
                Kalender-Apps ermöglichen eine präzise Vorbereitung ohne
                Vor-Ort-Termine.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 rounded-full items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#0088CC" }}>2</div>
                <h3 className="font-bold text-[#0D2137] text-sm">Ressourceneffizienz</h3>
              </div>
              <p className="text-xs text-[#5A7A8A]">
                Professionelle Logistik bedeutet: Das richtige Fahrzeug für das richtige
                Volumen. Zu große LKW verschwenden Kraftstoff und Kapazität; zu kleine
                erfordern mehrere Fahrten. Ein guter Richtwert: 1 m³ Ladevolumen pro 4–6
                m² Wohnfläche.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 rounded-full items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#0088CC" }}>3</div>
                <h3 className="font-bold text-[#0D2137] text-sm">Nachhaltigkeit</h3>
              </div>
              <p className="text-xs text-[#5A7A8A]">
                Mietboxen aus recyceltem Kunststoff statt Einwegkartons, Textilien als
                Polstermaterial, Möbel verkaufen oder spenden statt entsorgen,
                Lieferanten mit Elektrofahrzeugen bevorzugen.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 rounded-full items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#0088CC" }}>4</div>
                <h3 className="font-bold text-[#0D2137] text-sm">Transparente Preisgestaltung</h3>
              </div>
              <p className="text-xs text-[#5A7A8A]">
                Intransparente Kostenstrukturen sind einer der häufigsten
                Streitpunkte bei Umzügen. Seriöse Anbieter geben Preise pro Stunde oder
                als Festpreis an, aufgeschlüsselt nach Leistungen.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 rounded-full items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#0088CC" }}>5</div>
                <h3 className="font-bold text-[#0D2137] text-sm">Standort-Management</h3>
              </div>
              <p className="text-xs text-[#5A7A8A]">
                Ein oft unterschätzter Faktor: die Vorbereitung beider Standorte. Freie
                Zufahrt, gesicherte Parkflächen und koordinierte Schlüsselübergaben
                reduzieren Wartezeiten und damit Kosten erheblich.
              </p>
            </div>
          </div>
        </div>

        {/* Checkliste Standort */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Checkliste: Standort-Vorbereitung</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Halteverbotszone vor altem und neuem Objekt frühzeitig beantragen</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Aufzugszeiten mit Hausverwaltung abstimmen</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Nachbarn über Lärm und Beeinträchtigungen informieren</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Freie Gehwege und Flure sicherstellen</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0088CC] flex-shrink-0" />
              <span>Schlüsselübergabe beider Wohnungen koordinieren</span>
            </li>
          </ul>
        </div>

        {/* Fazit */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #0088CC" }}>
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">Fazit</h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Moderner Umzug ist keine Frage des Budgets, sondern der Vorbereitung.
            Mit dem richtigen Werkzeug, einer klaren Planung und einem seriösen
            Partner gelingt der Wohnungswechsel auch ohne professionelle
            Umzugsfirma — oder zumindest deutlich günstiger als ohne Vorbereitung.
          </p>
        </div>

        {/* Tip box */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          Noch unsicher über die Kosten?{" "}
          <a href="/rechner" className="underline font-medium">Berechnen Sie jetzt Ihren Preiskorridor</a> — kostenlos
          und ohne Datenweitergabe.
        </div>

      </div>
    </GuideLayout>
  );
}
