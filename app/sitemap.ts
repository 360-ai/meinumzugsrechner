import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/city-data";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/rechner/",
  "/kartonrechner/",
  "/lkw-rechner/",
  "/so-rechnen-wir/",
  "/vergleich/",
  "/ratgeber/",
  "/ratgeber/entruempelung/",
  "/ratgeber/ergonomie/",
  "/ratgeber/erste-eigene-wohnung/",
  "/ratgeber/firmenumzug/",
  "/ratgeber/halteverbot/",
  "/ratgeber/haustiere/",
  "/ratgeber/lkw-mieten/",
  "/ratgeber/moebel-einlagern/",
  "/ratgeber/moderne-umzugslogistik/",
  "/ratgeber/nachsendeauftrag/",
  "/ratgeber/profi-guide-verpacken/",
  "/ratgeber/renovierungspflicht/",
  "/ratgeber/selbst-vs-profi/",
  "/ratgeber/seniorenumzug/",
  "/ratgeber/sonderurlaub/",
  "/ratgeber/sperrgut/",
  "/ratgeber/steuerspartipps/",
  "/ratgeber/studentenumzug/",
  "/ratgeber/teilumzug/",
  "/ratgeber/ummelden/",
  "/ratgeber/umzug-mit-kindern/",
  "/ratgeber/umzugsfirma-finden/",
  "/ratgeber/umzugshelfer/",
  "/ratgeber/wohnungsaufloesung/",
  "/checklisten/",
  "/checklisten/essential-kit/",
  "/checklisten/standort-vorbereitung/",
  "/checklisten/umzugs-countdown/",
  "/checklisten/adressaenderung/",
  "/checklisten/uebergabeprotokoll/",
  "/checklisten/umzugscheckliste/",
  "/umzugstag-planer/",
  "/entruempelungsrechner/",
  "/materialtipps/",
  "/partner/",
  "/ueber-uns/",
  "/impressum/",
  "/datenschutz/",
  "/agb/",
  "/umzugskosten/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: absoluteUrl(`/umzugskosten/${slug}/`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const mainRoutes: MetadataRoute.Sitemap = ROUTES.map((path) => {
    const priority =
      path === "/"
        ? 1
        : path === "/rechner/" || path === "/kartonrechner/" || path === "/lkw-rechner/"
          ? 0.9
          : path === "/so-rechnen-wir/" || path === "/vergleich/"
            ? 0.8
            : path.startsWith("/ratgeber/") && path !== "/ratgeber/"
              ? 0.75
              : path.startsWith("/checklisten/") && path !== "/checklisten/"
                ? 0.7
                : path === "/umzugskosten/"
                  ? 0.85
                  : 0.65;
    return {
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency:
        path === "/" || path === "/rechner/" ? "weekly" : "monthly",
      priority,
    };
  });

  return [...mainRoutes, ...cityRoutes];
}
