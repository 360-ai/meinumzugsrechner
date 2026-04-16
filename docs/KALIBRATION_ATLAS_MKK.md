# Kalibrierung & Workshop (Atlas MKK)

## Ziel

Abgleich der `data/preismatrix.json` mit realen regionalen Stundensätzen, Mindestaufträgen und Zuschlägen aus der Praxis.

## Checkliste Workshop

1. **Region HE (Pilot):** `stundensatz_helfer`, `lkw_grundpauschale`, `km_pauschale`, `mindestauftrag` validieren.
2. **Zeitmatrix:** `moebel_zeitwerte_minuten` für häufige Items (Schränke, Sofa, Kartons) feinjustieren.
3. **Zuschläge:** Etage ohne Aufzug, enge Treppenhäuser, Parkentfernung, Wochenend-Zuschläge – empirisch plausibel?
4. **Zusatzleistungen:** Fixpreise (Küche, Möbellift) und Prozentaufschläge (Einpacken) gegen Angebotsbeispiele.
5. **Testszenario (Briefing Anhang A):** Frankfurt → Wiesbaden, 42 km, Samstag, Beispielmöbel → Zielkorridor ca. 850–1.150 € nach Kalibrierung.

## Plausibilitätstests

- Sehr kleiner Umzug (wenig Inventar, kurze Distanz): Mindestauftrag greift.
- Großer Umzug + Zwischenlagerung: Zwischenlager-Term addiert sich sinnvoll.
- Sonntag / Samstag: sichtbarer Zuschlag im Ergebnis (Meta-Ansicht auf der Ergebnisseite).

## Nach dem Workshop

- Version und `last_updated` in `preismatrix.json` anpassen.
- Optional: Changelog-Eintrag im Repository.
