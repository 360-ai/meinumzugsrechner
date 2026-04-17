import Image from "next/image";
import Link from "next/link";

/* ── SVG Icons ────────────────────────────────────────────────── */
const CalcIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <rect x="8" y="10" width="2" height="2" rx="0.5" />
    <rect x="11" y="10" width="2" height="2" rx="0.5" />
    <rect x="14" y="10" width="2" height="2" rx="0.5" />
    <rect x="8" y="14" width="2" height="2" rx="0.5" />
    <rect x="11" y="14" width="2" height="2" rx="0.5" />
    <rect x="14" y="14" width="2" height="2" rx="0.5" />
    <rect x="8" y="18" width="5" height="2" rx="0.5" />
    <rect x="14" y="18" width="2" height="2" rx="0.5" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#FF7700" }}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="12" y2="15" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ChecklistIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "#0088CC" }}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" style={{ color: "#0088CC" }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" style={{ color: "#0088CC" }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" style={{ color: "#0088CC" }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ── Page ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div>

      {/* ── Hero: Bald da ───────────────────────────────────── */}
      <section className="py-20 text-center" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6">

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="meinumzugsrechner Maskottchen"
              width={96}
              height={96}
              className="object-contain animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>

          {/* Brand name */}
          <p className="text-2xl font-bold leading-none mb-2">
            <span style={{ color: "#0088CC" }}>mein</span>
            <span style={{ color: "#FF7700" }}>umzugsrechner</span>
            <span style={{ color: "#0088CC" }}>.de</span>
          </p>
          <p className="text-sm text-[#5A7A8A] mb-8">Dein Umzug. Klar kalkuliert.</p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D2137] leading-tight mb-6">
            Wir sind bald<br />für dich da
          </h1>

          {/* Subtext */}
          <p className="text-[#5A7A8A] leading-relaxed mb-8 max-w-lg mx-auto">
            Hier findest du bald deinen persönlichen Umzugskostenrechner — mit realistischem
            Preiskorridor, ohne Datenweitergabe an Dritte.
          </p>

          {/* Badge */}
          <span className="inline-block rounded-full border-2 border-[#0088CC] px-5 py-1.5 text-sm font-bold text-[#0088CC]">
            In Kürze verfügbar
          </span>
        </div>
      </section>

      {/* ── Schon jetzt verfügbar ───────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#0D2137]">Schon jetzt für dich verfügbar</h2>
            <p className="mt-3 text-[#5A7A8A]">Starte jetzt — kostenlos, ohne Anmeldung.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Ratgeber */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col gap-3">
              <BookIcon />
              <h3 className="font-bold text-[#0D2137]">Ratgeber</h3>
              <p className="text-sm text-[#5A7A8A] flex-1">
                3 Experten-Ratgeber zu Ergonomie, Verpacken &amp; Umzugslogistik.
              </p>
              <Link
                href="/ratgeber"
                className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF7700" }}
              >
                Ratgeber lesen →
              </Link>
            </div>

            {/* Checklisten */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col gap-3">
              <ChecklistIcon />
              <h3 className="font-bold text-[#0D2137]">Checklisten</h3>
              <p className="text-sm text-[#5A7A8A] flex-1">
                Druckfertige Checklisten für jeden Schritt deines Umzugs.
              </p>
              <Link
                href="/checklisten"
                className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0088CC" }}
              >
                Checklisten ansehen →
              </Link>
            </div>

            {/* Materialtipps */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col gap-3">
              <BoxIcon />
              <h3 className="font-bold text-[#0D2137]">Materialtipps</h3>
              <p className="text-sm text-[#5A7A8A] flex-1">
                Kuratierte Empfehlungen für Kartons, Polstermaterial &amp; Transportgurte.
              </p>
              <Link
                href="/materialtipps"
                className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-[#0D2137] transition-transform hover:scale-105"
                style={{ backgroundColor: "#FFCC00" }}
              >
                Materialtipps ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wie funktioniert es? ─────────────────────────────── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#0D2137]">
            So wird es funktionieren
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "1", title: "Umzug beschreiben", text: "Auszugsort, Etagen, Möbel und Sonderwünsche — alles in wenigen Schritten." },
              { num: "2", title: "Kostenlos berechnen", text: "Kein Konto, keine Zahlung. Einfach auf \"Jetzt berechnen\" klicken." },
              { num: "3", title: "Ergebnis sofort sehen", text: "Realistischer Preiskorridor — direkt, ohne Warten." },
              { num: "4", title: "Firma anschreiben", text: "Finales Angebot einholen inkl. möglichem Partnerrabatt." },
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: "#FF7700" }}
                >
                  {s.num}
                </div>
                <h3 className="mt-4 font-bold text-[#0D2137]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#5A7A8A]">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/rechner"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Jetzt starten →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Was dich erwartet ───────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#0088CC1A" }}>
                <CalcIcon />
              </div>
              <p className="font-bold text-[#0D2137]">Preiskorridor in 10 Min.</p>
              <p className="text-xs text-[#5A7A8A]">Ohne Anmeldung, ohne Datenweitergabe</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#0088CC1A" }}>
                <ShieldIcon />
              </div>
              <p className="font-bold text-[#0D2137]">Keine Datenweitergabe</p>
              <p className="text-xs text-[#5A7A8A]">Deine Daten bleiben bei dir</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#0088CC1A" }}>
                <MapPinIcon />
              </div>
              <p className="font-bold text-[#0D2137]">Regional kalibriert</p>
              <p className="text-xs text-[#5A7A8A]">Nach Bundesland &amp; Landkreis</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner-Hinweis ─────────────────────────────────── */}
      <section className="py-10 border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "#EBF6FD" }}>
              <MailIcon />
            </div>
            <div>
              <p className="font-bold text-[#0D2137] text-sm">Partner-Netzwerk wächst</p>
              <p className="text-xs text-[#5A7A8A]">16 Bundesländer · Direkte Anfragen nach Berechnung</p>
            </div>
          </div>
          <a
            href="mailto:info@360-ai.org?subject=Partnerschaft%20meinumzugsrechner.de"
            className="inline-flex items-center justify-center rounded-full border-2 px-5 py-2 text-sm font-bold transition-colors hover:bg-[#EBF6FD]"
            style={{ borderColor: "#0088CC", color: "#0088CC" }}
          >
            Als Partner eintragen →
          </a>
        </div>
      </section>

    </div>
  );
}
