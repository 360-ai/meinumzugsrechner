# Claude Code Briefing – meinumzugsrechner.com
**Erstellt von:** Denis Schmidt / 360ai  
**Datum:** April 2026  
**Zweck:** Vollständige Projektbeschreibung für die Entwicklung der Plattform meinumzugsrechner.com

---

## 1. PROJEKTZIEL & POSITIONIERUNG

Baue eine vollständige, produktionsreife Webanwendung unter dem Namen **meinumzugsrechner.com**.

### Was die Plattform macht
Nutzer können ihren geplanten Umzug detailliert eingeben und erhalten einen **realistischen Preiskorridor** (z.B. "ca. 850 – 1.150 €") für einen professionellen Umzugsservice. Die Berechnung erfolgt anonym, sicher und ohne Lead-Weitergabe.

### Kernversprechen (USP)
- **Kein Spam, keine Anrufe, keine Datenweitergabe** an Umzugsfirmen
- Bezahlter Service: 2,99 € pro Abfrage (Stripe oder PayPal)
- Detaillierter Rechner mit echter Möbelliste statt nur "Quadratmeter + km"
- Ergebnis sofort nach Zahlung, kein Warten auf Rückruf
- DSGVO-konform: Keine Speicherung personenbezogener Daten

### Zielgruppe
Primär: Privatpersonen in Deutschland  
Sekundär: Kleine Unternehmen / Büroumzüge

---

## 2. TECHNISCHER STACK

```
Frontend:     React (Single Page Application) oder Next.js (SSR bevorzugt für SEO)
Styling:      Tailwind CSS
Payment:      Stripe (Primär) + PayPal (Optional, zweite Stufe)
Hosting:      Cloudflare Pages (bereits vorhanden bei 360ai)
Deployment:   GitHub → Cloudflare Pages (CI/CD bereits konfiguriert)
Backend:      Cloudflare Workers (serverless) ODER Node.js/Express auf eigenem Server
Datenbank:    KEINE persistente Nutzerdaten-DB (DSGVO)
              Nur: Preismatrix als JSON/statische Datei im Backend
Geolocation:  ipapi.co API oder Cloudflare CF-IPCountry/CF-Region Header
Domain:       meinumzugsrechner.com (zu registrieren)
```

### Wichtige Architektur-Entscheidung
**Keine Datenbank für Nutzerdaten.** Die Umzugsdaten des Nutzers werden ausschließlich im Browser-State (React State / Session) gehalten, serverseitig nur für die Berechnung übergeben und danach verworfen. Einzige gespeicherte Daten: Stripe Payment-Referenz (Pflicht für Buchhaltung, keine personenbezogenen Umzugsdaten).

---

## 3. USER FLOW (Seitenstruktur)

```
[1] Landingpage (/)
    ↓ Klick auf "Jetzt berechnen"

[2] Schritt-für-Schritt Formular (/rechner)
    → Gebäude A (Auszug)
    → Gebäude B (Einzug)
    → Möbel & Inventar
    → Zusatzleistungen
    → Zusammenfassung

    ↓ Klick auf "Preis berechnen"

[3] Payment (/zahlung)
    → Stripe Checkout (2,99 €)
    → PayPal als Alternative

    ↓ Zahlung erfolgreich

[4] Ergebnis (/ergebnis?token=XYZ)
    → Preiskorridor wird angezeigt
    → Werbebanner des regionalen Partners (via Geolocation)
    → Hinweis: Kein Anruf, keine Datenweitergabe

[5] Statische Seiten
    → /impressum
    → /datenschutz
    → /agb
    → /ueber-uns
```

---

## 4. DAS FORMULAR – ALLE FELDER (vollständig)

Das Formular ist in **6 Schritte** aufgeteilt. Jeder Schritt wird als eigener Screen angezeigt (kein langer Scroll). Fortschrittsanzeige oben (Schritt 1 von 6).

---

### SCHRITT 1 – Gebäude A (Auszug)

| Feld | Typ | Optionen / Hinweis |
|------|-----|--------------------|
| Stadt / Landkreis | Freitext + Autocomplete | z.B. "Frankfurt am Main" |
| Etage | Dropdown | EG, 1. OG, 2. OG, 3. OG, 4. OG, 5. OG+, Dachgeschoss |
| Aufzug vorhanden? | Radio | Ja / Nein / Lastenaufzug |
| Treppenhaus | Radio | Normal / Eng (unter 1,20m) |
| Entfernung Haustür → LKW | Dropdown | 0–10m / 10–30m / 30–50m / über 50m |
| Halteverbotszone nötig? | Radio | Ja / Nein / Weiß nicht |
| Gebäudetyp | Radio | Altbau / Neubau / Einfamilienhaus |

---

### SCHRITT 2 – Gebäude B (Einzug)

Identische Felder wie Schritt 1.

Zusätzlich:
| Feld | Typ | Optionen |
|------|-----|----------|
| Selbe Stadt wie Gebäude A? | Checkbox | Ja → Stadt wird übernommen |

---

### SCHRITT 3 – Distanz

| Feld | Typ | Hinweis |
|------|-----|---------|
| Entfernung zwischen beiden Gebäuden | Zahl (km) | Nutzer gibt selbst ein, Hinweistext: "kürzeste Route laut Google Maps" |
| Umzugsdatum | Datum-Picker | Wochentag / Samstag / Sonntag / Feiertag wird automatisch erkannt |

> **Hinweis für Entwickler:** Kein Google Maps API Pflichtfeld im MVP. Nutzer gibt km manuell ein. In Version 2.0 kann Google Maps Distance Matrix API integriert werden.

---

### SCHRITT 4 – Möbel & Inventar

Gruppiert nach Zimmern. Nutzer wählt Anzahl per +/- Button (0 ist Standard).

#### Schlafzimmer
| Möbelstück | Typ |
|------------|-----|
| Bett Einzeln (90cm) | Zähler |
| Bett Doppel (140–180cm) | Zähler |
| Boxspringbett | Zähler |
| Kleiderschrank klein (bis 1m) | Zähler |
| Kleiderschrank mittel (1–2m) | Zähler |
| Kleiderschrank groß (über 2m) | Zähler |
| Begehbarer Kleiderschrank | Zähler |
| Kommode | Zähler |
| Nachttisch | Zähler |
| Spiegel groß (über 1m) | Zähler |
| Matratze (extra, nicht im Bett) | Zähler |

#### Wohnzimmer
| Möbelstück | Typ |
|------------|-----|
| Sofa 2-Sitzer | Zähler |
| Sofa 3-Sitzer | Zähler |
| Sofa L-Form | Zähler |
| Sessel | Zähler |
| Couchtisch | Zähler |
| TV-Möbel / Sideboard | Zähler |
| Regal (bis 1m Höhe) | Zähler |
| Regal (über 1m Höhe) | Zähler |
| Vitrine | Zähler |
| Teppich groß (über 4m²) | Zähler |

#### Küche
| Feld | Typ | Optionen |
|------|-----|----------|
| Küche vorhanden? | Radio | Ja (Abbau + Aufbau nötig) / Nein |
| Küchenzeile (Laufmeter) | Dropdown | bis 2m / 2–3m / 3–4m / über 4m |
| Kühlschrank | Dropdown | Keiner / Standard / Side-by-Side |
| Herd | Radio | Einbau / Freistehend / Keiner |
| Geschirrspüler | Radio | Einbau / Freistehend / Keiner |
| Waschmaschine | Zähler | |
| Trockner | Zähler | |

#### Arbeitszimmer / Sonstiges
| Möbelstück | Typ |
|------------|-----|
| Schreibtisch normal | Zähler |
| Eck-Schreibtisch | Zähler |
| Bürostuhl | Zähler |
| Bücherregal / Aktenregal | Zähler |
| Drucker / Gerät | Zähler |

#### Keller / Garage
| Möbelstück | Typ |
|------------|-----|
| Fahrrad | Zähler |
| E-Bike | Zähler |
| Motorrad / Roller | Zähler |
| Werkzeugschrank | Zähler |
| Kellerregal | Zähler |
| Gartengeräte (Menge) | Dropdown | Wenig (1–5 Teile) / Mittel / Viel |

#### Sperrgut & Besonderes
| Feld | Typ |
|------|-----|
| Klavier | Zähler |
| Flügel | Zähler |
| Safe / Tresor (über 50kg) | Zähler |
| Aquarium (über 200 Liter) | Zähler |
| Kunstgegenstände / Antikes | Checkbox + Freitext |

#### Umzugskartons
| Feld | Typ | Hinweis |
|------|-----|---------|
| Umzugskartons Standard | Zähler | ca. 0,06 m³ pro Karton |
| Umzugskartons Bücher (klein) | Zähler | |
| Hängekartons / Kleiderkisten | Zähler | |
| Spezialkartons (Geschirr, Spiegel) | Zähler | |

---

### SCHRITT 5 – Zusatzleistungen

Alle als Checkbox. Standard: nicht ausgewählt.

| Leistung | Zuschlag-Kategorie |
|----------|--------------------|
| Einpackservice (alles) | Hoch |
| Einpackservice (nur Küche / Porzellan) | Mittel |
| Auspackservice am Zielort | Mittel |
| Möbelabbau & Aufbau | Mittel |
| Küche demontieren & montieren | Hoch |
| Elektrogeräte ab-/anklemmen (Waschmaschine etc.) | Gering |
| Halteverbotsschild beantragen (Service) | Gering |
| Verpackungsmaterial liefern (Kartons, Folie, Decken) | Gering–Mittel |
| Entrümpelung vor dem Umzug | Hoch |
| Zwischenlagerung (Anzahl Tage + geschätzte m³) | Variabel |
| Reinigung alte Wohnung | Mittel |
| Möbellift / Kran (bei engen Treppenhäusern) | Hoch |
| Transportversicherung | Gering |

---

### SCHRITT 6 – Zusammenfassung & Bestätigung

- Alle Eingaben übersichtlich angezeigt
- "Zurück"-Button für Korrekturen
- Hinweistext: "Der Richtwert ist unverbindlich und basiert auf regionalen Durchschnittswerten."
- DSGVO-Hinweis: "Wir speichern keine deiner Umzugsdaten."
- Checkbox: "Ich habe die AGB und Datenschutzerklärung gelesen."
- Button: **"Jetzt für 2,99 € berechnen"** → weiter zu Payment

---

## 5. KALKULATIONSENGINE (Backend)

### Preismatrix-Struktur (JSON)

Die Preismatrix liegt als statische JSON-Datei im Backend. Sie wird von Atlas MKK (oder anderen Partnern) befüllt und kann jederzeit aktualisiert werden, ohne Code-Änderungen.

```json
{
  "version": "1.0",
  "last_updated": "2026-04",
  "regions": {
    "HE": {
      "name": "Hessen",
      "stundensatz_helfer": 45,
      "lkw_grundpauschale": 120,
      "km_pauschale": 0.90,
      "mindestauftrag": 300
    },
    "DEFAULT": {
      "stundensatz_helfer": 42,
      "lkw_grundpauschale": 110,
      "km_pauschale": 0.85,
      "mindestauftrag": 280
    }
  },
  "moebel_zeitwerte_minuten": {
    "bett_einzel": 20,
    "bett_doppel": 30,
    "boxspringbett": 45,
    "kleiderschrank_klein": 25,
    "kleiderschrank_mittel": 35,
    "kleiderschrank_gross": 50,
    "kleiderschrank_begehbar": 90,
    "kommode": 15,
    "sofa_2sitzer": 25,
    "sofa_3sitzer": 35,
    "sofa_l_form": 60,
    "kuehlschrank_standard": 20,
    "kuehlschrank_sidebyside": 40,
    "waschmaschine": 20,
    "trockner": 20,
    "schreibtisch_normal": 20,
    "schreibtisch_eck": 40,
    "klavier": 120,
    "fluegel": 180,
    "safe_schwer": 60,
    "aquarium_gross": 90,
    "karton_standard": 3,
    "karton_buch": 3,
    "haengekarton": 5,
    "fahrrad": 10,
    "ebike": 15
  },
  "zuschlage": {
    "etage_ohne_aufzug_pro_etage": 0.08,
    "enger_treppenflur": 0.05,
    "parkentfernung_10_30m": 0.05,
    "parkentfernung_30_50m": 0.10,
    "parkentfernung_50plus": 0.18,
    "samstag": 0.10,
    "sonntag_feiertag": 0.25,
    "altbau": 0.05
  },
  "zusatzleistungen": {
    "einpackservice_komplett": 0.35,
    "einpackservice_teilweise": 0.15,
    "auspackservice": 0.15,
    "moebelmontage": 0.20,
    "kueche_demontage_montage": 350,
    "elektrogeraete_anschluss": 60,
    "halteverbot_beantragen": 80,
    "verpackungsmaterial_lieferung": 0.08,
    "entruempelung_pro_m3": 40,
    "zwischenlagerung_pro_tag_pro_m3": 2.50,
    "reinigung_alte_wohnung": 200,
    "moebellift": 250,
    "transportversicherung_promille": 2.5
  },
  "kueche_laufmeter": {
    "bis_2m": 150,
    "2_3m": 250,
    "3_4m": 350,
    "ueber_4m": 500
  },
  "puffer_prozent": 15,
  "anzahl_helfer_basis": 2
}
```

### Berechnungslogik (Pseudocode)

```
1. Basis-Zeitaufwand:
   - Für jedes Möbelstück: Anzahl × Zeitwert_in_Minuten
   - Für Kartons: Anzahl × 3 Minuten
   - Summe = Gesamt-Minuten

2. Helfer-Stunden:
   - Helfer = 2 (Standard), bei großem Volumen: 3
   - Zeitaufwand_Stunden = Gesamt_Minuten / 60 / Helfer
   - Mindestzeit = 3 Stunden

3. Basispreis:
   - Stundenlohn = Zeitaufwand_Stunden × Stundensatz × Helfer
   - LKW-Pauschale addieren
   - Distanzkosten = km × km_pauschale

4. Zuschläge (multiplikativ auf Stundenlohn):
   - Etage A ohne Aufzug: × (1 + Etage×0.08)
   - Etage B ohne Aufzug: × (1 + Etage×0.08)
   - Sonstige Zuschläge addieren

5. Zusatzleistungen:
   - Prozentuale Aufschläge auf Basispreis
   - Fixbeträge direkt addieren

6. Korridor berechnen:
   - Netto = Gesamtpreis
   - Anzeige: Netto × 0.90 bis Netto × 1.15
   - Beide Werte auf 50 € runden

7. Sicherheits-Puffer:
   - +15% auf Mittelwert (im Korridor bereits enthalten)

8. Mindestpreis:
   - Korridor-Untergrenze nie unter Mindestauftrag (z.B. 280 €)
```

---

## 6. PAYMENT-INTEGRATION (Stripe)

```javascript
// Stripe One-Time Payment Flow
// 1. Nutzer klickt "Jetzt für 2,99 € berechnen"
// 2. Frontend sendet Formular-Daten an Backend (POST /api/create-session)
// 3. Backend erstellt Stripe Checkout Session
// 4. Redirect zu Stripe Hosted Checkout
// 5. Nach Zahlung: Redirect zu /ergebnis?session_id=XYZ
// 6. Backend verifiziert session_id via Stripe API
// 7. Berechnung wird durchgeführt, Ergebnis zurückgegeben
// 8. Formular-Daten werden nach Berechnung verworfen (nicht gespeichert)

// Stripe Produkt:
// Name: "Umzugskostenberechnung"
// Preis: 2,99 EUR (einmalig)
// Währung: EUR

// Gespeichert wird NUR:
// - Stripe Payment Intent ID (für Buchhaltung)
// - Zeitstempel
// - Bundesland (anonymisiert für Statistik)
// NICHT gespeichert: Möbelliste, Adressen, Namen
```

---

## 7. GEOLOCATION & PARTNER-BANNER

```javascript
// Bundesland-Erkennung
// Option A (einfacher): Cloudflare Header "CF-IPCountry" + "CF-Region"
// Option B: ipapi.co API (kostenlos bis 1.000 Requests/Tag)

// Bundesland-Mapping
const BUNDESLAENDER = {
  "HE": "Hessen",
  "BY": "Bayern",
  "NW": "Nordrhein-Westfalen",
  "BW": "Baden-Württemberg",
  "BE": "Berlin",
  "HH": "Hamburg",
  "NI": "Niedersachsen",
  "SN": "Sachsen",
  "ST": "Sachsen-Anhalt",
  "TH": "Thüringen",
  "RP": "Rheinland-Pfalz",
  "SH": "Schleswig-Holstein",
  "BB": "Brandenburg",
  "MV": "Mecklenburg-Vorpommern",
  "SL": "Saarland",
  "HB": "Bremen"
};

// Partner-Konfiguration (JSON, erweiterbar)
const PARTNER = {
  "HE": {
    name: "Atlas MKK",
    logo_url: "/assets/partner/atlas-mkk.png",
    url: "https://atlas-mkk.de/?ref=meinumzugsrechner",
    slogan: "Ihr Umzugsprofi in Hessen"
  },
  "DEFAULT": {
    name: null,
    // Kein Partner → eigene Werbung oder leer
  }
};

// Banner wird NUR auf der Ergebnisseite angezeigt
// IP-Adresse wird nicht gespeichert
```

---

## 8. DESIGN & UI

### Farben (eigenes CI – NICHT 360ai CI verwenden)
meinumzugsrechner.com bekommt ein **eigenes CI**, das vertrauenswürdig und neutral wirkt.

```css
:root {
  --primary:    #1E3A5F;   /* Dunkelblau – Vertrauen, Seriosität */
  --accent:     #FF6B35;   /* Orange – CTA-Buttons, Highlights */
  --bg:         #FFFFFF;
  --bg-soft:    #F7F9FC;
  --text:       #1A1A2E;
  --text-muted: #6B7080;
  --success:    #2ECC71;
  --font:       'Inter', sans-serif;
}
```

### UI-Anforderungen
- Mobile-first (Mehrheit der Nutzer kommt vom Handy)
- Fortschrittsanzeige im Formular (Schritt X von 6)
- Zähler-Buttons für Möbel: großer +/– Button (Touch-freundlich)
- Zwischenspeicherung im LocalStorage (damit Nutzer nicht alles neu eingeben muss bei Reload)
- Animierter Lade-Screen während Berechnung ("Wird berechnet...")
- Ergebnis-Screen: Preiskorridor groß und prominent, Hinweis-Text klein darunter
- Trust-Badges auf Ergebnis-Seite: "Keine Datenweitergabe", "SSL verschlüsselt", "Ohne Anmeldung"

### Pflicht-Seiten (statisch, aber vorhanden)
- `/impressum` – Denis Schmidt, 360ai, Adresse, Kontakt
- `/datenschutz` – DSGVO-konforme Erklärung (Stripe als Auftragsverarbeiter erwähnen)
- `/agb` – Nutzungsbedingungen, Hinweis Unverbindlichkeit des Richtwerts
- `/ueber-uns` – Kurze Projektbeschreibung, kein Lead-Verkauf, Transparenz

---

## 9. DSGVO & DATENSCHUTZ (technische Umsetzung)

```
✅ Kein Tracking-Cookie ohne Einwilligung (Cookie-Banner implementieren)
✅ Kein Google Analytics im MVP (alternativ: Plausible.io als datenschutzkonformes Alternative)
✅ Keine Speicherung von Umzugsdaten nach Berechnung
✅ Keine Weitergabe an Dritte (außer Stripe als Zahlungsdienstleister)
✅ Stripe AVV (Auftragsverarbeitungsvertrag) wird über Stripe Dashboard akzeptiert
✅ IP-Adresse nur für Geolocation im Request, nicht geloggt
✅ HTTPS überall (Cloudflare SSL)
✅ Kontaktformular: falls vorhanden, E-Mails nicht auf Servern speichern
✅ Impressum und Datenschutzerklärung in Footer jeder Seite
```

---

## 10. PROJEKTPHASEN FÜR CLAUDE CODE

### Phase 1 – MVP (Kernfunktion)
```
[x] Projektstruktur anlegen (Next.js + Tailwind)
[x] Schritt-für-Schritt Formular (Schritte 1–6)
[x] Preismatrix JSON anlegen (mit Platzhalter-Werten, später mit Atlas MKK befüllen)
[x] Kalkulationsengine (API Route /api/calculate)
[x] Stripe Integration (Checkout Session + Webhook)
[x] Ergebnis-Seite mit Preiskorridor
[x] Statische Seiten: Impressum, Datenschutz, AGB
[x] Deployment auf Cloudflare Pages / Cloudflare Workers
```

### Phase 2 – Partner & Geo
```
[ ] Geolocation via Cloudflare Header
[ ] Partner-Banner System (JSON-Config)
[ ] Atlas MKK Banner für Hessen
[ ] Admin-Bereich: Preismatrix online bearbeiten (optional, kann auch manuell per JSON sein)
```

### Phase 3 – Optimierung
```
[ ] Google Maps Distance Matrix API (km automatisch berechnen)
[ ] PayPal als zweite Zahlungsoption
[ ] Plausible.io Analytics Integration
[ ] A/B Test: Preispunkt 2,99 vs. 1,99
[ ] SEO-Optimierung (Meta-Tags, structured data)
[ ] Blog / Ratgeber-Bereich (für organischen Traffic)
```

---

## 11. UMGEBUNGSVARIABLEN (.env)

```env
# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...

# Geolocation (falls externe API)
IPAPI_KEY=...

# App
NEXT_PUBLIC_BASE_URL=https://meinumzugsrechner.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Betreiber (für Impressum)
BETREIBER_NAME="Denis Schmidt"
BETREIBER_FIRMA="360ai"
BETREIBER_ORT="Frankenberg (Eder)"
BETREIBER_EMAIL="info@meinumzugsrechner.com"
```

---

## 12. OFFENE PUNKTE (vor Start zu klären)

| Punkt | Status | Aktion |
|-------|--------|--------|
| Preismatrix-Werte | Offen | Gespräch mit Atlas MKK, Tabelle befüllen lassen |
| Domain meinumzugsrechner.com | Prüfen | Registrierung bei Strato / united-domains |
| Stripe Konto | Offen | Anlegen unter 360ai / Denis Schmidt |
| Atlas MKK Logo + Banner | Offen | Nach Gespräch anfordern |
| Impressum-Adresse | Vorhanden | Denis Schmidt, 360ai, Frankenberg (Eder) |
| AGB Umzugsrechner | Offen | Juristischen Text erstellen (KI-Entwurf + Anwalt prüfen) |
| Datenschutzerklärung | Offen | DSGVO-konform, Stripe erwähnen |
| Stripe AVV | Offen | Über Stripe Dashboard akzeptieren |
| PayPal Integration | Phase 2 | Noch nicht für MVP nötig |
| Google Maps API Key | Phase 3 | Noch nicht für MVP nötig |

---

## 13. WICHTIGE HINWEISE FÜR CLAUDE CODE

1. **Niemals echte Stripe Keys im Code hardcoden** – immer über .env
2. **Umzugsdaten nach Berechnung verwerfen** – kein Speichern in DB
3. **Preismatrix als externe JSON-Datei** – nicht hardcoded im Code
4. **Mobile first** – alle Touch-Elemente mindestens 44px groß
5. **Formular-State in LocalStorage zwischenspeichern** – Nutzer verliert nichts bei Reload
6. **Ergebnis-Seite nur nach erfolgreicher Stripe-Zahlung zugänglich** – Session-Token prüfen
7. **Kein Google Analytics** – datenschutzkonform (Plausible.io oder nichts)
8. **Stripe Webhook implementieren** – nicht nur redirect-based (Zahlung serverseitig bestätigen)
9. **Bundesland-Korridor**: Wenn Geolocation fehlschlägt → DEFAULT-Region verwenden, kein Fehler
10. **Preiskorridor-Rundung**: Immer auf nächste 50 € runden, nie krumme Zahlen ausgeben

---

## ANHANG A – Beispielberechnung (für Tests)

```
Eingabe:
- Gebäude A: Frankfurt, 3. OG, kein Aufzug, Parkentfernung 10–30m
- Gebäude B: Wiesbaden, 1. OG, Aufzug vorhanden
- Distanz: 42 km
- Termin: Samstag
- Möbel: 1 Doppelbett, 2 Kleiderschränke groß, 1 Sofa 3-Sitzer, 1 Küche 2–3m,
          1 Kühlschrank Standard, 1 Waschmaschine, 20 Standardkartons
- Zusatz: Verpackungsmaterial liefern

Erwarteter Korridor (ca.): 850 – 1.150 €
```

---

## ANHANG B – Dateistruktur (empfohlen)

```
meinumzugsrechner/
├── app/
│   ├── page.tsx                 # Landingpage
│   ├── rechner/
│   │   └── page.tsx             # Formular (Schritt-Stepper)
│   ├── zahlung/
│   │   └── page.tsx             # Stripe Checkout Redirect
│   ├── ergebnis/
│   │   └── page.tsx             # Ergebnis-Seite
│   ├── impressum/page.tsx
│   ├── datenschutz/page.tsx
│   └── agb/page.tsx
├── components/
│   ├── Stepper.tsx
│   ├── MoebelZaehler.tsx
│   ├── PartnerBanner.tsx
│   ├── ErgebnisKorridor.tsx
│   └── TrustBadges.tsx
├── lib/
│   ├── calculate.ts             # Kalkulationsengine
│   ├── geo.ts                   # Geolocation-Logik
│   └── partner.ts               # Partner-Mapping
├── data/
│   └── preismatrix.json         # Preise (von Atlas MKK befüllt)
├── api/
│   ├── calculate/route.ts       # POST: Berechnung
│   ├── create-session/route.ts  # POST: Stripe Session
│   └── webhook/route.ts         # POST: Stripe Webhook
└── public/
    └── assets/partner/          # Partner-Logos
```

---

*Dokument erstellt von Denis Schmidt / 360ai – April 2026*  
*Für Rückfragen: info@meinumzugsrechner.com*
