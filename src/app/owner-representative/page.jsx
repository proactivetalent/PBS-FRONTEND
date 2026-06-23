import OwnerRepresentativeClient from "./OwnerRepresentativeClient";

const PAGE_URL = "https://pbs.nyc/owner-representative";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/owner-representative#webpage";
const SERVICE_ID = "https://pbs.nyc/owner-representative#service";
const BREADCRUMB_ID = "https://pbs.nyc/owner-representative#breadcrumb";

export const metadata = {
  title: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
  description:
    "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
    description:
      "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
    description:
      "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
  },
};

const areaServed = [
  "New York City",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
];

const ownerRepresentativeSchema = {
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
      name: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
      description:
        "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
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
      name: "Owner Representative Services",
      serviceType: "Owner Representative / Construction Project Representation",
      category: [
        "Construction Consulting",
        "NYC Compliance",
        "Project Oversight"
      ],
      description:
        "Proactive Building Solutions provides Owner Representative services for NYC property owners, developers, and building owners, helping coordinate construction projects, agency communication, compliance requirements, documentation, inspections, and project progress.",
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
          audienceType: "Developers",
        },
        {
          "@type": "Audience",
          audienceType: "Real estate investors",
        },
        {
          "@type": "Audience",
          audienceType: "Building owners",
        },
      ],
      serviceOutput: [
        "Project oversight",
        "Coordination",
        "Reporting",
        "Agency communication",
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
          target: "tel:+12122716837",
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
          name: "Owner Representative",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function OwnerRepresentativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ownerRepresentativeSchema).replace(/</g, "\\u003c"),
        }}
      />

      <OwnerRepresentativeClient />
    </>
  );
}