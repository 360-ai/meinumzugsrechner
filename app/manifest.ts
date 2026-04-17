import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Umzugsrechner",
    description: "Umzugskosten als Preiskorridor — ohne Datenweitergabe an Umzugsfirmen.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0088CC",
    lang: "de",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
