'use client';
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import CTA2 from "@/components/CTA2";

const Page = () => {
  const section01 = {
    title: "7- Elevator Inspection",
    heading: "Elevators aren’t just Lifts, they’re legal liabilities",
    text: "Modernize or Penalize",
    items: [
      "What keeps you up at night? The nagging fear of hidden risks lurking in your building’s walls, systems, or structures. The Dread of a surprise violation that spirals into fines, shutdowns, or worse–a preventable disaster.",
    ],
    additionalText: "Inspection to comply ASME/ADA Standards",
  };

  const Div2_Sec1 = {
    title: "Understanding NYC Elevator Compliance",
    description:
      "New York City requires annual inspections of all elevators to ensure they operate safely and efficiently. Failure to comply can result in violations, penalties, and increased liability risks. Our services are designed to assist property owners and managers in meeting these obligations seamlessly. PBS ensures your elevators meet ASME A17.1 standards and NYC Fire Code- guaranteed.",
    subheading: "The Cost of Non-Compliance",
    text1: "What NYC Doesn’t Tell You (But PBS Does)",
    table: {
      headers: ["Violation", "Residential (J)", "Non-Residential (A)"],
      rows: [
        {
          violation: "Late Filing (Per Month)",
          residential: "$50/device",
          nonResidential: "$150-$250/device",
        },
        {
          violation: "Max Annual Late Fees",
          residential: "$600/device",
          nonResidential: "$1,800-$3,000/device",
        },
        {
          violation: "Failure to File",
          residential: "$1,000/device",
          nonResidential: "$3,000-$5,000/device",
        },
        {
          violation: "Failure to Correct (FTC)",
          residential: "$1,000/device",
          nonResidential: "$3,000/device",
        },
      ],
    },
    table1: {
      headers: ["Expertise", "Speed", "Technology"],
      rows: [
        {
          Expertise: "DOB-licensed inspectors",
          Speed: "24/7 emergency repairs",
          Technology: "Real-time compliance app",
        },
        {
          Expertise: "15+ years in NYC",
          Speed: "Same-week inspections",
          Technology: "Deadline tracker",
        },
        {
          Expertise: "100% pass rate on CAT5, CAT1 tests",
          Speed: "90% repairs in <30 days",
          Technology: "Digital maintenance logs",
        },
      ],
    },
    text2:
      "These above fines are just a few numbers, there are a lot of hidden costs in terms of tenant lawsuits from injuries or outages, Lost revenue during shutdowns, DOB escalations for repeat violations. Don’t risk it - Proactive compliance saves fines & penalties",
  };

  const Section2 = {
    heading: "Our Services: End-to-End Elevator Compliance Solutions",
    services: [
      {
        title: "1. Mandatory Inspections & Testing",
        subHeading: "Stay Ahead of Deadlines",
        description: "",
        items: [
          "Periodic Inspections (Annual):",
          "Visual checks between Jan 1 - Dec 31.",
          "Deadline: File within 14 days. Late after Jan 14 = $1,600 fines.",
          "PBS Advantage: Same-day digital submissions to DOB.",
        ],
        additionalInfo: [
          {
            title: "Category 1 (CAT1) Tests:",
            items: [
              "Annual no-load safety tests.",
              "Deadline: File within 21 days. Late after Jan 21 = $3K-$5K fines.",
            ],
          },
          {
            title: "Category 5 (CAT5) Tests:",
            desc: "",
            items: [
              "Load/speed tests every 5 years.",
              "Deadline: Submit within 21 days. Miss = $5K penalties.",
            ],
          },
        ],
      },
      {
        title: "2. Violation Resolution",
        subHeading: "Affirmation of Correction (AOC):",
        description:
          "DOB Requirement: Fix defects within 90 days (104-day hard cutoff) -> PBS handles repairs + filings.",
        additionalInfo: [
          {
            title: "DOB/PVT Violation Dismissal:",
            desc: "",
            items: [
              "Correct issues in 10-30 days.",
              "We submit proof + negotiate waivers.",
            ],
          },
        ],
      },
      {
        title: "3. Maintenance & Permits",
        subHeading: 'Avoid "Failure to Maintain" Violations',
        description: "",
        additionalInfo: [
          {
            title: "Maintenance Control Programs (MCP):",
            desc: "ASME-compliant logs, manufacturer protocols, and 24/7 repair contracts.",
            items: [
              "Permit Management:| New Installations? Major upgrades? We file via DOB NOW: Build.",
              "Tenant Notifications:| Automatic outage alerts and post required permits publicly.",
            ],
          },
        ],
      },
    ],
    ourProcess: [
      {
        title: "Detailed Inspections",
        description: "Our licensed professionals conduct thorough evaluations of your elevator systems, identifying any issues that may compromise satefy or efficiency.",
      },
      {
        title: "Timely Reporting",
        description: "We prepare and submit all required inspection reports through the DOB NOW: Safety portal, ensuring adherence to filing deadlines and avoiding late penalties.",
      },
      {
        title: "Violation Resolution",
        description: "If violations are identified, we provide guidance on corrective actions and assist in resolving issues promptly to restore compliance.",
      },
      {
        title: "Ongoing Compliance Support",
        description: "We offer continuous monitoring and reminders for upcoming inspections, helping you maintain compliance year after year.",
      },
    ],
    howItWorks: [
      {
        number: "1",
        title: "Book Online in 60 Seconds",
        description: "Choose day/night slots. No tenant disruption.",
      },
      {
        number: "2",
        title: "Inspect & Test",
        description: "DOB-approved experts conduct checks.",
      },
      {
        number: "3",
        title: "Repair & File",
        description: "Fix defects fast. We submit to DOB NOW.",
      },
      {
        number: "4",
        title: "Rest Easy",
        description: "Get auto-reminders for next year.",
      },
    ],
    footer: "Stay Operational. Protect Tenants. Sleep Soundly.",
  };

  const WhyPBS = {
    title: "Why Choose PBS?",
    description: "NYC’s Trusted Elevator Compliance Partner",
    table: {
      headers: ["Expertise", "Speed", "Technology"],
      rows: [
        {
          Expertise: "DOB-licensed inspectors",
          Speed: "24/7 emergency repairs",
          Technology: "Real-time compliance app",
        },
        {
          Expertise: "15+ years in NYC",
          Speed: "Same-week inspections ",
          Technology: "deadline tracker",
        },
        {
          Expertise: "100% pass rate on CAT5, CAT1 tests",
          Speed: "90% repairs in <30 days",
          Technology: "Digital maintenance logs",
        },
      ],
    },
    text: "$0 Violation Guarantee: Approved filings or we cover penalties. 24/7 Emergency Support: Critical repairs done in <8 hours. DOB-Approved Experts: 1,200+ elevators compliant since 2018.",
  };

  return (
    <div
      className="bg-[#2B3331]"
    >
      {/* Hero: Elevator compliance overview */}
      <HeroSection
        heading="NYC Elevator Compliance Inspection made simple"
        text="Annual inspections, same-day filings, and guaranteed violation dismissal - so you avoid fines, tenants lawsuits, and operational shutdowns."
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl font-semibold"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base font-semibold text-[#DFDFDF]"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Elevator Inspection"
      />

      {/* Section 01: Risk context, compliance rules, and process overview */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 lg:gap-8 2xl:justify-center 2xl:gap-16 w-full pb-6 lg:pb-10">
          <Image
            src="/pics/elevator-inspection-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-full max-w-[360px] sm:max-w-[500px] lg:max-w-none lg:w-[40%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] bg-[#1E2322] flex flex-col gap-3 sm:gap-4 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[16px]">
            <span className="bg-[#8AD5B7] w-fit font-poppins max-w-full rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-[11px] sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-center lg:text-left font-semibold text-[#E4E4E4] font-conthrax lg:leading-tight mx-auto lg:mx-0">
              {section01.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#DFDFDF] text-center lg:text-left">
              {section01.text}
            </p>

            <div className="w-full flex items-stretch justify-start gap-6">
              <div className="space-y-2 w-full sm:w-[90%] lg:w-[70%] 2xl:w-[60%] mx-auto lg:mx-0">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-base text-center lg:text-left font-normal text-[#DFDFDF]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-full flex items-stretch justify-start gap-3">
              <div className="bg-[#8AD5B7] w-2 h-auto hidden lg:block"></div>
              <p className="text-[#DFDFDF] text-sm sm:text-base font-semibold text-center lg:text-left w-full">
                {section01.additionalText}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col justify-between items-center lg:justify-center gap-8 box-border">
          <h2 className="section-heading-pill">
            {Div2_Sec1.title}
          </h2>
          <p className="text-[#DFDFDF] text-base text-center w-[90%] mx-auto">
            {Div2_Sec1.description}
          </p>

          <div className="w-[90%] 2xl:w-[80%] mx-auto flex flex-col items-center justify-center gap-8 2xl:gap-16 box-border pb-6 lg:pb-10">
            <div className="w-full flex flex-col items-center justify-center gap-2 lg:gap-4">
              <h3 className="text-3xl lg:text-4xl uppercase text-[#8AD5B7] font-semibold font-conthrax text-center">
                {Div2_Sec1.subheading}
              </h3>
              <p className="text-[#DFDFDF] text-base font-semibold text-center">
                {Div2_Sec1.text1}
              </p>
            </div>

            <div className="w-full">
              <div className="md:hidden flex flex-col gap-3">
                {Div2_Sec1.table.rows.map((row, rowIndex) => {
                  const values = Object.values(row);
                  return (
                    <div key={rowIndex} className="glass-morphism-glow rounded-xl px-4 py-3">
                      {Div2_Sec1.table.headers.map((header, cellIndex) => (
                        <div
                          key={`${rowIndex}-${cellIndex}`}
                          className={`py-2 ${cellIndex !== Div2_Sec1.table.headers.length - 1 ? "border-b border-[#8AD5B7]/30" : ""}`}
                        >
                          <p className="text-xs uppercase tracking-wide text-[#8AD5B7] font-semibold">
                            {header}
                          </p>
                          <p className="mt-1 text-sm text-[#DFDFDF] font-normal leading-relaxed">
                            {values[cellIndex]}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>

              <div className="hidden md:block relative w-full">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      {Div2_Sec1.table.headers.map((header, index) => (
                        <th
                          key={index}
                          className="p-3 sm:p-4 md:p-5 text-center text-sm sm:text-base lg:text-xl font-semibold text-[#8AD5B7] whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Div2_Sec1.table.rows.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="p-3 sm:p-4 md:p-5 text-center text-xs sm:text-sm md:text-base font-normal text-[#DFDFDF] whitespace-nowrap"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pointer-events-none absolute inset-0">
                  {Array.from({ length: Div2_Sec1.table.headers.length - 1 }).map((_, idx) => (
                    <div
                      key={`v-${idx}`}
                      className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#8AD5B7]/60 to-transparent"
                      style={{ left: `${((idx + 1) / Div2_Sec1.table.headers.length) * 100}%` }}
                    />
                  ))}
                  {Array.from({ length: Div2_Sec1.table.rows.length }).map((_, idx) => (
                    <div
                      key={`h-${idx}`}
                      className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8AD5B7]/60 to-transparent"
                      style={{ top: `${((idx + 1) / (Div2_Sec1.table.rows.length + 1)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>


            <p className="w-full text-[#DFDFDF] text-base text-center">
              {Div2_Sec1.text2}
            </p>
          </div>

          <div className="w-full flex flex-col justify-center gap-8">
            <h2 className="section-heading-pill">
              Our Process to make you complaint
            </h2>

            <div className="w-full sm:w-[95%] lg:w-[80%] mx-auto">
              {/* Desktop and tablet process timeline with connector rails */}
              <div className="hidden md:block relative py-6 lg:py-8">
                <div className="pointer-events-none absolute inset-0">
                  {/* top row connector */}
                  <div className="absolute left-6 right-6 top-[15%] h-[3px] bg-[#8AD5B7]" />
                  {/* right drop connector */}
                  <div className="absolute right-6 top-[15%] h-[48%] w-[3px] bg-[#8AD5B7]" />
                  {/* bottom row connector */}
                  <div className="absolute left-20 right-6 top-[63%] h-[3px] bg-[#8AD5B7]" />
                  {/* left rise connector */}
                  <div className="absolute left-6 top-[2%] h-[13%] w-[3px] bg-[#8AD5B7]" />
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-10 lg:gap-y-12 px-14">
                  {Section2.ourProcess.map((process, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 justify-start text-center"
                    >
                      <p className="relative z-10 glass-morphism-glow rounded-2xl p-3 sm:p-4 w-full text-base lg:text-xl font-semibold text-[#DFDFDF] leading-relaxed">
                        {process.title}
                      </p>
                      <p className="relative z-10 text-sm font-normal text-center text-[#DFDFDF] leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile stacked process cards */}
              <div className="md:hidden grid grid-cols-1 gap-4">
                {Section2.ourProcess.map((process, index) => (
                  <div
                    key={index}
                    className="p-3 flex flex-col items-center gap-3 justify-center text-center w-full"
                  >
                    <p className="glass-morphism-glow rounded-2xl p-3 w-full text-base font-semibold text-[#DFDFDF] leading-relaxed">
                      {process.title}
                    </p>
                    <p className="text-sm font-normal text-center text-[#DFDFDF] leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: End-to-end elevator compliance services */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          {Section2.heading}
        </h2>

        <div className="w-full sm:w-[95%] lg:w-[90%] mx-auto flex flex-col justify-center items-center gap-3 sm:gap-4 2xl:gap-6 box-border pb-6 lg:py-10">
          {Section2.services.map((service, index) => {
            return (
              <div
                key={index}
                className="relative w-full glass-morphism-glow p-4 sm:p-6 rounded-2xl flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-5 sm:gap-6 lg:gap-8"
              >
                <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start justify-center gap-6 2xl:gap-8 lg:pr-8">
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold uppercase font-conthrax text-center lg:text-left">
                    {service.title}
                  </h3>
                  <div className="w-full">
                    <p className="text-[#DFDFDF] text-sm sm:text-base font-semibold text-center lg:text-left">
                      {service.subHeading}
                    </p>
                    <p className="text-[#DFDFDF] text-sm sm:text-base text-center lg:text-left 2xl:max-w-2xl">
                      {service.description}
                    </p>
                    {service?.items?.map((item, itemIndex) => {
                      return (
                        <div key={itemIndex} className="flex flex-col">
                          <span className="text-[#DFDFDF] text-sm sm:text-base flex items-start gap-2 text-left">
                            <DotIcon className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
                            <span>{item}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="hidden lg:block absolute top-6 bottom-6 left-[55%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8AD5B7]/80 to-transparent" />
                <div className="w-full lg:w-[45%] rounded-2xl flex flex-col justify-center items-start gap-3 2xl:gap-3 p-4 sm:p-6 lg:pl-8">
                  {service?.additionalInfo?.map((info, infoIndex) => {
                    return (
                      <div
                        key={infoIndex}
                        className="w-full flex flex-col justify-between items-start 2xl:justify-center gap-1"
                      >
                        <p className="text-sm sm:text-base font-semibold text-left">
                          {info.title}
                        </p>

                        <p className="text-sm sm:text-base text-[#DFDFDF] font-semibold text-left">
                          {info.desc}
                        </p>

                        {info?.items?.map((item, itemIndex) => {
                          return (
                            <div
                              key={itemIndex}
                              className="w-full text-[#DFDFDF] text-sm sm:text-base"
                            >
                              <span className="flex items-start gap-2 2xl:gap-0">
                                <DotIcon className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
                                <span className="w-full">
                                  {item.split("|")[0]}
                                </span>
                              </span>
                              {item.split("|").length > 1 && (
                                <span className="block pl-6 sm:pl-7 text-left">{item.split("|")[1]}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="w-full text-[#DFDFDF] text-sm sm:text-base lg:text-xl font-semibold text-center">
          {Section2.footer}
        </p>
      </section>

      {/* Section 03: Why PBS, workflow, and final CTA */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="w-full mx-auto flex flex-col justify-center items-center gap-5 sm:gap-6 2xl:gap-10 box-border pb-8 sm:pb-10 lg:pb-16">
          <h2 className="section-heading-pill">
            {WhyPBS.title}
          </h2>
          <p className="text-[#DFDFDF] text-sm sm:text-base lg:text-xl font-semibold text-center w-[95%] sm:w-[90%] mx-auto">
            {WhyPBS.description}
          </p>

          <div className="md:hidden w-full flex flex-col gap-3">
            {Div2_Sec1.table1.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="glass-morphism-glow rounded-xl px-4 py-3"
              >
                {Div2_Sec1.table1.headers.map((header, cellIndex) => (
                  <div
                    key={`${rowIndex}-${cellIndex}`}
                    className={`py-2 ${cellIndex !== Div2_Sec1.table1.headers.length - 1 ? "border-b border-[#8AD5B7]/30" : ""}`}
                  >
                    <p className="text-xs uppercase tracking-wide text-[#8AD5B7] font-semibold">
                      {header}
                    </p>
                    <p className="mt-1 text-sm text-[#DFDFDF] font-normal leading-relaxed">
                      {Object.values(row)[cellIndex]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden md:block relative w-full">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr>
                  {Div2_Sec1.table1.headers.map((header, index) => (
                    <th
                      key={index}
                      className="p-3 sm:p-4 md:p-5 text-center text-sm sm:text-base lg:text-xl font-semibold text-[#8AD5B7] whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Div2_Sec1.table1.rows.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="p-3 sm:p-4 md:p-5 text-center text-xs sm:text-sm md:text-base font-normal text-[#DFDFDF] whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: Div2_Sec1.table1.headers.length - 1 }).map((_, idx) => (
                <div
                  key={`v-${idx}`}
                  className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#8AD5B7]/60 to-transparent"
                  style={{ left: `${((idx + 1) / Div2_Sec1.table1.headers.length) * 100}%` }}
                />
              ))}
              {Array.from({ length: Div2_Sec1.table1.rows.length }).map((_, idx) => (
                <div
                  key={`h-${idx}`}
                  className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8AD5B7]/60 to-transparent"
                  style={{ top: `${((idx + 1) / (Div2_Sec1.table1.rows.length + 1)) * 100}%` }}
                />
              ))}
            </div>
          </div>

          <p className="text-[#DFDFDF] text-sm sm:text-base font-semibold text-center w-[95%] sm:w-[90%] lg:w-[65%] 2xl:w-[50%] mx-auto">
            {WhyPBS.text}
          </p>
        </div>
        {/* How it works steps */}
        <h2 className="section-heading-pill">How It Works</h2>
        <p className="text-base sm:text-lg lg:text-xl font-semibold text-center text-[#DFDFDF]">Compliance Without Chaos</p>
        <div className="w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch pb-6 lg:pb-10" >


          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full gap-4 sm:gap-6">
            {Section2.howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative w-full mx-auto flex items-center gap-2 sm:gap-3 glass-morphism-glow rounded-[16px]"
              >
                {/* Step card shell */}
                <div
                  className={`relative md:rounded-full w-full flex items-center p-3 sm:p-4 bg-transparent overflow-hidden`}
                >
                  {/* Step content */}
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-3 w-full">
                    <div className="rounded-full border-2 border-[#8AD5B7] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 aspect-square flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#DCE2E2]">
                      {item.number}
                    </div>
                    <p className="flex flex-col items-center md:items-start max-w-full">
                      <span className="text-sm sm:text-base lg:text-xl font-semibold text-[#DCE2E2] text-center md:text-left">
                        {item.title}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base text-center md:text-left font-normal leading-relaxed text-[#DFDFDF] pt-2">
                        {item.description}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto flex flex-col justify-center items-center gap-3 lg:gap-6 box-border pb-10 lg:pb-16">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-[#DFDFDF] text-base sm:text-lg lg:text-xl font-semibold text-center">Final Call to Action</p>
            <p className="text-[#DFDFDF] text-base sm:text-lg lg:text-xl font-semibold text-center">Act Now or Risk $5k Fines: </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row xl:flex-row gap-3 sm:gap-4 my-6 items-stretch sm:items-center lg:items-start justify-center">
              <CTA2
                text="GET STARTED NOW"
                isArrow={false}
                href="/alert"
                styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#FF4B4E] text-white px-6 py-2 text-sm font-semibold sm:whitespace-nowrap hover:brightness-105 hover:text-black transition lg:text-base font-conthrax `}
              />
              <CTA2
                text="CALL OUR INSPECTORS"
                isArrow={false}
                href="/contacts"
                styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#8AD5B7] text-[#1E2322] px-4 lg:px-6 py-2 text-sm font-semibold sm:whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
              />
            </div>
        </div>
      </section>
      <ImageCarousel />
    </div>
  );
};

export default Page;
