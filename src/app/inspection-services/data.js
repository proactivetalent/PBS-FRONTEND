export const hydrostaticTestingData = [
  {
    section: 1,
    headline: "Why your building needs this test:",
    bodyText: "FDNY Code § 903.5 Compliance isn’t Optional, it's mandated by NYC regulations to ensure optimal functionality and safety. Moreover it helps you to avoid fines, Operational Freezes and to ensure FDC pipes hold pressure during fires. Above all it's mandatory for all NYC commercial/residential buildings to get this Test done after 5 years.",
  },
  {
    section: 2,
    headline: "Our Hydrostatic Testing Process:",
    bodyText: "PBS Made FDNY Compliance easy in just 4 steps to Help our Clients understand NYC Complex rulebooks.",
    steps: [
      {
        step: "1- Pre-Test Inspection:",
        details: "Where we find hidden leaks. Rust, or weak joints before FDNY arrives",
      },
      {
        step: "2- FDNY Appointment request:",
        details: "As FDNY requires Master Contractors for thai job so this is where PBS Holds distinction, We handle Fax submissions + We secure your Test ID",
      },
      {
        step: "3- Once we are done with the Appointment request submission, we wait until FDNY approves the inspection",
        details: "",
      },
    ],
  },
  {
    section: 3,
    headline: "FDNY Color Codes Decoded:",
    bodyText: "Know your Fire Department Connection (FDC)",
    colorCodes: [
      {
        capColor: "Green",
        systemType: "Fire Sprinklers only",
        testFocus: "Pipe Integrity, Joint Seals",
      },
      {
        capColor: "Red",
        systemType: "Standpipes Only",
        testFocus: "Valve Pressure, Corrosion",
      },
      {
        capColor: "Yellow",
        systemType: "Combined Sprinkler + Standpipe",
        testFocus: "Full System Stress Test",
      },
    ],
  },
  {
    section: 4,
    headline: "Sprinkler Inspection Services:",
    bodyText: "Whether you are signing off and need final inspection or you are in the middle of your construction and require underground piping inspection or hydrostatic testing, we got it all as we deal with complete Sprinkler inspection and Hydrostatic testing",
    inspectionPhases: [
      {
        phase: "1- Phase Specific Inspections:",
        details: [
          "Underground Piping: Bedding, pitch, materials, protection, flushing",
          "Roughing Work: Piping, valves, components, size, location, materials, hangers",
          "Test. Hydrostatic: , flow, alarm, Dry Pipe Valve, Booster Pump",
          "Finishes: Painting, escutcheons, signage, labeling, chaining of valves, central station monitor assigned",
          "Final Inspection: Sign-off",
        ],
      },
      {
        phase: "2- Contractor Self-Certification",
        details: [
          "After the Inspection is done, we submit notices & Results of the Inspections via DOB NOW and a complete documentation of Audit-proof. The Sprinkler Enforcement Unit conducts a random audit of all self-certified notices to ensure compliance of inspected work with Code and regulations.",
        ],
      },
      {
        phase: "3- Repairs",
        details: ["Through our network of Vetted Contractors we make the repair get easily done"],
      },
    ],
  },
  {
    section: 5,
    headline: "Why Choose Us:",
    bodyText: "Finding FDNY Certified Professionals is a task for New Yorkers. PBS has all with NYC Department’s certified inspectors Serving in your neighbourhood since 2018 with fast-pace permitting and success ratio.",
    features: [
      "FDNY-Certified Master Inspectors",
      "Hundreds of Systems Tested Annually",
      "99% Pass Rate",
    ],
  },
  {
    section: 6,
    callToAction: {
      text: "Act before FDNY Notices you, your next test could be due tomorrow",
      contact: {
        call: "Call:",
        email: "Email",
      },
    },
    trustSignals: [
      "FDNY-CERTIFIED",
      "DOB-APPROVED",
      "NYC APPROVED",
      "LICENSED MASTER PLUMBERS",
      "LICENSED MASTER ELECTRICIAN",
      "NETWORK OF CONTRACTORS",
      "4.7/5 Google Reviews",
    ],
  },
];

export const inspectionServices = [
  {
    section: 1,
    headline: "PBS Handles the Codes You Handle the Peace",
    text: "Maintaining your property isn’t just an obligation, it’s a necessity to protect lives, uphold legal standards, and preserve long-term value. At PBS we turn complexity into clarity with inspections designed to safeguard what matters most.",
    subSections: [
      {
        headline: "Your Building’s Secrets Could be Deadly, We Find them",
        items: [
          "Hidden Risks: Like Detectives, We hunt cracks in Facades, Silent Gas Leaks, Crumbling Parapets & Elevator defects before they make headlines",
          "Disaster-proofing: Proactive inspections aren’t just checklists, they’re shields against lawsuits, injuries, and heartache. Sleep Soundly knowing your building is in good hands and your walls won’t weep or collapse",
        ],
        img: "/pics/Inspection-service-3-1.png"
      },
      {
        headline: "NYC’s Rulebook is thick, Your Headache doesn’t have to be",
        items: [
          "Law Whispers: We Translate Legalese into plain english and Deadlines into done",
          "Zero-stress Submission: Imagine DOB/FDNY paperwork that files itself. We handle the nitty-gritty, you get a golden “Compliant” Stamp.",
        ],
        additionalText: "99% of clients avoid fines by partnering with PBS",
        img: "/pics/Inspection-service-3-2.png"
      },
      {
        headline: "We Lose Sleep so you don’t have to",
        items: [
          "Decades in your Corner: Our Licensed Pros have seen it all. 25 years of NYC grit means “We Spot risks others Miss”",
        ],
        additionalText: "PBS ensures clients comply with local and state construction regulations, including managing paperwork, permits and adherence to zoning codes.",
        img: "/pics/Inspection-service-3-3.png"
      },
    ],
    cta: {
      text: "Meet your Building’s Guardians",
      href: "/about-us", // Dummy href, change as needed
    },
  },
  {
    section: 2,
    headline: "Our Inspection Services",
    services: [
      {
        id: 1,
        heading: "1- Facade Inspection (Local Law 11/FISP)",
        subheading: "NYC’s Silent Killer",
        text: "5 Years, 1 Inspection, Zero excuses",
        items: [
          "The Risk: Structural degradation or falling debris could injure pedestrians, trigger lawsuits, or result in huge fines for non-compliance",
          "Our Solution: Certified Engineers inspect masonry, parapets and waterproofing with actionable repair plans with streamlined reporting plan to meet NYC deadlines, keeping your building safe and legally protected.",
        ],
        cta: {
          text: "The Building we inspect avoid violations with proactive fixes",
          href: "/law/local-law", // Dummy href, change as needed
        },
        bg: "/pics/Inspection-service-2-1.png"
      },
      {
        id: 2,
        heading: "2- Parking Garage Inspections (Local law 126)",
        subheading: "Your Garage isn’t just Parking, it’s a liability",
        text: "Concrete cracks, Fines Stack, We Act",
        items: [
          "The Problem: Cracks, poor drainage, corroded rebar or crumbling concrete could cause collapses, endangering vehicles and pedestrians, also poor drainage accelerates decay leading to million-dollar repairs.",
          "What we uncover: Structural integrity evaluations focusing on load-bearing columns, slabs, and water proofing with custom repair strategies to reinforce weak points and extend your garage’s lifespan by decades.",
        ],
        additionalText: "Parking Garages require regular checks to ensure safety and avoid violations",
        cta: {
          text: "Parking Garages require regular checks to ensure safety and avoid violations",
          href: "/law/local-law-parking", // Dummy href, change as needed
        },
        bg: "/pics/Inspection-service-2-2.png"
      },
      {
        id: 3,
        heading: "3- Parapet Inspection (Local Law 126)",
        subheading: "The Wall you never Notices, Falls",
        text: "Parapets Protect, PBS Perfects",
        items: [
          "Why it’s Critical: Aging parapets can loosen or detach due to weathering, hidden corrosion, or poor construction, risking collapse and endangering pedestrians below",
          "Winter Warning & Summer Threats: Our certified inspectors inspect your parapets with attention to detail and we provide actionable repair plans and documentation to resolve issues swiftly, ensuring your parapets meet safety codes.",
        ],
        additionalText: "Parapet inspections are not Seasonal",
        cta: {
          text: "Parapet inspections are not Seasonal",
          href: "/law/local-law-parapet", // Dummy href, change as needed
        },
        bg: "/pics/Inspection-service-2-3.png"
      },
      {
        id: 4,
        heading: "4- Gas Line Inspections (Local Law 152)",
        subheading: "Gas Leaks don’t knock, They Explode",
        text: "Annual Checks aren’t optional, they’re Survival",
        items: [
          "Risk: Aging or corroded gas lines can develop undetected leaks, risking explosions, carbon monoxide poisoning, or fire hazards can endanger occupants and property.",
          "Our Solution: Pressure Testing: We Hunt Leaks with 99% Accuracy. Corrosion Mapping: We Spot Weak points before they burst. DOB Reporting: We file everything, no paperwork for you",
        ],
        cta: {
          text: "Meet NYC’s 5-year cycle deadlines",
          href: "/law/local-law-152", // Dummy href, change as needed
        },
        bg: "/pics/Inspection-service-2-4.png"
      },
      {
        id: 5,
        heading: "5- Sprinkler Hydrostatic Tests",
        subheading: "Water Pressure- Your Fire’s First Responder",
        text: "Weak Pressure = Weak Protection",
        items: [
          "The Risk: Clogged sprinkler heads or low water pressure could render systems useless during a fire, risking lives and property & non-compliance with NFPA standards may void insurance coverage or trigger liability claims",
          "Our Solution: Full System testing under real-world conditions to ensure 24/7 readiness with fast repairs and recertification to keep your insurance valid and occupants protected, We inspect Valve, alarm and flow checks to get FDNY Fast Pass. You will get Certified reports from FDNY.",
        ],
        cta: {
          text: "Get your sprinkler compliant with NFPA Standard",
          href: "/inspection-services/sh-inspection", // Dummy href, change as needed
        },
        bg: "/pics/Inspection-service-2-5.png"
      },
      {
        id: 6,
        heading: "6- Elevator Inspection",
        subheading: "Elevators aren’t just Lifts, they’re legal liabilities",
        text: "Modernize or Penalize",
        items: [
          "The Risk: Malfunctioning brakes or misaligned doors could trap passengers, spur panic, or lead to injury lawsuits, outdated systems may violate accessibility laws (ADA), exposing you to discrimination claims",
          "How We Help: Comprehensive checks of mechanical, electrical and safety systems (e.g., emergency lighting, alarms), also upgrading and recertification to meet ASME/ADA standards is what we do to ensure smooth, lawsuit-proof operations.",
        ],
        additionalText: "Inspections are done with ADA Act in loop",
        cta: {
          text: "Inspection to comply ASME/ADA Standards",
          href: "/inspection-services/elevator-inspection", // Dummy href, change as needed
        },
        bg: "/pics/Inspection-service-2-6.png"
      },
    ],
    additionalText: "PBS simplifies the regulatory process, helping clients avoid fines, delays and project interruptions through expert compliance management and guidance. With PBS, you’re not just complying with regulations; you’re investing in peace of mind for your family, tenants, stakeholders and community.",
  },
  {
    section: "cta",
    headline: "PBS Handles the Codes, You Handle the Peace",
    buttons: [
      { text: "Schedule a Compliance Audit", href: "/about-us" }, // Dummy href, change as needed
      { text: "Call Our Inspectors (914-316-6956)", href: "/about-us" }, // Dummy href, change as needed
    ],
  },
];



export const elevatorComplianceData = [
  {
    section: 2,
    headline: "Understanding NYC Elevator Compliance",
    bodyText: "New York City requires annual inspections of all elevators to ensure they operate safely and efficiently. Failure to comply can result in violations, penalties, and increased liability risks. Our services are designed to assist property owners and managers in meeting these obligations seamlessly.",
    scenarios: [
      {
        consequence: "Late Filing (Per Month)",
        details: "Residential (J): $50/device, Non-Residential (A): $150-$250/device",
        safeguard: "Timely Reporting: We prepare and submit all required inspection reports through the DOB NOW: Safety portal, ensuring adherence to filing deadlines and avoiding late penalties.",
      },
      {
        consequence: "Max Annual Late Fees",
        details: "Residential (J): $600/device, Non-Residential (A): $1,800-$3,000/device",
        safeguard: "Ongoing Compliance Support: We offer continuous monitoring and reminders for upcoming inspections, helping you maintain compliance year after year.",
      },
      {
        consequence: "Failure to File",
        details: "Residential (J): $1,000/device, Non-Residential (A): $3,000-$5,000/device",
        safeguard: "Detailed Inspections: Our licensed professionals conduct thorough evaluations of your elevator systems, identifying any issues that may compromise safety or efficiency.",
      },
      {
        consequence: "Failure to Correct (FTC)",
        details: "$1,000/device, Non-Residential (A): $3,000/device Plus operational shutdowns, tenant lawsuits, and reputational damage.",
        safeguard: "Violation Resolution: If violations are identified, we provide guidance on corrective actions and assist in resolving issues promptly to restore compliance.",
      },
    ],
    additionalText: ["The Cost of Non-Compliance: What NYC Doesn’t Tell You (But PBS Does)"],
  },
  {
    section: 4,
    headline: "Our Services: End-to-End Elevator Compliance Solutions",
    services: [
      {
        title: "Mandatory Inspections & Testing",
        details: [
          "Stay Ahead of Deadlines",
          "Periodic Inspections (Annual): Visual checks between Jan 1 – Dec 31. Deadline: File within 14 days. Late after Jan 14 = $1,000 fines. PBS Advantage: Same-day digital submissions to DOB.",
          "Category 1 (CAT1) Tests: Annual no-load safety tests. Deadline: File within 21 days. Late after Jan 21 = $3k-$5k fines.",
          "Category 5 (CAT5) Tests: Load/speed tests every 5 years. Deadline: Submit within 21 days. Miss = $5k penalties.",
        ],
      },
      {
        title: "Violation Resolution",
        details: [
          "Affirmation of Correction (AOC): DOB Requirement: Fix defects within 90 days (104-day hard cutoff) → PBS handles repairs + filings.",
          "DOB/PVT Violation Dismissal: Correct issues in 10-30 days. We submit proof + negotiate waivers.",
        ],
      },
      {
        title: "Maintenance & Permits",
        details: [
          "Avoid 'Failure to Maintain' Violations",
          "Maintenance Control Programs (MCP): ASME-compliant logs, manufacturer protocols, and 24/7 repair contracts.",
          "Permit Management: New installations? Major upgrades? We file via DOB NOW: Build.",
          "Tenant Notifications: Automate outage alerts and post required permits publicly.",
          "Stay Operational. Protect Tenants. Sleep Soundly.",
        ],
      },
    ],
  },
  {
    section: 5,
    headline: "How It Works",
    subHeadline: "Compliance Without Chaos",
    steps: [
      {
        step: "1. Book Online in 60 Seconds",
        details: "Choose day/night slots. No tenant disruption.",
      },
      {
        step: "2. Inspect & Test",
        details: "DOB-approved experts conduct checks.",
      },
      {
        step: "3. Repair & File",
        details: "Fix defects fast. We submit to DOB NOW.",
      },
      {
        step: "4. Rest Easy",
        details: "Get auto-reminders for next year.",
      },
    ],
  },
  {
    section: 6,
    callToAction: {
      text: "Act Now or Risk $5k Fines:",
      button1: { text: "Call (555) 987-6543 (24/7)", href: "tel:5559876543" },
    },
    trustSignals: [
      "FDNY-CERTIFIED",
      "DOB-APPROVED",
      "NYC APPROVED",
      "LICENSED MASTER PLUMBERS",
      "LICENSED MASTER ELECTRICIAN",
      "NETWORK OF CONTRACTORS",
      "4.7/5 Google Reviews",
    ],
  },
  {
    section: 7,
    headline: "Why Choose PBS?",
    bodyText: "NYC’s Trusted Elevator Compliance Partner",
    services: [
      {
        title: "Expertise",
        details: [
          "DOB-licensed inspectors",
          "15+ years in NYC",
          "100% pass rate on CAT5, CAT1 tests",
        ],
      },
      {
        title: "Speed",
        details: [
          "24/7 emergency repairs",
          "Same-week inspections",
          "90% repairs in <30 days",
        ],
      },
      {
        title: "Technology",
        details: [
          "Real-time compliance app",
          "Deadline tracker",
          "Digital maintenance logs",
        ],
      },
    ],
    additionalText: [
      "$0 Violation Guarantee: Approved filings or we cover penalties.",
      "24/7 Emergency Support: Critical repairs done in <8 hours.",
      "DOB-Approved Experts: 1,200+ elevators compliant since 2018.",
    ],
  },
];

import { ChevronDown, FileText, Scale, Landmark, Library } from "lucide-react";

export const boilerComplianceData = [
  {
    section: 2,
    headline: "Why Compliance isn’t Optional",
    bodyText: "Regular Boiler Inspections are mandated by NYC regulations to maintain safety and compliance. Being compliant with Code is necessary for all stakeholders and if not there are a lot of circumstances everyone faces",
    scenarios: [
      {
        consequence: "Late Filing",
        details: "$50/Month fines upto 600/Boiler",
        safeguard: "Auto-reminders + Same-day Filing Guarantee",
      },
      {
        consequence: "Expired Report",
        details: "$1000/Boiler fine +Operational shutdown",
        safeguard: "Audit to resolve backlogged violations",
      },
      {
        consequence: "Uncorrected Defects",
        details: "Tenant Lawsuits + Insurance denial",
        safeguard: "Repair crews with 90-day completion promise",
      },
    ],
    additionalText: [
      `NYC Trusts us because we speak figures, we speak facts, we speak code, We speak deadlines, we guide what NYC says, the reason is we made Boiler compliance simple for you:\n`,
      `Low-Pressure Boilers: Annual inspections (Jan 1- Dec 31)\n`,
      `High-pressure Boilers: Internal + External Inspections (6 Months Apart)\n`,
      `14-Day Filing rule: Reports due within 2 weeks of inspections`,
      `90-Day Repair Window: Fix defects fast or face $1000+/Boiler fines\nOur Expert Services help you navigate these requirements efficiently, minimizing risks and potential liabilities`],
  },
  {
    section: 4,
    headline: "Full-Service Compliance Solutions",
    services: [
      {
        title: "Low Pressure Boiler Inspections",
        whoNeedsIt: "Residential (6+ units), Commercial & Mixed-Use Buildings",
        exemptions: "Buildings with <5 Residential units and Single-unit Boilers heating only 1 Apartment are exempted",
        process: "We Inspect, we report and we connect you with contractors for repairs",
        details: [
          "Inspect: Our DOB-Licensed Professionals & Authorized insurance inspectors check for leaks, corrosion, and ASME H/E-Stamp Compliance",
          "We file the report in DOB NOW within 14 Days to avoid fines",
          "Through our Vetted Contractors we get your Boiler repaired within 90 Days and if required we request for extensions from DOB on your behalf",
        ],
      },
      {
        title: "High pressure Boiler Compliance",
        criticalRequirements: [
          "Internal Inspections: NYC ask to check boiler interiors for cracks, sediments, and pressure integrity",
          "External Inspections: Examining of Piping, valves, and safety devices",
          "We are partnered with authorized insurance inspectors for legal compliance",
          "We submit 10-Day advance notices to DOB for Internal inspections",
        ],
      },
    ],
  },
  {
    section: 5,
    headline: "Your Compliance Roadmap:",
    subHeadline: "3 Simple Steps to avoid fines",
    steps: [
      {
        step: "1- Book Inspection",
        details: "Choose any slot (Day/Night) for minimal Tenant disruption",
      },
      {
        step: "2- Review & Repair",
        details: "Get a digital report with photos & repair priorities",
      },
      {
        step: "3- File & Monitor",
        details: "We submit to DOB and track approvals, receive annual reminder",
      },
    ],
  },
  {
    section: 6,
    callToAction: {
      text: "Act before deadlines bury you, your next inspection could save $10,000",
      button1: { text: "Book inspection", href: "/alert" }, // Replace with actual href
      button2: { text: "Call at 914-316-6956", href: "tel:914-316-6956" }, // Replace with actual href
    },
    trustSignals: [
      "FDNY-CERTIFIED",
      "DOB-APPROVED",
      "NYC APPROVED",
      "LICENSED MASTER PLUMBERS",
      "LICENSED MASTER ELECTRICIAN",
      "NETWORK OF CONTRACTORS",
      "4.7/5 Google Reviews",
    ],
  },
];

