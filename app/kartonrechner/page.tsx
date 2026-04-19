import type { Metadata } from "next";
import { pageCanonical } from "@/lib/site";
import { Suspense } from "react";
import { KartonrechnerClient } from "@/components/KartonrechnerClient";

const PAGE_TITLE = "Kartonrechner: Wie viele Umzugskartons brauche ich? | meinumzugsrechner.de";
const PAGE_DESC = "Kostenloser Kartonrechner für deinen Umzug: Berechne genau, wie viele Standardkartons, Bücherkartons und Kleiderboxen du brauchst.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/kartonrechner/"),
  openGraph: {
    title: "Kartonrechner: Wie viele Umzugskartons brauche ich?",
    description: PAGE_DESC,
    url: "/kartonrechner/",
  },
};

export default function KartonrechnerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">Kartonrechner</h1>
        <p className="mt-3 text-[#5A7A8A]">
          Gib ein, wie viel du hast — und erfahre genau, welche Kartons du brauchst.
        </p>
      </div>
      <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
        <KartonrechnerClient />
      </Suspense>
    </div>
  );
}
