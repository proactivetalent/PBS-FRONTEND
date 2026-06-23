import SprinklerHydrostaticClient from "./SprinklerHydrostaticClient";

const PAGE_URL = "https://pbs.nyc/inspection-services/sh-inspection";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/inspection-services/sh-inspection#webpage";
const SERVICE_ID = "https://pbs.nyc/inspection-services/sh-inspection#service";
const BREADCRUMB_ID = "https://pbs.nyc/inspection-services/sh-inspection#breadcrumb";

export const metadata = {
  title: "Sprinkler Hydrostatic Test Services in NYC",
  description:
    "Fire sprinkler inspection and hydrostatic testing services to help keep your property’s fire sprinkler systems compliant with New York City regulations for safety and legal adherence.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Sprinkler Hydrostatic Test Services in NYC",
    description:
      "Fire sprinkler inspection and hydrostatic testing services to help keep your property’s fire sprinkler systems compliant with New York City regulations for safety and legal adherence.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprinkler Hydrostatic Test Services in NYC",
    description:
      "Fire sprinkler inspection and hydrostatic testing services to help keep your property’s fire sprinkler systems compliant with New York City regulations for safety and legal adherence.",
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

const sprinklerHydrostaticSchema = {
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
      name: "Sprinkler Hydrostatic Test Services in NYC",
      description:
        "Fire sprinkler inspection and hydrostatic testing services to help keep your property’s fire sprinkler systems compliant with New York City regulations for safety and legal adherence.",
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
          name: "New York City Fire Department",
          alternateName: "FDNY",
        },
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
      name: "Sprinkler Hydrostatic Test Services",
      alternateName: [
        "Fire Sprinkler Hydrostatic Test",
        "Siamese Connection Hydrostatic Test",
        "FDC Hydrostatic Test"
      ],
      serviceType: "Fire Sprinkler Hydrostatic Testing and Compliance",
      category: [
        "Fire protection compliance",
        "Sprinkler testing",
        "FDNY coordination"
      ],
      description:
        "Sprinkler hydrostatic test services for NYC properties, including hydrostatic test coordination, FDNY witness scheduling, defect tracking, repair coordination, and documentation support.",
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
        {
          "@type": "Audience",
          audienceType: "Facility managers",
        },
      ],
      serviceOutput: [
        "Hydrostatic test coordination",
        "FDNY witness scheduling",
        "Defect tracking",
        "Repair coordination",
        "Documentation support"
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
          name: "Sprinkler Hydrostatic Test",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function SprinklerHydrostaticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sprinklerHydrostaticSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <SprinklerHydrostaticClient />
    </>
  );
}