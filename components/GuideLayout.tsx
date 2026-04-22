import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PrintButton } from "@/components/PrintButton";
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
          meinumzugsrechner.com · {categoryLabel}
        </p>
        <h1 className="text-2xl font-bold text-[#0D2137]">{title}</h1>
      </div>

      {/* Content */}
      <div className="space-y-6">{children}</div>

      {/* Footer note */}
      <div className="no-print mt-12 rounded-2xl border border-slate-100 bg-[#EBF6FD] p-6 text-sm text-[#5A7A8A]">
        <p>
          <strong className="text-[#0D2137]">meinumzugsrechner.com</strong> —
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
