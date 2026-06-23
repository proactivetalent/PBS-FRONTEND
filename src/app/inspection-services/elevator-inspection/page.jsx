import ElevatorInspectionClient from "./ElevatorInspectionClient";

const PAGE_URL = "https://pbs.nyc/inspection-services/elevator-inspection";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/inspection-services/elevator-inspection#webpage";
const SERVICE_ID = "https://pbs.nyc/inspection-services/elevator-inspection#service";
const BREADCRUMB_ID = "https://pbs.nyc/inspection-services/elevator-inspection#breadcrumb";

export const metadata = {
  title: "Elevator Inspection Services in NYC",
  description:
    "NYC elevator compliance inspection made simple. Annual inspections, same-day filings, and violation dismissal support help you avoid fines, tenant lawsuits, and operational shutdowns.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Elevator Inspection Services in NYC",
    description:
      "NYC elevator compliance inspection made simple. Annual inspections, same-day filings, and violation dismissal support help you avoid fines, tenant lawsuits, and operational shutdowns.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevator Inspection Services in NYC",
    description:
      "NYC elevator compliance inspection made simple. Annual inspections, same-day filings, and violation dismissal support help you avoid fines, tenant lawsuits, and operational shutdowns.",
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

const elevatorInspectionSchema = {
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
      name: "Elevator Inspection Services in NYC",
      description:
        "NYC elevator compliance inspection made simple. Annual inspections, same-day filings, and violation dismissal support help you avoid fines, tenant lawsuits, and operational shutdowns.",
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
      name: "Elevator Inspection Services",
      alternateName: [
        "NYC Elevator Compliance",
        "CAT1 Elevator Inspection",
        "CAT5 Elevator Inspection"
      ],
      serviceType: "Elevator Safety Inspection and Compliance",
      category: [
        "NYC building compliance",
        "Elevator safety",
        "DOB filing support"
      ],
      description:
        "Elevator inspection services for NYC properties, including inspection coordination, CAT1/CAT5 support, violation tracking, and DOB filing support.",
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
        "Inspection coordination",
        "CAT1/CAT5 support",
        "Violation tracking",
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
          name: "Elevator Inspection",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function ElevatorInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(elevatorInspectionSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <ElevatorInspectionClient />
    </>
  );
}