import type { PartnerEntry } from "@/lib/partner";

type Props = {
  primary: PartnerEntry;
  listings: PartnerEntry[];
  affiliateNote: string;
};

export function PartnerBanner({ primary, listings, affiliateNote }: Props) {
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
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-flex touch-target items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
        >
          Zum Angebot
        </a>
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
