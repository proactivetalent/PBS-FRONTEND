'use client'
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PhaseItem from "@/components/PhaseItem";
import CTA2 from "@/components/CTA2";
import { DotIcon } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import { section01, WhyitMatters, WhyNeedThisTest, HydrostaticTesting, SprinklerInspection, FDNYColorCodes, whyPBS } from "./data";

const Page = () => {

  return (
    <div
      className="bg-[#2B3331]"
    >
      {/* Hero: Sprinkler hydrostatic inspection overview */}
      <HeroSection
        heading="Fire Sprinkler Inspection (Hydrostatic Test)"
        text="Ensuring that your property’s fire sprinkler systems are compliant with New York City’s regulations is crucial for safety and legal adherence."
        className="font-conthrax max-w-[95%] sm:max-w-3xl"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#DFDFDF] max-w-[95%] sm:max-w-3xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Sprinkler Hydrostatic Inspection"
      />

      {/* Section 01: Inspection context, why it matters, and test necessity */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 2xl:justify-center 2xl:gap-16 w-full pb-6 lg:pb-10">
          <Image
            src="/pics/sh-inspection-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-full max-w-[360px] sm:max-w-[500px] lg:max-w-none lg:w-[40%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] bg-[#1E2322] flex flex-col gap-3 sm:gap-4 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[16px]">
            <span className="bg-[#8AD5B7] font-poppins w-fit max-w-full rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-[11px] sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-center lg:text-left font-semibold text-[#E4E4E4] font-conthrax leading-tight">
              {section01.heading}
            </h2>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-[#DFDFDF] text-center lg:text-left">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6 w-full">
              <div className="space-y-2 w-full sm:w-[90%]">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-sm sm:text-base text-center lg:text-left font-normal leading-relaxed text-[#DFDFDF]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex items-stretch justify-start gap-3">
              <p className="text-[#DFDFDF] text-sm sm:text-base font-semibold leading-relaxed text-center lg:text-left w-full">
                {section01.additionalText}
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-10 mx-auto pb-6 lg:pb-10">
          <h2 className="section-heading-pill">
            {WhyitMatters.title}
          </h2>
          <p className="text-sm sm:text-base text-center leading-relaxed text-[#DFDFDF] lg:mb-6 max-w-[95%] 2xl:max-w-[90%] mx-auto">
            {WhyitMatters.description}
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-center gap-5 2xl:gap-16 w-full h-full pb-6 lg:pb-10">
            <div className="flex flex-col items-center justify-center p-3 lg:p-6 w-full sm:w-[85%] lg:w-[40%] xl:w-[45%]">
              <span className="text-[#8AD5B7] text-xl lg:text-[40px] uppercase leading-tight font-semibold text-center">
                {WhyitMatters.text1.split("|")[0]}
              </span>
              <span className="text-[#DFDFDF] text-base text-center">
                {WhyitMatters.text1.split("|")[1]}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-[60%] xl:w-[55%] lg:p-6 xl:py-0">
              {WhyitMatters.items.map((item, index) => (
                <p
                  key={index}
                  className="text-[#DFDFDF] rounded-2xl glass-morphism-glow text-sm sm:text-base font-semibold w-full py-2 px-4 sm:px-6 lg:px-10 min-h-16 flex items-center"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-6 sm:gap-8 lg:gap-10 mx-auto">
          <Image
            src={WhyNeedThisTest.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-[80%] lg:w-[50%] h-auto object-cover object-top rounded-[16px] mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[50%] flex flex-col gap-3 justify-start items-center lg:items-start 2xl:justify-center 2xl:gap-6">
            <h2 className="section-heading-pill">
              {WhyNeedThisTest.title}
            </h2>
            <p className="text-sm sm:text-base text-center lg:text-left ml-0 lg:ml-8 text-[#DFDFDF] leading-relaxed max-w-[90%] xl:max-w-[80%] 2xl:max-w-[85%]">
              {WhyNeedThisTest.description}
            </p>
          </div>
        </div>
      </section>

      {/* Section 02: Hydrostatic testing details and numbered process cards */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          {HydrostaticTesting.heading}
        </h2>
        <div className="mx-auto flex flex-col items-center md:items-stretch md:justify-between gap-6 sm:gap-8 md:gap-0 pb-6 lg:pb-10 2xl:pb-16">
          <div className="flex items-stretch w-full">
            <div className="w-full flex flex-col md:justify-center gap-3 md:gap-6">

              <p className="text-sm sm:text-base leading-relaxed text-[#DFDFDF] text-center px-1 sm:px-0">
                {HydrostaticTesting.text1}
              </p>
            </div>
          </div>
          <div className="hidden md:block w-2 bg-[#8AD5B7] mx-8"></div>

          <p className="w-full text-sm sm:text-base leading-relaxed text-[#DFDFDF] flex items-center text-center sm:w-4/5 mx-auto">
            {HydrostaticTesting.text2}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 items-center lg:items-stretch w-full gap-4 sm:gap-6">
          {HydrostaticTesting.items.map((item, index) => (
            <div
              key={index}
              className={`relative w-full lg:w-full mx-auto flex items-center gap-2 sm:gap-3 glass-morphism-glow rounded-[16px] ${index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-start-2 lg:col-span-2"
                  : "lg:col-start-4 lg:col-span-2"
                }`}
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


      </section>

      {/* Section 03: Sprinkler inspection phases */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="w-full flex flex-col items-center justify-center gap-3 2xl:gap-6">
          {/* Section title */}
          <h2 className="section-heading-pill">
            {SprinklerInspection.title}
          </h2>

          {/* Section description */}
          <p className="text-sm sm:text-base text-[#DFDFDF] leading-relaxed max-w-[95%] sm:max-w-[85%] lg:max-w-[80%] text-center">
            {SprinklerInspection.description}
          </p>

          {/* Phase breakdown heading */}
          <h3 className="text-lg sm:text-2xl lg:text-3xl uppercase text-center font-semibold text-[#DCE2E2] font-conthrax mt-6 sm:mt-8 lg:mt-10">
            {SprinklerInspection.subHeading}
          </h3>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-center lg:justify-between 2xl:justify-center gap-4 sm:gap-6 lg:gap-10 2xl:gap-12 w-full sm:w-[90%] pt-3 sm:pt-5 lg:pt-8 2xl:pt-10">
            {/* Left phase column */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[60%]">
              <PhaseItem
                title={SprinklerInspection.inspectionPhases.firstRow[0].title}
                description={SprinklerInspection.inspectionPhases.firstRow[0].description}
                titleWidth="w-full"
                isFormatted={true}
              />
              <PhaseItem
                title={SprinklerInspection.inspectionPhases.secondRow.title}
                description={SprinklerInspection.inspectionPhases.secondRow.description}
                titleWidth="w-full"
              />
            </div>

            {/* Right phase column */}
            <div className="flex flex-col justify-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[40%]">
              <PhaseItem
                title={SprinklerInspection.inspectionPhases.firstRow[1].title}
                description={SprinklerInspection.inspectionPhases.firstRow[1].description}
                titleWidth="w-full"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Section 04: FDNY color code reference and why PBS CTA panel */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="w-full mx-auto flex flex-col items-center justify-center gap-3 2xl:gap-6 pb-6 lg:pb-10 ">

          <div className="w-full h-full flex flex-col gap-3 justify-center 2xl:gap-6 ">
            <h2 className="section-heading-pill">
              {FDNYColorCodes.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#DFDFDF] leading-relaxed text-center px-1 sm:px-0">
              {FDNYColorCodes.test}
            </p>
          </div>

          <div className="flex flex-row items-center xl:items-stretch justify-center lg:justify-between 2xl:justify-center gap-4 sm:gap-8 lg:gap-10 2xl:gap-12 w-full lg:w-[90%]">
            <Image
              src={FDNYColorCodes.img}
              alt="Inspection Services"
              width={500}
              height={500}
              className="hidden md:flex w-[20%] object-contain object-top rounded-[10%] mx-auto"
            />

            <div className="w-full">
              <div className="md:hidden flex flex-col gap-3">
                {FDNYColorCodes.table.rows.map((row, rowIndex) => {
                  const values = Object.values(row);
                  return (
                    <div key={rowIndex} className="glass-morphism-glow rounded-xl px-4 py-3">
                      {FDNYColorCodes.table.headers.map((header, cellIndex) => (
                        <div
                          key={`${rowIndex}-${cellIndex}`}
                          className={`py-2 ${cellIndex !== FDNYColorCodes.table.headers.length - 1 ? "border-b border-[#8AD5B7]/30" : ""}`}
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
                      {FDNYColorCodes.table.headers.map((header, index) => (
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
                    {FDNYColorCodes.table.rows.map((row, index) => (
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
                  {Array.from({ length: FDNYColorCodes.table.headers.length - 1 }).map((_, idx) => (
                    <div
                      key={`v-${idx}`}
                      className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#8AD5B7]/60 to-transparent"
                      style={{ left: `${((idx + 1) / FDNYColorCodes.table.headers.length) * 100}%` }}
                    />
                  ))}
                  {Array.from({ length: FDNYColorCodes.table.rows.length }).map((_, idx) => (
                    <div
                      key={`h-${idx}`}
                      className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8AD5B7]/60 to-transparent"
                      style={{ top: `${((idx + 1) / (FDNYColorCodes.table.rows.length + 1)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Why PBS highlight section */}
        

        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch mb-8 lg:mb-20 lg:mt-20 2xl:justify-center gap-4 sm:gap-8 rounded-[16px] px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-8 lg:pb-0 lg:gap-12 xl:gap-0 glass-morphism-glow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pics/local-law-152-wcu.png')" }}
        >
          {/* Why PBS image block */}
          <div className="w-full lg:w-[45%] 2xl:w-[40%] 3xl:w-[30%] flex items-end justify-center relative mt-0 sm:-mt-10 lg:-mt-32 z-10">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="w-[88%] sm:w-[80%] lg:w-[130%] mx-auto h-auto lg:h-full object-cover object-top grayscale mix-blend-luminosity"
            />
          </div>

          {/* Why PBS content block */}
          <div className="w-full lg:w-[55%] 2xl:w-[60%] 3xl:w-[50%] flex flex-col justify-end lg:pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
              {whyPBS.title}
            </h1>

            <div className="text-sm lg:text-base text-left lg:text-left text-[#DFDFDF] font-normal space-y-1 mt-2 xl:mt-3 2xl:mt-6">

              <p className="text-[#DFDFDF] text-sm lg:text-base leading-relaxed text-center lg:text-left max-w-[95%] sm:max-w-[90%] mx-auto lg:mx-0">
                {whyPBS.text1}
              </p>
              {whyPBS.list1.map((item, index) => (
                <span key={index} className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
                  <DotIcon className="text-[#DFDFDF] w-4 h-4 mt-1 flex-shrink-0" />
                  {index === 0 ? (
                    <span>
                      <span className="text-[#DFDFDF]">{item.split(",")[0]}</span>
                      {item.trim().split(",")[1]}
                    </span>
                  ) : (
                    item
                  )}
                </span>
              ))}
            </div>

            <div className="w-[30%] h-2 bg-[#8AD5B7] hidden lg:block my-3"></div>

            <div className="flex items-stretch gap-3">
              {/* <div className="w-2 bg-[#8AD5B7] hidden lg:block"></div> */}
              <p className="text-sm sm:text-base leading-relaxed text-center lg:text-left text-[#DFDFDF] max-w-xl mx-auto lg:mx-0">
                {whyPBS.text2}
              </p>
            </div>
            <div className="w-full flex flex-col sm:flex-row xl:flex-row gap-3 sm:gap-4 my-6 items-stretch sm:items-center lg:items-start justify-center lg:justify-start">
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
