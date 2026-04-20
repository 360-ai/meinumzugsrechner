import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/rechner/",
  "/so-rechnen-wir/",
  "/kartonrechner/",
  "/lkw-rechner/",
  "/vergleich/",
  "/ratgeber/",
  "/checklisten/",
  "/materialtipps/",
  "/partner/",
  "/ueber-uns/",
  "/impressum/",
  "/datenschutz/",
  "/agb/",
  "/ratgeber/ergonomie/",
  "/ratgeber/moderne-umzugslogistik/",
  "/ratgeber/profi-guide-verpacken/",
  "/ratgeber/steuerspartipps/",
  "/checklisten/essential-kit/",
  "/checklisten/standort-vorbereitung/",
  "/checklisten/umzugs-countdown/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => {
    const priority =
      path === "/"
        ? 1
        : path === "/rechner/" || path === "/so-rechnen-wir/"
          ? 0.95
          : path === "/kartonrechner/" || path === "/lkw-rechner/"
            ? 0.85
            : 0.75;
    return {
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: path === "/" || path === "/rechner/" ? "weekly" : "monthly",
      priority,
    };
  });
}
