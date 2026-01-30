/**
 * Layout component for Property Management page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Property Management Services | Compliance-Focused Portfolio Oversight | PBS",
  description: "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
  openGraph: {
    title: "NYC Property Management Services | Compliance-Focused Portfolio Oversight | PBS",
    description: "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NYC Property Management Services | Compliance-Focused Portfolio Oversight | PBS",
    description: "Full-service NYC property management that prioritizes proactive compliance. We handle operations, maintenance, tenant relations, and all agency filings for seamless ownership.",
  },
};

export default function PropertyManagementLayout({ children }) {
  return children;
}
