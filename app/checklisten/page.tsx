import { JsonLd } from "@/components/JsonLd";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const C_TITLE = "Checklisten | meinumzugsrechner.de";
const C_DESC = "Kostenlose Umzugs-Checklisten: Vollständige Umzugscheckliste mit 48 Aufgaben, Countdown, Essential-Kit und mehr.";

export const metadata: Metadata = {
  title: C_TITLE,
  description: C_DESC,
  ...pageCanonical("/checklisten/"),
  openGraph: { title: "Umzugs-Checklisten", description: C_DESC, url: "/checklisten/" },
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#FF7700" }}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#FF7700" }}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#FF7700" }}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const checklists = [
  {
    href: "/checklisten/umzugscheckliste/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#FF7700" }}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Vollständige Umzugscheckliste: 48 Aufgaben in 7 Phasen",
    description:
      "Von der Kündigung bis zur Ummeldung — alle Aufgaben interaktiv abhaken, Fortschritt wird gespeichert.",
    highlight: true,
  },
  {
    href: "/checklisten/umzugs-countdown/",
    icon: <CalendarIcon />,
    title: "Projektplan: Umzugs-Countdown 2026",
    description:
      "5 Phasen von der ersten Planung bis zum Umzugstag — mit allen wichtigen Aufgaben im Überblick.",
    highlight: false,
  },
  {
    href: "/checklisten/essential-kit/",
    icon: <BagIcon />,
    title: "Essential-Kit: Checkliste für den ersten Tag",
    description:
      "Was muss immer griffbereit sein und darf nicht im LKW verschwinden? 8 Kategorien im Überblick.",
    highlight: false,
  },
  {
    href: "/checklisten/standort-vorbereitung/",
    icon: <HomeIcon />,
    title: "Site-Management: Standort & Catering",
    description:
      "Freie Zufahrt, sichere Lagerung und Verpflegung für Ihr Helfer-Team — operative Schritte vor Ort.",
    highlight: false,
  },
];

export default function ChecklistenPage() {
  return (
    <>
      <JsonLd
        id="ld-checklisten-hub"
        data={webPageOnlySchema({ path: "/checklisten/", title: C_TITLE, description: C_DESC })}
      />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">Checklisten</h1>
          <p className="mt-3 text-[#5A7A8A]">
            Druckfertige Checklisten für jeden Schritt Ihres Umzugs — kostenlos und ohne Anmeldung.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {checklists.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 ${c.highlight ? "border-[#FF7700] bg-[#FFF8F3]" : "border-slate-100 bg-white"}`}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: "#FFF3E8" }}>
                {c.icon}
              </div>
              <h2 className="font-bold text-[#0D2137] group-hover:text-[#FF7700] transition-colors">
                {c.title}
              </h2>
              <p className="text-sm text-[#5A7A8A] flex-1">{c.description}</p>
              <span className="text-sm font-medium" style={{ color: "#FF7700" }}>
                Zur Checkliste →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

