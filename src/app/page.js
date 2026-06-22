import HomeClient from "./HomeClient";

const PAGE_URL = "https://pbs.nyc";

export const metadata = {
  title: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
  description:
    "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your investment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
    description:
      "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your investment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies.",
    url: PAGE_URL,
    siteName: "Proactive Building Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
    description:
      "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your investment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies.",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pbs.nyc/#organization",
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
      founder: {
        "@id": "https://pbs.nyc/about-us/our-team#jon-credendino",
      },
      sameAs: [
        "https://www.linkedin.com/company/pbsnycofficial",
        "https://www.youtube.com/@ProactiveBuildingSolutions",
        "https://www.facebook.com/share/1CAh41pncN/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-212-271-6837",
        email: "info@pbs.nyc",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Person",
      "@id": "https://pbs.nyc/about-us/our-team#jon-credendino",
      name: "Jon Credendino",
      url: "https://pbs.nyc/about-us/our-team",
      worksFor: {
        "@id": "https://pbs.nyc/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://pbs.nyc/#website",
      url: "https://pbs.nyc",
      name: "Proactive Building Solutions",
      alternateName: "PBS NYC",
      publisher: {
        "@id": "https://pbs.nyc/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://pbs.nyc/#webpage",
      url: "https://pbs.nyc",
      name: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
      description:
        "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your investment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies.",
      isPartOf: {
        "@id": "https://pbs.nyc/#website",
      },
      about: {
        "@id": "https://pbs.nyc/#organization",
      },
      mainEntity: {
        "@id": "https://pbs.nyc/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <HomeClient />
    </>
  );
}