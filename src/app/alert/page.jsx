"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Check, DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import { section01, section2, section3, section4 } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "@/components/ImageCarousel";

const Page = () => {
  const section2CarouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots) => (
      <div className="pt-3 sm:pt-4">
        <ul className="alert-carousel-dots">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button type="button" className="alert-carousel-dot" aria-label="Go to slide" />
    ),
  };

  return (
    <div className="bg-[#2B3331]">
      {/* Hero: Alert system value proposition */}
      <HeroSection
        heading="Real-Time Compliance Alerts for NYC Property Professionals"
        text="Stay Ahead of Deadlines, Violations, and Zoning Changes with NYC’s Most Advanced Property Management & Alert Service Platform"
        className="font-conthrax max-w-[92%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-[95%] 4xl:max-w-[70%] text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold"
        bgStyle="bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-sm sm:text-base md:text-lg lg:text-xl text-[#DFDFDF] font-semibold max-w-[92%] sm:max-w-3xl md:max-w-4xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Alert System"
      />

      {/* Section 01: Introductory alert highlights and portal teaser */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        {/* Card 01: "Never miss a deadline" overview */}
        <div className="w-full rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[460px_minmax(0,1fr)] gap-4 sm:gap-6 lg:gap-10 items-stretch">
            <div className="w-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center mix-blend-luminosity">
              <img src="/pics/alert-img1.png" alt="" className="w-[85%] sm:w-[75%] lg:w-full h-auto object-cover" />
            </div>

            <div className="w-full rounded-xl bg-[#1E2322] p-4 sm:p-12 flex flex-col gap-3 sm:gap-4">
              <h2 className="text-[#DCE2E2] font-conthrax text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight uppercase">
                {section01.div1.heading}
              </h2>
              <p className="text-[#DFDFDF] text-xs sm:text-sm lg:text-base leading-relaxed">
                {section01.div1.text1}
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                <CTA2
                  isArrow={false}
                  text={section01.div1.CTA.text}
                  href={section01.div1.CTA.link}
                  styling="w-full sm:w-auto mt-0 rounded-full h-9 sm:h-10 bg-[#FF4B4E] text-white px-4 py-2 text-[11px] sm:text-xs font-semibold sm:whitespace-nowrap hover:brightness-105 transition font-poppins"
                />
                <CTA2
                  isArrow={false}
                  text="WATCH A DEMO VIDEO"
                  href="/contacts"
                  styling="w-full sm:w-auto mt-0 rounded-full h-9 sm:h-10 bg-[#8AD5B7] text-[#1E2322] px-4 py-2 text-[11px] sm:text-xs font-semibold sm:whitespace-nowrap hover:brightness-105 transition font-poppins"
                />
              </div>

              <p className="text-[#DFDFDF] text-[11px] sm:text-xs lg:text-sm font-semibold pt-1">
                {section01.div1.text2}
              </p>
            </div>
          </div>
        </div>

        {/* Card 02: Member portal / real-time data access spotlight */}
        <div className="w-full rounded-2xl bg-[#1E2322] overflow-hidden my-8 sm:my-12 lg:my-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_44%] items-stretch">
            <div className="flex flex-col justify-center gap-3 sm:gap-4 p-5 sm:p-8 lg:p-16">
              <h2 className="text-[#DCE2E2] font-conthrax text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight uppercase max-w-2xl">
                {section01.div2.heading}
              </h2>
              <p className="text-[#DCE2E2] text-sm sm:text-base lg:text-lg font-semibold">
                {section01.div2.text1}
              </p>
              <p className="text-[#DFDFDF] text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl">
                {section01.div2.text2}
              </p>

              <CTA2
                isArrow={false}
                text="MEMBER PORTAL"
                href="/portal/dashboard"
                styling="w-full sm:w-auto mt-1 rounded-full h-9 sm:h-10 bg-[#8AD5B7] text-[#1E2322] px-5 py-2 text-[11px] sm:text-xs font-semibold sm:whitespace-nowrap hover:brightness-105 transition font-poppins"
              />
            </div>

            <div className="relative min-h-[200px] sm:min-h-[260px] lg:min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent z-10" />
              <Image
                src={section01.div2.img}
                alt="Alert dashboard preview"
                fill
                className="object-contain mix-blend-luminosity"
              />
            </div>
          </div>
        </div>

        {/* Card 03: Supporting feature snippets */}
        <div className="pt-1 sm:pt-2">
          <img
            src="/pics/alert-pic2a.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full  lg:block h-auto object-contain 2xl:object-cover object-right-top mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
            {section01.div2.imgArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-3 2xl:gap-8 w-full"
                >
                  {/* <img
                    src={item.img} 
                    alt="Inspection Services"
                    width={500}
                    height={500}
                    className="w-full block lg:hidden h-auto object-contain object-right-top rounded-[16%] lg:mx-0 mx-auto mix-blend-luminosity"
                  /> */}

                  <p className="text-[#DFDFDF] glass-morphism-glow bg-[#1E2322] p-3 sm:p-4 rounded-[16px] text-sm sm:text-base lg:text-lg text-center flex flex-col items-center min-h-[40%] lg:h-auto">
                    <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-[#DCE2E2]">
                      {item.text.split(":")[0]}
                    </span>
                    {item.text.substring(item.text.indexOf(":") + 1)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 02: Alert triggers, portfolio tools, and dashboard carousel */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        {/* Block 01: What triggers alerts */}
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 2xl:gap-8 w-full mx-auto bg-[#1E2322] p-4 sm:p-6 md:p-10 lg:p-16 rounded-2xl">
            <div className="flex justify-center items-center w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-center font-semibold text-[#E4E4E4] font-conthrax">
                {section2.div1.heading}
              </h2>
            </div>

            <div className="glass-morphism-glow p-4 sm:p-6 rounded-2xl flex flex-col justify-center gap-2">
              {section2.div1.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <DotIcon
                      size={20}
                      className="inline-block mr-2 mt-1 flex-shrink-0 sm:w-6 sm:h-6"
                    />
                    <p className="text-sm sm:text-base text-[#DFDFDF] font-semibold leading-relaxed">
                      <span className="text-[#DCE2E2] itlaic">
                        {item.split(":")[0] + ": "}
                      </span>
                      {item.substring(item.indexOf(":") + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold text-center max-w-3xl mx-auto">
            {section2.div1.text}
          </p> */}
        </div>

        {/* Block 02: Add/remove property and portfolio management */}
        <div className="w-full flex flex-col items-center justify-center gap-6 2xl:gap-8">
          <div className="w-full sm:w-[95%] lg:w-[90%] flex flex-col lg:flex-row items-stretch justify-center gap-6 2xl:gap-8 mx-auto glass-morphism-glow mt-8 sm:mt-12 lg:mt-40 mb-8 sm:mb-12 lg:mb-20 rounded-2xl overflow-visible p-4 sm:p-6 lg:p-0">
            <Image
              src="/pics/alert-pic11a.png"
              alt="Inspection Services"
              width={500}
              height={500}
              className="relative z-10 -mt-4 sm:-mt-8 lg:-mt-20 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-full object-cover object-right-top mb-0 lg:mx-0 mx-auto"
            />
            <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start py-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase xl:leading-tight text-center lg:text-left font-semibold text-[#E4E4E4] font-conthrax">
                {section2.div2.heading}
              </h2>
              <div className="mt-3 text-center lg:text-left">
                <span className="text-sm sm:text-base text-[#DCE2E2] font-semibold">
                  {section2.div2.text1}
                </span>
                <p className="text-sm sm:text-base text-[#DFDFDF] lg:max-w-lg leading-relaxed">
                  {section2.div2.text2}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="bg-[#1E2322] p-4 sm:p-6 md:p-10 lg:p-16 rounded-2xl flex flex-col md:flex-row items-center lg:items-end 4xl:items-center justify-start gap-6 sm:gap-8 2xl:gap-16 w-full">
        <div className="w-full flex flex-col justify-center items-center md:items-center gap-8 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase xl:leading-tight text-center font-semibold text-[#E4E4E4] font-conthrax">
            {section2.div2.title}
          </h2>
          <div className="w-full max-w-4xl mx-auto rounded-[16px]">
            <Slider {...section2CarouselSettings}>
              {section2.div2.items.map((item, index) => {
                const [title, ...descParts] = item.text.split(":");
                const desc = descParts.join(":").trim();
                return (
                  <div key={index} className="px-1 sm:px-2 pb-8">
                    <div className="rounded-[16px] p-4 sm:p-6 bg-[#2A3230] border border-[#8AD5B7]/20">
                      <img
                        src={item.img}
                        alt={title || "Alert feature"}
                        className="w-full max-w-[92%] sm:max-w-[88%] mx-auto h-auto object-contain rounded-xl"
                      />
                      <p className="w-full mt-4 text-center flex flex-col items-center gap-1">
                        <span className="text-[#DCE2E2] text-lg sm:text-2xl lg:text-3xl font-semibold font-poppins">
                          {title}
                        </span>
                        <span className="text-[#DCE2E2] text-sm sm:text-base lg:text-xl font-semibold leading-relaxed max-w-2xl">
                          {desc || item.text}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* Block 03: Automated reports and centralized data details */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full">
          <h2 className="section-heading-pill">
            {section3.div1.heading}
          </h2>
          <div className="px-2 sm:px-6 md:px-10 xl:px-16 space-y-1 text-center">
            <p className="text-sm sm:text-base text-[#DCE2E2] font-semibold w-full">
              {section3.div1.text1}
            </p>

            <p className="text-sm sm:text-base text-[#DFDFDF] max-w-3xl mx-auto leading-relaxed">
              {section3.div1.text2}
            </p>
          </div>

          <div className="w-full flex flex-col">
            <div className="overflow-hidden">
              <img
                src="/pics/alert/sec03-img1.png"
                alt="computer"
                className="object-contain my-6 w-full"
              />
            </div>

          </div>
        </div>

        <div className="w-full mx-auto">
          <h2 className="section-heading-pill">
            {section2.div3.heading}
          </h2>
          <div className="mt-6 sm:mt-8 lg:mt-12 w-[95%] sm:w-[90%] mx-auto text-center lg:text-left">
            <span className="text-sm sm:text-base text-[#DCE2E2] font-semibold">
              {section2.div3.text1}
            </span>
            <p className="text-sm sm:text-base text-[#DFDFDF] leading-relaxed">
              {section2.div3.text2}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start w-[95%] sm:w-[90%] mx-auto gap-1 sm:gap-2">
          {section2.div3.items.map((item, index) => {
            return (
              <div key={index} className="flex items-start justify-start gap-2">
                <DotIcon
                  size={20}
                  className="inline-block flex-shrink-0 text-[#DCE2E2] mt-1 sm:w-6 sm:h-6"
                />
                <p className="text-sm sm:text-base text-[#DFDFDF] leading-relaxed">
                  <span className="text-[#DCE2E2] font-semibold">
                    {item.split(":")[0] + ": "}
                  </span>
                  {item.substring(item.indexOf(":") + 1)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 03: Custom inspections, portal access, and workflow steps */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full lg:w-[90%] mx-auto">
          <div className="w-full">
            <div className="w-full rounded-2xl border border-[#8AD5B7]/70 bg-[#1E2322]/95 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-5 sm:gap-6 lg:gap-10">
                <div className="w-full lg:w-[38%] flex items-center justify-center mt-0 sm:-mt-8 lg:-mt-20">
                  <img
                    src="/pics/alert/sec03-img2.png"
                    alt="Custom property inspections"
                    className="w-[80%] sm:w-[72%] lg:w-full h-auto object-contain"
                  />
                </div>

                <div className="w-full lg:w-[62%] flex flex-col justify-center gap-2 sm:gap-3 text-center lg:text-left">
                  <h2 className="text-[#DCE2E2] font-conthrax text-2xl sm:text-3xl xl:text-5xl leading-tight font-semibold uppercase">
                    Custom Property
                    <br />
                    Inspections
                  </h2>
                  <p className="text-[#DCE2E2] text-lg sm:text-xl font-semibold">
                    Track deadlines your way
                  </p>
                  <p className="text-[#DFDFDF] text-sm sm:text-base leading-relaxed max-w-3xl">
                    Create unlimited inspection profiles or templates with bespoke checklists for NYC-mandated deadlines, reminders, or internal processes.
                  </p>
                  <div className="pt-1 text-sm sm:text-base text-[#DCE2E2] leading-relaxed">
                    <p><span className="font-semibold">Unlimited inspections:</span> Fire safety, elevator, plumbing, and more.</p>
                    <p><span className="font-semibold">Photo Uploads:</span> Attach time-stamped images to inspection records.</p>
                    <p><span className="font-semibold">Multi-Step Alerts:</span> Set reminders 30, 15 and 3 days before deadlines.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full mx-auto my-8 sm:my-12 lg:my-20">

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 section-heading-pill py-3 sm:py-4">
            <img src="/pics/alert/247.svg" alt="Inspection Services" className="max-h-[68px] sm:max-h-[90px] lg:max-h-[100px] object-contain" />
            <p>Portal Access: Your Command Center</p>
          </div>
          {/* <Image
            src={section3.div3.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full md:w-[65%] lg:w-[50%] h-auto object-contain object-right-top mb-6 lg:mb-0 mx-auto"
          /> */}
          <div className="space-y-2 2xl:gap-3">
            <p className="text-base text-[#DCE2E2] font-semibold w-full">
              {section3.div3.text1}
            </p>

            <p className="text-base text-[#DFDFDF] w-full">
              {section3.div3.text2}
            </p>

            <span className="text-base text-[#8AD5B7] font-semibold w-full">
              {section3.div3.itemHeading}
            </span>

            <div className="w-full flex flex-col gap-1">
              {section3.div3.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <p className="text-base text-[#DFDFDF]">
                      <span className="text-[#DFDFDF]">
                        {item.split(":")[0] + ": "}
                      </span>
                      {item.substring(item.indexOf(":") + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full sm:w-[90%] lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-10">
            {section3.div3.divList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="glass-morphism-glow p-3 sm:p-4 rounded-xl w-full flex-shrink-0 flex items-center justify-center h-auto"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-[#DFDFDF] text-center">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#1E2322] rounded-[20px] p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full mx-auto">
          <div className="space-y-2 w-full">
            <h2 className="text-[#E4E4E4] uppercase font-conthrax text-3xl lg:text-4xl leading-tight font-semibold text-center">
              {section3.div4.heading}
            </h2>
            <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full text-center">
              {section3.div4.text1}
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 2xl:gap-8">
            <div className="flex flex-col justify-center items-center lg:justify-between gap-5 lg:gap-8 w-full lg:w-[50%]">
              <div className="flex flex-col justify-center items-center lg:justify-start gap-3 p-4 sm:p-6 rounded-[20px] w-full glass-morphism-glow">
                <h3 className="text-xl sm:text-2xl lg:text-3xl uppercase font-poppins font-semibold text-left w-full">
                  {section3.div4.signup_confirm.heading}
                </h3>
                <div className="w-full flex flex-col gap-1">
                  {section3.div4.signup_confirm.items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-start">
                        <DotIcon
                          size={20}
                          className="inline-block flex-shrink-0 text-[#DCE2E2] mt-1 sm:w-6 sm:h-6"
                        />
                        <p className="text-sm sm:text-base text-[#DCE2E2] leading-relaxed">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2]">
                              {item.split(":")[0] + ": "}
                            </span>
                          )}
                          {item.substring(item.indexOf(":") + 1)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:justify-start gap-3 p-4 sm:p-6 rounded-[20px] w-full glass-morphism-glow">
                <h3 className="text-xl sm:text-2xl lg:text-3xl uppercase font-poppins font-semibold text-left w-full">
                  {section3.div4.act_fast.heading}
                </h3>
                <div className="w-full flex flex-col gap-1">
                  {section3.div4.act_fast.items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-start">
                        <DotIcon
                          size={20}
                          className="inline-block flex-shrink-0 mt-1 sm:w-6 sm:h-6"
                        />
                        <p className="text-sm sm:text-base text-[#DCE2E2] leading-relaxed">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2]">
                              {item.split(":")[0] + ": "}
                            </span>
                          )}
                          {item.substring(item.indexOf(":") + 1)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start gap-3 lg:gap-6 p-4 sm:p-6 rounded-[20px] w-full lg:w-[50%] glass-morphism-glow">
              <h3 className="text-xl sm:text-2xl lg:text-3xl uppercase font-poppins font-semibold text-center w-full">
                {section3.div4.monitoring_begins.heading}
              </h3>
              <div className="w-full flex flex-col gap-1">
                {section3.div4.monitoring_begins.items.map((item, index) => {
                  return (
                    <div key={index} className="flex items-start">
                      <DotIcon
                        size={20}
                        className="inline-block flex-shrink-0 mt-1 sm:w-6 sm:h-6"
                      />
                      <p className="text-sm sm:text-base text-[#DCE2E2] leading-relaxed">
                        {item.includes(":") && (
                          <span className="text-[#DCE2E2]">
                            {item.split(":")[0] + ": "}
                          </span>
                        )}
                        {item.substring(item.indexOf(":") + 1)}
                      </p>
                    </div>
                  );
                })}

                <ul className="w-full flex flex-col gap-1 mt-4 sm:mt-6 2xl:mt-10 pl-2 sm:pl-5 2xl:pl-10">
                  {section3.div4.monitoring_begins.list.map((item, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <DotIcon
                          size={20}
                          className="inline-block flex-shrink-0 text-[#DCE2E2] mt-1 sm:w-6 sm:h-6"
                        />
                        <p className="text-sm sm:text-base text-[#DCE2E2] font-semibold leading-relaxed">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2] itlaic">
                              {item.split(":")[0] + ": "}
                            </span>
                          )}
                          {item.substring(item.indexOf(":") + 1)}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Pricing plans and enrollment CTA */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-6 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-8">
        <h2 className="section-heading-pill">
          {section4.div1.heading}
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 2xl:gap-8 w-full mx-auto">
          <div className="flex-shrink-0">
            <div className="bg-[#8AD5B7] w-full mx-auto text-[#DCE2E2] h-2 my-6 lg:my-10"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-4 sm:gap-6 2xl:gap-12 w-full mx-auto">
            <div className="glass-morphism-glow p-4 sm:p-8 lg:p-16 rounded-[20px] flex-shrink-0 flex flex-col gap-3 md:gap-6 items-start justify-start h-auto w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl p-3 text-[#DCE2E2] font-semibold font-poppins uppercase text-center w-full bg-[#1E2322] rounded-[16px] ">
                {section4.div1.left.heading}
              </h2>
              <div>
                <div className="flex flex-col items-start pb-6 sm:pb-10 lg:pb-12 pt-4 sm:pt-6">
                  <div className="flex flex-row items-center gap-1">
                    <span className="text-xl sm:text-2xl mb-3 sm:mb-4 font-poppins">$</span>
                    <h1 className="text-[44px] sm:text-[60px] font-semibold font-poppins">0.00</h1>
                    <span className="text-xl sm:text-2xl mt-3 sm:mt-4 font-poppins">/month</span>
                  </div>
                  <p className="text-base sm:text-xl text-[#DCE2E2] -mt-2 sm:-mt-4 font-semibold">(First 3 Months)</p>
                  <p className="text-sm sm:text-base text-[#DCE2E2] w-full leading-relaxed">For unlimited alerts and mobile app access.</p>
                </div>

                <span className="text-base sm:text-lg lg:text-2xl font-semibold text-[#8AD5B7] w-full">
                  {section4.div1.left.text2}
                </span>
                <ul className="w-full flex flex-col gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
                  {section4.div1.left.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#DFDFDF] font-normal leading-relaxed"
                      >
                        <Check
                          size={24}
                          className="text-[#8AD5B7] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="glass-morphism-glow p-4 sm:p-8 lg:p-16 rounded-[20px] flex-shrink-0 flex flex-col gap-3 md:gap-6 items-start justify-start h-auto w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl p-3 text-[#DCE2E2] font-semibold font-poppins uppercase text-center w-full bg-[#1E2322] rounded-[16px] ">
                {section4.div1.right.heading}
              </h2>
              <div>
                <div className="flex flex-col items-start pb-6 sm:pb-10 lg:pb-12 pt-4 sm:pt-6">
                  <div className="flex flex-row items-center gap-1">
                    <span className="text-xl sm:text-2xl mb-3 sm:mb-4 font-poppins">$</span>
                    <h1 className="text-[44px] sm:text-[60px] font-semibold font-poppins">9.00</h1>
                    <span className="text-xl sm:text-2xl mt-3 sm:mt-4 font-poppins">/month</span>
                  </div>
                  <p className="text-base sm:text-xl text-[#DCE2E2] -mt-2 sm:-mt-4 font-semibold">{section4.div1.right.text}</p>
                </div>

                <span className="text-base sm:text-lg lg:text-2xl font-semibold text-[#8AD5B7] w-full">
                  {section4.div1.right.text2}
                </span>
                <ul className="w-full flex flex-col gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
                  {section4.div1.right.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#DFDFDF] font-normal leading-relaxed"
                      >
                        <Check
                          size={24}
                          className="text-[#8AD5B7] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full mx-auto rounded-xl bg-[#1E2322] p-4 sm:p-6 md:p-10 lg:p-16 my-8 sm:my-12 lg:my-20">

          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-center font-semibold text-[#E4E4E4] font-conthrax">
                {section4.div2.heading}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#DCE2E2] w-full lg:w-1/2 mx-auto text-center lg:text-left leading-relaxed">
              {section4.div3.text}
            </p>
          </div>

          <div className="w-3/5 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#8AD5B7]/80 to-transparent my-4 sm:my-6"></div>

          <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8">
            {/* <p className="text-base text-[#DCE2E2] w-full text-center mx-auto">
              {section4.div3.text}
            </p> */}
            <div className="flex flex-col gap-1 w-full">
              {section4.div2.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start w-full"
                  >
                    <DotIcon
                      size={20}
                      className="inline-block mr-2 mt-1 flex-shrink-0 text-[#DFDFDF] sm:w-6 sm:h-6"
                    />
                    <p className="text-sm sm:text-base text-[#DFDFDF] leading-relaxed">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>

            <CTA2
                text="GET STARTED NOW"
                isArrow={false}
                href="/alert"
                styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#FF4B4E] mx-auto text-white px-6 py-2 text-sm font-semibold sm:whitespace-nowrap hover:brightness-105 hover:text-black transition lg:text-base font-conthrax `}
              />
          </div>
        </div>
      </section>

      <ImageCarousel />

      <style jsx global>{`
        .alert-carousel-dots {
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .alert-carousel-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }

        .alert-carousel-dot {
          width: 6px !important;
          height: 6px !important;
          border-radius: 9999px;
          border: 0;
          padding: 0;
          cursor: pointer;
          transition: all 180ms ease;
          background: #ffffff !important;
        }

        .alert-carousel-dots li.slick-active .alert-carousel-dot {
          background: #8ad5b7 !important;
          transform: scale(1.15);
          
        }

        .alert-carousel-dots li button:before {
          display: none !important;
          
        }
      `}</style>
    </div>
  );
};

export default Page;
