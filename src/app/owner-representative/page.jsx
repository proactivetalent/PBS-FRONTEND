"use client";
import HeroSection from "../../components/HeroSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";
import { projects, challenges, howWeWork, whyChoosePBS } from "./data";

// Register GSAP ScrollTrigger (if used)
gsap.registerPlugin(ScrollTrigger);

const Page = () => {

  return (
    <div
      className="bg-[#2B3331]"
      style={{
        backgroundImage: `url('')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero: Owner representative service overview */}
      <HeroSection
        heading="Your Trusted Partner in Property Advocacy & Strategic Management"
        text="Focus on your Vision, We’ll handle the Complexity"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl font-semibold"
        bgStyle="bg-right bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base font-semibold text-[#89A096]"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="Owner Representative"
      />

      {/* Section 01: Owner representation intro and challenge framing */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-16 text-[#DCE2E2] ">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 sm:gap-8 w-full pt-4 sm:pt-8 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto">
          <div
            className="relative w-full lg:w-[40%] rounded-2xl overflow-hidden border border-transparent shadow-[0_0_20px_rgba(138,213,183,0.12)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,213,183,0.24)]"
          >
            <div
              className="glass-morphism-glow"
            >
              <Image
                src="/pics/owner-repre-1.png"
                alt="owner representative"
                width={500}
                height={500}
                className="w-full h-auto object-cover object-center rounded-lg mx-auto"
              />
            </div>
          </div>
          {/* Intro content card */}
          
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left bg-[#1E2322] p-6 sm:p-8 md:p-10 lg:p-20 rounded-[16px]">
            <h1 className="text-[#E4E4E4] text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold font-conthrax mb-2 leading-tight uppercase">
              Owner Representative
            </h1>
            <p className="text-base text-center lg:text-justify font-normal text-[#DCE2E2]">
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

        <div className="lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mt-10 sm:mt-16 flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 sm:gap-12 w-full mb-8 sm:mb-10">

            <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#1E2322] p-10 rounded-[16px]">
              <h2 className="text-[#E4E4E4] text-2xl sm:text-3xl md:text-4xl font-semibold font-conthrax leading-tight w-full text-center uppercase">
                Why Hire an Owner Representative?
              </h2>
              <p className="text-base text-[#DCE2E2] lg:text-justify font-normal leading-loose text-center">
                Property Ownership in NYC Comes with labyrinth regulations,
                tight deadlines, and hidden risks. Property ownership in NYC
                shouldn’t feel like a Maze.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mt-12">
            <h4 className="text-[#E4E4E4] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-conthrax bg-[#1E2322] w-full text-center uppercase p-6 rounded-[16px]">
              PBS Simplifies it all
            </h4>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 sm:gap-8 w-full lg:w-2/3">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full lg:w-1/2"
                >
                  <h3 className="text-[#8AD5B7] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                    {challenge.heading}
                  </h3>
                  <div className="flex flex-col gap-2 sm:gap-3 w-full">
                    {challenge.items.map((item, idx) => (
                      <div
                        className="
                      text-base text-[#DCE2E2]/90 font-normal rounded-[20px] p-2 sm:p-3 text-center relative bg-white/5 glass-morphism-glow">
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

      {/* Section 02: Service pillars and strategic support scope */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-8 sm:pb-10 lg:pt-5 text-[#DCE2E2]">
        <div className="lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-4 sm:mb-6">
          <h2 className="w-full bg-[#1E2322] rounded-[16px] p-4 sm:p-6 text-[#DCE2E2] text-2xl sm:text-3xl md:text-4xl font-conthrax font-semibold uppercase text-center">
            What We Do
          </h2>
          <span className="text-base font-semibold text-[#DCE2E2] text-center">
            Your Full-Circle Property Partner
          </span>
        </div>

        <p className="text-center text-[#DFDFDF] text-sm sm:text-base font-normal max-w-4xl mx-auto">
          We act as your dedicated advocate and strategic partner, handling the
          day-to-day intricacies of property management so you can focus on
          scaling your portfolio, optimizing returns, or simply reclaiming your
          time. We bridge the gap between ownership and execution, combining
          knowledge of agencies, compliance, market trends and industry best
          practices to protect your assets and amplify their value.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start gap-8 sm:gap-12 w-full mt-8 sm:mt-10">
          <div className="w-full flex flex-col items-center justify-center mx-auto gap-3 sm:gap-4 text-base text-[#DCE2E2]/90 font-normal rounded-[20px] p-2 sm:p-3 text-center relative glass-morphism-glow">
            <h3 className="p-2 sm:p-3 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#8AD5B7] font-conthrax text-center lg:text-left uppercase">
              Compliance & Risk Management
            </h3>
            <ul className="w-full self-start list-disc list-outside pl-6 sm:pl-10 space-y-2 text-sm sm:text-base text-[#89A096] font-normal text-left">
              <li>
                No Violations, No Stress
              </li>
              <li>
                Guaranteed NYC code compliance
              </li>
              <li>
                Permit filing + agency coordination
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto gap-3 sm:gap-4 text-base text-[#DCE2E2]/90 font-normal rounded-[20px] p-2 sm:p-3 text-center relative glass-morphism-glow">
            <h3 className="p-2 sm:p-3 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#8AD5B7] font-conthrax text-center lg:text-left">
              Financial Oversight & Savings
            </h3>
            <ul className="w-full self-start list-disc list-outside pl-6 sm:pl-10 space-y-2 text-sm sm:text-base text-[#89A096] font-normal text-left">
              <li>
                Audit Contractor bids to eliminate overcharges
              </li>
              <li>
                Bid audits + Identity Tax incentives
              </li>
              <li>
                Resolve Violations before they escalate into costly fines
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start gap-8 sm:gap-12 w-full mt-8 sm:mt-10">
          <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 w-full">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mx-auto mb-10 gap-3 sm:gap-4 text-base text-[#DCE2E2]/90 font-normal rounded-[20px] p-2 sm:p-3 text-center relative glass-morphism-glow">
              <h3 className="p-2 sm:p-3 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#8AD5B7] font-conthrax text-center w-full">
                Strategic Advocacy
              </h3>
              <ul className="w-full self-start list-disc list-outside pl-6 sm:pl-10 space-y-2 text-sm sm:text-base text-[#89A096] font-normal text-left">
                <li>
                  We fight for your interests
                </li>
                <li>
                  Represent you in meetings with NYC Departments or Tenants
                </li>
                <li>
                  Manage Tenant disputes and Lease negotiations
                </li>
                <li>
                  Coordinate repairs, upgrades, and capital Projects
                </li>
              </ul>
            </div>

            <p className="text-[#8AD5B7] text-sm sm:text-base font-normal text-center mx-auto">
              PBS Owner Representatives act as your eyes, ears, and voice,
              ensuring compliance, cost efficiency, and seamless operations for
              your property
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* How We Work: desktop stepped flow and mobile stacked flow */}
      <div className="w-full lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto flex flex-col items-center justify-start gap-3 sm:gap-4 rounded-[16px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-[#E4E4E4] text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold font-conthrax uppercase mb-2 sm:mb-4 bg-[#1E2322] p-4 sm:p-6 rounded-[16px] w-full text-center">
          How We Work
        </h2>
        <div className="w-full mx-auto my-8 sm:my-10 lg:my-14">
          <div className="hidden lg:block relative h-[220px]">
            <div className="absolute left-0 top-0 z-10 w-[280px] lg:w-[320px] bg-[#1E2322] rounded-xl px-4 py-5 text-center text-lg text-[#DCE2E2] font-semibold shadow-md">
              {howWeWork[0]}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[58px] lg:top-[62px] z-10 w-[280px] lg:w-[320px] bg-[#1E2322] rounded-xl px-4 py-5 text-center text-lg text-[#DCE2E2] font-semibold shadow-md">
              {howWeWork[1]}
            </div>
            <div className="absolute right-0 top-[116px] lg:top-[124px] z-10 w-[280px] lg:w-[320px] bg-[#1E2322] rounded-xl px-4 py-5 text-center text-lg text-[#DCE2E2] font-semibold shadow-md">
              {howWeWork[2]}
            </div>

            <div className="absolute left-[24%] top-[30px] z-0 w-[26%] h-[62px] lg:h-[68px] border-t-2 border-r-2 border-[#8AD5B7] rounded-tr-sm" />
            <div className="absolute left-1/2 top-[120px] z-0 h-[34px] border-l-2 border-[#8AD5B7]" />
            <div className="absolute left-1/2 top-[154px] z-0 w-[calc(50%-280px)] lg:w-[calc(50%-320px)] border-t-2 border-[#8AD5B7]" />
          </div>

          <div className="lg:hidden flex flex-col items-center gap-4 sm:gap-5 w-full">
            {howWeWork.map((item, index) => (
              <div key={index} className="w-full flex flex-col items-center">
                <div className="w-full bg-[#1E2322] rounded-xl px-4 sm:px-5 py-4 sm:py-5 text-center text-sm sm:text-base text-[#DCE2E2] font-semibold shadow-md">
                  {item}
                </div>
                {index !== howWeWork.length - 1 && (
                  <div className="h-7 sm:h-8 w-[2px] bg-[#8AD5B7]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 03: Why choose PBS, promise, and final CTA */}
      <section className="lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 text-[#DCE2E2]">
        <div className="relative mb-10 lg:mb-16">
          <div className="w-full lg:w-[90%] relative z-10 mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#89A096]/10">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center"
              style={{ backgroundImage: "url('/pics/owner-repre-3.png')" }}
            />
            <div className="absolute inset-0 bg-[#1E2322]/50" />
            <div className="relative z-10 grid grid-cols-1 gap-5 sm:gap-6 px-4 py-5 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:items-start lg:gap-10">
              <div className="flex flex-col items-start justify-center gap-2 my-auto">
                <p className="text-sm font-semibold text-[#8AD5B7] sm:text-base">
                  30+ years Protecting NYC Owners
                </p>
                <h2 className="text-2xl uppercase font-semibold leading-tight text-[#DCE2E2] sm:text-4xl font-conthrax">
                  Why Choose PBS
                </h2>
              </div>
              <div className="flex flex-col gap-0.5">
                {whyChoosePBS.map((item, index) => (
                  <p className="text-sm font-normal leading-relaxed text-[#DCE2E2]/90 sm:text-base" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-0 mt-4 lg:-my-[70px] py-6 sm:py-8 w-full mx-auto rounded-2xl bg-[#1E2322] px-4 sm:px-8">
            <div className="h-auto lg:h-[220px] flex flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-end lg:gap-10">
              <Image
                src="/pics/owner-repre-4.png"
                alt="Our promise"
                width={220}
                height={160}
                className="w-[120px] sm:w-[180px] lg:w-[220px] h-auto object-contain"
              />
              <div className="w-full text-center lg:text-left">
                <h3 className="mb-2 sm:mb-3 text-2xl font-semibold text-[#8AD5B7] sm:text-4xl lg:text-5xl font-conthrax">
                  Our Promise
                </h3>
                <p className="text-sm font-normal leading-relaxed text-[#DCE2E2]/90 sm:text-base">
                  With decades of experience and a network of trusted professionals, we don’t just manage properties, we safeguard your investment and empower your vision. No matter if you are an out-of-state investor, busy professional, portfolio owner looking for streamlined operations, our solutions ensure your properties run smoothly, profitably, and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>

          <p className="text-[#8AD5B7] text-lg lg:text-xl font-semibold text-center uppercase pt-6 lg:pt-10">
            Ready to Reclaim your Time?
          </p>

          <div className="w-full py-6 px-6 lg:px-16">
            <p className="text-[#DFDFDF] text-lg font-normal text-center mb-10">
              Stop juggling spreadsheets, midnight repair calls, and
              bureaucratic red tape, and contractors. Let PBS protect your
              investment and peace of mind
            </p>
            <div className="max-w-4xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 items-center justify-center">
              <CTA2
                text="GET STARTED NOW"
                isArrow={false}
                href="/alert"
                styling={`w-auto mt-0 rounded-full h-12 bg-[#FF4B4E] text-white px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 hover:text-black transition lg:text-base font-conthrax `}
              />
              <CTA2
                text="CALL OUR INSPECTORS"
                isArrow={false}
                href="/contacts"
                styling={`w-auto mt-0 rounded-full h-12 bg-[#8AD5B7] text-[#1E2322] px-4 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
              />
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel />
    </div>
  );
};

export default Page;
