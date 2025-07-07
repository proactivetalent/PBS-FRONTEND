"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageCarousel = () => {

  const imgCarousel = [
    ["/pics/service group 37.png"],
    ["/pics/serviceVector.png","/pics/service group 46.png"],
    ["/pics/serviceVector.png", "/pics/service group 48.png"],
    ["/pics/service group 40.png"],
    ["/pics/service group 45.png","/pics/service group 45-1.png"],
    ["/pics/service group 42.png"],
    ["/pics/service group 43.png"]
  ]

     const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Loop slides
        speed: 500, // Transition speed
        slidesToShow: 5, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        centerPadding: "0%", // Add padding to show partial next/prev slides
        arrows: false, // Hide arrows for mobile
        autoplay: true, // Optional: Auto-scroll slides
        autoplaySpeed: 2000, // Optional: 3 seconds per slide
        responsive: [
          {
            breakpoint: 720, // Adjust for very small screens
            settings: {
              centerPadding: "5%",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024, // Adjust for very small screens
            settings: {
              centerPadding: "5%",
              slidesToShow: 3,
            },
          },
        ],
      };
  return (
    <div className="bg-[#1E2322] w-full flex flex-col items-center py-10 px-6 md:px-12 lg:px-16">
              <h2 className="text-3xl md:text-5xl mb-6 md:mb-10 font-semibold text-[#DCE2E2] font-conthrax text-center w-full">
                TRUST SIGNALS{" "}
              </h2>
    <div className=" slider-container w-full rounded-xl overflow-hidden">
    <Slider {...settings} className="flex justify-evenly items-center">
      {imgCarousel.map((img, index) => (
        <div
          key={index}
          className={`w-full flex flex-col justify-between items-center gap-4 p-4 h-auto fliter ${img.length>1?"":"grayscale" } hover:grayscale-0 transition duration-300 ease-in-out`}
        >
          {img.map((item, idx) => (
            <img
              key={idx}
              src={item}
              alt={`Slide ${index + 1} - Image ${idx + 1}`}
              className="mb-6 object-contain mx-auto"
            />
          ))}
        </div>
      ))}
    </Slider>
  </div>
  </div>
  )
}

export default ImageCarousel