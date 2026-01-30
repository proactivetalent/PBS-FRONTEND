/**
 * Layout component for Contacts page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "Contact PBS NYC | Get Your Property Compliance Consultation",
  description: "Have any questions about NYC compliance? Contact our expert team for a portfolio review, Alert services, or to discuss our inspection and expediting services",
  openGraph: {
    title: "Contact PBS NYC | Get Your Property Compliance Consultation",
    description: "Have any questions about NYC compliance? Contact our expert team for a portfolio review, Alert services, or to discuss our inspection and expediting services",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact PBS NYC | Get Your Property Compliance Consultation",
    description: "Have any questions about NYC compliance? Contact our expert team for a portfolio review, Alert services, or to discuss our inspection and expediting services",
  },
};

export default function ContactsLayout({ children }) {
  return children;
}
