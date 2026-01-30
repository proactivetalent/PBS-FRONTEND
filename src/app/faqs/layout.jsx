/**
 * Layout component for FAQs page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Property Compliance FAQs | PBS Alert System & Services",
  description: "Find answers to common questions about the PBS Alert System, NYC compliance deadlines, Local Law inspections, violation resolution, and our service plans.",
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | Proactive Building Solutions | PBS",
    description: "Find answers to common questions about the PBS Alert System, NYC compliance deadlines, Local Law inspections, violation resolution, and our service plans.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Frequently Asked Questions (FAQs) | Proactive Building Solutions | PBS",
    description: "Find answers to common questions about the PBS Alert System, NYC compliance deadlines, Local Law inspections, violation resolution, and our service plans.",
  },
};

export default function FAQsLayout({ children }) {
  return children;
}
