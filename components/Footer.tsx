import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-sm text-white/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
          </li>
          <li>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </li>
          <li>
            <Link href="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
