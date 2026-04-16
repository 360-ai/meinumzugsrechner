import Link from "next/link";

export const metadata = {
  title: "Ratgeber | meinumzugsrechner.de",
  description: "Experten-Ratgeber rund um Ihren Umzug: Ergonomie, Verpacken und moderne Umzugslogistik.",
};

const guides = [
  {
    href: "/ratgeber/ergonomie",
    icon: "💪",
    title: "Ergonomie-Leitfaden: Sicher Heben und Tragen",
    description:
      "Rückenfreundliche Techniken, damit Ihr Umzug ohne Verletzungen gelingt. Schritt für Schritt erklärt.",
  },
  {
    href: "/ratgeber/profi-guide-verpacken",
    icon: "📦",
    title: "Profi-Guide: Systematisches Verpacken 2026",
    description:
      "Die richtige Packtechnik für Glas, Möbel und Dokumente — damit nichts zu Bruch geht.",
  },
  {
    href: "/ratgeber/moderne-umzugslogistik",
    icon: "🚛",
    title: "Leitbild: Moderne Umzugslogistik 2026",
    description:
      "So planen Sie Ihren Umzug wie ein Profi — effizient, nachhaltig und stressfrei.",
  },
];

export default function RatgeberPage() {
  return (
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
            <span className="text-4xl">{g.icon}</span>
            <h2 className="font-bold text-[#0D2137] group-hover:text-[#0088CC] transition-colors">
              {g.title}
            </h2>
            <p className="text-sm text-[#5A7A8A] flex-1">{g.description}</p>
            <span className="text-sm font-medium text-[#0088CC]">Lesen →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
