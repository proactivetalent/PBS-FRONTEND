"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import { inspectionServices } from "./data";
import CTA2 from "@/components/CTA2";

const InspectionServices = () => {
  return (
    <div
      className="bg-[#37403D] overflow-hidden"
      style={{
        backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <HeroSection
        heading="Turn Building Codes from Foe to Friend"
        text="We Decode NYC’s Labyrinth of Laws into actionable solutions, so your Property stays safe,compliant, and penalty-free"
        className="font-conthrax max-w-4xl 2xl:max-w-5xl text-3xl lg:text-5xl text-[#DCE2E2] mix-blend-luminosity"
        bgStyle="bg-top md:bg-top bg-cover"
        img="/pics/Inspection-services-hero.png"
        isLine={true}
        textStyle="text-xl font-semibold text-[#DCE2E2]"
      />

        {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
    <div className="bg-[#8AD5B7] w-full h-2 sm:h-3 lg:h-4"></div>
    <div
      className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[60%] lg:w-[50%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
    >
      Inspection Services
    </div>
  </div>

      {/* Section 01 */}
      <section className="px-6 md:px-10 lg:px-16 pb-10 pt-16 text-[#DCE2E2]">
        <h2 className="text-4xl font-semibold font-conthrax w-full md:w-2/3 mx-auto text-center mb-3 lg:mb-6">
          Ensuring safety, Compliance & Peace of Mind
        </h2>
        <p className="text-xl font-semibold text-[#89A096] w-full mx-auto text-center mb-6 lg:mb-10">
           Maintaining your property isn’t just an obligation, it’s a necessity
          to protect lives, uphold legal standards, and preserve long-term
          value. At PBS we turn complexity into clarity with inspections
          designed to safeguard what matters most.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/inspection-services-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] relative -left-4 lg:left-0 lg:w-[40%] 2xl:w-[20%] h-auto object-contain rounded-lg mb-6 md:mb-10 lg:mb-0 lg:mx-0 mx-auto"
          />
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start justify-end text-center lg:text-left px-4 lg:px-0">
            <h1 className="text-[#8AD5B7] text-4xl xl:text-[55px] font-semibold font-conthrax mb-2 leading-tight">
              Why Compliance Matter
            </h1>
            <div className="bg-[#8AD5B7] w-full lg:w-[40%] text-[#DCE2E2] h-2 mb-6"></div>
            <p className="text-base lg:text-lg font-semibold 2xl xl:w-[85%] 2xl:w-[75%]">
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

        <div className="bg-[#1E2322] w-[95%] mt-10 mx-auto py-6 px-6 rounded-2xl flex flex-col gap-4">
          <h2 className="text-[#8AD5B7] font-semibold font-conthrax text-2xl lg:text-4xl text-center">
            What keeps you up at night?{" "}
          </h2>
          <p className="text-lg text-[#89A096] font-semibold text-center">
            The nagging fear of hidden risks lurking in your building’s walls,
            systems, or structures. The Dread of a surprise violation that
            spirals into fines, shutdowns, or worse–a preventable disaster.
          </p>
          <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 mb-6"></div>
          <p className="text-lg text-[#89A096] font-semibold text-center w-[85%] lg:w-[75%] mx-auto">
            Explore how PBS tackles your worst-case scenarios–Check our services
            below to see how we turn invisible risks into actionable solutions
          </p>
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 mb-10"></div>

      {/* Section 2 */}
      <section className="px-8 xl:px-16 pb-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-[#DCE2E2] text-center font-conthrax mb-10">
          {inspectionServices[1].headline}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {inspectionServices[1].services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 justify-between p-6 shadow-lg rounded-2xl bg-[#2d3432]"
                style={{
                  backgroundImage: `url(${service.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  scale: "crop",
                  backgroundBlendMode: "luminosity",
                }}
              >
                <p className="bg-[#1E2322] w-auto mr-auto rounded-full py-2 px-3 text-lg xl:text-xl font-semibold text-[#89A096] text-center md:text-left">
                  {service.heading}
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold text-[#8AD5B7] font-conthrax">
                  {service.subheading}
                </h2>
                <p className="text-base font-semibold text-[#89A096]">
                  {service.text}
                </p>

                <div className="flex items-stretch justify-start gap-6">
                  <div className="bg-[#8AD5B7] w-2 h-auto"></div>
                  <div className="space-y-2 w-[98%]">
                    {service.items.map((item, index) => {
                      // Count the number of colons in the item to identify multi-colon item
                      const colonCount = (item.match(/:/g) || []).length;
                      const isMultiColon = colonCount > 1;

                      const heading = item.substring(0, item.indexOf(":"));
                      const description = item.substring(item.indexOf(":") + 1);

                      return (
                        <div key={index} className="space-y-1">
                          {/* Heading: Always the part before the first colon */}
                          <h4 className="text-sm font-semibold text-[#DCE2E2]">
                            {heading + ":"}
                          </h4>

                          {isMultiColon ? (
                            <ul className="space-y-2">
                              {description
                                .split(".")
                                .map((pair, idx) => {
                                  return (
                                    <li
                                      key={idx}
                                      className="text-xs font-semibold text-[#89A096]"
                                    >
                                      <span className="font-semibold">
                                        {pair
                                          .substring(0, pair.indexOf(":"))
                                          .trim() + ":"}
                                      </span>{" "}
                                      {pair
                                        .substring(pair.indexOf(":") + 1)
                                        .trim()}
                                    </li>
                                  );
                                })}
                            </ul>
                          ) : (
                            // Single-colon item: Render description as a paragraph
                            <p className="text-xs font-semibold text-[#89A096]">
                              {description.trim()}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
                  <p className="text-[#89A096] text-base font-semibold md:w-1/2 lg:w-2/3">
                    {service.cta.text}
                  </p>
                  <CTA2
                    text="Learn More"
                    isArrow={false}
                    href={service.cta.href}
                    styling={`md:w-1/2 lg:w-1/3 mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#37403D] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3 */}
      <section className=" py-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-[#DCE2E2] text-center font-conthrax mb-6 max-w-3xl mx-auto">
          {inspectionServices[0].headline}
        </h2>

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 mb-10"></div>

        <div className="flex flex-col gap-6 items-start justify-evenly">
  {inspectionServices[0].subSections.map((section, index, sections) => {
    // Calculate the total number of subsections for uniform image placement
    const totalSections = sections.length;
    // Calculate the horizontal position for each image (e.g., 25%, 50%, 75% for 3 sections)
    const positionPercentage = (index + 0.5) * (100 / totalSections);

    return (
      <div key={index} className="w-full flex flex-col gap-6">
        <div className="bg-[#2E3734] w-full lg:w-[90%] 2xl:w-[75%] lg:rounded-r-full p-3 relative flex flex-col lg:flex-row items-center">
          {/* Absolute Image with Uniform Positioning */}
          <Image
            src={section.img}
            alt="image"
            width={200}
            height={200}
            className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] lg:absolute lg:-top-[50%] 2xl:-top-[50%] object-contain"
           
          />
          {/* Headline: Force 2 lines at lg */}
          <h2 className="font-conthrax text-[#8AD5B7] text-2xl md:text-3xl xl:text-4xl font-semibold text-center lg:text-left lg:ml-[25%] max-w-full w-full lg:max-w-[22ch] 2xl:max-w-[22ch]">
            {section.headline}
          </h2>
        </div>

        {/* Items Section */}
        <div className="px-8 lg:pr-16 lg:pl-40 flex flex-col lg:flex-row gap-8">
          <div className="w-full 2xl:w-[70%] 2xl:mx-auto flex flex-col lg:flex-row gap-8 my-10">
            {section.items.map((item, idx) => {
              // Simplify additionalText visibility logic
              const showAdditionalText =
                (index === 1 && idx === 1) || index === 2;

              return (
                <div key={idx} className="flex flex-col gap-3 w-full">
                  <h2 className="text-[#DCE2E2] text-3xl font-semibold">
                    {item.split(":")[0] + ": "}
                  </h2>
                  <p className="text-xl font-semibold text-[#89A096] lg:max-w-[70vw]">
                    {item.split(":")[1]}
                  </p>
                  {showAdditionalText && (
                    <p className="text-xl font-semibold text-[#89A096] max-w-[70vw]">
                      {section.additionalText}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    );
  })}
</div>

        <div className="w-full bg-[#2E3734] py-6 px-6 md:px-10 lg:px-16">
          <p className="text-[#DCE2E2] text-xl font-semibold text-center">
            {inspectionServices[1].additionalText}
          </p>
          <div className="max-w-full lg:max-w-4xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 items-center justify-center">
            <CTA2
              text="Schedule a Compliance Audit
"
              isArrow={false}
              href="/contacts"
              styling={`w-full md:w-2/3 lg:w-1/2 mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
            />
            {/* <CTA2
              text="Call Our Inspectors (914-316-6956)
 "
              isArrow={false}
              href="/contacts"
              styling={`w-[90%] md:w-2/3 lg:w-1/2 mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
            /> */}
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
