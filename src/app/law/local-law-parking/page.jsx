// Parking Garage Inspection Page Component
// Renders Local Law 126 Parking Garage Inspections (Parking Structures) page.
// Data Objects:
// - section01: hero and introductory section data
// - List_Sec1: list of documentation requirements
// - Compliance_Deadlines: table of compliance deadlines
// - WhatThisMeans: steps to act
// - keyTakeaways: key compliance takeaways
// - WhyItMatter: reasons compliance matters
// - whyPBS: 'Why Choose PBS' section data
// - timelineItems: process timeline items

"use client";

import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import { parking } from "../data";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";
import { section01, List_Sec1, Compliance_Deadlines, WhatThisMeans, keyTakeaways, WhyItMatter, whyPBS, timelineItems } from "./data";

const Page = () => {

  return (
    <div
      className="bg-[#2B3331]"
      style={{
        backgroundImage: `url('')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero: LL126 parking structure inspection overview */}
      <HeroSection
        heading="LL 126 Parking Structure Inspection"
        text="Ensure Compliance, Prevent risks & Protect your property by our simplified processes through the assessments of our qualified licensed experts"
        className="font-conthrax max-w-[95%] sm:max-w-3xl"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#DFDFDF] max-w-[95%] sm:max-w-3xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Local Law 126 (Parking)"
      />


      {/* Section 01: LL126 intro and inspection scope */}
      <section className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 lg:gap-10 2xl:justify-center 2xl:gap-16 w-full pb-8 lg:pb-16">
          <Image
            src="/pics/local-law-parking-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none lg:w-[45%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] relative flex flex-col gap-4 sm:gap-5 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 md:p-8 rounded-[24px] bg-[#1A2021] border border-[#89A096]/20">
            <span className="bg-[#8AD5B7] w-auto rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-xs sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl leading-[1.05] text-center lg:text-left font-semibold text-[#E4E4E4] uppercase font-conthrax max-w-xl">
              {section01.heading}
            </h2>

            <div className="w-full">
              <div className="space-y-2 max-w-xl">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-xs sm:text-sm md:text-base text-center lg:text-left font-normal leading-relaxed text-[#DFDFDF]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#DFDFDF] text-xs sm:text-sm md:text-base font-normal text-center lg:text-left w-full flex flex-col leading-relaxed max-w-xl">
                <span className="text-[#8AD5B7] font-medium">{section01.additionalText.split("!")[0] + "!"}</span>
                <span>{section01.additionalText.split("!")[1]}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-full mx-auto">
          <h2 className="section-heading-pill">
            Know About LL 126
          </h2>
          <p className="text-[#DCE2E2] text-sm sm:text-base lg:text-xl text-center font-normal leading-relaxed">
            Local Law 126 requires all NYC parking structures to undergo
            periodic inspections by licensed inspectors (QPSIs), these
            evaluations ensure structural integrity, identify hazards, and keep
            your property compliant with evolving safety regulations
          </p>
          <div className="glass-morphism-glow rounded-2xl p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row lg:items-stretch justify-center lg:justify-between gap-6 lg:gap-0">
            <div className="w-full lg:w-[53%] 2xl:w-[40%] h-auto flex justify-center items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-[#DCE2E2] font-semibold text-center lg:text-left">
                What’s Reviewed During this Inspection
              </h2>
            </div>
            <div className="w-full lg:w-[45%] space-y-6 md:space-y-0">
              {List_Sec1.map((list, index) => {
                return (
                  <div
                    key={index}
                    className="text-[#DCE2E2] text-sm sm:text-base font-semibold"
                  >
                    <h4 className="italic mb-1">{list.heading}</h4>
                    <ul className="list-disc list-inside">
                      {list.items.map((item, index) => {
                        return (
                          <li key={index} className="flex items-start font-normal text-[#DFDFDF]">
                            <DotIcon
                              className="text-[#DFDFDF] flex-shrink-0 w-4 h-4 mt-1"
                              size={18}
                            />
                            <span className="w-[95%]">{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </section>


      {/* Section 02: Deadlines, implications, and key takeaways */}
      <section className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 mx-auto pb-10">
          <h2 className="section-heading-pill">
            {Compliance_Deadlines.title}
          </h2>
          <p className="text-[#DCE2E2] text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-center lg:max-w-4xl mx-auto px-2 sm:px-0">
            {Compliance_Deadlines.text}
          </p>
          <div className="w-full md:hidden flex flex-col gap-3">
            {Compliance_Deadlines.table.rows.map((row, rowIndex) => {
              const values = Object.values(row);
              return (
                <div key={rowIndex} className="w-full rounded-xl bg-[#1E2322] px-4 py-3">
                  {Compliance_Deadlines.table.headers.map((header, cellIndex) => (
                    <div
                      key={`${rowIndex}-${cellIndex}`}
                      className={`py-2 ${cellIndex !== Compliance_Deadlines.table.headers.length - 1 ? "border-b border-[#8AD5B7]/30" : ""}`}
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

          <div className="hidden md:block w-full">
            <div className="relative w-full">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    {Compliance_Deadlines.table.headers.map((header, index) => (
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
                  {Compliance_Deadlines.table.rows.map((row, index) => (
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
                {Array.from({ length: Compliance_Deadlines.table.headers.length - 1 }).map((_, idx) => (
                  <div
                    key={`v-${idx}`}
                    className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#8AD5B7]/60 to-transparent"
                    style={{ left: `${((idx + 1) / Compliance_Deadlines.table.headers.length) * 100}%` }}
                  />
                ))}
                {Array.from({ length: Compliance_Deadlines.table.rows.length }).map((_, idx) => (
                  <div
                    key={`h-${idx}`}
                    className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8AD5B7]/60 to-transparent"
                    style={{ top: `${((idx + 1) / (Compliance_Deadlines.table.rows.length + 1)) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center 2xl:items-start justify-center gap-6 lg:gap-10 w-full mx-auto pt-10">
          <h2 className="section-heading-pill">
            What This Means for you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-4 sm:gap-6 lg:gap-10 w-full sm:w-[95%] mx-auto">
            <div className="w-full h-full flex flex-col items-stretch text-center md:text-left justify-start gap-4 sm:gap-6 glass-morphism-glow p-4 sm:p-6 lg:p-10 rounded-[16px]">
              <img src="/pics/local-law-parking-pic6.png" alt="icon" className="w-12 h-12 sm:w-16 sm:h-16 self-start" />
              <h2 className="text-[#DCE2E2] text-xl sm:text-2xl font-semibold w-full mx-auto xl:mx-0">
                {WhatThisMeans.first.title}
              </h2>
              <p className="text-[#DFDFDF] text-sm sm:text-base text-left font-normal leading-relaxed w-full sm:w-[90%]">
                {WhatThisMeans.first.text}
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 w-full h-full glass-morphism-glow p-4 sm:p-6 lg:p-10 rounded-[16px]">
              <img src="/pics/local-law-parking-pic5.png" alt="icon" className="w-12 h-12 sm:w-16 sm:h-16 self-start" />
              <h4 className="text-[#DCE2E2] text-xl sm:text-2xl text-center md:text-left font-semibold w-full">
                {WhatThisMeans.second.title}
              </h4>
              <ul className="w-full">
                {WhatThisMeans.second.items.map((subItem, subIndex) => {
                  return (
                    <li key={subIndex} className="flex gap-2 text-[#DFDFDF]">
                      <DotIcon className="text-[#ffff] flex-shrink-0 mt-1" size={18} />
                      <span className="w-[95%] text-sm sm:text-base font-normal leading-relaxed">
                        <span className="text-[#ffff] italic">
                          {subItem.split(":")[0] + ": "}
                        </span>
                        <span className="text-[#8AD5B7]">
                          {subItem.split(":")[1].split("_")[0] + " - "}
                        </span>
                        <span>{subItem.split("_")[1]}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 lg:gap-12 pt-10 sm:pt-12 lg:pt-16">
          <Image
            src="/pics/local-law-parking-pic2.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[75%] sm:w-[60%] lg:w-[40%] xl:w-[25%] 2xl:w-[25%] h-auto object-contain rounded-lg mb-2 sm:mb-4 lg:mb-0 mx-auto"
          />
          <div className="text-left w-full lg:w-[60%] xl:w-[70%] 2xl:w-[70%] flex flex-col items-start justify-center gap-3 sm:gap-6 p-4 sm:p-6 lg:p-10 bg-[#1E2322] rounded-3xl">
            {/* Key takeaways heading */}
            <h2 className="text-[#8AD5B7] text-xl sm:text-2xl lg:text-3xl font-semibold">
              Key Take-aways
            </h2>

            {/* Key takeaways list */}
            <ul className="flex flex-col">
              {keyTakeaways.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 sm:gap-3 items-center text-[#DFDFDF]"
                >
                  <DotIcon className="flex-shrink-0" size={18} />
                  <span className="text-sm lg:text-base font-normal leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 03: Offerings and process timeline */}
      <section className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <h2 className="section-heading-pill">
          Our Offerings
        </h2>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 w-full lg:w-[90%] mx-auto py-6 sm:py-8 lg:py-10">
            {[
              "Comprehensive Inspections",
              "Hassle-free Reporting",
              "Repairs & Maintenance",
              "Portfolio Management",
            ].map((item, index) => {
              return (
                <button
                  key={index}
                  className="glass-morphism-glow text-base sm:text-lg lg:text-xl font-normal text-[#DCE2E2] px-4 sm:px-5 py-3 rounded-[20px] min-h-[72px] sm:min-h-24"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="section-heading-pill">
            {" "}
            How It Works
          </h2>
          <p className="text-[#DFDFDF] text-xs sm:text-sm lg:text-base text-center font-normal my-4 sm:my-6 lg:my-10">
            Your Path to Compliance in 4 Easy Steps
          </p>

          <div className="w-full py-4 sm:py-6 lg:py-8">
            {/* Shared timeline wrapper */}
            <div className="relative flex flex-col items-center w-full pb-4 sm:pb-6 lg:pb-8">
            {/* Desktop vertical timeline spine */}
            <div className="hidden md:flex absolute top-0 bottom-0 w-2 bg-[#DCE2E2] flex-col justify-between items-center">
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap items-center w-full md:pb-16">
              {/* Timeline step cards */}
              {timelineItems.map((item, index) => {
                const cleanTitle = item.title.replace(/^\d+\s*-\s*/, "");
                const isLeft = item.position === "left";
                return (
                <div
                  key={index}
                  className={`relative flex flex-col w-full md:w-1/2 items-center ${isLeft ? "md:items-start" : "md:items-end md:top-16"
                    } mb-6 sm:mb-8`}
                >
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-[#8AD5B7] text-5xl lg:text-6xl font-poppins font-semibold leading-none z-20 ${isLeft ? "right-4 lg:right-6" : "left-4 lg:left-6"
                      }`}
                  >
                    {index + 1}
                  </div>
                  {/* Step content */}
                  <div
                    className={`flex items-center w-full sm:px-6 lg:px-10`}
                  >
                    {/* Step text */}
                    <div
                      className={`flex flex-col gap-1 sm:gap-1 lg:gap-2 w-full  ${isLeft ? "text-right md:pr-10 lg:pr-14" : "md:pl-10 lg:pl-14"}`}
                    >
                      <p className="md:hidden text-[#8AD5B7] text-lg font-semibold">
                        {index + 1}
                      </p>
                      <h4 className="text-[#8AD5B7] text-lg sm:text-xl lg:text-2xl font-semibold">
                        {cleanTitle}
                      </h4>
                      <p className="text-[#DFDFDF] text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Row connector and endpoint marker */}
                  <div
                    className={`relative w-full h-2 rounded-full bg-[#DCE2E2] flex justify-center mt-4 z-10`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-[#8AD5B7] absolute -top-2 sm:top-[-10px] ${isLeft ? "sm:left-0" : "sm:right-0"
                        }`}
                    ></div>
                  </div>
                </div>
              )})}
            </div>
          </div>

            {/* Mobile stacked timeline cards */}
            <div className="md:hidden flex flex-col gap-4">
              {timelineItems.map((item, index) => {
                const cleanTitle = item.title.replace(/^\d+\s*-\s*/, "");
                return (
                  <div key={index} className="glass-morphism-glow rounded-2xl p-4 sm:p-5">
                    <p className="text-[#8BD5B7] text-xl sm:text-2xl font-semibold mb-1">{index + 1}</p>
                    <h4 className="text-[#8BD5B7] text-base sm:text-lg font-semibold">{cleanTitle}</h4>
                    <p className="text-[#DFDFDF] text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-sm sm:text-base font-semibold max-w-lg lg:max-w-sm text-center mx-auto mt-2 sm:mt-3 px-2 sm:px-0">
            We handle repairs, reports, and agency submissions{" "}
          </p>
        </div>
      </section>

      {/* Section 04: Why it matters and Why PBS conversion block */}
      <section className="flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <h2 className="section-heading-pill">
          {" "}
          Why it Matters
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-4 w-full mx-auto pb-8 sm:pb-10">
          {WhyItMatter.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-start sm:items-center glass-morphism-glow justify-start gap-3 sm:gap-6 rounded-2xl p-4 sm:p-6 w-full sm:w-[92%] mx-auto"
              >
                <img src="/pics/arrow.png" className="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-0 flex-shrink-0" />
                <p className="text-[#DFDFDF] text-sm sm:text-base lg:text-xl font-semibold leading-relaxed w-full">
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why PBS details and CTAs */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5 sm:gap-6 lg:gap-10 2xl:justify-center 2xl:gap-16 w-full pb-8 lg:pb-16">
          <div className="w-full lg:w-[45%] xl:w-1/2 2xl:w-[50%] 3xl:w-[35%] flex items-end">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="relative w-[90%] sm:w-[75%] md:w-2/3 lg:w-full mx-auto h-auto lg:h-full object-contain lg:object-cover rounded-[16px] mix-blend-luminosity"
            />
          </div>

          <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[50%] 3xl:w-[40%] flex flex-col md:justify-end 2xl:justify-center lg:pb-6 h-full 2xl:h-auto">
            <div className="w-full h-auto flex flex-col gap-3 sm:gap-4">
              <h1 className="text-2xl sm:text-3xl text-center xl:text-4xl lg:text-left font-semibold font-conthrax text-[#E4E4E4] tracking-wide uppercase">
                {whyPBS.title}
              </h1>
              <div className="text-sm lg:text-base text-center md:text-left text-[#DFDFDF] font-normal">
                <div className="flex flex-col">
                  {whyPBS.list1.map((item, index) => {
                    return (
                      <span key={index} className="flex items-start text-left text-sm sm:text-base leading-relaxed">
                        <DotIcon className="text-[#DCE2E2] w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                        {index == 0 ? (
                          <span>
                            <span className="text-[#DFDFDF]">
                              {" "}
                              {item.split(",")[0]}
                            </span>{" "}
                            {item.trim().split(",")[1]}
                          </span>
                        ) : (
                          item
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-start items-stretch gap-3 px-0 sm:px-2 lg:px-3">
                <p className="w-full text-xl sm:text-2xl lg:text-3xl text-center lg:text-left font-semibold text-[#DCE2E2]">
                  PA's
                </p>
              </div>

              <div className="text-sm lg:text-base text-center lg:text-left font-normal text-[#DFDFDF] flex flex-col gap-2">
                <div>
                  {whyPBS.list2.map((item, index) => {
                    return (
                      <p key={index} className="w-full lg:w-[90%] 2xl:w-[70%] pl-0 sm:pl-[3%] leading-relaxed">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="w-[30%] h-2 bg-[#8AD5B7] hidden lg:block mt-6"></div>

              <div className="space-y-1">
                <p className="text-[#DFDFDF] text-sm lg:text-base text-center lg:text-left font-normal">
                  {whyPBS.text1}
                </p>
                <p className="text-[#DFDFDF] text-sm lg:text-base text-center lg:text-left font-normal">
                  {" "}
                  Schedule your inspection and get a quote in 24 Hour
                </p>
              </div>

              <div className="max-w-4xl w-full mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 items-stretch sm:items-center justify-center">
            <CTA2
              text="GET STARTED NOW"
              isArrow={false}
              href="/alert"
              styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#FF4B4E] text-white px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 hover:text-black transition lg:text-base font-conthrax `}
            />
            <CTA2
              text="CALL OUR INSPECTORS"
              isArrow={false}
              href="/contacts"
              styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#8AD5B7] text-[#1E2322] px-4 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
            />
          </div>
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel />
    </div>
  );
};

export default Page;
