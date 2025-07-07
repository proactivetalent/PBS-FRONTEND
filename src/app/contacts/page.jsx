"use client";
import HeroSection from "../../components/HeroSection";
import MultiStepForm from "@/components/MultiStepForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { House, Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { aboutContent } from "@/app/about-us/data";
import Image from "next/image";
import toast from "react-hot-toast";
import { apiRequest } from "@/utils/csrfHandler";

const Page = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const service = aboutContent.find((item) => item.id === "service-areas");
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const mapSection = document.getElementById("map-container");
      if (mapSection) {
        const rect = mapSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setMapLoaded(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (leftColumnRef.current) {
      gsap.fromTo(
        leftColumnRef.current,
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 70%",
            end: "top 100%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 1,
        }
      );
    }

    if (rightColumnRef.current) {
      gsap.fromTo(
        rightColumnRef.current,
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 70%",
            end: "top 100%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 1,
        }
      );
    }
  }, []);

  const formSteps = [
    {
      type: "text",
      name: "full_name",
      placeholder: "Enter full name",
      label: "Full Name",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]{3,}",
        title: "Please enter at least 3 characters",
        autoComplete: "name",
      },
      validate: (value) => {
        if (!value) return "This field is required";
        if (!/^[A-Za-z ]{3,}$/.test(value)) return "Invalid name format";
        return null;
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      inputProps: {
        required: true,
        autoComplete: "email",
      },
      validate: (value) => {
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return null;
      },
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone",
      inputProps: {
        required: true,
        pattern: "[0-9]{10}",
        title: "Please enter a 10-digit phone number",
      },
      validate: (value) => {
        if (!value) return "Phone number is required";
        if (!/^[0-9]{10}$/.test(value)) return "Please enter a valid 10-digit phone number";
        return null;
      },
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Enter your message",
      label: "Message",
      inputProps: {
        required: true,
        minLength: 10,
      },
      validate: (value) => {
        if (!value) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters long";
        return null;
      },
    },
  ];

  const handleContactSubmit = async (formData) => {
    // Validate form data before submission
    if (!formData.full_name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return false;
    }

    setSubmitStatus({ loading: true, error: null, success: false });

    try {
      const response = await apiRequest('post', '/contact', {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      setSubmitStatus({
        loading: false,
        error: null, 
        success: true
      });

      toast.success("Message sent successfully! We'll get back to you soon.");
      return true; // This tells MultiStepForm to reset

    } catch (error) {
      console.error('Contact Form Error:', error);
      
      const errorMessage = error.message || 'Failed to send message. Please try again.';

      setSubmitStatus({
        loading: false,
        error: errorMessage,
        success: false
      });

      // Show a user-friendly error message
      if (error.message.includes('429')) {
        toast.error('Too many attempts. Please wait a moment before trying again.');
      } else {
        toast.error(errorMessage);
      }
      
      return false; // This tells MultiStepForm not to reset
    }
  };

  return (
    <div className="bg-[#37403D] overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        heading="Contact us"
        text="24/7 Support for Emergencies, Inspections, and Compliance Urgencies
Contact PBS Compliance Solutions"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#DCE2E2]"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={true}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#DCE2E2]"
        img="/pics/contact-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] lg:w-[50%] 2xl:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          How to Contact Us
        </div>
      </div>

      <h1 className="w-full text-center text-[#8AD5B7] font-conthrax text-3xl xl:text-4xl font-semibold px-6 md:px-10 xl:px-16 py-16 lg:py-20">
        Choose Your Convenience
      </h1>

      {/* Section 1*/}
      <section className="w-full px-6 md:px-10 xl:px-16 pb-16 text-[#DCE2E2]">
        <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 xl:gap-16 h-full w-full 2xl:w-[85%]">
          <div
            className="mx-auto flex flex-col items-center justify-center gap-16 h-full w-full lg:w-1/2"
            ref={leftColumnRef}
          >
            <div className="bg-[#1E2322] w-full h-full rounded-xl flex flex-col items-center justify-center relative">
              <div className="bg-[#8AD5B7] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[50%] lg:w-[50%] 2xl:w-[45%] 3xl:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl xl:text-3xl z-20">
                Contact Us
              </div>

              <div className="w-[90%] flex flex-col items-start justify-center gap-10 pt-16 pb-6 mx-auto">
                <p className="w-full text-center font-conthrax font-semibold text-[#89A096] text-lg lg:text-xl">
                  Hours: Mon - Fri | 8 AM – 6 PM
                </p>
                <div className="flex items-center gap-2">
                  <PhoneCall color="#8ad5b7" size={32} />
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#8AD5B7] font-semibold">
                    Call:
                  </span>
                  <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-medium">
                    212-271-6837
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail color="#8ad5b7" size={32} />
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#8AD5B7] font-semibold">
                    Email:
                  </span>
                  <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-medium">
                    info@pbs.nyc
                  </p>
                </div>
                <div className="flex items-start gap-2 2xl:max-w-[90%]">
                  <House color="#8ad5b7" size={32} className="flex-shrink-0" />
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#8AD5B7] font-semibold">
                    Address:
                  </span>
                  <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-medium">
                    22 E 41st Street, Third Floor New York, NY 10017
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] w-full rounded-xl flex flex-col items-center justify-center relative">
              <div className="bg-[#8AD5B7] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[50%] lg:w-[85%] 2xl:w-[75%] 3xl:w-[60%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl xl:text-3xl z-20">
                Send us a message
              </div>

              <MultiStepForm
                steps={formSteps}
                buttonObj={{
                  text: submitStatus.loading ? "Sending..." : "Submit",
                  icon: Send,
                }}
                onSubmit={handleContactSubmit}
                containerClass="relative z-10 backdrop-blur-lg bg-[#1E2322] focus-within:border focus-within:border-white rounded-xl transition-all w-full p-6"
                inputClass="w-full rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
                buttonClass={`md:w-full flex items-center justify-center gap-2 ${
                  submitStatus.loading 
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500'
                } text-white font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-emerald-800/20 ml-6 md:ml-16 lg:ml-48`}
                errorClass="text-rose-400 mt-2 text-sm"
                progressLineColor={"white"}
                disabled={submitStatus.loading}
              />
              {submitStatus.error && (
                <div className="text-red-500 mt-4 text-center p-4 bg-red-500/10 rounded-lg mx-6">
                  {submitStatus.error}
                </div>
              )}
              {submitStatus.success && (
                <div className="text-green-500 mt-4 text-center p-4 bg-green-500/10 rounded-lg mx-6">
                  Message sent successfully!
                </div>
              )}
            </div>
          </div>

          <div
            ref={rightColumnRef}
            className="w-full lg:w-1/2 h-auto relative flex flex-col gap-10"
          >
            <div className="w-full bg-[#1E2322] rounded-full p-3 2xl:p-6 flex items-center justify-center">
              <p className="font-conthrax font-semibold text-[#8AD5B7] text-2xl xl:text-3xl text-center">
                <span className="text-[#DCE2E2] block">Visit our Office</span>
                Meet Compliance Experts In-Person
              </p>
            </div>

            <div className="bg-[#1E2322] rounded-xl p-6 h-[50vh] lg:h-full">
              <div
                id="map-container"
                className="w-full h-full filter invert-[90%] hue-rotate-180 grayscale-[20%] contrast-90"
              >
                {mapLoaded ? (
                  <iframe
                    title="New York Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24184.00445395243!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168c5e9ab%3A0x9e94b7b5b7f9b5c8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1617221740848"
                    className="rounded-lg shadow-lg w-full h-full"
                  />
                ) : (
                  <div className="w-full h-[90vh] flex items-center justify-center bg-gray-800 rounded-lg">
                    <p>Loading map...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2*/}
      <section className="w-full px-6 md:px-10 xl:px-16 pb-16 lg:pb-24 text-[#DCE2E2]">
        <div className="w-full flex flex-col justify-center items-center px-16">
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
      </section>
    </div>
  );
};

export default Page;
