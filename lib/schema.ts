import { absoluteUrl, getSiteUrl, SITE_CONTENT_DATE, SITE_NAME } from "@/lib/site";

const ORG_ID = `${getSiteUrl().origin}/#organization`;
const WEBSITE_ID = `${getSiteUrl().origin}/#website`;
const AUTHOR_ID = `${getSiteUrl().origin}/#author`;

export function organizationAndWebsiteSchema() {
  const origin = getSiteUrl().origin;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": AUTHOR_ID,
        name: "Denis Schmidt",
        jobTitle: "Gründer & Betreiber",
        worksFor: { "@id": ORG_ID },
        url: `${origin}/ueber-uns/`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Frankenberg (Eder)",
          addressCountry: "DE",
        },
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "360ai",
        url: origin,
        logo: { "@type": "ImageObject", url: `${origin}/logo.png` },
        brand: { "@type": "Brand", name: SITE_NAME },
        founder: { "@id": AUTHOR_ID },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@meinumzugsrechner.de",
          availableLanguage: "de",
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

export function webApplicationSchema() {
  const origin = getSiteUrl().origin;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${origin}/rechner/#app`,
    name: "Umzugskosten-Rechner",
    description:
      "Kostenloser Online-Rechner für Umzugskosten in Deutschland — als Preiskorridor ohne Datenweitergabe an Umzugsunternehmen.",
    url: `${origin}/rechner/`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    inLanguage: "de-DE",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    provider: { "@id": ORG_ID },
    author: { "@id": AUTHOR_ID },
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

export function speakableSchema(path: string) {
  const pageUrl = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/head/title",
        "//main//h1[1]",
        "//main//h1[1]/following-sibling::p[1]",
      ],
    },
  };
}

export function howToSchema(args: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    inLanguage: "de-DE",
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
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
    author: { "@id": AUTHOR_ID },
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
