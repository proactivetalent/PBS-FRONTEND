"use client";
import HeroSection from "../../components/HeroSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";
import {projects, challenges, howWeWork, whyChoosePBS } from "./data";

// Register GSAP ScrollTrigger (if used)
gsap.registerPlugin(ScrollTrigger);

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
        heading="Your Trusted Partner in Property Advocacy & Strategic Management"
        text="Focus on your Vision, We’ll handle the Complexity"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/owner-representative-hero.png"
      />

        {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] lg:w-[50%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-3xl z-20">
          Owner Representative
        </div>
      </div>

      {/* Section 01 */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-16 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 sm:gap-6 w-full pt-8">
          <Image
            src="/pics/owner-repre-1.png"
            alt="owner representative"
            width={500}
            height={500}
            className="w-[80%] lg:w-[40%] 2xl:w-[30%] 3xl:w-[25%] h-auto lg:object-contain xl:object-cover object-center rounded-lg mb-4 sm:mb-6 lg:mb-0 mx-auto"
          />
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4 sm:px-0">
            <h1 className="text-[#8AD5B7] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-conthrax mb-2 leading-tight">
              Owner Representative
            </h1>
            <div className="bg-[#8AD5B7] w-full sm:w-[60%] md:w-[50%] lg:w-[40%] text-[#DCE2E2] h-2 mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-justify font-semibold leading-loose">
              <span className="text-[#8AD5B7]">Property ownership</span> -
              whether residential, commercial, or mixed-use, is a rewarding
              investment, but it comes with layers of complexity. Between
              changing regulations, managing relationships, overseeing
              contractors, and balancing budgets, the demands can quickly
              overshadow your goals as owner. That’s where PBS as an Owner
              representative steps in.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mx-auto mt-10 sm:mt-16 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 sm:gap-12 w-full mb-8 sm:mb-10">
            <Image
              src="/pics/owner-repre-2.png"
              alt="owner representative"
              width={500}
              height={500}
              className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-auto object-contain rounded-lg mb-4 sm:mb-6 lg:mb-0 mx-auto"
            />
            <div className="text-left w-full lg:w-[50%] flex flex-col items-start justify-center gap-4 sm:gap-6 px-4 sm:px-0">
              <h2 className="text-[#8AD5B7] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-conthrax mb-3 leading-tight w-full text-center lg:text-left">
                Hire an Owner Representative
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#DCE2E2] text-center lg:text-justify font-semibold leading-loose">
                Property Ownership in NYC Comes with labyrinth regulations,
                tight deadlines, and hidden risks. Property ownership in NYC
                shouldn’t feel like a Maze.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full">
            <h4 className="text-[#8AD5B7] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-conthrax">
              PBS Simplifies it all by
            </h4>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 sm:gap-8 w-full">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-1/2"
                >
                  <h3 className="text-[#DCE2E2] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    {challenge.heading}
                  </h3>
                  <div className="flex flex-col gap-2 sm:gap-3 w-full">
                    {challenge.items.map((item, idx) => (
                      <div
                        className="text-base sm:text-lg md:text-lg lg:text-xl text-[#DCE2E2] font-semibold bg-[#1E232261] border-2 border-[#8AD5B7] rounded-lg p-2 sm:p-3 text-center"
                        key={idx}
                        onClick={() => handleNavigation("/some-path")}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-8 sm:pb-10 lg:pt-5 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full mb-4 sm:mb-6">
          <h2 className="text-[#DCE2E2] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-conthrax font-semibold">
            What We Do
          </h2>
          <span className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-[#DCE2E2]">
            Your Full-Circle Property Partner
          </span>
        </div>

        <p className="text-center text-[#89A096] text-base sm:text-lg md:text-xl lg:text-xl font-semibold">
          We act as your dedicated advocate and strategic partner, handling the
          day-to-day intricacies of property management so you can focus on
          scaling your portfolio, optimizing returns, or simply reclaiming your
          time. We bridge the gap between ownership and execution, combining
          knowledge of agencies, compliance, market trends and industry best
          practices to protect your assets and amplify their value.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start gap-8 sm:gap-12 w-full mt-8 sm:mt-10">
          <div className="w-full flex flex-col items-center justify-start gap-3 sm:gap-4">
            <h3 className="bg-[#1E2322] p-2 sm:p-3 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#8AD5B7] font-conthrax text-center lg:text-left">
              Compliance & Risk Management
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-lg lg:text-xl text-[#89A096] font-semibold p-3 sm:p-4 flex flex-col gap-1 sm:gap-2">
              <li className="flex gap-2 items-center">
                <DotIcon size={24} />
                No Violations, No Stress
              </li>
              <li className="flex gap-2 items-center">
                <DotIcon size={24} />
                Guaranteed NYC code compliance
              </li>
              <li className="flex gap-2 items-center">
                <DotIcon size={24} />
                Permit filing + agency coordination
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center justify-start gap-3 sm:gap-4">
            <h3 className="bg-[#1E2322] p-2 sm:p-3 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#8AD5B7] font-conthrax text-center lg:text-left">
              Financial Oversight & Savings
            </h3>
            <ul className="text-base sm:text-lg md:text-lg lg:text-xl text-[#89A096] font-semibold p-3 sm:p-4 flex flex-col gap-1 sm:gap-2">
              <li className="flex gap-2 items-center">
                <DotIcon size={24} />
                Audit Contractor bids to eliminate overcharges
              </li>
              <li className="flex gap-2 items-center">
                <DotIcon size={24} />
                Bid audits + Identity Tax incentives
              </li>
              <li className="flex gap-2 items-center">
                <DotIcon size={24} />
                Resolve Violations before they escalate into costly fines
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start gap-8 sm:gap-12 w-full mt-8 sm:mt-10">
          <div className="bg-[#2E3734] w-full flex flex-col items-center justify-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold font-conthrax text-[#DCE2E2]">
              How We Work
            </h2>
            <div>
              {howWeWork.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#89A096] font-semibold"
                >
                  <div className="bg-[#1E2322] rounded-lg p-3 sm:p-4 text-center w-full">
                    {item}
                  </div>
                  {index !== howWeWork.length - 1 && (
                    <div className="h-8 sm:h-12 lg:h-16 w-1 bg-[#8AD5B7]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 w-full">
            <div className="w-full flex flex-col items-start justify-start gap-3 sm:gap-4">
              <h3 className="bg-[#1E2322] p-3 sm:p-4 md:p-6 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#8AD5B7] font-conthrax text-center w-full">
                Strategic Advocacy
              </h3>
              <ul className="text-base sm:text-lg md:text-lg lg:text-xl text-[#89A096] font-semibold p-3 sm:p-4 flex flex-col gap-1 sm:gap-2">
                <li className="flex gap-2 items-center">
                  <DotIcon size={24} className="flex-shrink-0" />
                  We fight for your interests
                </li>
                <li className="flex gap-2 items-center">
                  <DotIcon size={24} className="flex-shrink-0" />
                  Represent you in meetings with NYC Departments or Tenants
                </li>
                <li className="flex gap-2 items-center">
                  <DotIcon size={24} className="flex-shrink-0" />
                  Manage Tenant disputes and Lease negotiations
                </li>
                <li className="flex gap-2 items-center">
                  <DotIcon size={24} className="flex-shrink-0" />
                  Coordinate repairs, upgrades, and capital Projects
                </li>
              </ul>
            </div>

            <div className="h-1 w-[40%] sm:w-[30%] bg-[#DCE2E2] mx-auto"></div>

            <p className="text-[#8AD5B7] text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
              PBS Owner Representatives act as your eyes, ears, and voice,
              ensuring compliance, cost efficiency, and seamless operations for
              your property
            </p>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 text-[#DCE2E2]">
        {/* Dark Background Div */}
        <div
          className="w-full 2xl:w-[70%] mx-auto lg:flex-1 flex flex-col lg:flex-row justify-between items-stretch text-left rounded-2xl bg-[#89A096] bg-opacity-5 p-4 lg:p-8 box-border shadow-lg hover:shadow-xl transition-all duration-300 mb-10 lg:mb-16"
          style={{
            backgroundImage: `url('/pics/owner-repre-3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale: "crop",
            backgroundBlendMode: "luminosity",
          }}
        >
          <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-3 mb-4 lg:mb-0">
            <h2 className="text-xl sm:text-2xl xl:text-4xl w-full text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7]">
              Why Choose PBS
            </h2>
            <p className="w-full text-center lg:text-left text-sm sm:text-base font-semibold text-[#DCE2E2]">
              30+ years Protecting NYC Owners
            </p>
          </div>

          <div className="w-full lg:w-2 flex justify-center items-center mb-4 lg:mb-0">
            <div className="w-full h-1 lg:h-2/3 bg-[#8AD5B7]"></div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-3">
            {whyChoosePBS.map((item, index) => (
              <p className="font-semibold text-[#89A096] mb-2 flex-1 justify-start items-center gap-2" key={index}>
              <span className="font-semibold text-[#DCE2E2] text-nowrap">
                {item.trim().split(":")[0] + "- "}
              </span>
              <span className="">
              {item.trim().split(":")[1]}
              </span>
            </p>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full lg:w-[90%] mx-auto">
            <Image  
              src="/pics/owner-repre-4.png"
              alt="Inspection Services"
              width={500}
              height={500}
              className="pt-[30px] lg:pt-[48px] w-[80%] lg:w-[40%] 2xl:w-[20%] h-auto object-contain rounded-lg mb-6 lg:mb-0 lg:mx-0 mx-auto"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4 lg:px-0">
              <h1 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-6">
                Our Promise
              </h1>
              <p className="text-base lg:text-xl font-semibold text-[#89A096] text-center lg:text-left">
                With decades of experience and a network of trusted
                professionals, we don’t just manage properties, we safeguard
                your investment and empower your vision. No matter if you are an
                out-of-state investor, busy professional, portfolio owner
                looking for streamlined operations, our solutions ensure your
                properties run smoothly, profitably, and stress-free.
              </p>
            </div>
          </div>

          <div className="w-[25%] h-1 bg-[#DCE2E2] mx-auto my-10"></div>

          <p className="text-[#DCE2E2] text-lg lg:text-xl font-semibold text-center">
            Ready to Reclaim your Time?
          </p>

          <div className="w-full py-6 px-6 lg:px-16">
            <p className="text-[#89A096] text-lg lg:text-2xl font-semibold text-center mb-10">
              Stop juggling spreadsheets, midnight repair calls, and
              bureaucratic red tape, and contractors. Let PBS protect your
              investment and peace of mind
            </p>
            <div className="max-w-4xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 items-center justify-center">
              <CTA2
                text="Get Started today"
                isArrow={false}
                href="/contacts"
                styling={`w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
              />
              {/* <CTA2
                text="Call Our Inspectors (914-316-6956)"
                isArrow={false}
                href="/contacts"
                styling={`w-[90%] md:w-2/3 lg:w-1/2 mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
              /> */}
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel/>
    </div>
  );
};

export default Page;
