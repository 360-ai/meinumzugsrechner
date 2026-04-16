import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "meinumzugsrechner.de – Umzugskosten ohne Datenweitergabe",
  description:
    "Realistische Umzugskosten als Preiskorridor. Kein Spam, keine Weitergabe Ihrer Umzugsdaten an Umzugsfirmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={comfortaa.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {/* AdSense: Nach Genehmigung Publisher-ID eintragen und auskommentieren */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-IHRE_PUBLISHER_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
        <Header />
        <main className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
