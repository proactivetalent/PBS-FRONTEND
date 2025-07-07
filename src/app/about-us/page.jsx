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
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-[#37403D] overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        heading="Built by New Yorkers For New York"
        text="For Decades, we’ve followed the rules of Inspection, Expediting and portfolio management, Not as Outsiders, but as neighbors, collaborators, and guardians of this city’s skyline."
        className="font-conthrax max-w-4xl text-5xl xl:text-[64px] leading-tight"
        isLine={true}
        bgStyle="bg-top md:bg-top bg-cover"
        textStyle="text-[#DCE2E2] font-semibold text-sm max-w-5xl" 
        img="/pics/COVER 1.png"
      />

        {/* Custom 'About Us' Label Divider */}
  <div className="w-[100vw] relative flex justify-center">
    <div className="bg-[#8AD5B7] w-full h-2"></div>
    <div
      className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] lg:w-[30%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-3xl z-20"
    >
      About Us
    </div>
  </div>

      {/* The PBS Story Section */}
      <section className="py-16 px-6 lg:px-16 bg-[#37403D] text-[#DCE2E2]">
        <div className="relative mt-16 flex flex-col lg:flex-row items-start lg:items-stretch justify-center gap-12 lg:gap-16">
          {/* Story image in a circular background */}
          <div className="absolute lg:relative bottom-0 top-20 inset-x-0 lg:inset-auto opacity-25 lg:opacity-100 w-full lg:w-[30%] 2xl:w-[22%] flex justify-center items-center rounded-2xl">
            <Image
              src="/pics/Building.png"
              alt="PBS"
              width={500}
              height={600}
              className="w-full h-full mix-blend-luminosity object-cover md:object-contain lg:object-cover object-top"
            />
          </div>

          {/* Story text content */}
          <div className="w-full lg:w-[60%] xl:w-[50%] 2xl:w-[40%] space-y-6 h-auto flex flex-col justify-center">
            <h2 className="text-3xl xl:text-[55px] text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7] mb-3 lg:mb-6">
              {story.headline}
            </h2>
            <span className="text-[#7A8E85] text-lg xl:text-xl font-semibold block lg:inline text-center lg:text-left">
              More than a Company, A Collective Legacy
            </span>
            <div className="w-[30%] mx-auto lg:mx-0 lg:text-left text-center bg-[#8AD5B7] rounded-full h-1"></div>
            {story?.body.map((text, index) => (
              <p
                key={index}
                className="font-semibold text-lg xl:text-xl text-balance lg:pr-6 my-8 text-center lg:text-left lg:max-w-2xl"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="flex lg:items-stretch justify-center lg:justify-evenly gap-12 flex-col lg:flex-row text-[#DCE2E2] font-semibold px-3 lg:px-16">
        {/* Vision Section */}
        <div className="lg:min-h-[600px] 2xl:min-h-[500px] 3xl:min-h-[450px] w-full lg:w-1/2 text-center lg:text-left py-6 px-5  box-border">
          <div className="flex items-start justify-center gap-3">
            <img src="/pics/Group 19.png" alt="light" className="w-16 h-16" />
            <div className="mb-3">
              <h2 className="text-3xl lg:text-5xl font-bold font-conthrax text-[#8AD5B7] mb-2">
                Our Vision
              </h2>
              <p className="text-[#7A8E85] mb-3 text-left">{vision?.tagline}</p>
            </div>
          </div>
          <p className="text-[#DCE2E2] text-center lg:text-left text-lg">{vision?.body}</p>
          <div className="text-left my-5">
            <h2 className="text-[#8AD5B7] text-xl font-semibold mb-3">
              How We'll get there
            </h2>
            {(vision?.pillars || []).map((value, index) => (
              <div key={index} className="text-[#DCE2E2] flex gap-2 mb-2">
                <Dot />
                <div className="flex flex-col lg:flex-row justify-evenly w-full">
                  <span className="w-full lg:w-[45%] text-[#DCE2E2] font-semibold text-base">
                    {value.split(":")[0] + ":"}
                  </span>
                  <span className="w-full lg:w-[55%] text-[#7A8E85] text-base">
                    {value.split(":")[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="lg:min-h-[600px] 2xl:min-h-[500px] 3xl:min-h-[450px] w-full lg:w-1/2 text-center lg:text-left py-6 px-5 rounded-2xl bg-[#2B3331] box-border">
          <div className="flex items-start justify-center gap-3">
            <img src="/pics/Layer_1.png" alt="arrow" className="w-14 h-14" />
            <div className="mb-3">
              <h2 className="text-3xl lg:text-5xl font-bold font-conthrax text-[#8AD5B7] mb-2">
                Our Mission
              </h2>
              <p className="text-[#7A8E85] text-base text-left">
                {mission?.tagline}
              </p>
            </div>
          </div>
          <p className="text-[#DCE2E2] text-lg text-center lg:text-left">{mission?.body}</p>
          <div className="text-left my-5">
            <h2 className="text-[#8AD5B7] text-xl font-semibold mb-3">
              How We'll get there
            </h2>
            {Object.entries(mission?.impacts || []).map(
              ([key, value], index) => (
                <div key={index} className="text-[#DCE2E2] flex gap-0.5 mb-2">
                  <Dot />
                  <div className="flex justify-evenly gap-0.5 w-full">
                    <span className="w-1/3 text-[#DCE2E2] font-semibold text-base">
                      {key + ":"}
                    </span>
                    <span className="w-2/3 text-[#7A8E85] text-base">
                      {value}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Redefining section */}
      <section className="pt-16 pb-10 lg:py-10">
        <div className="relative">
        <Image
          src="/pics/pattern1.png"
          alt=""
          className="opacity-100 w-full object-cover rounded-xl filter grayscale shadow-custom"
          width={700}
          height={500}
          loading="lazy"
        />
        <div className="rounded-xl w-full mx-auto flex flex-col items-center justify-center py-3 px-6 absolute bottom-0 lg:bottom-6">
          <h2 className="text-[#8AD5B7] text-center font-conthrax font-semibold text-2xl lg:text-[40px] leading-tight w-full md:w-[70%] 2xl:w-[60%] mx-auto my-6">
            Redefining Excellence in NYC Construction
          </h2>
          <div className="w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
        </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mb-6 py-3 px-10 lg:px-16">
          <p className="text-[#DCE2E2] text-base xl:text-lg font-semibold text-center mt-6">
          We are committed to becoming the New York Metropolitan area's most trusted partner in your Compliance, Expediting and consulting—where growth harmonizes with mastery, and innovation elevates every project from blueprint to completion.
          </p>

          <ul className="list-disc list-inside text-[#DCE2E2] font-semibold text-base xl:text-lg text-center space-y-2 mt-5">
          <li>
             Standardized Excellence: Meticulous, end-to-end project management frameworks tailored to NYC's dynamic landscape
          </li>
          <li >
             Value-Driven Culture: Intentional collaboration, data-powered decisions, and unwavering ownership at every level
          </li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#37403D] pb-10 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch xl:items-center justify-center gap-16">
          {/* Mission image */}
          <Image
            src="/pics/Asset 2 2.png"
            alt="PBS"
            width={450}
            height={300}
            className="object-contain"
          />

          {/* Mission content with vertical accent line */}
          <div className="w-full lg:w-3/5 pt-12">
            <div className="flex items-center lg:justify-start h-36 xl:h-24 rounded-lg mb-12 gap-4">
              <div className="bg-[#8AD5B7] w-2 h-full rounded-lg"></div>
              <h2 className="text-3xl lg:text-5xl font-semibold font-conthrax text-[#DCE2E2] flex flex-col gap-1">
                <span className="">{mission?.tagline.split(",")[1] + ","}</span>
                <span className="">{mission?.tagline.split(",")[0] }</span>
              </h2>
            </div>

            <p className="text-[#89A096] mt-3 font-semibold text-sm">
              {mission?.body}
            </p>
            <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1 my-8"></div>

            {/* Mission impact highlights */}
            <div className="text-left w-[70%]">
              {Object.entries(mission?.impacts || {}).map(
                ([key, value], index) => (
                  <div key={index}>
                    <h3 className="text-[#DCE2E2] text-sm font-semibold mb-2">
                      {key}
                    </h3>
                    <p className="text-[#89A096] text-sm">{value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Redefining section */}
      <div className="rounded-xl w-full lg:w-[60%] mx-auto flex flex-col items-center justify-start lg:justify-center mb-6 py-3 px-6 md:px-12">
        <h2 className="text-[#8AD5B7] lg:text-center font-conthrax font-semibold text-3xl lg:text-5xl my-6">
          Areas we Serve
        </h2>
        <div className="w-[55%] bg-[#8AD5B7] rounded-full h-1"></div>

        <p className="text-[#DCE2E2] mt-5 font-semibold text-lg text-center lg:text-left font-conthrax">
          More Than a Neighbor, We’re Your Advocates
        </p>
        <p className="text-[#89A096] flex gap-3 font-semibold text-sm mt-3 text-center">
          New York doesn't compromise, and neither do we. From the first permit
          to the final walkthrough, our vision and mission ensure:
        </p>
      </div>

      {/* Service Area section */}
      <section className="px-6 lg:px-12">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-8 mb-12">
          {/* Left Content */}
          <div className="bg-[#2B3331] rounded-2xl lg:rounded-[10%] flex flex-col lg:flex-row items-stretch justify-around gap-6 w-full md:w-[80%] mx-auto lg:w-[60%] 2xl:w-[70%] py-10 px-6">
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-center justify-between xl:justify-center gap-6 xl:gap-32">
              <h2 className="text-[#8AD5B7] font-extrabold text-3xl lg:text-5xl flex flex-wrap flex-row lg:flex-col 3xl:flex-row mb-4 lg:mb-0 gap-3">
                <span className="text-center w-full">Buildings</span> <span className="text-center w-full">We deal in:</span>
              </h2>
              <img
                src="pics/world-map.png"
                alt="map" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-[40%] 2xl:w-[30%] flex flex-col items-start 2xl:items-right justify-center lg:justify-end xl:justify-center gap-4 lg:gap-2 xl:gap-4">
              {service?.buildingTypes.map((location, index) => (
                <p key={index} className="text-[#DCE2E2] text-base 2xl:text-lg flex gap-2">
                  <DotIcon /> {location}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[80%] mx-auto lg:w-[40%]">
            <Image
              src="/pics/Rectangle 52.png"
              alt=""
              className="w-full h-auto lg:h-full object-cover mix-blend-luminosity rounded-[5%] lg:rounded-[10%] shadow-[3px_5px_35px_rgba(0,0,0,0.25)]"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mb-12 px-16">
          <h2 className="text-[#8AD5B7] font-extrabold text-5xl mb-2 text-center">
            Service Areas
          </h2>
          <p className="text-[#89A096] font-semibold text-sm mb-4 text-center">
            Serving All NYC Boroughs with Local Expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-4 w-full">
            {service?.locations.map((location, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 my-4"
                >
                  <div className="rounded-full border-2 border-[#8AD5B7] w-[150] h-[150] flex items-center justify-center">
                    <Image
                      src={location.cityImage}
                      alt={location.cityName}
                      width={150}
                      height={150}
                      className="filter grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <p className="text-[#DCE2E2]">{location.cityName}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-12 px-6 lg:px-16">
          <h2 className="text-[#8AD5B7] font-extrabold text-5xl mb-2 text-center">
            Who we serve
          </h2>
          <div className="slider-container w-full bg-[#2B3331] rounded-xl">
            <Slider {...settings2}>
             
              {service?.clientTypes?.map((client, index) => {
                return (
                  <div
                    key={index}
                    className="lg:py-6 lg:px-12 p-3 full"
                  >
                    <h4 className="text-[#DCE2E2] font-semibold text-lg">
                      {index + 1 + "- " + client.title}
                    </h4>
                    <p className="text-base text-[#89A096]">
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
      <section className="text-[#DCE2E2] py-10 px-6 md:px-24 text-center">
        <p className="max-w-2xl text-[#89A096] mx-auto font-semibold text-sm mb-4">
          {cta?.text}
        </p>
        <CTA2
          text={cta?.buttonText}
          href="/contacts"
          isArrow={true}
          styling="px-8 py-6 lg:py-3 bg-[#8AD5B7] text-[#37403D] font-semibold text-base text-wrap lg:text-[24px] w-full lg:w-auto rounded-full mx-auto my-0"
        />
      </section>
    </div>
  );
};

export default AboutPage;
