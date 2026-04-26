import { JsonLd } from "@/components/JsonLd";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const R_TITLE = "Ratgeber | meinumzugsrechner.de";
const R_DESC = "Experten-Ratgeber rund um Ihren Umzug: Ergonomie, Verpacken, Haustiere, Selbst vs. Profi und mehr.";

export const metadata: Metadata = {
  title: R_TITLE,
  description: R_DESC,
  ...pageCanonical("/ratgeber/"),
  openGraph: { title: "Ratgeber zum Umzug", description: R_DESC, url: "/ratgeber/" },
};

const LiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v6l-3 3" />
    <path d="M9 15l3-3 3 3" />
    <path d="M6 9h2" />
    <path d="M16 9h2" />
    <path d="M9 18h6" />
    <path d="M12 18v3" />
  </svg>
);

const PackBoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
    <line x1="8" y1="4.5" x2="16" y2="9" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const EuroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 8.5a4 4 0 1 0 0 7" />
    <line x1="7" y1="11" x2="13" y2="11" />
    <line x1="7" y1="13" x2="13" y2="13" />
  </svg>
);

const guides = [
  {
    href: "/ratgeber/entruempelung/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
    title: "Entrümpelung vor dem Umzug: Kosten, Tipps & wann sich ein Profi lohnt",
    description:
      "Was kostet eine Entrümpelung, was ist Wertanrechnung und wie viel kann man durch Eigenleistung sparen — vor dem Umzug richtig aussortieren.",
  },
  {
    href: "/ratgeber/ergonomie/",
    icon: <LiftIcon />,
    title: "Ergonomie-Leitfaden: Sicher Heben und Tragen",
    description:
      "Rückenfreundliche Techniken, damit Ihr Umzug ohne Verletzungen gelingt. Schritt für Schritt erklärt.",
  },
  {
    href: "/ratgeber/firmenumzug/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Firmenumzug: Checkliste für Büro & Gewerbe",
    description:
      "Planungsvorlauf, Mietvertrag kündigen, IT sichern, Mitarbeiter und Kunden informieren — alles Schritt für Schritt.",
  },
  {
    href: "/ratgeber/halteverbot/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <circle cx="12" cy="12" r="10"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    title: "Halteverbot für den Umzug beantragen",
    description:
      "Wie Sie eine temporäre Halteverbotszone beantragen: Wo, wie früh, was es kostet — und was passiert, wenn jemand trotzdem parkt.",
  },
  {
    href: "/ratgeber/moderne-umzugslogistik/",
    icon: <TruckIcon />,
    title: "Leitbild: Moderne Umzugslogistik 2026",
    description:
      "So planen Sie Ihren Umzug wie ein Profi — effizient, nachhaltig und stressfrei.",
  },
  {
    href: "/ratgeber/lkw-mieten/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
        <path d="M4 8h8" />
        <path d="M4 11h5" />
      </svg>
    ),
    title: "LKW mieten: Führerschein, Größe & Kosten im Überblick",
    description:
      "Welchen Führerschein braucht man, wie viel Laderaum reicht für Ihre Wohnung — und worauf Sie bei der Buchung achten sollten.",
  },
  {
    href: "/ratgeber/moebel-einlagern/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="17" x2="22" y2="17" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="7" y1="8" x2="17" y2="8" />
        <line x1="7" y1="12" x2="13" y2="12" />
      </svg>
    ),
    title: "Möbel einlagern: Self-Storage, Kosten & worauf es ankommt",
    description:
      "Wann ein Lagerraum sinnvoll ist, was Self-Storage kostet und wie man Möbel richtig für die Zwischenlagerung vorbereitet.",
  },
  {
    href: "/ratgeber/profi-guide-verpacken/",
    icon: <PackBoxIcon />,
    title: "Profi-Guide: Systematisches Verpacken 2026",
    description:
      "Die richtige Packtechnik für Glas, Möbel und Dokumente — damit nichts zu Bruch geht.",
  },
  {
    href: "/ratgeber/selbst-vs-profi/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M6 8h6l-6 8h6"/>
        <path d="M18 8h-6l6 8h-6"/>
      </svg>
    ),
    title: "Selbst umziehen oder Umzugsfirma? Ehrlicher Vergleich",
    description:
      "Was kostet wirklich mehr — Eigenregie oder Profi? Versteckte Kosten, Risiken und wann welche Option sinnvoll ist.",
  },
  {
    href: "/ratgeber/seniorenumzug/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <path d="M9 22V12h6v10"/>
        <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Seniorenumzug: Stressfrei umziehen im Alter",
    description:
      "Barrierefreiheit, Aussortieren, emotionale Vorbereitung — Tipps für Betroffene und Angehörige, die beim Umzug unterstützen.",
  },
  {
    href: "/ratgeber/sonderurlaub/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M9 16l2 2 4-4"/>
      </svg>
    ),
    title: "Sonderurlaub beim Umzug: Wer hat Anspruch?",
    description:
      "Gesetzlicher Anspruch, Tarifverträge, wie man den freien Tag beantragt — und was gilt, wenn keine Regelung existiert.",
  },
  {
    href: "/ratgeber/sperrgut/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="12" x2="10" y2="12" />
      </svg>
    ),
    title: "Sperrgut: Was gilt als sperrig & wie transportiert man es?",
    description:
      "Kühlschrank, Waschmaschine, Klavier, Wasserbett — besondere Regeln für den Transport von Sperrgutstücken erklärt.",
  },
  {
    href: "/ratgeber/steuerspartipps/",
    icon: <EuroIcon />,
    title: "Steuern sparen beim Umzug",
    description:
      "§35a EStG und Umzugskostenpauschale: So holen Sie sich bis zu 4.000 € vom Finanzamt zurück.",
  },
  {
    href: "/ratgeber/studentenumzug/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "Studentenumzug: Günstig & stressfrei ins WG-Zimmer",
    description:
      "Kosten senken, BAföG-Adressänderung nicht vergessen, Erstausstattung realistisch planen — ohne teure Fehler beim ersten Umzug.",
  },
  {
    href: "/ratgeber/teilumzug/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
        <line x1="8" y1="9" x2="12" y2="9"/>
      </svg>
    ),
    title: "Teilumzug: Wann er sich lohnt & wie man ihn plant",
    description:
      "WG-Auszug, einzelne Möbel, Beiladung — was ein Teilumzug ist, wann welche Transportoption sinnvoll ist und wie man Kosten spart.",
  },
  {
    href: "/ratgeber/ummelden/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Ummelden nach dem Umzug: Fristen & Checkliste",
    description:
      "Wann muss man sich ummelden, was ist mitzubringen — und welche Behörden informiert man selbst? Alles auf einen Blick.",
  },
  {
    href: "/ratgeber/haustiere/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703.729 1.997 3.5 2 2.323.003 3-1.5 3-2.5V5.172z"/>
        <path d="M14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 6.006 4 7-.08.703-.729 1.997-3.5 2-2.323.003-3-1.5-3-2.5V5.172z"/>
        <path d="M8 14v.5C8 17.5 11.5 21 12 21s4-3.5 4-6.5V14"/>
        <path d="M12 14c-2.5 0-6-2-6-6"/>
        <path d="M12 14c2.5 0 6-2 6-6"/>
      </svg>
    ),
    title: "Umzug mit Haustieren: Katze, Hund & Co. stressfrei umziehen",
    description:
      "Was Tierbesitzer vor, während und nach dem Umzug beachten sollten — mit konkreten Tipps je nach Tierart.",
  },
  {
    href: "/ratgeber/umzugshelfer/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Umzugshelfer organisieren: Freunde, Studenten oder Profis?",
    description:
      "Was kosten Umzugshelfer, was gilt bei Mindestlohn und Haftung — und wie Sie den Umzugstag mit der richtigen Mannschaft reibungslos planen.",
  },
  {
    href: "/ratgeber/wohnungsaufloesung/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Wohnungsauflösung: Todesfall, Pflegeheim & Umzug",
    description:
      "Sonderkündigungsrecht § 580 BGB, Vollmacht bei Demenz, Sozialamt, Kosten und Steuerabzug — rechtlich sicher durch einen schwierigen Schritt.",
  },
];

export default function RatgeberPage() {
  return (
    <>
      <JsonLd
        id="ld-ratgeber-hub"
        data={webPageOnlySchema({ path: "/ratgeber/", title: R_TITLE, description: R_DESC })}
      />
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">Ratgeber</h1>
        <p className="mt-3 text-[#5A7A8A]">
          Fundiertes Wissen für einen reibungslosen Umzug — kostenlos und ohne Anmeldung.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD" }}>
              {g.icon}
            </div>
            <h2 className="font-bold text-[#0D2137] group-hover:text-[#0088CC] transition-colors">
              {g.title}
            </h2>
            <p className="text-sm text-[#5A7A8A] flex-1">{g.description}</p>
            <span className="text-sm font-medium text-[#0088CC]">Lesen →</span>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

