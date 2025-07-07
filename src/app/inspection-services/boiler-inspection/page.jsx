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
import { section01, Div2_Sec1, Compliance_Solution, CriticalRequirements, whyPBS } from "./data";

const Page = () => {
 

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
        heading="NYC Boiler Inspection"
        text="Safeguard your Property and Ensure Regulatory Adherence."
        text2="CTA: Schedule Inspection Now"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/boiler-inspection-hero.png"
      />

       {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
    <div className="bg-[#8AD5B7] w-full h-2"></div>
    <div
      className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] lg:w-[50%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
    >
      Boiler Inspection
    </div>
  </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 md:pt-16 lg:pt-24 text-[#DCE2E2] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full pb-6 lg:pb-10">
          <Image
            src="/pics/boiler-inspection-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
            <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-base md:text-lg xl:text-xl text-center md:text-left font-semibold text-[#89A096]">
              {section01.title}
            </span>
            <h2 className="text-2xl lg:text-[40px] 2xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax leading-tight xl:max-w-[80%] 2xl:max-w-[70%]">
              {section01.heading}
            </h2>
            <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6">
              <div className="space-y-2 w-[98%]">
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
            <p className="text-[#89A096] text-lg lg:text-xl font-semibold text-center lg:text-left w-full mt-3 md:mt-4 lg:mt-6 pl-3 md:pl-5">
              {section01.text2}
            </p>
          </div>
        </div>

        <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2 mb-10"></div>

        <div className="w-full lg:w-[90%] 2xl:w-[85%] mx-auto flex flex-col justify-between items-center lg:justify-center gap-8 2xl:gap-66 box-border pb-6 lg:pb-10">
          <h2 className="text-3xl lg:text-[40px] font-semibold font-conthrax text-center">
            {Div2_Sec1.title}
          </h2>
          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center">
            {Div2_Sec1.description}
          </p>

          <table className="border-collapse border border-[#8AD5B7] w-full lg:w-[90%] mx-auto">
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

          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center">
            {Div2_Sec1.text1}
          </p>

          <div className="w-[90%] lg:w-[85%] mx-auto flex justify-center items-stretch gap-6 flex-wrap">
            {Div2_Sec1.gridDivs.map((div, index) => (
              <div
                key={index}
                className="bg-[#1E2322] p-6 rounded-2xl flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-[80%] md:w-[45%] lg:w-[31%]"
              >
                <h3 className="text-xl font-semibold text-[#DCE2E2] mb-2">
                  {div.title}
                </h3>
                <p className="text-base font-semibold text-[#89A096]">
                  {div.text}
                </p>
              </div>
            ))}
          </div>

          <p className="w-[90%] lg:w-[85%] 2xl:w-[75%] mx-auto text-[#89A096] text-base lg:text-xl font-semibold text-center">
            {Div2_Sec1.text2}
          </p>
        </div>
      </section>

      <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

      {/* Section 02 */}
      <section className="px-6 md:px-10 xl:px-16 pt-8 md:pt-10 text-[#DCE2E2] w-full">
        <h2 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax text-center max-w-4xl mx-auto mb-6 lg:mb-10">
          {Compliance_Solution.title}
        </h2>
        <div className="flex flex-col lg:flex-row items-center xl:items-center justify-between 2xl:justify-center gap-8 2xl:gap-16 w-full pb-10 lg:pb-0">
          <div className="h-full w-full lg:w-[50%] 2xl:w-[40%] flex flex-col items-center gap-5 py-3">
            <p className=" bg-[#1E2322] rounded-2xl text-[#DCE2E2] text-xl lg:text-3xl font-semibold text-center lg:text-left py-3 px-6 2xl:p-10 w-full">
              {Compliance_Solution.text1}
            </p>

            <h4 className="text-[#8AD5B7] text-2xl lg:text-[40px] font-semibold">
              {Compliance_Solution.subHeading}
            </h4>

            <div className="flex flex-col items-center justify-center gap-3 xl:gap-6 w-full rounded-2xl bg-[#2E3734] p-3 xl:p-6">
              <p className="text-[#89A096] text-sm lg:text-xl font-semibold text-center max-w-[80%]">
                {Compliance_Solution.text2}
              </p>
              <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>
              <p className="text-[#89A096] text-sm lg:text-xl font-semibold text-center">
                {Compliance_Solution.text3}
              </p>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[50%] flex flex-col gap-6 justify-start items-center">
            <h4 className="text-[#8AD5B7] text-3xl lg:text-[40px] font-semibold">
              {Compliance_Solution.subHeading2}
            </h4>
            <img
              src={Compliance_Solution.img}
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-[80%] lg:w-full 2xl:w-[90%] h-auto object-cover xl:object-contain object-left-top mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-center gap-8 2xl:gap-16 w-full h-full pb-6 lg:pb-10">
          <p className=" bg-[#1E2322] rounded-2xl text-[#DCE2E2] text-xl lg:text-3xl font-semibold text-center lg:text-left py-3 px-6 2xl:p-10 w-full lg:w-[50%] 2xl:w-[40%]">
            {CriticalRequirements.text1}
          </p>
          <div className="h-auto w-full lg:w-[50%] flex flex-col items-center 2xl:gap-6 gap-5 pt-6">
            <h4 className="text-[#8AD5B7] text-3xl lg:text-[40px] italic font-semibold">
              {CriticalRequirements.title}
            </h4>
            <div className="flex flex-col items-center justify-center gap-6 w-full p-6 xl:py-0">
              {CriticalRequirements.items.map((item, index) => (
                <p
                  key={index}
                  className="text-[#89A096] rounded-lg lg:rounded-full bg-[#2E3734] text-base lg:text-xl font-semibold text-center w-[85%] py-2 px-4"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

      {/* Section 03 */}
      <section className="px-6 md:px-10 xl:px-16 text-[#DCE2E2] w-full pt-6 md:pt-10 lg:pt-16">
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-16 w-full h-full pb-6 lg:pb-10">
          <div className="space-y-2 lg:space-y-4">
          <h2 className="text-[#8AD5B7] text-3xl lg:text-5xl 2xl:text-6xl font-semibold font-conthrax text-center max-w-3xl mx-auto">
            Your Compliance Roadmap
          </h2>

          <p className="text-[#89A096] text-lg lg:text-xl 2xl:text-2xl font-semibold text-center max-w-2xl mx-auto">
            PBS Follows a rigorous 8-step evaluation to ensure code compliance,
            safety, and efficiency.
          </p>
          </div>

          <img
            src="/pics/boiler-inspection-pic4.png"
            alt="roadmap"
            width={600}
            height={800}
            priority="true"
            className="w-full lg:w-[90%] 2xl:w-[60%] mx-auto h-auto object-contain object-top"
          />
        </div>

        {/* why PBS */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch 2xl:justify-center pt-10 pb-10 lg:pb-0 gap-10 lg:gap-0">
          <div className="w-full lg:w-[40%] 2xl:w-[30%] flex items-end overflow-hidden">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority="true"
              className="w-2/3 md:w-1/3 lg:w-full mx-auto lg:h-full object-contain lg:object-cover object-top mix-blend-luminosity"
            />
          </div>

          <div className="w-full lg:w-[65%] flex flex-col md:justify-center lg:pb-6 h-auto">
            <div className="w-full h-auto flex flex-col gap-3 2xl:gap-6">
              <h1 className="text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
                {whyPBS.title}
              </h1>
              <p className="text-[#89A096] text-sm lg:text-base 2xl:text-2xl w-[90%] 2xl:w-[80%] text-center lg:text-left font-semibold mx-auto lg:mx-0">
                {whyPBS.text1}{" "}
              </p>

              <div className="w-[50%] h-2 bg-[#8AD5B7] hidden lg:block mt-3"></div>

              <p className="text-[#89A096] text-sm lg:text-base 2xl:text-2xl w-[90%] 2xl:w-[80%] text-center lg:text-left font-semibold mx-auto lg:mx-0">
                {whyPBS.text2}
              </p>

              <div className="w-full mt-6 flex flex-col xl:flex-row gap-6 items-center justify-start">
                <CTA2
                  text="Book Your Slot Now"
                  isArrow={false}
                  href="/contacts"
                  styling={`w-[90%] md:w-2/3 lg:w-full xl:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
                />
                {/* <CTA2
                  text="Call Our Inspectors (914-316-6956)"
                  isArrow={false}
                  href="/contacts"
                  styling={`w-[90%] md:w-2/3 lg:w-full xl:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold hover:brightness-105 transition lg:text-base font-conthrax`}
                /> */}
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
