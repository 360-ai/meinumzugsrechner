"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="touch-target inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-[#0D2137] transition-transform hover:scale-105"
      style={{ backgroundColor: "#FFCC00" }}
    >
      Als PDF speichern
    </button>
  );
}
