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
      className="bg-[#37403D]"
      style={{
        backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <HeroSection
        heading="NYC Elevator Compliance Inspection made simple"
        text="Annual inspections, same-day filings, and guaranteed violation dismissal - so you avoid fines, tenants lawsuits, and operational shutdowns."
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/elevator-inspection-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2 sm:h-3 lg:h-4"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] lg:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-3xl z-20">
          Elevator Inspection
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 md:pt-16 lg:pt-24 text-[#DCE2E2] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full pb-6 lg:pb-10">
          <Image
            src="/pics/elevator-inspection-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
            <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-base md:text-lg xl:text-xl text-center md:text-left font-semibold text-[#89A096]">
              {section01.title}
            </span>
            <h2 className="text-2xl lg:text-[40px] 2xl:text-[48px] text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax lg:leading-tight xl:max-w-[95%] 2xl:max-w-[75%] mx-auto lg:mx-0">
              {section01.heading}
            </h2>
            <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6">
              <div className="space-y-2 w-[90%] lg:w-[70%] 2xl:w[60%] mx-auto lg:mx-0">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-xs text-center lg:text-left font-semibold text-[#89A096]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex items-stretch justify-start gap-3">
              <div className="bg-[#8AD5B7] w-2 h-auto hidden lg:block"></div>
              <p className="text-[#89A096] text-base font-semibold text-center lg:text-left w-full">
                {section01.additionalText}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2 mb-10"></div>

        <div className="w-full lg:w-[90%] 2xl:w-[85%] mx-auto flex flex-col justify-between items-center lg:justify-center gap-8 2xl:gap-66 box-border">
          <h2 className="text-3xl lg:text-5xl text-[#8AD5B7] font-semibold font-conthrax text-center">
            {Div2_Sec1.title}
          </h2>
          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center w-[90%] mx-auto">
            {Div2_Sec1.description}
          </p>

          <div className="w-[90%] 2xl:w-[80%] mx-auto flex flex-col items-center justify-center gap-8 2xl:gap-16 box-border pb-6 lg:pb-10">
            <div className="w-full flex flex-col items-center justify-center gap-2 lg:gap-4">
              <h3 className="text-3xl lg:text-5xl text-[#8AD5B7] font-semibold font-conthrax text-center">
                {Div2_Sec1.subheading}
              </h3>
              <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center">
                {Div2_Sec1.text1}
              </p>
            </div>

            <table className="border-collapse border border-[#8AD5B7] w-full">
              <thead className="text-[#DCE2E2]">
                <tr>
                  {Div2_Sec1.table.headers.map((header, index) => (
                    <th
                      key={index}
                      className="border-2 border-[#8AD5B7] lg:p-4 text-center text-base lg:text-xl font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#89A096]">
                {Div2_Sec1.table.rows.map((row, index) => (
                  <tr key={index} className="border-2 border-[#8AD5B7]">
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border-2 border-[#8AD5B7] lg:p-4 text-sm lg:text-base font-semibold text-center lg:text-left"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="w-full text-[#89A096] text-base lg:text-xl font-semibold text-center">
              {Div2_Sec1.text2}
            </p>
          </div>

          <div className="w-full flex flex-col justify-center gap-8">
            <h2 className="text-3xl lg:text-5xl text-[#8AD5B7] font-semibold font-conthrax max-w-2xl">
              Our Process to make you complaint
            </h2>
            <img
              src="/pics/elevator-inspection-pic2.png"
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-full md:w-[80%] h-auto object-contain object-right-top mb-6 lg:mb-0 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 lg:pt-20 text-[#DCE2E2] w-full">
        <h2 className="text-3xl lg:text-5xl text-[#8AD5B7] font-semibold font-conthrax text-center w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto pb-6 lg:pb-10">
          {Section2.heading}
        </h2>

        <div className="w-full mx-auto flex flex-col justify-center items-center gap-3 2xl:gap-6 box-border pb-6 lg:pb-10">
          {Section2.services.map((service, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 lg:gap-16 2xl:gap-0 rounded-2xl"
              >
                <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start justify-center gap-6 2xl:gap-8">
                  <h3 className="text-xl lg:text-3xl font-semibold font-conthrax text-center lg:text-left">
                    {service.title}
                  </h3>
                  <div>
                    <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center lg:text-left">
                      {service.subHeading}
                    </p>
                    <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center lg:text-left 2xl:max-w-2xl">
                      {service.description}
                    </p>
                    {service?.items?.map((item, itemIndex) => {
                      return (
                        <div key={itemIndex} className="flex flex-col">
                          <span className="text-[#89A096] text-base lg:text-xl font-semibold flex gap-2">
                            <DotIcon size={32} /> {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full lg:w-[45%] bg-[#2E3734] rounded-2xl flex flex-col justify-center items-start 2xl:gap-3 p-6">
                  {service?.additionalInfo?.map((info, infoIndex) => {
                    return (
                      <div
                        key={infoIndex}
                        className="flex flex-col justify-between items-center lg:items-start 2xl:justify-center gap-1"
                      >
                        <p className="text-base lg:text-xl italic font-semibold text-center lg:text-left">
                          {info.title}
                        </p>

                        <p className="text-base lg:text-xl text-[#89A096] font-semibold text-center lg:text-left">
                          {info.desc}
                        </p>

                        {info?.items?.map((item, itemIndex) => {
                          return (
                            <div
                              key={itemIndex}
                              className="w-full text-[#89A096] text-base lg:text-xl font-semibold "
                            >
                              <span className="flex gap-2 2xl:gap-0">
                                <DotIcon
                                  size={32}
                                  className="w-[10%] 2xl:w-auto"
                                />
                                <span className="w-[90%] 2xl:w-auto">
                                  {item.split("|")[0]}
                                </span>
                              </span>
                              {item.split("|").length > 1 && (
                                <span>{item.split("|")[1]}</span>
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

        <p className="w-full text-[#89A096] text-base lg:text-xl font-semibold text-center">
          {Section2.footer}
        </p>
      </section>

      {/* Section 3 */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 lg:pt-20 text-[#DCE2E2] w-full">
        <div className="w-full lg:w-[80%] mx-auto flex flex-col justify-center items-center gap-6 2xl:gap-10 box-border pb-10 lg:pb-16">
          <h2 className="text-3xl lg:text-5xl text-[#8AD5B7] font-semibold font-conthrax text-center w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto">
            {WhyPBS.title}
          </h2>
          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center w-[90%] mx-auto">
            {WhyPBS.description}
          </p>

          <table className="border-collapse border border-[#8AD5B7] w-full">
            <thead className="text-[#DCE2E2]">
              <tr>
                {Div2_Sec1.table.headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-2 border-[#8AD5B7] lg:p-4 text-center text-base lg:text-xl font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#89A096]">
              {Div2_Sec1.table.rows.map((row, index) => (
                <tr key={index} className="border-2 border-[#8AD5B7]">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-2 border-[#8AD5B7] lg:p-4 text-sm lg:text-base font-semibold text-center lg:text-left"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center w-[90%] lg:w-[65%] 2xl:w-[50%] mx-auto">
            {WhyPBS.text}
          </p>
        </div>

        <div className="w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch pb-6 lg:pb-10" >
           <div className="w-full lg:w-[45%] 2xl:w-[35%] flex flex-col items-center justify-center gap-6 2xl:gap-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#8AD5B7] font-semibold font-conthrax text-center">How It Works</h2>
            <p className="text-lg lg:text-xl font-semibold text-[#89A096]">Compliance Without Chaos</p>
           </div>
           <img
            src="/pics/elevator-inspection-pic3.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full md:w-[80%] lg:w-[55%] 2xl:w-[65%] h-full object-contain mx-auto"
          /> 
        </div>            

        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col justify-center items-center gap-3 lg:gap-6 box-border pb-10 lg:pb-16">
          <div className="w-full flex flex-col items-center justify-center gap-3">
          <p className="text-[#89A096] text-lg lg:text-xl font-semibold">Final Call to Action</p>  
          <p className="text-[#89A096] text-lg lg:text-xl font-semibold">Act Now or Risk $5k Fines: </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 2xl:gap-10">
            <CTA2
              text="Book Your Slot Today"
              isArrow={false}
              href="/contacts"
              styling={`w-full md:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold hover:brightness-105 transition lg:text-base font-conthrax mx-auto`}
            />

            <CTA2
              text="Call Our Inspectors (914-316-6956)"
              isArrow={false}
              href="/contacts"
              styling={`w-full text-wrap md:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold hover:brightness-105 transition lg:text-base font-conthrax mx-auto`}
            />
          </div>
        </div> 
      </section>       
      <ImageCarousel />
    </div>
  );
};

export default Page;
