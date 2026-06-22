import InspectionServicesClient from "./InspectionServicesClient";

const PAGE_URL = "https://pbs.nyc/inspection-services";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/inspection-services#webpage";
const MAIN_SERVICE_ID = "https://pbs.nyc/inspection-services#service";
const OFFER_CATALOG_ID = "https://pbs.nyc/inspection-services#offer-catalog";

export const metadata = {
  title: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
  description:
    "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
    description:
      "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
    description:
      "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Bronx",
  "Queens",
];

const inspectionServicesSchema = {
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
      name: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
      description:
        "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      about: {
        "@id": MAIN_SERVICE_ID,
      },
      mainEntity: {
        "@id": MAIN_SERVICE_ID,
      },
      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "New York City Department of Buildings",
          alternateName: "DOB",
        },
        {
          "@type": "GovernmentOrganization",
          name: "New York City Fire Department",
          alternateName: "FDNY",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": MAIN_SERVICE_ID,
      name: "Compliance Inspection Services in NYC",
      alternateName: [
        "PBS Inspection Services",
        "NYC Building Inspection Services"
      ],
      serviceType: "Building Compliance Inspection Services",
      category: [
        "NYC Building Compliance",
        "Safety Inspections",
        "Property Compliance",
        "Agency Coordination"
      ],
      description:
        "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      audience: [
        {
          "@type": "Audience",
          audienceType: "Property owners",
        },
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
          audienceType: "Developers",
        },
        {
          "@type": "Audience",
          audienceType: "Contractors",
        },
      ],
      serviceOutput: [
        "Inspection reports",
        "Compliance documentation",
        "Repair recommendations",
        "DOB/FDNY filing support",
        "Deadline tracking"
      ],
      hasOfferCatalog: {
        "@id": OFFER_CATALOG_ID,
      },
      potentialAction: [
        {
          "@type": "CommunicateAction",
          name: "Get Started Now",
          target: "https://pbs.nyc/contact-us",
        },
        {
          "@type": "CommunicateAction",
          name: "Call Our Inspectors",
          target: "tel:+12122716837",
        },
      ],
      
      url: PAGE_URL,
    },
    {
      "@type": "OfferCatalog",
      "@id": OFFER_CATALOG_ID,
      name: "PBS Inspection Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/law/local-law#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/law/local-law-parking#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/law/local-law-parapet#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/law/local-law-152#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/inspection-services/sh-inspection#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/inspection-services/elevator-inspection#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/inspection-services/boiler-inspection#service",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/law/local-law#service",
      name: "Facade Inspection Services",
      serviceType: "Local Law 11 / FISP Facade Inspection",
      category: "NYC Building Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/law/local-law",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/law/local-law-parking#service",
      name: "Parking Garage Inspection Services",
      serviceType: "Local Law 126 Parking Structure Inspection",
      category: "NYC Building Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/law/local-law-parking",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/law/local-law-parapet#service",
      name: "Parapet Inspection Services",
      serviceType: "Annual Parapet Observation / Parapet Safety Inspection",
      category: "NYC Building Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/law/local-law-parapet",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/law/local-law-152#service",
      name: "Gas Line Inspection Services",
      serviceType: "Local Law 152 Gas Piping Inspection",
      category: "NYC Building Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/law/local-law-152",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/inspection-services/sh-inspection#service",
      name: "Sprinkler Hydrostatic Testing Services",
      serviceType: "Fire Sprinkler System Testing and Compliance",
      category: "Fire Protection Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/inspection-services/sh-inspection",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/inspection-services/elevator-inspection#service",
      name: "Elevator Inspection Services",
      serviceType: "Elevator Safety and Compliance Inspection",
      category: "NYC Building Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/inspection-services/elevator-inspection",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/inspection-services/boiler-inspection#service",
      name: "Boiler Inspection Services",
      serviceType: "Boiler Safety and Compliance Inspection",
      category: "NYC Building Compliance",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      
      url: "https://pbs.nyc/inspection-services/boiler-inspection",
    },
  ],
};

export default function InspectionServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(inspectionServicesSchema).replace(/</g, "\\u003c"),
        }}
      />

      <InspectionServicesClient />
    </>
  );
}