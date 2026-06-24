"use client";
import HeroSection from "../../components/HeroSection";
import { services, sections, whyPBS, imgCarousel } from "./data"; // Importing services data
import { motion } from "framer-motion";
import Image from "next/image";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";
import { useState } from "react";

/**
 * @typedef {Object} Service
 * @property {string} title - The name of the service
 * @property {JSX.Element} icon - Lucide React icon component for the service
 * @property {string} description - Brief description of the service
 * @property {string[]} sections - Array of sections with detailed information
 * @property {string} cta - Call to action text (optional)
 */

/**
 * Array of services offered by the company
 * Each service includes a title, icon, description, sections, and optional CTA
 * Icons are imported from lucide-react library
 *
 * @type {Service[]}
 */

/**
 * Services Page Component
 *
 * Displays the company's services in a visually appealing layout.
 * Features include:
 * - Hero section with page title
 * - Services grid with animated cards using Framer Motion
 * - Expandable detailed sections for each service
 * - Responsive design for various screen sizes
 *
 * The page is structured in two main sections:
 * 1. A grid of service cards showing a summary of each service
 * 2. Expandable detailed sections with comprehensive information about each service
 *
 * @returns {JSX.Element} The rendered Services page
 */
const Page = () => {
  const defaultSectionIndex = Math.max(
    0,
    sections.findIndex((section) => section.title === "DOB")
  );
  const [activeSectionIndex, setActiveSectionIndex] = useState(defaultSectionIndex);
  const activeSection = sections[activeSectionIndex] || sections[0];

  /**
   * Animation variants for service cards
   * Defines the initial hidden state and visible state for smooth animations
   *
   * @type {Object}
   */
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };



  return (
    <div className="w-screen overflow-hidden box-border  bg-[#2B3331]">
      {/* Hero: Services page overview */}
      <HeroSection
        heading="Your Trusted Partner in Property Compliance, Safety and Management"
        text="PBS delivers expert solutions to navigate NYC’s complex regulations, streamline operations, and protect your property investments"
        className="font-conthrax max-w-[92%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#DFDFDF] max-w-[92%] sm:max-w-3xl md:max-w-4xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Our Services"
      />

      {/* Section 01: Core services grid */}
      <section
        className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10"
      >
        <div className="w-full overflow-hidden relative">
          {/* Services heading and supporting copy */}
          <div className="text-center mb-10 py-2">
            <h1 className="section-heading-pill">
              PBS Delivers Expert Solutions
            </h1>
            <p className="text-sm sm:text-base font-poppins font-semibold px-4 sm:px-10 text-[#DCE2E2] pt-4 max-w-2xl mx-auto leading-relaxed">
              To navigate NYC’s complex regulations, streamline operations, and
              protect your property investments.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 items-stretch">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full rounded-2xl overflow-hidden bg-[#2A3230] flex flex-col"
                >
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-36 md:h-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />
                    <div className="h-[210px] sm:h-[230px] md:h-[250px] lg:h-[280px] overflow-hidden">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={600}
                        height={500}
                        priority
                        quality={100}
                        className="w-full h-full object-cover mix-blend-luminosity grayscale"
                      />
                    </div>
                    <div className="absolute left-3 sm:left-4 right-3 sm:right-4 bottom-3 z-20 flex items-end justify-between gap-2 sm:gap-3">
                      <h2 className="text-[#8AD5B7] text-xl sm:text-2xl md:text-3xl uppercase font-semibold font-conthrax leading-tight max-w-[70%] sm:max-w-[75%]">
                        {service.title}
                      </h2>
                      <CTA2
                        text="Read More"
                        isArrow={false}
                        href={service.cta}
                        styling="w-auto rounded-full h-7 sm:h-8 bg-[#8AD5B7] text-[#1E2322] px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold whitespace-nowrap hover:brightness-105 transition font-poppins"
                      />
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 glass-morphism-glow flex-1">
                    <p className="text-[#DFDFDF] text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.sections.slice(0, 4).map((section, idx) => {
                        const [label, ...rest] = section.split(":");
                        const content = rest.join(":").trim();
                        const hasColon = section.includes(":");
                        return (
                          <li key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed">
                            {hasColon ? (
                              <>
                                <p className="text-[#DCE2E2] font-semibold">
                                  {label}
                                </p>
                                {content && (
                                  <p className="text-[#DFDFDF]">
                                    {content}
                                  </p>
                                )}
                              </>
                            ) : (
                              <p className="text-[#DFDFDF]">
                                {section}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="text-[#DCE2E2] text-center pt-20">
            <h4 className="section-heading-pill">
              We Serve Across NYC’s Departments
            </h4>
            <p className="text-base font-semibold max-w-3xl mx-auto pt-4">
              We don't only deal with these departments for your Alerts but we
              also deal with these departments for your permitting and
              inspection work
            </p>
          </div>
        </div>
      </section>

      {/* Section 02: Department coverage interactive panel */}
      <section
        className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10"
      >
        <div className="w-full flex flex-col items-center gap-6 sm:gap-16">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-3 sm:gap-4 lg:gap-5">
              <div className="w-full rounded-xl p-2 sm:p-3">
                <div className="flex flex-col gap-2">
                  {sections.map((section, index) => {
                    const isActive = index === activeSectionIndex;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveSectionIndex(index)}
                        onMouseEnter={() => setActiveSectionIndex(index)}
                        onFocus={() => setActiveSectionIndex(index)}
                        className={`w-full text-left rounded-xl px-3 sm:px-4 py-3 sm:py-4 lg:py-6 transition-all duration-200 ${isActive ? "bg-[#3C4B47]/80" : "bg-transparent hover:bg-[#2A3431]"
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[#8AD5B7] text-base sm:text-lg leading-none">•</span>
                          <span className={`font-conthrax text-xl sm:text-2xl ${isActive ? "text-[#DCE2E2]" : "text-[#8AD5B7]"}`}>
                            {section.title}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="w-full rounded-[16px] bg-[#1E2322]">
                <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-4 sm:gap-6 h-full">
                  <div className="w-full h-[240px] sm:h-[280px] md:h-full overflow-hidden rounded-lg">
                    <Image
                      src={activeSection.image}
                      alt={activeSection.title}
                      width={700}
                      height={900}
                      className="w-full h-full object-cover mix-blend-luminosity rounded-l-[16px]"
                    />
                  </div>

                  <div className="w-full flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-conthrax text-[#8AD5B7]">
                      {activeSection.title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#DCE2E2] leading-relaxed">
                      {activeSection.description}
                    </p>

                    {activeSection.details
                      .filter((detail) => detail?.title)
                      .map((detail, idx) => (
                        <div key={idx} className="pt-1">
                          <h3 className="text-[#8AD5B7] text-base sm:text-lg font-semibold mb-1">
                            • {detail.title}
                          </h3>
                          <div className="space-y-1">
                            {detail.description?.map((desc, dIdx) => (
                              <p
                                key={dIdx}
                                className="text-[#DCE2E2] text-xs sm:text-sm md:text-base leading-relaxed"
                              >
                                {desc}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03: Why PBS closing panel */}

        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch mb-8 lg:mb-20 lg:mt-40 2xl:justify-evenly gap-5 sm:gap-8 rounded-[48px] px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-10 pb-8 sm:pb-0 lg:gap-12 xl:gap-0 glass-morphism-glow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pics/local-law-152-wcu.png')" }}
        >
          {/* Why PBS image block */}
          <div className="w-full lg:w-[45%] 2xl:w-[40%] 3xl:w-[30%] flex items-end justify-center relative mt-1 sm:-mt-6 lg:-mt-32 z-10">
            <Image
              src="/pics/service-building.png"
              alt="building"
              width={600}
              height={800}
              priority
              className="w-[92%] sm:w-[86%] mx-auto lg:w-[130%] h-full object-cover object-top grayscale mix-blend-luminosity"
            />
          </div>

          {/* Why PBS content block */}
          <div className="w-full lg:w-[50%] xl:w-[50%] flex flex-col justify-end 2xl:justify-center lg:pb-5 xl:pb-10 h-full">
            <div className="w-full h-auto flex items-start justify-start gap-2 xl:gap-0 xl:justify-between">
              <div className="w-2 h-full bg-[#8AD5B7] mr-2 xl:mr-6 hidden lg:block"></div>
              <div className="w-full h-auto flex flex-col lg:gap-3 xl:gap-6">
                <h1 className="text-2xl sm:text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
                  WHY PBS?
                </h1>
                <div className="text-xs sm:text-sm xl:text-base text-center lg:text-left text-[#DCE2E2] space-y-2 2xl:max-w-2xl leading-relaxed">
                  <p>
                    30+ Years of Experience: Trusted by NYC property owners.
                  </p>
                  <p>100% Compliance Rate: Zero fines for clients in 2023.</p>
                  <p>
                    Dedicated Support: Single point of contact for all services.
                    Certified experts: Licensed inspectors familiar with NYC
                    DOB, FDNY and other departments code.
                  </p>
                </div>
                <div className="text-sm sm:text-base text-center lg:text-left text-[#DCE2E2] flex flex-col">
                  <span>Ready to Simplify Property Compliance?</span>
                  <span>Schedule a consultation with PBS today.</span>
                </div>
              </div>
            </div>
            <div className="w-full py-4 flex flex-col sm:flex-row xl:flex-row gap-3 sm:gap-4 items-stretch sm:items-center lg:items-start justify-center lg:justify-start">
            <CTA2
                text="GET STARTED NOW"
                isArrow={false}
                href="/alert"
                styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#FF4B4E] text-white px-6 py-2 text-sm font-semibold sm:whitespace-nowrap hover:brightness-105 hover:text-black transition lg:text-base font-conthrax `}
              />
              <CTA2
                text="CALL OUR INSPECTORS"
                isArrow={false}
                href="/contacts"
                styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#8AD5B7] text-[#1E2322] px-4 lg:px-6 py-2 text-sm font-semibold sm:whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
              />
            </div>
          </div>
        </div>

        

      </section>
        <div className="w-full -mt-80 h-[400px] bg-[#1E2322]"></div>
      {/* Bottom image carousel */}
      <ImageCarousel />
    </div>
  );
};

export default Page;