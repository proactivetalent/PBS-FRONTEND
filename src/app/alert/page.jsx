"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import { section01, section2, section3, section4 } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "@/components/ImageCarousel";

const Page = () => {

  return (
    <div className="bg-[#37403D]">
      {/* Hero Section */}
      <HeroSection
        heading="Real-Time Compliance Alerts for NYC Property Professionals"
        text="Stay Ahead of Deadlines, Violations, and Zoning Changes with NYC’s Most Advanced Property Management & Alert Service Platform"
        className="font-conthrax max-w-[90%] md:max-w-full xl:max-w-[95%] text-2xl sm:text-3xl 4xl:max-w-[70%] lg:text-4xl xl:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold"
        img="/pics/alert-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] lg:w-[40%] 2xl:w-[30%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          Alert System
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 md:pt-16 lg:pt-24 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-6 2xl:gap-8 w-full">
          <h2 className="text-[#8AD5B7] font-conthrax text-3xl xl:text-5xl font-semibold text-center">
            {section01.div1.heading}
          </h2>
          <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-semibold text-center">
            {section01.div1.text1}
          </p>
          <CTA2
            isArrow={false}
            text={section01.div1.CTA.text}
            href={section01.div1.CTA.link}
            styling={`w-auto mt-3 mx-auto rounded-xl h-12 bg-[#8AD5B7] text-[#1E2322] px-3 2xl:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}
          />
          <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center max-w-md mx-auto">
            {section01.div1.text2}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch 2xl:items-center justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <div className="w-full md:w-[80%] lg:w-[60%] 2xl:max-w-[50%] 3xl:max-w-[40%] flex flex-col justify-center items-start 2xl:justify-center gap-6 p-6 rounded-2xl">
            <h2 className="text-[#8AD5B7] font-conthrax text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center lg:text-left xl:max-w-[90%] ml-0">
              {section01.div2.heading}
            </h2>
            <p className="text-[#DCE2E2] text-lg lg:text-xl xl:text-2xl font-semibold text-center lg:text-left w-full">
              {section01.div2.text1}
            </p>
            <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center lg:text-left">
              {section01.div2.text2}
            </p>
          </div>
          <Image
            src="/pics/alert-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full md:w-[50%] lg:w-[40%] 2xl:w-[35%] 3xl:w-[30%] h-auto object-contain object-right-top mb-6 lg:mb-0 lg:mx-0 mx-auto"
          /> 
        </div>

        <div>
          <img
            src="/pics/alert-pic2.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full hidden lg:block h-auto object-contain 2xl:object-cover object-right-top mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            {section01.div2.imgArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-3 2xl:gap-8 w-full"
                >
                  <img
                    src={item.img} 
                    alt="Inspection Services"
                    width={500}
                    height={500}
                    className="w-full block lg:hidden h-auto object-contain object-right-top rounded-[16%] lg:mx-0 mx-auto mix-blend-luminosity"
                  />

                  <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center flex flex-col items-center min-h-[40%] lg:h-auto">
                    <span className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] itlaic">
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

      {/* Section 02 */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 md:pt-16 lg:pt-16 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 2xl:gap-8 w-full md:w-[90%] mx-auto">
            <div className="flex justify-center items-center">
              <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax">
                {section2.div1.heading}
              </h2>
            </div>

            <div className="bg-[#2E3734] p-6 rounded-2xl flex flex-col justify-center gap-2">
              {section2.div1.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <DotIcon
                      size={32}
                      className="inline-block mr-2 flex-shrink-0"
                    />
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
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
          <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold text-center max-w-3xl mx-auto">
            {section2.div1.text}
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 2xl:gap-8">
          <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-6 2xl:gap-8 mx-auto">
            <Image
              src="/pics/alert-pic11.png"
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-full md:w-[50%] lg:w-[40%] 2xl:w-[35%] 3xl:w-[30%] h-full object-cover object-right-top mb-6 lg:mb-0 lg:mx-0 mx-auto"
            />
            <div className="w-2 flex-shrink-0 bg-[#8AD5B7] my-10 hidden lg:block"></div>
            <div className="w-full lg:w-[60%] 2xl:w-[45%] 3xl:w-[40%] flex flex-col justify-center items-center lg:items-start">
              <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight xl:max-w-3xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax ">
                {section2.div2.heading}
              </h2>
              <div className="mt-3 text-center lg:text-left">
                <span className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold">
                  {section2.div2.text1}
                </span>
                <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold lg:max-w-lg">
                  {section2.div2.text2}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center lg:items-end 4xl:items-center justify-start gap-8 2xl:gap-16 w-full">
            <div className="w-full flex flex-col justify-center items-center md:items-center gap-8 ">
              <h2 className="text-3xl lg:text-4xl xl:text-[40px] xl:leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax">
                {section2.div2.title}
              </h2>
              <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-stretch gap-6 2xl:gap-10">
                {section2.div2.items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full sm:w-[45%] lg:w-[30%] space-y-4`}
                    >
                      <img
                        src={item.img}
                        alt="image"
                        className="w-[70%] sm:w-[85%] mx-auto aspect-square rounded-lg"
                      />
                      <p className="w-full text-base lg:text-lg 2xl:text-xl text-[#89A096] text-center flex flex-col items-center gap-1 font-semibold">
                        <span className="text-[#DCE2E2] itlaic text-lg lg:text-xl 2xl:text-2xl">
                          {item.text.split(":")[0]}
                        </span>
                        {item.text.substring(item.text.indexOf(":") + 1)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Div 3 */}
      <section className="w-full flex flex-col items-start justify-center gap-6 2xl:gap-8 font-semibold bg-[#1E2322] py-6 lg:py-10 mt-6 lg:mt-10">
        <div className="w-[95%] mx-auto">
          <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight xl:max-w-3xl mx-auto text-center font-semibold text-[#8AD5B7] font-conthrax">
            {section2.div3.heading}
          </h2>
          <div className="mt-3">
            <span className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2]">
              {section2.div3.text1}
            </span>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096]">
              {section2.div3.text2}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-2 w-[95%] mx-auto">
          {section2.div3.items.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2 justify-start">
                <DotIcon
                  size={32}
                  className="inline-block flex-shrink-0 text-[#DCE2E2]"
                />
                <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
                  <span className="text-[#DCE2E2] itlaic">
                    {item.split(":")[0] + ": "}
                  </span>
                  {item.substring(item.indexOf(":") + 1)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 03 */}
      <section className=" flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full">
          <h2 className="text-[#8AD5B7] font-conthrax text-[30px] lg:text-[36px] 2xl:text-[40px] leading-tight font-semibold text-center mx-auto xl:max-w-xl">
            {section3.div1.heading}
          </h2>
          <div className="px-6 md:px-10 xl:px-16 space-y-1 text-center">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full">
              {section3.div1.text1}
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              {section3.div1.text2}
            </p>
          </div>

          <div className="w-full flex flex-col">
            <div className="overflow-hidden">
              <img
                src="/pics/alert-pic17.png"
                alt="computer"
                className="object-contain my-6 w-full"
              />
            </div>

            <div className="overflow-hidden">
              <img
                src="/pics/alert-pic18.png"
                alt="computer"
                className="object-contain my-6 w-full lg:w-[80%] mx-auto"
                quality={100}
              />
            </div>

            <div className="overflow-hidden">
              <img
                src="/pics/alert-pic19.png"
                alt="computer"
                className="px-6 md:px-10 xl:px-16 object-contain my-6 w-full mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full md:w-[90%] xl:w-[80%] mx-auto bg-[url('/pics/alert-pic20.png')] bg-cover bg-no-repeat bg-center rounded-2xl p-6">
          <Image
            src={section3.div3.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-full md:w-[65%] lg:w-[50%] h-auto object-contain object-right-top mb-6 lg:mb-0 mx-auto"
          />
          <div className="space-y-2 2xl:gap-3">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full">
              {section3.div3.text1}
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              {section3.div3.text2}
            </p>

            <span className="text-lg lg:text-xl xl:text-2xl text-[#8AD5B7] font-semibold w-full">
              {section3.div3.itemHeading}
            </span>

            <div className="w-full flex flex-col gap-1">
              {section3.div3.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
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

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10">
            {section3.div3.divList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#1E2322] p-3 rounded-xl w-full flex-shrink-0 flex items-center justify-center h-auto"
                >
                  <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] text-center">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#1E2322] p-10 md:p-16 flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full mx-auto">
          <div className="space-y-2 w-full">
            <h2 className="text-[#8AD5B7] font-conthrax text-3xl lg:text-4xl xl:text-[40px] leading-tight font-semibold text-center">
              {section3.div4.heading}
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full text-center">
              {section3.div4.text1}
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 2xl:gap-8">
            <div className="flex flex-col justify-center items-center lg:justify-between gap-5 lg:gap-8 w-full lg:w-[50%]">
              <div className="flex flex-col justify-center items-center lg:justify-start gap-3 p-6 rounded-3xl w-full bg-[#2B3331]">
                <h3 className="text-2xl lg:text-3xl font-semibold text-left w-full">
                  {section3.div4.signup_confirm.heading}
                </h3>
                <div className="w-full flex flex-col gap-1">
                  {section3.div4.signup_confirm.items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-start">
                        <DotIcon
                          size={32}
                          className="inline-block mr-2 flex-shrink-0 text-[#89A096]"
                        />
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2] itlaic">
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
              <div className="flex flex-col justify-center items-center lg:justify-start gap-3 p-6 rounded-3xl w-full bg-[#2B3331]">
                <h3 className="text-2xl lg:text-3xl font-semibold text-left w-full">
                  {section3.div4.act_fast.heading}
                </h3>
                <div className="w-full flex flex-col gap-1">
                  {section3.div4.act_fast.items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-start">
                        <DotIcon
                          size={32}
                          className="inline-block mr-2 flex-shrink-0"
                        />
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2] itlaic">
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
            <div className="flex flex-col justify-center items-center lg:justify-start gap-3 lg:gap-6 p-6 rounded-3xl w-full lg:w-[50%] bg-[#2B3331]">
              <h3 className="text-2xl lg:text-3xl font-semibold text-center w-full">
                {section3.div4.monitoring_begins.heading}
              </h3>
              <div className="w-full flex flex-col gap-1">
                {section3.div4.monitoring_begins.items.map((item, index) => {
                  return (
                    <div key={index} className="flex items-start">
                      <DotIcon
                        size={32}
                        className="inline-block mr-2 flex-shrink-0"
                      />
                      <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                        {item.includes(":") && (
                          <span className="text-[#DCE2E2] itlaic">
                            {item.split(":")[0] + ": "}
                          </span>
                        )}
                        {item.substring(item.indexOf(":") + 1)}
                      </p>
                    </div>
                  );
                })}

                <ul className="w-full flex flex-col gap-1 mt-6 2xl:mt-10 pl-5 2xl:pl-10">
                  {section3.div4.monitoring_begins.list.map((item, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <DotIcon
                          size={32}
                          className="inline-block mr-2 flex-shrink-0 text-[#89A096]"
                        />
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
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

      {/* Section 04 */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 2xl:gap-8 w-full mx-auto">
          <div className="flex-shrink-0">
            <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax  lg:max-w-lg lg:mx-auto">
              {section4.div1.heading}
            </h2>
            <div className="bg-[#8AD5B7] w-full mx-auto text-[#DCE2E2] h-2 my-6 lg:my-10"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 2xl:gap-8 w-full mx-auto">
            <div className="bg-[#2C3432] p-6 rounded-2xl flex-shrink-0 flex flex-col gap-3 md:gap-6 items-center justify-start h-auto w-[80%] md:w-1/2">
              <h2 className="text-2xl xl:text-3xl p-3 text-[#DCE2E2] text-center bg-[#1E2322] rounded-lg ">
                {section4.div1.left.heading}
              </h2>
              <div>
                <p className="text-lg lg:text-xl font-semibold text-[#89A096]">
                  {section4.div1.left.text1}
                </p>
                <span className="text-lg lg:text-xl font-semibold text-[#DCE2E2] w-full">
                  {section4.div1.left.text2}
                </span>
                <div className="w-full flex flex-col gap-1">
                  {section4.div1.left.items.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold"
                      >
                        {item.includes(":") && (
                          <span className="text-[#DCE2E2] itlaic">
                            {item.split(":")[0] + ": "}
                          </span>
                        )}
                        {item.substring(item.indexOf(":") + 1)}
                      </p>
                    );
                  })} 
                </div>
              </div>
            </div>

            <div className="bg-[#2C3432] p-6 rounded-2xl flex-shrink-0 flex flex-col gap-3 md:gap-6 items-center justify-start h-auto w-[80%] md:w-1/2">
              <h2 className="text-2xl xl:text-3xl p-3 text-[#DCE2E2] text-center bg-[#1E2322] rounded-lg ">
                {section4.div1.right.heading}
              </h2>
              <div>
                <span className="text-lg lg:text-xl font-semibold text-[#DCE2E2] w-full">
                  {section4.div1.right.text}
                </span>

                <div className="w-full flex flex-col gap-1">
                  {section4.div1.right.items.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 2xl:gap-8 w-full mx-auto rounded-xl">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax  lg:max-w-lg lg:mx-auto">
              {section4.div2.heading}
            </h2>
          </div>

          <div className="flex flex-col gap-1 w-full lg:w-1/2">
            {section4.div2.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start lg:max-w-[80%] 3xl:max-w-[90%]"
                >
                  <DotIcon
                    size={32}
                    className="inline-block mr-2 flex-shrink-0 text-[#89A096]"
                  />
                  <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold max-w-2xl text-center mx-auto">
          {section4.div3.text}
        </p>

        <CTA2
          isArrow={false}
          text="Register Now"
          href={section01.div1.CTA.link}
          styling={`w-auto mx-auto mt-0 mb-10 rounded-xl h-12 bg-[#8AD5B7] text-[#1E2322] px-3 2xl:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}
        />
      </section>

      <ImageCarousel />
    </div>
  );
};

export default Page;
