/**
 * Layout component for Owner Representative page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
  description: "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
  openGraph: {
    title: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
    description: "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NYC Owner's Representative | Construction & Capital Project Management | PBS",
    description: "Your advocate for NYC construction projects. PBS acts as your owner's rep, managing budgets, timelines, contractors, and agency approvals to protect your investment.",
  },
};

export default function OwnerRepresentativeLayout({ children }) {
  return children;
}
