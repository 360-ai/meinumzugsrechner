import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="meinumzugsrechner Maskottchen"
            width={44}
            height={44}
            className="object-contain"
          />
          <span className="text-lg font-bold leading-none">
            <span style={{ color: "#0088CC" }}>mein</span>
            <span style={{ color: "#FF7700" }}>umzugsrechner</span>
            <span style={{ color: "#0088CC" }}>.de</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/rechner"
            className="font-medium text-[var(--text-muted)] hover:text-primary transition-colors hidden sm:block"
          >
            Rechner
          </Link>
          <Link
            href="/ueber-uns"
            className="font-medium text-[var(--text-muted)] hover:text-primary transition-colors hidden sm:block"
          >
            Über uns
          </Link>
          <Link
            href="/rechner"
            className="touch-target inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity"
          >
            Jetzt berechnen
          </Link>
        </nav>
      </div>
    </header>
  );
}
