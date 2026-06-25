"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeroCarousel from "@/home-page/HeroCarousel";

// Define the hero sections array with 3 images
const heroInfo = [
  {
    bg: "/PBS Assets/homepage/herosection/hero-bg.png",
    img: "/PBS Assets/homepage/herosection/owner.avif",
    text1: "Owner Representative",
    text2: "Simplify your Construction Journey with Expert Oversight",
    text3: "Avoid the stress of managing contractors, budgets, and timelines. Ensure accountability, quality, and compliance for your projects.",
    text4: "Let us handle the Hassle, Start your Project Right",
    cta: "Learn More",
    ctaLink: "/owner-representative"
  },
  {
    bg: "/PBS Assets/homepage/herosection/hero-bg.png",
    img: "/PBS Assets/homepage/herosection/property.avif",
    text1: "Property Management",
    text2: "Hassle-Free Management for Busy Owners",
    text3: "Streamline maintenance, tenant relations, and compliance. Focus on growth, not daily headaches.",
    cta: "Learn More",
    ctaLink: "/property-management"
  },
   {
    bg: "/PBS Assets/homepage/herosection/hero-bg.png",
    img: "/PBS Assets/homepage/herosection/compliance.avif",
    text1: "Compliance Inspection Services",
    text2: "All major Inspection services addressed",
    text3: "Our Inspection Services includes all major Departments prioritized Compliance violations (LL11, LL126 Parking Inspection, LL126 Parapet Inspection, LL1152, Sprinkler Hydrostatic Test, Boiler Inspection, Elevator Inspection)",
    cta: "Learn More",
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  // Handle dot click navigation
  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Slider ref={sliderRef} {...settings} className="relative">
      {heroInfo.map((heroData, index) => (
        <HeroCarousel 
          key={index} 
          bg={heroData.bg} 
          img={heroData.img} 
          text1={heroData.text1} 
          text2={heroData.text2} 
          text3={heroData.text3} 
          text4={heroData?.text4} 
          cta={heroData.cta} 
          ctaLink={heroData.ctaLink}
          currentSlide={currentSlide}
          totalSlides={heroInfo.length}
          onDotClick={handleDotClick}
        />
      ))}   
    </Slider>
  );
};

export default Hero;