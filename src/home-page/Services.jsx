"use client";

import CTA2 from "@/components/CTA2";
import Image from "next/image"; // assuming you're using Next.js for image optimization

const Services = () => {
  return (
    <section className="relative text-[#DCE2E2] pt-16 pb-8 px-16 text-center overflow-hidden">
      <Image
        src="/pics/pattern1.png"
        alt="Background Image" 
        fill
        className="absolute inset-0 z-0 object-cover opacity-100"
        priority={true}
        quality={100}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Underline heading line */}

        {/* Main Title */}
        <h2 className="text-3xl lg:text-5xl font-semibold font-conthrax">
          <span className="block text-2xl lg:text-[40px]">Introduction to</span>
          <span className="block font-extrabold mt-1">
            PROACTIVE BUILDING <br /> SOLUTIONS
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#89A096] mt-4 text-sm font-semibold">
          Compliance Made Simple, Projects Done Right
        </p>

        {/* Description */}
        <p className="text-[#89A096] mt-6 text-sm leading-relaxed font-semibold">
          Proactive Building Solutions is a collaboration of its core team members and fellow New Yorkers, each representing a crucial subdivision that together form the foundation for the PBS network. PBS has honed the skills and built the relationships necessary to revolutionize the industry.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
        <CTA2
            text="Know more about us"
            href="/about-us"
            styling="rounded-full bg-[#8AD5B7] text-[#37403D] hover:from-brand-green1 hover:to-brand-green2 font-semibold px-4 text-xl py-4 transition-colors mt-0 w-auto"
          />
        </div>
      </div>

      {/* Background Skyline (optional) 
      <div className="absolute inset-0 z-0 bg-[url('/images/skyline.svg')] bg-bottom bg-no-repeat opacity-20"></div>
      */}
    </section>
  );
};

export default Services;
