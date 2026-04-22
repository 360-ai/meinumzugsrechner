# Umzugsrechner: Kostenlos + AdSense + Affiliate + Deployment Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stripe-Paywall entfernen, Google AdSense + Amazon Affiliate einbauen, als statische Seite deployen (GitHub + Cloudflare Pages).

**Architecture:** Next.js 15 Static Export (`output: 'export'`). Keine API-Routes mehr. Berechnung clientseitig via `calculateUmzug()` aus `lib/calculate.ts`. Deploy: GitHub Push → Cloudflare Pages baut automatisch → eigene Domain per CNAME.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Cloudflare Pages, GitHub

**Spec:** `docs/superpowers/specs/2026-04-16-umzugsrechner-kostenlos-monetarisierung-design.md`

---

## Dateiübersicht

| Datei | Aktion | Grund |
|-------|--------|-------|
| `app/api/calculate/route.ts` | Löschen | Stripe-abhängig, kein Backend mehr |
| `app/api/create-checkout-session/route.ts` | Löschen | Stripe-Checkout |
| `app/api/verify-session/route.ts` | Löschen | Stripe-Session-Prüfung |
| `app/api/webhook/route.ts` | Löschen | Stripe-Webhook |
| `app/zahlung/page.tsx` | Löschen | Payment-Zwischenseite |
| `open-next.config.ts` | Löschen | Cloudflare Workers Config, nicht mehr gebraucht |
| `wrangler.jsonc` | Löschen | Cloudflare Workers Config, nicht mehr gebraucht |
| `package.json` | Ändern | stripe, @opennextjs/cloudflare, wrangler entfernen; Scripts bereinigen |
| `next.config.ts` | Ändern | opennext-Import entfernen; `output: 'export'` hinzufügen |
| `components/RechnerForm.tsx` | Ändern | Redirect von `/zahlung` auf `/ergebnis`; canceled-Param entfernen |
| `components/ErgebnisClient.tsx` | Ändern | sessionId-Prüfung entfernen; clientseitige Berechnung; Affiliate-Sektion |
| `app/layout.tsx` | Ändern | AdSense-Script-Platzhalter hinzufügen |
| `app/datenschutz/page.tsx` | Ändern | Stripe-Abschnitt entfernen; AdSense-Abschnitt hinzufügen |

---

## Task 1: Stripe-Dateien löschen

**Files:**
- Delete: `app/api/calculate/route.ts`
- Delete: `app/api/create-checkout-session/route.ts`
- Delete: `app/api/verify-session/route.ts`
- Delete: `app/api/webhook/route.ts`
- Delete: `app/zahlung/page.tsx`
- Delete: `open-next.config.ts`
- Delete: `wrangler.jsonc`

- [ ] **Step 1: Dateien löschen**

```bash
cd "Documents/360ai/Produkte/06_meinumzugsrechner"
rm app/api/calculate/route.ts
rm app/api/create-checkout-session/route.ts
rm app/api/verify-session/route.ts
rm app/api/webhook/route.ts
rmdir app/api/calculate app/api/create-checkout-session app/api/verify-session app/api/webhook
rmdir app/api 2>/dev/null || true
rm app/zahlung/page.tsx
rmdir app/zahlung
rm open-next.config.ts
rm wrangler.jsonc
```

- [ ] **Step 2: Prüfen**

```bash
ls app/api 2>/dev/null && echo "FEHLER: app/api noch vorhanden" || echo "OK: app/api entfernt"
ls app/zahlung 2>/dev/null && echo "FEHLER: zahlung noch vorhanden" || echo "OK: zahlung entfernt"
ls open-next.config.ts 2>/dev/null && echo "FEHLER: open-next noch vorhanden" || echo "OK"
ls wrangler.jsonc 2>/dev/null && echo "FEHLER: wrangler noch vorhanden" || echo "OK"
```

Erwartete Ausgabe: alle vier Zeilen `OK`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove stripe payment files and cloudflare workers config"
```

---

## Task 2: package.json bereinigen

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Stripe und Cloudflare-Pakete entfernen**

```bash
npm uninstall stripe @opennextjs/cloudflare wrangler
```

Erwartete Ausgabe: `removed X packages`.

- [ ] **Step 2: Scripts preview:cf und deploy:cf entfernen**

Datei `package.json` öffnen. Den `"scripts"`-Block so ändern (nur diese 4 Scripts behalten):

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

- [ ] **Step 3: Prüfen**

```bash
grep -E "stripe|opennext|wrangler|preview:cf|deploy:cf" package.json && echo "FEHLER: noch vorhanden" || echo "OK: alles entfernt"
```

Erwartete Ausgabe: `OK: alles entfernt`

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove stripe, opennextjs-cloudflare and wrangler dependencies"
```

---

## Task 3: next.config.ts auf Static Export umstellen

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Datei ersetzen**

`next.config.ts` komplett ersetzen mit:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
```

- [ ] **Step 2: Prüfen**

```bash
grep "output" next.config.ts && echo "OK" || echo "FEHLER"
grep "opennext\|cloudflare\|initOpen" next.config.ts && echo "FEHLER: noch vorhanden" || echo "OK: entfernt"
```

Erwartete Ausgabe: beide Zeilen `OK`.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: switch to Next.js static export"
```

---

## Task 4: RechnerForm.tsx — Redirect und canceled-Param bereinigen

**Files:**
- Modify: `components/RechnerForm.tsx:48-50` (canceled-Alert entfernen)
- Modify: `components/RechnerForm.tsx:164` (redirect von /zahlung auf /ergebnis)

- [ ] **Step 1: canceled-Alert entfernen**

In `components/RechnerForm.tsx`, Zeilen 48–50 entfernen:

```ts
// ENTFERNEN:
if (params.get("canceled")) {
  alert("Zahlung abgebrochen. Sie können Ihre Eingaben anpassen und es erneut versuchen.");
}
```

Danach: Den gesamten `useEffect`-Block um `params` prüfen — falls `params` nur für `step` und `canceled` verwendet wurde. `step`-Logik bleibt. `canceled`-Block entfernen.

Der `useEffect` soll danach so aussehen:

```ts
useEffect(() => {
  const s = params.get("step");
  if (s) {
    const n = parseInt(s, 10);
    if (n >= 1 && n <= TOTAL_STEPS) setStep(n);
  }
}, [params]);
```

- [ ] **Step 2: Funktion goPay umbenennen, Redirect und Button-Text ändern**

In `components/RechnerForm.tsx` drei Änderungen:

a) Funktion `goPay` umbenennen zu `goErgebnis` und Redirect ändern (Zeile 153–165):

```ts
// ALT:
const goPay = () => {
  // ...
  router.push("/zahlung");
};

// NEU:
const goErgebnis = () => {
  const err = validateStep(6);
  if (err) {
    alert(err);
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  } catch {
    /* ignore */
  }
  router.push("/ergebnis");
};
```

b) Button-Aufruf ändern (Zeile 707):

```tsx
// ALT:
onClick={goPay}

// NEU:
onClick={goErgebnis}
```

c) Button-Text ändern (Zeile 710):

```tsx
// ALT:
Jetzt für 2,99 € berechnen

// NEU:
Kostenlos berechnen
```

- [ ] **Step 3: Prüfen**

```bash
grep -n "zahlung\|canceled\|Zahlung abgebrochen\|2,99\|goPay" components/RechnerForm.tsx && echo "FEHLER: noch vorhanden" || echo "OK: alles bereinigt"
grep "goErgebnis\|ergebnis" components/RechnerForm.tsx && echo "OK: redirect korrekt" || echo "FEHLER"
```

Erwartete Ausgabe: erste Zeile `OK: alles bereinigt`, zweite `OK: redirect korrekt`.

- [ ] **Step 4: Commit**

```bash
git add components/RechnerForm.tsx
git commit -m "feat: redirect to /ergebnis directly, remove payment flow"
```

---

## Task 5: ErgebnisClient.tsx — Clientseitige Berechnung

**Files:**
- Modify: `components/ErgebnisClient.tsx`

- [ ] **Step 1: Datei komplett ersetzen**

`components/ErgebnisClient.tsx` mit folgendem Inhalt ersetzen:

```tsx
"use client";

import { calculateUmzug } from "@/lib/calculate";
import { STORAGE_KEY, getDefaultForm } from "@/lib/form-defaults";
import { resolvePartners } from "@/lib/partner";
import type { CalculateResult, UmzugFormData } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ErgebnisKorridor } from "./ErgebnisKorridor";
import { PartnerBanner } from "./PartnerBanner";
import { PdfExportButton } from "./PdfExportButton";
import { TrustBadges } from "./TrustBadges";

export function ErgebnisClient() {
  const [form, setForm] = useState<UmzugFormData | null>(null);
  const [result, setResult] = useState<CalculateResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (!raw) {
      setError("Keine Formulardaten gefunden. Bitte Rechner erneut ausfüllen.");
      setLoading(false);
      return;
    }

    let parsed: UmzugFormData;
    try {
      parsed = JSON.parse(raw) as UmzugFormData;
    } catch {
      setError("Formulardaten ungültig.");
      setLoading(false);
      return;
    }

    setForm(parsed);

    try {
      const calc = calculateUmzug(parsed);
      setResult(calc);
    } catch {
      setError("Berechnung fehlgeschlagen. Bitte Rechner erneut ausfüllen.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-medium text-primary">Wird berechnet…</p>
        <p className="mt-2 text-sm text-muted">Bitte einen Moment.</p>
      </div>
    );
  }

  if (error || !form) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-900">
        <p className="font-semibold">{error ?? "Fehler"}</p>
        <Link href="/rechner" className="mt-4 inline-block text-accent underline">
          Zum Rechner
        </Link>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p>Ergebnis konnte nicht geladen werden.</p>
        <Link href="/rechner" className="mt-2 inline-block text-accent underline">
          Zurück
        </Link>
      </div>
    );
  }

  const partners = resolvePartners(form.buildingA.landkreisAgs, form.buildingA.bundesland);

  return (
    <div className="space-y-8">
      {/* AdSense Slot 1 — nach Genehmigung aktivieren */}
      {/* <ins className="adsbygoogle" style={{ display: "block" }}
           data-ad-client="ca-pub-IHRE_PUBLISHER_ID"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true" /> */}

      <ErgebnisKorridor result={result} />

      <AffiliateProdukte />

      <TrustBadges />
      <div className="no-print flex flex-wrap gap-3">
        <PdfExportButton form={form} result={result} />
        <Link
          href="/rechner"
          className="touch-target inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(getDefaultForm()));
            } catch {
              /* ignore */
            }
          }}
        >
          Neue Berechnung
        </Link>
      </div>
      <PartnerBanner
        primary={partners.primary}
        listings={partners.listings}
        affiliateNote={partners.note}
      />

      {/* AdSense Slot 2 — nach Genehmigung aktivieren */}
      {/* <ins className="adsbygoogle" style={{ display: "block" }}
           data-ad-client="ca-pub-IHRE_PUBLISHER_ID"
           data-ad-slot="YYYYYYYYYY"
           data-ad-format="auto"
           data-full-width-responsive="true" /> */}
    </div>
  );
}

const AFFILIATE_PRODUCTS = [
  {
    name: "Umzugskartons (10er Set)",
    desc: "Stabile Kartons in Standardgröße",
    emoji: "📦",
    href: "#",
  },
  {
    name: "Packband (6 Rollen)",
    desc: "Reißfestes Klebeband für Kartons",
    emoji: "🎀",
    href: "#",
  },
  {
    name: "Luftpolsterfolie",
    desc: "Schutz für Gläser & Elektrogeräte",
    emoji: "🫧",
    href: "#",
  },
  {
    name: "Möbelschutzdecken (2er Set)",
    desc: "Schützt Möbel vor Kratzern",
    emoji: "🛋️",
    href: "#",
  },
  {
    name: "Beschriftungsaufkleber-Set",
    desc: "Farbige Aufkleber für Raumzuordnung",
    emoji: "🏷️",
    href: "#",
  },
  {
    name: "Cuttermesser",
    desc: "Zum Öffnen und Schließen von Kartons",
    emoji: "🔪",
    href: "#",
  },
];

function AffiliateProdukte() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-primary">Das brauchst du für deinen Umzug</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {AFFILIATE_PRODUCTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col gap-1 rounded-xl border border-slate-200 p-3 hover:border-accent hover:bg-slate-50 transition-colors"
          >
            <span className="text-2xl">{p.emoji}</span>
            <span className="text-sm font-semibold text-primary leading-tight">{p.name} *</span>
            <span className="text-xs text-muted">{p.desc}</span>
            <span className="mt-auto text-xs text-accent font-medium">Bei Amazon ansehen →</span>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted">
        * Mit * gekennzeichnete Links sind Affiliate-Links. Wir erhalten eine kleine Provision,
        für dich entstehen keine Mehrkosten.
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Prüfen**

```bash
grep -n "sessionId\|/api/calculate\|session_id\|useSearchParams" components/ErgebnisClient.tsx && echo "FEHLER: noch vorhanden" || echo "OK: Stripe-Abhängigkeiten entfernt"
grep "calculateUmzug" components/ErgebnisClient.tsx && echo "OK: clientseitige Berechnung vorhanden" || echo "FEHLER"
grep "AffiliateProdukte\|AFFILIATE_PRODUCTS" components/ErgebnisClient.tsx && echo "OK: Affiliate-Sektion vorhanden" || echo "FEHLER"
```

Alle drei Zeilen sollen mit `OK` enden.

- [ ] **Step 3: Commit**

```bash
git add components/ErgebnisClient.tsx
git commit -m "feat: clientside calculation, remove stripe dependency, add affiliate section"
```

---

## Task 6: AdSense-Platzhalter in layout.tsx einbauen

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Script-Import hinzufügen und Platzhalter einfügen**

`app/layout.tsx` anpassen. `Script` von `next/script` importieren und als Platzhalter-Kommentar in den `<body>` einfügen:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "meinumzugsrechner.com – Umzugskosten ohne Datenweitergabe",
  description:
    "Realistische Umzugskosten als Preiskorridor. Kein Spam, keine Weitergabe Ihrer Umzugsdaten an Umzugsfirmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {/* AdSense: Nach Genehmigung Publisher-ID eintragen und auskommentieren */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-IHRE_PUBLISHER_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Prüfen**

```bash
grep "Script\|adsense\|AdSense\|pagead" app/layout.tsx && echo "OK: AdSense-Platzhalter vorhanden" || echo "FEHLER"
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add adsense placeholder to layout"
```

---

## Task 7: Datenschutzerklärung aktualisieren

**Files:**
- Modify: `app/datenschutz/page.tsx`

- [ ] **Step 1: Datei ersetzen**

`app/datenschutz/page.tsx` komplett ersetzen:

```tsx
export default function DatenschutzPage() {
  return (
    <article className="space-y-6 text-slate-700">
      <h1>Datenschutzerklärung</h1>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der Website
        erforderlich ist. Umzugsspezifische Eingaben (Möbellisten, Adressen, freie Texte) werden{" "}
        <strong>nicht dauerhaft auf unseren Servern gespeichert</strong> und nicht an Umzugsfirmen
        zum Zweck der Kontaktaufnahme weitergegeben.
      </p>

      <h2>Verantwortlicher</h2>
      <p>Denis Schmidt, 360ai, Frankenberg (Eder) – Kontakt: info@meinumzugsrechner.com</p>

      <h2>Hosting & Zugriffsdaten</h2>
      <p>
        Beim Aufruf der Website verarbeitet der Hoster/Provider technisch bedingt Zugriffsdaten
        (z. B. IP-Adresse, Zeitstempel, User-Agent). Zweck: sicherer Betrieb, Missbrauchserkennung.
        Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>Umrechnung / Berechnung</h2>
      <p>
        Die Berechnung erfolgt vollständig im Browser des Nutzers (clientseitig). Es werden keine
        Umzugsdaten an unsere Server übertragen oder gespeichert.
      </p>

      <h2>Werbung (Google AdSense)</h2>
      <p>
        Diese Website verwendet Google AdSense, einen Dienst der Google Ireland Ltd., Gordon House,
        Barrow Street, Dublin 4, Irland. Google AdSense verwendet Cookies und Web-Beacons, um
        interessenbezogene Werbung anzuzeigen. Dabei können Daten (z. B. IP-Adresse, Browser-Typ)
        an Google-Server in den USA übermittelt werden. Rechtsgrundlage: Einwilligung
        (Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen:{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Datenschutzrichtlinie
        </a>
        .
      </p>

      <h2>Werbliche Partnerlinks (Amazon Affiliate)</h2>
      <p>
        Diese Website nimmt am Amazon-Partnerprogramm teil. Mit * gekennzeichnete Links sind
        Affiliate-Links zu Amazon. Beim Kauf über diese Links erhalten wir eine kleine Provision.
        Für Sie entstehen keine Mehrkosten. Amazon und das Amazon-Logo sind Warenzeichen von
        Amazon.com, Inc. oder seinen Tochtergesellschaften.
      </p>

      <h2>Weitere Partnerlinks</h2>
      <p>
        Auf der Ergebnisseite können weitere werbliche Hinweise und Links zu regionalen Partnern
        erscheinen. Es findet kein Abgleich Ihrer Umzugseingaben mit diesen Partnern statt.
      </p>

      <h2>Cookies / Local Storage</h2>
      <p>
        Zur Zwischenspeicherung des Formulars auf Ihrem Gerät wird der Local Storage des Browsers
        verwendet. Diese Daten verlassen Ihr Gerät nicht. Rechtsgrundlage: berechtigtes Interesse
        (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Widerspruch und Datenübertragbarkeit, soweit die gesetzlichen Voraussetzungen erfüllt sind.
        Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
      </p>

      <p className="text-sm text-muted">
        Stand: April 2026 – Entwurf, Einbindung einer juristischen Prüfung empfohlen.
      </p>
    </article>
  );
}
```

- [ ] **Step 2: Prüfen**

```bash
grep -n "Stripe\|stripe" app/datenschutz/page.tsx && echo "FEHLER: Stripe noch vorhanden" || echo "OK: Stripe entfernt"
grep "AdSense\|Amazon" app/datenschutz/page.tsx && echo "OK: neue Abschnitte vorhanden" || echo "FEHLER"
```

- [ ] **Step 3: Commit**

```bash
git add app/datenschutz/page.tsx
git commit -m "feat: update datenschutz - remove stripe, add adsense and amazon affiliate sections"
```

---

## Task 8: Build testen

**Files:** keine Änderungen

- [ ] **Step 1: Build ausführen**

```bash
cd "Documents/360ai/Produkte/06_meinumzugsrechner"
npm run build
```

Erwartete Ausgabe: `Route (app)` Tabelle mit allen Seiten, kein `Error`. Das `out/`-Verzeichnis wird erstellt.

- [ ] **Step 2: out/-Verzeichnis prüfen**

```bash
ls out/
```

Erwartete Ausgabe: `index.html`, `rechner`, `ergebnis`, `impressum`, `datenschutz`, `agb`, `ueber-uns` und `_next/` vorhanden.

- [ ] **Step 3: Ergebnis-Seite lokal testen**

```bash
npx serve out
```

Browser öffnen: `http://localhost:3000` → Rechner durchklicken → Ergebnis muss direkt erscheinen (keine Stripe-Weiterleitung).

- [ ] **Step 4: out/ zu .gitignore hinzufügen** (falls noch nicht vorhanden)

```bash
grep "^out" .gitignore && echo "OK: out/ bereits ignoriert" || echo "/out" >> .gitignore
```

- [ ] **Step 5: Commit**

```bash
git add .gitignore
git commit -m "chore: ensure out/ is in gitignore" --allow-empty
```

---

## Task 9: GitHub Push

**Files:** keine Änderungen

- [ ] **Step 1: Remote prüfen**

```bash
git remote -v
```

Erwartete Ausgabe: `origin  https://github.com/360-ai/meinumzugsrechner ...`

- [ ] **Step 2: Alle Commits prüfen**

```bash
git log --oneline -10
```

Alle Tasks 1–8 sollen als Commits sichtbar sein.

- [ ] **Step 3: Push**

```bash
git push origin main
```

Falls Push fehlschlägt wegen Remote-Divergenz:
```bash
git pull --rebase origin main
git push origin main
```

---

## Task 10: Cloudflare Pages einrichten (manuell im Browser)

**Voraussetzung:** GitHub-Push aus Task 9 erfolgreich.

- [ ] **Step 1: Cloudflare Dashboard öffnen**

URL: https://dash.cloudflare.com → Im linken Menü: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**

- [ ] **Step 2: GitHub-Repo verbinden**

GitHub autorisieren → Repo `360-ai/meinumzugsrechner` auswählen → **Begin setup**

- [ ] **Step 3: Build-Einstellungen konfigurieren**

| Feld | Wert |
|------|------|
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | *(leer lassen)* |
| Node.js version | `20` (unter Environment Variables setzen: `NODE_VERSION = 20`) |

→ **Save and Deploy**

- [ ] **Step 4: Deploy abwarten**

Cloudflare baut die Seite (2–3 Minuten). Danach erscheint eine URL wie `meinumzugsrechner.pages.dev`. Seite dort testen.

- [ ] **Step 5: Eigene Domain einrichten**

In Cloudflare Pages Projekt → **Custom domains** → **Set up a custom domain** → Domain eingeben (z. B. `meinumzugsrechner.com`)

Cloudflare zeigt einen **CNAME-Eintrag**. Diesen beim Domain-Anbieter eintragen:

| Typ | Name | Ziel |
|-----|------|------|
| CNAME | `@` oder `www` | `meinumzugsrechner.pages.dev` |

DNS-Propagation: 5 Minuten bis 24 Stunden.

---

## Task 11: AdSense beantragen (manuell, nach Go-Live)

**Voraussetzung:** Seite ist live unter eigener Domain.

- [ ] **Step 1: AdSense-Konto erstellen**

URL: https://adsense.google.com → Mit Google-Account anmelden → **Jetzt starten**

- [ ] **Step 2: Website eintragen**

Domain `meinumzugsrechner.com` eintragen. Google generiert einen Code-Snippet.

- [ ] **Step 3: AdSense-Snippet aktivieren**

In `app/layout.tsx` den Kommentar um das `<Script>` entfernen und `ca-pub-IHRE_PUBLISHER_ID` durch die echte Publisher-ID ersetzen. Push.

In `components/ErgebnisClient.tsx` die zwei `<ins className="adsbygoogle">` Kommentare aktivieren und Slot-IDs eintragen. Push.

- [ ] **Step 4: Google-Prüfung abwarten**

Google prüft die Website (2–4 Wochen). Danach werden Anzeigen automatisch geschaltet.

---

## Task 12: Amazon PartnerNet einrichten (manuell, nach Go-Live)

- [ ] **Step 1: Amazon PartnerNet beitreten**

URL: https://partnernet.amazon.de → Registrieren mit bestehenden Amazon-Account

- [ ] **Step 2: Tracking-ID erstellen**

Dashboard → **Tracking-IDs verwalten** → neue ID anlegen (z. B. `meinumzugsre-21`)

- [ ] **Step 3: Affiliate-Links generieren**

Für jedes der 6 Produkte in `components/ErgebnisClient.tsx`:
1. Produkt auf Amazon suchen
2. Amazon PartnerNet "SiteStripe" Toolbar nutzen → **Text** → Link kopieren
3. In `AFFILIATE_PRODUCTS` Array: `href: "#"` durch echten Link ersetzen

- [ ] **Step 4: Commit und Push**

```bash
git add components/ErgebnisClient.tsx
git commit -m "feat: add real amazon affiliate links"
git push origin main
```
