import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Hero } from "@/components/Hero";
import { HOME_PAGE_FAQS } from "@/lib/home-faq";

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" style={{ color: "#0088CC" }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" style={{ color: "#0088CC" }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" style={{ color: "#0088CC" }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalcIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" style={{ color: "#0088CC" }}>
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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" style={{ color: "#FF7700" }}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="12" y2="15" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" style={{ color: "#0088CC" }}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const KartonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" style={{ color: "#0088CC" }}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
    <line x1="8" y1="4.5" x2="8" y2="10" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" style={{ color: "#0088CC" }}>
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const NetworkIcon = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: "#0088CC" }}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M12 7v4M12 11l-5 6M12 11l5 6" />
  </svg>
);

const PartnerBadge = () => (
  <div
    className="relative flex h-44 w-44 cursor-pointer items-center justify-center rounded-full border-4 border-white/20 shadow-2xl transition-transform hover:scale-105"
    style={{ backgroundColor: "#FF7700" }}
  >
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path id="partnerCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
        <text style={{ fontSize: "8.5px", fontWeight: 900, letterSpacing: "0.12em" }} fill="white">
          <textPath href="#partnerCircle" startOffset="0%">
            JETZT PARTNER WERDEN · JETZT PARTNER WERDEN ·
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
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
                title: "Private Orientierung zuerst",
                text: "Sie prüfen Ihren Preisrahmen zuerst selbst, ohne Ihre Anfrage direkt in ein Vermittlungsformular zu verwandeln.",
              },
              {
                icon: <BoltIcon />,
                title: "Sofort nutzbar",
                text: "Ergebnis direkt im Browser - ohne Konto, ohne Wartezeit und ohne Pflicht zur Kontaktaufnahme.",
              },
              {
                icon: <MapPinIcon />,
                title: "Für Deutschland gedacht",
                text: "Die Schätzung arbeitet mit regionalen Faktoren und soll typische Preisunterschiede besser abbilden als pauschale Rechner.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 border-l-4 bg-white p-6 shadow-sm"
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

      <section className="border-y border-slate-100 bg-[#FAFCFE] py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm leading-relaxed text-[#0D2137]">
            <strong>Transparenz statt Blackbox:</strong> Wir zeigen, welche Faktoren den Preisrahmen beeinflussen und warum der Rechner bewusst keine Fantasie-Festpreise ausspuckt.
          </p>
          <Link
            href="/so-rechnen-wir/"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-[#0D2137] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFCC00" }}
          >
            So rechnen wir →
          </Link>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0D2137]">Die wichtigsten Werkzeuge auf einen Blick</h2>
            <p className="mt-3 text-[#5A7A8A]">
              Erst Kosten einordnen, dann Planung und Material sauber vorbereiten.
            </p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <CalcIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">Umzugskosten-Rechner</h3>
                <p className="mt-3 leading-relaxed text-[#5A7A8A]">
                  Für die erste Einordnung Ihrer Umzugskosten. Je nach Bedarf als schnelle
                  Orientierung oder als detailliertere Berechnung mit Inventar, Zugangssituation und
                  Zusatzaufwand.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/rechner/"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
                    style={{ backgroundColor: "#FFCC00" }}
                  >
                    Jetzt berechnen →
                  </Link>
                  <Link
                    href="/so-rechnen-wir/"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[#0088CC] px-4 py-2 text-sm font-bold text-[#0088CC] hover:bg-[#EBF6FD]"
                  >
                    Methodik lesen
                  </Link>
                </div>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/berechnung.webp"
                  alt="Umzugskosten-Rechner für die erste Preisorientierung"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 384px"
                  loading="lazy"
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
                <h3 className="text-2xl font-bold text-[#0D2137]">Ratgeber und Checklisten</h3>
                <p className="mt-3 leading-relaxed text-[#5A7A8A]">
                  Kompakte Hilfen für Packen, Ablauf, Ergonomie und Vorbereitung. Damit wird aus dem
                  Richtwert auch ein planbarer Umzug.
                </p>
                <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row sm:justify-start">
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
                  src="/checklisten.webp"
                  alt="Checklisten und Ratgeber für die Umzugsplanung"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 384px"
                  loading="lazy"
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>

            <div className="border-t border-[#0088CC]/15" />

            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <KartonIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">Kartonrechner</h3>
                <p className="mt-3 leading-relaxed text-[#5A7A8A]">
                  Schätzt den Bedarf nach Kartontypen, damit Sie Material gezielter einkaufen und am
                  Umzugstag keine unnötigen Lücken haben.
                </p>
                <Link
                  href="/kartonrechner/"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FFCC00" }}
                >
                  Zum Kartonrechner →
                </Link>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/kartonrechner.webp"
                  alt="Kartonrechner für den Kartonbedarf beim Umzug"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 384px"
                  loading="lazy"
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>

            <div className="border-t border-[#0088CC]/15" />

            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <TruckIcon />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137]">LKW-Rechner</h3>
                <p className="mt-3 leading-relaxed text-[#5A7A8A]">
                  Hilft bei der Einschätzung, ob ein kleiner Transporter genügt oder ob Fahrten,
                  Ladevolumen und Fahrzeugklasse anders geplant werden sollten.
                </p>
                <Link
                  href="/lkw-rechner/"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold text-[#0D2137] transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FFCC00" }}
                >
                  Zum LKW-Rechner →
                </Link>
              </div>
              <div className="w-full flex-shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/lkw-rechner.webp"
                  alt="LKW-Rechner zur Einschätzung von Fahrzeuggröße und Fahrten"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 384px"
                  loading="lazy"
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
                <p className="mt-3 leading-relaxed text-[#5A7A8A]">
                  Von Kartons bis Möbelschutz: praktische Produktempfehlungen für die Vorbereitung,
                  damit Planung und Einkauf besser zusammenpassen.
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
                  src="/produkttipps.webp"
                  alt="Materialtipps für Kartons, Schutz und Transporthilfen"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 384px"
                  loading="lazy"
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#0D2137]">So gehen Sie am besten vor</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "1", title: "Rahmen berechnen", text: "Erst Kostenrahmen ermitteln, bevor Angebote oder Eigenleistung geplant werden." },
              { num: "2", title: "Details schärfen", text: "Bei Bedarf im Detailmodus Möbel, Zugang und Zusatzaufwand ergänzen." },
              { num: "3", title: "Planung ableiten", text: "Mit Kartonrechner, LKW-Rechner und Checklisten die praktische Vorbereitung aufbauen." },
              { num: "4", title: "Angebote besser prüfen", text: "Spätere Firmenangebote mit einem eigenen Richtwert im Hintergrund bewusster einordnen." },
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
            <h2 className="text-3xl font-bold text-[#0D2137]">Partnernetzwerk im Aufbau</h2>
            <p className="mt-3 text-[#5A7A8A]">
              Die Plattform soll Preisgefühl und spätere Angebotsprüfung zusammenbringen, ohne den ersten Schritt in eine Leadabgabe umzuwandeln.
            </p>
          </div>

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ backgroundColor: "#EBF6FD", border: "2px solid #0088CC22" }}>
                  <NetworkIcon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0D2137]">16</p>
                  <p className="text-sm text-[#5A7A8A]">Bundesländer im Rechner abbildbar</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#5A7A8A]">
                Regionale Unterschiede sind bereits Teil der Schätzung. Sichtbare Partnerfirmen und
                weitere Praxisdaten werden schrittweise ergänzt, damit aus einer guten Orientierung
                nach und nach auch eine stärkere Marktanbindung wird.
              </p>
              <Link
                href="/partner/"
                className="mt-5 inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
                style={{ backgroundColor: "#FFCC00" }}
              >
                Partnerseite ansehen →
              </Link>
            </div>

            <ul className="space-y-3">
              {[
                "Preisorientierung bleibt ohne Pflicht zur Kontaktfreigabe nutzbar",
                "Regionale Partner können die Marktnähe der Korridore weiter verbessern",
                "Nutzer entscheiden selbst, wann aus Orientierung eine Anfrage wird",
                "Transparente Aufbauphase statt übertriebener Vollständigkeitsversprechen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A8A]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#0088CC" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#5A7A8A]">
              Umzugsunternehmen?{" "}
              <a
                href="mailto:info@meinumzugsrechner.com?subject=Partnerschaft%20meinumzugsrechner.com"
                className="font-bold hover:underline"
                style={{ color: "#0088CC" }}
              >
                Jetzt als Partner eintragen →
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 sm:px-6 md:flex-row md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: "#FF7700", color: "white" }}
            >
              Für Umzugsunternehmen
            </span>
            <h2 className="mb-4 text-3xl font-black leading-tight text-white">
              Werden Sie Teil
              <br />
              unseres Netzwerks
            </h2>
            <p className="mb-6 leading-relaxed text-white/70">
              Helfen Sie dabei, regionale Preisrahmen näher an die Praxis zu bringen - und werden
              Sie sichtbar für Nutzer, die ihren Umzug bereits eingeordnet haben.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Sichtbarkeit bei Nutzern mit echter Umzugsabsicht",
                "Regionale Präsenz statt anonymer Marktplatzlogik",
                "Kooperationen und Modelle individuell abstimmbar",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#FFCC00" }} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-shrink-0 flex-col items-center gap-4">
            <a
              href="mailto:info@meinumzugsrechner.com?subject=Partnerschaft%20meinumzugsrechner.com"
              className="block"
            >
              <PartnerBadge />
            </a>
            <p className="text-center text-xs text-white/40">Klick öffnet Ihre E-Mail-App</p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16" id="faq" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-heading" className="mb-8 text-center text-3xl font-bold text-[#0D2137]">
            Häufige Fragen zum Umzugskosten-Rechner
          </h2>
          <FaqAccordion items={HOME_PAGE_FAQS} />
          <p className="mt-8 text-center text-sm text-[#5A7A8A]">
            <Link href="/so-rechnen-wir/" className="font-medium text-[#0088CC] hover:underline">
              So rechnen wir: Methodik und typische Zusatzkosten
            </Link>
          </p>
          <p className="mt-10 text-center">
            <Link
              href="/rechner/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Jetzt Umzugskosten berechnen →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
