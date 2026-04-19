import type { Metadata } from "next";
import { pageCanonical } from "@/lib/site";
import { Suspense } from "react";
import { LkwRechnerClient } from "@/components/LkwRechnerClient";

const PAGE_TITLE = "LKW-Rechner: Wie groß muss der LKW beim Umzug sein? | meinumzugsrechner.de";
const PAGE_DESC = "Kostenloser LKW-Rechner für deinen Umzug: Berechne, ob ein Sprinter, Transporter oder LKW ausreicht — inkl. Führerschein-Info.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  ...pageCanonical("/lkw-rechner/"),
  openGraph: {
    title: "LKW-Rechner: Welches Fahrzeug brauche ich beim Umzug?",
    description: PAGE_DESC,
    url: "/lkw-rechner/",
  },
};

export default function LkwRechnerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0D2137] sm:text-4xl">LKW-Rechner</h1>
        <p className="mt-3 text-[#5A7A8A]">
          Wie viele Fahrten brauchst du mit welchem Fahrzeug? Wähle Zimmeranzahl oder gib das Volumen direkt ein.
        </p>
      </div>
      <Suspense fallback={<p className="py-12 text-center text-[#5A7A8A]">Lädt…</p>}>
        <LkwRechnerClient />
      </Suspense>
    </div>
  );
}
