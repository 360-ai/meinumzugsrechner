import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationAndWebsiteSchema } from "@/lib/schema";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, getSiteUrl } from "@/lib/site";

const GA_ID = "G-BJ9P59VDGC";

const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa", weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: DEFAULT_TITLE, template: "%s" },
  description: DEFAULT_DESCRIPTION,
  applicationName: "meinumzugsrechner.de",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "meinumzugsrechner.de",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "meinumzugsrechner.de — Umzugskosten berechnen ohne Datenweitergabe" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0088CC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={comfortaa.variable}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <JsonLd id="ld-global-org-website" data={organizationAndWebsiteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

