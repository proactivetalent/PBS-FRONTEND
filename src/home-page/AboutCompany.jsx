"use client";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, Dot, DotIcon, HomeIcon, ReceiptText } from "lucide-react";
import React, { useEffect, useRef } from "react";
import CTA2 from "@/components/CTA2";

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".gsap-animate");

    gsap.from(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.3,
      delay: 0.3,
    });
  }, []);

  const aboutItems = [
    {
      icon: HomeIcon,
      title: "Properties Monitored",
      amount: 1453,
    },
    {
      icon: ReceiptText,
      title: "Corrected Violations",
      amount: 9852,
    },
    {
      icon: Building,
      title: "Square Foot Developed",
      amount: 4853018,
    },
  ];

  const services = [
    "Compliance Inspections",
    "Expediting & Permitting",
    "Annual Mailings",
    "Owner Representation",
    "Portfolio Management",
    "Consultancy over your Projects",
  ];

  const reasons = [
    "30+ years of Combined expertise: Decades of hands-on experience in industry for navigating NYC’s Complex & ever-evolving  Building Codes,zoning Laws, and permit processes",
    "360° Compliance Guardrails: Full-spectrum code adherence, from design to final inspection, ensuring no detail slips through cracks",
"Pre-inspection audits: Identification and resolving of compliance gaps before official inspections to guarantee first-time approval",
"Real-time documentations:Digital tracking of permits, revisions, and approvals for full transparency and audit readiness",
"End-to-End Solutions: From blueprint reviews to occupancy certificates, handling of every step to save time and stress",
"Proactive Approach: We anticipate challenges, mitigate risks, and adapt to regulatory changes before they impact your project",
"One-Stop Shop: Streamlined services covering your needs for codes regulation"
  ];

  return (
    <div className="bg-brand-dark text-brand-light p-8 lg:p-16" ref={containerRef}>
      <div className="container mx-auto px-6 pt-16 lg:px-12 flex flex-col lg:flex-row justify-between gap-5 xl:gap-8 bg-[#1E2322] bg-opacity-25 rounded-3xl  border-2 border-brand-gray1/50 pb-12 mb-16">
        {/* Left Side - Numbers That Matter */}
        <div className="lg:w-[50%] xl:w-[55%] gsap-animate p-2">
          <h2 className="text-lg lg:text-3xl font-conthrax font-semibold text-[#DCE2E2] mb-3">
            Numbers That Matter
          </h2>
          <p className="lg:min-h-[15vh] xl:min-h-[12vh] box-border mb-3 text-[#89A096] text-sm">
          Trusted by Hundreds of clients, PBS has ensured 100% compliance success across all projects, leveraging 30+ years of expertise & issuing proactive alerts to safeguard timelines and standards
          </p>
          <div className="flex justify-center items-center bg-[#1E2322] bg-opacity-45 rounded-2xl p-3 min-h-[40vh] lg:min-h-[46vh]">
            <Image
              src="/pics/Group9.png"
              alt="Underline"
              width={618}
              height={191}
              className="mx-auto mb-4"
              loading="lazy"
              unoptimized={true}
            />
            
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-[50%] xl:w-[45%] gsap-animate p-2 flex flex-col justify-between ">
          {/* What we Specialize in */}
          <div>
            <h2 className="text-sm md:text-2xl xl:text-3xl font-conthrax font-semibold text-[#DCE2E2] mb-3">
              What we Specialize in
            </h2>
            <p className="lg:min-h-[15vh] xl:min-h-[12vh] box-border mb-3 text-sm text-[#89A096]">Precision Trust vision Transformation</p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 lg:items-center lg:justify-between p-5 lg:p-3 xl:p-6 text-[#D9D9D9]  min-h-40 lg:min-h-[46vh] bg-[#282F2E] rounded-2xl box-border">
            <ul className="flex flex-col justify-start items-start gap-3 lg:gap-1 2xl:gap-3 w-full lg:w-3/5">
              {services.map((service, index) => (
                <li key={index} className="flex justify-start items-start">
                  <span className="text-xs xl:text-sm font-semibold">{service}</span>
                </li>
              ))}
            </ul>
            <div className="w-full py-2 lg:py-0 lg:w-2/5 flex flex-col items-center justify-start xl:gap-6">
              <img src="/pics/Asset61.png" alt="green man" width={100} className="object-contain"/>
              <CTA2 text={"Our Offerings"} href="/services" styling="bg-[#8AD5B7] text-[#37403D] hover:from-brand-green1 hover:to-brand-green2 font-semibold w-auto px-2 lg:px-2 transition-colors mt-0 rounded-3xl lg:text-sm" />
            </div>
            </div>

          </div>
        </div>

      {/* Why NYC Trusts PBS? */}
 <div className="">
            <h2 className="text-3xl text-center lg:text-5xl font-conthrax font-semibold text-[#DCE2E2] mb-3">
              Why NYC Trusts PBS?
            </h2>
               {/* Underline heading line */}
        <div className="w-[30%] h-1 bg-[#7CE2B8] mx-auto mb-8"></div>
            <div className="text-[#D9D9D9] max-w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
              {reasons.map((reason, index) => (
                <div key={index} className={`min-h-28 flex flex-col justify-center items-start gap-3 w-full  rounded-xl py-2 px-3 bg-[#2B3331] ${index === 6 ? "relative left-0 lg:left-[50%]":""} `}>
                  <p className="text-left text-sm font-extrabold">{reason.split(":")[0] + ":"}</p>
                  <p className="text-sm">{reason.split(":")[1]}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default AboutCompany;