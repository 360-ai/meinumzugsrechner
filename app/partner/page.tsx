"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import partnersData from "@/data/partners.json";
import type { PartnerEntry } from "@/lib/partner";
import Link from "next/link";

/* ── SVG Icons ─────────────────────────────────────────────────── */
const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFCC00" stroke="#FFCC00" strokeWidth="1" className="w-4 h-4">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ── Types ──────────────────────────────────────────────────────── */
const BUNDESLAENDER: { code: string; label: string }[] = [
  { code: "BW", label: "Baden-Württemberg" },
  { code: "BY", label: "Bayern" },
  { code: "BE", label: "Berlin" },
  { code: "BB", label: "Brandenburg" },
  { code: "HB", label: "Bremen" },
  { code: "HH", label: "Hamburg" },
  { code: "HE", label: "Hessen" },
  { code: "MV", label: "Mecklenburg-Vorpommern" },
  { code: "NI", label: "Niedersachsen" },
  { code: "NW", label: "Nordrhein-Westfalen" },
  { code: "RP", label: "Rheinland-Pfalz" },
  { code: "SL", label: "Saarland" },
  { code: "SN", label: "Sachsen" },
  { code: "ST", label: "Sachsen-Anhalt" },
  { code: "SH", label: "Schleswig-Holstein" },
  { code: "TH", label: "Thüringen" },
];

interface PartnerWithBl extends PartnerEntry {
  bundesland: string;
  bundeslandLabel: string;
  isListing?: boolean;
}

function getAllPartners(): PartnerWithBl[] {
  const pd = partnersData as { networkLive?: boolean };
  if (pd.networkLive === false) return [];

  const byBl = partnersData.byBundesland as Record<string, { primary: PartnerEntry; listings?: PartnerEntry[] }>;
  const result: PartnerWithBl[] = [];

  for (const bl of BUNDESLAENDER) {
    const block = byBl[bl.code];
    if (!block) continue;
    result.push({ ...block.primary, bundesland: bl.code, bundeslandLabel: bl.label });
    if (block.listings?.length) {
      for (const listing of block.listings) {
        result.push({ ...listing, bundesland: bl.code, bundeslandLabel: bl.label, isListing: true });
      }
    }
  }
  return result;
}

/* ── Partner Card ────────────────────────────────────────────────── */
function PartnerCard({ partner }: { partner: PartnerWithBl }) {
  const isMailto = partner.url.startsWith("mailto:");
  const contactHref = isMailto
    ? partner.url
    : `mailto:info@meinumzugsrechner.com?subject=Anfrage%20Partner%20${encodeURIComponent(partner.name)}`;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: "#EBF6FD", color: "#0088CC" }}
        >
          <TruckIcon />
        </div>
        {partner.discountPercent && (
          <span
            className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
            style={{ backgroundColor: "#0088CC" }}
          >
            {partner.discountPercent} % Rabatt
          </span>
        )}
      </div>

      <div>
        <h3 className="font-bold text-[#0D2137]">{partner.name}</h3>
        {partner.tagline && (
          <p className="mt-0.5 text-xs text-[#5A7A8A]">{partner.tagline}</p>
        )}
        <p className="mt-1 text-xs font-medium" style={{ color: "#0088CC" }}>
          {partner.bundeslandLabel}
        </p>
      </div>

      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        <span className="ml-1 text-xs font-bold text-[#0D2137]">Neu</span>
      </div>

      {partner.discountLabel && (
        <p className="text-xs text-[#5A7A8A] italic">{partner.discountLabel}</p>
      )}

      <a
        href={contactHref}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#FF7700" }}
      >
        <MailIcon />
        Anfragen
      </a>
    </div>
  );
}

/* ── Inner Page (needs useSearchParams) ─────────────────────────── */
function PartnerPageInner() {
  const params = useSearchParams();
  const initialBl = params.get("bl")?.toUpperCase() ?? "ALLE";
  const activeBl = BUNDESLAENDER.some(b => b.code === initialBl) ? initialBl : "ALLE";

  const allPartners = getAllPartners();
  const filtered = activeBl === "ALLE"
    ? allPartners
    : allPartners.filter(p => p.bundesland === activeBl);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">
          Regionale Umzugsunternehmen
        </h1>
        <p className="mt-3 text-[#5A7A8A]">
          Hier entsteht ein Partnernetzwerk nach Bundesland — Ihre Daten werden nicht verkauft oder
          weitergeleitet.
        </p>
      </div>

      {/* Filter Tabs — Blend ins Layout; ohne Partner nur Hinweis */}
      {allPartners.length > 0 ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {[{ code: "ALLE", label: "Alle" }, ...BUNDESLAENDER].map((bl) => {
            const isActive = activeBl === bl.code;
            const href = bl.code === "ALLE" ? "/partner/" : `/partner/?bl=${bl.code}`;
            return (
              <Link
                key={bl.code}
                href={href}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: isActive ? "#0088CC" : "#EBF6FD",
                  color: isActive ? "#fff" : "#0D2137",
                }}
              >
                {bl.label}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="mb-8 rounded-2xl border border-dashed border-[#0088CC]/35 bg-[#EBF6FD]/60 p-6 text-center">
          <p className="text-sm font-medium text-[#0D2137]">Aufbauphase des Partnernetzwerks</p>
          <p className="mt-2 text-sm text-[#5A7A8A] leading-relaxed max-w-xl mx-auto">
            Aktuell sind noch keine Umzugsfirmen öffentlich gelistet. Das Erscheinungsbild (Filter nach
            Bundesland, Karten) bleibt erhalten — Einträge kommen schrittweise dazu, sobald Partner
            vertraglich angebunden sind.
          </p>
        </div>
      )}

      {/* Partner Grid */}
      {allPartners.length > 0 ? (
        filtered.length === 0 ? (
          <p className="text-[#5A7A8A]">Keine Partner für diese Region gefunden.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        )
      ) : null}

      {/* CTA — Als Partner eintragen */}
      <div className="mt-14 rounded-2xl bg-[#EBF6FD] p-8 text-center">
        <p className="text-lg font-bold text-[#0D2137] mb-2">
          Ihr Unternehmen hier listen?
        </p>
        <p className="text-sm text-[#5A7A8A] mb-5">
          Werden Sie Partner auf meinumzugsrechner.com — regional sichtbar, ohne Datenweitergabe.
        </p>
        <a
          href="mailto:info@meinumzugsrechner.com?subject=Partnerschaft%20meinumzugsrechner.com"
          className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
          style={{ backgroundColor: "#FFCC00" }}
        >
          <MailIcon />
          Als Partner eintragen →
        </a>
      </div>
    </div>
  );
}

/* ── Page Export ────────────────────────────────────────────────── */
export default function PartnerPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center text-[#5A7A8A]">Wird geladen…</div>}>
      <PartnerPageInner />
    </Suspense>
  );
}
