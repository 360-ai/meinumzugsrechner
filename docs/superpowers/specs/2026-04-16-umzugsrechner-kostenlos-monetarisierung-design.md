# Design: Umzugsrechner — Kostenlos + Monetarisierung + Deployment

**Datum:** 2026-04-16
**Projekt:** meinumzugsrechner (Next.js 15, TypeScript, Tailwind)
**Status:** Approved

---

## Ziel

Den bestehenden Umzugskostenrechner von einem bezahlpflichtigen Modell (2,99 € via Stripe) auf ein kostenloses, werbebasiertes Modell umstellen. Monetarisierung über Google AdSense und Amazon Affiliate-Links. Anschließend statischer Deploy via GitHub + Cloudflare Pages auf eigener Domain.

---

## 1. Entfernte Komponenten (Payment)

Alles Stripe-bezogene wird vollständig entfernt:

- `app/api/create-checkout-session/route.ts`
- `app/api/webhook/route.ts`
- `app/api/verify-session/route.ts`
- npm-Paket `stripe`
- `@opennextjs/cloudflare` und `wrangler` (nicht mehr benötigt)
- `open-next.config.ts` und `wrangler.jsonc`
- Alle Stripe-bezogenen Env-Variablen (`STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`)
- Payment-Step in der Formular-Journey
- Session-ID-Validierung auf der Ergebnis-Seite (`/ergebnis`)

**Ergebnis:** Nach Schritt 6 (AGB bestätigen) wird das Ergebnis direkt angezeigt — keine Paywall.

---

## 2. Monetarisierung

### Google AdSense

- AdSense-Snippet (`<script async src="...">`) in `app/layout.tsx` im `<head>`
- Platzhalter-Kommentar eingebaut, bis AdSense-Konto genehmigt ist
- 2 Ad-Units auf der Ergebnis-Seite (`/ergebnis`):
  - **Über** dem Preiskorridor (Leaderboard/Responsive)
  - **Unter** den Affiliate-Produkten (Responsive)
- `app/datenschutz/page.tsx` bekommt einen AdSense-Abschnitt (Pflicht für Genehmigung)

### Amazon Affiliate

- Neue Sektion auf der Ergebnis-Seite: **"Das brauchst du für deinen Umzug"**
- 6 Produktkarten (CSS Grid, responsive):

| Produkt | Beschreibung |
|---------|-------------|
| Umzugskartons (10er Set) | Stabile Kartons in Standardgröße |
| Packband (6 Rollen) | Reißfestes Klebeband für Kartons |
| Luftpolsterfolie | Schutz für Gläser und Elektrogeräte |
| Möbelschutzdecken (2er Set) | Schützt Möbel vor Kratzern |
| Beschriftungsaufkleber-Set | Farbige Aufkleber für Raumzuordnung |
| Cuttermesser | Zum Öffnen und Schließen von Kartons |

- Produktkarten enthalten: Icon/Bild-Platzhalter, Name, kurze Beschreibung, "Bei Amazon ansehen →"-Button
- Links vorerst `#` — werden durch echte Amazon PartnerNet-Links ersetzt sobald Konto registriert
- Pflichthinweis unterhalb der Sektion:
  *"Mit * gekennzeichnete Links sind Affiliate-Links. Wir erhalten eine kleine Provision, für dich entstehen keine Mehrkosten."*

---

## 3. Deployment

### Next.js Static Export

- `next.config.ts`: `output: 'export'` hinzufügen
- Build erzeugt `out/`-Verzeichnis mit reinen HTML/CSS/JS-Dateien
- Keine API-Routes, kein Server notwendig

### GitHub

- Repo existiert bereits: `https://github.com/360-ai/meinumzugsrechner`
- `.gitignore` korrekt (node_modules, .next, out, .env)
- Push via `git push origin main`

### Cloudflare Pages

- Verbindung in Cloudflare Dashboard: **Pages → Create Project → Connect to Git → GitHub-Repo auswählen**
- Build-Einstellungen:
  - Framework: Next.js (Static HTML Export)
  - Build-Befehl: `npm run build`
  - Output-Verzeichnis: `out`
- Keine Env-Variablen nötig (kein Backend mehr)
- Domain: eigene Domain via CNAME-Eintrag im DNS-Anbieter

---

## 4. Nicht im Scope

- Redesign des Formulars oder der Berechnungslogik
- Eigene Datenbank oder Backend
- E-Mail-Erfassung oder Lead-Generierung
- PayPal oder andere Zahlungsanbieter
- Datenbankbasiertes Partner-System

---

## 5. Reihenfolge der Implementierung

1. Stripe-Code und Dependencies entfernen
2. Ergebnis-Seite direkt zugänglich machen (ohne Session-Validierung)
3. `next.config.ts` auf Static Export umstellen
4. Amazon Affiliate Sektion auf Ergebnis-Seite einbauen
5. AdSense-Snippet und Ad-Units einbauen
6. Datenschutzerklärung aktualisieren
7. Build testen (`npm run build`)
8. GitHub push
9. Cloudflare Pages verbinden + Domain konfigurieren
