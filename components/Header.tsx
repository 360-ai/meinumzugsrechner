"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = { href: string; label: string };
type NavEntry = { href: string; label: string; items: NavItem[] };

const NAV_STRUCTURE: NavEntry[] = [
  {
    href: "/rechner/",
    label: "Rechner",
    items: [
      { href: "/rechner/", label: "Umzugskosten-Rechner" },
      { href: "/umzugskosten/", label: "Kosten nach Stadt" },
      { href: "/so-rechnen-wir/", label: "So rechnen wir" },
      { href: "/kartonrechner/", label: "Kartonrechner" },
      { href: "/lkw-rechner/", label: "LKW-Rechner" },
      { href: "/umzugstag-planer/", label: "Umzugstag-Planer" },
      { href: "/entruempelungsrechner/", label: "Entrümpelungs-Rechner" },
    ],
  },
  {
    href: "/ratgeber/",
    label: "Ratgeber",
    items: [
      { href: "/ratgeber/entruempelung/", label: "Entrümpelung vor dem Umzug" },
      { href: "/ratgeber/ergonomie/", label: "Ergonomie & Heben" },
      { href: "/ratgeber/erste-eigene-wohnung/", label: "Erste eigene Wohnung" },
      { href: "/ratgeber/firmenumzug/", label: "Firmenumzug" },
      { href: "/ratgeber/halteverbot/", label: "Halteverbot beantragen" },
      { href: "/ratgeber/moderne-umzugslogistik/", label: "Moderne Umzugslogistik" },
      { href: "/ratgeber/nachsendeauftrag/", label: "Nachsendeauftrag" },
      { href: "/ratgeber/lkw-mieten/", label: "LKW mieten" },
      { href: "/ratgeber/moebel-einlagern/", label: "Möbel einlagern" },
      { href: "/ratgeber/profi-guide-verpacken/", label: "Profi-Guide Verpacken" },
      { href: "/ratgeber/renovierungspflicht/", label: "Renovierungspflicht" },
      { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
      { href: "/ratgeber/seniorenumzug/", label: "Seniorenumzug" },
      { href: "/ratgeber/sonderurlaub/", label: "Sonderurlaub" },
      { href: "/ratgeber/sperrgut/", label: "Sperrgut transportieren" },
      { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen" },
      { href: "/ratgeber/studentenumzug/", label: "Studentenumzug" },
      { href: "/ratgeber/teilumzug/", label: "Teilumzug" },
      { href: "/ratgeber/ummelden/", label: "Ummelden nach Umzug" },
      { href: "/ratgeber/haustiere/", label: "Umzug mit Haustieren" },
      { href: "/ratgeber/umzug-mit-kindern/", label: "Umzug mit Kindern" },
      { href: "/ratgeber/umzugsfirma-finden/", label: "Umzugsfirma finden" },
      { href: "/ratgeber/umzugshelfer/", label: "Umzugshelfer organisieren" },
      { href: "/ratgeber/wohnungsaufloesung/", label: "Wohnungsauflösung" },
    ],
  },
  {
    href: "/checklisten/",
    label: "Checklisten",
    items: [
      { href: "/checklisten/umzugscheckliste/", label: "Vollständige Checkliste" },
      { href: "/checklisten/umzugs-countdown/", label: "Umzugs-Countdown" },
      { href: "/checklisten/essential-kit/", label: "Essential-Kit" },
      { href: "/checklisten/standort-vorbereitung/", label: "Standort & Catering" },
      { href: "/checklisten/adressaenderung/", label: "Adressänderung" },
      { href: "/checklisten/uebergabeprotokoll/", label: "Übergabeprotokoll" },
    ],
  },
  {
    href: "/materialtipps/",
    label: "Materialtipps",
    items: [{ href: "/materialtipps/", label: "Material & Verpackung" }],
  },
  {
    href: "/partner/",
    label: "Partner",
    items: [{ href: "/partner/", label: "Partnernetzwerk" }],
  },
  {
    href: "/ueber-uns/",
    label: "Über uns",
    items: [{ href: "/ueber-uns/", label: "Über meinumzugsrechner.de" }],
  },
];

function DesktopNavLink({ entry }: { entry: NavEntry }) {
  return (
    <Link
      href={entry.href}
      className="hidden md:inline-flex font-medium text-[var(--text-muted)] hover:text-primary transition-colors px-2 py-1.5"
    >
      {entry.label}
    </Link>
  );
}

function DesktopNavDropdown({ entry }: { entry: NavEntry }) {
  if (entry.items.length <= 1) return <DesktopNavLink entry={entry} />;

  return (
    <div className="relative group hidden md:block">
      <Link
        href={entry.href}
        className="font-medium text-[var(--text-muted)] hover:text-primary transition-colors px-2 py-1.5 inline-flex items-center gap-0.5"
      >
        {entry.label}
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-60 group-hover:opacity-100"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <div
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 top-full pt-1 z-[60] min-w-[220px]"
        style={{ pointerEvents: "auto" }}
      >
        <div className="rounded-xl border border-slate-100 bg-white py-2 shadow-lg max-h-[min(70vh,600px)] overflow-y-auto">
          {entry.items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="block px-4 py-2 text-sm text-[#0D2137] hover:bg-[#EBF6FD] hover:text-[#0088CC]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b-2 border-primary bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image
            src="/logo.webp"
            alt="meinumzugsrechner.de — Logo und Umzugs-Maskottchen"
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

        <nav className="flex items-center gap-0.5 text-sm ml-4" aria-label="Hauptnavigation">
          {NAV_STRUCTURE.map((entry) => (
            <DesktopNavDropdown key={entry.href} entry={entry} />
          ))}
          <Link
            href="/rechner/"
            className="hidden md:inline-flex touch-target items-center justify-center whitespace-nowrap rounded-full bg-accent px-5 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity ml-2"
          >
            Jetzt berechnen
          </Link>
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

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full border-t border-slate-200 bg-white shadow-lg md:hidden z-50 max-h-[min(80vh,calc(100dvh-4rem))] overflow-y-auto">
          <nav className="flex flex-col px-4 py-2" aria-label="Mobilmenü">
            {NAV_STRUCTURE.map((entry) => (
              <div key={entry.href} className="border-b border-slate-100 py-3 last:border-0">
                <Link
                  href={entry.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-[#0D2137] hover:text-[#0088CC]"
                >
                  {entry.label} — Übersicht
                </Link>
                <ul className="mt-2 space-y-1.5 pl-2 border-l-2 border-[#EBF6FD]">
                  {entry.items.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-[#5A7A8A] hover:text-[#0088CC]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/rechner/"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-bold transition-colors"
              style={{ color: "#0088CC" }}
            >
              Jetzt berechnen →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

