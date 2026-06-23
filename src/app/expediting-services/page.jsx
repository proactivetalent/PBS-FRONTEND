import ExpeditingServicesClient from "./ExpeditingServicesClient";

const PAGE_URL = "https://pbs.nyc/expediting-services";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/expediting-services#webpage";
const SERVICE_ID = "https://pbs.nyc/expediting-services#service";
const BREADCRUMB_ID = "https://pbs.nyc/expediting-services#breadcrumb";

export const metadata = {
  title: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
  description:
    "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
    description:
      "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
    description:
      "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
];

const expeditingServicesSchema = {
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
      name: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
      description:
        "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
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
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Expediting Services",
      alternateName: [
        "Permit Expediting Services",
        "NYC Agency Expediting"
      ],
      serviceType: "Permit Expediting and Agency Coordination",
      category: [
        "NYC permits",
        "DOB filings",
        "Agency coordination",
        "Compliance"
      ],
      description:
        "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
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
          audienceType: "Contractors",
        },
        {
          "@type": "Audience",
          audienceType: "Architects",
        },
        {
          "@type": "Audience",
          audienceType: "Developers",
        },
      ],
      serviceOutput: [
        "Filing support",
        "Permit coordination",
        "Agency follow-up",
        "Document review"
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
          name: "Expediting Services",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function ExpeditingServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(expeditingServicesSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <ExpeditingServicesClient />
    </>
  );
}