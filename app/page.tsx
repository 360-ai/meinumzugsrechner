import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div>
      {/* Hero — full width, no container */}
      <Hero />

      {/* Content sections with max-width */}
      <div className="mx-auto max-w-5xl space-y-16 px-4 pb-16 pt-12 sm:px-6">

        {/* Feature Cards */}
        <section className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: "🔒",
              title: "Kein Lead-Verkauf",
              text: "Deine Möbelliste und Standorte werden niemals an Umzugsfirmen weitergegeben.",
            },
            {
              icon: "⚡",
              title: "Sofortiges Ergebnis",
              text: "Nach dem Ausfüllen siehst du den Preiskorridor direkt — kein Warten, kein Registrieren.",
            },
            {
              icon: "📍",
              title: "Regional genau",
              text: "Preisfaktoren nach Bundesland und Landkreis — so realistisch wie möglich.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm border-l-4"
              style={{ borderLeftColor: "#0088CC" }}
            >
              <span className="text-3xl">{f.icon}</span>
              <h2 className="mt-3 font-bold text-[var(--text)]">{f.title}</h2>
              <p className="mt-2 text-sm text-muted">{f.text}</p>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="rounded-2xl bg-[var(--bg-soft)] p-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--text)]">
            Wie funktioniert es?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { num: "1", title: "Umzug beschreiben", text: "Auszugs- und Einzugsort, Etagen, Möbel, Sonderwünsche — alles in 6 Schritten." },
              { num: "2", title: "Kostenlos berechnen", text: "Kein Konto, keine Zahlung. Einfach auf \"Kostenlos berechnen\" klicken." },
              { num: "3", title: "Ergebnis sofort sehen", text: "Du siehst einen realistischen Preiskorridor plus nützliche Tipps für deinen Umzug." },
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white shadow"
                  style={{ backgroundColor: "#FF7700" }}
                >
                  {s.num}
                </div>
                <h3 className="mt-4 font-bold text-[var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/rechner"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Jetzt starten →
            </Link>
          </div>
        </section>

        {/* Partner section */}
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[var(--text)]">
              Empfohlene Umzugsunternehmen
            </h2>
            <p className="mt-2 text-sm text-muted">
              Sorgfältig ausgewählte Partner — Ihre Daten geben wir nicht weiter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "Mustermann Umzüge GmbH", region: "Berlin & Brandenburg", rating: 4.9, badge: "Top-Partner" },
              { name: "Schnell & Sicher Transport", region: "Bayern & Baden-Württemberg", rating: 4.7, badge: "Empfohlen" },
              { name: "Umzugsprofi Nord", region: "Hamburg & Schleswig-Holstein", rating: 4.8, badge: "Empfohlen" },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col gap-3"
              >
                {/* Logo placeholder */}
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "#EBF6FD" }}
                >
                  🚚
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[var(--text)] text-sm">{p.name}</h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ backgroundColor: "#0088CC" }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5">📍 {p.region}</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="font-bold text-[var(--text)]">{p.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted">
              Umzugsunternehmen?{" "}
              <a
                href="mailto:info@360-ai.org?subject=Partnerschaft%20meinumzugsrechner.de"
                className="font-medium text-[#0088CC] hover:underline"
              >
                Jetzt als Partner eintragen →
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
