"use client";
import CustomImage from "@/app/CustomImage";
import HeroSection from "../../../components/HeroSection";
import { motion } from "framer-motion";
import React from "react";
import { coreValues, features } from "./data";
import Image from "next/image";
import { DotIcon } from "lucide-react";

const Page = () => {

  return (
    <div className="bg-[#2B3331] min-h-screen overflow-hidden">
      {/* Hero: Our Values introduction */}
      <HeroSection
        heading="Building Compliance, Trust, and results in the heart of New york"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your project stays on time, on budget and above board."
        className="font-conthrax font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl max-w-[92%] sm:max-w-2xl md:max-w-4xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        isLine={false}
        bgStyle="bg-cover"
        textStyle="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#DCE2E2]"
        badge="Our Values"
      />

      {/* Section 01: Six Pillars of Excellence feature rows */}
      <section className="bg-[#2B3331] px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="w-full">
          <div className="text-center my-2 mb-10 py-2">
            <h3 className="text-[#DCE2E2] text-xl font-semibold font-poppins tracking-widest mb-3 flex flex-col">
              <span className="">The PBS Promise: Six Pillars of Excellence</span>
            </h3>
            <h1 className="lg:text-4xl text-3xl font-conthrax px-10 text-[#f3f4f6]">
              Principles we hold are Built on Integrity, Driven by Excellence
            </h1>
          </div>

          <motion.div
            className="flex flex-col items-center gap-6 sm:gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center w-full gap-4 sm:gap-6 xl:gap-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, delay: index * 0.1 }}
              >
                {/* Left icon panel (desktop only) */}
                <div className="hidden lg:flex lg:w-[25%] 2xl:w-[20%] 3xl:w-[15%] aspect-square rounded-3xl glass-morphism-glow justify-center items-center overflow-hidden">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>

                {/* Main pillar content card */}
                <div className="w-full lg:flex-1 flex flex-col lg:flex-row justify-between items-stretch text-left rounded-[35px] bg-[#1E2322] py-4 px-6 box-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-full lg:w-[35%] xl:w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-3 mb-4 lg:mb-0">
                    <h2 className="text-xl sm:text-2xl xl:text-4xl 2xl:text-5xl w-full text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7]">
                      {feature.title}
                    </h2>
                    <p className="w-full text-center lg:text-left text-sm sm:text-base font-semibold text-[#DCE2E2]">
                      {feature.tagline}
                    </p>
                  </div>

                  <div className="w-full lg:w-[2px] flex justify-center items-center mb-4 lg:mb-0">
                    <div className="w-full h-1 lg:h-4/5 rounded-full bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[#8AD5B7]/80 to-transparent"></div>
                  </div>

                  <div className="w-full lg:w-[55%] xl:w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-3">
                    {feature.description.map((item, index) => (
                      <div className="text-[#DCE2E2]" key={index}>
                        <h4 className="flex justify-start items-center text-sm sm:text-base pb-1 sm:pb-2">
                          <span className="font-semibold">{item.split(":")[0]}</span>
                        </h4>
                        <p className="text-xs font-semibold text-[#89A096]">
                          {item.split(":")[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 02: Why These Pillars Matter cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-[#1e2322] pt-8 sm:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 md:px-12 xl:px-16"
        style={{
          backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-[#DCE2E2] uppercase text-center text-2xl sm:text-3xl lg:text-5xl font-semibold font-conthrax mb-4 sm:mb-6 mx-auto leading-tight">
          Why These Pillars Matter
        </h2>

        <p className="text-[#8AD5B7] text-sm sm:text-base text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          In NYC’s Construction Landscape, Delays Cost $12k/Day. Missteps Risk
          Reputations.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-4 sm:gap-6 lg:gap-12 text-[#DCE2E2] w-full sm:w-[92%] lg:w-[85%] mx-auto">
          {coreValues?.map((value, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                key={index}
                className="flex flex-col items-start justify-start w-full 2xl:w-[45%] 3xl:w-[35%] gap-4 sm:gap-6 lg:gap-8 glass-morphism-glow rounded-3xl p-4 sm:p-5 lg:p-8"
              >
                <div className="w-full flex justify-start items-center h-[30%]">
                  <img src={value.icon} alt="icon" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain" />
                </div>
                <div className="w-full h-2/3 flex flex-col items-start justify-start gap-2 sm:gap-3 mb-4 lg:mb-0">
                  {value.title && (
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold uppercase font-conthrax text-[#8AD5B7] flex flex-col">
                      <span>{value.title.split("—")[0]}</span>
                      <span>{value.title.split("—")[1]}</span>
                    </h2>
                  )}
                  <ul className="w-full list-decimal text-left space-y-1">
                    {value.description.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="w-full text-sm sm:text-base flex items-start gap-2 justify-start"
                        >
                          {(value.id === 2 && idx === 0) ? "" : <DotIcon className="w-4 h-4 mt-1 shrink-0" />}
                          <span className="w-[90%]">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
