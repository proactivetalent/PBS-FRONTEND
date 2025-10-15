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
    <div className="bg-[#37403D] min-h-screen overflow-hidden">
      <HeroSection
        heading="Behind the Vision"
        text="Dedicated professionals committed to excellence."
        img="/pics/Team 1.png"
        isLine={true}
        className="font-conthrax text-3xl lg:text-5xl xl:text-[64px] font-semibold"
        bgStyle="bg-top md:bg-bottom bg-cover"
        textStyle="text-xl font-semibold text-[#DCE2E2]"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div
          className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] sm:w-[45%] lg:w-[35%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20"
        >
          Our Team
        </div>
      </div>

      <p className="w-full text-center my-12 font-semibold text-base text-[#89A096]">
        Meet the professionals driving our success.
      </p>

      {/* CEO Section */}
      <div className="px-4 md:px-6 lg:px-12 xl:px-16 py-8 flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-3 md:gap-4 lg:gap-12 w-full max-w-[75vw]">
          {/* CEO Image Section */}
          <div className="w-[80vw] md:w-[80vw] lg:w-2/5 flex flex-col justify-start items-center space-y-4 h-full md:h-full lg:h-[60vh] mx-auto">
            {/* Header Section */}
            <div className="w-full h-[25%] bg-[#1E2322] rounded-2xl lg:rounded-3xl sm:rounded-3xl px-4 md:px-6 py-4 md:py-6 flex flex-row justify-center items-center gap-3 md:gap-4 shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5">
              <div className="flex justify-center items-center">
                <img className="w-16 md:w-20 lg:w-20 h-auto" src="/PBS Assets/About Us/Our Team/CEO.png" alt="CEO" />
              </div>
              <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center leading-tight flex-1">Message From Executive Director</h2>
            </div>
            
            {/* CEO Info Section */}
            <div className="w-full h-auto min-h-[40%] md:h-auto md:min-h-[50%] lg:h-[75%] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] rounded-[24px] py-6 md:py-6 lg:p-8 flex flex-col justify-center shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
              <div className="w-full flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left space-y-0 md:space-y-0">
                <h1 className="font-conthrax font-semibold text-[#8AD5B7] text-fluid-h3">{CEO_data.name}</h1>
                 <p className="font-semibold text-white text-fluid-base-sm pb-2 sm:pb-2 md:pb-2 lg:pb-10 font-poppins">{CEO_data.title}</p>
                <div className="text-[#89A096] text-start text-fluid-base font-normal leading-relaxed">
                  <p>Licensed General Contractor</p>
                  <p>Superintendent & Filing Representative</p>
                  <p>Specialized in Real Estate Development & Problem Solving</p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Content Section */}
          <div className="w-[80vw] md:w-[80vw] lg:w-3/5 flex flex-col justify-center mx-auto">
            <div className="w-full h-auto min-h-[40vh] md:h-auto md:min-h-[50vh] lg:h-[60vh] bg-[#1E2322] rounded-[24px] p-3 md:p-4 lg:p-5 flex flex-col justify-center overflow-y-auto scrollbar-hide shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
              {/* CEO Message */}
              <div className="text-[#89A096] font-normal leading-relaxed text-left text-fluid-base">
                <p className="mb-4">
                  Dear Valued Clients,<br />
                  We specialize in guiding NYC developers, owners, and contractors to simplify the complexity of the city’s construction and compliance landscape, working with a proactive team with over 100 years of combined experience. From planning and permitting to inspections and sign-off.
                </p>
                <p className="mb-4">
                Our job isn’t just about great design and execution, it’s about offering a proactive system to keep your projects moving. Our real time alerts across all relevant city databases, pre-inspection audits to avoid surprises, deep-dive planning tools for accurate soft-cost estimates, and complete owner representation throughout the lifecycle of a project, helps ensure compliance from day one. We work alongside a trusted network of professionals across engineering, architecture, and legal advisory to deliver reliable, end-to-end support.
                </p>
                <p className="mb-4">
                Advocating for our neighbors. PBS makes a difference being trusted, experienced, and always one step ahead. Whether you’re breaking ground or finalizing a sign-off, we provide clarity, accountability, and peace of mind at every stage. We are here to redefine excellence in NYC construction.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 mb-10 h-[2px] bg-[#1E2322]/70 rounded-full"></div>


      <div className="py-4 xl:py-6 ">
        <section className="w-[100%]">
          {/* Leadership Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16 flex justify-center">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 w-full max-w-[75vw]">

              {/* Leadership Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[40vh] md:h-[35vh] lg:h-[40vh] w-full max-w-sm lg:max-w-none bg-[#1E2322] rounded-[24px] shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/leadership.png" alt="Leadership" />
                    <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center mt-4 mx-6">Leadership Team</h2>
                  </div>
                </div>
              </div>
              {/* Leadership Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {leadershipTeam.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-[40vh] md:h-[35vh] lg:h-[40vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-300 ${index === specialists.length - 1
                        ? index % 2 === 0
                          ? "relative left-0 lg:left-[50%]"
                          : ""
                        : ""
                        }`}
                    >
                      <div className="w-full flex flex-col justify-between gap-1 text-start p-2">
                        
                        <div>
                        <h3 className="text-fluid-h3 text-start font-conthrax font-semibold text-[#8AD5B7]">
                          {member.name}
                        </h3>

                        <p className="text-[#ffff] text-fluid-base font-semibold">
                          {member.title}
                        </p>
                        </div>
                        <p className="text-fluid-base-sm text-[#89A096] text-semibold break-words md:pr-3">
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
          <div className="block lg:hidden px-4 md:px-6">
            <div className="mb-16 w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full max-w-sm">
                {leadershipTeam.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-300 ${index === projectManagers.length - 1
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
                      <p className="text-xs md:text-sm text-[#89A096] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 h-[2px] bg-[#1E2322]/70 rounded-full"></div>

          {/* <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] h-1"></div> */}

          {/* Managers Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mx-auto max-w-[75vw]">

              {/* Managers Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[40vh] md:h-[35vh] lg:h-[40vh] w-full max-w-sm lg:max-w-none bg-[#1E2322] rounded-[24px] shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/manager.png" alt="Leadership" />
                    <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center mt-4 mx-6">Project Managers</h2>
                  </div>
                </div>
              </div>
              {/* Managers Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {projectManagers.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
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

                        <p className="text-[#ffff] text-fluid-base font-semibold">
                          {member.title}
                        </p>
                        <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Managers Grid - Same design, adjusted width */}
          <div className="block lg:hidden px-4 md:px-6">
            <div className="mb-16 w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full max-w-sm">
                {projectManagers.map((member, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
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
                      <p className="text-xs md:text-sm text-[#89A096] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 h-[2px] bg-[#1E2322]/70 rounded-full"></div>

          {/* Admin Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mx-auto max-w-[75vw]">

              {/* Admin Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[40vh] md:h-[35vh] lg:h-[40vh] w-full max-w-sm lg:max-w-none bg-[#1E2322] rounded-[24px] shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/admin.png" alt="Leadership" />
                    <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center mt-4 mx-6">Admin Team</h2>
                  </div>
                </div>
              </div>
              {/* Admin Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {admin.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out ${index === specialists.length - 1
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

                        <p className="text-[#ffff] text-fluid-base font-semibold">
                          {member.title}
                        </p>
                        <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                          {member.description}
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
                    className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
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
                      <p className="text-xs md:text-sm text-[#89A096] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 h-[2px] bg-[#1E2322]/70 rounded-full"></div>

          {/* Expediting Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mx-auto max-w-[75vw]">

              {/* Expediting Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[40vh] md:h-[35vh] lg:h-[40vh] w-full max-w-sm lg:max-w-none bg-[#1E2322] rounded-[24px] shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[40%] h-auto" src="/PBS Assets/About Us/Our Team/expediting.png" alt="Leadership" />
                    <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center mt-4 mx-6">Expediting & Compliance</h2>
                  </div>
                </div>
              </div>
              {/* Expediting Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {expediting.map((member, index) => (
                    <div
                      key={index}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        '--mouse-x': activeCard === index ? `${mousePosition.x}px` : '50%',
                        '--mouse-y': activeCard === index ? `${mousePosition.y}px` : '50%'
                      }}
                      className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
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

                        <p className="text-[#ffff] text-fluid-base font-semibold">
                          {member.title}
                        </p>
                        <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                          {member.description}
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
                    className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
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
                      <p className="text-xs md:text-sm text-[#89A096] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 h-[2px] bg-[#1E2322]/70 rounded-full"></div>

          {/* Accounting Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mx-auto max-w-[75vw]">

              {/* Accounting Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[40vh] md:h-[35vh] lg:h-[40vh] w-full max-w-sm lg:max-w-none bg-[#1E2322] rounded-[24px] shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/accounting.png" alt="Leadership" />
                    <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center mt-4 mx-6">Accounting Team</h2>
                  </div>
                </div>
              </div>
              {/* Accounting Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {accounting.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
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
                        <p className="text-[#ffff] text-fluid-base font-semibold">
                          {member.title}
                        </p>
                        <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                          {member.description}
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
                    className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
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
                      <p className="text-xs md:text-sm text-[#89A096] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 h-[2px] bg-[#1E2322]/70 rounded-full"></div>

          
          
          {/* Marketing Section */}
          <div className="px-4 md:px-6 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mx-auto max-w-[75vw]">

              {/* Marketing Image Section */}
              <div className="mb-8 w-full lg:w-1/4 flex flex-col justify-center items-center">
                <div className="h-[40vh] md:h-[35vh] lg:h-[40vh] w-full max-w-sm lg:max-w-none bg-[#1E2322] rounded-[24px] shadow-xl shadow-black/25 backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-[30%] h-auto" src="/PBS Assets/About Us/Our Team/marketing.png" alt="Leadership" />
                    <h2 className="font-conthrax text-fluid-h3 font-semibold text-white text-center mt-4 mx-6">Marketing Team</h2>
                  </div>
                </div>
              </div>
              {/* Marketing Team Cards Grid 3*2 - Hidden on mobile */}
              <div className="hidden lg:flex w-full lg:w-3/4 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {marketing.map((member, index) => (
                    <div
                      key={index}
                      className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out  ${index === specialists.length - 1
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

                        <p className="text-[#ffff] text-fluid-base font-semibold">
                          {member.title}
                        </p>
                        <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                          {member.description}
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
                    className={`w-full h-auto min-h-[18vh] bg-gradient-to-br from-[#1E2322] via-[#1E2322] to-[#2A2F2E] hover:from-[#2A2F2E] hover:via-[#1E2322] hover:to-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-3xl shadow-lg shadow-black/20 backdrop-blur-sm border border-white/5 hover:shadow-xl hover:shadow-black/25 hover:border-white/10 transition-all duration-700 ease-in-out ${index === projectManagers.length - 1
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
                      <p className="text-xs md:text-sm text-[#89A096] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-[80%] mx-auto my-20 md:my-20 lg:my-32 h-[2px] bg-[#1E2322]/70 rounded-full"></div>







          {/* <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div> */}
        </section>
      </div>
    </div>
  );
};


export default Page;