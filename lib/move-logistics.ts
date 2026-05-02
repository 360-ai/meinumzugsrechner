import { estimateVolumeFromQuickInput } from "./shared-constants";
import type { HaushaltGroesse } from "./types";

export type TruckLicenseClass = "B" | "C1" | "C";

export type MovingTruck = {
  name: string;
  m3: number;
  fsk: TruckLicenseClass;
  color: string;
  label: string;
  example: string;
};

export type TruckTripEstimate = {
  truck: MovingTruck;
  fahrten: number;
  fitsOneTrip: boolean;
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

export type QuickVolumeInput = {
  wohnflaecheM2: number;
  zimmer: number;
  haushaltGroesse: HaushaltGroesse;
};

export const MAX_ROOM_SELECTION = 15;

export const MOVING_TRUCKS: MovingTruck[] = [
  {
    name: "Sprinter",
    m3: 10,
    fsk: "B",
    color: "#5A7A8A",
    label: "bis 1-Zi.-Wohnung",
    example: "Studio, Single-Haushalt",
  },
  {
    name: "Transporter 3,5t",
    m3: 16,
    fsk: "B",
    color: "#0088CC",
    label: "1-2-Zi.-Wohnung",
    example: "Paar oder kleiner Haushalt",
  },
  {
    name: "LKW 7,5t",
    m3: 30,
    fsk: "C1",
    color: "#FF7700",
    label: "2-3-Zi.-Wohnung",
    example: "Familie, mehr Möbel",
  },
  {
    name: "LKW 12t",
    m3: 45,
    fsk: "C",
    color: "#0D2137",
    label: "3-4-Zi.-Wohnung",
    example: "Großer Haushalt",
  },
];

// Haushalt-Faktoren jetzt zentral in shared-constants.ts

const ROOM_VOLUME_M3: Record<number, number> = {
  1: 8,
  2: 16,
  3: 28,
  4: 38,
  5: 50,
  6: 65,
};

function normalizeVolume(volumenM3: number): number {
  return Math.max(1, Math.round(volumenM3));
}

export function estimateTruckTrips(volumenM3: number): TruckTripEstimate[] {
  const volume = normalizeVolume(volumenM3);
  return MOVING_TRUCKS.map((truck) => {
    const fahrten = Math.max(1, Math.ceil(volume / truck.m3));
    return {
      truck,
      fahrten,
      fitsOneTrip: fahrten === 1,
    };
  });
}

function vehicleLabelForVolume(volumenM3: number): string {
  const estimates = estimateTruckTrips(volumenM3);
  const oneTripTruck = estimates.find((entry) => entry.fitsOneTrip)?.truck;
  const smallerTruck = [...estimates]
    .reverse()
    .find((entry) => !entry.fitsOneTrip && entry.fahrten === 2)?.truck;

  if (oneTripTruck && smallerTruck) {
    return `1x ${oneTripTruck.name} oder 2x ${smallerTruck.name}`;
  }

  if (oneTripTruck) {
    return `1x ${oneTripTruck.name}`;
  }

  const largest = estimates[estimates.length - 1];
  return `${largest.fahrten}x ${largest.truck.name} oder Profi-Planung`;
}

export function estimateRoomVolume(zimmer: number): number {
  const rooms = Math.max(1, Math.round(zimmer));
  if (ROOM_VOLUME_M3[rooms]) return ROOM_VOLUME_M3[rooms];

  const extraRooms = rooms - 6;
  const raw = ROOM_VOLUME_M3[6] + extraRooms * 11;
  return Math.round(raw * 10) / 10;
}

export function estimateQuickMoveVolume(input: QuickVolumeInput): number {
  return estimateVolumeFromQuickInput(input.wohnflaecheM2, input.zimmer, input.haushaltGroesse);
}

export function describeRoomSelection(zimmer: number): RoomSelectionDescription {
  const rooms = Math.max(1, Math.round(zimmer));
  const volumeM3 = estimateRoomVolume(rooms);

  if (rooms <= 1) {
    return {
      volumeM3,
      example: "WG-Zimmer oder kleines Studio",
      details: "Bett, Schreibtisch, wenige Regale und ca. 15-30 Kartons",
    };
  }

  if (rooms === 2) {
    return {
      volumeM3,
      example: "Single- oder Paar-Haushalt",
      details: "Wohn-/Schlafbereich, Küche, erste größere Möbel und ca. 30-45 Kartons",
    };
  }

  if (rooms === 3) {
    return {
      volumeM3,
      example: "klassische 3-Zimmer-Wohnung",
      details: "Wohnzimmer, Schlafzimmer, Büro/Kinderzimmer und ca. 45-65 Kartons",
    };
  }

  if (rooms === 4) {
    return {
      volumeM3,
      example: "Familienwohnung mit mehreren Schränken",
      details: "Wohnzimmer, Schlafzimmer, 1-2 Kinder-/Arbeitszimmer, Keller oft relevant",
    };
  }

  if (rooms === 5) {
    return {
      volumeM3,
      example: "große Wohnung oder kleines Haus",
      details: "Mehrere Schlaf-/Arbeitszimmer, viel Stauraum und ca. 80-110 Kartons",
    };
  }

  if (rooms <= 8) {
    return {
      volumeM3,
      example: "Haus oder sehr großer Haushalt",
      details: "Viele Möbel, Keller/Garage/Garten möglich und oft 110+ Kartons",
    };
  }

  return {
    volumeM3,
    example: "großes Haus mit vielen Räumen",
    details: "Mehrere Etagen, Sonderflächen und sehr viel Inventar sollten detailliert aufgenommen werden",
  };
}

export function describeVolume(volumenM3: number): VolumeDescription {
  const volume = normalizeVolume(volumenM3);
  const vehicleLabel = vehicleLabelForVolume(volume);

  if (volume <= 10) {
    return {
      bandLabel: "WG-Zimmer oder kleines Studio",
      cartonRange: "ca. 15-30 Kartons plus wenige Möbel",
      vehicleLabel,
      note: "Meist überschaubar, aber sperrige Einzelstücke können trotzdem mehr Platz brauchen.",
    };
  }

  if (volume <= 18) {
    return {
      bandLabel: "1-Zimmer-Wohnung",
      cartonRange: "ca. 30-45 Kartons plus Möbel",
      vehicleLabel,
      note: "Typisch für einen Single-Haushalt mit normaler Möblierung.",
    };
  }

  if (volume <= 28) {
    return {
      bandLabel: "2-Zimmer-Wohnung",
      cartonRange: "ca. 45-65 Kartons plus Möbel",
      vehicleLabel,
      note: "Passt häufig zu einem Paar-Haushalt oder einer gut gefüllten kleineren Wohnung.",
    };
  }

  if (volume <= 40) {
    return {
      bandLabel: "3-Zimmer-Wohnung",
      cartonRange: "ca. 65-80 Kartons plus Möbel",
      vehicleLabel,
      note: "Typischer Bereich für kleine Familien oder Haushalte mit mehreren großen Möbeln.",
    };
  }

  if (volume <= 55) {
    return {
      bandLabel: "4-Zimmer-Wohnung",
      cartonRange: "ca. 80-110 Kartons plus Möbel",
      vehicleLabel,
      note: "Hier werden Keller, Kinderzimmer oder Homeoffice beim Platzbedarf schnell relevant.",
    };
  }

  if (volume <= 70) {
    return {
      bandLabel: "Haus oder 5+ Zimmer",
      cartonRange: "ca. 110-140 Kartons plus Möbel",
      vehicleLabel,
      note: "Bei Haus, Garage oder Garten lohnt sich meist eine genauere Inventaraufnahme.",
    };
  }

  return {
    bandLabel: "großes Haus mit viel Inventar",
    cartonRange: "ca. 140+ Kartons plus Möbel",
    vehicleLabel,
    note: "Das ist ein großer Umzug; Sonderflächen wie Keller, Dachboden und Garage sollten genau geprüft werden.",
  };
}
