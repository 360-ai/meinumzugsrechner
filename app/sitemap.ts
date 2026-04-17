import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/rechner/",
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
  "/checklisten/essential-kit/",
  "/checklisten/standort-vorbereitung/",
  "/checklisten/umzugs-countdown/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/rechner/" ? 0.95 : 0.75,
  }));
}
