export const metadata = {
  title: "Materialtipps für deinen Umzug | meinumzugsrechner.de",
  description: "Empfohlenes Umzugsmaterial bei Amazon — von Kartons über Polstermaterial bis zum Transportwerkzeug.",
};

const categories = [
  {
    label: "Verpackung",
    icon: "📦",
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
    icon: "🛡️",
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
    icon: "🔧",
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
              <span className="text-3xl">{cat.icon}</span>
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
        <p className="text-sm text-[#5A7A8A] mb-5">
          Berechnen Sie jetzt Ihren persönlichen Preiskorridor — kostenlos und ohne Datenweitergabe.
        </p>
        <a
          href="/rechner"
          className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
          style={{ backgroundColor: "#FFCC00" }}
        >
          Kostenlos berechnen →
        </a>
      </div>
    </div>
  );
}
