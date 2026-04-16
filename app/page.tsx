import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <section className="flex flex-col items-center gap-10 pt-4 sm:flex-row sm:items-center sm:gap-12">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            Umzugskosten berechnen —{" "}
            <span style={{ color: "#0088CC" }}>kostenlos</span> &{" "}
            <span style={{ color: "#FF7700" }}>ohne Datenweitergabe</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted sm:mx-0">
            Detaillierte Eingabe wie beim Profi-Umzug. Du bekommst einen realistischen
            Preiskorridor — in unter 3 Minuten, ohne Spam.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
            <Link
              href="/rechner"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold text-[#0D2137] shadow-md transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Kostenlos berechnen →
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted">
            ✓ Kein Spam &nbsp;·&nbsp; ✓ Keine Datenweitergabe &nbsp;·&nbsp; ✓ Sofortiges Ergebnis
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Umzugsrechner Maskottchen"
            width={280}
            height={280}
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </section>

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

    </div>
  );
}
