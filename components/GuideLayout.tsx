import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PrintButton } from "@/components/PrintButton";
import { getRelatedGuides } from "@/lib/related-guides";
import { articleAndBreadcrumbSchema } from "@/lib/schema";
import type { GuideSection } from "@/lib/generateGuidePdf";

type Props = {
  title: string;
  category: "ratgeber" | "checklisten";
  categoryLabel: string;
  children: React.ReactNode;
  sections?: GuideSection[];
  /** Pfad mit trailing slash, z. B. /ratgeber/ergonomie/ — für Article- und Breadcrumb-Schema */
  articleSeo?: { path: string; description: string };
};

export function GuideLayout({ title, category, categoryLabel, children, sections, articleSeo }: Props) {
  const ld =
    articleSeo &&
    articleAndBreadcrumbSchema({
      path: articleSeo.path,
      headline: title,
      description: articleSeo.description,
      categoryPath: `/${category}/`,
      categoryName: categoryLabel,
    });

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      {ld ? (
        <JsonLd
          id={`ld-article-${articleSeo.path.replace(/^\//, "").replace(/\//g, "-").replace(/-$/, "")}`}
          data={ld}
        />
      ) : null}
      {/* Back link */}
      <div className="no-print mb-6">
        <Link
          href={`/${category}/`}
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

      {/* Related guides */}
      {articleSeo && (() => {
        const related = getRelatedGuides(articleSeo.path);
        if (related.length === 0) return null;
        return (
          <div className="no-print mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-[#0D2137]">Das könnte Sie auch interessieren</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center gap-2 rounded-xl border border-slate-100 p-3 transition-colors hover:border-[#0088CC]/30 hover:bg-[#EBF6FD]"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "#EBF6FD" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0088CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#0D2137] group-hover:text-[#0088CC] transition-colors">{r.label}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Footer note */}
      <div className="no-print mt-12 rounded-2xl border border-slate-100 bg-[#EBF6FD] p-6 text-sm text-[#5A7A8A]">
        <p>
          <strong className="text-[#0D2137]">meinumzugsrechner.de</strong> —
          Umzugskostenrechner, Kartonrechner und LKW-Rechner — kostenlos und ohne Weitergabe Ihrer
          Daten an Umzugsfirmen.{" "}
          <Link href="/rechner/" className="font-medium text-[#0088CC] hover:underline">
            Zum Umzugskosten-Rechner
          </Link>
        </p>
      </div>
    </div>
  );
}

