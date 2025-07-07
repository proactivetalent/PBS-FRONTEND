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
import {section01, List_Sec1, Compliance_Deadlines, WhatThisMeans, keyTakeaways, WhyItMatter, whyPBS, timelineItems} from "./data";

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
        heading="LL 126 Parking Structure Inspection"
        text="Ensure Compliance, Prevent risks & Protect your property by our simplified processes through the assessments of our qualified licensed experts"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/local-law-parking-hero.png"
      />

        {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
    <div className="bg-[#8AD5B7] w-full h-2"></div>
    <div
      className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[70%] lg:w-[60%] xl:w-[50%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
    >
      Local Law 126 (parking)
    </div>
  </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-16 lg:pt-24 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/local-law-parking-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
            <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-center text-base md:text-lg xl:text-xl font-semibold text-[#89A096]">
              {section01.title}
            </span>
            <h2 className="text-2xl lg:text-4xl 2xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax">
              {section01.heading}
            </h2>
            <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6">
              <div className="space-y-2 lg:w-[80%]">
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
            <div className="flex items-stretch justify-start gap-6">
              <div className="bg-[#8AD5B7] w-2 h-auto hidden lg:block"></div>
              <p className="text-[#89A096] text-base font-semibold text-center lg:text-left w-full lg:w-2/3">
                {section01.additionalText}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 mt-6 lg:mt-16 mb-8"></div>

        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-full lg:w-[80%] mx-auto">
          <h2 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax text-center">
            Know About LL 126
          </h2>
          <p className="text-[#89A096] text-lg lg:text-xl text-center font-semibold">
            Local Law 126 requires all NYC parking structures to undergo
            periodic inspections by licensed inspectors (QPSIs), these
            evaluations ensure structural integrity, identify hazards, and keep
            your property compliant with evolving safety regulations
          </p>
          <div className="bg-[#2E3734] rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row lg:items-stretch justify-center lg:justify-between gap-6 lg:gap-0">
            <div className="w-full lg:w-[53%] 2xl:w-[40%] h-auto flex justify-center items-center">
              <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#DCE2E2] font-semibold">
                What’s Reviewed During this Inspection
              </h2>
            </div>
            <div className="w-full lg:w-[45%] space-y-6 md:space-y-0">
              {List_Sec1.map((list, index) => {
                return (
                  <div
                    key={index}
                    className="text-[#DCE2E2] text-base font-semibold"
                  >
                    <h4 className="italic mb-1">{list.heading}</h4>
                    <ul className="list-disc list-inside">
                      {list.items.map((item, index) => {
                        return (
                          <li key={index} className="flex gap-2 text-[#89A096]">
                            <DotIcon
                              className="text-[#89A096] flex-shrink-0"
                              size={32}
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

      {/*Section 02 */}
      <section className="px-6 md:px-10 xl:px-16 pb-8 pt-10 lg:pt-16 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-[90%] mx-auto pb-10">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold font-conthrax text-[#8AD5B7]">
            {Compliance_Deadlines.title}
          </h2>
          <p className="text-[#89A096] text-base font-semibold text-center lg:max-w-4xl mx-auto">
            {Compliance_Deadlines.text}
          </p>
          <table className="border-collapse border border-[#8AD5B7] w-full">
            <thead className="text-[#DCE2E2]">
              <tr>
                {Compliance_Deadlines.table.headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-2 border-[#8AD5B7] p-4 text-center text-xl font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#89A096]">
              {Compliance_Deadlines.table.rows.map((row, index) => (
                <tr key={index} className="border-2 border-[#8AD5B7]">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-2 border-[#8AD5B7] p-4"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center 2xl:items-start justify-center gap-6 lg:gap-10 w-full lg:w-[95%] mx-auto pt-10">
          <h2 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax text-center w-full">
            What This Means for you
          </h2>

          <div className="flex flex-col items-start justify-center gap-6 lg:gap-10">
            <div className="w-full flex flex-col md:flex-row items-stretch text-center md:text-left justify-start gap-6 lg:w-[70%]">
              <h2 className="text-[#DCE2E2] text-2xl md:text-3xl font-semibold w-full mx-auto lg:w-[50%] xl:w-[40%] xl:mx-0">
                {WhatThisMeans.first.title}
              </h2>
              <p className="text-[#89A096] text-lg lg:text-xl text-left font-semibold w-full lg:w-[50%] xl:w-[45%]">
                {WhatThisMeans.first.text}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-start gap-6 w-full lg:w-[85%]">
              <h4 className="text-[#DCE2E2] text-2xl md:text-3xl text-center md:text-left font-semibold w-full lg:w-[55%] xl:w-[45%]">
                {WhatThisMeans.second.title}
              </h4>
              <ul className="w-full">
                {WhatThisMeans.second.items.map((subItem, subIndex) => {
                  return (
                    <li key={subIndex} className="flex gap-2 text-[#89A096]">
                      <DotIcon className="text-[#ffff] flex-shrink-0" size={32} />
                      <span className="w-[85%] 2xl:w-[70%] text-base lg:text-xl font-semibold">
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

        <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 sm:gap-12 pt-16">
          <Image
            src="/pics/local-law-parking-pic2.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[40%] xl:w-[25%] 2xl:w-[25%] h-auto object-contain rounded-lg mb-4 sm:mb-6 lg:mb-0 mx-auto"
          />
          <div className="text-left w-full lg:w-[60%] xl:w-[70%] 2xl:w-[70%] flex flex-col items-start justify-center gap-3 sm:gap-6 p-6 bg-[#2D3533] rounded-3xl">
            {/* Heading */}
            <h2 className="text-[#8AD5B7] text-2xl lg:text-3xl font-semibold">
              Key Take-aways
            </h2>

            {/* List */}
            <ul className="flex flex-col">
              {keyTakeaways.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 sm:gap-3 items-center text-[#89A096]"
                >
                  <DotIcon className="flex-shrink-0" size={32} />
                  <span className="text-sm italic lg:text-base font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="px-6 md:px-10 xl:px-16 py-10 lg:py-16 text-[#DCE2E2]">
        <h2 className="text-center text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-6 lg:mb-10">
          Our Offerings
        </h2>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 w-full lg:w-[90%] mx-auto pb-10">
            {[
              "Comprehensive Inspections",
              "Hassle-free Reporting",
              "Repairs & Maintenance",
              "Portfolio Management",
            ].map((item, index) => {
              return (
                <button
                  key={index}
                  className="bg-[#1E2322] text-2xl font-semibold text-[#DCE2E2] px-5 py-2 rounded-2xl min-h-24"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-center text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-2 mt-6 lg:mt-10">
            {" "}
            How It Works
          </h2>
          <p className="text-[#89A096] text-sm lg:text-base text-center font-semibold mb-6 lg:mb-10">
            Your Path to Compliance in 4 Easy Steps
          </p>

          <div className="relative flex flex-col items-center w-full py-4 sm:py-6 lg:py-8">
            {/* Vertical Line with Circles at Both Ends (Hidden on Mobile) */}
            <div className="hidden sm:flex absolute top-0 -bottom-16 w-2 bg-[#DCE2E2] flex-col justify-between items-center rounded-full">
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
            </div>

            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col w-full max-w-3xl ${ 
                  item.position === "left" ? "sm:items-start" : "sm:items-end"
                } mb-6 sm:-mb-6`}
              >
                {/* Content */}
                <div
                  className={`flex items-center w-full sm:w-1/2 ${
                    item.position === "left"
                      ? "sm:pr-4 lg:pr-6"
                      : "sm:pl-4 lg:pl-6"
                  }`}
                >
                  {/* Text */}
                  <div
                    className={`flex flex-col gap-1 sm:gap-1 lg:gap-2 w-full ${
                      item.position === "left"
                        ? "text-center sm:text-right"
                        : "text-center sm:text-left"
                    }`}
                  >
                    <h4 className="text-[#DCE2E2] text-lg sm:text-xl lg:text-2xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-[#89A096] text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Horizontal Line and Circle (Mobile: Centered, Desktop: Positioned Below Content) */}
                <div
                  className={`relative w-full sm:w-1/2 h-2 rounded-full bg-[#DCE2E2] flex justify-center mt-4 z-10`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-[#8AD5B7] absolute -top-2 sm:top-[-10px] ${
                      item.position === "left" ? "sm:left-0" : "sm:right-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-base font-semibold max-w-lg lg:max-w-sm text-center mx-auto mt-3 sm:mt-24">
            We handle repairs, reports, and agency submissions{" "}
          </p>
        </div>
      </section>

      {/* Section 04 */}
      <section className="px-6 md:px-10 xl:px-16 text-[#DCE2E2]">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold font-conthrax mb-6 lg:mb-10">
          {" "}
          Why it Matters
        </h2>

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-[90%] mx-auto pb-10">
          {WhyItMatter.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center bg-[#1E232261] border-2 border-[#8AD5B7] justify-start gap-6 w-full rounded-2xl p-6"
              >
                <img src="/pics/arrow.png" />
                <p className="text-[#89A096] text-lg lg:text-xl font-semibold w-full">
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        {/* why PBS */}
        <div className="w-full flex flex-col lg:flex-row items-center md:items-stretch 2xl:justify-center gap-3 sm:gap-6 2xl:gap-16 py-6 lg:py-16">
          <div className="w-full lg:w-[45%] xl:w-1/2 2xl:w-[50%] 3xl:w-[35%] flex items-end">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="relative w-full md:w-2/3 lg:w-full mx-auto h-auto lg:h-full object-contain lg:object-cover object-top rounded-[16%] mix-blend-luminosity"
            />
          </div>

          <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[50%] 3xl:w-[40%] flex flex-col md:justify-end 2xl:justify-center lg:pb-6 h-full 2xl:h-auto">
            <div className="w-full h-auto flex flex-col gap-2 2xl:gap-6">
              <h1 className="text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
                {whyPBS.title}
              </h1>
              <div className="text-sm lg:text-base 2xl:text-xl text-center md:text-left text-[#89A096] font-semibold space-y-1">
                <div className="flex flex-col gap-2">
                  {whyPBS.list1.map((item, index) => {
                    return (
                      <span key={index} className="flex gap-2 text-left">
                        <DotIcon className="text-[#DCE2E2] w-[5%]" />
                        {index == 0 ? (
                          <span>
                            <span className="text-[#DCE2E2]">
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

              <div className="flex justify-start items-stretch gap-3 px-3">
                <p className="w-full text-2xl lg:text-3xl text-center lg:text-left font-semibold text-[#DCE2E2]">
                  PA's
                </p>
              </div>

              <div className="text-sm lg:text-base 2xl:text-xl text-center lg:text-left font-semibold text-[#89A096] flex flex-col gap-2">
                <div>
                  {whyPBS.list2.map((item, index) => {
                    return (
                      <p key={index} className="w-[90%] 2xl:w-[70%] pl-[3%]">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="w-[30%] h-2 bg-[#8AD5B7] hidden lg:block mt-6"></div>

              <div className="space-y-1">
                <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl text-center lg:text-left font-semibold">
                  {whyPBS.text1}
                </p>
                <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl text-center lg:text-left font-semibold">
                  {" "}
                  Schedule your inspection and get a quote in 24 Hour
                </p>
              </div>

              <div className="w-full mt-6 flex flex-col xl:flex-row gap-3 2xl:gap-6 items-center justify-start">
                <CTA2
                  text="Book Your Slot Now"
                  isArrow={false}
                  href="/contacts"
                  styling={`w-[90%] md:w-2/3 lg:w-full xl:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 xl:px-3 2xl:px-6 py-2 text-xs font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}
                />
                {/* <CTA2
                  text="Call Our Inspectors (914-316-6956)"
                  isArrow={false}
                  href="/contacts"
                  styling={`w-[90%] md:w-2/3 lg:w-full xl:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 xl:px-3 2xl:px-6 py-2 text-xs font-semibold hover:brightness-105 transition xl:text-base font-conthrax`}
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
