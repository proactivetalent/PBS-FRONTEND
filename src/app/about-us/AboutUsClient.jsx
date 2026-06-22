"use client";
import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import { aboutContent } from "./data";
import { ChevronLeft, ChevronRight, Dot, DotIcon } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CTA2 from "@/components/CTA2";

const AboutPage = () => {
  // Extracting content from static data
  const story = aboutContent.find((s) => s.id === "our-story");
  const mission = aboutContent.find((s) => s.id === "our-mission");
  const service = aboutContent.find((s) => s.id === "service-areas");
  const vision = aboutContent.find((s) => s.id === "our-vision");
  const cta = aboutContent.find((s) => s.id === "cta");

  // const [clientNum, setClientNum] = useState(0);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -right-10 lg:-right-16 top-1/2 transform -translate-y-1/2 rounded-full p-2 hover:bg-[#8AD5B7] transition duration-300"
      >
        <ChevronRight className="text-[#DCE2E2]" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -left-10 lg:-left-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-[#8AD5B7] transition duration-300"
      >
        <ChevronLeft className="text-[#DCE2E2]" />
      </button>
    );
  }

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#2B3331] overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        heading="Built by New Yorkers For New York"
        text="For Decades, we’ve followed the rules of Inspection, Expediting and portfolio management, Not as Outsiders, but as neighbors, collaborators, and guardians of this city’s skyline."
        className="font-conthrax text-2xl sm:text-3xl md:text-4xl leading-tight max-w-[92%] sm:max-w-2xl md:max-w-4xl mx-auto"
        isLine={false}
        bgStyle="bg-cover"
        textStyle="text-[#DCE2E2] font-semibold text-sm sm:text-base md:text-lg max-w-[92%] sm:max-w-3xl md:max-w-5xl mx-auto"
        img="/PBS Assets/homepage/herosection/hero-bg.png"
        badge="About Us"
      />

      {/* The PBS Story Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        <div className="relative mt-10 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 lg:gap-16">
          {/* Story image in a circular background */}
          <div className="glass-morphism-glow relative w-full sm:w-[90%] lg:w-[50%] flex justify-center items-center rounded-2xl p-3 sm:p-4 lg:p-0">
            <Image
              src="/pics/Building.png"
              alt="PBS"
              width={500}
              height={600}
              className="w-[82%] sm:w-[72%] md:w-[62%] lg:w-[50%] max-w-[360px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-none h-auto object-cover rounded-[16px] mb-0 mx-auto mix-blend-luminosity"
            />
          </div>

          {/* Story text content */}
          <div className="w-full lg:w-[60%] xl:w-[50%] space-y-4 sm:space-y-5 lg:space-y-6 h-auto flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7] mb-2 sm:mb-3 lg:mb-6">
              {story.headline}
            </h2>
            <span className="text-[#DCE2E2] text-sm sm:text-base font-semibold block lg:inline text-center lg:text-left">
              More than a Company, A Collective Legacy
            </span>
            {story?.body.map((text, index) => (
              <p
                key={index}
                className="font-semibold text-sm sm:text-base text-balance my-2 sm:my-3 lg:my-4 text-center lg:text-left lg:max-w-2xl"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        {/* Vision Section */}
        <div className="glass-morphism-glow rounded-[16px] lg:min-h-[600px] 2xl:min-h-[500px] 3xl:min-h-[450px] w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6 lg:p-8 box-border">
          <div className="flex items-start justify-start gap-3">
            <div className="mb-3">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-conthrax text-[#8AD5B7] mb-2 text-left">
                Our Vision
              </h2>
              <p className="text-[#7A8E85] text-sm sm:text-base font-semibold mb-3 text-left">{vision?.tagline}</p>
            </div>
          </div>
          <p className="text-[#DCE2E2] text-center lg:text-left text-sm sm:text-base">{vision?.body}</p>
          <div className="text-left my-5">
            <h2 className="text-[#8AD5B7] text-lg sm:text-xl font-semibold mb-3">
              How We'll get there
            </h2>
            {(vision?.pillars || []).map((value, index) => (
              <div key={index} className="text-[#DCE2E2] flex items-start gap-2 mb-2">
                <Dot className="w-4 h-4 mt-1 shrink-0" />
                <div className="flex flex-col lg:flex-row justify-evenly w-full gap-1">
                  <span className="w-full lg:w-[45%] text-[#DCE2E2] font-semibold text-sm sm:text-base">
                    {value.split(":")[0] + ":"}
                  </span>
                  <span className="w-full lg:w-[55%] text-[#DCE2E2] text-sm sm:text-base">
                    {value.split(":")[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="glass-morphism-glow rounded-[16px] lg:min-h-[600px] 2xl:min-h-[500px] 3xl:min-h-[450px] w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6 lg:p-8 box-border">
          <div className="flex items-start justify-start gap-3">
            <div className="mb-3">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-conthrax text-[#8AD5B7] mb-2 text-left">
                Our Mission
              </h2>
              <p className="text-[#7A8E85] font-semibold text-sm sm:text-base text-left">
                {mission?.tagline}
              </p>
            </div>
          </div>
          <p className="text-[#DCE2E2] text-sm sm:text-base text-center lg:text-left">{mission?.body}</p>
          <div className="text-left my-5">
            <h2 className="text-[#8AD5B7] text-lg sm:text-xl font-semibold mb-3">
              How We'll get there
            </h2>
            {Object.entries(mission?.impacts || []).map(
              ([key, value], index) => (
                <div key={index} className="text-[#DCE2E2] flex items-start gap-2 mb-2">
                  <Dot className="w-4 h-4 mt-1 shrink-0" />
                  <div className="flex flex-col sm:flex-row justify-evenly gap-1 sm:gap-2 w-full">
                    <span className="w-full sm:w-1/3 text-[#DCE2E2] font-semibold text-sm sm:text-base">
                      {key + ":"}
                    </span>
                    <span className="w-full sm:w-2/3 text-[#DCE2E2] text-sm sm:text-base">
                      {value}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Redefining Excellence section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        <div className="relative">
        
        <div className="rounded-xl w-full mx-auto flex flex-col items-center justify-center py-3">
          <h2 className="section-heading-pill">
            Redefining Excellence in NYC Construction
          </h2>
        </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mb-6 px-2 sm:px-6 lg:px-16">
          <p className="text-[#DCE2E2] text-sm sm:text-base xl:text-lg text-center leading-relaxed">
          We are committed to becoming the New York Metropolitan area's most trusted partner in your Compliance, Expediting and consulting—where growth harmonizes with mastery, and innovation elevates every project from blueprint to completion.
          </p>

          <ul className="list-disc list-inside text-[#DCE2E2] text-sm sm:text-base xl:text-lg text-left sm:text-center space-y-2 mt-4 sm:mt-5 w-full sm:w-auto">
          <li>
             Standardized Excellence: Meticulous, end-to-end project management frameworks tailored to NYC's dynamic landscape
          </li>
          <li >
             Value-Driven Culture: Intentional collaboration, data-powered decisions, and unwavering ownership at every level
          </li>
          </ul>
        </div>
      </section>

      {/* Mission deep-dive section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch xl:items-center justify-center gap-8 sm:gap-10 lg:gap-16">
          {/* Mission image */}
          <Image
            src="/pics/Asset 2 2.png"
            alt="PBS"
            width={450}
            height={300}
            className="w-[88%] sm:w-[75%] md:w-[60%] lg:w-auto h-auto object-contain mx-auto"
          />

          {/* Mission content with vertical accent line */}
          <div className="w-full lg:w-3/5 pt-2 sm:pt-4 lg:pt-12">
            <div className="flex items-center justify-center lg:justify-start min-h-[92px] sm:min-h-[120px] xl:h-24 rounded-lg mb-6 sm:mb-8 lg:mb-12 gap-3 sm:gap-4">
              <div className="bg-[#8AD5B7] w-2 h-full rounded-lg"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-conthrax uppercase text-[#DCE2E2] flex flex-col gap-1 text-center lg:text-left">
                <span className="">{mission?.tagline.split(",")[1] + ","}</span>
                <span className="">{mission?.tagline.split(",")[0] }</span>
              </h2>
            </div>

            <p className="text-[#DFDFDF] mt-2 sm:mt-3 font-normal text-sm sm:text-base text-center lg:text-left">
              {mission?.body}
            </p>

            {/* Mission impact highlights */}
            <div className="text-left w-full mt-4 sm:mt-5">
              {Object.entries(mission?.impacts || {}).map(
                ([key, value], index) => (
                  <div key={index} className="mb-3 sm:mb-4">
                    <h3 className="text-[#DFDFDF] text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                      {key}
                    </h3>
                    <p className="text-[#DFDFDF] text-sm sm:text-base leading-relaxed">{value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve intro section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-4 sm:gap-6 lg:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        <h2 className="section-heading-pill">
          Areas we Serve
        </h2>
        <p className="text-[#DCE2E2] font-semibold text-base sm:text-lg text-center font-conthrax">
          More Than a Neighbor, We’re Your Advocates
        </p>
        <p className="text-[#DFDFDF] flex gap-3 font-semibold text-sm sm:text-base text-center mx-auto w-[95%] sm:w-full max-w-2xl leading-relaxed">
          New York doesn't compromise, and neither do we. From the first permit
          to the final walkthrough, our vision and mission ensure:
        </p>
      </div>

      {/* Service Areas content section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-5 sm:gap-8 lg:gap-10 text-[#DCE2E2] lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto pt-4 sm:pt-6 pb-8 sm:pb-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Left Content */}
          <div className="glass-morphism-glow rounded-2xl lg:rounded-[16px] flex flex-col lg:flex-row items-stretch justify-around gap-6 w-full sm:w-[92%] md:w-[80%] mx-auto lg:w-[50%] py-6 sm:py-8 lg:py-10 px-4 sm:px-6">
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-center justify-between xl:justify-center gap-6 xl:gap-32">
              <h2 className="text-[#8AD5B7] font-bold uppercase font-conthrax text-2xl sm:text-3xl lg:text-4xl flex flex-wrap flex-row lg:flex-col 3xl:flex-row mb-2 sm:mb-4 lg:mb-0 gap-2 sm:gap-3">
                <span className="text-center w-full">Buildings</span> <span className="text-center w-full">We deal in</span>
              </h2>
              <img
                src="pics/world-map.png"
                alt="map" 
                className="w-full max-w-[320px] sm:max-w-none h-auto"
              />
            </div>
            <div className="w-full lg:w-[40%] flex flex-col items-start justify-center lg:justify-end xl:justify-center gap-2">
              {service?.buildingTypes.map((location, index) => (
                <p key={index} className="text-[#DCE2E2] text-sm sm:text-base 2xl:text-lg font-semibold flex items-start gap-2">
                  <DotIcon className="w-4 h-4 mt-1 shrink-0" /> {location}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[92%] md:w-[80%] mx-auto lg:w-[40%]">
            <Image
              src="/pics/Rectangle 52.png"
              alt=""
              className="w-full h-auto lg:h-full object-cover mix-blend-luminosity rounded-[16px] shadow-[3px_5px_35px_rgba(0,0,0,0.25)]"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mb-12">
          <h2 className="section-heading-pill">
            Service Areas
          </h2>
          <p className="text-[#DFDFDF] font-semibold text-sm sm:text-base my-3 sm:my-4 text-center px-2">
            Serving All NYC Boroughs with Local Expertise
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-4 w-full">
            {service?.locations.map((location, index) => {
              return (
                <div
                  key={index}
                  className="w-full"
                >
                  <div className="w-full max-w-[210px] sm:max-w-[250px] mx-auto rounded-2xl p-3 glass-morphism-glow">
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 z-10" />
                    <Image
                      src={location.cityImage}
                      alt={location.cityName}
                      width={320}
                      height={240}
                      className="w-full h-[200px] sm:h-[200px] object-cover grayscale"
                    />
                      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-[#DCE2E2] text-lg sm:text-xl font-semibold font-conthrax uppercase tracking-wide whitespace-nowrap">
                        {location.cityName}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 w-full">
          <h2 className="section-heading-pill">
            Who we serve
          </h2>
          <div className="slider-container w-full sm:w-[85vw] lg:w-[60vw] bg-[#1D2321] rounded-xl px-2 sm:px-0">
            <Slider {...settings2}>
             
              {service?.clientTypes?.map((client, index) => {
                return (
                  <div
                    key={index}
                    className="p-3 sm:p-4 lg:py-6 lg:px-12"
                  >
                    <h4 className="text-[#DCE2E2] font-semibold text-base sm:text-lg">
                      {index + 1 + "- " + client.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#DFDFDF] leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                );
              })}

            </Slider>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-[#DCE2E2] pb-20 px-6 md:px-24 text-center">
        <p className="max-w-2xl text-[#DFDFDF] mx-auto font-semibold text-sm mb-4">
          {cta?.text}
        </p>
        <CTA2
          text={cta?.buttonText}
          href="/contacts"
          isArrow={true}
          styling="px-8 py-6 lg:py-3 bg-[#8AD5B7] text-[#37403D] font-poppins font-semibold text-base text-wrap lg:text-[24px] w-full lg:w-auto rounded-full mx-auto my-0"
        />
      </section>
    </div>
  );
};

export default AboutPage;
