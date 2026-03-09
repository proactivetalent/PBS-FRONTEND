// Local Law 152 Gas Piping Inspection Page Component
// Renders the Local Law 152 Gas Line Inspections page.
// Data Objects:
// - section01: hero section content for gas piping inspections
// - Div2_Sec1: description and data array for LL152 overview
// - Compliance_Deadlines: penalties, schedule table data
// - LocalLaw152: legal obligation details and items
// - Address: liability and safety feature list
// - WhatsIncluded: service inclusions list
// - timelineItems: step-by-step process items
// - whyPBS: 'Why Choose PBS' section data

"use client";

import HeroSection from "../../../components/HeroSection";
import { motion } from "framer-motion";
import Image from "next/image";
import CTA2 from "../../../components/CTA2";
import { DotIcon } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import { section01, Div2_Sec1, Compliance_Deadlines, LocalLaw152, Address, WhatsIncluded, timelineItems, whyPBS, CommonInspectionFailures } from "./data";

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
      {/* Hero: Local Law 152 compliance overview */}
      <HeroSection
        heading="LL152 Gas Piping Inspections"
        text="Proactive Inspections Every 3 Years to Meet NYC Mandates, ensuring tenant safety, Legal Compliance, and uninterrupted operations"
        className="font-conthrax max-w-[95%] sm:max-w-3xl"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#DFDFDF] max-w-[95%] sm:max-w-3xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Local Law 152"
      />

      {/* Section 01: LL152 fundamentals, obligations, and deadline penalties */}

      <section className="px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 lg:gap-10 2xl:justify-center 2xl:gap-16 w-full pb-8 sm:pb-10">
          <Image
            src="/pics/local-law-152-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-full max-w-[360px] sm:max-w-[500px] lg:max-w-none lg:w-[45%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] relative flex flex-col gap-4 sm:gap-5 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 md:p-8 rounded-[24px] bg-[#1A2021] border border-[#89A096]/20">
            <span className="bg-[#8AD5B7] w-fit max-w-full rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-[11px] sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-4xl leading-[1.05] text-center lg:text-left font-semibold text-[#E4E4E4] uppercase font-conthrax max-w-xl">
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
                      className="text-sm sm:text-sm md:text-base text-center lg:text-left font-normal leading-relaxed text-[#DFDFDF]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#DFDFDF] text-sm sm:text-sm md:text-base font-normal text-center lg:text-left w-full flex flex-col leading-relaxed max-w-xl">
                <span className="text-[#8AD5B7] font-medium">{section01.additionalText.split("!")[0] + "!"}</span>
                <span>{section01.additionalText.split("!")[1]}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto space-y-3 lg:space-y-6 pb-10 lg:pb-0">
          <h2 className="section-heading-pill">{Div2_Sec1.title}</h2>

          <p className="text-sm sm:text-base lg:text-xl font-normal px-2 md:px-10 text-[#DFDFDF] max-w-4xl mx-auto text-center flex flex-col leading-relaxed">
            <span >{Div2_Sec1.description.split("(")[0]}</span>
            <span>{"(" + Div2_Sec1.description.split("(")[1]}</span>
          </p>

          <div className="w-full sm:w-[95%] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-4 sm:gap-6 lg:gap-8 rounded-2xl p-0 sm:p-2 lg:p-6 lg:px-5 lg:py-10">
            {Div2_Sec1.data.map((detail, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-stretch w-full lg:w-1/2"
                >
                  <div className="w-full flex flex-col lg:justify-start gap-4 glass-morphism-glow rounded-2xl p-4 sm:p-6">
                    <div className="space-y-4">
                      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-conthrax font-semibold text-[#DCE2E2]">
                        {detail.heading}
                      </h2>
                      <div>
                        {detail.items.map((desc, index) => {
                          return (
                            <p
                              key={index}
                              className="w-full text-sm sm:text-base text-[#DFDFDF] font-normal flex items-start gap-2 leading-relaxed"
                            >
                              {idx == 0 && <DotIcon size={18} className="mt-1 flex-shrink-0" />}
                              <span className={`${idx == 0 ? "w-[92%]" : "w-full"}`}>{desc}</span>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-10 w-[90%] mx-auto pb-10 glass-morphism-glow rounded-2xl p-6 lg:px-5 lg:py-10">
          <div className="w-full lg:w-[40%] 2xl:w-[25%] flex flex-col gap-3 justify-between items-center lg:items-start lg:justify-center 2xl:gap-6 box-border">
            <h2 className="text-3xl lg:text-[40px] font-semibold font-conthrax">
              {Compliance_Deadlines.title}
            </h2>
            <p className="text-[#DFDFDF] text-base font-normal text-center lg:text-left">
              {Compliance_Deadlines.text}
            </p>
          </div>

          <div className="w-full lg:w-[55%]">
            <p className="text-[#ffff] text-base lg:text-xl font-semibold p-2 text-center">
              {Compliance_Deadlines.label}
            </p>
            <div className="relative w-full">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    {Compliance_Deadlines.table.headers.map((header, index) => (
                      <th
                        key={index}
                        className="p-3 sm:p-4 text-center text-sm sm:text-base lg:text-xl font-semibold text-[#8AD5B7]"
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
                          className="p-3 sm:p-4 text-center text-xs sm:text-sm lg:text-base font-normal text-[#DFDFDF]"
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
      </section>

      {/* Section 02: Legal obligations and liability risk highlights */}
      <section className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col items-center justify-center w-full mx-auto pb-6 lg:pb-10">
          <h2 className="section-heading-pill">{LocalLaw152.title}</h2>
          {/* <h4 className="text-[#8AD5B7] font-conthrax font-semibold text-xl text-center lg:text-3xl">{LocalLaw152.subtitle}</h4> */}
          <p className="text-sm sm:text-base font-normal leading-relaxed text-[#DFDFDF] my-4 sm:my-6 w-full sm:w-[95%] mx-auto text-left">
            {LocalLaw152.text1}
          </p>
          <div className="flex flex-col gap-2 w-full sm:w-[95%] mx-auto mb-5 sm:mb-6">
            {LocalLaw152.items.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-sm sm:text-base text-[#DFDFDF] font-normal flex gap-2 items-start leading-relaxed"
                >
                  <DotIcon size={18} className="mt-1 flex-shrink-0" />
                  <span className="w-full">{item}</span>
                </p>
              );
            })}
          </div>
          <p className="text-sm sm:text-base font-normal leading-relaxed w-full sm:w-[95%] mx-auto text-[#DFDFDF] text-left">
            {LocalLaw152.text2}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full mx-auto ">
          <h2 className="section-heading-pill">
            {Address.heading}
          </h2>

          <p className="text-sm sm:text-base text-center font-semibold px-2 sm:px-0">
            {Address.text}
          </p>

          <div className="hidden lg:flex relative w-[68%] 2xl:w-[75%] mx-auto h-24 sm:h-32 lg:h-40 items-center justify-center">
            {/* Desktop connector rail (horizontal with side drops) */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[3px] rounded-full bg-[#8AD5B7] flex justify-between items-center">
              <div className="absolute top-0 left-full transform -translate-x-1/2 w-[3px] rounded-full bg-[#8AD5B7] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>
              </div>

              <div className="absolute top-0 left-0 transform -translate-x-1/2 w-[3px] rounded-full bg-[#8AD5B7] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>
              </div>
            </div>

            {/* Desktop center connector stem */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[3px] h-1/2 rounded-full bg-[#8AD5B7] flex flex-col justify-between items-center">
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9] z-50"></div>

            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full gap-4 sm:gap-6 lg:gap-8">
            {Address.items.map((item, index) => (
              <div
                key={index}
                className="relative glass-morphism-glow rounded-[16px] p-3 sm:p-4 lg:p-6 w-full sm:w-[95%] lg:w-1/3 2xl:w-1/4 flex flex-col gap-2 sm:gap-3"
              >
                <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 03: Common failures, inclusions, and process timeline */}
      <section className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 pb-6 lg:pb-10 w-full">
          <h2 className="text-lg sm:text-2xl lg:text-4xl text-center font-semibold bg-[#1E2322] p-4 sm:p-6 rounded-[16px] text-[#E4E4E4] font-conthrax uppercase w-full">
            There are few common inspection failures that we resolve with proactive approach and maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full sm:w-[95%]">
            {CommonInspectionFailures.map((item, index) => {
              return (
                <div
                  className="w-full rounded-[14px] glass-morphism-glow px-4 sm:px-5 lg:px-6 py-4 sm:py-5"
                  key={index}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#8AD5B7]/75 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#DCE2E2] text-xl sm:text-2xl leading-none font-semibold">
                        {item.number}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[#DFDFDF] text-sm sm:text-base font-semibold italic leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-tight mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 pb-10 w-full">
          <h2 className="section-heading-pill">
            {WhatsIncluded.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
            {WhatsIncluded.items.map((item, index) => {
              return (
                <button
                  key={index}
                  className="glass-morphism-glow text-base sm:text-lg lg:text-xl 2xl:text-2xl font-regular text-[#DCE2E2] px-4 sm:px-5 py-3 rounded-2xl min-h-[72px] sm:min-h-24 w-full 2xl:w-3/4 mx-auto"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full">
          <h2 className="section-heading-pill">
            Our Process
          </h2>
          <p className="text-[#DFDFDF] text-xs sm:text-sm lg:text-base text-center font-normal mb-3 sm:mb-4 lg:my-10 px-2 sm:px-0">
            Simple, Fast, Non-Disruptive
          </p>

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
                    } mb-3 sm:mb-4 md:mb-8 rounded-2xl p-4 sm:p-5 md:p-0 glass-morphism-glow md:bg-none md:bg-transparent md:border-0 md:shadow-none md:backdrop-blur-none`}
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
                      className={`flex flex-col gap-1 sm:gap-1 lg:gap-2 w-full text-left ${isLeft ? "md:text-right md:pr-10 lg:pr-14" : "md:text-left md:pl-10 lg:pl-14"}`}
                    >
                      <p className="md:hidden w-8 h-8 rounded-full border border-[#8AD5B7]/80 flex items-center justify-center text-[#8AD5B7] text-base font-semibold mb-2">
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

                  {/* Desktop row connector and endpoint marker */}
                  <div
                    className={`hidden md:flex relative w-full h-2 rounded-full bg-[#DCE2E2] justify-center mt-4 z-10`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-[#8AD5B7] absolute -top-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:top-[-10px] ${isLeft ? "sm:left-0" : "sm:left-auto sm:right-0"
                        }`}
                    ></div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Outcome visual and Why PBS conversion block */}
      <section className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-12 pb-6 lg:pb-10 w-full">
          <h2 className="section-heading-pill">Why it works for you</h2>

          <img
            src="/pics/local-law-152-pic3.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[92%] sm:w-[80%] h-auto object-cover object-right-top rounded-[16%] mx-auto"
          />
        </div>

        {/* Why PBS highlight panel */}
        

        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch mb-8 lg:mb-20 lg:mt-20 2xl:justify-center gap-4 sm:gap-8 lg:gap-12 rounded-[16px] px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-8 lg:pb-0 xl:gap-0 glass-morphism-glow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pics/local-law-152-wcu.png')" }}
        >
          {/* Why PBS image block */}
          <div className="w-full lg:w-[45%] 2xl:w-[40%] 3xl:w-[30%] flex items-end justify-center relative mt-0 sm:-mt-10 lg:mt-0 z-10">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="w-[88%] sm:w-[78%] lg:w-[130%] mx-auto h-auto lg:h-full object-cover object-top grayscale mix-blend-luminosity"
            />
          </div>

          {/* Why PBS content block */}
          <div className="w-full lg:w-[55%] 2xl:w-[60%] 3xl:w-[50%] flex flex-col justify-end lg:pb-6 gap-3 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left font-semibold font-conthrax text-[#E4E4E4] tracking-wide uppercase">
              {whyPBS.title}
            </h1>

            <p className="text-[#DFDFDF] text-sm lg:text-base 2xl:w-[80%] text-center lg:text-left font-normal leading-relaxed">
              {whyPBS.text1}
            </p>

              <p className="text-[#8AD5B7] italic text-sm lg:text-base 2xl:w-[80%] text-center lg:text-left font-semibold leading-relaxed flex flex-col">
                <span>{whyPBS.text2.split("-")[0]}</span>
                <span>{whyPBS.text2.split("-")[1]}</span>
              </p>

              <p className="text-[#DFDFDF] text-sm lg:text-base 2xl:w-[80%] text-center lg:text-left font-semibold leading-relaxed">
                {whyPBS.text3}
              </p>

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