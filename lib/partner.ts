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
  primary: PartnerEntry | null;
  listings: PartnerEntry[];
  note: string;
}

type PartnersFile = typeof partners & {
  networkLive?: boolean;
  default?: { primary: PartnerEntry | null; listings?: PartnerEntry[] };
};

function normalizeListings(listings: PartnerEntry[] | undefined): PartnerEntry[] {
  if (!listings?.length) return [];
  return [...listings].sort((a, b) => b.priority - a.priority);
}

export function isPartnerNetworkLive(): boolean {
  return (partners as PartnersFile).networkLive === true;
}

export function resolvePartners(
  landkreisAgs: string,
  bundesland: BundeslandCode,
): ResolvedPartners {
  const p = partners as PartnersFile;
  const note = p.affiliateNote;

  if (!p.networkLive) {
    return { primary: null, listings: [], note };
  }

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
      note,
    };
  }

  if (byBl[bundesland]) {
    const block = byBl[bundesland];
    return {
      primary: block.primary,
      listings: normalizeListings(block.listings),
      note,
    };
  }

  const d = p.default;
  if (!d?.primary) {
    return { primary: null, listings: [], note };
  }
  return {
    primary: d.primary,
    listings: normalizeListings(d.listings as PartnerEntry[] | undefined),
    note,
  };
}

export function getPartnersForBundesland(bundesland: BundeslandCode): PartnerEntry[] {
  const p = partners as PartnersFile;
  if (!p.networkLive) return [];

  const byBl = p.byBundesland as Record<string, { primary: PartnerEntry; listings?: PartnerEntry[] }>;
  const block = byBl[bundesland];
  if (!block?.primary) {
    const d = p.default;
    if (!d?.primary) return [];
    return [d.primary];
  }
  return [block.primary, ...(block.listings ?? [])].sort((a, b) => b.priority - a.priority);
}
