import partners from "@/data/partners.json";
import type { BundeslandCode } from "./types";

export interface PartnerEntry {
  id: string;
  name: string;
  tagline?: string;
  url: string;
  discountPercent?: number;
  discountLabel?: string;
  logoUrl?: string | null;
  priority: number;
}

export interface ResolvedPartners {
  primary: PartnerEntry;
  listings: PartnerEntry[];
  note: string;
}

function normalizeListings(
  listings: PartnerEntry[] | undefined,
): PartnerEntry[] {
  if (!listings?.length) return [];
  return [...listings].sort((a, b) => b.priority - a.priority);
}

export function resolvePartners(
  landkreisAgs: string,
  bundesland: BundeslandCode,
): ResolvedPartners {
  const p = partners;
  const byAgs = p.byAgs as Record<string, { primary: PartnerEntry; listings?: PartnerEntry[] }>;
  const byBl = p.byBundesland as Record<
    string,
    { primary: PartnerEntry; listings?: PartnerEntry[] }
  >;

  if (landkreisAgs && byAgs[landkreisAgs]) {
    const block = byAgs[landkreisAgs];
    return {
      primary: block.primary,
      listings: normalizeListings(block.listings),
      note: p.affiliateNote,
    };
  }

  if (byBl[bundesland]) {
    const block = byBl[bundesland];
    return {
      primary: block.primary,
      listings: normalizeListings(block.listings),
      note: p.affiliateNote,
    };
  }

  const d = p.default;
  return {
    primary: d.primary as PartnerEntry,
    listings: normalizeListings(d.listings as PartnerEntry[]),
    note: p.affiliateNote,
  };
}
