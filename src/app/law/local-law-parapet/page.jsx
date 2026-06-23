import LocalLaw126ParapetClient from "./LocalLaw126ParapetClient";

const PAGE_URL = "https://pbs.nyc/law/local-law-parapet";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/law/local-law-parapet#webpage";
const SERVICE_ID = "https://pbs.nyc/law/local-law-parapet#service";
const BREADCRUMB_ID = "https://pbs.nyc/law/local-law-parapet#breadcrumb";

export const metadata = {
  title: "Local Law 126 Parapet Inspection Services in NYC",
  description:
    "Comply with LL 126 parapet inspection requirements. Prevent hazards and avoid penalties with help from our licensed experts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Local Law 126 Parapet Inspection Services in NYC",
    description:
      "Comply with LL 126 parapet inspection requirements. Prevent hazards and avoid penalties with help from our licensed experts.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Law 126 Parapet Inspection Services in NYC",
    description:
      "Comply with LL 126 parapet inspection requirements. Prevent hazards and avoid penalties with help from our licensed experts.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
];

const localLaw126ParapetSchema = {
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
      name: "Local Law 126 Parapet Inspection Services in NYC",
      description:
        "Comply with LL 126 parapet inspection requirements. Prevent hazards and avoid penalties with help from our licensed experts.",
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
      name: "Local Law 126 Parapet Inspection Services",
      alternateName: [
        "Annual Parapet Observation",
        "NYC Parapet Inspection"
      ],
      serviceType: "Parapet Safety Inspection and Local Law 126 Compliance",
      category: [
        "NYC building compliance",
        "Parapet safety",
        "DOB compliance"
      ],
      description:
        "Local Law 126 parapet inspection services for NYC buildings, including parapet observation, report support, unsafe condition identification, and repair recommendations.",
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
        "Parapet observation",
        "Report support",
        "Unsafe condition identification",
        "Repair recommendations"
      ],
      potentialAction: [
        {
          "@type": "CommunicateAction",
          name: "Schedule Inspection",
          target: "https://pbs.nyc/contacts",
        },
        {
          "@type": "CommunicateAction",
          name: "Request Consultation",
          target: "https://pbs.nyc/contacts",
        },
        {
          "@type": "CommunicateAction",
          name: "Call Inspectors",
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
          name: "Parapet Inspection",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function LocalLaw126ParapetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localLaw126ParapetSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <LocalLaw126ParapetClient />
    </>
  );
}