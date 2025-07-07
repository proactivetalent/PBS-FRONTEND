'use client'
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import { section01, section2, section3, section4 } from "./data";

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
        heading="NYC Permitting Made Simple. Pick Your Services, we’ll handle the rest"
        text="From Single Permits to Full-Suite Approvals: Fast, Flexible, and Transparent Expediting for Every Project Size."
        className="font-conthrax max-w-[90%] md:max-w-full xl:max-w-[95%] text-2xl sm:text-3xl 4xl:max-w-[70%] lg:text-4xl xl:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/e-services-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] lg:w-[50%] 2xl:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          Expediting Services
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-16 lg:pt-24 flex flex-col gap-6 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/e-services-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] 2xl:w-[35%] 3xl:w-[30%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] 2xl:max-w-[45%] flex flex-col justify-center items-center lg:items-start 2xl:justify-center gap-3 xl:gap-6 p-6 rounded-2xl">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax">
              {section01.heading}
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-[#89A096] text-center lg:text-left">
              {section01.text}
            </p> 
          </div>
        </div>

        <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-semibold text-center w-full lg:w-[70%] mx-auto">
          {section01.additionalText}
        </p>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 2 */}
      <section className="w-[90%] mx-auto px-6 md:px-10 xl:px-16 flex flex-col gap-6 text-[#DCE2E2]">
        <h3 className="text-2xl lg:text-4xl xl:text-[40px] leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax">
          {section2.heading}
        </h3>
        <p className="text-xl xl:text-2xl text-center font-semibold">
          {section2.text}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {section2.items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#2E3734] p-6 rounded-2xl flex flex-col justify-center gap-4"
              >
                <h4 className="text-xl xl:text-2xl text-center font-semibold">
                  {item.title}
                </h4>
                <p className="text-lg xl:text-xl text-center font-semibold text-[#89A096]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 3 */}
      <section className="w-full mx-auto px-6 md:px-10 xl:px-16 pb-6 flex flex-col gap-6 text-[#DCE2E2]">
        <h3 className="text-2xl lg:text-4xl xl:text-[40px] leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax">
          Flexible Services For Every Need
        </h3>
        <p className="text-xl xl:text-2xl max-w-[90%] 2xl:max-w-[65%] mx-auto text-center font-semibold text-[#89A096] mb-6 lg:mb-10">
          No matter the size, scope, or complexity of your NYC project, PBS provides tailored solutions to keep you compliant and on schedule, here's how we simplify permits and approvals for every situation.
        </p>
        <div className="flex flex-col w-full gap-10 xl:gap-16 3xl:gap-10">
          {section3.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "items-start" : "items-start lg:items-end"
                } rounded-2xl flex flex-col justify-center gap-4`}
              >
                <div className="w-full lg:w-2/3 3xl:w-1/2 flex items-stretch justify-center gap-2 md:gap-5 xl:gap-6 text-wrap">
                  <span className="w-[15%] text-center lg:w-[10%] flex items-center text-[80px] md:text-[100px] flex-shrink-0 lg:text-[128px] text-[#8AD5B7] font-semibold">
                    {item.step}
                  </span>
                  <div className="bg-[#8AD5B7] w-2 flex-shrink-0"></div>
                  <div className="flex flex-col gap-2 w-[80%] xl:w-[85%]">
                    <h4 className="text-xl lg:text-2xl xl:text-3xl text-center md:text-left font-semibold text-[#8AD5B7]">
                      {item.title}
                    </h4>
                    <p className="text-base lg:text-xl text-left font-semibold italic">
                      {item?.text}
                    </p>
                    <p className="text-base lg:text-xl text-left font-semibold text-[#89A096] 2xl:w-[90%]">
                      {item.description}
                    </p>
                    <ul className="">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-lg xl:text-xl text-[#89A096] font-semibold flex items-start gap-2"
                        >
                          <DotIcon className="inline-block flex-shrink-0" size={32} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 4 */}
      <section className="w-full mx-auto px-6 md:px-10 xl:px-16 flex flex-col gap-10 text-[#DCE2E2]">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax max-w-3xl mx-auto">
            {section4.heading1}
          </h2>
          <p className="text-lg xl:text-2xl text-center font-semibold text-[#89A096]">
            {section4.text1}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax max-w-3xl mx-auto">
            {section4.heading2}
          </h2>
          <p className="text-lg xl:text-2xl text-center font-semibold text-[#89A096]">
            {section4.text2}
          </p>
        </div>

        <div className="flex flex-col gap-6">
            {section4.bullets.map((bullet, index) => {
                return (
                    <div
                    key={index}
                    className="text-lg xl:text-2xl text-[#89A096] font-semibold flex items-start gap-2"
                    >
                    <DotIcon className="inline-block flex-shrink-0" size={32} />
                    <span>{bullet}</span>
                    </div>
                );
            })}
        </div>

        <CTA2
         isArrow={false}
         text ="Get your Permits Fast"
         href="/"
                  styling={`w-[90%] lg:w-auto mt-0 mx-auto mb-10 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 xl:px-3 2xl:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}  
        />
      </section>
    </div>
  );
};

export default Page;
