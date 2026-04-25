"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "umzug-checkliste-v1";

interface CheckItem {
  id: string;
  label: string;
  text: string;
}

interface Phase {
  title: string;
  subtitle: string;
  color: string;
  badge: string;
  items: CheckItem[];
}

const PHASES: Phase[] = [
  {
    title: "8 Wochen vorher",
    subtitle: "Planung & Kündigung",
    color: "#0088CC",
    badge: "8 Wo.",
    items: [
      { id: "p1-datum", label: "Umzugsdatum festlegen", text: "Termin mit allen Beteiligten abstimmen — Urlaub beantragen, Helfer vorwarnen, Umzugsfirma-Verfügbarkeit prüfen." },
      { id: "p1-kuendigung", label: "Mietvertrag kündigen", text: "Kündigungsfrist beachten: gesetzlich 3 Monate, vertraglich ggf. kürzer. Kündigung schriftlich per Einschreiben, Datum dokumentieren." },
      { id: "p1-kaution", label: "Kaution & Schönheitsreparaturen klären", text: "Mietvertrag prüfen: Was muss renoviert werden? Was nicht? Im Streitfall gilt oft BGH-Rechtsprechung zu unwirksamen Renovierungsklauseln." },
      { id: "p1-budget", label: "Budget festlegen", text: "Kosten erfassen: Umzugsfirma oder LKW, Verpackungsmaterial, Halteverbot, Nachsendeauftrag, eventuelle Renovierung." },
      { id: "p1-angebote", label: "Umzugsfirmen vergleichen", text: "Mindestens 3 Angebote einholen. Auf Vollständigkeit achten: Transportversicherung, Möbelmontage, Halteverbotszone inklusive?" },
      { id: "p1-entruempel", label: "Entrümpeln & aussortieren", text: "Keller, Dachboden, Garage: Was kommt mit? Was wird verkauft, verschenkt oder entsorgt? Weniger transportieren = weniger Kosten." },
      { id: "p1-nachmieter", label: "Nachmieter organisieren", text: "Mit Vermieter abstimmen, ob Nachmietersuche möglich ist — spart ggf. Monate doppelte Miete." },
    ],
  },
  {
    title: "6 Wochen vorher",
    subtitle: "Buchen & Beantragen",
    color: "#FF7700",
    badge: "6 Wo.",
    items: [
      { id: "p2-firma", label: "Umzugsfirma oder LKW buchen", text: "Frühzeitig buchen, besonders für Freitag/Samstag-Termine und Monatsenden — da ist die Nachfrage am höchsten." },
      { id: "p2-nachsendeauftrag", label: "Nachsendeauftrag Deutsche Post", text: "Online unter deutschepost.de einrichten. Kostet ca. 28 € für 6 Monate. Dauert 3–5 Werktage bis zur Aktivierung — nicht zu spät bestellen." },
      { id: "p2-internet", label: "Internet & Telefon ummelden", text: "Anbieter mindestens 4–6 Wochen vorher informieren. Umzugsservice nutzen oder ggf. neuen Vertrag abschließen. Bereitstellungstermin rechtzeitig anfragen." },
      { id: "p2-schule", label: "Schule & Kita informieren", text: "Abmeldebestätigung anfordern, neue Einrichtung recherchieren und anmelden. Wartelisten in beliebten Kitas können lang sein." },
      { id: "p2-halteverbot", label: "Halteverbotszone beantragen", text: "Beim Ordnungsamt der Gemeinde beantragen — mindestens 1 Woche Vorlauf einplanen. Kostet ca. 30–80 €. Für alte und neue Adresse prüfen." },
      { id: "p2-material", label: "Verpackungsmaterial beschaffen", text: "Kartons (neue oder gebrauchte), Klebeband, Seidenpapier, Luftpolsterfolie, Möbeldecken, Stretchfolie, Marker. Kleiderboxen für Hängendes." },
      { id: "p2-grundriss", label: "Grundriss der neuen Wohnung planen", text: "Möbel ausmessen, Raumplan skizzieren. Vor dem Einzug klären: Was passt wo? Was muss zerlegt werden?" },
    ],
  },
  {
    title: "4 Wochen vorher",
    subtitle: "Adressänderungen & Ummeldungen",
    color: "#0088CC",
    badge: "4 Wo.",
    items: [
      { id: "p3-arbeitgeber", label: "Arbeitgeber / Personalabteilung", text: "Neue Adresse für Lohnunterlagen und Korrespondenz mitteilen. Betrifft auch BAV, Betriebliche Altersvorsorge und Reisekostenabrechnungen." },
      { id: "p3-bank", label: "Banken & Kreditkarten", text: "Alle Konten und Kreditkarten aktualisieren — auch Direktbanken, PayPal, Apple Pay, Google Pay und ähnliche Zahlungsdienste." },
      { id: "p3-versicherungen", label: "Versicherungen", text: "Hausratversicherung (neue Fläche angeben!), Haftpflicht, KFZ, Kranken-, Lebens- und Berufsunfähigkeitsversicherung informieren." },
      { id: "p3-finanzamt", label: "Finanzamt", text: "Neue Adresse mitteilen, damit Steuerbescheide ankommen. Zuständiges Finanzamt wechselt bei Umzug in anderen Bezirk." },
      { id: "p3-krankenkasse", label: "Krankenkasse", text: "Adressänderung melden. Neue Ärzte in der Umgebung recherchieren — besonders Hausarzt, Zahnarzt, Kinderarzt, Facharzt." },
      { id: "p3-rentenversicherung", label: "Deutsche Rentenversicherung", text: "Adresse online unter deutscherentenversicherung.de aktualisieren." },
      { id: "p3-gez", label: "ARD ZDF Deutschlandradio Beitragsservice", text: "Online unter beitragsservice.de ummelden. Kostenfrei, aber Pflicht. Neue Adresse gilt für die Rundfunkgebühr." },
      { id: "p3-kfz", label: "KFZ-Ummeldung vorbereiten", text: "Bei Umzug in anderen Landkreis: Fahrzeug ummelden (Zulassungsstelle), neues Kennzeichen ggf. erforderlich. Versicherung über neuen Wohnort informieren." },
      { id: "p3-abonn", label: "Abonnements & Mitgliedschaften", text: "Zeitungen, Magazine, Amazon, Streamingdienste mit Rechnungsadresse, Fitnessstudio, ADAC, VHS, Vereine, Bibliothek." },
      { id: "p3-aerzte", label: "Ärzte & Apotheke", text: "Patientenakten anfordern oder Praxis über Umzug informieren. Dauerrezepte und laufende Therapien rechtzeitig abklären." },
    ],
  },
  {
    title: "2 Wochen vorher",
    subtitle: "Packen & Vorbereiten",
    color: "#FF7700",
    badge: "2 Wo.",
    items: [
      { id: "p4-packen", label: "Mit dem Packen beginnen", text: "Selten benutzte Gegenstände zuerst: Bücher, Saisonkleidung, Deko, Keller. Kartons sofort beschriften: Zimmer + grober Inhalt + Priorität (1 = sofort öffnen)." },
      { id: "p4-wertgegenstaende", label: "Wertgegenstände separat einplanen", text: "Schmuck, Dokumente, Festplatten und Kunstgegenstände nicht in den Umzugs-LKW — persönlich transportieren." },
      { id: "p4-haustier", label: "Haustier vorbereiten", text: "Tierarzt informieren, Microchip-Adresse aktualisieren, neuen Tierarzt suchen. Transportbox eingewöhnen lassen." },
      { id: "p4-pflanzen", label: "Pflanzen vorbereiten", text: "Große Pflanzen in den Wochen davor weniger wässern. Erde vor dem Umzug leicht antrocknen lassen — reduziert Gewicht und verhindert Schimmel." },
      { id: "p4-nachbarn", label: "Nachbarn informieren", text: "Alte Nachbarn über den Umzugstermin informieren, damit Lärm und Blockaden keine Überraschung sind. Neue Adresse ggf. hinterlassen." },
      { id: "p4-schluessel", label: "Schlüssel für neue Wohnung beschaffen", text: "Klären: Wie viele Schlüssel? Keller, Briefkasten, Fahrradraum. Sicherheitsschloss bei Einzug tauschen?" },
      { id: "p4-einzugsprotokoll", label: "Übergabeprotokoll vorbereiten", text: "Vorlage bereithalten, Kamera / Smartphone für Fotodokumentation. Sowohl alte als auch neue Wohnung dokumentieren." },
    ],
  },
  {
    title: "1 Woche vorher",
    subtitle: "Endspurt",
    color: "#0088CC",
    badge: "1 Wo.",
    items: [
      { id: "p5-kuehlschrank", label: "Kühlschrank & Tiefkühler leeren", text: "Kühl- und Gefriergeräte abtauen. Voräte aufbrauchen oder an Nachbarn verschenken. Geräte 24h vorher ausschalten." },
      { id: "p5-survivalkit", label: "Survival-Kit packen", text: "Tasche die nicht in den LKW kommt: Reisepass/Ausweis, Versicherungskarten, Ladekabel, Medikamente, Wechselkleidung für 2 Tage, Hygiene-Basics, Kaffeemaschine oder -pulver." },
      { id: "p5-backup", label: "Datensicherung", text: "Computer, NAS, externe Festplatten: Backup erstellen vor dem Transport. Fotografien und Dokumente in der Cloud sichern." },
      { id: "p5-namensschild", label: "Namensschild an neuer Adresse", text: "Klingelschild und Briefkasten beschriften — sonst kommen Pakete und Post nicht an." },
      { id: "p5-halteverbot-check", label: "Halteverbot bestätigen", text: "Schilder stehen lassen — falls zugeparkt, rechtzeig das Ordnungsamt anrufen." },
      { id: "p5-werkzeug", label: "Werkzeug griffbereit halten", text: "Akkuschrauber, Inbusschlüssel-Set, Hammer — für Möbelmontage sofort nach dem Einzug. Nicht einpacken." },
    ],
  },
  {
    title: "Am Umzugstag",
    subtitle: "Übergabe & Einzug",
    color: "#0D2137",
    badge: "Tag X",
    items: [
      { id: "p6-zaehler-alt", label: "Zählerstände alte Wohnung ablesen", text: "Strom, Gas, Wasser — notieren und vom Vermieter oder Zeugen bestätigen lassen. Fotos machen." },
      { id: "p6-protokoll-alt", label: "Übergabeprotokoll alte Wohnung", text: "Alle Mängel, Beschädigungen und Gebrauchsspuren schriftlich festhalten. Beide Seiten unterschreiben." },
      { id: "p6-schluessel-alt", label: "Schlüssel vollständig übergeben", text: "Alle Schlüssel (inkl. Keller, Briefkasten, Garage) zählen und übergeben. Quittung verlangen." },
      { id: "p6-zaehler-neu", label: "Zählerstände neue Wohnung ablesen", text: "Sofort beim Einzug: Strom, Gas, Wasser dokumentieren — Basis für spätere Abrechnung." },
      { id: "p6-maengel-neu", label: "Mängel neue Wohnung protokollieren", text: "Alle Vorschäden und Mängel sofort fotografieren und im Übergabeprotokoll festhalten. Nachmeldung innerhalb weniger Tage ist in der Regel noch möglich." },
      { id: "p6-heizung", label: "Heizung, Wasser & Strom prüfen", text: "Alles funktionsfähig? Warmwasser, Heizkörper, Lichtschalter, Steckdosen, Türen und Fenster." },
    ],
  },
  {
    title: "Nach dem Umzug",
    subtitle: "Ummeldung & Einleben",
    color: "#0088CC",
    badge: "Danach",
    items: [
      { id: "p7-einwohnermeldeamt", label: "Einwohnermeldeamt — Ummeldung (Pflicht!)", text: "Gesetzliche Pflicht innerhalb von 14 Tagen nach Einzug (in manchen Bundesländern 1 Woche). Personalausweis und Wohnungsgeberbestätigung mitbringen." },
      { id: "p7-kfz-ummeldung", label: "KFZ ummelden", text: "Bei Umzug in anderen Landkreis: Zulassungsstelle aufsuchen. Fahrzeugschein, Personalausweis, eVB-Nummer der Versicherung mitbringen." },
      { id: "p7-hausrat", label: "Hausratversicherung anpassen", text: "Neue Wohnfläche und Adresse melden — sonst besteht im Schadensfall Unterversicherung. Einige Versicherungen bieten automatischen Umzugsschutz für 3 Monate." },
      { id: "p7-online-shops", label: "Online-Shop-Adressen aktualisieren", text: "Amazon, Zalando, eBay, Apotheke, Lebensmittellieferung, sonstige Lieferdienste — neue Standardadresse setzen." },
      { id: "p7-notruf", label: "Neue Notfallkontakte speichern", text: "Nächstgelegener Arzt, Apotheke, Krankenhaus, Handwerker-Notdienst. Besonders wichtig mit Kindern oder pflegebedürftigen Personen im Haushalt." },
      { id: "p7-nachbarn", label: "Neue Nachbarn kennenlernen", text: "Kurze Vorstellung — schafft eine gute Grundlage für spätere Anfragen (Paketannahme, Lärm, Gemeinschaftsflächen)." },
      { id: "p7-kaution", label: "Kaution zurückfordern", text: "Alte Kaution schriftlich anfordern. Vermieter hat üblicherweise bis zu 6 Monate Zeit — bei unrechtmäßigen Abzügen kann man widersprechen." },
    ],
  },
];

export function UmzugschecklisteClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {}
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const reset = () => {
    setChecked({});
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const totalItems = PHASES.reduce((acc, p) => acc + p.items.length, 0);
  const doneItems = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((doneItems / totalItems) * 100);

  return (
    <div className="space-y-8">

      {/* Fortschrittsbalken */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-[#0D2137]">{doneItems} von {totalItems} Aufgaben erledigt</span>
          <span className="font-bold text-[#0088CC]">{progress} %</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: progress === 100 ? "#22c55e" : "#0088CC" }}
          />
        </div>
        {progress === 100 && (
          <p className="mt-3 text-sm font-semibold text-green-600">Alles erledigt — viel Spaß in der neuen Wohnung!</p>
        )}
      </div>

      {/* Phasen */}
      {PHASES.map((phase) => {
        const phaseDone = phase.items.filter((i) => checked[i.id]).length;
        return (
          <div key={phase.title} className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4" style={{ borderLeft: `4px solid ${phase.color}` }}>
              <div
                className="flex h-10 w-14 flex-shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
                style={{ backgroundColor: phase.color }}
              >
                {phase.badge}
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#0D2137]">{phase.title}</p>
                <p className="text-xs text-[#5A7A8A]">{phase.subtitle}</p>
              </div>
              <span className="text-xs font-semibold text-[#5A7A8A]">
                {phaseDone}/{phase.items.length}
              </span>
            </div>

            <ul className="divide-y divide-slate-50 px-4 pb-2">
              {phase.items.map((item) => (
                <li key={item.id} className="flex items-start gap-3 py-3">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors"
                    style={{
                      borderColor: checked[item.id] ? phase.color : "#CBD5E1",
                      backgroundColor: checked[item.id] ? phase.color : "white",
                    }}
                    aria-label={item.label}
                  >
                    {checked[item.id] && (
                      <svg viewBox="0 0 12 10" fill="none" className="h-3 w-3">
                        <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <div className={checked[item.id] ? "opacity-50" : ""}>
                    <p className="text-sm font-semibold text-[#0D2137]">{item.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#5A7A8A]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* Reset */}
      <div className="text-center">
        <button
          type="button"
          onClick={reset}
          className="text-xs text-slate-400 hover:text-slate-600 underline"
        >
          Fortschritt zurücksetzen
        </button>
      </div>
    </div>
  );
}
