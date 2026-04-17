import { JsonLd } from "@/components/JsonLd";
import { webPageOnlySchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const MT_TITLE = "Materialtipps für deinen Umzug | meinumzugsrechner.de";
const MT_DESC =
  "Empfohlenes Umzugsmaterial bei Amazon — von Kartons über Polstermaterial bis zum Transportwerkzeug.";

export const metadata: Metadata = {
  title: MT_TITLE,
  description: MT_DESC,
  ...pageCanonical("/materialtipps/"),
  openGraph: {
    title: "Materialtipps für deinen Umzug",
    description: MT_DESC,
    url: "/materialtipps/",
  },
};

const categories = [
  {
    label: "Verpackung",
    icon: <BoxIcon />,
    color: "#0088CC",
    products: [
      {
        name: "Umzugskartons (10er-Set, stabil)",
        description: "Doppelwellige Kartons mit Grifflöchern, stapelbar bis 30 kg. Standard für Haushaltsumzüge.",
        tag: "Bestseller",
        href: "#",
      },
      {
        name: "Einschlagpapier (Bögen, 100 Stück)",
        description: "Säurefreies Packpapier für Glas, Porzellan und Keramik. Besser als Zeitungspapier.",
        tag: "Empfohlen",
        href: "#",
      },
    ],
  },
  {
    label: "Schutz",
    icon: <ShieldIcon />,
    color: "#FF7700",
    products: [
      {
        name: "Möbelschutzdecken (4er-Set)",
        description: "Gepolsterte Decken für Holzmöbel, Türfronten und empfindliche Oberflächen.",
        tag: "Top-Qualität",
        href: "#",
      },
      {
        name: "Stretchfolie / Stretchband (450 m)",
        description: "Hält Schubladen geschlossen, bündelt Stangen und schützt Polstermöbel.",
        tag: "Vielseitig",
        href: "#",
      },
    ],
  },
  {
    label: "Werkzeug & Transport",
    icon: <WrenchIcon />,
    color: "#0D2137",
    products: [
      {
        name: "Transportgurte / Schultertragegurte",
        description: "Verteilen das Gewicht auf Schultern und Hüfte. Unverzichtbar für schwere Möbel.",
        tag: "Rückenschonend",
        href: "#",
      },
      {
        name: "Möbelroller / Rollbrett (4er-Set)",
        description: "Für glatten Untergrund. Bewegen Sie Kühlschrank oder Waschmaschine alleine.",
        tag: "Zeitsparer",
        href: "#",
      },
    ],
  },
];

export default function MaterialtippsPage() {
  return (
    <>
      <JsonLd
        id="ld-materialtipps"
        data={webPageOnlySchema({
          path: "/materialtipps/",
          title: MT_TITLE,
          description: MT_DESC,
        })}
      />
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">
          Materialtipps für deinen Umzug
        </h1>
        <p className="mt-3 text-[#5A7A8A]">
          Empfohlenes Material für einen reibungslosen Umzug — kuratiert und verlinkt bei Amazon.
        </p>
      </div>

      {/* Affiliate disclaimer */}
      <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
        <strong>Hinweis:</strong> Diese Seite enthält Affiliate-Links zu Amazon.
        Beim Kauf über unsere Links erhalten wir eine kleine Provision — für Sie
        entstehen keine Mehrkosten. Die Empfehlungen basieren auf Qualität und
        Preis-Leistungs-Verhältnis, nicht auf der Provisionshöhe.
      </div>

      {/* Product categories */}
      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat.label}>
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: cat.color + "18", color: cat.color }}
              >
                {cat.icon}
              </div>
              <h2
                className="text-xl font-bold"
                style={{ color: cat.color }}
              >
                {cat.label}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cat.products.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-[#0D2137] group-hover:text-[#0088CC] transition-colors">
                      {p.name}
                    </h3>
                    <span
                      className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ backgroundColor: cat.color }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#5A7A8A]">{p.description}</p>
                  <span className="text-sm font-medium text-[#0088CC] group-hover:underline">
                    Bei Amazon ansehen →
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-2xl bg-[#EBF6FD] p-8 text-center">
        <p className="text-lg font-bold text-[#0D2137] mb-2">
          Noch nicht sicher, was Ihr Umzug kostet?
        </p>
        <p className="text-sm text-[#5A7A8A]">
          Der Umzugskostenrechner kommt bald — kostenlos und ohne Datenweitergabe.
        </p>
      </div>
    </div>
    </>
  );
}
