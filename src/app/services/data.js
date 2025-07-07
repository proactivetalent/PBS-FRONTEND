import {
  Building,
  ClipboardList,
  Hammer,
  HelpCircle,
  Scale,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Owner Representatives",
    icon: "/pics/service1.png", 
    description:
      "We act as your voice in property management, advocating for your interests in compliance, inspections, and cost optimization. From liaising with contractors to resolving violations, we simplify complexity.",
    sections: [
      "Local Law Compliance: Manage deadlines for LL11, LL126, and LL152",
      "\nCost-Saving Strategies: Negotiate contractor rates and avoid fines",
      "\nTransparent Reporting: Real-time updates via client portal.",
    ],
    cta: "/owner-representative",
  },
  {
    id: 2,
    title: "Compliance Inspection Services",
    icon: "/pics/service2.png",
    description:
      "Stay ahead of NYC’s stringent building codes with our certified inspections for facades, elevators, gas lines, and fire safety systems.",
    sections: [
      ":PBS ensures clients comply with local and state construction regulations, including managing paperwork, permits and adherence to zoning codes.",
      ":PBS simplifies the regulatory process, helping clients avoid fines, delays and project interruptions through expert compliance management and guidance.",
    ],
    cta: "/inspection-services",
  },
  {
    id: 3,
    title: "Expediting Services",
    icon: "/pics/service3.png",
    description:
      "Fast-track permits and approvals for construction projects, renovations, and system upgrades. PBS expedites the permit approval process, providing clients with a faster route to project completion, eliminating bottlenecks, and ensuring adherence to project timelines.",
    sections: [
      "Speed: 50% faster permit approvals vs. DIY filings",
      "\nAccuracy: Error-free submissions to avoid rejections",
      "\nFull-Service: DOB, FDNY, DOT, and zoning filings.",
    ],
    cta: "/expediting-services",
  },
  {
    id: 4,
    title: "Property Management",
    icon: "/pics/service4.png",
    description:
      "End-to-End management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction. End-to-End management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction.",
    sections: [
      "Financial Oversight: Rent collection, budgeting, and reporting.",
      "\nMaintenance: 24/7 emergency repairs and preventive care.",
      "\nLegal Compliance: Lease agreements and safety audits.",
    ],
    cta: "/property-management",
  },
];

export const sections = [
  {
    id: 1,
    title: "DEP/DOH/DSNY",
    description: `These departments often issue violations based on inspections, environmental data, or public complaints to regulate health, environmental, and sanitation standards in NYC. Failure to respond can lead to escalated enforcement actions, legal complications, or operational halts for buildings and businesses. Staying proactive is crucial in avoiding surprises`,
    image: "/pics/service-section3.png",
    details: [
      {
        title: "Risks of Non-Compliance",
        description:
          ["Violations can stem from noise complaints, improper garbage disposal, or health hazards and may lead to heavy penalties or service disruptions. Even a single unresolved issue can snowball into multiple fines or litigation."],
      },
      {
        id:2
      },
      {
        title: "How PBS Helps",
        description: [
          "1- Violation investigation and response",
          "2- Immediate resolution support for urgent complaints",
          "3- Ongoing Monitoring to avoid repeat infractions",
          "4- Document submission & communication on your behalf",
          "5- Permitting and Expediting services under these departments",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "DOB",
    description: `The DOB maintains strict oversight over all constructions, renovations, and occupancy processes in NYC. From structural work to inspections, even minor oversights can trigger violations. Proper documentation and scheduling are essential for seamless project execution and long-term compliance.`,
    image:
      "/pics/service section3-2.png",
    details: [
      {
        title: "Consequences of overlooking Compliance",
        description:
          ["Unpermitted work, expired documents, or missed inspections can lead to stop-work orders, violations, and legal consequences. DOB violations can also affect building value and refinancing"],
      },
      {
        id:2
      },
      {
        title: "How PBS Helps",
        description: [
          "1- Handling of Violation response",
          "2- Tracking of Complaint Status",
          "3- Preparation of supporting documentation and directly liaise with DOB to bring your property back into compliance",
          "4- Expediting and Permitting",
        ], // Placeholder for you to fill in
      },
    ],
  },
  {
    id: 3,
    title: "ECB",
    description: `The Environmental Control Board, otherwise known as OATH, handles hearings for over a dozen NYC agencies, including DOB, DOT, FDNY, and more. Many building owners aren’t aware that missing just one hearing can result in default penalties, liens, or added fees. It's essential to have a structured system to track and respond to ECB notices.`,
    image:
      "/pics/service section-3-3.png",
    details: [
      {
        title: "What Can Go Wrong",
        description:
         [ "Failure to appear at hearings or respond to notices can result in default penalties, doubled fines, property liens, and collections. Every violation needs timely action."],
      },
      {
        id:2
      },
      {
        title: "How PBS Helps",
        description: [
          "1- Complete Case study with documents",
          "2- Representation of clients at hearings",
          "3- Monitoring of Case statuses",
          "4- Coordination for resolutions across all agencies involved",
        ], // Placeholder for you to fill in
      },
    ],
  },
  {
    id: 4,
    title: "FDNY",
    description: `FDNY Compliance isn’t just legal–it’s about life safety. Fire suppression systems, emergency exits, and alarms must meet evolving codes. The Fire Department has many certificates, permits, and periodic inspection requirements. The department's major requirements include, but are not limited to, a five-year sprinkler flow test, annual backflow inspections, fire alarm approvals, Certificates of Fitness, letters of approval, and Certificates of Corrections.`,
    image:
      "/pics/service section-3-4.png",
    details: [
      {
        title: "Impact of Non-Compliance",
        description:
         [ "Non-Compliance with FDNY codes can result in violation orders, closures, and massive liability in the event of an incident. Certain businesses even need specific FDNY certifications to operate."],
      },
      {
        id:2
      },
      {
        title: "How PBS Helps",
        description: [
          "1- Compliance Inspections under this department",
          "2- Scheduling of Official inspections",
          "3- Addressing violations",
          "4- Permits, and acquiring Certificates of Fitness and other FDNY-required documents",
        ], // Placeholder for you to fill in
      },
    ],
  },
  {
    id: 5,
    title: "HPD",
    description: `The Housing Preservation & Development violations often stem from tenant complaints or random inspections. The department emphasizes safe, livable conditions in multifamily housing. HPD requires annual registration with many codes to abide by.`,
    image:
      "/pics/service section3-5.png",
    details: [
      {
        title: "Why It Matters",
        description:
          ["HPD violations can make your property ineligible for refinancing or new tenants. Repeated or unaddressed issues can lead to court cases and severe penalties."],
      },
      {
        id:2
      },
      {
        title: "How PBS Helps",
        description: [
          "1- Managing of Tenant Complaints",
          "2- Performing and Scheduling required inspections",
          "3- Submission of correction proofs",
          "4- Handling of registration and compliance filing on your behalf",
        ], // Placeholder for you to fill in
      },
    ],
  },
  {
    id: 6,
    title: "DOT",
    description: `The Department of Transportation controls access to public spaces like streets and sidewalks. Whether it's placing a dumpster, installing a scaffold, or fixing a curb, proper DOT permits and compliance documentation are mandatory.`,
    image:
      "/pics/service section3-6.png",
    details: [
      {
        title: "Delays & Fines Without Proper Handling",
        description:
          ["Work in public spaces without DOT permits can bring immediate violations, stop orders, and project delays. These violations are costly and public-facing"],
      },
      {
        id:2
      },
      {
        title: "How PBS Helps",
        description: [
          "1- Securing of DOT Permits",
          "2- Responding to violation notices",
          "3- Performing or coordinating in inspections",
          "4- Avoid project delays through proper expediting",
        ], // Placeholder for you to fill in
      },
    ],
  },
];

export const whyPBS = {
  title: "Why PBS",
  description:"30+ Years of Experience: Trusted by NYC property owners. 100% Compliance Rate: Zero fines for clients in 2023. Dedicated Support: Single point of contact for all services. Certified experts: Licensed inspectors familiar with NYC DOB, FDNY and other departments code",
  tagline: "Ready to Simplify Property Compliance? Schedule a consultation with PBS today."
}

// export const mainSections = [
//   {
//     overview: {
//       icon: ClipboardList,
//       title: "Service Overview",
//       content:
//         "Professional foundation repair and structural reinforcement services ensuring long-term stability for NYC buildings. Our certified engineers combine traditional methods with cutting-edge technology for optimal results.",
//     },
//     whyImportant: {
//       icon: Scale,
//       title: "Why It's Crucial",
//       items: [
//         "Mandatory compliance with NYC Building Code §28-301.1",
//         "Prevents costly structural failures and safety hazards",
//         "Increases property value by 15-20%",
//       ],
//     },
//     process: {
//       icon: Hammer,
//       title: "Our Process",
//       steps: [
//         {
//           step: 1,
//           title: "Site Assessment",
//           description: "Detailed structural analysis using 3D imaging",
//         },
//         {
//           step: 2,
//           title: "Engineering Plan",
//           description: "Customized reinforcement strategy development",
//         },
//         {
//           step: 3,
//           title: "Precision Execution",
//           description: "Certified technicians implement solutions",
//         },
//         {
//           step: 4,
//           title: "Final Inspection",
//           description: "DOB-approved compliance verification",
//         },
//       ],
//     },
//     regulations: {
//       icon: Building,
//       title: "NYC Compliance",
//       items: [
//         "Local Law 11: Facade Inspection & Safety Program",
//         "DOB Chapter 33: Safeguards During Construction",
//         "2014 NYC Building Code: Structural Integrity Standards",
//       ],
//     },
//     faq: {
//       icon: HelpCircle,
//       title: "Common Questions",
//       items: [
//         {
//           question: "How long does the process take?",
//           answer:
//             "Typical projects range from 2-6 weeks depending on scope and approvals.",
//         },
//         {
//           question: "What warranty do you offer?",
//           answer:
//             "All work comes with a 10-year structural warranty backed by insurance.",
//         },
//         {
//           question: "Do you handle permits?",
//           answer: "Yes, we manage all necessary DOB permits and inspections.",
//         },
//       ],
//     },
//   },
//   {
//     overview: {
//       icon: ClipboardList,
//       title: "Service Overview",
//       content:
//         "NYC Local Law 126 (2021) mandates comprehensive parking structure inspections every 6 years to prevent structural failures. Our DOB-certified QPSIs conduct condition assessments using advanced techniques like ground penetrating radar and core sampling, ensuring compliance with current Cycle 1B requirements (2024-2025).",
//     },
//     whyImportant: {
//       icon: Scale,
//       title: "Why LL126 Compliance Matters",
//       items: [
//         "Avoid ECB violations up to $25,000 for missed deadlines",
//         "Prevent catastrophic failures like 57 Ann St collapse (2023)",
//         "Meet 2025 Cycle 1B requirements for Manhattan CD8-12 & Brooklyn",
//         "Maintain property occupancy certificates and insurance coverage",
//         "Address SREM conditions before automatic upgrade to Unsafe status",
//       ],
//     },
//     process: {
//       icon: Hammer,
//       title: "LL126 Inspection Process",
//       steps: [
//         {
//           step: 1,
//           title: "Initial Condition Assessment",
//           description:
//             "QPSI conducts hands-on inspection of 10%+ structural elements with corrosion mapping and load testing",
//         },
//         {
//           step: 2,
//           title: "Classification & Reporting",
//           description:
//             "File DOB NOW report within 60 days (Safe/SREM/Unsafe) per 1 RCNY 103-13",
//         },
//         {
//           step: 3,
//           title: "Critical Repairs",
//           description:
//             "Address Unsafe conditions within 90 days with amended report within 2 weeks of completion",
//         },
//         {
//           step: 4,
//           title: "Annual Observations",
//           description:
//             "Implement QPSI-developed checklist for ongoing monitoring between full cycles",
//         },
//       ],
//     },
//     regulations: {
//       icon: Building,
//       title: "Key NYC Compliance Requirements",
//       items: [
//         "Local Law 126 (2021) - Parking Structure Safety Program",
//         "1 RCNY 103-13 Periodic Inspection Rules",
//         "FISP LL11 Integration for combined facade/garage structures",
//         "DOB Chapter 33 Construction Safeguards",
//         "2022 NYC Building Code §28-323.1 Structural Appurtenances",
//       ],
//     },
//     faq: {
//       icon: HelpCircle,
//       title: "LL126 Compliance FAQs",
//       items: [
//         {
//           question: "What's the penalty for missing Cycle 1B deadlines?",
//           answer:
//             "$2,500 monthly fines until compliance + possible vacate orders for Unsafe conditions [3][6]",
//         },
//         {
//           question: "Does LL126 apply to residential parking garages?",
//           answer:
//             "Yes, except private 1-2 family garages or lots with <3 spaces [5][13]",
//         },
//         {
//           question: "How does Cycle 1B affect my property?",
//           answer:
//             "Mandatory initial observation by 8/1/24 + full assessment by 12/31/25 for CD8-12 Manhattan & Brooklyn [3][14]",
//         },
//         {
//           question: "What's the cost range for LL126 compliance?",
//           answer:
//             "$5,000-$25,000+ depending on structure size and condition [6][14]",
//         },
//         {
//           question: "How differs from FISP LL11?",
//           answer:
//             "6-year cycles vs 5-year, focuses on load-bearing elements vs facades, requires QPSI vs QEWI [2][7]",
//         },
//       ],
//     },
//   },
//   {
//     overview: {
//       icon: ClipboardList,
//       title: "Service Overview",
//       content:
//         "2025 FISP Cycle 10 compliance services for NYC facades and parapets. Our certified QEWIs provide condition assessments using advanced 3D mapping and AI-assisted deterioration tracking to meet new Cycle 10A-10C sub-cycle requirements (2025-2029).",
//     },
//     whyImportant: {
//       icon: Scale,
//       title: "Critical 2025 Updates",
//       items: [
//         "New $5,000/year penalties for missed Cycle 10 filings [1][5]",
//         "Mandatory condition mapping & repair timelines per 1 RCNY 101-07 [1][4]",
//         "Block-based sub-cycles: 10A (2025-27) for blocks ending 4,5,6,9 [1][5]",
//         "Unsafe conditions now require 48-hour DOB notification [1][3]",
//         "25% increase in ECB fines for SREM conditions [1][6]",
//       ],
//     },
//     process: {
//       icon: Hammer,
//       title: "FISP Cycle 10 Process",
//       steps: [
//         {
//           step: 1,
//           title: "Sub-Cycle Determination",
//           description:
//             "Block number analysis for 10A/10B/10C classification per BC 28-304.1.1",
//         },
//         {
//           step: 2,
//           title: "Digital Condition Mapping",
//           description:
//             "AI-assisted defect tracking with prognostic repair timelines",
//         },
//         {
//           step: 3,
//           title: "Tiered Reporting",
//           description:
//             "File Safe/SREM/Unsafe designations via DOB NOW within 60 days",
//         },
//         {
//           step: 4,
//           title: "Critical Repairs",
//           description:
//             "Address Unsafe conditions within 30 days with follow-up inspection",
//         },
//       ],
//     },
//     regulations: {
//       icon: Building,
//       title: "2025 Compliance Requirements",
//       items: [
//         "Local Law 11/FISP Cycle 10 (2025-2029)",
//         "1 RCNY 101-07 Enhanced Documentation Rules",
//         "2022 NYC BC §28-304.1.1 Structural Appurtenances",
//         "DOB Bulletin 2025-001 Facade Inspection Protocols",
//         "Int. 0904 Predictive Inspection Mandates [7]",
//       ],
//     },
//     faq: {
//       icon: HelpCircle,
//       title: "FISP Cycle 10 FAQs",
//       items: [
//         {
//           question: "What's new in Cycle 10 vs previous cycles?",
//           answer:
//             "Mandatory sub-cycles, prognostic repair timelines, and 25% higher fines for SREM conditions [1][5]",
//         },
//         {
//           question: "When is Cycle 10A due?",
//           answer:
//             "First filings for 10A districts (blocks ending 4,5,6,9) due by 2/21/2027 [1][5]",
//         },
//         {
//           question: "Penalty for late filing?",
//           answer:
//             "$1,000/month late fees + $5,000 annual non-compliance fine [1][5]",
//         },
//         {
//           question: "Required for buildings under construction?",
//           answer:
//             "Yes - new 2025 rules require interim inspections every 18 months [1][3]",
//         },
//       ],
//     },
//   },
// ];
