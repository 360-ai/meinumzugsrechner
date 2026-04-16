import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
