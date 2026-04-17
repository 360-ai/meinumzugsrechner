import type { UmzugFormData } from "./types";

/** Einzelschritt — gleiche Regeln wie im Rechner-UI. */
export function validateStepForm(form: UmzugFormData, step: number): string | null {
  if (step === 1) {
    if (!form.buildingA.stadtOrt.trim()) return "Bitte Ort bei Gebäude A angeben.";
    if (form.buildingA.landkreisAgs === "00000")
      return "Bitte einen Landkreis wählen.";
  }
  if (step === 2) {
    if (!form.buildingB.gleicheStadt) {
      if (!form.buildingB.stadtOrt.trim()) return "Bitte Ort bei Gebäude B angeben.";
      if (form.buildingB.landkreisAgs === "00000")
        return "Bitte einen Landkreis für Gebäude B wählen.";
    }
  }
  if (step === 3) {
    if (form.distance.km <= 0) return "Bitte die Entfernung in km angeben.";
  }
  if (step === 6) {
    if (!form.summary.agbAccepted) return "Bitte AGB und Datenschutz bestätigen.";
  }
  return null;
}

const FULL_STEPS = [1, 2, 3, 6] as const;

/** Vor Navigation zur Ergebnisseite: alle Pflichtschritte prüfen. */
export function validateFullForm(form: UmzugFormData): string | null {
  for (const s of FULL_STEPS) {
    const err = validateStepForm(form, s);
    if (err) return err;
  }
  return null;
}
