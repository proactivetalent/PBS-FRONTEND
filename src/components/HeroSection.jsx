"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import CTA2 from "@/components/CTA2";

const HeroSection = ({
  heading,
  text,
  text2 = "",
  textStyle = "",
  button,
  img,
  staggerVal = 0.15,
  className,
  isLine = false,
  bgStyle = "",
  badge = "",
  cta,
  href,
  isArrow = true,
}) => {
  const [bgImage, setBgImage] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = img || "/About Assets/COVER 1.png";
    image.onload = () => {
      setBgImage(image.src);
    };
  }, [img]);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: "words" });
      gsap.fromTo(
        text.words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: staggerVal,
          ease: "power2.out",
        }
      );
    }
  }, [staggerVal]);

  return (
    <section className="text-center relative flex items-center justify-center rounded-xl overflow-hidden py-10 sm:py-12 md:py-16 bg-[#2B3331] text-[#DCE2E2]">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgImage ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${bgStyle}`}
        style={{ backgroundImage: `url(${bgImage || "/pics/homebg.png"})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" />

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {badge && (
          <div className="w-fit mx-auto mb-3 sm:mb-4">
            <p className="text-sm sm:text-base md:text-lg font-poppins font-semibold text-[#8AD5B7] rounded-full px-6 sm:px-10 md:px-16 py-2 border border-[#8AD5B7] uppercase">
              {badge}
            </p>
          </div>
        )}

        <motion.h1
          className={`uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax w-full leading-tight mb-3 sm:mb-4 ${className || ""}`}
          ref={textRef}
          style={{
            wordBreak: "keep-all",
            hyphens: "auto",
            lineHeight: "1.2",
          }}
        >
          {heading}
        </motion.h1>

        {isLine && ( 
          <div className="w-[50%] lg:w-[30%] mb-4 sm:mb-6 bg-[#8AD5B7] rounded-full h-1"></div>
        )}

        {text && (
          <motion.p
            className={`text-sm sm:text-base font-semibold text-[#89A096] font-poppins mb-6 max-w-4xl flex flex-col ${textStyle}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>{text}</span>
            <span>{text2}</span>
          </motion.p>
        )}

        {button && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {button}
          </motion.div>
        )}

        {cta && href && (
          <CTA2
          text={cta}
          isArrow={isArrow}
          href={href}
          styling={`w-full sm:w-auto mt-0 rounded-full h-12 bg-[#8AD5B7] text-[#1E2322] px-4 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-poppins `}
        />
        )}
      </motion.div>
      
    </section>
  );
};

export default HeroSection;