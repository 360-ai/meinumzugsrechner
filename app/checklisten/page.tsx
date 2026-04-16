import Link from "next/link";

export const metadata = {
  title: "Checklisten | meinumzugsrechner.de",
  description: "Kostenlose Umzugs-Checklisten: Countdown, Essential-Kit und Standort-Vorbereitung.",
};

const checklists = [
  {
    href: "/checklisten/umzugs-countdown",
    icon: "📅",
    title: "Projektplan: Umzugs-Countdown 2026",
    description:
      "5 Phasen von der ersten Planung bis zum Umzugstag — mit allen wichtigen Aufgaben im Überblick.",
  },
  {
    href: "/checklisten/essential-kit",
    icon: "🎒",
    title: "Essential-Kit: Checkliste für den ersten Tag",
    description:
      "Was muss immer griffbereit sein und darf nicht im LKW verschwinden? 8 Kategorien im Überblick.",
  },
  {
    href: "/checklisten/standort-vorbereitung",
    icon: "🏠",
    title: "Site-Management: Standort & Catering",
    description:
      "Freie Zufahrt, sichere Lagerung und Verpflegung für Ihr Helfer-Team — operative Schritte vor Ort.",
  },
];

export default function ChecklistenPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">Checklisten</h1>
        <p className="mt-3 text-[#5A7A8A]">
          Druckfertige Checklisten für jeden Schritt Ihres Umzugs — kostenlos und ohne Anmeldung.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {checklists.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
          >
            <span className="text-4xl">{c.icon}</span>
            <h2
              className="font-bold text-[#0D2137] group-hover:transition-colors"
              style={{ color: "#0D2137" }}
            >
              <span className="group-hover:text-[#FF7700] transition-colors">{c.title}</span>
            </h2>
            <p className="text-sm text-[#5A7A8A] flex-1">{c.description}</p>
            <span className="text-sm font-medium" style={{ color: "#FF7700" }}>
              Zur Checkliste →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
