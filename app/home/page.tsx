import { LegacyHomeRedirect } from "@/components/LegacyHomeRedirect";
import { pageCanonical } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weiterleitung zur Startseite",
  description: "Diese URL leitet zur Hauptstartseite weiter.",
  ...pageCanonical("/"),
  robots: { index: false, follow: true },
};

export default function LegacyHomePage() {
  return <LegacyHomeRedirect />;
}
