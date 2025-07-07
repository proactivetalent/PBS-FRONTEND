'use client'
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PhaseItem from "@/components/PhaseItem";
import CTA2 from "@/components/CTA2";
import { DotIcon } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import {section01, WhyitMatters, WhyNeedThisTest, HydrostaticTesting, SprinklerInspection, FDNYColorCodes, whyPBS} from "./data";

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
        heading="Fire Sprinkler Inspection (Hydrostatic Test)"
        text="Ensuring that your property’s fire sprinkler systems are compliant with New York City’s regulations is crucial for safety and legal adherence."
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/sh-inspection-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[70%] lg:w-[60%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-3xl z-20">
          Sprinkler Hydrostatic Inspection
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 lg:pt-24 text-[#DCE2E2] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full pb-6 lg:pb-10">
          <Image
            src="/pics/sh-inspection-pic1.png"
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
              <div className="space-y-2 w-[90%] lg:w-[70%] 2xl:w-[60%]">
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

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-10 w-[90%] mx-auto pb-6 lg:pb-10">
          <h2 className="text-2xl lg:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax mb-3 lg:mb-6">
            {WhyitMatters.title}
          </h2>
          <p className="text-base lg:text-xl text-center font-semibold text-[#89A096] lg:mb-6 max-w-[95%] 2xl:max-w-[90%] mx-auto">
            {WhyitMatters.description}
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-center gap-5 2xl:gap-16 w-full h-full pb-6 lg:pb-10">
            <div className="flex flex-col items-center justify-center p-3 lg:p-6 w-[80%] lg:w-[40%] xl:w-[45%]">
              <span className="text-[#8AD5B7] text-xl lg:text-[40px] leading-tight font-semibold text-center">
                {WhyitMatters.text1.split("|")[0]}
              </span>
              <span className="text-[#89A096] text-lg lg:text-xl italic font-semibold text-center">
                {WhyitMatters.text1.split("|")[1]}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-[60%] xl:w-[55%] lg:p-6 xl:py-0">
              {WhyitMatters.items.map((item, index) => (
                <p
                  key={index}
                  className="text-[#89A096] rounded-2xl bg-[#2E3734] text-base lg:text-xl font-semibold w-full py-2 px-4 min-h-16 flex items-center"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center w-[90%] gap-6 xl:gap-0 mx-auto">
          <Image
            src={WhyNeedThisTest.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[40%] 2xl:w-[30%] h-auto object-cover object-top rounded-[10%] xl:object-contain mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[60%] xl:w-[50%] flex flex-col gap-3 justify-start items-center lg:items-start 2xl:justify-center 2xl:gap-6">
            <h2 className="text-2xl lg:text-[40px] 2xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax leading-tight 2xl:max-w-[90%]">
              {WhyNeedThisTest.title}
            </h2>
            <p className="text-base font-semibold text-center lg:text-left text-[#89A096] max-w-[90%] xl:max-w-[80%] 2xl:max-w-[85%]">
              {WhyNeedThisTest.description}
            </p>
          </div>
        </div>
      </section>

      {/*Section 02  */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 lg:pt-16 text-[#DCE2E2] w-full">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-8 md:gap-0 pb-6 lg:pb-10 2xl:pb-16">
          <div className="flex items-stretch w-full md:w-[50%] 2xl:w-[40%]">
            <div className="w-full flex flex-col md:justify-center gap-3 md:gap-6">
              <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-tight font-conthrax text-center font-semibold text-[#8AD5B7]">
                {HydrostaticTesting.heading}
              </h2>

              <p className="text-lg lg:text-xl text-[#89A096] text-center font-semibold">
                {HydrostaticTesting.text1}
              </p>
            </div>
          </div>
          <div className="hidden md:block w-2 bg-[#8AD5B7] mx-8"></div>

          <p className="w-full md:w-[40%] 2xl:w-[35%] text-lg lg:text-xl text-[#89A096] font-semibold flex items-center text-center md:text-left">
            {HydrostaticTesting.text2}
          </p>
        </div>

        <img
          src="/pics/sh-inspection-pic4.png"
          alt="Inspection Services"
          width={500}
          height={500}
          className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto object-cover object-top lg:object-contain mx-auto mb-6 lg:mb-0"
        />
      </section>

      {/*Section 03 */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 lg:pt-20 text-[#DCE2E2] w-full">
        <div className="w-full flex flex-col items-center justify-center gap-3 2xl:gap-6">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax">
            {SprinklerInspection.title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-xl font-semibold text-[#89A096] max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] text-center">
            {SprinklerInspection.description}
          </p>

          {/* Subheading */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl max-w-lg text-center font-semibold text-[#DCE2E2] font-conthrax">
            {SprinklerInspection.subHeading}
          </h3>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between 2xl:justify-center gap-6 sm:gap-8 lg:gap-10 2xl:gap-12 w-full pt-4 sm:pt-6 lg:pt-8 2xl:pt-10">
      {/* First Column */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[60%] 2xl:w-[50%]">
        <PhaseItem
          title={SprinklerInspection.inspectionPhases.firstRow[0].title}
          description={SprinklerInspection.inspectionPhases.firstRow[0].description}
          titleWidth="w-[80%] md:w-[75%] lg:w-[90%] xl:w-[75%] 2xl:w-[70%]"
          isFormatted={true}
        />
        <PhaseItem
          title={SprinklerInspection.inspectionPhases.firstRow[1].title}
          description={SprinklerInspection.inspectionPhases.firstRow[1].description}
          titleWidth="w-[80%] md:w-[75%] lg:w-full xl:w-[80%] 2xl:w-[75%]"
        />
      </div>

      {/* Second Column */}
      <div className="flex flex-col justify-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[40%] 2xl:w-[30%]">
        <PhaseItem
          title={SprinklerInspection.inspectionPhases.secondRow.title}
          description={SprinklerInspection.inspectionPhases.secondRow.description}
          titleWidth="w-[80%] md:w-[75%] lg:w-[55%] 2xl:w-[50%]"
        />
      </div>
    </div>
          </div>
      </section>

      {/*Section 04 */}
      <section className="px-6 md:px-10 xl:px-16 pt-6 lg:pt-10 xl:pt-16 text-[#DCE2E2] w-full">
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-3 2xl:gap-6 pb-6 lg:pb-10 ">

          <div className="w-full h-full lg:w-[75%] xl:w-[80%] flex flex-col gap-3 justify-center items-end lg:items-end 2xl:justify-end 2xl:gap-6 lg:ml-[20%] xl:ml-[15%]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax w-full">
            {FDNYColorCodes.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-xl font-semibold text-[#89A096] max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto text-center">
            {FDNYColorCodes.test}
          </p>
          </div>
          
          <div className="flex flex-row items-center xl:items-stretch justify-center lg:justify-between 2xl:justify-center gap-6 sm:gap-8 lg:gap-10 2xl:gap-12 w-full lg:w-[90%]">
          <Image
            src={FDNYColorCodes.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="hidden md:flex w-[20%] object-contain object-top rounded-[10%] mx-auto"
          />

<table className="border-collapse border border-[#8AD5B7] w-full lg:w-[80%] mx-auto">
            <thead className="text-[#DCE2E2]">
              <tr>
                {FDNYColorCodes.table.headers.map((header, index) => (
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
              {FDNYColorCodes.table.rows.map((row, index) => (
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
          </div>
        </div>

        {/* why PBS */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch 2xl:justify-center lg:pt-10 pb-10 lg:pb-0 gap-10 lg:gap-0">
          <div className="w-full lg:w-[40%] 2xl:w-[30%] flex items-end overflow-hidden">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="w-full md:w-1/3 lg:w-full mx-auto h-auto lg:h-full object-contain lg:object-cover object-top mix-blend-luminosity relative -left-5 mdLleft-0"
            />
          </div>

          <div className="w-full lg:w-[65%] flex flex-col md:justify-center lg:pb-6 h-auto">
            <div className="w-full h-auto flex flex-col gap-3 2xl:gap-6">
              <h1 className="text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
                {whyPBS.title}
              </h1>
              <div className="text-sm lg:text-base 2xl:text-xl text-center md:text-left text-[#89A096] font-semibold space-y-1">
                <div className="flex flex-col gap-2">
                <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl text-center lg:text-left font-semibold max-w-[90%] xl:max-w-[75%] mx-auto lg:mx-0">
                  {whyPBS.text1}
                </p>
                  {whyPBS.list1.map((item, index) => {
                    return (
                      <span key={index} className="flex gap-2 text-left">
                        <DotIcon className="w-[5%]" />
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="w-[30%] h-2 bg-[#8AD5B7] hidden lg:block my-3"></div>

                <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl text-center lg:text-left font-semibold">
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

      <ImageCarousel/>
    </div>
  );
};

export default Page;
