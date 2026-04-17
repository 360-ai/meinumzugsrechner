"use client";

import type { GuideSection } from "@/lib/generateGuidePdf";

type Props = {
  title?: string;
  category?: "ratgeber" | "checklisten";
  categoryLabel?: string;
  sections?: GuideSection[];
};

export function PrintButton({ title, category, categoryLabel, sections }: Props) {
  const handleClick = async () => {
    if (sections && title && category && categoryLabel) {
      const { generateGuidePdf } = await import("@/lib/generateGuidePdf");
      generateGuidePdf(title, category, categoryLabel, sections);
    } else {
      window.print();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="touch-target inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-[#0D2137] transition-transform hover:scale-105"
      style={{ backgroundColor: "#FFCC00" }}
    >
      Als PDF speichern
    </button>
  );
}
