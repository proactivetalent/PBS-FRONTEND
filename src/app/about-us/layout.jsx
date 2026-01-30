/**
 * Layout component for About Us page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "About PBS NYC | NYC's Trusted Property Compliance Partner",
  description: "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
  openGraph: {
    title: "About PBS NYC | NYC's Trusted Property Compliance Partner",
    description: "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About PBS NYC | NYC's Trusted Property Compliance Partner",
    description: "NYC property owners trust PBS. We combine deep city agency expertise with cutting-edge technology to provide proactive compliance, inspections, and expediting services.",
  },
};

export default function AboutUsLayout({ children }) {
  return children;
}
