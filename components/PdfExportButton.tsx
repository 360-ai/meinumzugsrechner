"use client";

import { jsPDF } from "jspdf";
import type { CalculateResult } from "@/lib/types";
import type { UmzugFormData } from "@/lib/types";

type Props = {
  form: UmzugFormData;
  result: CalculateResult;
};

export function PdfExportButton({ form, result }: Props) {
  const download = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const line = (y: number, text: string) => {
      doc.text(text, 48, y);
      return y + 18;
    };
    let y = 48;
    doc.setFontSize(16);
    y = line(y, "meinumzugsrechner.com – Angebotsvorlage / Richtwert");
    doc.setFontSize(10);
    y += 8;
    y = line(
      y,
      "Hinweis: unverbindlicher Richtwert, keine Festpreiszusage. Keine Weitergabe Ihrer Umzugsdaten an Dritte.",
    );
    y += 10;
    y = line(y, `Preiskorridor: ${result.korridorUnten} – ${result.korridorOben} EUR`);
    y = line(y, `Region: ${result.regionName}`);
    y = line(y, `Auszug: ${form.buildingA.stadtOrt} (${form.buildingA.landkreisAgs})`);
    y = line(
      y,
      form.buildingB.gleicheStadt
        ? `Einzug: wie Auszug`
        : `Einzug: ${form.buildingB.stadtOrt} (${form.buildingB.landkreisAgs})`,
    );
    y = line(y, `Distanz: ${form.distance.km} km · Datum: ${form.distance.umzugsdatum}`);
    y = line(y, `Nutzung: ${form.summary.nutzungsart}`);
    y += 10;
    doc.setFontSize(11);
    y = line(y, "Diese PDF wurde lokal im Browser erzeugt. Es werden keine Umzugsdaten auf unseren Servern gespeichert.");
    doc.save("meinumzugsrechner-richtwert.pdf");
  };

  return (
    <button
      type="button"
      onClick={download}
      className="touch-target rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-slate-50"
    >
      PDF herunterladen
    </button>
  );
}
