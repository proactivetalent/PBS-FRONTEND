import LocalLaw126ParkingClient from "./LocalLaw126ParkingClient";

const PAGE_URL = "https://pbs.nyc/law/local-law-parking";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/law/local-law-parking#webpage";
const SERVICE_ID = "https://pbs.nyc/law/local-law-parking#service";
const BREADCRUMB_ID = "https://pbs.nyc/law/local-law-parking#breadcrumb";

export const metadata = {
  title: "Local Law 126 Parking Garage Inspection Services in NYC",
  description:
    "LL 126 parking structure inspection services help ensure compliance, prevent risks, and protect your property through assessments by qualified licensed experts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Local Law 126 Parking Garage Inspection Services in NYC",
    description:
      "LL 126 parking structure inspection services help ensure compliance, prevent risks, and protect your property through assessments by qualified licensed experts.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Law 126 Parking Garage Inspection Services in NYC",
    description:
      "LL 126 parking structure inspection services help ensure compliance, prevent risks, and protect your property through assessments by qualified licensed experts.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
];

const localLaw126ParkingSchema = {
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
      name: "Local Law 126 Parking Garage Inspection Services in NYC",
      description:
        "LL 126 parking structure inspection services help ensure compliance, prevent risks, and protect your property through assessments by qualified licensed experts.",
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
      name: "Local Law 126 Parking Garage Inspection Services",
      alternateName: [
        "Parking Structure Inspection",
        "PIPS Inspection",
        "LL126 Inspection"
      ],
      serviceType: "Parking Structure Inspection and LL126 Compliance",
      category: [
        "NYC building compliance",
        "Parking structure safety",
        "DOB filing support"
      ],
      description:
        "Local Law 126 parking garage inspection services for NYC properties, including structural inspection coordination, condition assessment, repair recommendations, and DOB filing support.",
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
          audienceType: "Garage owners",
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
          audienceType: "Condo and co-op boards",
        },
      ],
      serviceOutput: [
        "Structural inspection coordination",
        "Condition assessment",
        "Repair recommendations",
        "DOB filing support"
      ],
      potentialAction: [
        {
          "@type": "CommunicateAction",
          name: "Book Your Slot Now",
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
          name: "Parking Garage Inspection",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function LocalLaw126ParkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localLaw126ParkingSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <LocalLaw126ParkingClient />
    </>
  );
}