"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeroCarousel from "@/home-page/HeroCarousel";

// Define the hero sections array with 3 images
const heroInfo = [
  {
    bg: "/pics/homeHero/bg-1.png",
    img: "/pics/homeHero/building-1.png",
    text1: "Owner Representative",
    text2: "Simplify your Construction Journey with Expert Oversight",
    text3: "Avoid the stress of managing Contractors, Budgets, and timelines. Ensure accountability, quality, and compliance for your projects.",
    text4: "Let us handle the Hassle, Start your Project Right",
    cta: "Learn More",
    ctaLink: "/owner-representative"
  },
  {
    bg: "/pics/homeHero/bg-2.png",
    img: "/pics/homeHero/building-2.png",
    text1: "Property Management",
    text2: "Hassle-Free Management for Busy Owners",
    text3: "Streamline maintenance, tenant relations, and compliance. Focus on growth, not daily headaches.",
    cta: "Optimize Your Property",
    ctaLink: "/property-management"
  },
   {
    bg: "/pics/homeHero/bg-3.png",
    img: "/pics/homeHero/building-3.png",
    text1: "Compliance Inspection Services",
    text2: "All major Inspection services addressed",
    text3: "Our Inspection Services includes all major Departments prioritized Compliance violations (LL11, LL126 Parking Inspection, LL126 Parapet Inspection, LL1152, Sprinkler Hydrostatic Test, Boiler Inspection, Elevator Inspection)",
    cta: "Optimize Your Property",
    ctaLink: "/inspection-services"
  },
];

// Custom Next Arrow Component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-transparent hover:bg-[#8AD5B7] transition duration-300 z-20"
    >
      <ChevronRight className="text-[#DCE2E2] w-8 h-8" />
    </button>
  );
}

// Custom Prev Arrow Component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-transparent hover:bg-[#8AD5B7] transition duration-300 z-20"
    >
      <ChevronLeft className="text-[#DCE2E2] w-8 h-8" />
    </button>
  );
}

const Hero = () => {
  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <Slider {...settings} className="relative">


{heroInfo.map((heroData, index) => (
      <HeroCarousel key={index} bg={heroData.bg} img={heroData.img} text1={heroData.text1} text2={heroData.text2} text3={heroData.text3} text4={heroData?.text4} cta={heroData.cta} ctaLink={heroData.ctaLink} />
      ))}   
    </Slider>
  );
};

export default Hero;