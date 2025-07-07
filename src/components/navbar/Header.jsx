"use client";
import React, { useState } from "react";
import CustomImage from "@/app/CustomImage";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollY.current = currentScrollY;
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

    // Debug log to confirm animation is running
    console.log("GSAP animations set up for header");
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 z-50 w-full ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-500`}
      ref={ref}
    >
      {/* Header Container with GSAP Animation */}
      <motion.div
        className="flex flex-row justify-between items-center w-full h-[70px] xl:h-[100px]"
      >
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
              className="w-[50px] xl:w-[80px] object-contain h-auto relative xl:left-[50px] left-[25px]"
            />
          </motion.div>
        </div>

        {/* Mobile / Side Menu for small screens */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
    </div>
  );
};

export default Header;
