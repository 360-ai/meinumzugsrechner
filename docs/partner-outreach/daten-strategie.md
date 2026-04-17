# Strategie: Umgang mit zurückkommenden Partnerdaten

## Problem
Die Firmen werden unterschiedliche Formate liefern:
- `100` / `100 €` / `100,00 €` / `100.00` / `ca. 100 €` / `100 pro m³` / `100 € je Möbelstück`
- Manche füllen alles aus, manche nur die Hälfte
- Manche schreiben Freitext statt Zahlen

## Empfohlener Workflow

### Schritt 1 — Rohdaten sammeln
Eine einfache Tracking-Tabelle (Excel / Google Sheets) anlegen:

| Firma | Stadt | Datum | Status | Antwort erhalten | Notizen |
|-------|-------|-------|--------|-----------------|---------|
| Müller GmbH | Berlin | 17.04. | Gesendet | - | - |
| ... | | | | | |

Status-Werte: `Gesendet` → `Antwort erhalten` → `Auswertung` → `Aktiviert`

---

### Schritt 2 — Auswertung pro Antwort
Für jede Antwort eine eigene Zeile in einem zweiten Sheet:

| Firma | Stadt | Kalkbasis | Stundensatz Helfer | Stundensatz Fahrzeug | Pauschale 2-Zi | Pauschale 3-Zi | Aufpreis Etage | Rabatt Plattform | Fotos nötig |
|-------|-------|-----------|-------------------|---------------------|----------------|----------------|----------------|-----------------|-------------|

**Normalisierung — Regel für unklare Angaben:**
- `ca. 100` → als `100` eintragen, in Notizen-Spalte `ca.` vermerken
- `100–150` → Mittelwert `125` + beide Werte in Notizen
- `auf Anfrage` → `NaN` / leer lassen, in Notizen markieren
- `100 € / m³` und `100 pro m³` → beides als `100` in die m³-Spalte
- `35 € / Stunde pro Helfer` → `35` in Stundensatz-Spalte

---

### Schritt 3 — Kalibrierung der Preismatrix
Wenn mind. 5–8 Antworten vorliegen:

1. Median-Werte pro Kategorie berechnen (Median ist robuster als Durchschnitt bei wenigen Werten)
2. Ausreißer nach oben/unten prüfen (z. B. Luxus-Anbieter herausfiltern)
3. Regionale Unterschiede beachten: München/Hamburg typisch 20–30 % teurer als Sachsen/Thüringen

**Vorläufige Anpassung:** die `data/preismatrix.json` hat bereits Werte —
diese nach der Auswertung gezielt updaten (Stundensätze, m³-Preise, Aufpreise).

---

### Schritt 4 — Daten im Code hinterlegen
Nach der Kalibrierung:
- `data/preismatrix.json` — Basispreise pro Region / Bundesland
- `data/partners.json` — Partnerfirmen mit Profildaten (keine Preisdetails öffentlich)

Die detaillierten Preisdaten der Firmen **nicht** in die App übernehmen — nur zur internen Kalibrierung nutzen.

---

## Zeitplan Empfehlung

| Wann | Was |
|------|-----|
| April–Mai 2026 | Anschreiben rausschicken, Fragebogen einsammeln |
| Mai 2026 | Auswertung, Preismatrix kalibrieren |
| Juni 2026 | Launch mit kalibrierten Werten, Gründungspartner aktivieren |
| September 2026 | Ende der kostenlosen Phase → Abo-Umstellung |
| Oktober 2026 | Preismodelle kommunizieren (30 % Rabatt für Gründungspartner) |

---

## Preismodell-Gedanken (noch nicht festgelegt)

Drei mögliche Abo-Tiers:

| Tier | Inhalt | Preis-Idee |
|------|--------|------------|
| Basic | Profil + Anfragen ohne Ranking-Boost | ~19 €/Monat |
| Plus | Ranking-Boost, Statistiken, mehr Regionen | ~39 €/Monat |
| Premium | Exklusiv-Platzierung, Banner, Analytics | ~79 €/Monat |

Gründungspartner: immer 30 % auf das gewählte Tier → ~13 / 27 / 55 €/Monat

**Empfehlung:** Erst nach 3 Monaten Testbetrieb entscheiden — dann weißt du welche Features die Firmen tatsächlich nutzen und was ihnen etwas wert ist.
