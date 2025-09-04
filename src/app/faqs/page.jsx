"use client";

import React, { useState } from 'react';

const FAQS = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Proactive Building Solutions (PBS)?",
      answer: "Proactive Building Solutions (PBS) is a New York-based consultancy and management firm. We specialize in navigating NYC's complex building codes, zoning laws, and permit processes. Our core services include Local Law Compliance, Expediting, Owner Representation, and Property Management, all designed to protect your investment and ensure your property is safe, compliant, and profitable."
    },
    {
      question: "What makes PBS different from other expeditors or property managers?",
      answer: "We are not just service providers; we are your advocates. With over 30 years of combined expertise, our team operates as a unified collective of New Yorkers with deep, hands-on experience in construction, city agencies, and compliance. We offer a proactive, 360-degree approach that anticipates problems before they happen, saving you time, money, and stress."
    },
    {
      question: "Who do you work with?",
      answer: "We work with any property owner or manager in NYC. This includes owners of private homes, co-ops, condos, high-rises, historic buildings, mixed-use properties, warehouses, new developments, and commercial hubs."
    },
    {
      question: "What areas of NYC do you serve?",
      answer: "We serve all five boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. Our team has specific local expertise in each area's unique regulatory environment."
    }
  ];

  const inspectionFaqData = [
    {
      question: "What Local Laws does PBS help manage?",
      answer: "We manage the entire lifecycle of critical NYC Local Laws, including filing, inspections, and remediation for:<ul class='list-disc list-inside space-y-1 mt-2'><li>Local Law 11/98 (FISP): Façade Inspections and Safety Program.</li><li>Local Law 126: Parking/Parapet Inspections</li><li>Elevator Inspection and Compliance.</li><li>Local Law 152: Gas Line Periodic Inspection.</li><li>Boiler Inspection</li><li>Energy Efficiency Audits and Retro-commissioning.</li><li>Fire Safety (FDNY) Requirements: Sprinklers, standpipes, and alarm systems.</li></ul>"
    },
    {
      question: "What happens if my building fails an inspection?",
      answer: "Our proactive approach includes pre-inspection audits to identify and resolve issues before the official inspection, drastically reducing the chance of failure. If a violation is issued, we manage the entire resolution process: we liaise with contractors, secure necessary permits for repairs, and ensure re-inspections are passed promptly to avoid fines."
    },
    {
      question: "How does PBS keep track of all my compliance deadlines?",
      answer: "We maintain a sophisticated tracking system that monitors all critical filing and inspection cycles for your property. You receive real-time updates and reminders through our client portal, so you’re never caught off guard by a deadline."
    }
  ];

  const complianceFaqData = [
    {
      question: "What is the PBS Alert System?",
      answer: "Our Alert System is a key feature of our client portal. It provides you with real-time, automated notifications about important events related to your property, such as:<ul class='list-disc list-inside space-y-1 mt-2'><li>Upcoming compliance deadlines (e.g., LL11 filing window opening).</li><li>Inspection schedule confirmations and results.</li><li>Permit application status updates (approved, rejected, needs revision).</li><li>New violation alerts from city agencies.</li></ul>"
    },
    {
      question: "How will I receive these alerts?",
      answer: "You can choose your preferred method of communication. We can send alerts via email, SMS text messages, or as notifications within the client portal itself, ensuring you never miss critical information."
    },
    {
      question: "Is my information secure in the client portal?",
      answer: "Absolutely. We use enterprise-grade security measures to encrypt and protect all your sensitive property data and documents. Access is controlled through secure login credentials."
    }
  ];

  const servicesFaqData = [
    {
      question: "What exactly does an expediter do?",
      answer: "An expediter acts as your representative to New York City’s agencies (like the DOB, FDNY, and DOT). We prepare, submit, and track your permit applications, navigate the complex bureaucracy, and resolve any objections or issues that arise. We know the specific requirements and contacts to get your project moving forward efficiently."
    },
    {
      question: "How much faster is using PBS than filing for permits myself (DIY)?",
      answer: "On average, our clients experience permit approval times that are 50% faster than DIY filings. Our expertise prevents common errors that cause rejections and delays, and our relationships with agency plan examiners help streamline the review process."
    },
    {
      question: "Which agencies can PBS file with?",
      answer: "We are experienced in filing with all relevant NYC agencies, including:<ul class='list-disc list-inside space-y-1 mt-2'><li>Department of Buildings (DOB): Work permits, equipment use, amendments.</li><li>FDNY: Fire suppression system permits, place of assembly certificates.</li><li>Department of Transportation (DOT): Scaffolding, sidewalk shed permits.</li><li>Landmarks Preservation Commission (LPC): For historic properties.</li><li>Department of Environmental Protection (DEP): Sign-offs.</li><li>DSNY: Permits based on Environmental Data</li><li>ECB: Handles Hearings</li><li>HPD: Housing Preservation and Development Violations</li><li>DOT: Transportation Controls</li></ul>"
    },
    {
      question: "What do you need from me to start the expediting process?",
      answer: "To get started, we typically need basic project information, property details, and architectural plans. We’ll handle the rest, from preparing the application to securing your approved permits."
    }
  ];

  return (
    <div className="min-h-screen bg-[#37403D]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/pics/local-law-hero.png')`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#37403D]/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-6 lg:px-12">
          
          <div className="flex justify-center font-conthrax text-2xl font-bold bg-[#8AD5B7] text-[#1E2322] px-4 py-2 my-4 rounded-lg w-fit mx-auto">
            Welcome to a community of support!
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-conthrax mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#89A096] font-poppins max-w-3xl mx-auto">
            Your journey is unique. Find answers, resources, and community support from our professional's insights
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Side - Heading */}
            <div className="lg:sticky lg:top-8">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax mb-6 leading-tight">
                  About PBS<br />
                  <span className="text-[#8AD5B7]">General Questions</span>
                </h2>

              </div>
            </div>

            {/* Right Side - Borderless Accordion */}
            <div className="space-y-1">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-start justify-between py-6 rounded-lg px-6 transition-all duration-300 ease-out"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-[#DCE2E2] font-poppins pr-6 leading-relaxed group-hover:text-[#8AD5B7] transition-all duration-300 ease-out">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4 mt-1">
                      <div className="relative w-6 h-6">
                        {/* Plus Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === index
                              ? 'opacity-0 rotate-90 scale-75'
                              : 'opacity-100 rotate-0 scale-100'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full"></div>
                            <div className="w-4 h-0.5 bg-[#8AD5B7] rounded-full absolute"></div>
                          </div>
                        </div>

                        {/* X Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === index
                              ? 'opacity-100 rotate-0 scale-100'
                              : 'opacity-0 -rotate-90 scale-75'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform rotate-45 absolute"></div>
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform -rotate-45 absolute"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${openAccordion === index
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-4'
                      }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2">
                        <div
                          className="text-[#89A096] font-poppins leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subtle divider */}
                  {index < faqData.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-[#8AD5B7]/10 to-transparent mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second FAQ Section - Inspection Services */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-24 bg-[#2E3734]/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Side - Heading */}
            <div className="lg:sticky lg:top-8">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax mb-6 leading-tight">
                  <span className="text-[#8AD5B7]">Compliance Inspection</span>
                </h2>
              </div>
            </div>

            {/* Right Side - Inspection FAQ Accordion */}
            <div className="space-y-1">
              {inspectionFaqData.map((faq, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <button
                    onClick={() => toggleAccordion(`inspection-${index}`)}
                    className="w-full text-left flex items-start justify-between py-6 rounded-lg px-6 transition-all duration-300 ease-out"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-[#DCE2E2] font-poppins pr-6 leading-relaxed group-hover:text-[#8AD5B7] transition-all duration-300 ease-out">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4 mt-1">
                      <div className="relative w-6 h-6">
                        {/* Plus Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === `inspection-${index}`
                              ? 'opacity-0 rotate-90 scale-75'
                              : 'opacity-100 rotate-0 scale-100'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full"></div>
                            <div className="w-4 h-0.5 bg-[#8AD5B7] rounded-full absolute"></div>
                          </div>
                        </div>

                        {/* X Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === `inspection-${index}`
                              ? 'opacity-100 rotate-0 scale-100'
                              : 'opacity-0 -rotate-90 scale-75'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform rotate-45 absolute"></div>
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform -rotate-45 absolute"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${openAccordion === `inspection-${index}`
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-4'
                      }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2">
                        <div
                          className="text-[#89A096] font-poppins leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subtle divider */}
                  {index < inspectionFaqData.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-[#8AD5B7]/10 to-transparent mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Third FAQ Section - Compliance */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Side - Heading */}
            <div className="lg:sticky lg:top-8">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax mb-6 leading-tight">
                  <span className="text-[#8AD5B7]">Alert System</span>
                </h2>
              </div>
            </div>

            {/* Right Side - Compliance FAQ Accordion */}
            <div className="space-y-1">
              {complianceFaqData.map((faq, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <button
                    onClick={() => toggleAccordion(`compliance-${index}`)}
                    className="w-full text-left flex items-start justify-between py-6 rounded-lg px-6 transition-all duration-300 ease-out"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-[#DCE2E2] font-poppins pr-6 leading-relaxed group-hover:text-[#8AD5B7] transition-all duration-300 ease-out">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4 mt-1">
                      <div className="relative w-6 h-6">
                        {/* Plus Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === `compliance-${index}`
                              ? 'opacity-0 rotate-90 scale-75'
                              : 'opacity-100 rotate-0 scale-100'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full"></div>
                            <div className="w-4 h-0.5 bg-[#8AD5B7] rounded-full absolute"></div>
                          </div>
                        </div>

                        {/* X Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === `compliance-${index}`
                              ? 'opacity-100 rotate-0 scale-100'
                              : 'opacity-0 -rotate-90 scale-75'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform rotate-45 absolute"></div>
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform -rotate-45 absolute"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${openAccordion === `compliance-${index}`
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-4'
                      }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2">
                        <div
                          className="text-[#89A096] font-poppins leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subtle divider */}
                  {index < complianceFaqData.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-[#8AD5B7]/10 to-transparent mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fourth FAQ Section - Services */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-24 bg-[#2E3734]/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Side - Heading */}
            <div className="lg:sticky lg:top-8">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax mb-6 leading-tight">
                  <span className="text-[#8AD5B7]">Expediting</span>
                </h2>
              </div>
            </div>

            {/* Right Side - Services FAQ Accordion */}
            <div className="space-y-1">
              {servicesFaqData.map((faq, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <button
                    onClick={() => toggleAccordion(`services-${index}`)}
                    className="w-full text-left flex items-start justify-between py-6 rounded-lg px-6 transition-all duration-300 ease-out"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-[#DCE2E2] font-poppins pr-6 leading-relaxed group-hover:text-[#8AD5B7] transition-all duration-300 ease-out">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4 mt-1">
                      <div className="relative w-6 h-6">
                        {/* Plus Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === `services-${index}`
                              ? 'opacity-0 rotate-90 scale-75'
                              : 'opacity-100 rotate-0 scale-100'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full"></div>
                            <div className="w-4 h-0.5 bg-[#8AD5B7] rounded-full absolute"></div>
                          </div>
                        </div>

                        {/* X Sign */}
                        <div
                          className={`absolute inset-0 transition-all duration-700 ease-out ${openAccordion === `services-${index}`
                              ? 'opacity-100 rotate-0 scale-100'
                              : 'opacity-0 -rotate-90 scale-75'
                            }`}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform rotate-45 absolute"></div>
                            <div className="w-0.5 h-4 bg-[#8AD5B7] rounded-full transform -rotate-45 absolute"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${openAccordion === `services-${index}`
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-4'
                      }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2">
                        <div
                          className="text-[#89A096] font-poppins leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subtle divider */}
                  {index < servicesFaqData.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-[#8AD5B7]/10 to-transparent mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-6 lg:px-12 xl:px-24 bg-[#1E2322]">
        <div className="container mx-auto max-w-4xl">
          {/* Header Banner */}
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4 bg-[#8AD5B7]/20 backdrop-blur-sm rounded-3xl border border-[#8AD5B7]/30">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8AD5B7] font-conthrax">
                Have any Question? Write us
              </h2>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2A2F2D] rounded-3xl p-8 md:p-12 border border-[#8AD5B7]/20 shadow-2xl">
            <form className="space-y-8">
              {/* Two Column Layout for Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="block text-white font-medium font-poppins">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-[#8AD5B7] focus:outline-none transition-all duration-300 font-poppins"
                      placeholder="Enter your first name"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8AD5B7] transition-all duration-300 group-focus-within:w-full"></div>
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="block text-white font-medium font-poppins">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-[#8AD5B7] focus:outline-none transition-all duration-300 font-poppins"
                      placeholder="Enter your last name"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8AD5B7] transition-all duration-300 group-focus-within:w-full"></div>
                  </div>
                </div>
              </div>

              {/* Two Column Layout for Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-white font-medium font-poppins">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-[#8AD5B7] focus:outline-none transition-all duration-300 font-poppins"
                      placeholder="Enter your email address"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8AD5B7] transition-all duration-300 group-focus-within:w-full"></div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-white font-medium font-poppins">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-[#8AD5B7] focus:outline-none transition-all duration-300 font-poppins"
                      placeholder="Enter your phone number"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8AD5B7] transition-all duration-300 group-focus-within:w-full"></div>
                  </div>
                </div>
              </div>

              {/* Message Field - Full Width */}
              <div className="space-y-2">
                <label className="block text-white font-medium font-poppins">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-[#8AD5B7] focus:outline-none transition-all duration-300 font-poppins resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8AD5B7] transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#8AD5B7] text-[#1E2322] font-bold font-poppins rounded-2xl hover:bg-[#8AD5B7]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Ask
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQS;