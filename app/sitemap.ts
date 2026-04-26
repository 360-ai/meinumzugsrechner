import type { MetadataRoute } from "next";
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
  "/ratgeber/firmenumzug/",
  "/ratgeber/halteverbot/",
  "/ratgeber/haustiere/",
  "/ratgeber/lkw-mieten/",
  "/ratgeber/moebel-einlagern/",
  "/ratgeber/moderne-umzugslogistik/",
  "/ratgeber/profi-guide-verpacken/",
  "/ratgeber/selbst-vs-profi/",
  "/ratgeber/seniorenumzug/",
  "/ratgeber/sonderurlaub/",
  "/ratgeber/sperrgut/",
  "/ratgeber/steuerspartipps/",
  "/ratgeber/studentenumzug/",
  "/ratgeber/teilumzug/",
  "/ratgeber/ummelden/",
  "/ratgeber/umzugshelfer/",
  "/ratgeber/wohnungsaufloesung/",
  "/checklisten/",
  "/checklisten/essential-kit/",
  "/checklisten/standort-vorbereitung/",
  "/checklisten/umzugs-countdown/",
  "/checklisten/umzugscheckliste/",
  "/materialtipps/",
  "/partner/",
  "/ueber-uns/",
  "/impressum/",
  "/datenschutz/",
  "/agb/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => {
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
                : 0.65;
    return {
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency:
        path === "/" || path === "/rechner/" ? "weekly" : "monthly",
      priority,
    };
  });
}
