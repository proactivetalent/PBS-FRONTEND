/**
 * Layout component for Alert System page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "PBS Alert System | Real-Time NYC Compliance Monitoring for Property Managers",
  description: "Get 24/7 alerts for DOB, HPD, FDNY, ECB violations, inspection deadlines, and permit expirations. Turn city compliance from a burden into a managed system. Free 3 month trial.",
  openGraph: {
    title: "PBS Alert System | Real-Time NYC Compliance Monitoring for Property Managers",
    description: "Get 24/7 alerts for DOB, HPD, FDNY, ECB violations, inspection deadlines, and permit expirations. Turn city compliance from a burden into a managed system. Free 3 month trial.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PBS Alert System | Real-Time NYC Compliance Monitoring for Property Managers",
    description: "Get 24/7 alerts for DOB, HPD, FDNY, ECB violations, inspection deadlines, and permit expirations. Turn city compliance from a burden into a managed system. Free 3 month trial.",
  },
};

export default function AlertLayout({ children }) {
  return children;
}
