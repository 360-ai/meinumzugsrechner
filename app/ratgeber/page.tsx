import { JsonLd } from "@/components/JsonLd";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const R_TITLE = "Ratgeber | meinumzugsrechner.de";
const R_DESC = "Experten-Ratgeber rund um Ihren Umzug: Ergonomie, Verpacken und moderne Umzugslogistik.";

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

const guides = [
  {
    href: "/ratgeber/ergonomie/",
    icon: <LiftIcon />,
    title: "Ergonomie-Leitfaden: Sicher Heben und Tragen",
    description:
      "Rückenfreundliche Techniken, damit Ihr Umzug ohne Verletzungen gelingt. Schritt für Schritt erklärt.",
  },
  {
    href: "/ratgeber/profi-guide-verpacken/",
    icon: <PackBoxIcon />,
    title: "Profi-Guide: Systematisches Verpacken 2026",
    description:
      "Die richtige Packtechnik für Glas, Möbel und Dokumente — damit nichts zu Bruch geht.",
  },
  {
    href: "/ratgeber/moderne-umzugslogistik/",
    icon: <TruckIcon />,
    title: "Leitbild: Moderne Umzugslogistik 2026",
    description:
      "So planen Sie Ihren Umzug wie ein Profi — effizient, nachhaltig und stressfrei.",
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

      <div className="grid gap-6 sm:grid-cols-3">
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
