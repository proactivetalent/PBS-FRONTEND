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
import { section01, Div2_Sec1, Compliance_Deadlines, LocalLaw152, Address, WhatsIncluded, timelineItems, whyPBS } from "./data";

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
        heading="LL152 Gas Piping Inspections"
        text="Proactive Inspections Every 3 Years to Meet NYC Mandates, ensuring tenant safety, Legal Compliance, and uninterrupted operations"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/local-law-152-hero.png"
      />

        {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
    <div className="bg-[#8AD5B7] w-full h-2"></div>
    <div
      className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[50%] lg:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
    >
      Local Law 152
    </div>
  </div>

  {/*Section 01  */}
  <section className="px-6 md:px-10 xl:px-16 pt-10 md:pt-16 lg:pt-24 text-[#DCE2E2] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full pb-6 lg:pb-10">
                  <Image
                    src="/pics/local-law-152-pic1.png"
                    alt="Inspection Services"
                    width={500}
                    height={500}
                    className="w-[80%] lg:w-[45%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
                  />
                  <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
                    <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-base md:text-lg xl:text-xl text-center md:text-left font-semibold text-[#89A096]">
                      {section01.title}
                    </span>
                    <h2 className="text-2xl lg:text-[40px] 2xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax leading-tight">
                      {section01.heading}
                    </h2>
                    <p className="text-base font-semibold text-[#89A096]">
                      {section01.text}
                    </p>
        
                    <div className="flex items-stretch justify-start gap-6">
                      <div className="space-y-2 w-[98%]">
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

        <div className="w-[90%] lg:w-[80%] mx-auto space-y-3 lg:space-y-6 pb-10 lg:pb-0">
           <h2  className="text-3xl lg:text-5xl font-semibold font-conthrax text-center text-[#8AD5B7]">{Div2_Sec1.title}</h2>

           <p className="text-base lg:text-xl font-semibold md:px-10 text-[#89A096] max-w-4xl mx-auto text-center flex flex-col">
              <span >{Div2_Sec1.description.split("(")[0]}</span>
            <span>{"(" + Div2_Sec1.description.split("(")[1]}</span>
           </p>

           <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0 bg-[#2E3734] rounded-2xl p-6 lg:px-5 lg:py-10">
                  {Div2_Sec1.data.map((detail, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex items-stretch w-full lg:w-1/2"
                      >
                        <div className="w-full flex flex-col lg:justify-start gap-4">
                          <div className="space-y-4">
                            <h2 className="text-xl lg:text-2xl xl:text-3xl font-conthrax font-semibold text-[#DCE2E2]">
                              {detail.heading}
                            </h2>
                            <div>
                              {detail.items.map((desc, index) => {
                                return (
                                  <p
                                    key={index}
                                    className="w-full text-base text-[#89A096] font-semibold flex gap-2 items-center"
                                  >
                                    {idx==0 && <DotIcon size={32} className="w-[10%]"/>}
                                    <span className="w-[90%]">{desc}</span>
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* Add a white vertical line between the two sections, visible only in md and above */}
                        {idx === 0 && (
                          <div className="hidden lg:block w-2 bg-[#8AD5B7] mx-8"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-10 w-[90%] lg:w-[80%] mx-auto pb-10">
          <div className="w-full lg:w-[40%] 2xl:w-[25%] flex flex-col gap-3 justify-between items-center lg:items-start lg:justify-center 2xl:gap-6 box-border lg:pt-16">
          <h2 className="text-3xl lg:text-[40px] font-semibold font-conthrax">
            {Compliance_Deadlines.title}
          </h2>
          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center lg:text-left">
            {Compliance_Deadlines.text}
          </p>
          </div>

          <table className="border-collapse border border-[#8AD5B7] w-full lg:w-[55%]">
            <caption className="text-[#ffff] text-base lg:text-xl font-semibold p-4 lg:p-8">
              {Compliance_Deadlines.label}  
            </caption>  
            <thead className="text-[#DCE2E2]">
              <tr>
                {Compliance_Deadlines.table.headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-2 border-[#8AD5B7] p-4 text-center text-xl font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#89A096]">
              {Compliance_Deadlines.table.rows.map((row, index) => (
                <tr key={index} className="border-2 border-[#8AD5B7]">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-2 border-[#8AD5B7] p-4"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

  {/* Section 02 */}
  <section className="px-6 md:px-10 xl:px-16 pt-16 md:pt-10 text-[#DCE2E2] w-full">
    <div className="flex flex-col items-center justify-center w-full lg:w-[70%] mx-auto pb-6 lg:pb-10">
      <h2 className="text-[#8AD5B7] font-conthrax font-semibold text-3xl text-center lg:text-5xl">{LocalLaw152.title}</h2>
      <h4 className="text-[#8AD5B7] font-conthrax font-semibold text-xl text-center lg:text-3xl">{LocalLaw152.subtitle}</h4>
      <p className="text-lg lg:text-xl font-semibold text-[#89A096] my-6 text-center lg:text-left">{LocalLaw152.text1}</p>
      <div className="flex flex-col gap-2 w-full mb-6">
        {LocalLaw152.items.map((item, index) => {
          return (
            <p
              key={index}
              className="text-base text-[#89A096] font-semibold flex gap-2 items-center"
            >
              <DotIcon size={32} className="w-[5%]"/>
              <span className="w-[95%]">{item}</span>
            </p>
          );
        })}
    </div>
    <p className="text-lg lg:text-xl font-semibold text-[#89A096] text-center lg:text-left">{LocalLaw152.text2}</p>
    </div>

    <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-[90%] mx-auto ">
          <h2 className="text-2xl lg:text-[40px] font-semibold font-conthrax text-center text-[#8AD5B7]">
            {Address.heading}
          </h2>

          <p className="text-lg lg:text-xl text-center font-semibold">{Address.text}</p>

          <div className="hidden lg:flex relative w-[68%] 2xl:w-[75%] mx-auto h-24 sm:h-32 lg:h-40 items-center justify-center">
            {/* Horizontal Line with Circles at Both Ends */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 rounded-full bg-[#DCE2E2] flex justify-between items-center">
              <div className="absolute top-0 left-full transform -translate-x-1/2 w-2 rounded-full bg-[#DCE2E2] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>
              </div>

              <div className="absolute top-0 left-0 transform -translate-x-1/2 w-2 rounded-full bg-[#DCE2E2] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>
              </div>
            </div>

            {/* Vertical Line with Circles at Both Ends */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1/2 rounded-full bg-[#DCE2E2] flex flex-col justify-between items-center">
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>

            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full gap-6 lg:gap-8">
            {Address.items.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#1E2322] lg:bg-transparent rounded-lg lg:rounded-none p-3 sm:p-4 lg:p-0 w-full sm:w-3/4 lg:w-1/3 2xl:w-1/4 flex flex-col gap-2 sm:gap-3"
              >
                <p className="text-[#89A096] text-sm sm:text-base lg:text-lg font-semibold text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>

          </div>
  </section>

  {/* Section 03 */}
  <section className="px-6 md:px-10 xl:px-16 pt-16 md:pt-10 text-[#DCE2E2] w-full">
    <div className="w-[100%] lg:w-[80%] mx-auto flex flex-col items-center justify-center gap-6 lg:gap-8 pb-6 lg:pb-10">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[#8AD5B7]">
      There are few common inspection failures that we resolve with proactive approach and maintenance
      </h2>
      <img 
        src="/pics/local-law-152-pic2.png"
        alt="Inspection Services"
        width={500}
        height={500}
        className="w-full h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto"
      />
    </div>

    <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center justify-center gap-6 lg:gap-8 pb-10">
      <h2 className="text-3xl lg:text-5xl font-conthrax font-semibold text-center text-[#8AD5B7]">
      {WhatsIncluded.title}
      </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {WhatsIncluded.items.map((item, index) => {
              return (
                <button
                  key={index}
                  className="bg-[#1E2322] text-lg lg:text-xl 2xl:text-2xl font-semibold text-[#DCE2E2] px-5 py-2 rounded-2xl min-h-24 w-full 2xl:w-3/4 mx-auto"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-center text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-2">
            Our Process
          </h2>
          <p className="text-[#89A096] text-sm lg:text-base text-center font-semibold mb-2 lg:mb-10">
          Simple, Fast, Non-Disruptive
          </p>

        <div className="relative flex flex-col items-center w-full pb-4 sm:pb-6 lg:pb-8">
            {/* Vertical Line with Circles at Both Ends (Hidden on Mobile) */}
            <div className="hidden md:flex absolute top-0 bottom-0 w-2 bg-[#DCE2E2] flex-col justify-between items-center">
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:flex-wrap items-center w-full md:pb-16">
            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col w-full md:w-1/2 items-center ${
                  item.position === "left" ? "md:items-start" : "md:items-end md:top-16"
                } mb-6 sm:mb-8`}
              >
                {/* Content */}
                <div
                  className={`flex items-center w-full sm:px-6 lg:px-10`}
                >
                  {/* Text */}
                  <div
                    className={`flex flex-col gap-1 sm:gap-1 lg:gap-2 w-full text-center sm:text-left`}
                  >
                    <h4 className="text-[#DCE2E2] text-lg sm:text-xl lg:text-2xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-[#89A096] text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Horizontal Line and Circle (Mobile: Centered, Desktop: Positioned Below Content) */}
                <div
                  className={`relative w-full h-2 rounded-full bg-[#DCE2E2] flex justify-center mt-4 z-10`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-[#8AD5B7] absolute -top-2 sm:top-[-10px] ${
                      item.position === "left" ? "sm:left-0" : "sm:right-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
  </section>

  {/* Section 04 */}
   <section className="px-6 md:px-10 xl:px-16 pt-6 md:pt-10 text-[#DCE2E2] w-full">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center justify-center gap-6 lg:gap-12 pb-6 lg:pb-10">
        <h2 className="text-center text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax">Why it works for you</h2>

        <img 
        src="/pics/local-law-152-pic3.png"
        alt="Inspection Services"
        width={500}
        height={500}
        className="w-full h-auto object-cover object-right-top rounded-[16%] lg:mx-0 mx-auto"
      />
      </div>

      {/* why PBS */}
              <div className="w-full flex flex-col lg:flex-row items-center md:items-stretch 2xl:justify-center gap-3 sm:gap-6 2xl:gap-16 pt-10 pb-10 lg:pb-0">
                <div className="w-full lg:w-[45%] 2xl:w-[30%] flex items-end overflow-hidden">
                  <Image
                    src={whyPBS.img}
                    alt="building"
                    width={600}
                    height={800}
                    priority
                    className="relative w-2/3 lg:w-full mx-auto h-auto lg:h-full object-cover lg:object-cover object-top mix-blend-luminosity"
                  />
                </div>
      
                <div className="w-full lg:w-[65%] 2xl:w-[55%] flex flex-col md:justify-end 2xl:justify-center lg:pb-6 h-full 2xl:h-auto">
                  <div className="w-full h-auto flex flex-col gap-2 2xl:gap-6">
                    <h1 className="text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
                      {whyPBS.title}
                    </h1>
                    <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl 2xl:w-[80%] text-center lg:text-left font-semibold">{whyPBS.text1} </p>

                    <p className="text-[#8AD5B7] italic text-sm lg:text-base 2xl:text-lg 2xl:w-[80%] text-center lg:text-left font-semibold flex flex-col">
                       <span>{whyPBS.text2.split("-")[0]}</span>
                        <span>{whyPBS.text2.split("-")[1]}</span>
                      </p>
                    
                    <div className="w-[30%] h-2 bg-[#8AD5B7] hidden lg:block mt-3"></div>
      
                   
                      <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl 2xl:w-[80%] text-center lg:text-left font-semibold">
                        {whyPBS.text3}
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