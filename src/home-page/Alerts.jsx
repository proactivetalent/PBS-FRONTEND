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
    <div className="bg-[#2B3331] py-8 sm:py-12 lg:py-16" ref={ref}>
      <div className="px-4 sm:px-6 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] 3xl:min-h-[665px] mx-auto bg-[#1E2322] rounded-[20px] overflow-hidden">
        <div className="px-4 sm:px-8 flex flex-col lg:flex-row lg:justify-between lg:pr-0">
          <div ref={leftRef} className="lg:w-[45%] relative w-full lg:block">
            <div className="relative h-full w-full lg:w-[80%] overflow-hidden py-6 sm:py-8 lg:py-10 font-poppins">

              <div className="capitalize text-lg sm:text-xl lg:text-2xl text-[#8AD5B7] font-semibold ">
                Stay Ahead of Property Violations — Before They Cost You
              </div>
              <div className="text-sm sm:text-base font-normal text-[#C5D3CD] mt-2">
                Our Alert System monitors NYC agencies in real time and notifies you instantly of any violation on your property
              </div>

              {/* Problem, Solution, Benefits section */}
              <div>
                <div>
                  <div className="flex flex-row mt-4 sm:mt-6 gap-3 sm:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <img src="/PBS Assets/homepage/alerts/problem.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Problem</h1>
                      <p className="text-sm sm:text-base font-normal text-[#C5D3CD] mt-2">Missing a violation notice can lead to thousands in fines and project delays</p>
                    </div>

                  </div>

                  <div className="flex flex-row mt-4 sm:mt-6 gap-3 sm:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <img src="/PBS Assets/homepage/alerts/solution.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Solution</h1>
                      <p className="text-sm sm:text-base font-normal text-[#C5D3CD] mt-2">Our Alert System tracks all major NYC departments (DOB, FDNY, DOT, HPD, DEP, LPC, ECB) and updates you the moment a violation is issued</p>
                    </div>

                  </div>

                  <div className="flex flex-row mt-4 sm:mt-6 gap-3 sm:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <img src="/PBS Assets/homepage/alerts/benefits.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Benefits</h1>
                      <p className="text-sm sm:text-base font-normal text-[#C5D3CD] mt-2">Stay compliant, save money, and focus on managing your properties—not chasing paperwork</p>
                    </div>

                  </div>

                  <CTA2
                    text="Sign up for free"
                    href="/alert"
                    styling="w-full lg:w-auto mt-6 h-12 rounded-full bg-[#8AD5B7] text-[#37403D] flex px-0 lg:px-8 lg:mx-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition text-sm lg:text-base"
                  />
                </div>
              </div>
              {/* <CustomImage
                src="/PBS%20Assets/better-assets/Images%20Without%20Bg/Facebook%20Cover.webp"
                height={100}
                width={100}
                alt="Notification alerts interface"
                className="w-auto h-full rounded-2xl mix-blend-luminosity opacity-90"
              /> */}


              <div className="" />
            </div>
          </div>

          {/* {laptop image section} */}
          <div className="lg:w-[50%] flex items-end justify-end -mr-2 sm:-mr-4 lg:-mr-8 -mb-2 sm:-mb-4 lg:-mb-8 mt-4 lg:mt-0">
            <img src="/PBS Assets/homepage/alerts/laptop.png" alt="" className="w-full max-w-none object-cover object-right" />
          </div>
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
      <div className="px-4 sm:px-6 lg:px-14 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] 3xl:min-h-[100px] mx-auto bg-[#1E2322] rounded-[20px] overflow-hidden mt-4 sm:mt-6 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 py-4 lg:py-0">
          <div className="flex flex-row items-center gap-3 sm:gap-4 max-w-xl w-full lg:w-auto">
            <img src="/PBS Assets/homepage/alerts/yt.png" alt="" className="w-8 h-8 sm:w-auto sm:h-auto flex-shrink-0" />
            <p className="text-sm sm:text-base font-medium font-poppins text-white">Watch our step-by-step tutorial to ensure your alerts are set up flawlessly. Stay prepared</p>
          </div>
          {/* click to watch now */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end"><CTA2
                    text="Click to watch now"
                    href="/alert"
                    styling="w-full lg:w-auto my-0 lg:my-6 h-12 rounded-full bg-[#8AD5B7] text-[#37403D] flex px-0 lg:px-8 lg:mx-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition text-sm lg:text-base"
                  /></div>
      </div>
    </div>
  );
};

export default Alerts;
