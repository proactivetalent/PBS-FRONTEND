"use client";

import CustomImage from "@/app/CustomImage";
import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";
import Heading from "@/components/Heading";
import MultiStepForm from "@/components/MultiStepForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Alerts = () => {
  const ref = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  const formSteps = [
    {
      type: "text",
      name: "full_name",
      placeholder: "Enter full name",
      label: "Full Name",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]{3,}",
        title: "Please enter at least 3 characters",
        autoComplete: "name",
      },
      validate: (value) => {
        if (!value) return "This field is required";
        if (!/^[A-Za-z ]{3,}$/.test(value)) return "Invalid name format";
        return null;
      },
    },
    {
      type: "text",
      name: "company name",
      placeholder: "Enter company name",
      label: "Company Name",
      inputProps: {
        required: true,
        autoComplete: "organization",
      },
      validate: (value) => {
        if (!value) return "Company name is required";
        return null;
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      inputProps: {
        required: true,
        autoComplete: "email",
      },
      validate: (value) => {
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return null;
      },
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone",
      inputProps: {
        required: true,
        pattern: "[0-9]{10}",
        title: "Please enter a 10-digit phone number",
      },
    },
  ];

  const button = {
    text: "Submit",
    icon: Send,
  };

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    if (leftRef.current) {
      tl.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
      });
    }

    if (textRef.current) {
      tl.from(
        textRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
        "-=0.4"
      );
    }

    if (formRef.current) {
      tl.from(
        formRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
        "-=0.4"
      );
    }
  }, []);

  return (
    <div className="bg-[#37403D] py-16" ref={ref}>
      <div className="sm:px-6 lg:px-16">
        <div className="px-4 sm:px-8 flex flex-col lg:flex-row lg:justify-between">
          <div ref={leftRef} className="lg:w-[45%] relative hidden lg:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#8AD5B7]">
              <CustomImage
                src="/PBS%20Assets/better-assets/Images%20Without%20Bg/Facebook%20Cover.webp"
                height={100}
                width={100}
                alt="Notification alerts interface"
                className="w-auto h-full rounded-2xl mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          <div className="lg:pt-12 lg:pb-6 lg:w-[55%] flex flex-col justify-center lg:ml-12">
            <div ref={textRef} className="mb-8">
              <Heading
                main="Alert System"
                subpart="Never Miss a Critical step for property again"
                styling="mb-4 text-brand-light"
              />
              <div className="text-brand-gray3 space-y-6">
                <p className="text-sm font-semibold leading-relaxed">
                  Revolutionizing the industry by providing access to every
                  demographic of data in real-time. Our enhanced alert system
                  covers all relevant departments in New York City to ensure you
                  never miss any critical step again. Free for the first 3
                  months
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="flex flex-col justify-center">
                    <div className="w-full bg-[#8AD5B7] rounded-full h-1 mb-4"></div>

                    <span className="text-lg font-semibold font-conthrax text-[#DCE2E2] text-nowrap">
                      SIGN UP
                    </span>
                    <span className="text-lg font-semibold text-[#DCE2E2] font-conthrax">
                      BELOW{" "}
                    </span>
                  </div>

                  <CTA2
                    text="Get your Property registered for Free"
                    href="/alert"
                    styling="w-full lg:w-auto mt-3 h-12 rounded-full bg-[#8AD5B7] text-[#37403D] px-0 lg:px-3 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition text-sm lg:text-base"
                  />
                </div>
              </div>
            </div>

                    <div className="text-2xl lg:text-3xl relative">
        <div className="bg-[#2E3432] p-4 lg:p-6 rounded-xl flex flex-col items-center justify-between gap-4 w-full">
      <p className="text-[#DCE2E2] w-full text-lg lg:text-xl font-medium text-center">
        Watch our step-by-step tutorial to ensure your alerts are set up flawlessly. Stay prepared
      </p>
      
      <CTA2
                text="Click to watch now"
                href="/alert"
                styling="w-full lg:w-auto mt-0 h-10 xl:h-12 rounded-full bg-[#8AD5B7] text-[#37403D] px-0 lg:px-6 py-2 font-semibold whitespace-nowrap hover:brightness-105 transition text-xl xl:text-2xl"
              />
    </div>
    </div>

            {/* <div ref={formRef}>
              <MultiStepForm
                steps={formSteps}
                buttonObj={button}
                onSubmit={(data) => console.log(data)}
                containerClass="space-y-6 relative z-10 backdrop-blur-lg rounded-3xl p-6 lg:p-4 transition-all duration-300 group/form"
                inputClass="w-full rounded-xl text-brand-light placeholder-brand-gray3 focus:border-brand-light focus:ring-2 focus:ring-brand-light transition-all"
                buttonClass="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green2 to-brand-green1 hover:from-brand-green1 hover:to-brand-green2 text-brand-light font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-brand-green1/20"
                errorClass="text-rose-400 mt-2 text-sm"
              />
            </div> */}
          </div>
          <div></div>
        </div>

        {/* <div className="text-2xl lg:text-3xl relative mt-8">
        <div className="bg-[#2E3432] p-4 lg:p-6 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
      <p className="text-[#DCE2E2] w-full lg:w-3/4 text-3xl font-medium font-poppins text-center lg:text-left">
        Watch our step-by-step tutorial to ensure your alerts are set up flawlessly. Stay prepared
      </p>
      
      <CTA2
                text="Click to watch now"
                href="/contacts"
                styling="w-full lg:w-auto mt-0 h-16 rounded-full bg-[#8AD5B7] text-[#37403D] px-0 lg:px-6 py-2 font-semibold whitespace-nowrap hover:brightness-105 transition text-sm xl:text-3xl"
              />
    </div>
    </div> */}
      </div>
    </div>
  );
};

export default Alerts;
