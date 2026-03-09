"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import { inspectionServices } from "./data";
import CTA2 from "@/components/CTA2";
import { AnimatePresence, motion } from "framer-motion";

const InspectionServices = () => {
  const services = inspectionServices[1].services;
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = services[activeServiceIndex] || services[0];

  return (
    <div
      className="bg-[#2B3331] overflow-hidden"
      style={{
        backgroundImage: `url('')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <HeroSection
        heading="Turn Building Codes from Foe to Friend"
        text="We Decode NYC’s Labyrinth of Laws into actionable solutions, so your Property stays safe,compliant, and penalty-free"
        className="font-conthrax max-w-[95%] sm:max-w-3xl text-[#DCE2E2] mix-blend-luminosity"
        bgStyle="bg-cover"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#DCE2E2] max-w-[95%] sm:max-w-3xl mx-auto"
        badge="Inspection Services"
      />


      {/* Section 01: Compliance value proposition and risk framing */}
      <section className="px-4 sm:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          Ensuring safety, Compliance & Peace of Mind
        </h2>
        <p className="text-sm sm:text-base font-normal leading-relaxed text-[#DFDFDF] w-full mx-auto text-center mb-4 sm:mb-6 lg:mb-10">
          Maintaining your property isn’t just an obligation, it’s a necessity
          to protect lives, uphold legal standards, and preserve long-term
          value. At PBS we turn complexity into clarity with inspections
          designed to safeguard what matters most.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/inspection-services-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[88%] sm:w-[82%] md:w-[80%] relative left-0 lg:left-0 lg:w-[40%] h-auto glass-morphism-glow rounded-[16px] object-contain mb-2 sm:mb-6 md:mb-10 lg:mb-0 lg:mx-0 mx-auto"
          />
          <div className="w-full lg:w-[55%] bg-[#1E2322] rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[#E4E4E4] text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold font-conthrax mb-2 leading-tight">
              Why Compliance Matter
            </h1>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[#DFDFDF] max-w-full sm:max-w-[90%]">
              A single oversight can risk lives, reputations, and legal
              standing. Regular inspections aren’t just about ticking boxes,
              they’re about proactive problem solving. When Safety and
              compliance are non-negotiable, you need a trusted ally. At PBS, we
              don't just perform inspections, we deliver confidence. PBS
              Inspection Services combines technology, decades of expertise, and
              a relentless commitment to detail.
            </p>
          </div>
        </div>

        <div className="glass-morphism-glow w-full sm:w-[95%] mt-6 sm:mt-10 mx-auto py-4 sm:py-6 px-4 sm:px-6 rounded-2xl flex flex-col gap-3 sm:gap-4">
          <h2 className="text-[#DFDFDF] uppercase font-semibold font-conthrax text-xl sm:text-2xl lg:text-4xl text-center">
            What keeps you up at night?{" "}
          </h2>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-[#DFDFDF] text-center">
            The nagging fear of hidden risks lurking in your building’s walls,
            systems, or structures. The Dread of a surprise violation that
            spirals into fines, shutdowns, or worse–a preventable disaster.
          </p>
          <p className="text-sm sm:text-base text-[#DFDFDF] font-normal leading-relaxed text-center w-full sm:w-[85%] lg:w-[75%] mx-auto">
            Explore how PBS tackles your worst-case scenarios–Check our services
            below to see how we turn invisible risks into actionable solutions
          </p>
        </div>
      </section>


      {/* Section 02: Interactive inspection services selector */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          {inspectionServices[1].headline}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] gap-4 sm:gap-5 lg:gap-6 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col gap-3">
            {services.map((service, index) => {
              const isActive = index === activeServiceIndex;
              const label = service.heading.replace(/^\d+\s*-\s*/, "");
              return (
                <button
                  key={service.id}
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
            <p className="absolute font-poppins -top-4 left-1/2 -translate-x-1/2 bg-[#8AD5B7] rounded-full py-1.5 px-3 sm:px-4 lg:px-5 text-[11px] sm:text-xs lg:text-base font-semibold text-[#1E2322] text-center uppercase tracking-wide whitespace-nowrap z-20 max-w-[92%] overflow-hidden text-ellipsis">
              {activeService.heading.replace(/^\d+\s*-\s*/, "")}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id || activeServiceIndex}
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col h-full"
              >
                <span className="absolute right-3 sm:right-4 lg:right-5 top-7 sm:top-8 text-[72px] sm:text-[100px] lg:text-[500px] leading-none font-poppins font-semibold text-[#252A2C]/35 select-none pointer-events-none">
                  {activeService.id || activeServiceIndex + 1}
                </span>

                <h2 className="relative z-10 text-2xl sm:text-3xl font-semibold text-[#8AD5B7] font-poppins uppercase leading-tight">
                  {activeService.subheading}
                </h2>
                <p className="relative z-10 text-sm sm:text-base font-semibold text-[#DFDFDF] leading-relaxed">
                  {activeService.text}
                </p>

                <div className="relative z-10 flex items-stretch justify-start gap-6">
                  <div className="space-y-3 w-full">
                    {activeService.items.map((item, index) => {
                      const colonCount = (item.match(/:/g) || []).length;
                      const isMultiColon = colonCount > 1;
                      const heading = item.substring(0, item.indexOf(":"));
                      const description = item.substring(item.indexOf(":") + 1);

                      return (
                        <div key={index} className="space-y-1">
                          <h4 className="text-sm sm:text-base font-normal text-[#DCE2E2] flex items-start">
                            <span className="mr-2 text-[#DCE2E2]">•</span>
                            {heading + ":"}
                          </h4>

                          {isMultiColon ? (
                            <ul className="space-y-2 pl-5">
                              {description.split(".").map((pair, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm font-normal text-[#DFDFDF] leading-relaxed"
                                >
                                  <span className="font-semibold">
                                    {pair.substring(0, pair.indexOf(":")).trim() + ":"}
                                  </span>{" "}
                                  {pair.substring(pair.indexOf(":") + 1).trim()}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm font-normal text-[#DFDFDF] leading-relaxed pl-5">
                              {description.trim()}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-3 sm:pt-4 flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
                  <p className="text-[#8AD5B7] text-sm sm:text-base font-semibold text-left md:w-1/2 lg:w-2/3">
                    {activeService.cta.text}
                  </p>
                  <CTA2
                    text="Learn More"
                    isArrow={false}
                    href={activeService.cta.href}
                    styling={`w-full md:w-1/2 lg:w-1/3 mt-0 rounded-full h-12 bg-[#8AD5B7] text-[#37403D] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 03: Service breakdown cards and final CTA */}
      <section className="px-4 sm:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          {inspectionServices[0].headline}
        </h2>


        <div className="flex flex-col gap-6 items-start justify-evenly">
          {inspectionServices[0].subSections.map((section, index, sections) => {
            // Total subsection count for potential layout alignment
            const totalSections = sections.length;
            // Reserved position value used by the current mapping logic
            const positionPercentage = (index + 0.5) * (100 / totalSections);

            return (
              <div key={index} className="w-full flex flex-col md:flex-row glass-morphism-glow rounded-[16px] my-6 mx-auto md:w-[90%] items-start md:items-center p-6">
                <div className="w-full md:w-1/3 relative flex items-center md:items-start justify-center md:justify-start">
                  {/* Left visual block */}
                  <Image
                    src={section.img}
                    alt="image"
                    width={200}
                    height={200}
                    className="w-[180px] sm:w-[220px] md:w-full max-w-[360px] object-cover"

                  />

                </div>

                {/* Right content block */}
                <div className="w-full md:w-2/3 flex flex-col">
                  <div className="w-full 2xl:mx-auto flex flex-col gap-6 my-2 md:my-4">
                    {/* Section headline */}
                    <h2 className="font-conthrax text-[#8AD5B7] text-2xl md:text-3xl font-semibold text-center uppercase lg:text-left max-w-full w-full">
                      {section.headline}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                      {section.items.map((item, idx) => {
                        // Simplify additionalText visibility logic
                        const showAdditionalText =
                          (index === 1 && idx === 1) || index === 2;

                        return (
                          <div key={idx} className="flex flex-col gap-3 w-full h-full">
                            <h2 className="text-[#DCE2E2] text-2xl font-semibold uppercase">
                              {item.split(":")[0] + ": "}
                            </h2>
                            <p className="text-base font-normal text-[#DFDFDF]">
                              {item.split(":")[1]}
                            </p>
                            {/* {showAdditionalText && (
                              <p className="text-xl font-semibold text-[#89A096] max-w-[70vw]">
                                {section.additionalText}
                              </p>
                            )} */}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full py-6 px-6 md:px-10 lg:px-16">
          <p className="text-[#DCE2E2] text-xl font-normal text-center">
            {inspectionServices[1].additionalText}
          </p>
          <div className="w-full flex flex-col sm:flex-row xl:flex-row gap-3 sm:gap-4 items-stretch sm:items-center lg:items-start justify-center my-10">
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

      <div className="w-full">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default InspectionServices;
