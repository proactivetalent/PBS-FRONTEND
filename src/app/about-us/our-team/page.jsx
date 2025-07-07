"use client";

import HeroSection from "../../../components/HeroSection";
import { motion } from "framer-motion";
import {
  leadershipTeam,
  projectManagers,
  specialists,
} from "./data"; // Import data

const Page = () => {
  return (
    <div className="bg-[#37403D] min-h-screen overflow-hidden">
      <HeroSection
        heading="Meet Our Team"
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
      
        <p className="w-full text-center mt-12 font-semibold text-base text-[#89A096]">
          Meet the professionals driving our success.
        </p>

      <div className="py-4 xl:py-6 px-6 md:px-12 xl:px-16">
        <section className="w-[100%]">
          {/* Leadership Team Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Leadership Team
            </h2>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className={`w-full 3xl:w-[85%] h-auto min-h-[25vh] xl:min-h-[30vh] bg-[#1E2322] flex  items-center justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-full ${
                    index === leadershipTeam.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : ""
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[#ffff] aspect-square flex-shrink-0 h-full xl:h-full rounded-full shadow-lg transition-transform hover:scale-105 hidden md:block"></div>
                  <div className="w-full text-wrap flex flex-col items-start justify-center gap-1 lg:gap-2 2xl:gap-3">
                    <h3 className="text-xl md:text-lg xl:text-2xl font-conthrax font-semibold text-[#8AD5B7]">
                      {member.name}
                    </h3>

                    <p className="text-[#ffff] text-xs xl:text-sm font-semibold">
                      {member.title}
                    </p>
                    <p className="text-xs text-[#89A096] text-semibold text-ellipsis md:pr-3">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] h-1"></div>

          {/* Project Managers Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Project Manager
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectManagers.map((member, index) => (
                <motion.div
                  key={index}
                  className={`w-full h-auto min-h-[25vh] bg-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-full ${
                    index === projectManagers.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : ""
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                    <h3 className="text-xl md:text-lg xl:text-2xl font-conthrax font-semibold text-[#8AD5B7]">
                      {member.name} 
                    </h3>

                    <p className="text-[#ffff] text-xs xl:text-sm font-semibold">
                      {member.title}
                    </p>
                    <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] h-1"></div>

          {/* Specialists Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Specialists
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              {specialists.map((member, index) => (
                <motion.div
                  key={index}
                  className={`w-full h-auto min-h-[25vh] bg-[#1E2322] flex items-center md:items-stretch justify-start gap-3 xl:gap-2 box-border p-6 md:p-3 rounded-2xl md:rounded-full ${
                    index === specialists.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : ""
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
                    <h3 className="text-xl md:text-lg xl:text-2xl font-conthrax font-semibold text-[#8AD5B7]">
                      {member.name}
                    </h3>

                    <p className="text-[#ffff] text-xs xl:text-sm font-semibold">
                      {member.title}
                    </p>
                    <p className="text-xs text-[#89A096] text-semibold text-ellipsis break-all md:pr-3">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div>
        </section>
      </div>
    </div>
  );
};

export default Page;
