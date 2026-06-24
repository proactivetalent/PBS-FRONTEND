"use client";

import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import { localLaw } from "../data"; // Assuming data.js is in the same directory
import Image from "next/image";
import CTA2 from "../../../components/CTA2";
import ImageCarousel from "../../../components/ImageCarousel"; // Assuming ImageCarousel is in the same directory
import { DotIcon } from "lucide-react";
import { section01, stakes, services, whyPBS } from "./data";

const Page = () => {

  return (
    <div
      className="bg-[#2B3331]"
      style={{
        backgroundImage: ``,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero: Local Law 11 intro banner */}
      {/* <HeroSection
        heading="Avoid Fines, Prevent Disasters, Protect your Legacy"
        text="Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS Handle the complexities while you focus on what matters"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/local-law-hero.png"
      /> */}

      <div className="mb-8 md:mb-16 text-center relative flex items-center justify-center rounded-xl overflow-hidden py-10 sm:py-12 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/PBS Assets/homepage/herosection/hero-bg.png')`
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
          <div className="w-fit mx-auto">
            <p className="text-sm sm:text-base md:text-lg font-poppins font-semibold text-[#8AD5B7] rounded-full px-6 sm:px-10 md:px-16 py-2 border border-[#8AD5B7]">
              Local Law 11
            </p>
          </div>
          <div className="my-3 sm:my-4">
            <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax w-full leading-tight">
              Avoid Fines, Prevent Disasters, Protect your Legacy
            </h1>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-semibold items-center justify-center text-[#89A096] font-poppins">
            Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS Handle the complexities while you focus on what matters
          </div>
        </div>
      </div>


      {/* Custom 'About Us' Label Divider
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div
          className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[50%] lg:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
        >
          Local Law 11
        </div>
      </div> */}
      {/* Section 01: Law overview, stakes, and historical context */}
      <section className="flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 md:gap-10 2xl:gap-16 w-full">

          <Image
            src="/pics/local-law-11-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none lg:w-[40%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] bg-[#1E2322] flex flex-col gap-3 sm:gap-4 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-[16px]">
          <span className="bg-[#8AD5B7] uppercase font-poppins w-fit max-w-full rounded-full py-1.5 px-4 sm:px-5 mx-auto -mt-7 sm:-mt-10 relative text-[11px] sm:text-sm md:text-base text-center font-semibold text-[#1E2322]">
              {section01.title}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl uppercase font-semibold text-[#E4E4E4] font-conthrax text-center lg:text-left">
              {section01.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#DFDFDF] text-center lg:text-left">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-3 sm:gap-6 w-full">
              <div className="space-y-2 w-full">
                {section01.items.map((item, index) => {
                  // Count the number of colons in the item to identify multi-colon item
                  const colonCount = (item.match(/:/g) || []).length;
                  const isMultiColon = colonCount > 1;

                  const heading = item.substring(0, item.indexOf(":"));
                  const description = item.substring(item.indexOf(":") + 1);

                  return (
                    <div key={index} className="space-y-1">
                      {/* Heading: Always the part before the first colon */}
                      <h4 className="text-sm sm:text-base font-semibold text-[#DCE2E2]">
                        {heading}
                      </h4>

                      {isMultiColon ? (
                        <ul className="space-y-2">
                          {description.split(".").map((pair, idx) => {
                            return (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm font-semibold text-[#89A096]"
                              >
                                <span className="font-semibold">
                                  {pair.substring(0, pair.indexOf(":")).trim() +
                                    ":"}
                                </span>{" "}
                                {pair.substring(pair.indexOf(":") + 1).trim()}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        // Single-colon item: Render description as a paragraph
                        <p className="text-xs sm:text-sm font-normal text-[#DFDFDF]">
                          {description.trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[#DFDFDF] text-sm sm:text-base text-center lg:text-left w-full lg:w-2/3">
              {section01.additionalText}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-10">
          <h1 className="section-heading-pill">Why Local Law 11 Matters</h1>
          <p className="text-base lg:text-xl font-semibold text-[#DCE2E2] max-w-md mx-auto text-center">Born from Tragedy, built for safety</p>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full glass-morphism-glow py-3 px-6 lg:py-10 lg:px-20 gap-6 lg:gap-12 rounded-[20px]">
          <div className="flex-1 w-full lg:w-[50%] flex flex-col justify-between items-center lg:items-start gap-3 rounded-2xl">
            <Image
              src="/pics/local-law-11-pic2.png"
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-full sm:max-h-[250px] lg:max-h-[200px] object-contain mx-auto lg:mx-0 mix-blend-luminosity relative left-[10%] md:left-0 rotate-[-5deg]"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-center md:text-left font-semibold text-[#DCE2E2] font-conthrax uppercase">
              The Backstory
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-center lg:text-left font-semibold text-[#89A096] flex-1 max-w-[90%]">
              Enacted in 1980 after a fatal masonry collapse, LL11 (FISP)
              ensures NYC’s facades never become headlines again
            </p>
          </div>

          <div className="flex-1 w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start gap-4 p-4 sm:p-6 lg:p-6 bg-[#1E2322] rounded-[20px]">
            <div className="w-full flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#8AD5B7] font-conthrax uppercase">
                {stakes.title}
              </h2>
              <div className="flex-1 flex flex-col gap-3">
                {stakes.items.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#DCE2E2] font-poppins">
                      {item.split(":")[0] + ":"}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-base font-normal text-[#89A096]">
                      {item.split(":")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Flexible service options and SWARMP context */}
      <section className="flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <div className="w-full overflow-hidden relative">
          {/* Services section heading and intro copy */}
          <div className="text-center mb-8 sm:mb-10 py-2">
            <h1 className="section-heading-pill">
            Flexible Services For Every Need
            </h1>
            <p className="text-sm sm:text-base font-normal text-[#89A096] max-w-5xl mx-auto py-4">
            No matter the size, scope, or complexity of your NYC project, PBS provides tailored solutions to keep you compliant and on schedule, here's how we simplify permits and approvals for every situation.
            </p>
          </div>

          <div className="w-full xl:w-[90%] mx-auto px-1 sm:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start gap-4 sm:gap-5 p-4 sm:p-8 mx-1 sm:mx-0 rounded-2xl glass-morphism-glow"
              >
                {service?.img && (
                  <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.heading}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover mix-blend-luminosity"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-[#8AD5B7] text-center md:text-left font-poppins">
                    {service.heading}
                  </h2>
                  <p className="text-[#DCE2E2] text-sm sm:text-base font-semibold leading-relaxed text-center md:text-left">
                    {service.text}
                  </p>
                  <ul className="mt-2 w-full pl-5 list-disc list-outside space-y-2">
                    {service?.items?.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-left"
                      >
                        <span className="font-semibold">
                          {service.id !== 2 ? item?.split(":")[0] : ""}
                          <span className="text-sm sm:text-base font-normal text-[#DFDFDF]">
                            {service.id !== 2
                              ? item?.split(":")[1]
                              : item}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              className="flex items-center p-4 sm:p-6 bg-[#1E2322] rounded-[26px] w-full lg:max-w-[300px] lg:max-h-[150px] mx-auto"
            >
              <p className="text-[#DCE2E2] text-sm sm:text-base font-medium text-center lg:text-left">
                <span className="font-semibold">
                  SWARMP ANALYSIS {" "}
                  <span className="text-xs font-normal text-[#89A096]">
                  According to NYC LL11 Code, Facades are classified into 3 categories (SAFE, SWARMP, UNSAFE). 
                  </span>
                </span>
              </p>
              
            </motion.div> */}
          </div>
            <p className="text-[#DCE2E2] text-sm sm:text-base font-medium text-center mt-8 max-w-5xl mx-auto px-2 sm:px-0">
                <span className="font-semibold">
                  SWARMP Analysis: {" "}
                  <span className="text-base font-normal text-[#DFDFDF]">
                  According to NYC LL11 Code, Facades are classified into 3 categories (SAFE, SWARMP, UNSAFE). 
                  </span>
                </span>
              </p>
        </div>
      </section>

      {/* Section 03: Visual highlight and Why PBS CTA block */}
      <section className="flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-8 sm:py-10">
        <motion.div className="w-full mt-4 sm:mt-8 mb-10 sm:mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
        >
          <img
            src="/pics/local-law-11-pic61.png"
            alt="Inspection Services"

            className="w-full sm:w-[90%] 3xl:w-[75%] object-contain mx-auto"
          />
        </motion.div>

        {/* Why PBS highlight panel */}
        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch mb-8 lg:mb-20 lg:mt-20 2xl:justify-center gap-6 sm:gap-10 rounded-[16px] px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-10 pb-8 sm:pb-0 lg:gap-12 glass-morphism-glow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pics/local-law-152-wcu.png')" }}
        >
          {/* Why PBS image block */}
          <div className="w-full lg:w-[45%] 2xl:w-[40%] 3xl:w-[30%] flex items-end justify-center relative -mt-4 sm:-mt-10 lg:-mt-32 z-10">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="w-[95%] sm:w-[88%] mx-auto lg:w-[130%] h-full object-cover object-top grayscale mix-blend-luminosity"
            />
          </div>

          {/* Why PBS content block */}
          <div className="w-full lg:w-[55%] 2xl:w-[60%] 3xl:w-[50%] flex flex-col justify-end lg:pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
              {whyPBS.title}
            </h1>

            <div className="text-sm lg:text-base text-left lg:text-left text-[#DFDFDF] font-normal space-y-1 mt-2 xl:mt-3 2xl:mt-6">
              {whyPBS.list1.map((item, index) => (
                <span key={index} className="flex items-start gap-2">
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

            <div className="flex items-stretch gap-3 xl:mt-6">
              {/* <div className="w-2 bg-[#8AD5B7] hidden lg:block"></div> */}
              <p className="text-lg sm:text-xl xl:text-2xl text-center lg:text-left font-semibold text-[#DCE2E2] max-w-xl mx-auto lg:mx-0">
                {whyPBS.text}
              </p>
            </div>

            <div className="text-sm lg:text-base text-left lg:text-left text-[#DFDFDF] font-normal mb-3 xl:mt-6 space-y-1">
              {whyPBS.list2.map((item, index) => (
                <p key={index} className="flex items-start gap-2">
                  <DotIcon className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </p>
              ))}
            </div>

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

      {/* Bottom image carousel */}
      <ImageCarousel />
    </div>
  );
};

export default Page;
