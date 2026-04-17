import type { Metadata } from "next";
import { pageCanonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Umzugs-Partner nach Bundesland | meinumzugsrechner.de",
  description:
    "Regionale Umzugsunternehmen in Deutschland — anschreibbar nach Ihrer Kostenberechnung. Keine automatische Datenweitergabe.",
  ...pageCanonical("/partner/"),
  openGraph: {
    title: "Umzugs-Partner nach Bundesland | meinumzugsrechner.de",
    description:
      "Regionale Umzugsunternehmen in Deutschland — anschreibbar nach Ihrer Kostenberechnung. Keine automatische Datenweitergabe.",
    url: "/partner/",
  },
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
