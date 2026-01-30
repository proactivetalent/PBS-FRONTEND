/**
 * Layout component for Expediting Services page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
  description: "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
  openGraph: {
    title: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
    description: "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NYC Expediting Services | Resolve DOB Violations & File Permits Fast | PBS",
    description: "Our NYC expeditors resolve violations, secure approvals, and navigate city agency red tape to keep your project moving.",
  },
};

export default function ExpeditingServicesLayout({ children }) {
  return children;
}
