import PropertyManagementClient from "./PropertyManagementClient";

const PAGE_URL = "https://pbs.nyc/property-management";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/property-management#webpage";
const SERVICE_ID = "https://pbs.nyc/property-management#service";
const BREADCRUMB_ID = "https://pbs.nyc/property-management#breadcrumb";

export const metadata = {
  title:
    "NYC Property Management Services | Compliance-Focused Portfolio | PBS",
  description:
    "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "NYC Property Management Services | Compliance-Focused Portfolio | PBS",
    description:
      "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NYC Property Management Services | Compliance-Focused Portfolio | PBS",
    description:
      "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
];

const propertyManagementSchema = {
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
      name: "NYC Property Management Services | Compliance-Focused Portfolio Oversight | PBS",
      description:
        "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
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
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Property Management Services",
      serviceType: "Property Management and Compliance Coordination",
      category: [
        "Property management",
        "Compliance tracking",
        "Agency coordination"
      ],
      description:
        "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
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
          audienceType: "Property owners",
        },
        {
          "@type": "Audience",
          audienceType: "Real estate managers",
        },
      ],
      serviceOutput: [
        "Tenant/vendor coordination",
        "Compliance tracking",
        "Notices",
        "Inspections",
        "Maintenance coordination"
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
          name: "Property Management",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function PropertyManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertyManagementSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <PropertyManagementClient />
    </>
  );
}