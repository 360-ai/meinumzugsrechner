export type HaushaltGroesse = "1" | "2" | "3_4" | "5plus";

export type QuickVolumeInput = {
  wohnflaecheM2: number;
  zimmer: number;
  haushaltGroesse: HaushaltGroesse;
};

export type VolumeDescription = {
  bandLabel: string;
  cartonRange: string;
  vehicleLabel: string;
  note: string;
};

export type RoomSelectionDescription = {
  volumeM3: number;
  example: string;
  details: string;
};

const HOUSEHOLD_VOLUME_FACTOR: Record<HaushaltGroesse, number> = {
  "1": 0.9,
  "2": 1,
  "3_4": 1.15,
  "5plus": 1.3,
};

const HOUSEHOLD_EXTRA_M3: Record<HaushaltGroesse, number> = {
  "1": 0,
  "2": 2,
  "3_4": 5,
  "5plus": 9,
};

export function estimateQuickMoveVolume(input: QuickVolumeInput): number {
  const wohnflaeche = Math.max(10, input.wohnflaecheM2);
  const zimmer = Math.max(1, input.zimmer);
  const householdFactor = HOUSEHOLD_VOLUME_FACTOR[input.haushaltGroesse];
  const householdExtra = HOUSEHOLD_EXTRA_M3[input.haushaltGroesse];

  const areaVolume = wohnflaeche * 0.34;
  const roomVolume = zimmer * 2.2;
  const raw = (areaVolume + roomVolume + householdExtra) * householdFactor;

  return Math.round(Math.min(95, Math.max(6, raw)) * 10) / 10;
}

export function describeRoomSelection(zimmer: number): RoomSelectionDescription {
  if (zimmer <= 1) {
    return {
      volumeM3: 8,
      example: "WG-Zimmer oder kleines Studio",
      details: "Bett, Schreibtisch, wenige Regale und ca. 15-30 Kartons",
    };
  }

  if (zimmer === 2) {
    return {
      volumeM3: 16,
      example: "Single- oder Paar-Haushalt",
      details: "Wohn-/Schlafbereich, Küche, erste größere Möbel und ca. 30-45 Kartons",
    };
  }

  if (zimmer === 3) {
    return {
      volumeM3: 28,
      example: "klassische 3-Zimmer-Wohnung",
      details: "Wohnzimmer, Schlafzimmer, Büro/Kinderzimmer und ca. 45-65 Kartons",
    };
  }

  if (zimmer === 4) {
    return {
      volumeM3: 38,
      example: "Familienwohnung mit mehreren Schränken",
      details: "Wohnzimmer, Schlafzimmer, 1-2 Kinder-/Arbeitszimmer, Keller oft relevant",
    };
  }

  if (zimmer === 5) {
    return {
      volumeM3: 50,
      example: "große Wohnung oder kleines Haus",
      details: "Mehrere Schlaf-/Arbeitszimmer, viel Stauraum und ca. 80-110 Kartons",
    };
  }

  return {
    volumeM3: 65,
    example: "Haus oder sehr großer Haushalt",
    details: "Viele Möbel, Keller/Garage/Garten möglich und oft 110+ Kartons",
  };
}

export function describeVolume(volumenM3: number): VolumeDescription {
  const volume = Math.max(1, Math.round(volumenM3));

  if (volume <= 10) {
    return {
      bandLabel: "WG-Zimmer oder kleines Studio",
      cartonRange: "ca. 15-30 Kartons plus wenige Möbel",
      vehicleLabel: "1x Sprinter",
      note: "Meist überschaubar, aber sperrige Einzelstücke können trotzdem mehr Platz brauchen.",
    };
  }

  if (volume <= 18) {
    return {
      bandLabel: "1-Zimmer-Wohnung",
      cartonRange: "ca. 30-45 Kartons plus Möbel",
      vehicleLabel: "1x Transporter 3,5t",
      note: "Typisch für einen Single-Haushalt mit normaler Möblierung.",
    };
  }

  if (volume <= 28) {
    return {
      bandLabel: "2-Zimmer-Wohnung",
      cartonRange: "ca. 45-65 Kartons plus Möbel",
      vehicleLabel: "1x LKW 7,5t oder 2x Sprinter",
      note: "Passt häufig zu einem Paar-Haushalt oder einer gut gefüllten kleineren Wohnung.",
    };
  }

  if (volume <= 40) {
    return {
      bandLabel: "3-Zimmer-Wohnung",
      cartonRange: "ca. 65-80 Kartons plus Möbel",
      vehicleLabel: "1x LKW 7,5t oder 2x Transporter 3,5t",
      note: "Typischer Bereich für kleine Familien oder Haushalte mit mehreren großen Möbeln.",
    };
  }

  if (volume <= 55) {
    return {
      bandLabel: "4-Zimmer-Wohnung",
      cartonRange: "ca. 80-110 Kartons plus Möbel",
      vehicleLabel: "1x LKW 12t oder 2x LKW 7,5t",
      note: "Hier werden Keller, Kinderzimmer oder Homeoffice beim Platzbedarf schnell relevant.",
    };
  }

  if (volume <= 70) {
    return {
      bandLabel: "Haus oder 5+ Zimmer",
      cartonRange: "ca. 110-140 Kartons plus Möbel",
      vehicleLabel: "1-2x großer LKW",
      note: "Bei Haus, Garage oder Garten lohnt sich meist eine genauere Inventaraufnahme.",
    };
  }

  return {
    bandLabel: "großes Haus mit viel Inventar",
    cartonRange: "ca. 140+ Kartons plus Möbel",
    vehicleLabel: "mehrere LKW-Fahrten oder Sattelzug-Planung",
    note: "Das ist ein großer Umzug; Sonderflächen wie Keller, Dachboden und Garage sollten genau geprüft werden.",
  };
}
