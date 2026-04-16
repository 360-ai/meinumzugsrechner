"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const CircularBadge = () => (
  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/10"
    style={{ backgroundColor: "#FFCC00" }}>
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
      <span className="text-2xl">🧮</span>
    </div>
  </div>
);

export function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0D2137", minHeight: "90vh" }}
    >
      {/* Watermark background text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden
      >
        <span
          className="whitespace-nowrap font-black uppercase text-white"
          style={{
            fontSize: "clamp(4rem, 12vw, 140px)",
            opacity: 0.06,
            fontFamily: '"Arial Black", Impact, sans-serif',
            letterSpacing: "-0.02em",
          }}
        >
          meinumzugsrechner.de
        </span>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pt-16 pb-10 sm:px-6 md:flex-row md:items-center md:pt-24 md:pb-16">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          {/* USP tag */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span>🔒</span>
            <span>Keine Datenweitergabe an Umzugsfirmen</span>
          </div>

          {/* Headline */}
          <h1
            className="font-black uppercase leading-[0.88] tracking-tight text-white"
            style={{
              fontFamily: '"Arial Black", Impact, sans-serif',
              fontSize: "clamp(3rem, 9vw, 100px)",
            }}
          >
            <span className="block">Dein Umzug.</span>
            <span className="block">Deine Kosten.</span>
            <span className="block" style={{ color: "#FFCC00" }}>
              Kostenlos.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-5 max-w-md text-base text-white/75 md:mx-0 md:text-lg">
            Realistischer Preiskorridor in 3 Minuten — ohne Spam, ohne
            Datenweitergabe.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:items-start">
            <Link
              href="/rechner"
              className="touch-target inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold text-[#0D2137] shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Jetzt kostenlos berechnen →
            </Link>
          </div>
          <p className="mt-3 text-sm text-white/50">
            ✓ Kein Konto &nbsp;·&nbsp; ✓ Kein Spam &nbsp;·&nbsp; ✓ Sofortiges Ergebnis
          </p>
        </div>

        {/* Right: Floating mascot + badge */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt="meinumzugsrechner Maskottchen"
              width={280}
              height={280}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Circular badge — absolute, bottom-right of mascot */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20">
            <CircularBadge />
          </div>
        </div>
      </div>

      {/* Bottom feature links */}
      <div className="relative z-10 mt-4 w-full border-t border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {[
            { icon: "🧮", label: "Berechnung", href: "/rechner", sub: "Kostenlos & anonym" },
            { icon: "📚", label: "Ratgeber & Checklisten", href: "/ratgeber", sub: "Tipps für deinen Umzug" },
            { icon: "📦", label: "Materialtipps", href: "/materialtipps", sub: "Amazon-Empfehlungen" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-white/5"
              style={{ color: "white" }}
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="font-bold text-white group-hover:text-[#FFCC00] transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-white/50">{item.sub}</p>
              </div>
              <span className="ml-auto text-white/30 group-hover:text-[#FFCC00] transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
