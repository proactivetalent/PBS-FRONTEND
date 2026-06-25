// Local Law Parapet Inspection Page Component
// Renders the Local Law 126 Parapet Inspection page.
// Data Objects:
// - section01: hero section content and items
// - Div2_Sec1: dual content section data
// - WhoNeedsInspections: eligibility criteria content
// - complianceDetails: compliance timeline cards data
// - Process: inspection process steps
// - WhyPBS: benefits section data

"use client";

import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import { parapetData } from "../data"; // Import parapetData
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import CTA from "@/components/CTA";
import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { section01, Div2_Sec1, WhoNeedsInspections, complianceDetails, Process, WhyPBS } from "./data"; // Import data objects

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
      {/* Hero: LL126 parapet compliance overview */}
      <HeroSection
        heading="Comply with LL 126 Parapet Inspection"
        text="Prevent Hazards, avoid Penalties by the help our licensed experts"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl font-semibold"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#DFDFDF]"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="LL 126 Parapet Inspections"
      />


      {/* Section 01: Parapet inspection intro and legal context */}
      <section className=" pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 lg:gap-10 2xl:justify-center 2xl:gap-16 w-full pb-8 lg:pb-16">
          <Image
            src="/pics/local-law-parapet-pic2.avif"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none lg:w-[45%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] relative flex flex-col gap-4 sm:gap-5 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 md:p-8 rounded-[24px] bg-[#1A2021] border border-[#89A096]/20">
            <span className="bg-[#8AD5B7] uppercase font-poppins w-auto rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-xs sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl leading-[1.05] text-center lg:text-left font-semibold text-[#E4E4E4] uppercase font-conthrax max-w-xl">
              {section01.heading}
            </h2>
            {/* <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p> */}

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

        <h2 className="section-heading-pill">
          {Div2_Sec1.left.heading}
        </h2>
        <div className="rounded-lg p-4 sm:p-6 lg:p-10">
          <div className="w-full h-auto flex flex-col justify-center items-start gap-6">

            <div className="flex flex-col lg:flex-col lg:items-start justify-center lg:justify-between gap-6">
              <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center lg:text-left">
                {Div2_Sec1.left.text}
              </p>

              <div className="w-full flex flex-col justify-center gap-4 sm:gap-6">
                <div className="">
                  {Div2_Sec1.right.items.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="text-[#DFDFDF] text-sm sm:text-base font-normal"
                      >
                        <p key={index} className="flex items-start gap-2 text-[#DFDFDF] text-left">
                          <DotIcon className="text-[#DFDFDF] w-4 h-4 mt-1 flex-shrink-0" size={18} />
                          <span className="flex-1">{list}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Eligibility and key compliance requirements */}
      <section className="pt-8 sm:pt-10 flex flex-col gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="w-full mx-auto flex flex-col items-center gap-6 2xl:gap-8">
          <h2 className="section-heading-pill">
            {WhoNeedsInspections.heading}
          </h2>

          <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center max-w-3xl">
            {WhoNeedsInspections.text1}
          </p>

          {WhoNeedsInspections.items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center glass-morphism-glow justify-start gap-4 sm:gap-6 rounded-2xl p-4 sm:p-6 w-full sm:w-[90%] lg:w-2/3 mx-auto"
              >
                <img src="/pics/arrow.png" className="w-5 sm:w-6 h-auto" />
                <p className="text-[#DFDFDF] text-sm sm:text-base lg:text-xl font-semibold w-full">
                  {item}
                </p>
              </div>
            );
          })}

          {/* <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center lg:max-w-3xl">
            {WhoNeedsInspections.text2}
          </p> */}
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full mx-auto pt-4 sm:pt-10 lg:pt-16">
          {/* Compliance details heading */}
          <h2 className="section-heading-pill">
            Key Compliance Details you should know
          </h2>
          <div className="hidden lg:flex relative w-[70%] mx-auto h-24 sm:h-32 lg:h-40 items-center justify-center">
            {/* Desktop horizontal connector rail */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 rounded-full bg-[#8AD5B7] flex justify-between items-center">
              <div className="absolute top-0 left-full transform -translate-x-1/2 w-1 rounded-full bg-[#8AD5B7] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>
              </div>

              <div className="absolute top-0 left-0 transform -translate-x-1/2 w-1 rounded-full bg-[#8AD5B7] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>
              </div>
            </div>

            {/* Desktop center connector stem */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-[#8AD5B7] flex flex-col justify-between items-center">
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>
            </div>
          </div>

          {/* Compliance detail cards */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full gap-4 sm:gap-6 lg:gap-8 px-0 sm:px-2 lg:px-20">
            {complianceDetails.map((item, index) => (
              <div
                key={index}
                className="relative glass-morphism-glow rounded-[16px] p-3 sm:p-4 lg:p-5 w-full sm:w-[90%] lg:w-full flex flex-col gap-2 sm:gap-3"
              >
                <p className="text-[#DFDFDF] text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link href={"/alert"}
            className="w-full sm:w-[85%] md:w-[60%] lg:w-[40%] mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-base sm:text-lg font-semibold hover:brightness-105 hover:scale-105 transition xl:text-xl font-conthrax relative flex items-center justify-center"
          >
            <span className="">Get Timely Alerts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 absolute right-4"
            >
              <line x1="-15" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

        </div>
      </section>

      {/* Section 03: Process steps, Why PBS benefits, and CTAs */}
      <section className="pt-8 sm:pt-10 flex flex-col gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full mx-auto pb-4 sm:pb-6 lg:pb-10">
          <h2 className="section-heading-pill">
            {Process.heading}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-6 items-center lg:items-stretch w-full gap-6">
            {Process.items.map((item, index) => (
              <div
                key={index}
                className={`relative w-full sm:w-[90%] lg:w-full mx-auto flex items-center gap-2 sm:gap-3 glass-morphism-glow rounded-[16px] ${index < 3
                    ? "lg:col-span-2"
                    : index === 3
                      ? "lg:col-start-2 lg:col-span-2"
                      : "lg:col-start-4 lg:col-span-2"
                  }`}
              >
                {/* Step card shell */}
                <div
                  className={`relative md:rounded-full w-full flex items-center p-3 sm:p-4 lg:p-5 bg-transparent overflow-hidden`}
                >
                  {/* Legacy decorative border (kept commented) */}
                  {/* <div
                    className={`hidden md:block absolute inset-0 rounded-full border-4 border-[#8AD5B7]`}
                    style={{
                      clipPath:
                        "polygon(0 0, 0 0, 50% 50%, 0 60%, 0 100%, 60% 100%, 60% 25%, 25% 75%, 25% 25%, 0 0)",
                    }}
                  ></div> */}

                  {/* Step content */}
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-3 w-full">
                    <div className="rounded-full border border-[#8AD5B7] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 aspect-square flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#DCE2E2]">
                      {index + 1}
                    </div>
                    <p className="flex flex-col items-center md:items-start 2xl:max-w-xl">
                      <span className="italic text-sm sm:text-base lg:text-lg xl:text-2xl font-semibold text-[#DCE2E2] text-center md:text-left">
                        {item.split(":")[0]}
                      </span>
                      <span className="text-sm sm:text-base text-center md:text-left font-normal leading-relaxed text-[#DFDFDF]">
                        {item.split(":")[1]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto overflow-hidden relative text-[#DCE2E2] py-6 sm:py-8 lg:py-10">
          {/* Why PBS heading and intro copy */}
          <div className="text-center mb-6 lg:mb-10">
            <h1 className="section-heading-pill">
              {WhyPBS.heading}
            </h1>
            <p className="text-sm sm:text-base font-semibold px-2 sm:px-6 lg:px-10 text-[#DFDFDF] max-w-5xl mx-auto my-4 sm:my-6">
              {WhyPBS.text}
            </p>
          </div>

          {/* Why PBS feature rows */}
          <div className="w-full flex flex-col gap-6 lg:gap-8 mb-10 lg:mb-16">
            {WhyPBS.items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center md:items-stretch md:justify-between rounded-lg gap-4 md:gap-6 lg:gap-8 mb-10`}
              >
                {/* Feature image */}
                <div className={`w-[80%] sm:w-[65%] md:w-[60%] lg:w-[30%] ${index == 0 ? "xl:w-[30%]" : "xl:w-[20%]"} h-auto flex-shrink-0 flex items-center`}>
                  <Image
                    src={item.img}
                    alt={item.data.title}
                    width={500}
                    height={500}
                    className={`w-full h-full object-contain ${index == 0 ? "" : "mix-blend-luminosity"}`}
                  />
                </div>

                {/* Feature text content */}
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[50%] h-auto flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4 bg-[#1E2322] p-3 sm:p-4 lg:p-6 rounded-3xl">
                  <h3 className="text-[#8AD5B7] text-lg sm:text-xl lg:text-3xl font-semibold text-center lg:text-left">
                    {item.data.title}
                  </h3>
                  <div className="text-[#89A096] italic text-sm lg:text-base font-semibold space-y-2 text-center lg:text-left">
                    <span>{item.data.text}</span>
                    <p>
                      {item.data.items
                        ?.map(
                          (text, idx) =>
                            idx !== 0 && (
                              <span key={idx} className="flex items-start">
                                <DotIcon
                                  className="text-[#89A096] w-4 h-4 mt-1 flex-shrink-0"
                                  size={18}
                                />
                                <span className="flex-1">{text.trim()}</span>
                              </span>
                            )
                        )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm sm:text-base font-semibold text-[#DFDFDF] max-w-4xl mx-auto px-2 sm:px-0">{WhyPBS.text2}</p>

          <div className="max-w-4xl w-full mx-auto my-8 sm:my-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 items-stretch sm:items-center justify-center">
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
      </section>

      <ImageCarousel />
    </div>
  );
};

export default Page;
