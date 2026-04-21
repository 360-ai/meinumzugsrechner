# meinumzugsrechner — Agent Instructions

## Projekt-Überblick

Next.js 15 App (Static Export) für einen deutschen Umzugskostenrechner.
Deployed als statische Website via Cloudflare Pages.

- **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Output:** `next build` → statischer Export in `/out`
- **Hosting:** Cloudflare Pages (kein Node.js-Server)

## Wichtige Einschränkungen

- `output: "export"` in `next.config.ts` — keine Server Components mit Datenbankzugriff, keine API Routes
- Bilder: `images: { unoptimized: true }` — Next.js Image Optimization ist deaktiviert
- Alle Bilder in `public/` müssen als `.webp` vorliegen (PNG/JPG vermeiden — zu groß)

## Projektstruktur

```
app/              # Next.js App Router — jede Seite = eigener Ordner
components/       # Wiederverwendbare React-Komponenten
lib/              # Geschäftslogik, Typen, Berechnungen
data/             # JSON-Daten (z.B. partners.json)
public/           # Statische Assets (Bilder als .webp)
scripts/          # Hilfs-Scripts (z.B. convert-images.mjs)
docs/             # Interne Dokumentation, kein Build-Artefakt
Firmenaquise/     # Vertriebsmaterial, kein Build-Artefakt
brand_guide/      # Design-Assets, kein Build-Artefakt
```

## Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `lib/types.ts` | Zentrale TypeScript-Typen |
| `lib/calculate.ts` | Kernberechnung Umzugskosten |
| `lib/partner.ts` | Partner-Logik |
| `data/partners.json` | Partner-Daten |
| `components/HomeLanding.tsx` | Homepage |
| `components/RechnerForm.tsx` | Haupt-Formular |
| `components/ErgebnisClient.tsx` | Ergebnisseite |

## Git-Workflow

```bash
# Status prüfen
git status

# Alles stagen
git add -A

# Committen (auf Deutsch, prägnant)
git commit -m "feat: kurze Beschreibung was geändert wurde"

# Pushen
git push
```

Remote: `https://github.com/360-ai/meinumzugsrechner.git` (Branch: `main`)

## Commands

```bash
npm run dev      # Lokaler Dev-Server
npm run build    # Produktions-Build → /out
npm run start    # Statischen Build lokal servieren
npm run lint     # ESLint
node scripts/convert-images.mjs  # Bilder → WebP konvertieren
```

## Coding-Konventionen

- Sprache im Code: Englisch (Variablen, Funktionen)
- UI-Texte: Deutsch
- Kein Over-Engineering — einfachste Lösung bevorzugen
- Keine neuen Abhängigkeiten ohne guten Grund
- Tailwind für Styling, keine separaten CSS-Dateien
- Commit-Messages: Deutsch, Format `feat:` / `fix:` / `perf:` / `docs:`

## Umgebungsvariablen

Für lokale Entwicklung: `.dev.vars` anlegen (nicht committen):
```
NEXTJS_ENV=development
```
