import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_PAGE_FAQS } from "@/lib/home-faq";

/* ── SVG Icons ────────────────────────────────────────────────── */
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: "#0088CC" }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: "#0088CC" }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: "#0088CC" }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

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

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" style={{ color: "#0088CC" }}>
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const NetworkIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: "#0088CC" }}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M12 7v4M12 11l-5 6M12 11l5 6" />
  </svg>
);

const PartnerBadge = () => (
  <div
    className="relative w-44 h-44 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer border-4 border-white/20"
    style={{ backgroundColor: "#FF7700" }}
  >
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path id="partnerCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
        <text style={{ fontSize: "8.5px", fontWeight: 900, letterSpacing: "0.12em" }} fill="white">
          <textPath href="#partnerCircle" startOffset="0%">
            JETZT PARTNER WERDEN · JETZT PARTNER WERDEN ·
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    </div>
  </div>
);

export function HomeLanding() {
  return (
    <div>
      <Hero />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <ShieldIcon />,
                title: "Kein Lead-Verkauf",
                text: "Deine Möbelliste und Standorte werden niemals an Umzugsfirmen weitergegeben.",
              },
              {
                icon: <BoltIcon />,
                title: "Sofortiges Ergebnis",
                text: "Nach dem Ausfüllen siehst du den Preiskorridor direkt — kein Warten, kein Registrieren.",
              },
              {
                icon: <MapPinIcon />,
                title: "Regional genau",
                text: "Preisfaktoren nach Bundesland und Landkreis — so realistisch wie möglich.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm border-l-4"
                style={{ borderLeftColor: "#0088CC" }}
              >
                {f.icon}
                <h2 className="mt-3 font-bold text-[#0D2137]">{f.title}</h2>
                <p className="mt-2 text-sm text-[#5A7A8A]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0D2137]">Was wir für dich bieten</h2>
            <p className="mt-3 text-[#5A7A8A]">Alles rund um deinen Umzug — an einem Ort.</p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <CalcIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">Kostenlose Berechnung</h3>
                <p className="mt-3 text-[#5A7A8A] leading-relaxed">
                  In unter 10 Minuten erhältst du einen realistischen Preiskorridor für deinen Umzug —
                  ohne Anmeldung, ohne Zahlung, ohne dass deine Daten an Umzugsfirmen weitergegeben werden.
                </p>
                <Link
                  href="/rechner/"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FFCC00" }}
                >
                  Jetzt berechnen →
                </Link>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/berechnung.png"
                  alt="Umzugskosten-Rechner: kostenlose Berechnung des Preiskorridors auf meinumzugsrechner.de"
                  width={400}
                  height={300}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>

            <div className="border-t border-[#0088CC]/15" />

            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#FFF3E8", border: "2px solid #FF770022" }}>
                  <BookIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">Ratgeber &amp; Checklisten</h3>
                <p className="mt-3 text-[#5A7A8A] leading-relaxed">
                  Experten-Ratgeber zu Ergonomie, Verpacken und Umzugslogistik. Dazu druckfertige
                  Checklisten für jeden Schritt deines Umzugs — kostenlos und ohne Anmeldung.
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-start justify-center">
                  <Link
                    href="/ratgeber/"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#FF7700" }}
                  >
                    Ratgeber →
                  </Link>
                  <Link
                    href="/checklisten/"
                    className="inline-flex items-center justify-center rounded-full border-2 px-6 py-2.5 font-bold transition-colors hover:bg-orange-50"
                    style={{ borderColor: "#FF7700", color: "#FF7700" }}
                  >
                    Checklisten →
                  </Link>
                </div>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/checklisten.png"
                  alt="Umzug: Ratgeber und Checklisten zum Packen und zur Planung"
                  width={400}
                  height={300}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>

            <div className="border-t border-[#0088CC]/15" />

            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <BoxIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">Materialtipps</h3>
                <p className="mt-3 text-[#5A7A8A] leading-relaxed">
                  Das richtige Material macht den Unterschied. Kuratierte Empfehlungen für
                  Umzugskartons, Polstermaterial, Transportgurte und mehr — direkt bei Amazon verfügbar.
                </p>
                <Link
                  href="/materialtipps/"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FFCC00" }}
                >
                  Materialtipps ansehen →
                </Link>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/produkttipps.png"
                  alt="Umzugsmaterial: Kartons, Polsterfolie und Transporthilfen"
                  width={400}
                  height={300}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>

            <div className="border-t border-[#0088CC]/15" />

            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <NetworkIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">Partner-Netzwerk</h3>
                <p className="mt-3 text-[#5A7A8A] leading-relaxed">
                  Unser wachsendes Netzwerk an Umzugsunternehmen hilft uns, Preiskorridore
                  realistisch zu kalibrieren — und kann nach der Berechnung direkt
                  für ein verbindliches Angebot angefragt werden.
                </p>
                <Link
                  href="/partner/"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FFCC00" }}
                >
                  Partner ansehen →
                </Link>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/logistik-partner.png"
                  alt="Regionale Umzugsunternehmen und Partner für Festpreis-Angebote"
                  width={400}
                  height={300}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#0D2137]">Wie funktioniert es?</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { num: "1", title: "Umzug beschreiben", text: "Auszugs- und Einzugsort, Etagen, Möbel, Sonderwünsche — alles in wenigen Schritten." },
              { num: "2", title: "Kostenlos berechnen", text: "Kein Konto, keine Zahlung. Einfach auf \"Kostenlos berechnen\" klicken." },
              { num: "3", title: "Ergebnis sofort sehen", text: "Du siehst einen realistischen Preiskorridor plus nützliche Tipps für deinen Umzug." },
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
              href="/rechner/"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Jetzt starten →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#0D2137]">Partner Umzugsunternehmen</h2>
            <p className="mt-3 text-[#5A7A8A]">Regionale Unternehmen für deinen Umzug — direkt anschreibbar nach der Berechnung.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-14 w-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <TruckIcon />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0D2137]">16</p>
                  <p className="text-sm text-[#5A7A8A]">Bundesländer abgedeckt</p>
                </div>
              </div>
              <p className="text-[#5A7A8A] text-sm leading-relaxed">
                Unternehmen in unserem Netzwerk helfen bei der Preisberechnung und
                können nach der Kalkulation direkt angefragt werden —
                ohne Datenweitergabe an Dritte.
              </p>
              <Link
                href="/partner/"
                className="mt-5 inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
                style={{ backgroundColor: "#FFCC00" }}
              >
                Alle Partner ansehen →
              </Link>
            </div>

            <ul className="space-y-3">
              {[
                "Regionale Expertise — je Bundesland gefiltert",
                "Verbindliche Angebote auf Basis Ihrer Kalkulation",
                "Mögliche Partnerrabatte direkt anfragen",
                "Keine versteckten Weiterleitungen Ihrer Daten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0088CC" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#5A7A8A]">
              Umzugsunternehmen?{" "}
              <a
                href="mailto:info@meinumzugsrechner.de?subject=Partnerschaft%20meinumzugsrechner.de"
                className="font-bold hover:underline"
                style={{ color: "#0088CC" }}
              >
                Jetzt als Partner eintragen →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Partner-Banner ─────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: "#FF7700", color: "white" }}
            >
              Für Umzugsunternehmen
            </span>
            <h2 className="text-3xl font-black text-white leading-tight mb-4">
              Werden Sie Teil<br />unseres Netzwerks
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Helfen Sie uns, Preiskorridore regional zu kalibrieren — und erhalten Sie
              direkte Anfragen von Nutzern nach deren Berechnung. Eintragung kostenlos.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              {["Direktanfragen nach Berechnung", "Regionale Sichtbarkeit in Ihrem Bundesland",
                "Preismodelle auf Anfrage"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FFCC00" }} />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Spinning Badge */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <a
              href="mailto:info@meinumzugsrechner.de?subject=Partnerschaft%20meinumzugsrechner.de"
              className="block"
            >
              <PartnerBadge />
            </a>
            <p className="text-xs text-white/40 text-center">Klick öffnet Ihre E-Mail-App</p>
          </div>

        </div>
      </section>

      <section className="bg-white py-16 border-t border-slate-100" id="faq" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#0D2137] text-center mb-3">
            Häufige Fragen zum Umzugskosten-Rechner
          </h2>
          <p className="text-center text-sm text-[#5A7A8A] mb-10">
            Kurz beantwortet — für Suchmaschinen und Lesbarkeit auf einen Blick.
          </p>
          <FaqAccordion items={HOME_PAGE_FAQS} />
          <p className="mt-10 text-center">
            <Link href="/rechner/" className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105" style={{ backgroundColor: "#FFCC00" }}>
              Jetzt Umzugskosten berechnen →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
