"use client";
import React, { useState } from "react";
import CustomImage from "@/app/CustomImage";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { isOpen, setIsOpen } = useMenu();
  const router = useRouter();
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!ref.current || !imageRef.current) return;

    // Set initial background color inline to ensure GSAP can animate it
    // gsap.set(ref.current, { backgroundColor: "#6C837D" });

    // Animation for header height and background transparency
    // gsap.to(ref.current, {
    //   height: "80px",
    //   backgroundColor: "rgba(108, 131, 125, 0)", // Fully transparent (using rgba for clarity)
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     start: "top top",
    //     end: "+=200",
    //     scrub: true,
    //   },
    // });

    // Animation for logo scaling
    gsap.to(imageRef.current, {
      scale: 0.7,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });

  }, []);

  return (
    <div
      className="sticky top-0 right-0 z-50 w-full"
      ref={ref}
    >

      {/* Header Container with GSAP Animation */}
      <motion.div
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "h-[53px] xl:h-[75px] backdrop-blur-md bg-[#37403D]/50" 
            : "h-[70px] xl:h-[100px] bg-[#37403D]"
        }`}
      >
        {/* Content Container with width constraints */}
        <div className="w-full lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto h-full flex flex-row justify-between items-center">
          {/* Logo Container with Click Navigation */}
          <div
            className="cursor-pointer lg:p-4 pl-0"
            onClick={() => {
              setIsOpen(false);
              router.push("/");
            }}
          >
            {/* Animated Logo Container */}
            <motion.div ref={imageRef} initial={{ scale: 1 }}>
              <CustomImage
                src="/pics/LOGO.png"
                width={100}
                height={100}
                alt="Website Logo"
                className="w-[50px] xl:w-[60px] object-contain h-auto relative"
              />
            </motion.div>
          </div>

          {/* Mobile / Side Menu for small screens */}
          <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
