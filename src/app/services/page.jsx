import ServicesClient from "./ServicesClient";

const PAGE_URL = "https://pbs.nyc/services";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/services#webpage";
const SERVICE_CATALOG_ID = "https://pbs.nyc/services#service-catalog";

export const metadata = {
  title: "NYC Property Compliance Services | Inspections, Expediting & Management | PBS",
  description:
    "PBS delivers expert property compliance, inspections, expediting, and management services across NYC. Get a free consultation and protect your investment today.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "NYC Property Compliance Services | Inspections, Expediting & Management | PBS",
    description:
      "PBS delivers expert property compliance, inspections, expediting, and management services across NYC. Get a free consultation and protect your investment today.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Property Compliance Services | Inspections, Expediting & Management | PBS",
    description:
      "PBS delivers expert property compliance, inspections, expediting, and management services across NYC. Get a free consultation and protect your investment today.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Bronx",
  "Queens",
];

const servicePageSchema = {
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
      knowsAbout: [
        "NYC DOB permits",
        "NYC building compliance",
        "Permit expediting",
        "DOB violations",
        "Certificate of Occupancy",
        "Zoning compliance",
        "Construction inspections",
        "NYC Department of Buildings filings",
        "Compliance inspections",
      ],
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
      "@type": ["WebPage", "CollectionPage"],
      "@id": WEBPAGE_ID,
      url: PAGE_URL,
      name: "NYC Property Compliance Services | Inspections, Expediting & Management | PBS",
      description:
        "PBS delivers expert property compliance, inspections, expediting, and management services across NYC. Get a free consultation and protect your investment today.",
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      mainEntity: {
        "@id": SERVICE_CATALOG_ID,
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
        {
          "@type": "GovernmentOrganization",
          name: "Environmental Control Board",
          alternateName: "ECB",
        },
        {
          "@type": "GovernmentOrganization",
          name: "NYC Department of Housing Preservation and Development",
          alternateName: "HPD",
        },
        {
          "@type": "GovernmentOrganization",
          name: "NYC Department of Transportation",
          alternateName: "DOT",
        },
        {
          "@type": "GovernmentOrganization",
          name: "NYC Department of Environmental Protection",
          alternateName: "DEP",
        },
        {
          "@type": "GovernmentOrganization",
          name: "NYC Department of Health and Mental Hygiene",
          alternateName: "DOH",
        },
        {
          "@type": "GovernmentOrganization",
          name: "NYC Department of Sanitation",
          alternateName: "DSNY",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "OfferCatalog",
      "@id": SERVICE_CATALOG_ID,
      name: "Proactive Building Solutions Service Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/owner-representative#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/inspection-services#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/property-management#service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@id": "https://pbs.nyc/expediting-services#service",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/owner-representative#service",
      name: "Owner Representative Services",
      serviceType: "Owner Representative Services",
      category: "Construction and Property Compliance Consulting",
      description:
        "Advocate for NYC construction projects. PBS acts as owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      audience: [
        {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Developers",
        },
        {
          "@type": "Audience",
          audienceType: "Contractors",
        },
        {
          "@type": "Audience",
          audienceType: "Architects",
        },
        {
          "@type": "Audience",
          audienceType: "Property Managers",
        },
      ],
      url: "https://pbs.nyc/owner-representative",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/inspection-services#service",
      name: "Compliance Inspection Services",
      serviceType: "Compliance Inspection Services",
      category: "NYC Building Compliance",
      description:
        "Compliance inspection services to help identify building, construction, safety, and agency-related compliance issues for NYC properties and projects.",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      audience: [
        {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Developers",
        },
        {
          "@type": "Audience",
          audienceType: "Contractors",
        },
        {
          "@type": "Audience",
          audienceType: "Property Managers",
        },
      ],
      url: "https://pbs.nyc/inspection-services",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/property-management#service",
      name: "Property Management Services",
      serviceType: "Property Management Services",
      category: "Property Compliance and Management Support",
      description:
        "Property management support for NYC properties, including coordination, compliance tracking, documentation support, and communication with relevant agencies and stakeholders.",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      audience: [
        {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Building Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Real Estate Managers",
        },
        {
          "@type": "Audience",
          audienceType: "Property Managers",
        },
      ],
      url: "https://pbs.nyc/property-management",
    },
    {
      "@type": "Service",
      "@id": "https://pbs.nyc/expediting-services#service",
      name: "Expediting Services",
      serviceType: "Expediting Services",
      category: "NYC Permit and Agency Expediting",
      description:
        "Expediting services for NYC projects, including DOB filings, permit coordination, agency follow-ups, violation support, and documentation assistance.",
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed,
      audience: [
        {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Developers",
        },
        {
          "@type": "Audience",
          audienceType: "Contractors",
        },
        {
          "@type": "Audience",
          audienceType: "Architects",
        },
        {
          "@type": "Audience",
          audienceType: "Construction Managers",
        },
      ],
      url: "https://pbs.nyc/expediting-services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicePageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <ServicesClient />
    </>
  );
}