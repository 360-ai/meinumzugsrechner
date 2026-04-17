import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-sm text-white/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold">
              <span className="text-white">mein</span>
              <span style={{ color: "#FFCC00" }}>umzugsrechner</span>
              <span className="text-white">.de</span>
            </p>
            <p className="mt-1 text-xs text-white/60">
              Richtwerte, keine Festpreise. Keine Datenweitergabe.
            </p>
          </div>
          <nav aria-label="Schnellzugriff">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Angebot</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link href="/rechner/" className="hover:text-white transition-colors">
                  Umzugskosten-Rechner
                </Link>
              </li>
              <li>
                <Link href="/ratgeber/" className="hover:text-white transition-colors">
                  Ratgeber
                </Link>
              </li>
              <li>
                <Link href="/checklisten/" className="hover:text-white transition-colors">
                  Checklisten
                </Link>
              </li>
              <li>
                <Link href="/materialtipps/" className="hover:text-white transition-colors">
                  Materialtipps
                </Link>
              </li>
              <li>
                <Link href="/partner/" className="hover:text-white transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6">
          <li>
            <Link href="/impressum/" className="hover:text-white transition-colors">
              Impressum
            </Link>
          </li>
          <li>
            <Link href="/datenschutz/" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </li>
          <li>
            <Link href="/agb/" className="hover:text-white transition-colors">
              AGB
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
