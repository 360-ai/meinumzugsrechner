import type { Metadata } from "next";
import { pageCanonical } from "@/lib/site";
import { Suspense } from "react";
import { VergleichClient } from "@/components/VergleichClient";

const PAGE_TITLE = "DIY vs. Profi: Selbst umziehen oder Umzugsfirma? | meinumzugsrechner.de";
const PAGE_DESC = "Kostenvergleich Selbstumzug vs. Umzugsunternehmen: Kosten, Zeit, Versicherung und Steuervorteil direkt verglichen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/vergleich/"),
  openGraph: {
    title: "Selbst umziehen oder Profi beauftragen?",
    description: PAGE_DESC,
    url: "/vergleich/",
  },
};

export default function VergleichPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">DIY vs. Profi: Was lohnt sich?</h1>
        <p className="mt-3 text-[#5A7A8A]">
          Vergleiche die realen Kosten und den Aufwand — bevor du dich entscheidest.
        </p>
      </div>
      <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
        <VergleichClient />
      </Suspense>
    </div>
  );
}
