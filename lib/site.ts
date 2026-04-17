import type { Metadata } from "next";

/** Production domain — used when NEXT_PUBLIC_APP_URL is unset */
export const SITE_HOST = "meinumzugsrechner.de";

export const SITE_NAME = "meinumzugsrechner.de";

export const DEFAULT_TITLE =
  "Umzugskosten-Rechner: realistischer Preiskorridor ohne Datenweitergabe | meinumzugsrechner.de";

export const DEFAULT_DESCRIPTION =
  "Kostenlose Umzugskosten-Schätzung als Preiskorridor: kein Spam, keine Weitergabe Ihrer Umzugsdaten an Umzugsfirmen. Ratgeber, Checklisten & Materialtipps.";

/** ISO date for editorial / Article schema (Launch-Pflege) */
export const SITE_CONTENT_DATE = "2026-04-17";

export function getSiteUrl(): URL {
  const raw = (process.env.NEXT_PUBLIC_APP_URL ?? `https://${SITE_HOST}`).trim();
  const withProtocol = raw.startsWith("http") ? raw : `https://${raw.replace(/^\/\//, "")}`;
  const noTrail = withProtocol.replace(/\/+$/, "");
  return new URL(noTrail);
}

/** Path with trailing slash (matches next.config trailingSlash) */
export function withTrailingSlash(path: string): string {
  if (path === "/" || path === "") return "/";
  const p = path.startsWith("/") ? path : `/${path}`;
  return p.endsWith("/") ? p : `${p}/`;
}

/** Absolute URL for canonical / JSON-LD */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl().origin;
  const p = withTrailingSlash(path);
  return p === "/" ? `${base}/` : new URL(p.slice(1), `${base}/`).href;
}

export function pageCanonical(path: string): NonNullable<Metadata["alternates"]> {
  return { canonical: withTrailingSlash(path) };
}
