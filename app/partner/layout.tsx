import type { Metadata } from "next";
import { pageCanonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Umzugs-Partner nach Bundesland | meinumzugsrechner.de",
  description:
    "Regionale Umzugsunternehmen in Deutschland — anschreibbar nach Ihrer Kostenberechnung. Keine automatische Datenweitergabe.",
  keywords: ["Umzugsfirma finden", "Umzugsunternehmen regional", "Umzugsfirma Empfehlung"],
  ...pageCanonical("/partner/"),
  openGraph: {
    type: "website",
    title: "Umzugs-Partner nach Bundesland | meinumzugsrechner.de",
    description:
      "Regionale Umzugsunternehmen in Deutschland — anschreibbar nach Ihrer Kostenberechnung. Keine automatische Datenweitergabe.",
    url: "/partner/",
  },
  robots: { index: true, follow: true },
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return children;
}

