// Boiler Inspection Page Component
// Renders the NYC Boiler Inspection page.
// Data Objects:
// - section01: section content and items
// - Div2_Sec1: table headers, rows, grid divs
// - Compliance_Solution: compliance solution texts and image
// - CriticalRequirements: critical requirements list
// - whyPBS: data for 'Why PBS' section

"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";
import { section01, Div2_Sec1, Compliance_Solution, CriticalRequirements, whyPBS, ComplianceRoadmap } from "./data";

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
      {/* Hero: Boiler inspection overview and primary CTA */}
      <HeroSection
        heading="NYC Boiler Inspection"
        text="Safeguard your Property and Ensure Regulatory Adherence."
        cta="Schedule Inspection Now"
        href="/contacts"
        isArrow={false}
        className="font-conthrax max-w-[95%] sm:max-w-3xl"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#DFDFDF] max-w-[95%] sm:max-w-3xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Boiler Inspection"
      />

      {/* Section 01: Inspection essentials and compliance schedule */}
      <section className="px-4 sm:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-20 pb-4 sm:pb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full pb-5 sm:pb-6 lg:pb-10">
          <Image
            src="/pics/boiler-inspection-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-full max-w-[360px] sm:max-w-[500px] lg:max-w-none lg:w-[40%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] bg-[#1E2322] flex flex-col gap-3 sm:gap-4 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[16px]">
            <span className="bg-[#8AD5B7] uppercase font-poppins w-fit max-w-full rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-[11px] sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl uppercase font-semibold text-[#E4E4E4] font-conthrax text-center lg:text-left">
              {section01.heading}
            </h2>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-[#DFDFDF] text-center lg:text-left">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-3 sm:gap-6 w-full">
              <div className="space-y-2 w-full">
                {section01.items.map((item, index) => {
                  // Count the number of colons in the item to identify multi-colon item
                  const colonCount = (item.match(/:/g) || []).length;
                  const isMultiColon = colonCount > 1;

                  const heading = item.substring(0, item.indexOf(":"));
                  const description = item.substring(item.indexOf(":") + 1);

                  return (
                    <div key={index} className="space-y-1">
                      {/* Heading: Always the part before the first colon */}
                      <h4 className="text-sm sm:text-base font-semibold text-[#DCE2E2] leading-relaxed">
                        {heading}
                      </h4>

                      {isMultiColon ? (
                        <ul className="space-y-2">
                          {description.split(".").map((pair, idx) => {
                            return (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm font-semibold text-[#DFDFDF] leading-relaxed"
                              >
                                <span className="font-semibold">
                                  {pair.substring(0, pair.indexOf(":")).trim() +
                                    ":"}
                                </span>{" "}
                                {pair.substring(pair.indexOf(":") + 1).trim()}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        // Single-colon item: Render description as a paragraph
                        <p className="text-xs sm:text-sm font-normal text-[#DFDFDF] leading-relaxed">
                          {description.trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center lg:text-left w-full lg:w-2/3">
              {section01.additionalText}
            </p>
          </div>
        </div>

        {/* Inspection timeline table and supporting highlights */}
        <div className="w-full mx-auto flex flex-col justify-between items-center lg:justify-center gap-5 sm:gap-8 box-border lg:my-10">
          <h2 className="section-heading-pill">
            {Div2_Sec1.title}
          </h2>
          <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center max-w-4xl mx-auto px-2 sm:px-0">
            {Div2_Sec1.description}
          </p>

          <div className="hidden md:block w-full my-8">
            <div className="relative w-full">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    {Div2_Sec1.table.headers.map((header, index) => (
                      <th
                        key={index}
                        className="p-3 sm:p-4 md:p-5 uppercase text-center text-sm sm:text-base lg:text-xl font-semibold text-[#8AD5B7] whitespace-nowrap"
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

          <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center max-w-4xl mx-auto px-2 sm:px-0">
            {Div2_Sec1.text1}
          </p>

          <div className="w-full sm:w-[95%] lg:w-[85%] mx-auto flex justify-center items-stretch gap-4 sm:gap-6 flex-wrap my-6 sm:my-8">
            {Div2_Sec1.gridDivs.map((div, index) => (
              <div
                key={index}
                className="glass-morphism-glow p-4 sm:p-6 rounded-2xl flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full sm:w-[48%] lg:w-[31%]"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#DCE2E2] mb-2">
                  {div.title}
                </h3>
                <p className="text-sm sm:text-base font-normal text-[#DFDFDF] leading-relaxed">
                  {div.text}
                </p>
              </div>
            ))}
          </div>

          <p className="w-full sm:w-[95%] lg:w-[85%] 2xl:w-[75%] mx-auto text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center">
            {Div2_Sec1.text2}
          </p>
        </div>
      </section>

      {/* Section 02: Compliance solutions and critical requirements */}
      <section className="px-4 sm:px-0 flex flex-col gap-5 sm:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        <h2 className="section-heading-pill">
          {Compliance_Solution.title}
        </h2>
        <div className="flex flex-col lg:flex-row items-center xl:items-center justify-between 2xl:justify-center gap-6 sm:gap-8 2xl:gap-16 w-full pb-8 sm:pb-10 lg:pb-0">
          <div className="h-full w-full flex flex-col items-center gap-4 py-2 sm:py-3">
            <p className="w-full lg:w-[60%] text-center font-semibold uppercase font-poppins text-[#E4E4E4] bg-[#1E2322] rounded-[16px] p-4 text-lg sm:text-2xl lg:text-3xl">
              {Compliance_Solution.text1}
            </p>

            <h4 className="text-[#8AD5B7] text-xl sm:text-2xl lg:text-3xl font-semibold uppercase my-2 sm:my-4">
              {Compliance_Solution.subHeading2}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-[95%] lg:w-[80%]">
              {Compliance_Solution.items.map((div, index) => (
                <div
                  key={index}
                  className="glass-morphism-glow p-3 sm:p-4 rounded-2xl flex items-center justify-center text-center lg:text-left w-full min-h-[88px] sm:min-h-[96px]"
                >
                  <p className="text-sm sm:text-base font-normal text-[#DFDFDF] leading-relaxed">
                    {div}
                  </p>
                </div>
              ))}
            </div>


            <h4 className="text-[#8AD5B7] text-xl sm:text-2xl lg:text-3xl font-semibold uppercase mt-5 sm:mt-8">
              {Compliance_Solution.subHeading}
            </h4>

            <div className="flex flex-col items-center justify-center w-full rounded-2xl gap-2">
              <p className="text-[#DFDFDF] text-sm sm:text-base font-normal text-center leading-relaxed max-w-[92%] sm:max-w-[80%]">
                {Compliance_Solution.text2}
              </p>
              <p className="text-[#DFDFDF] text-sm sm:text-base font-normal text-center leading-relaxed max-w-[92%]">
                {Compliance_Solution.text3}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-center gap-6 sm:gap-8 2xl:gap-16 w-full h-full">
          <div className="h-auto w-full flex flex-col items-center 2xl:gap-6 gap-4 sm:gap-5 pt-2 sm:pt-6">
            <p className="w-full lg:w-[60%] text-center font-semibold uppercase font-poppins text-[#E4E4E4] bg-[#1E2322] rounded-[16px] p-4 text-lg sm:text-2xl lg:text-3xl">
              {CriticalRequirements.text1}
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-6 w-full p-2 sm:p-4 xl:pt-8">

              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full p-2 sm:p-4 xl:py-0">
                <h4 className="text-[#8AD5B7] text-2xl sm:text-3xl uppercase font-semibold text-center">
                  {CriticalRequirements.title1}
                </h4>
                <p
                  className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center w-full py-2 px-2 sm:px-4">
                  {CriticalRequirements.subtext}
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full p-0 sm:p-2 xl:py-0">
                  {CriticalRequirements.items1.map((item, index) => (
                    <p
                      key={index}
                      className="text-[#DFDFDF] rounded-[16px] glass-morphism-glow text-sm sm:text-base font-normal leading-relaxed w-full py-2 px-3 sm:px-4"
                    >
                      {item}
                    </p>
                  ))}
                </div>

              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full p-2 sm:p-4 xl:py-0">
                <h4 className="text-[#8AD5B7] text-2xl sm:text-3xl uppercase font-semibold text-center">
                  {CriticalRequirements.title}
                </h4>
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full p-0 sm:p-2 xl:py-0">
                  {CriticalRequirements.items.map((item, index) => (
                    <p
                      key={index}
                      className="text-[#DFDFDF] rounded-[16px] glass-morphism-glow text-sm sm:text-base font-normal leading-relaxed w-full py-2 px-3 sm:px-4"
                    >
                      {item}
                    </p>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Compliance roadmap and why PBS */}
      <section className="px-4 sm:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col justify-center w-full h-full pb-6 lg:pb-10">
          <div className="">
            <h2 className="section-heading-pill">
              Your Compliance Roadmap
            </h2>

            <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center max-w-2xl mx-auto my-5 sm:my-7 lg:my-10 px-2 sm:px-0">
              PBS Follows a rigorous 8-step evaluation to ensure code compliance,
              safety, and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-[95%] lg:w-[80%] mx-auto">
            {ComplianceRoadmap.items.map((div, index) => (
              <div
                key={index}
                className="glass-morphism-glow p-3 sm:p-5 rounded-2xl flex flex-col justify-center w-full min-h-[88px] sm:min-h-[96px]"
              >
                <p className="text-lg sm:text-xl font-semibold text-[#DCE2E2] leading-relaxed">
                  {div.title}
                </p>
                <p className="text-sm sm:text-base font-normal text-[#DFDFDF] leading-relaxed">
                  {div.Description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why PBS feature panel with dual CTAs */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-20 lg:mt-20 gap-4 sm:gap-8 rounded-[16px] px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-8 lg:pb-0 lg:gap-12 xl:gap-0 glass-morphism-glow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pics/local-law-152-wcu.png')" }}
        >
          {/* Why PBS image block */}
          <div className="w-full lg:w-[45%] 2xl:w-[40%] 3xl:w-[30%] flex items-end justify-center relative z-10">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="w-[88%] sm:w-[60%] mx-auto h-auto object-cover object-top grayscale mix-blend-luminosity"
            />
          </div>

          {/* Why PBS content block */}
          <div className="w-full lg:w-[55%] 2xl:w-[60%] 3xl:w-[50%] flex flex-col justify-end lg:pb-6 gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-semibold font-conthrax text-[#E4E4E4] tracking-wide uppercase">
              {whyPBS.title}
            </h1>

            <p className="text-[#DFDFDF] text-sm lg:text-base leading-relaxed w-full sm:w-[90%] text-center lg:text-left font-normal mx-auto lg:mx-0">
              {whyPBS.text1}{" "}
            </p>

            
            <div>
            <div className="w-[50%] h-2 bg-[#8AD5B7] hidden lg:block mt-8"></div>

            <p className="text-[#DFDFDF] text-sm lg:text-base leading-relaxed w-full sm:w-[90%] text-center lg:text-left font-normal mx-auto lg:mx-0 mt-2">
              {whyPBS.text2}
            </p>
            </div>

            <div className="w-full mt-0 flex flex-col sm:flex-row xl:flex-row gap-3 sm:gap-4 items-stretch sm:items-center lg:items-start justify-center lg:justify-start">
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



      </section>

      <ImageCarousel />
    </div>
  );
};

export default Page;
