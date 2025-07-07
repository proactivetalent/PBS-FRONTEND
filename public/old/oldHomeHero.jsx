"use client";

import CustomImage from "@/app/CustomImage";
import CTA from "@/components/CTA";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import { Young_Serif } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const { isOpen } = useMenu();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
 
  return (
    <div className="relative bg-brand-dark">
      <div className="min-h-screen relative flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-between 2xl:justify-center 2xl:gap-16 py-8 lg:px-16">
        {/* Background Image - Optional */}

          <motion.div
            className="absolute w-full inset-0 h-full"
            initial={{ opacity: 0, x: 0, scale: 0.75 }}
            animate={{
              opacity: 1,
              x: isSmallScreen && isOpen ? -50 : 0,
              scale: [0.75, 1.05, 1],
            }}
            transition={{
              duration: initialRender ? 1.2 : 0.5,
              ease: "easeOut",
              delay: initialRender ? 0.5 : 0,
            }}
            aria-hidden="true"
          >
            <CustomImage
              src="/pics/homebg.png"
              alt="Modern skyscrapers"
              className="w-full h-full object-cover z-0"
              fill
              priority={true}
              quality={100}
            />
          </motion.div>
          {/* Left Side - Image */}
        <motion.div
          className="relative w-full md:w-3/5 3xl:w-1/5 flex justify-center items-start"
          initial={{ opacity: 0, y: 1000, scale: 0.95, x: 0 }}
          animate={{
            opacity: 1,
            y: [1000, -20, 0],
            scale: [0.95, 1.2, 1],
            x: isSmallScreen && isOpen ? -50 : 0,
          }}
          transition={{
            duration: initialRender ? 1.2 : 0.5,
            ease: "easeOut",
            delay: initialRender ? 0.5 : 0,
          }}
          aria-hidden="true"
        >
          <Image
            src="/pics/Cloud-02.png"
            alt="Modern skyscrapers"
            className="w-full 3xl:object-contain h-full mix-blend-luminosity object-cover object-top-right"
            width={700}
            height={500}
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="z-20 w-full lg:w-[65%] 2xl:w-[40%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-6 lg:px-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-xl lg:text-3xl font-conthrax font-semibold text-brand-light mb-6 lg:max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            Ensuring Compliance, Excellence and Peace of Mind in New York Construction
          </motion.h1>

          <div className="w-[50%] lg:w-[30%] mx-auto lg:mx-0 h-1 bg-[#8AD5B7] mb-4 rounded-full"></div>


          {/* Subheading */}
          <motion.p
            className="text-base lg:text-lg font-semibold font-poppins text-[#89A096] mb-6 lg:max-w-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: [0, 0.25, 0.75, 1],
              x: [100, 75, 25, 0],
            }}
            transition={{
              duration: 1,
              times: [0, 0.3, 0.6, 1],
            }}
          >
            Your Trusted Partner for Construction Compliance Inspections, Expediting and Property Solutions
          </motion.p>

          <motion.p
            className="text-base lg:text-lg font-poppins text-[#89A096] mb-2 lg:max-w-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: [0, 0.25, 0.75, 1],
              x: [100, 75, 25, 0],
            }}
            transition={{
              duration: 1,
              times: [0, 0.3, 0.6, 1],
            }}
          >
            More than 30+ Years Combined Experience in the industry.
          </motion.p>

          {/* CTA Button */}
          <CTA
            text="Schedule your Consulting Today"
            href="/contacts"
            styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 font-semibold font-conthrax px-8 py-4 transition-colors mt-0 max-w-full lg:max-w-xl my-6"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;