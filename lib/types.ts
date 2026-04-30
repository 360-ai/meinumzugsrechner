export type BundeslandCode =
  | "BW"
  | "BY"
  | "BE"
  | "BB"
  | "HB"
  | "HH"
  | "HE"
  | "MV"
  | "NI"
  | "NW"
  | "RP"
  | "SL"
  | "SN"
  | "ST"
  | "SH"
  | "TH";

export type EtageKey = "eg" | "1" | "2" | "3" | "4" | "5plus" | "dg";
export type AufzugKey = "ja" | "nein" | "lasten";
export type TreppenKey = "normal" | "eng";
export type ParkKey = "0_10" | "10_30" | "30_50" | "50plus";
export type HalteverbotKey = "ja" | "nein" | "weiss_nicht";
export type GebaeudeTyp = "altbau" | "neubau" | "efh" | "mfh";
export type KuecheLfm = "bis_2m" | "2_3m" | "3_4m" | "ueber_4m";
export type KuehlschrankKey = "keiner" | "standard" | "sidebyside";
export type EinbauKey = "einbau" | "freistehend" | "keiner";
export type GartenMenge = "wenig" | "mittel" | "viel";
export type HaushaltGroesse = "1" | "2" | "3_4" | "5plus";

export interface UmzugFormData {
  buildingA: {
    bundesland: BundeslandCode;
    landkreisAgs: string;
    stadtOrt: string;
    etage: EtageKey;
    aufzug: AufzugKey;
    treppenhaus: TreppenKey;
    parkentfernung: ParkKey;
    halteverbot: HalteverbotKey;
    gebaeudetyp: GebaeudeTyp;
  };
  buildingB: {
    gleicheStadt: boolean;
    bundesland: BundeslandCode;
    landkreisAgs: string;
    stadtOrt: string;
    etage: EtageKey;
    aufzug: AufzugKey;
    treppenhaus: TreppenKey;
    parkentfernung: ParkKey;
    halteverbot: HalteverbotKey;
    gebaeudetyp: GebaeudeTyp;
  };
  distance: {
    km: number;
    umzugsdatum: string;
  };
  inventory: {
    schlafzimmer: Record<string, number>;
    wohnzimmer: Record<string, number>;
    kueche: {
      kueche_vorhanden: "ja" | "nein";
      kueche_laufmeter: KuecheLfm;
      kuehlschrank: KuehlschrankKey;
      herd: EinbauKey;
      geschirrspueler: EinbauKey;
      waschmaschine: number;
      trockner: number;
    };
    buero: Record<string, number>;
    keller: Record<string, number>;
    gartengeraete: GartenMenge;
    sperrgut: {
      klavier: number;
      fluegel: number;
      safe_schwer: number;
      aquarium_gross: number;
      kunst_antik: boolean;
      kunst_antik_text: string;
    };
    kartons: Record<string, number>;
  };
  extras: {
    einpackservice_komplett: boolean;
    einpackservice_teilweise: boolean;
    auspackservice: boolean;
    moebelmontage: boolean;
    kueche_demo_montage: boolean;
    elektro_anschluss: boolean;
    halteverbot_service: boolean;
    verpackungsmaterial: boolean;
    entruempelung: boolean;
    zwischenlagerung: boolean;
    reinigung_alt: boolean;
    moebellift: boolean;
    transportversicherung: boolean;
    zwischenlagerung_tage: number;
    zwischenlagerung_m3: number;
    entruempelung_m3: number;
  };
  summary: {
    nutzungsart: "privat" | "gewerbe";
    agbAccepted: boolean;
    /** Schnellschätzung (wenige Felder); detaillierte Möbelliste wird übersprungen */
    quickEstimate?: {
      wohnflaecheM2: number;
      zimmer: number;
      haushaltGroesse: HaushaltGroesse;
    };
  };
}

export interface CalculateResult {
  netto: number;
  korridorUnten: number;
  korridorOben: number;
  regionKey: string;
  regionName: string;
  mindestauftrag: number;
  meta: {
    gesamtMinuten: number;
    helfer: number;
    zeitStunden: number;
    volumenM3Schaetzung: number;
  };
}
