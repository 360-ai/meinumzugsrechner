"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CalcIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
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
    className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/10"
    style={{ backgroundColor: "#FFCC00" }}
  >
    <div className="absolute inset-1 animate-[spin_12s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
        <text style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "0.12em" }} fill="#0D2137">
          <textPath href="#circlePath" startOffset="0%">
            KOSTENLOSE PREISPROGNOSE · KOSTENLOSE PREISPROGNOSE ·
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
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#0D2137", minHeight: "92vh" }}>

      {/* Background photo at 35% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/herohintergrund.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.35,
        }}
      />

      {/* USP Banner */}
      <div className="relative z-20 w-full border-b border-[#0088CC]/40" style={{ backgroundColor: "rgba(0,136,204,0.18)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-3.5 sm:px-6">
          <LockIcon />
          <p
            className="text-center font-black tracking-widest text-white uppercase"
            style={{ fontSize: "clamp(0.75rem, 2.5vw, 1rem)", letterSpacing: "0.1em" }}
          >
            Keine Datenweitergabe an Umzugsfirmen — Deine Daten gehören nur Dir
          </p>
          <LockIcon />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pt-12 pb-14 sm:px-6 md:flex-row md:items-center md:gap-12 md:pt-20 md:pb-20">

        {/* Left: Text */}
        <div className="flex-1 min-w-0 text-center md:text-left">

          {/* Headline */}
          <h1
            className="font-black uppercase leading-[0.92] tracking-tight text-white"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif', fontSize: "clamp(2.4rem, 6.5vw, 80px)" }}
          >
            <span className="block">Dein Umzug.</span>
            <span className="block whitespace-nowrap">Deine Kosten.</span>
            <span className="block">Deine Daten.</span>
            <span className="block mt-1" style={{ color: "#FFCC00" }}>Kostenlos</span>
            <span className="block" style={{ color: "#FFCC00" }}>berechnen.</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-md text-base text-white/75 md:mx-0 md:text-lg">
            Realistischer Preiskorridor in unter 10 Minuten — ohne Spam, ohne Datenweitergabe.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:items-start">
            <Link
              href="/rechner/"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold text-[#0D2137] shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Jetzt kostenlos berechnen →
            </Link>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-white/50 md:justify-start">
            <span>✓ Kein Konto</span>
            <span>·</span>
            <span>✓ Kein Spam</span>
            <span>·</span>
            <span>✓ Sofortiges Ergebnis</span>
            <span>·</span>
            <span>✓ Deine Daten gehören dir</span>
          </div>
        </div>

        {/* Right: Floating mascot + badge */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-[260px] md:w-[340px] lg:w-[400px]">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt="meinumzugsrechner.de — Umzugskosten-Rechner ohne Datenweitergabe"
              width={600}
              height={600}
              className="w-full object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Circular badge */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20">
            <Link href="/rechner/">
              <CircularBadge />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
