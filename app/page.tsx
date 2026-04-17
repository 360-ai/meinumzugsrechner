import { HomeLanding } from "@/components/HomeLanding";
import { JsonLd } from "@/components/JsonLd";
import { HOME_PAGE_FAQS } from "@/lib/home-faq";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, pageCanonical } from "@/lib/site";
import { webPageAndFaqSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  ...pageCanonical("/"),
  keywords: [
    "Umzugskosten Rechner",
    "Umzug Kosten schätzen",
    "Preiskorridor Umzug",
    "Umzug Deutschland",
    "ohne Datenweitergabe",
    "Umzugskosten ohne Spam",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: "meinumzugsrechner.de",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "meinumzugsrechner.de Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const pageSchema = webPageAndFaqSchema({
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    faqs: HOME_PAGE_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-home-webpage-faq" data={pageSchema} />
      <HomeLanding />
    </>
  );
}
