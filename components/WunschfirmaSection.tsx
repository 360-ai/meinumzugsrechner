"use client";

import { getPartnersForBundesland } from "@/lib/partner";
import type { BundeslandCode } from "@/lib/types";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

type Props = {
  bundesland: BundeslandCode;
  anfragMailtoBase: (partnerUrl: string) => string;
};

export function WunschfirmaSection({ bundesland, anfragMailtoBase }: Props) {
  const firmList = getPartnersForBundesland(bundesland);

  if (firmList.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-[#0088CC]/40 bg-white p-6">
        <h3 className="mb-1 font-bold text-[#0D2137]">Direktanfrage an Umzugsfirmen</h3>
        <p className="text-sm text-[#5A7A8A] leading-relaxed">
          Unser regionales Partnernetzwerk startet gerade: Es sind noch keine Firmen für Ihre Auswahl
          hinterlegt. Ihre Daten werden von uns nicht an Dritte übermittelt. Sie können Ihre Kalkulation
          per E-Mail selbst an beliebige Anbieter schicken — oder später hier nach passenden Partnern
          schauen.
        </p>
        <a
          href="/partner/"
          className="mt-4 inline-flex text-sm font-bold hover:underline"
          style={{ color: "#0088CC" }}
        >
          Mehr zum Partnerprogramm →
        </a>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-[#0088CC]/20 bg-[#EBF6FD] p-6">
      <h3 className="mb-1 font-bold text-[#0D2137]">
        Wunschfirma anfragen
      </h3>
      <p className="mb-4 text-sm text-[#5A7A8A]">
        Wählen Sie eine Firma aus unserem Netzwerk — Ihre Berechnungsdaten werden automatisch übermittelt.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {firmList.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm"
          >
            <p className="font-bold text-[#0D2137] text-sm leading-tight">{p.name}</p>
            {p.tagline && (
              <p className="text-xs text-[#5A7A8A]">{p.tagline}</p>
            )}
            {p.discountLabel && (
              <p className="text-xs font-medium text-emerald-700">{p.discountLabel}</p>
            )}
            <a
              href={anfragMailtoBase(p.url)}
              className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full px-4 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0088CC" }}
            >
              <MailIcon />
              Anfragen →
            </a>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-[#5A7A8A]">
        Kein Account nötig — die E-Mail öffnet sich in Ihrem E-Mail-Programm.
      </p>
    </section>
  );
}
