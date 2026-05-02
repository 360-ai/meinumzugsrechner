/**
 * Verwandte Ratgeber/Checklisten pro Seite.
 * Keys = Pfad ohne führenden Slash und ohne trailing Slash.
 * Values = Array von bis zu 3 verwandten Pfaden.
 */

type GuideLink = {
  href: string;
  label: string;
};

const ALL_GUIDES: Record<string, GuideLink[]> = {
  "ratgeber/ergonomie": [
    { href: "/ratgeber/profi-guide-verpacken/", label: "Profi-Guide Verpacken" },
    { href: "/ratgeber/sperrgut/", label: "Sperrgut transportieren" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
  ],
  "ratgeber/profi-guide-verpacken": [
    { href: "/ratgeber/ergonomie/", label: "Ergonomie beim Umzug" },
    { href: "/kartonrechner/", label: "Kartonrechner" },
    { href: "/ratgeber/sperrgut/", label: "Sperrgut transportieren" },
  ],
  "ratgeber/selbst-vs-profi": [
    { href: "/ratgeber/umzugshelfer/", label: "Umzugshelfer organisieren" },
    { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen beim Umzug" },
    { href: "/ratgeber/lkw-mieten/", label: "LKW mieten" },
  ],
  "ratgeber/steuerspartipps": [
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
    { href: "/ratgeber/firmenumzug/", label: "Firmenumzug" },
    { href: "/ratgeber/sonderurlaub/", label: "Sonderurlaub beim Umzug" },
  ],
  "ratgeber/haustiere": [
    { href: "/checklisten/umzugscheckliste/", label: "Vollständige Umzugscheckliste" },
    { href: "/ratgeber/ummelden/", label: "Ummelden nach Umzug" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
  ],
  "ratgeber/sonderurlaub": [
    { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen beim Umzug" },
    { href: "/ratgeber/firmenumzug/", label: "Firmenumzug" },
    { href: "/checklisten/umzugs-countdown/", label: "Umzugs-Countdown" },
  ],
  "ratgeber/studentenumzug": [
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
    { href: "/ratgeber/lkw-mieten/", label: "LKW mieten" },
    { href: "/ratgeber/teilumzug/", label: "Teilumzug / Beiladung" },
  ],
  "ratgeber/seniorenumzug": [
    { href: "/ratgeber/wohnungsaufloesung/", label: "Wohnungsauflösung" },
    { href: "/ratgeber/entruempelung/", label: "Entrümpelung vor dem Umzug" },
    { href: "/ratgeber/moebel-einlagern/", label: "Möbel einlagern" },
  ],
  "ratgeber/firmenumzug": [
    { href: "/ratgeber/sonderurlaub/", label: "Sonderurlaub beim Umzug" },
    { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen" },
    { href: "/ratgeber/halteverbot/", label: "Halteverbot beantragen" },
  ],
  "ratgeber/teilumzug": [
    { href: "/ratgeber/sperrgut/", label: "Sperrgut transportieren" },
    { href: "/ratgeber/lkw-mieten/", label: "LKW mieten" },
    { href: "/ratgeber/moebel-einlagern/", label: "Möbel einlagern" },
  ],
  "ratgeber/lkw-mieten": [
    { href: "/lkw-rechner/", label: "LKW-Rechner" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
    { href: "/ratgeber/ergonomie/", label: "Ergonomie beim Umzug" },
  ],
  "ratgeber/sperrgut": [
    { href: "/ratgeber/ergonomie/", label: "Ergonomie beim Umzug" },
    { href: "/ratgeber/profi-guide-verpacken/", label: "Profi-Guide Verpacken" },
    { href: "/ratgeber/teilumzug/", label: "Teilumzug / Beiladung" },
  ],
  "ratgeber/moebel-einlagern": [
    { href: "/ratgeber/entruempelung/", label: "Entrümpelung vor dem Umzug" },
    { href: "/ratgeber/wohnungsaufloesung/", label: "Wohnungsauflösung" },
    { href: "/ratgeber/teilumzug/", label: "Teilumzug / Beiladung" },
  ],
  "ratgeber/entruempelung": [
    { href: "/ratgeber/wohnungsaufloesung/", label: "Wohnungsauflösung" },
    { href: "/ratgeber/seniorenumzug/", label: "Seniorenumzug" },
    { href: "/ratgeber/moebel-einlagern/", label: "Möbel einlagern" },
  ],
  "ratgeber/wohnungsaufloesung": [
    { href: "/ratgeber/entruempelung/", label: "Entrümpelung vor dem Umzug" },
    { href: "/ratgeber/seniorenumzug/", label: "Seniorenumzug" },
    { href: "/ratgeber/moebel-einlagern/", label: "Möbel einlagern" },
  ],
  "ratgeber/halteverbot": [
    { href: "/ratgeber/firmenumzug/", label: "Firmenumzug" },
    { href: "/checklisten/umzugs-countdown/", label: "Umzugs-Countdown" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
  ],
  "ratgeber/nachsendeauftrag": [
    { href: "/ratgeber/ummelden/", label: "Ummelden nach Umzug" },
    { href: "/checklisten/umzugscheckliste/", label: "Vollständige Umzugscheckliste" },
    { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen beim Umzug" },
  ],
  "ratgeber/ummelden": [
    { href: "/ratgeber/nachsendeauftrag/", label: "Nachsendeauftrag bei der Post" },
    { href: "/checklisten/umzugscheckliste/", label: "Vollständige Umzugscheckliste" },
    { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen beim Umzug" },
  ],
  "ratgeber/erste-eigene-wohnung": [
    { href: "/ratgeber/studentenumzug/", label: "Studentenumzug" },
    { href: "/ratgeber/renovierungspflicht/", label: "Renovierungspflicht beim Auszug" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
  ],
  "ratgeber/renovierungspflicht": [
    { href: "/ratgeber/erste-eigene-wohnung/", label: "Erste eigene Wohnung" },
    { href: "/ratgeber/wohnungsaufloesung/", label: "Wohnungsauflösung" },
    { href: "/ratgeber/steuerspartipps/", label: "Steuern sparen beim Umzug" },
  ],
  "ratgeber/umzugsfirma-finden": [
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
    { href: "/ratgeber/halteverbot/", label: "Halteverbot beantragen" },
    { href: "/ratgeber/umzugshelfer/", label: "Umzugshelfer organisieren" },
  ],
  "ratgeber/umzug-mit-kindern": [
    { href: "/ratgeber/haustiere/", label: "Umzug mit Haustieren" },
    { href: "/checklisten/adressaenderung/", label: "Adressänderung beim Umzug" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
  ],
  "ratgeber/umzugshelfer": [
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
    { href: "/ratgeber/ergonomie/", label: "Ergonomie beim Umzug" },
    { href: "/ratgeber/lkw-mieten/", label: "LKW mieten" },
  ],
  "ratgeber/moderne-umzugslogistik": [
    { href: "/ratgeber/firmenumzug/", label: "Firmenumzug" },
    { href: "/ratgeber/selbst-vs-profi/", label: "Selbst oder Profi?" },
    { href: "/ratgeber/profi-guide-verpacken/", label: "Profi-Guide Verpacken" },
  ],
  // Checklisten
  "checklisten/umzugscheckliste": [
    { href: "/checklisten/umzugs-countdown/", label: "Umzugs-Countdown" },
    { href: "/ratgeber/ummelden/", label: "Ummelden nach Umzug" },
    { href: "/ratgeber/halteverbot/", label: "Halteverbot beantragen" },
  ],
  "checklisten/umzugs-countdown": [
    { href: "/checklisten/umzugscheckliste/", label: "Vollständige Umzugscheckliste" },
    { href: "/checklisten/essential-kit/", label: "Essential-Kit für den Umzugstag" },
    { href: "/ratgeber/halteverbot/", label: "Halteverbot beantragen" },
  ],
  "checklisten/essential-kit": [
    { href: "/checklisten/umzugs-countdown/", label: "Umzugs-Countdown" },
    { href: "/ratgeber/profi-guide-verpacken/", label: "Profi-Guide Verpacken" },
    { href: "/ratgeber/ergonomie/", label: "Ergonomie beim Umzug" },
  ],
  "checklisten/standort-vorbereitung": [
    { href: "/checklisten/essential-kit/", label: "Essential-Kit für den Umzugstag" },
    { href: "/checklisten/umzugs-countdown/", label: "Umzugs-Countdown" },
    { href: "/ratgeber/halteverbot/", label: "Halteverbot beantragen" },
  ],
  "checklisten/uebergabeprotokoll": [
    { href: "/ratgeber/renovierungspflicht/", label: "Renovierungspflicht beim Auszug" },
    { href: "/checklisten/umzugscheckliste/", label: "Vollständige Umzugscheckliste" },
    { href: "/ratgeber/erste-eigene-wohnung/", label: "Erste eigene Wohnung" },
  ],
  "checklisten/adressaenderung": [
    { href: "/ratgeber/nachsendeauftrag/", label: "Nachsendeauftrag bei der Post" },
    { href: "/ratgeber/ummelden/", label: "Ummelden nach Umzug" },
    { href: "/checklisten/umzugscheckliste/", label: "Vollständige Umzugscheckliste" },
  ],
};

export function getRelatedGuides(path: string): GuideLink[] {
  const key = path.replace(/^\//, "").replace(/\/$/, "");
  return ALL_GUIDES[key] ?? [];
}
