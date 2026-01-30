/**
 * Layout component for Blog page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Property Compliance Blog | Guides on LL11, Permits, Violations | PBS",
  description: "Resource section for NYC property compliance. Expert articles on Local Laws (LL11,126,152), avoiding fines and proactive property management strategies",
  openGraph: {
    title: "NYC Property Compliance Blog | Guides on LL11, Permits, Violations | PBS",
    description: "Resource section for NYC property compliance. Expert articles on Local Laws (LL11,126,152), avoiding fines and proactive property management strategies",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NYC Property Compliance Blog | Guides on LL11, Permits, Violations | PBS",
    description: "Resource section for NYC property compliance. Expert articles on Local Laws (LL11,126,152), avoiding fines and proactive property management strategies",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
