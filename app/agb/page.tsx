import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | meinumzugsrechner.com",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung des Umzugskosten-Rechners und zugehöriger Dienste.",
  ...pageCanonical("/agb/"),
  robots: { index: true, follow: true },
};

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-[#FAFCFE] p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#0D2137" }}
        >
          {num}
        </span>
        <h2 className="text-base font-bold text-[#0D2137]">{title}</h2>
      </div>
      <div className="text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function AgbPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <h1 className="mb-1 text-3xl font-bold text-[#0D2137]">Allgemeine Geschäftsbedingungen</h1>
      <p className="mb-8 text-sm text-slate-400">Stand: April 2026 · Entwurf, juristische Prüfung empfohlen.</p>

      <div className="space-y-4">
        <Section num="1" title="Leistungsgegenstand">
          <p>
            meinumzugsrechner.com bietet eine <strong className="text-[#0D2137]">kostenlose, unverbindliche
            Kostenschätzung</strong> (Preiskorridor) auf Basis Ihrer Angaben und einer internen Preismatrix.
            Es wird kein Umzug und kein Festpreis angeboten.
          </p>
        </Section>

        <Section num="2" title="Keine Datenweitergabe an Umzugsfirmen">
          <p>
            Eine Weitergabe Ihrer Umzugsdaten an Umzugsunternehmen zum Zweck der Kontaktaufnahme erfolgt
            nicht automatisch. Werbliche Partnerlinks können getrennt von Ihren Umzugseingaben angezeigt
            werden.
          </p>
        </Section>

        <Section num="3" title="Haftungsausschluss für Schätzungen">
          <p>
            Die Berechnung stellt einen <strong className="text-[#0D2137]">Richtwert</strong> dar. Tatsächliche
            Marktpreise können abweichen (z. B. Saison, Verfügbarkeit, Zusatzleistungen vor Ort). Für Schäden
            aus der Nutzung der Schätzung haften wir nur bei Vorsatz und grober Fahrlässigkeit; im Übrigen
            nach gesetzlichen Vorschriften.
          </p>
        </Section>

        <Section num="4" title="Kostenlosigkeit / Finanzierung">
          <p>
            Die Nutzung des Rechners ist für Sie kostenlos. Die Website finanziert sich durch
            Werbeeinblendungen (Google AdSense) und Affiliate-Links (Amazon Partnerprogramm). Durch die
            Nutzung entstehen Ihnen keine Kosten.
          </p>
        </Section>

        <Section num="5" title="Nutzungsbedingungen">
          <p>
            Die Nutzung des Rechners ist ausschließlich zu privaten, nicht-kommerziellen Zwecken gestattet.
            Eine automatisierte Abfrage (Scraping, Bots) sowie ein Weiterverkauf der Ergebnisse sind
            untersagt.
          </p>
        </Section>

        <Section num="6" title="Affiliate / Werbung">
          <p>
            Partnerlinks können Provisionen generieren. Die Auswahl erfolgt unabhängig von Ihren
            Umzugseingaben; es liegt kein Vermittlungsvertrag mit Festpreischarakter vor.
          </p>
        </Section>
      </div>
    </div>
  );
}
