"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/rechner", label: "Rechner" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/checklisten", label: "Checklisten" },
  { href: "/materialtipps", label: "Materialtipps" },
  { href: "/partner", label: "Partner" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b-2 border-primary bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image
            src="/logo.png"
            alt="meinumzugsrechner Maskottchen"
            width={44}
            height={44}
            className="flex-shrink-0 object-contain"
          />
          <span className="text-base sm:text-lg font-bold leading-none">
            <span style={{ color: "#0088CC" }}>mein</span>
            <span style={{ color: "#FF7700" }}>umzugsrechner</span>
            <span style={{ color: "#0088CC" }}>.de</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-medium text-[var(--text-muted)] hover:text-primary transition-colors hidden md:block px-3 py-1.5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/rechner"
            className="touch-target inline-flex items-center justify-center rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white hover:opacity-90 transition-opacity ml-2 sm:px-5 sm:py-2 sm:text-sm"
          >
            <span className="hidden sm:inline">Jetzt </span>berechnen
          </Link>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-1 p-2 rounded-md hover:bg-slate-100 transition-colors"
            aria-label="Menü öffnen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5 text-[#0D2137]">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full border-t border-slate-200 bg-white shadow-lg md:hidden z-50">
          <nav className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-[#0D2137] hover:text-[#0088CC] border-b border-slate-100 last:border-0 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
