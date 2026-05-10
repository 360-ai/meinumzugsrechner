import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { UmzugstagPlaner } from "@/components/UmzugstagPlaner";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { UMZUGSTAG_PLANER_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Umzugstag-Planer: Ablauf & Zeitplan am Umzugstag — kostenlose Checkliste | meinumzugsrechner.de";
const PAGE_DESC =
  "Wie plane ich meinen Umzugstag? Interaktiver Zeitplan mit Aufgabenliste zum Abhaken — von morgens bis abends alles im Griff. Kostenlos und ohne Anmeldung.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Umzugstag planen",
    "Umzug Zeitplan",
    "Umzugstag Ablauf",
    "Umzug Tagesplan",
    "Umzugstag Checkliste",
  ],
  ...pageCanonical("/umzugstag-planer/"),
  openGraph: {
    type: "website",
    title: "Umzugstag-Planer: Interaktiver Zeitplan",
    description: PAGE_DESC,
    url: "/umzugstag-planer/",
  },
  robots: { index: true, follow: true },
};

export default function UmzugstagPlanerPage() {
  return (
    <>
      <JsonLd
        id="ld-umzugstag-planer"
        data={webPageAndFaqSchema({
          path: "/umzugstag-planer/",
          title: PAGE_TITLE,
          description: PAGE_DESC,
          faqs: UMZUGSTAG_PLANER_FAQS,
        })}
      />

      <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
        {/* Hero */}
        <div className="mb-8">
          <Link
            href="/"
            className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-[#0088CC] hover:underline"
          >
            ← Startseite
          </Link>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#0D2137" }}
          >
            <p
              className="mb-1 text-xs font-bold uppercase tracking-wider"
              style={{ color: "#FFCC00" }}
            >
              Interaktives Tool
            </p>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Umzugstag-Planer
            </h1>
            <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
              Planen Sie den Ablauf Ihres Umzugstags — mit realistischen
              Zeitschätzungen und interaktiver Aufgabenliste zum Abhaken.
            </p>
          </div>
        </div>

        {/* Planer */}
        <UmzugstagPlaner />

        {/* Tipps */}
        <div className="mt-8 space-y-6">
          <div
            className="rounded-2xl border p-4 text-sm"
            style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
          >
            <strong className="text-[#0D2137]">Tipp:</strong>{" "}
            <span className="text-[#5A7A8A]">
              Drucken Sie diese Seite am Vorabend aus (Strg+P) oder lassen Sie
              sie auf dem Handy offen. So behalten Sie am Umzugstag den
              Überblick. Die Zeiten sind Richtwerte — passen Sie diese an
              Ihre Situation an.
            </span>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
              Häufige Fragen
            </h2>
            <FaqAccordion items={UMZUGSTAG_PLANER_FAQS} />
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#EBF6FD" }}
          >
            <p className="mb-4 font-bold text-[#0D2137]">
              Was wird Ihr Umzug kosten?
            </p>
            <Link
              href="/rechner/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFCC00" }}
            >
              Zum Umzugskosten-Rechner →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
