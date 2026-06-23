import LocalLaw11Client from "./LocalLaw11Client";

const PAGE_URL = "https://pbs.nyc/law/local-law";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/law/local-law#webpage";
const SERVICE_ID = "https://pbs.nyc/law/local-law#service";
const BREADCRUMB_ID = "https://pbs.nyc/law/local-law#breadcrumb";

export const metadata = {
  title: "Local Law 11 / FISP Facade Inspection Services in NYC",
  description:
    "Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS handle the complexities while you focus on what matters.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Local Law 11 / FISP Facade Inspection Services in NYC",
    description:
      "Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS handle the complexities while you focus on what matters.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Law 11 / FISP Facade Inspection Services in NYC",
    description:
      "Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS handle the complexities while you focus on what matters.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
];

const localLaw11Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Proactive Building Solutions",
      alternateName: "PBS NYC",
      url: "https://pbs.nyc",
      logo: {
        "@type": "ImageObject",
        url: "https://pbs.nyc/pics/LOGO.png",
      },
      email: "info@pbs.nyc",
      telephone: "+1-212-271-6837",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 E 41st Street, Third Floor",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10017",
        addressCountry: "US",
      },
      areaServed,
      sameAs: [
        "https://www.linkedin.com/company/pbsnycofficial",
        "https://www.youtube.com/@ProactiveBuildingSolutions",
        "https://www.facebook.com/share/1CAh41pncN/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: "https://pbs.nyc",
      name: "Proactive Building Solutions",
      alternateName: "PBS NYC",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: PAGE_URL,
      name: "Local Law 11 / FISP Facade Inspection Services in NYC",
      description:
        "Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS handle the complexities while you focus on what matters.",
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      about: {
        "@id": SERVICE_ID,
      },
      mainEntity: {
        "@id": SERVICE_ID,
      },
      breadcrumb: {
        "@id": BREADCRUMB_ID,
      },
      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "New York City Department of Buildings",
          alternateName: "DOB",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Local Law 11 / FISP Facade Inspection Services",
      alternateName: [
        "Facade Inspection",
        "FISP Inspection",
        "Local Law 11 Inspection"
      ],
      serviceType: "Facade Inspection and FISP Compliance",
      category: [
        "NYC building compliance",
        "Façade safety",
        "DOB filing support"
      ],
      description:
        "Local Law 11 / FISP facade inspection services for NYC buildings, including façade inspection, condition documentation, repair recommendations, and DOB filing coordination.",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      audience: [
        {
          "@type": "Audience",
          audienceType: "Building owners",
        },
        {
          "@type": "Audience",
          audienceType: "Property managers",
        },
        {
          "@type": "Audience",
          audienceType: "Landlords",
        },
        {
          "@type": "Audience",
          audienceType: "Co-op and condo boards",
        },
      ],
      serviceOutput: [
        "Façade inspection",
        "Condition documentation",
        "Repair recommendations",
        "DOB filing coordination"
      ],
      potentialAction: [
        {
          "@type": "CommunicateAction",
          name: "Get Started Now",
          target: "https://pbs.nyc/contacts",
        },
        {
          "@type": "CommunicateAction",
          name: "Call Our Inspectors",
          target: "https://pbs.nyc/contacts",
        },
      ],
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": BREADCRUMB_ID,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://pbs.nyc",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://pbs.nyc/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Inspection Services",
          item: "https://pbs.nyc/inspection-services",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Local Law 11 / FISP",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function LocalLaw11Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localLaw11Schema).replace(/</g, "\\u003c"),
        }}
      />

      <LocalLaw11Client />
    </>
  );
}