// lib/generateGuidePdf.ts
import { jsPDF } from "jspdf";

export type GuideSection = {
  heading: string;
  items: Array<{ label: string; text: string; isCheckbox?: boolean }>;
};

const BRAND_BLUE = [0, 136, 204] as [number, number, number];
const BRAND_ORANGE = [255, 119, 0] as [number, number, number];
const BRAND_NAVY = [13, 33, 55] as [number, number, number];
const BRAND_MUTED = [90, 122, 138] as [number, number, number];

export function generateGuidePdf(
  title: string,
  category: "ratgeber" | "checklisten",
  categoryLabel: string,
  sections: GuideSection[]
): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;
  let pageNum = 1;

  const accentColor = category === "checklisten" ? BRAND_ORANGE : BRAND_BLUE;

  function addHeader() {
    // Blue/orange header bar
    doc.setFillColor(...accentColor);
    doc.rect(0, 0, pageWidth, 28, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(categoryLabel.toUpperCase(), margin, 11);
    doc.setFontSize(14);
    doc.text(title, margin, 21);
    y = 36;
  }

  function addFooter() {
    doc.setDrawColor(...BRAND_MUTED);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...BRAND_MUTED);
    doc.text("meinumzugsrechner.de — Kostenloser Umzugskostenrechner", margin, pageHeight - 7);
    doc.text(`Seite ${pageNum}`, pageWidth - margin, pageHeight - 7, { align: "right" });
  }

  function checkPageBreak(needed: number) {
    if (y + needed > pageHeight - 20) {
      addFooter();
      doc.addPage();
      pageNum++;
      addHeader();
    }
  }

  addHeader();

  for (const section of sections) {
    checkPageBreak(20);

    // Section heading bar
    doc.setFillColor(...accentColor);
    doc.setFillColor(accentColor[0], accentColor[1], accentColor[2], 0.12);
    // Use a light tint manually:
    const lightR = Math.round(accentColor[0] + (255 - accentColor[0]) * 0.88);
    const lightG = Math.round(accentColor[1] + (255 - accentColor[1]) * 0.88);
    const lightB = Math.round(accentColor[2] + (255 - accentColor[2]) * 0.88);
    doc.setFillColor(lightR, lightG, lightB);
    doc.rect(margin, y, contentWidth, 8, "F");

    // Left accent bar
    doc.setFillColor(...accentColor);
    doc.rect(margin, y, 2, 8, "F");

    doc.setTextColor(...BRAND_NAVY);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(section.heading, margin + 5, y + 5.5);
    y += 11;

    for (const item of section.items) {
      checkPageBreak(14);

      if (item.isCheckbox) {
        // Draw checkbox square
        doc.setDrawColor(...BRAND_MUTED);
        doc.setLineWidth(0.4);
        doc.rect(margin + 1, y, 3.5, 3.5);

        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(...BRAND_NAVY);
        const labelText = item.label ? `${item.label}: ` : "";
        const fullText = labelText + item.text;
        const lines = doc.splitTextToSize(fullText, contentWidth - 8);

        // Bold label
        if (item.label) {
          const labelWidth = doc.getTextWidth(`${item.label}: `);
          doc.text(`${item.label}:`, margin + 6, y + 2.8);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(...BRAND_MUTED);
          const restLines = doc.splitTextToSize(item.text, contentWidth - 8 - labelWidth);
          doc.text(` ${item.text}`, margin + 6 + labelWidth, y + 2.8);
        } else {
          doc.setFont("helvetica", "normal");
          doc.setTextColor(...BRAND_MUTED);
          const lines2 = doc.splitTextToSize(item.text, contentWidth - 8);
          doc.text(lines2, margin + 6, y + 2.8);
          y += (lines2.length - 1) * 4;
        }
        y += 7;
      } else {
        // Regular bullet point
        doc.setFillColor(...accentColor);
        doc.circle(margin + 2, y + 2, 1, "F");

        doc.setFontSize(8);
        doc.setTextColor(...BRAND_MUTED);
        if (item.label) {
          doc.setFont("helvetica", "bold");
          doc.setTextColor(...BRAND_NAVY);
          doc.text(`${item.label}:`, margin + 5, y + 3);
          const labelW = doc.getTextWidth(`${item.label}: `);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(...BRAND_MUTED);
          const restLines = doc.splitTextToSize(` ${item.text}`, contentWidth - 5 - labelW);
          doc.text(restLines[0] ?? "", margin + 5 + labelW, y + 3);
          if (restLines.length > 1) {
            for (let li = 1; li < restLines.length; li++) {
              y += 5;
              checkPageBreak(6);
              doc.text(restLines[li], margin + 5, y + 3);
            }
          }
        } else {
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(item.text, contentWidth - 7);
          doc.text(lines, margin + 5, y + 3);
          y += (lines.length - 1) * 4.5;
        }
        y += 7;
      }
    }

    y += 4; // gap after section
  }

  addFooter();
  doc.save(`${title.replace(/[^a-zA-Z0-9äöüÄÖÜß]/g, "-").toLowerCase()}.pdf`);
}
