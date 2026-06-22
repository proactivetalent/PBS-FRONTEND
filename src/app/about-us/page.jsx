import AboutUsClient from "./AboutUsClient";

const PAGE_URL = "https://pbs.nyc/about-us";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBSITE_ID = "https://pbs.nyc/#website";
const WEBPAGE_ID = "https://pbs.nyc/about-us#webpage";
const BREADCRUMB_ID = "https://pbs.nyc/about-us#breadcrumb";

export const metadata = {
  title: "About PBS NYC | NYC's Trusted Property Compliance Partner",
  description:
    "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About PBS NYC | NYC's Trusted Property Compliance Partner",
    description:
      "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PBS NYC | NYC's Trusted Property Compliance Partner",
    description:
      "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
  },
};

const aboutUsSchema = {
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
      areaServed: [
        "New York City",
        "Manhattan",
        "Brooklyn",
        "Queens",
        "Bronx",
      ],
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
      "@type": "AboutPage",
      "@id": WEBPAGE_ID,
      url: PAGE_URL,
      name: "About PBS NYC | NYC's Trusted Property Compliance Partner",
      description:
        "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      mainEntity: {
        "@id": ORGANIZATION_ID,
      },
      breadcrumb: {
        "@id": BREADCRUMB_ID,
      },
      inLanguage: "en-US",
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
          name: "About Us",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutUsSchema).replace(/</g, "\\u003c"),
        }}
      />

      <AboutUsClient />
    </>
  );
}