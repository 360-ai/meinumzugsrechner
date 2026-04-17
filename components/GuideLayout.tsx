import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import type { GuideSection } from "@/lib/generateGuidePdf";

type Props = {
  title: string;
  category: "ratgeber" | "checklisten";
  categoryLabel: string;
  children: React.ReactNode;
  sections?: GuideSection[];
};

export function GuideLayout({ title, category, categoryLabel, children, sections }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      {/* Back link */}
      <div className="no-print mb-6">
        <Link
          href={`/${category}`}
          className="text-sm font-medium text-[#0088CC] hover:underline"
        >
          ← Zurück zu {categoryLabel}
        </Link>
      </div>

      {/* Header bar */}
      <div
        className="no-print mb-8 flex items-center justify-between rounded-2xl px-6 py-4"
        style={{ backgroundColor: "#0088CC" }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/70">
            {categoryLabel}
          </p>
          <h1 className="text-xl font-bold text-white sm:text-2xl">{title}</h1>
        </div>
        <PrintButton title={title} category={category} categoryLabel={categoryLabel} sections={sections} />
      </div>

      {/* Print header (only visible when printing) */}
      <div className="hidden print:block mb-8">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          meinumzugsrechner.de · {categoryLabel}
        </p>
        <h1 className="text-2xl font-bold text-[#0D2137]">{title}</h1>
      </div>

      {/* Content */}
      <div className="space-y-6">{children}</div>

      {/* Footer note */}
      <div className="no-print mt-12 rounded-2xl border border-slate-100 bg-[#EBF6FD] p-6 text-sm text-[#5A7A8A]">
        <p>
          <strong className="text-[#0D2137]">meinumzugsrechner.de</strong> —
          Kostenloser Umzugskostenrechner ohne Datenweitergabe.{" "}
          <Link href="/rechner" className="text-[#0088CC] hover:underline font-medium">
            Jetzt Kosten berechnen →
          </Link>
        </p>
      </div>
    </div>
  );
}
