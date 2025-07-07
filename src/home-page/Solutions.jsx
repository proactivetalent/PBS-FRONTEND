"use client";

import CustomImage from "@/app/CustomImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const containerRef = useRef(null);

  const SolutionsItems = [
    {
      title: "Alerts",
      description:
        "Stay alert and never miss a critical step again. Our system is online 24/7 collecting data in real time. We don't just cover the main departments--we cover it all. From 311 complaints to ECB hearings, we have you covered. Want to avoid the headache? Get ahead of it and sign up today.",
      image:
        "/pics/home-solution.png",
    },
    {
      title: "Membership",
      description:
        "Getting alerts is half the battle. Membership is the other half--when you join, you allow us to monitor your property for you. Preventative measures and a free survey of your property will eliminate most obstacles before they arise, and our instant response time will resolve issues before they escalate.",
      image:
        "/pics/Rectangle15.png",
    },
    {
      title: "Planning",
      description:
        "Our planning tool provides you with precise and up to the minute soft costs for every type of project from architecture to engineering to special inspections. With just a few simple details, our advanced algorithm will provide accurate results to get you ahead before your project begins.",
      image:
        "/pics/Rectangle16.png",
    },
    {
      title: "Development",
      description:
        "Development code has never been as strict or fast-changing as it is today. Missing one item could derail a project and its budget. Our development tool is always on track, automatically scanning department codes corresponding to the details you provided in our planning calculator. Stay current with project specific requirements so that it gets done right the first time every time.",
      image:
        "/pics/Rectangle17.png",
    },
  ];

  useEffect(() => {
    const imagesToPreload = SolutionsItems.slice(1).map((item) => item.image);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    timeline.from(".solution-card", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.3,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="bg-brand-dark py-16">
      <div
        className="w-full mx-auto px-6 md:px-8 lg:px-12"
        ref={containerRef}
      >
        {/* Heading and Subheading */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-conthrax font-bold text-[#8AD5B7] mb-4">
            Solutions
          </h1>
          <div className="w-[25%] mx-auto bg-[#8AD5B7] rounded-full h-1 my-3"></div>
          <div className="max-w-3xl mx-auto text-white">
            <p className="text-base font-semibold lg:text-lg font-poppins">
              Compliance Secured, Strategy Defined, Future Built
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-3 w-full">
          {SolutionsItems.map((item) => (
            <div
              key={item.title}
              className="w-full solution-card bg-[#1E2322] p-3 2xl:p-6 rounded-3xl border-2 border-brand-gray1/50"
            >
              <CustomImage
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full object-cover rounded-xl mb-6 mix-blend-luminosity"
              />
              <h3 className="text-xl xl:text-2xl font-conthrax font-semibold text-[#DCE2E2] mb-4">
                {item.title}
              </h3>
              <p className="text-[#89A096] text-left text-sm lg:text-base font-poppins leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;