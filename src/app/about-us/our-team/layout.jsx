/**
 * Layout component for Our Team page
 * Adds page-level SEO metadata and JSON-LD schema for Jon Credendino
 */

const PAGE_URL = "https://pbs.nyc/about-us/our-team";
const ORGANIZATION_ID = "https://pbs.nyc/#organization";
const WEBPAGE_ID = "https://pbs.nyc/about-us/our-team#webpage";
const JON_ID = "https://pbs.nyc/about-us/our-team#jon-credendino";

export const metadata = {
  title: "Meet the PBS Team | NYC Property Compliance Experts",
  description:
    "Meet the PBS team of NYC construction and compliance experts. With 30+ years of combined experience, we're here to guide your project to success.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Meet the PBS Team | NYC Property Compliance Experts",
    description:
      "Meet the PBS team of NYC construction and compliance experts. With 30+ years of combined experience, we're here to guide your project to success.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the PBS Team | NYC Property Compliance Experts",
    description:
      "Meet the PBS team of NYC construction and compliance experts. With 30+ years of combined experience, we're here to guide your project to success.",
  },
};

const teamPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Proactive Building Solutions",
      alternateName: "PBS NYC",
      url: "https://pbs.nyc",
      logo: "https://pbs.nyc/pics/LOGO.png",
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
        "Staten Island",
      ],
      knowsAbout: [
        "NYC building compliance",
        "Construction inspections",
        "Permit expediting",
        "DOB violations",
        "Certificate of Occupancy",
        "Zoning compliance",
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
      "@type": ["AboutPage", "WebPage"],
      "@id": WEBPAGE_ID,
      url: PAGE_URL,
      name: "Meet the PBS Team | NYC Property Compliance Experts",
      description:
        "Meet the PBS team of NYC construction and compliance experts. With 30+ years of combined experience, we're here to guide your project to success.",
      inLanguage: "en-US",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      mainEntity: {
        "@id": JON_ID,
      },
    },
    {
      "@type": "Person",
      "@id": JON_ID,
      name: "Jon Credendino",
      jobTitle: "Executive Director, CEO",
      description:
        "Licensed General Contractor, Superintendent and Filing Representative specializing in real estate development and problem solving.",
      url: PAGE_URL,
      mainEntityOfPage: {
        "@id": WEBPAGE_ID,
      },
      worksFor: {
        "@id": ORGANIZATION_ID,
      },
      knowsAbout: [
        "Compliance",
        "Inspections",
        "Permits",
        "Construction",
        "Property management",
        "Owner representation",
        "Real estate development",
      ],
      sameAs: ["https://www.linkedin.com/in/joncredendino/"],
    },
  ],
};

export default function OurTeamLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      {children}
    </>
  );
}