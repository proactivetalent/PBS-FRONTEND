"use client";

import { useEffect, useState } from "react";
import HeroSection from "../../../components/HeroSection";
import {
  leadershipTeam,
  projectManagers,
  specialists,
  CEO,
  admin,
  expediting,
  accounting,
  marketing,
} from "./data"; // Import data



const Page = () => {
  const CEO_data = CEO[0];
  const [textSize, setTextSize] = useState('text-base');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setActiveCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };


  return (
    <div className="bg-[#2B3331] min-h-screen overflow-hidden">
      <HeroSection
        heading="Behind the Vision"
        text="Dedicated professionals committed to excellence."
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        isLine={false}
        className="font-conthrax text-3xl lg:text-4xl font-semibold"
        bgStyle="bg-top md:bg-bottom bg-cover"
        textStyle="text-xl font-semibold text-[#DCE2E2]"
        badge="Our Team"
      />

      <div className="my-24">
      </div>

      {/* CEO Section */}
      <div className="px-4 md:px-6 lg:px-12 xl:px-16 pt-6 sm:pt-8 flex justify-center">
        <div className="flex flex-col bg-[#1E2322] p-4 sm:p-6 md:p-8 lg:p-20 rounded-[24px] lg:flex-row justify-center items-stretch gap-4 sm:gap-5 lg:gap-12 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto">
          {/* CEO Image Section */}
          <div className="w-full lg:w-[35%] flex flex-col justify-start items-center space-y-5 sm:space-y-7 lg:space-y-10 h-full md:h-full lg:min-h-[450px] mx-auto">
            {/* Header Section */}
            <div className="w-full h-auto lg:h-[35%] px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 flex flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex justify-center items-center">
                <img className="w-14 sm:w-16 md:w-20 lg:w-20 h-auto" src="/PBS Assets/About Us/Our Team/CEO.png" alt="CEO" />
              </div>
              <h2 className="font-conthrax uppercase text-base sm:text-lg md:text-xl 3xl:text-2xl font-semibold text-white text-left leading-tight flex-1">Message From Executive Director</h2>
            </div>

            {/* CEO Info Section */}
            <div className="w-full h-auto min-h-[40%] md:h-auto md:min-h-[50%] lg:h-[75%] glass-morphism-glow rounded-[16px] py-6 md:py-6 lg:p-8 flex flex-col justify-center">
              <div className="w-full flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left space-y-0 md:space-y-0">
                <h1 className="font-conthrax font-semibold text-[#8AD5B7] text-lg sm:text-xl lg:text-fluid-h3 3xl:mb-2">{CEO_data.name}</h1>
                <p className="font-semibold text-white text-sm sm:text-base md:text-fluid-base font-poppins">{CEO_data.title}</p>
                <div className="text-white text-center text-sm md:text-fluid-base font-normal leading-relaxed lg:text-start px-2 sm:px-0">
                  <p>Licensed General Contractor</p>
                  <p>Superintendent & Filing Representative</p>
                  <p>Specialized in Real Estate Development & Problem Solving</p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Content Section */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center mx-auto">
            {/* <div className="w-full h-auto min-h-[40vh] md:h-auto md:min-h-[50vh] lg:h-[50vh] bg-[#1E2322] rounded-[24px] p-3 md:p-4 lg:p-5 flex flex-col justify-center overflow-y-auto scrollbar-hide  backdrop-blur-sm border border-white/10  transition-all duration-300"> */}
            <div className="w-full h-auto min-h-[320px] sm:min-h-[360px] md:h-auto lg:min-h-[450px] p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-center overflow-y-auto scrollbar-hide">

              {/* CEO Message */}
              <div className="text-white font-normal leading-relaxed text-left text-sm sm:text-base p-2 sm:p-3 md:p-0 md:text-fluid-base">
                <p className="mb-4">
                  We specialize in guiding NYC developers, owners, and contractors to simplify the complexity of the city’s construction and compliance landscape, working with a proactive team with over 100 years of combined experience. From planning and permitting to inspections and sign-off.
                </p>
                <p className="mb-4">
                  Our job isn’t just about great design and execution, it’s about offering a proactive system to keep your projects moving. Our real time alerts across all relevant city databases, pre-inspection audits to avoid surprises, deep-dive planning tools for accurate soft-cost estimates, and complete owner representation throughout the lifecycle of a project, helps ensure compliance from day one. We work alongside a trusted network of professionals across engineering, architecture, and legal advisory to deliver reliable, end-to-end support.
                </p>
                <p className="">
                  Advocating for our neighbors. PBS makes a difference being trusted, experienced, and always one step ahead. Whether you’re breaking ground or finalizing a sign-off, we provide clarity, accountability, and peace of mind at every stage. We are here to redefine excellence in NYC construction.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 h-[2px] bg-[#1E2322]/70 rounded-full"></div> */}


      <div className="py-24">
        <section className="w-[100%]">
          {/* Leadership Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center">
            <div className="flex flex-col bg-[#1E2322] p-20 rounded-[24px] lg:flex-row justify-center items-center gap-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-0">

              {/* Leadership Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[20vh] md:h-[260px] 3xl:h-[275px] w-full max-w-sm lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[280px] 3xl:max-w-[310px] 4xl:max-w-[400px] 5xl:max-w-[480px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/leadership.png" alt="Leadership" />
                    <h2 className="font-conthrax uppercase text-xl lg:text-fluid-h3 4xl:leading-tight font-semibold text-white text-center mt-4 mx-6">Leadership Team</h2>
                  </div>
                </div>
              </div>
              {/* Leadership Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 items-stretch">
                  {leadershipTeam.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto min-h-[260px] 3xl:min-h-[275px] glass-morphism-glow flex items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl 4xl:rounded-[36px] 5xl:rounded-[40px]  backdrop-blur-sm border border-white/5  hover:border-white/10 transition-all duration-300 ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col justify-stretch gap-1 text-start p-2 3xl:p-4">

                        <div>
                          <h3 className="text-fluid-h3 text-start font-conthrax font-semibold text-[#8AD5B7]">
                            {member.name}
                          </h3>

                          <p className="text-[#ffff] text-fluid-base font-semibold mb-2">
                            {member.title}
                          </p>
                        </div>
                        <p className="text-xs xl:text-sm 2xl:text-fluid-base text-white font-normal leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Leadership Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 sm:px-6 md:px-8">
            <div className="mb-12 sm:mb-16 w-full max-w-[95vw] sm:max-w-[92vw] md:max-w-[85vw] mx-auto flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full">
                {leadershipTeam.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[150px] sm:min-h-[170px] glass-morphism-glow flex items-center justify-start gap-3 xl:gap-2 box-border p-4 sm:p-5 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 ${index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : "relative left-0 lg:left-[50%]"
                      : ""
                      }`}
                  >
                    <div className="w-full p-1 sm:p-2 flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-center font-conthrax font-semibold text-[#8AD5B7] mb-1 sm:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-center">
                        {member.title}
                      </p>
                      <p className="text-xs sm:text-sm text-white text-center leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 h-[2px] bg-[#1E2322]/70 rounded-full"></div> */}

          {/* <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] h-1"></div> */}

          {/* Managers Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center lg:pt-24">
            <div className="flex flex-col bg-[#1E2322] p-20 rounded-[24px] lg:flex-row justify-center items-center gap-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-0">

              {/* Managers Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[20vh] md:h-[260px] 3xl:h-[275px] w-full max-w-sm lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[280px] 3xl:max-w-[310px] 4xl:max-w-[400px] 5xl:max-w-[480px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/manager.png" alt="Leadership" />
                    <h2 className="font-conthrax uppercase text-xl lg:text-fluid-h3 4xl:leading-tight font-semibold text-white text-center mt-4 mx-6">Project Managers</h2>
                  </div>
                </div>
              </div>
              {/* Managers Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 h-[40vh] md:h-[260px] 3xl:h-[275px]">
                  {projectManagers.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto  glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-[24px] 4xl:rounded-[36px] 5xl:rounded-[40px] backdrop-blur-sm border border-white/10  hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                        <h3 className="text-fluid-h3 font-conthrax font-semibold text-[#8AD5B7]">
                          {member.name}
                        </h3>

                        <p className="text-[#ffff] text-fluid-base font-normal">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Managers Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 sm:px-6 md:px-8">
            <div className="mb-12 sm:mb-16 w-full max-w-[95vw] sm:max-w-[92vw] md:max-w-[85vw] mx-auto flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full">
                {projectManagers.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[12vh] glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl  backdrop-blur-sm border border-white/5  hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : "relative left-0 lg:left-[50%]"
                      : ""
                      }`}
                  >
                    <div className="w-full p-4 md:p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-conthrax font-semibold text-[#8AD5B7] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffff] text-sm md:text-base font-semibold mb-2 text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 h-[2px] bg-[#1E2322]/70 rounded-full"></div> */}

          {/* Admin Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center lg:pt-24">
            <div className="flex flex-col bg-[#1E2322] p-20 rounded-[24px] lg:flex-row justify-center items-center gap-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-0">

              {/* Admin Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[20vh] md:h-[260px] 3xl:h-[275px] w-full max-w-sm lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[280px] 3xl:max-w-[310px] 4xl:max-w-[400px] 5xl:max-w-[480px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/admin.png" alt="Leadership" />
                    <h2 className="font-conthrax uppercase text-xl lg:text-fluid-h3 4xl:leading-tight font-semibold text-white text-center mt-4 mx-6">Admin Team</h2>
                  </div>
                </div>
              </div>
              {/* Admin Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 h-[40vh] md:h-[260px] 3xl:h-[275px]">
                  {admin.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-[24px] 4xl:rounded-[36px] 5xl:rounded-[40px]  backdrop-blur-sm border border-white/10  hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                        <h3 className="text-fluid-h3 font-conthrax font-semibold text-[#8AD5B7]">
                          {member.name}
                        </h3>

                        <p className="text-[#ffff] text-fluid-base font-normal">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Admin Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 md:px-6">
            <div className="mb-16 w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full max-w-sm">
                {admin.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[12vh] glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl  backdrop-blur-sm border border-white/5  hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : "relative left-0 lg:left-[50%]"
                      : ""
                      }`}
                  >
                    <div className="w-full p-4 md:p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-conthrax font-semibold text-[#8AD5B7] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffff] text-sm md:text-base font-semibold mb-2 text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 h-[2px] bg-[#1E2322]/70 rounded-full"></div> */}

          {/* Expediting Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center lg:pt-24">
            <div className="flex flex-col bg-[#1E2322] p-20 rounded-[24px] lg:flex-row justify-center items-center gap-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-0">

              {/* Expediting Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[20vh] md:h-[260px] 3xl:h-[275px] w-full max-w-sm lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[280px] 3xl:max-w-[310px] 4xl:max-w-[400px] 5xl:max-w-[480px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/expediting.png" alt="Leadership" />
                    <h2 className="font-conthrax uppercase text-xl lg:text-fluid-h3 4xl:leading-tight font-semibold text-white text-center mt-4 mx-6">Expediting & Compliance</h2>
                  </div>
                </div>
              </div>
              {/* Expediting Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 h-[40vh] md:h-[260px] 3xl:h-[275px]">
                  {expediting.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-[24px] 4xl:rounded-[36px] 5xl:rounded-[40px] backdrop-blur-sm border border-white/10  hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                        <h3 className="text-fluid-h3 font-conthrax font-semibold text-[#8AD5B7]">
                          {member.name}
                        </h3>

                        <p className="text-[#ffff] text-fluid-base font-normal">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expediting Managers Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 md:px-6">
            <div className="mb-16 w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full max-w-sm">
                {expediting.map((member, index) => (
                  <div
                    key={index}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      '--mouse-x': activeCard === index ? `${mousePosition.x}px` : '50%',
                      '--mouse-y': activeCard === index ? `${mousePosition.y}px` : '50%'
                    }}
                    className={`w-full h-auto min-h-[12vh] glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl  backdrop-blur-sm border border-white/5  hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : "relative left-0 lg:left-[50%]"
                      : ""
                      }`}
                  >
                    <div className="w-full p-4 md:p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-conthrax font-semibold text-[#8AD5B7] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffff] text-sm md:text-base font-normal mb-2 text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 h-[2px] bg-[#1E2322]/70 rounded-full"></div> */}

          {/* Accounting Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center lg:pt-24">
            <div className="flex flex-col bg-[#1E2322] p-20 rounded-[24px] lg:flex-row justify-center items-center gap-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-0">

              {/* Accounting Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center lg:items-start">
                <div className="h-[20vh] md:h-[260px] 3xl:h-[275px] w-full max-w-sm lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[280px] 3xl:max-w-[310px] 4xl:max-w-[400px] 5xl:max-w-[480px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/accounting.png" alt="Leadership" />
                    <h2 className="font-conthrax  text-xl lg:text-fluid-h3 4xl:leading-tight font-semibold text-white text-center mt-4 mx-6">Accounting Team</h2>
                  </div>
                </div>
              </div>
              {/* Accounting Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 h-[40vh] md:h-[260px] 3xl:h-[275px]">
                  {accounting.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl 4xl:rounded-[36px] 5xl:rounded-[40px] backdrop-blur-sm border border-white/10  hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                        <h3 className="text-fluid-h3 font-conthrax font-semibold text-[#8AD5B7]">
                          {member.name}
                        </h3>

                        <p className="text-[#ffff] text-fluid-base font-normal">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accounting Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 md:px-6">
            <div className="mb-16 w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full max-w-sm">
                {accounting.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[12vh] glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl  backdrop-blur-sm border border-white/5  hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : "relative left-0 lg:left-[50%]"
                      : ""
                      }`}
                  >
                    <div className="w-full p-4 md:p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-conthrax font-semibold text-[#8AD5B7] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffff] text-sm md:text-base font-normal mb-2 text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 h-[2px] bg-[#1E2322]/70 rounded-full"></div> */}



          {/* Marketing Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center lg:pt-24">
            <div className="flex flex-col bg-[#1E2322] p-20 rounded-[24px] lg:flex-row justify-center items-center gap-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-0">

              {/* Marketing Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[20vh] md:h-[260px] 3xl:h-[275px] w-full max-w-sm lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[280px] 3xl:max-w-[310px] 4xl:max-w-[400px] 5xl:max-w-[480px]">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/marketing.png" alt="Leadership" />
                    <h2 className="font-conthrax uppercase text-xl lg:text-fluid-h3 4xl:leading-tight font-semibold text-white text-center mt-4 mx-6">Marketing Team</h2>
                  </div>
                </div>
              </div>
              {/* Marketing Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 h-[40vh] md:h-[260px] 3xl:h-[275px]">
                  {marketing.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-[50%] glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-[24px] 4xl:rounded-[36px] 5xl:rounded-[40px] backdrop-blur-sm border border-white/10  hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                        <h3 className="text-fluid-h3 font-conthrax font-semibold text-[#8AD5B7]">
                          {member.name}
                        </h3>

                        <p className="text-[#ffff] text-fluid-base font-normal">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Marketing Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 md:px-6">
            <div className="mb-16 w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full max-w-sm">
                {marketing.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[12vh] glass-morphism-glow flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-3xl  backdrop-blur-sm border border-white/5  hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : "relative left-0 lg:left-[50%]"
                      : ""
                      }`}
                  >
                    <div className="w-full p-4 md:p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-conthrax font-semibold text-[#8AD5B7] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffff] text-sm md:text-base font-normal mb-2 text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-24 "></div> */}







          {/* <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div> */}
        </section>
      </div>
    </div>
  );
};


export default Page;