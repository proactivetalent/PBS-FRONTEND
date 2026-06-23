import LocalLaw152Client from "./LocalLaw152Client";

const PAGE_URL = "https://pbs.nyc/law/local-law-152";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/law/local-law-152#webpage";
const SERVICE_ID = "https://pbs.nyc/law/local-law-152#service";
const BREADCRUMB_ID = "https://pbs.nyc/law/local-law-152#breadcrumb";

export const metadata = {
  title: "Local Law 152 Gas Line Inspection Services in NYC",
  description:
    "LL152 gas piping inspections provide proactive inspections to meet NYC mandates, support tenant safety, maintain legal compliance, and avoid operational interruptions.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Local Law 152 Gas Line Inspection Services in NYC",
    description:
      "LL152 gas piping inspections provide proactive inspections to meet NYC mandates, support tenant safety, maintain legal compliance, and avoid operational interruptions.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Law 152 Gas Line Inspection Services in NYC",
    description:
      "LL152 gas piping inspections provide proactive inspections to meet NYC mandates, support tenant safety, maintain legal compliance, and avoid operational interruptions.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

const localLaw152Schema = {
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
      name: "Local Law 152 Gas Line Inspection Services in NYC",
      description:
        "LL152 gas piping inspections provide proactive inspections to meet NYC mandates, support tenant safety, maintain legal compliance, and avoid operational interruptions.",
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
      name: "Local Law 152 Gas Line Inspection Services",
      alternateName: [
        "Gas Piping Inspection",
        "LL152 Gas Inspection",
        "NYC Gas Line Inspection"
      ],
      serviceType: "Gas Piping Inspection and Local Law 152 Compliance",
      category: [
        "NYC building compliance",
        "Gas piping safety",
        "DOB filing support"
      ],
      description:
        "Local Law 152 gas line inspection services for NYC buildings, including gas piping inspection coordination, leak survey support, GPS2 support, and DOB filing support.",
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
          audienceType: "Landlords",
        },
        {
          "@type": "Audience",
          audienceType: "Property managers",
        },
        {
          "@type": "Audience",
          audienceType: "Co-op and condo boards",
        },
      ],
      serviceOutput: [
        "Gas piping inspection coordination",
        "Leak survey",
        "GPS2 support",
        "DOB filing support"
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
          name: "Local Law 152",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function LocalLaw152Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localLaw152Schema).replace(/</g, "\\u003c"),
        }}
      />

      <LocalLaw152Client />
    </>
  );
}