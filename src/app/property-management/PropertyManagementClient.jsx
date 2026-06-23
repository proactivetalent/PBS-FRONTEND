'use client';
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";
import { section01, section2, compliance_alert, Div2_Section1, whyPBS } from "./data";

const Page = () => {
  const serviceGridItems = [
    {
      title: "Full-Service Property Management",
      body: "From tenant screening and lease agreements to rent collection and financial reporting, we handle every detail. Our team ensures your property stays occupied, profitable, and well-maintained, so you can focus on what matters most",
    },
    {
      title: "Repairs and Maintenance by Trusted Contractors",
      body: "Our vetted network of licensed, insured contractors provides 24/7 emergency repairs and routine maintenance, we guarantee quality workmanship, transparent pricing, and swift resolutions to keep your property in peak condition",
    },
    {
      title: "Proactive Inspection Services",
      body: "NYC's building code and compliance processes are complex, we decode them. Avoid costly surprises with our thorough inspection programs. We conduct regular checks for structural integrity, safety compliance, and code violations, delivering detailed reports with actionable insights.",
    },
    {
      title: "PBS Alert System",
      body: "NYC's construction and building laws change frequently and non-compliance can mean steep fines. Our proprietary Compliance Alert System monitors legal updates in real-time, ensuring your property meets local laws and DOB requirements. Sleep easy knowing PBS keeps you ahead of deadlines",
    },
  ];

  return (
    <div
      className="bg-[#2B3331]"
      style={{
        backgroundImage: `url('')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero: Property management value proposition */}
      <HeroSection
        heading="Your Trusted Partner in NYC Property Excellence"
        text="We manage properties, we solve problems"
        badge="Property Management"
        className="font-conthrax max-w-[95%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl font-semibold"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg font-semibold text-[#89A096] max-w-[95%] sm:max-w-3xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
      />

      {/* Custom 'About Us' Label Divider
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] lg:w-[50%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-3xl z-20">
          Property Management
        </div>
      </div> */}

      {/* Section 01: Core property management overview */}
      <section className="px-4 sm:px-6 md:px-10 xl:px-16 pt-8 sm:pt-10 md:pt-16 lg:pt-24 text-[#DCE2E2] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center gap-6 lg:gap-10 2xl:gap-16 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pb-6 lg:pb-10">
          <Image
            src="/pics/p-management-pic3.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none lg:w-[45%] h-auto object-cover rounded-[16px] mb-2 sm:mb-4 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 sm:gap-4 justify-center items-center lg:items-start 2xl:justify-center 2xl:gap-6 rounded-2xl bg-[#1E2322] p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-center lg:text-left font-semibold text-[#E4E4E4] uppercase font-conthrax leading-tight">
              {section01.heading}
            </h2>

            <div className="w-full">
              <div className="space-y-2 w-full lg:w-full 2xl:w[80%] 3xl:w-[70%] mx-auto lg:mx-0">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-sm sm:text-base text-center lg:text-left font-normal leading-relaxed text-[#E4E4E4]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>



        <h4 className="text-[#E4E4E4] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-conthrax mt-10 sm:mt-14 lg:mt-20 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto bg-[#1E2322] w-full text-center uppercase p-4 sm:p-6 rounded-[16px]">
          Your Property, Our Priority
        </h4>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 2xl:gap-16 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-6 lg:py-10">

          <div className="bg-[#1E2322] rounded-xl p-4 lg:p-6 w-full md:w-[90%] lg:w-1/2 2xl:w-[40%] flex 3xl:items-center">
            <p className="text-[#89A096] text-sm sm:text-base font-normal leading-relaxed text-center lg:text-left">
              {Div2_Section1.left}
            </p>
          </div>
          <div className="glass-morphism-glow rounded-xl p-4 lg:p-6 w-full md:w-[90%] lg:w-1/2 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#89A096] text-sm sm:text-base font-normal leading-relaxed text-center lg:text-left w-full md:w-3/5">
              {Div2_Section1.right}
            </p>
            <Image
              src={Div2_Section1.img}
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-[70%] sm:w-[60%] md:w-[40%] lg:w-[80%] xl:w-[75%] 2xl:w-[60%] 3xl:w-[50%] h-auto object-cover lg:mx-0 mx-auto mix-blend-luminosity mt-1 md:mt-0"
            />
          </div>
        </div>
      </section>

      {/* Section 02 heading: Service coverage */}
      <h4 className="text-[#E4E4E4] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-conthrax mt-20 w-[95%] sm:w-[92%] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto bg-[#1E2322] text-center uppercase p-6 rounded-[16px]">
        {section2.heading}
      </h4>


      {/* Section 02: Service capabilities and execution model */}
      <section className="px-4 sm:px-6 md:px-10 xl:px-16 pt-6 lg:pt-10 text-[#DCE2E2] w-full">
        <div className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-6 xl:gap-8 2xl:gap-12 w-full lg:w-[90%] 2xl:w-[80%] mx-auto pb-6 lg:pb-10">

          <p className="tetx-base text-sm sm:text-base font-semibold text-[#DFDFDF] text-center max-w-5xl mx-auto">
            {section2.text}
          </p>

          <div className="w-full relative hidden lg:grid lg:grid-cols-2 gap-x-14 gap-y-10 py-2">
            {/* Desktop connector rails for service grid */}
            <div className="pointer-events-none absolute inset-0">
              {/* Center vertical spine */}
              <div className="absolute left-1/2 -top-4 h-[calc(50%+46px)] -translate-x-1/2 w-[2px] bg-[#8AD5B7]" />

              {/* Top row horizontal connector */}
              <div className="absolute left-[calc(25%+12px)] right-[calc(25%+12px)] top-8 h-[2px] bg-[#8AD5B7]" />

              {/* Bottom row horizontal connector */}
              <div className="absolute left-[calc(25%+12px)] right-[calc(25%+12px)] top-[calc(50%+30px)] h-[2px] bg-[#8AD5B7]" />

              {/* Dots (card touch points) */}
              <span className="absolute left-1/2 -top-5 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C3FFF0]" />
              <span className="absolute left-[calc(25%+10px)] top-[30px] -translate-y-1/2 w-2 h-2 rounded-full bg-[#C3FFF0]" />
              <span className="absolute right-[calc(25%+10px)] top-[30px] -translate-y-1/2 w-2 h-2 rounded-full bg-[#C3FFF0]" />
              <span className="absolute left-[calc(25%+10px)] top-[calc(50%+30px)] -translate-y-1/2 w-2 h-2 rounded-full bg-[#C3FFF0]" />
              <span className="absolute right-[calc(25%+10px)] top-[calc(50%+30px)] -translate-y-1/2 w-2 h-2 rounded-full bg-[#C3FFF0]" />
            </div>

            {serviceGridItems.map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="glass-morphism-glow rounded-[14px] px-6 py-4">
                  <h3 className="text-[#DCE2E2] text-xl font-semibold text-left">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 px-6 text-[#DFDFDF] text-base font-normal leading-relaxed text-left">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:hidden flex flex-col gap-7 sm:gap-8 px-1">
            {serviceGridItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 mx-1">
                <div className="glass-morphism-glow rounded-[14px] px-4 sm:px-5 py-3 sm:py-3.5">
                  <h3 className="text-[#DFDFDF] text-base sm:text-lg font-semibold leading-tight text-left">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#DFDFDF] text-sm sm:text-base font-normal leading-relaxed text-left">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </section>


      {/* Section 03 heading: Compliance alert system */}
      <h4 className="text-[#E4E4E4] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-conthrax mt-10 sm:mt-14 lg:mt-20 w-[95%] sm:w-[92%] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto bg-[#1E2322] text-center uppercase p-4 sm:p-6 rounded-[16px]">
        {compliance_alert.heading}
      </h4>


      {/* Section 03: Compliance alerts, coverage map, and final CTA */}
      <section className="px-4 sm:px-6 md:px-10 xl:px-16 pt-6 lg:pt-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-between 2xl:justify-center gap-4 sm:gap-6 xl:gap-6 w-full mx-auto pb-6 lg:pb-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 2xl:gap-16 w-full">
            <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-5 xl:gap-6 2xl:gap-8 w-full ml-0 glass-morphism-glow p-4 sm:p-6 rounded-[16px]">
              <h3 className="w-full text-xl sm:text-2xl lg:text-3xl font-conthrax text-center lg:text-left font-semibold text-[#8AD5B7] uppercase">
                {compliance_alert.subheading}
              </h3>

              <div className="space-y-2 w-full mx-auto lg:mx-0">
                {compliance_alert.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-sm sm:text-base text-center lg:text-left font-normal leading-relaxed text-[#DFDFDF]"
                    >
                      <span className="text-[#DCE2E2]">
                        {item?.split(":")[0] + ":"}
                      </span>
                      <span>{item?.substring(item.indexOf(":") + 1)}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="tetx-base text-sm sm:text-base font-normal text-[#DFDFDF] text-center max-w-3xl mx-auto my-2 sm:my-4 px-2 sm:px-0">
            {compliance_alert.text}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-4 w-full">
            {compliance_alert.locations.map((location, index) => {
              return (
                <div
                  key={index}
                  className="w-full"
                >
                  <div className="w-full max-w-[210px] sm:max-w-[250px] mx-auto rounded-2xl p-3 glass-morphism-glow">
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 z-10" />
                    <Image
                      src={location.cityImage}
                      alt={location.cityName}
                      width={320}
                      height={240}
                      className="w-full h-[200px] sm:h-[200px] object-cover grayscale"
                    />
                      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-[#DCE2E2] text-lg sm:text-xl font-semibold font-conthrax uppercase tracking-wide whitespace-nowrap">
                        {location.cityName}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Why PBS closing block */}
        <div className="flex flex-col items-center justify-between 2xl:justify-center gap-3 sm:gap-4 xl:gap-6 3xl:gap-12 w-full 3xl:w-[80%] mx-auto py-6 lg:py-10">
          <h2 className="w-full text-lg sm:text-xl leading-tight font-poppins text-center font-semibold text-[#8AD5B7] max-w-xl mx-auto">{whyPBS.heading}</h2>
          
          <p className="text-base sm:text-lg lg:text-2xl font-normal text-[#DFDFDF] text-center max-w-4xl mx-auto flex flex-col px-2 sm:px-0">
            <span>{whyPBS.text1}</span>
          </p>

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
        </div>
      </section>

      <ImageCarousel />
    </div>
  );
};

export default Page;
