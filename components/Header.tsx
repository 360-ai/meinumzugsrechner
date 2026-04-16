import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-[var(--bg-soft)]">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-primary">
          meinumzugsrechner.de
        </Link>
        <nav className="flex gap-4 text-sm text-slate-600">
          <Link href="/rechner" className="hover:text-primary">
            Rechner
          </Link>
          <Link href="/ueber-uns" className="hover:text-primary">
            Über uns
          </Link>
        </nav>
      </div>
    </header>
  );
}
