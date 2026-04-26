"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 flex-shrink-0"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CalcIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
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

const CircularBadge = () => (
  <div
    className="relative h-28 w-28 cursor-pointer items-center justify-center rounded-full border-[3px] border-black/10 shadow-xl transition-transform hover:scale-105 md:h-36 md:w-36"
    style={{ backgroundColor: "#FFCC00" }}
  >
    <div className="absolute inset-1 animate-[spin_12s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path
          id="circlePath"
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "0.12em" }} fill="#0D2137">
          <textPath href="#circlePath" startOffset="0%">
            ORIENTIERUNG OHNE LEADVERKAUF · ORIENTIERUNG OHNE LEADVERKAUF ·
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <CalcIcon />
    </div>
  </div>
);

export function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0D2137", minHeight: "92vh" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/herohintergrund.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.35,
        }}
      />

      <div
        className="relative z-20 w-full border-b border-[#0088CC]/40"
        style={{ backgroundColor: "rgba(0,136,204,0.18)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-3.5 sm:px-6">
          <LockIcon />
          <p
            className="text-center font-black uppercase tracking-widest text-white"
            style={{ fontSize: "clamp(0.75rem, 2.5vw, 1rem)", letterSpacing: "0.1em" }}
          >
            Keine Weitergabe an Umzugsfirmen - erst rechnen, dann selbst entscheiden
          </p>
          <LockIcon />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pb-14 pt-12 sm:px-6 md:flex-row md:items-center md:gap-12 md:pb-20 md:pt-20">
        <div className="min-w-0 flex-1 text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7ED0FF]">
            Umzugskosten realistisch einordnen
          </p>
          <h1
            className="mt-3 font-black uppercase leading-[0.92] tracking-tight text-white"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif', fontSize: "clamp(2.4rem, 6.5vw, 80px)" }}
          >
            <span className="block">Dein Umzug.</span>
            <span className="block whitespace-nowrap">Deine Kosten.</span>
            <span className="block">Deine Daten.</span>
            <span className="mt-1 block" style={{ color: "#FFCC00" }}>
              Kostenlos
            </span>
            <span className="block" style={{ color: "#FFCC00" }}>
              berechnet.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:mx-0 md:text-lg">
            Berechnen Sie online einen nachvollziehbaren Preisrahmen für Ihren Umzug in Deutschland
            - ohne Registrierung, ohne Spam und ohne automatische Vermittlung Ihrer Daten.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:items-start">
            <Link
              href="/rechner/"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#FF7700" }}
            >
              Jetzt kostenlos berechnen →
            </Link>
          </div>

          <div className="mt-5 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {[
              "Schnelle Orientierung für erste Angebote",
              "Detaillierter Modus mit Möbeln und Zusatzaufwand",
              "Regionale Faktoren statt Fantasiepreise",
              "Sie entscheiden selbst, ob Sie Firmen kontaktieren",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-[260px] flex-shrink-0 items-center justify-center md:w-[340px] lg:w-[400px]">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo.webp"
              alt="meinumzugsrechner.de - Umzugskosten-Rechner ohne Datenweitergabe"
              width={600}
              height={600}
              className="w-full object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          <div className="absolute -bottom-4 -right-4 z-20 md:-bottom-6 md:-right-6">
            <Link href="/rechner/">
              <CircularBadge />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

