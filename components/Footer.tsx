import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[var(--bg-soft)] py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="max-w-md">
          Richtwerte, keine Festpreise. Keine Weitergabe Ihrer Umzugsdaten an Umzugsfirmen.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li>
            <Link href="/impressum" className="hover:text-primary">
              Impressum
            </Link>
          </li>
          <li>
            <Link href="/datenschutz" className="hover:text-primary">
              Datenschutz
            </Link>
          </li>
          <li>
            <Link href="/agb" className="hover:text-primary">
              AGB
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
