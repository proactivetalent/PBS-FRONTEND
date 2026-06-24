"use client";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, Dot, DotIcon, HomeIcon, ReceiptText } from "lucide-react";
import React, { useEffect, useRef } from "react";
import CTA2 from "@/components/CTA2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  // Count-up animation for numbers when they enter the viewport
  useEffect(() => {
    if (!containerRef.current) return;
    const counters = containerRef.current.querySelectorAll('.count-up');

    counters.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = parseFloat(el.getAttribute('data-duration') || '1.6');

      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          const current = Math.round(obj.value);
          // Format with commas for large numbers
          const formatted = current.toLocaleString('en-US');
          // For "Million" suffix we keep the raw number (e.g., 5) and suffix
          if (suffix === ' Million') {
            el.textContent = `${current}${suffix}`;
          } else {
            el.textContent = `${formatted}${suffix}`;
          }
        },
      });
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
    "30+ years of Combined expertise: Decades of hands-on experience in industry for navigating NYC’s Complex & ever-evolving  Building Codes, zoning Laws, and permit processes.",
    "360° Compliance Guardrails: Full-spectrum code adherence, from design to final inspection, ensuring no detail slips through cracks, streamlined services covering your needs for code regulations.",
    "Pre-inspection audits: Identification and resolving of compliance gaps before official inspections to guarantee first-time approval.",
    "Real-time documentations: Digital tracking of permits, revisions, and approvals for full transparency and audit readiness.",
    "End-to-End Solutions: From blueprint reviews to occupancy certificates, handling every step to save time and stress.",
    "Proactive Approach: We anticipate challenges, mitigate risks, and adapt to regulatory changes before they impact your project.",
    "Numbers that matter: It's an honour to achieve these numbers. 1453 Properties Monitored. 9852 Corrected Violations. 4,853,018 Square Footage Developed"
  ];

  return (
    <div className="bg-[#2B3331]" ref={containerRef}>
      <div className="container px-4 lg:px-0 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] min-h-[550px] mx-auto pt-8 sm:pt-12 lg:pt-16 flex flex-col lg:flex-row justify-between gap-5 xl:gap-8 pb-8 sm:pb-12 mb-8 sm:mb-12 lg:mb-16">
        {/* Left Side - What we Specialize in */}
        <div className="lg:w-[50%] 3xl:w-[680px] gsap-animate flex flex-col justify-between">
          {/* What we Specialize in */}
          <div className="w-full flex flex-col md:flex-row gap-3 lg:items-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-20 text-[#D9D9D9] min-h-40 lg:min-h-[100%] bg-[#1E2322] rounded-2xl box-border relative overflow-hidden py-6 sm:py-8 lg:py-0">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <img src="/PBS Assets/homepage/numbers/bg-pattern.png" alt="background pattern" className="w-full h-full object-cover object-center" />
            </div>
            <div className="relative z-10">
              <img src="/pics/Asset61.png" alt="green man" width={100} className="object-contain h-12 sm:h-16 md:h-20 lg:h-[80px] mb-2 sm:mb-3" />

              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase font-conthrax font-semibold text-[#DCE2E2] mb-2 sm:mb-3">
                What we Specialize in
              </h2>
              <p className="box-border mb-2 sm:mb-3 text-sm sm:text-base font-bold font-poppins text-[#C5D3CD]">Precision Trust vision Transformation</p>
              <ul className="flex flex-col justify-start items-start gap-1 w-full lg:w-3/5 mb-4 sm:mb-0">
                {services.map((service, index) => (
                  <li key={index} className="flex justify-start items-start">
                    <span className="text-xs sm:text-xs md:text-sm xl:text-sm text-[#D9D9D9] font-semibold">• {service}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full flex flex-col items-start sm:items-end justify-start xl:gap-6 mt-4 sm:mt-0">
                <CTA2 text={"Our Offerings"} href="/services" styling="bg-[#8AD5B7] text-[#37403D] hover:from-brand-green1 hover:to-brand-green2 font-semibold w-auto px-2 lg:px-4 transition-colors mt-0 rounded-3xl text-xs sm:text-sm lg:text-sm" />
              </div>
            </div>
          </div>

        </div>
        {/* Right Side - Numbers That Matter */}

        <div className="lg:w-[50%] 3xl:w-[680px] gsap-animate">

          <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 justify-around bg-[linear-gradient(180deg,rgba(31,31,31,0.4)_0%,rgba(44,44,44,0.4)_20%,rgba(43,43,43,0.4)_24%,rgba(14,14,14,0.4)_62%)] rounded-2xl min-h-[40vh] lg:min-h-[100%] py-6 sm:py-8 lg:py-0">
            <div className="mb-4 sm:mb-6 lg:mb-0">
              <img src="/PBS Assets/homepage/numbers/numbers.png" alt="" className="w-12 sm:w-16 md:w-20 lg:w-[75px] mb-3 sm:mb-4 lg:mb-6" />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase font-conthrax font-semibold text-[#DCE2E2] mb-2 sm:mb-3">
                Numbers that matter
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 md:gap-8 lg:gap-12 text-white mx-0 sm:mx-4 lg:mx-20">
              <div className="flex flex-col items-center min-h-[140px] sm:h-[180px] justify-between w-full sm:w-auto">
                <div>
                  <Image
                    src="/PBS Assets/homepage/numbers/properties.png"
                    alt="Underline"
                    width={618}
                    height={191}
                    className="mx-auto mb-2 sm:mb-4 w-10 h-8 sm:w-12 sm:h-10 md:w-[55px] md:h-[40px]"
                    loading="lazy"
                    unoptimized={true}
                  />
                  <p className="text-center font-poppins text-xs sm:text-sm md:text-base font-bold">Properties Monitored</p>
                </div>
                <div className="w-24 sm:w-32 md:w-[140px] bg-[#8AD5B7] h-1 rounded-xl my-2 sm:my-0"></div>
                {/* animated number */}
                <div className="font-bold font-poppins text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[32px] count-up" data-target="1400" data-suffix="+" data-duration="3">0</div>
              </div>

              <div className="flex flex-col items-center min-h-[140px] sm:h-[180px] justify-between w-full sm:w-auto">
                <div>
                  <Image
                    src="/PBS Assets/homepage/numbers/violations.png"
                    alt="Underline"
                    width={618}
                    height={191}
                    className="mx-auto mb-2 sm:mb-4 w-10 h-8 sm:w-12 sm:h-10 md:w-[55px] md:h-[40px]"
                    loading="lazy"
                    unoptimized={true}
                  />
                  <p className="text-center font-poppins text-xs sm:text-sm md:text-base font-bold">Corrected Violations</p>
                </div>
                <div className="w-24 sm:w-32 md:w-[140px] bg-[#8AD5B7] h-1 rounded-xl my-2 sm:my-0"></div>
                {/* animated number */}
                <div className="font-bold font-poppins text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[32px] count-up" data-target="9500" data-suffix="+" data-duration="4.5">0</div>
              </div>

              <div className="flex flex-col items-center min-h-[140px] sm:h-[180px] justify-between w-full sm:w-auto">
                <div>
                  <Image
                    src="/PBS Assets/homepage/numbers/developed.png"
                    alt="Underline"
                    width={618}
                    height={191}
                    className="mx-auto mb-2 sm:mb-4 w-10 h-8 sm:w-12 sm:h-10 md:w-[55px] md:h-[40px]"
                    loading="lazy"
                    unoptimized={true}
                  />
                  <p className="text-center font-poppins text-xs sm:text-sm md:text-base font-bold">Square Foot Developed</p>
                </div>
                <div className="w-24 sm:w-32 md:w-[140px] bg-[#8AD5B7] h-1 rounded-xl my-2 sm:my-0"></div>
                {/* animated number */}
                <div className="font-bold font-poppins text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[32px] count-up" data-target="5" data-suffix=" Million" data-duration="6">0</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Why NYC Trusts PBS? */}
      <div className="px-4 lg:px-0 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-10 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center uppercase font-conthrax font-semibold text-[#DCE2E2] mb-3">
          Why NYC Trusts PBS?
        </h2>
        {/* Underline heading line */}
        <div className="w-[50%] sm:w-[40%] lg:w-[30%] h-1 bg-[#7CE2B8] mx-auto mb-6 sm:mb-8"></div>

        {/* accordian */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
          <div className="w-full lg:w-auto flex justify-center">
            <img src="/PBS Assets/homepage/trust/img.png" className="w-full max-w-[680px] h-auto lg:h-[400px] object-cover rounded-xl" alt="" />
          </div>
          <div className="w-full lg:w-[680px] flex-shrink-0"><Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
            {reasons.map((reason, index) => {
              const parts = reason.split(":");
              const title = parts[0] + (parts.length > 1 ? ":" : "");
              const content = parts.slice(1).join(":").trim();
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#37403D] roundled-xl bg-[#1E2322] data-[state=open]:bg-[#505A56] px-3 sm:px-4 transition-colors rounded-xl"
                >
                  <AccordionTrigger className="text-left text-xs sm:text-sm font-extrabold text-[#DCE2E2] hover:text-[#8AD5B7] hover:no-underline">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-[#D9D9D9] pt-2">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;