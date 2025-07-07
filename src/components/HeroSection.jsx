"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

const HeroSection = ({ heading, text,text2="", textStyle ="", button, img, staggerVal = 0.15, className, isLine = false, bgStyle = ""}) => {
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
    <section className="relative [60vh] lg:h-[75vh] bg-[#37403D] text-[#DCE2E2] overflow-hidden text-center py-16 px-4 md:px-6 lg:px-8 flex items-center">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgImage ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`absolute inset-0 ${bgStyle}`} 
        style={{ backgroundImage: `url(${bgImage || "/pics/homebg.png"})` }}
        aria-hidden="true"
      ></motion.div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className={`text-3xl 2xl:text-6xl font-bold mb-6 ${className || ""}`}
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
          <div className="w-[50%] lg:w-[30%] mb-6 bg-[#8AD5B7] rounded-full h-1"></div>
        )}

        {text && (
          <motion.p
            className={`text-lg mb-6 max-w-4xl flex flex-col ${textStyle}`}
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
      </motion.div>
      
    </section>
  );
};

export default HeroSection;