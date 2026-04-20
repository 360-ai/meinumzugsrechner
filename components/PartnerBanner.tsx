import type { PartnerEntry } from "@/lib/partner";

type Props = {
  primary: PartnerEntry | null;
  listings: PartnerEntry[];
  affiliateNote: string;
  anfragMailto?: string;
};

export function PartnerBanner({ primary, listings, affiliateNote, anfragMailto }: Props) {
  if (!primary) {
    return (
      <section className="no-print space-y-3 rounded-2xl border border-slate-200 bg-[#EBF6FD] p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0088CC]">Regionale Partner</p>
        <p className="text-sm text-[#5A7A8A]">{affiliateNote}</p>
        <p className="text-sm text-[#0D2137]">
          Sobald Partnerfirmen angebunden sind, erscheinen hier direkte Kontaktmöglichkeiten — ohne
          Datenweitergabe durch uns.
        </p>
      </section>
    );
  }

  return (
    <section className="no-print space-y-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
          Werbung / Anzeige
        </p>
        <p className="mt-1 text-xs text-amber-950/80">{affiliateNote}</p>
      </div>

      <div className="rounded-xl border border-amber-300 bg-white p-5 shadow-sm">
        <p className="text-xs font-medium text-muted">Empfohlener Partner in Ihrer Region</p>
        <h3 className="mt-1 text-xl font-bold text-primary">{primary.name}</h3>
        {primary.tagline && <p className="mt-1 text-sm text-slate-600">{primary.tagline}</p>}
        {primary.discountLabel && (
          <p className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-900">
            {primary.discountLabel}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={primary.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex touch-target items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Zum Angebot
          </a>
          {anfragMailto && (
            <a
              href={anfragMailto}
              className="inline-flex touch-target items-center justify-center rounded-md border-2 border-accent px-5 py-3 text-sm font-semibold text-accent hover:bg-orange-50 transition-colors"
            >
              Anfrage senden ✉
            </a>
          )}
        </div>
      </div>

      {listings.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-semibold text-primary">Weitere Anbieter (Listing)</p>
          <ul className="space-y-3">
            {listings.map((p) => (
              <li
                key={p.id}
                className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-slate-900">{p.name}</p>
                  {p.discountLabel && (
                    <p className="text-xs text-muted">{p.discountLabel}</p>
                  )}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm font-semibold text-accent underline"
                >
                  Website
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
