'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import { section01, section2, section3, section4 } from "./data";

const Page = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = section3[activeServiceIndex] || section3[0];

  return (
    <div
      className="bg-[#2B3331]"
      style={{
        backgroundImage: `url('')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero: Expediting services overview */}
      <HeroSection
        heading="NYC Permitting made simple. Pick your services, we’ll handle the rest"
        text="From Single Permits to Full-Suite Approvals: Fast, Flexible, and Transparent Expediting for Every Project Size."
        className="font-conthrax max-w-[95%] sm:max-w-3xl"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#DFDFDF] max-w-[95%] sm:max-w-3xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Expediting Services"
      />

      {/* Custom 'About Us' Label Divider */}
      {/* <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] lg:w-[50%] 2xl:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          Expediting Services
        </div>
      </div> */}

      {/* Section 01: Intro split layout (image + core value proposition) */}
      <section className="px-4 sm:px-0 pt-8 sm:pt-10 md:pt-16 lg:pt-20 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full gap-4 sm:gap-6">
          <Image
            src="/pics/e-services-pic1.avif"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-[80%] lg:w-[45%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start justify-start gap-3 sm:gap-4 xl:gap-6 p-4 sm:p-6 lg:p-10 rounded-2xl bg-[#1E2322]">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-center lg:text-left font-semibold text-[#E4E4E4] font-conthrax uppercase leading-tight">
              {section01.heading}
            </h2>
            <p className="text-sm sm:text-base font-normal text-[#DFDFDF] text-center lg:text-left leading-relaxed">
              {section01.text}
            </p>
          </div>
        </div>

        {/* <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-semibold text-center w-full lg:w-[70%] mx-auto">
          {section01.additionalText}
        </p> */}
      </section>


      {/* Section 02: Key service categories grid */}
      <section className="px-4 sm:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <h3 className="text-xl sm:text-2xl lg:text-4xl text-center font-semibold bg-[#1E2322] p-4 sm:p-6 rounded-[16px] text-[#E4E4E4] font-conthrax uppercase">
          {section2.heading}
        </h3>
        <p className="text-base sm:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4">
          {section2.text}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {section2.items.map((item, index) => {
            return (
              <div
                key={index}
                className="glass-morphism-glow p-4 sm:p-6 rounded-2xl flex flex-col justify-center gap-3 sm:gap-4"
              >
                <h4 className="text-lg sm:text-xl xl:text-2xl text-center font-semibold">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-center font-semibold leading-relaxed text-[#89A096]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* Section 03: Flexible service models (step cards) */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          {"Flexible Services For Every Need"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] gap-4 sm:gap-5 lg:gap-6 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col gap-3">
            {section3.map((item, index) => {
              const isActive = index === activeServiceIndex;
              const label = item.title.replace(/^\d+\s*-\s*/, "");
              return (
                <button
                  key={item.step ?? index}
                  type="button"
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onFocus={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`w-full rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-left text-sm sm:text-base font-poppins font-medium uppercase tracking-[0.01em] transition-[color,letter-spacing,font-weight] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                    ? "bg-[#8AD5B7] text-[#1E2322] font-semibold tracking-[0.05em]"
                    : "bg-[#1E2322] text-[#B9C3BF] hover:text-[#8AD5B7] hover:font-semibold hover:tracking-[0.05em] focus-visible:text-[#8AD5B7] focus-visible:font-semibold focus-visible:tracking-[0.05em]"
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="relative flex flex-col gap-3 sm:gap-4 justify-start rounded-2xl glass-morphism-glow px-4 sm:px-5 lg:px-6 pt-9 sm:pt-10 lg:pt-12 pb-4 sm:pb-5 lg:pb-6 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService?.step || activeServiceIndex}
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col h-full"
              >
                <span className="absolute right-3 sm:right-4 lg:right-5 top-7 sm:top-8 text-[72px] sm:text-[100px] lg:text-[500px] leading-none font-poppins font-semibold text-[#252A2C]/35 select-none pointer-events-none">
                  {activeService?.step || activeServiceIndex + 1}
                </span>

                <h2 className="relative z-10 text-2xl sm:text-3xl font-semibold text-[#8AD5B7] font-poppins uppercase leading-tight">
                  {activeService?.title}
                </h2>
                <p className="relative z-10 text-sm sm:text-base text-[#DFDFDF] leading-relaxed my-8">
                  {activeService?.description}
                </p>

                <div className="relative z-10 flex items-stretch justify-start gap-6">
                  <div className="space-y-1 w-full">
                    {activeService?.bullets?.map((item, index) => (
                      <p
                        key={index}
                        className="text-sm sm:text-base font-normal text-[#DFDFDF] leading-relaxed flex items-start"
                      >
                        <span className="mr-2 text-[#DCE2E2]">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 04: Why choose PBS + conversion CTAs */}
      <section className="px-4 sm:px-0 pb-6 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:gap-6 my-6 sm:my-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-center font-semibold bg-[#1E2322] p-4 sm:p-6 rounded-[16px] text-[#E4E4E4] font-conthrax uppercase">
            {section4.heading1}
          </h2>
          <p className="text-sm sm:text-base text-center font-normal text-[#DFDFDF] leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
            {section4.text1}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-center font-semibold bg-[#1E2322] p-4 sm:p-6 rounded-[16px] text-[#E4E4E4] font-conthrax uppercase">
            {section4.heading2}
          </h2>
          <p className="text-sm sm:text-base text-left font-normal text-[#DFDFDF] leading-relaxed max-w-5xl mx-auto">
            {section4.text2}
          </p>
        </div>

        <div className="flex flex-col w-full max-w-5xl mx-auto items-start gap-1 sm:gap-2">
          {section4.bullets.map((bullet, index) => {
            return (
              <div
                key={index}
                className="w-full text-sm sm:text-base text-[#DFDFDF] font-normal leading-relaxed flex items-start gap-2 text-left"
              >
                <DotIcon className="inline-block flex-shrink-0 mt-1" size={18} />
                <span>{bullet}</span>
              </div>
            );
          })}
        </div>

        {/* Primary action buttons */}
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
      </section>
    </div>
  );
};

export default Page;
