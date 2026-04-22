# Brand Identity & Asset Guide: meinumzugsrechner.com

Dieses Dokument dient als zentrale Referenz für die visuelle Identität von **meinumzugsrechner.com**. Es ist darauf optimiert, von LLMs (wie Claude oder GPT) als Kontext für die Entwicklung von Benutzeroberflächen, Werbemitteln und konsistenten Charakter-Szenarien genutzt zu werden.

## 1. Der Kern-Charakter: "Der Umzugs-Buddy"
Ein anthropomorpher, freundlicher 3D-Roboter, der aus einem Umzugskarton besteht.

### Visuelle Merkmale:
- **Körper:** Ein quadratischer Umzugskarton mit realistischer Wellpappen-Textur. 
    - Obere Hälfte: Kräftiges Blau.
    - Untere Hälfte: Kräftiges Orange.
    - Mittig fixiert mit braunem Paketband.
- **Gesicht:** In die blaue Frontseite geprägt (embossed 3D-Look). Große, freundliche weiße Augen mit blauen Pupillen und ein breites, optimistisches Lächeln.
- **Arme & Beine:** Bestehen aus segmentierter Wellpappe (ähnlich einem Lüftungsrohr-Stil, aber aus Kartonmaterial). Die Gelenke und Manschetten sind in Orange gehalten.
- **Schuhe:** Klassische rote High-Top-Sneaker mit weißen Sohlen und weißen Schnürsenkeln.
- **"Haare" (Kopf-Inhalt):** Aus den offenen oberen Klappen ragen verschiedene Miniatur-Möbelstücke heraus:
    - Ein brauner Sessel / Sofa.
    - Eine blaue und eine gelbe Stehlampe.
    - Ein kleines Bücherregal.
    - Eine grüne Zimmerpflanze.
- **Tool:** Er hält fast immer einen **gelben Taschenrechner** in der Hand (oder dieser liegt griffbereit). 
    - **Display-Wert:** Festgelegt auf `651312`.

## 2. Farbpalette (Brand Colors)
Für CSS-Implementierungen und UI-Design sind folgende Werte zu nutzen:

| Element | Farbe | HEX-Code | Einsatzbereich |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | Vivid Sky Blue | `#0088CC` | Karton oben, Logo-Text (Teil 1) |
| **Primary Orange** | Vibrant Orange | `#FF7700` | Karton unten, Akzente, Logo-Text (Teil 2) |
| **Accent Yellow** | Calculator Yellow | `#FFCC00` | Taschenrechner, CTA-Buttons |
| **Accent Red** | Sneaker Red | `#EE3322` | Schuhe, Warnhinweise |
| **Neutral Brown** | Kraft Paper | `#C5A07D` | Karton-Grundstruktur, Paketband |
| **Background** | Clean White | `#FFFFFF` | Website-Hintergrund |

## 3. Typografie
Das Logo und die UI-Elemente folgen einem modernen, freundlichen Stil.

- **Logo-Schrift:** Eine serifenlose, stark abgerundete Bold-Schrift (ähnlich *VAG Rundschrift* oder *Comfortaa*).
- **Stil:** Alles kleingeschrieben: `meinumzugsrechner.com`.
- **Farbverlauf:** Blau für "mein", Orange für "umzugsrechner", Blau für ".de".

## 4. UI/UX Design-Richtlinien für KI-Prompts
Wenn Code für die Webseite generiert wird, sollten folgende Prinzipien beachtet werden:

1. **Abgerundete Ecken:** Alle Karten, Buttons und Eingabefelder müssen einen hohen `border-radius` (ca. 12px bis 20px) haben, um den "chunky" Look des Charakters zu spiegeln.
2. **3D-Effekte:** Nutzung von sanften Schatten (`box-shadow`) und subtilen Verläufen, um Tiefe zu erzeugen (ähnlich dem 3D-Gloss-Finish des Logos).
3. **Interaktivität:** Buttons sollten beim Hovern leicht skalieren (`transform: scale(1.05)`).
4. **Charakter-Integration:** Der Charakter sollte als "Guide" durch das Formular führen (z.B. oben rechts in der Ecke des Rechners oder als animiertes Lade-Icon).

## 5. Charakter-Konsistenz (Prompting Snippet)
Nutze diesen Textbaustein für die Generierung neuer Bilder:
> "High-contrast 3D character, friendly moving box robot for meinumzugsrechner.com. Body is blue (top) and orange (bottom) cardboard. Head flaps open with miniature furniture (sofa, lamps, plants) peaking out. Cardboard segmented arms and legs. Wearing red high-top sneakers. Holding a yellow calculator showing '651312'. 3D gloss finish, vivid colors, white background, masterpiece quality."

---
*Dokument erstellt für meinumzugsrechner.com - Stand: April 2024*
