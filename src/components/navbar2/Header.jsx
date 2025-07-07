'use client';
import { useState, useRef, useEffect } from "react";
import CustomImage from "@/app/CustomImage";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useUser();
  const ref = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();
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

  // useEffect(() => {
  //   if (!ref.current || !imageRef.current) return;

  //   gsap.to(imageRef.current, {
  //     scale: 0.7,
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: "top top",
  //       end: "end end",
  //       scrub: true,
  //     },
  //   });

  //   console.log("GSAP animations set up for header");
  // }, []);

  return (
    <div
      className={`fixed top-0 right-0 z-50 w-full ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-500`}
      ref={ref}
    >
      <motion.div
        className="flex bg-[#1E2322] flex-row justify-end items-center w-full h-[60px] lg:h-[100px] pr-3 lg:pr-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <div className="w-full flex justify-end items-center relative">
          <div
            className="cursor-pointer lg:p-4 pl-0"
            onClick={() => {
              router.push("/");
            }}
          >
            <motion.div ref={imageRef} initial={{ scale: 1 }}>
              <CustomImage
                src="/pics/LOGO.png"
                width={100}
                height={100}
                alt="Website Logo"
                className="w-[40px] md:w-[45px] xl:w-[60px] object-contain h-auto absolute left-1/2 top-0"
              />
            </motion.div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/portal/profile" className="text-[#89A096] text-base md:text-lg xl:text-xl font-semibold">
              {user?.name || "Profile"}
            </Link>
            {user?.photo ? <img src={process.env.NEXT_PUBLIC_API_URL + user?.photo} alt="dp" className="w-12 h-12 rounded-full"/> :<div className="aspect-square rounded-full w-8 sm:w-12 xl:w-16 bg-[#D9D9D9]"></div>}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;