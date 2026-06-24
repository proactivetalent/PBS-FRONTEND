/**
 * Layout component for Local Law Guide page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Local Law Guides | Compliance Requirements | PBS",
  description:
    "Complete NYC local law guides for LL11, LL126, and LL152. Understand inspection requirements, deadlines, and penalties. Stay compliant with PBS",
  openGraph: {
    title: "NYC Local Law Guides | Compliance Requirements | PBS",
    description:
      "Complete NYC local law guides for LL11, LL126, and LL152. Understand inspection requirements, deadlines, and penalties. Stay compliant with PBS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Local Law Guides | Compliance Requirements | PBS",
    description:
      "Complete NYC local law guides for LL11, LL126, and LL152. Understand inspection requirements, deadlines, and penalties. Stay compliant with PBS",
  },
};

export default function LocalLawGuideLayout({ children }) {
  return children;
}
