import { absoluteUrl, getSiteUrl, SITE_CONTENT_DATE, SITE_NAME } from "@/lib/site";

const ORG_ID = `${getSiteUrl().origin}/#organization`;
const WEBSITE_ID = `${getSiteUrl().origin}/#website`;

export function organizationAndWebsiteSchema() {
  const origin = getSiteUrl().origin;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "360ai",
        url: origin,
        logo: { "@type": "ImageObject", url: `${origin}/logo.png` },
        brand: {
          "@type": "Brand",
          name: SITE_NAME,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: `${origin}/`,
        inLanguage: "de-DE",
        publisher: { "@id": ORG_ID },
        description:
          "Umzugskosten-Rechner mit transparenter Methodik, Ratgebern und Checklisten — ohne Weitergabe Ihrer Umzugsdaten an Umzugsunternehmen.",
      },
    ],
  };
}

export function webPageOnlySchema(args: { path: string; title: string; description: string }) {
  const pageUrl = absoluteUrl(args.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: args.title,
        description: args.description,
        inLanguage: "de-DE",
        isPartOf: { "@id": WEBSITE_ID },
      },
    ],
  };
}

export function webPageAndFaqSchema(args: {
  path: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  const pageUrl = absoluteUrl(args.path);
  const faq = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: args.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: args.title,
        description: args.description,
        inLanguage: "de-DE",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        primaryImageOfPage: { "@type": "ImageObject", url: `${getSiteUrl().origin}/logo.png` },
      },
      faq,
    ],
  };
}

export function articleAndBreadcrumbSchema(args: {
  path: string;
  headline: string;
  description: string;
  categoryPath: string;
  categoryName: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const pageUrl = absoluteUrl(args.path);
  const home = absoluteUrl("/");
  const hubUrl = absoluteUrl(args.categoryPath);

  const origin = getSiteUrl().origin;
  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: args.headline,
    description: args.description,
    inLanguage: "de-DE",
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: [`${origin}/logo.png`],
    datePublished: args.datePublished ?? SITE_CONTENT_DATE,
    dateModified: args.dateModified ?? SITE_CONTENT_DATE,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: home },
      { "@type": "ListItem", position: 2, name: args.categoryName, item: hubUrl },
      { "@type": "ListItem", position: 3, name: args.headline, item: pageUrl },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [article, breadcrumb],
  };
}
