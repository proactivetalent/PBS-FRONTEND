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
      className="bg-[#37403D]"
      style={{
        backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <HeroSection
        heading="Avoid Fines, Prevent Disasters, Protect your Legacy"
        text="Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS Handle the complexities while you focus on what matters"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/local-law-hero.png"
      />

        {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
    <div className="bg-[#8AD5B7] w-full h-2"></div>
    <div
      className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[50%] lg:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
    >
      Local Law 11
    </div>
  </div>
      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 pb-8 lg:pt-24 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5 md:gap-10 2xl:gap-16 w-full">
        
          <Image
            src="/pics/local-law-11-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[40%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
            <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-lg xl:text-xl text-center md:text-left font-semibold text-[#89A096]">
              {section01.title}
            </span>
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#8AD5B7] font-conthrax">
              {section01.heading}
            </h2>
            <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6">
              <div className="bg-[#8AD5B7] w-2 h-auto"></div>
              <div className="space-y-2 w-[98%]">
                {section01.items.map((item, index) => {
                  // Count the number of colons in the item to identify multi-colon item
                  const colonCount = (item.match(/:/g) || []).length;
                  const isMultiColon = colonCount > 1;

                  const heading = item.substring(0, item.indexOf(":"));
                  const description = item.substring(item.indexOf(":") + 1);

                  return (
                    <div key={index} className="space-y-1">
                      {/* Heading: Always the part before the first colon */}
                      <h4 className="text-sm font-semibold text-[#DCE2E2]">
                        {heading}
                      </h4>

                      {isMultiColon ? (
                        <ul className="space-y-2">
                          {description.split(".").map((pair, idx) => {
                            return (
                              <li
                                key={idx}
                                className="text-xs font-semibold text-[#89A096]"
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
                        <p className="text-xs font-semibold text-[#89A096]">
                          {description.trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[#89A096] text-base font-semibold text-center lg:text-left w-full lg:w-2/3">
              {section01.additionalText}
            </p>
          </div>
        </div>

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2  mt-6 md:mt-10 lg:mt-16 mb-5 md:mb-8"></div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full rounded-lg bg-[#2E3734] py-3 px-6 lg:py-10 lg:px-20 gap-6 lg:gap-12 ">
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

          <div className="flex-1 w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start gap-4 p-4 sm:p-6 lg:p-6 bg-[#1E2322] rounded-lg">
            <div className="w-full flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#DCE2E2] font-conthrax uppercase">
                {stakes.title}
              </h2>
              <div className="flex-1 flex flex-col gap-3">
                {stakes.items.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#DCE2E2] font-conthrax">
                      {item.split(":")[0] + ":"}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-base font-semibold text-[#89A096]">
                      {item.split(":")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="px-6 md:px-10 lg:px-16 2xl:px-24 py-10 lg:py-16 text-[#DCE2E2]">
        <div className="w-full overflow-hidden relative">
          {/* Moved title section here and fixed spacing */}
          <div className="text-center mb-10 py-2">
            <h1 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-4">
              Our Services
            </h1>
            <p className="text-base lg:text-xl font-semibold text-[#89A096] max-w-md mx-auto">
               From Inspection to Action, We’ve got you covered
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-6 sm:gap-16">
            {services.map((service, index) => {
              return (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative w-full flex flex-col lg:flex-row ${
                      service.id % 2 === 1
                        ? "lg:left-0"
                        : "lg:left-[15%] xl:left-[25%]"
                    } items-center lg:items-stretch lg:justify-between gap-12`}
                  >
                    {service?.img && (
                      <div className="w-full lg:w-1/3 flex justify-center items-center">
                        <img
                          src={service.img}
                          alt={service.heading}
                          width={100}
                          height={100}
                          className="w-1/2 lg:w-full h-1/2 lg:h-full object-contain mix-blend-luminosity"
                        />
                      </div>
                    )}
                    <div
                      className={`flex flex-col gap-4 w-full lg:w-2/3 justify-center`}
                    >
                      <h2 className="text-2xl lg:text-3xl text-center lg:w-3/5 lg:text-left font-semibold text-[#8AD5B7]">
                        {service.heading}
                      </h2>
                      <p className="text-[#DCE2E2] text-base lg:w-4/6 2xl:w-full font-semibold text-center lg:text-left ">
                        {service.text}
                      </p>

                      <ul
                        className={`${
                          service.id == 2 ? "lg:w-[65%]" : "lg:w-[90%]"
                        } 2xl:w-full`}
                      >
                        {service?.items?.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="text-[#DCE2E2] text-base font-medium italic mb-2 text-center lg:text-left"
                            >
                              <span className="font-semibold">
                                {service.id !== 2 ? item?.split(":")[0] : ""}
                                <span className="test-xs font-semibold text-[#89A096]">
                                  {service.id !== 2
                                    ? item?.split(":")[1]
                                    : item}
                                </span>
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <motion.div className="w-full mt-6 sm:mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
          >
            <p className="text-[#DCE2E2] text-base font-medium italic mb-2 flex-1 text-center lg:text-left relative lg:left-[60%] 2xl:left-[60%] p-6 bg-[#2D3533] rounded-lg w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto lg:mx-0">
              <span className="font-semibold">
                SWARMP ANALYSIS {" "}
                <span className="test-xs font-semibold text-[#89A096]">
                  ACCORDING TO NYC LL11 CODE, FACADES ARE CLASSIFIED INTO 3
                  CATEGORIES (SAFE, SWARMP, UNSAFE).
                </span>
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="px-6 md:px-10 lg:px-16 2xl:px-24 lg:pt-16 text-[#DCE2E2] flex flex-col items-center justify-between">
       <motion.div className="w-full mt-6 sm:mt-10 mb-16"
            initial={{ opacity: 0, scale:0.8 }}
            whileInView={{ opacity: 1, scale:1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
          >
        <img
          src="/pics/local-law-11-pic6.png"
          alt="Inspection Services"
          
          className="w-[90%] 3xl:w-[75%] object-contain mx-auto"
        />
        </motion.div>

        {/* why PBS */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch mb-10 lg:mb-0 lg:mt-10 2xl:justify-center gap-10 lg:gap-12 xl:gap-0">
  {/* Image Section */}
  <div className="lg:w-[45%] 2xl:w-[40%] 3xl:w-[30%] flex items-end">
    <Image
      src={whyPBS.img}
      alt="building"
      width={600}
      height={800}
      priority
      className="w-2/3 mx-auto lg:w-full h-full object-cover object-top mix-blend-luminosity"
    />
  </div>

  {/* Text Content Section */}
  <div className="lg:w-[55%] 2xl:w-[60%] 3xl:w-[50%] flex flex-col justify-end lg:pb-6">
    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
      {whyPBS.title}
    </h1>

    <div className="text-sm lg:text-base 2xl:text-xl text-center lg:text-left text-[#89A096] font-semibold space-y-1 mt-1 xl:mt-3 2xl:mt-6">
      {whyPBS.list1.map((item, index) => (
        <span key={index} className="flex gap-2">
          <DotIcon className="text-[#DCE2E2] w-[5%] flex-shrink-0" />
          {index === 0 ? (
            <span>
              <span className="text-[#DCE2E2]">{item.split(",")[0]}</span>
              {item.trim().split(",")[1]}
            </span>
          ) : (
            item
          )}
        </span>
      ))}
    </div>

    <div className="flex items-stretch gap-3 pl-3 my-2 xl:mt-6">
      <div className="w-2 bg-[#8AD5B7] hidden lg:block"></div>
      <p className="text-xl xl:text-3xl text-center lg:text-left font-semibold text-[#DCE2E2] max-w-xl">
        {whyPBS.text}
      </p>
    </div>

    <div className="text-sm lg:text-base 2xl:text-xl text-center lg:text-left text-[#89A096] font-semibold mb-3 xl:mt-6 space-y-1">
      {whyPBS.list2.map((item, index) => (
        <p key={index} className="flex gap-2">
          <DotIcon className="w-[5%]" />
          <span className="w-[90%]">{item}</span>
        </p>
      ))}
    </div>

  <div className="w-full mt-0 flex flex-col xl:flex-row gap-6 items-start justify-start pl-6 2xl:pl-10">
    <CTA2
      isArrow={false}
      text="Book your Slot Today"
      href="/contacts"
      styling="w-[90%] lg:w-auto mx-auto lg:ml-0 mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-3 2xl:px-6 py-2 text-sm xl:text-base font-semibold font-conthrax hover:brightness-105 transition"
    />
    </div>
  </div>
</div>
      </section>

       {/* img corousel */}
       <ImageCarousel />
    </div>
  );
};

export default Page;
