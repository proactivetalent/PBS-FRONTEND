/**
 * Layout component for Inspection Services page
 * Exports metadata for SEO while keeping page.jsx as a client component
 */

export const metadata = {
  title: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
  description: "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
  openGraph: {
    title: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
    description: "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NYC Inspection Services | Local Law 11, 126, 152 Compliance | PBS",
    description: "Certified NYC inspections for Local Law 11 (FISP), LL126 (garage/parapet), LL152 (gas), boilers & more. Avoid fines with our compliant reporting and repair coordination.",
  },
};

export default function InspectionServicesLayout({ children }) {
  return children;
}
