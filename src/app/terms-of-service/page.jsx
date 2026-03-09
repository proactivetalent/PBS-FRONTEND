import React from 'react';

export const metadata = {
  title: "Terms of Service | PBS NYC",
  description: "The official Terms of Service governing the use of the PBS NYC website, Alert System platform, and related professional services."

}

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#2B3331] font-poppins">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/pics/local-law-hero.png')`,
          }}
        >
          {/* Modern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#37403D]/80 to-[#2A2F2D]/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-conthrax tracking-tight">
            Terms and Conditions of Use
          </h1>
          <p className="text-lg md:text-xl text-[#DCE2E2]/80 font-light font-poppins max-w-2xl mx-auto leading-relaxed">
            Review the Terms and Conditions governing your use of Proactive Building Solutions' website and services. Learn about user obligations, intellectual property, and liability.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Information */}
          <div className="text-left mb-8">
            <div className="inline-flex items-center font-poppins space-x-8 text-[#DCE2E2]/70 text-sm font-medium">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-[#8AD5B7] rounded-full mr-2"></span>
                Last Updated: 08/26/2025
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-[#8AD5B7] rounded-full mr-2"></span>
                Proactive Building Solutions
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-16 text-left">
            <h1 className="text-2xl  font-bold text-[#DCE2E2] font-conthrax w-full leading-tight mb-4">
              Introduction
            </h1>
            <p className="text-md text-[#DCE2E2]/90 leading-relaxed font-light">
              Welcome to PBS. These Terms of Service (“Terms”) govern your use of our website, services, and any related platforms operated by PBS (“we,” “our,” “us”). By accessing or using our services, you agree to comply with and be bound by these Terms. If you do not agree, please discontinue use of our website and services.
            </p>
            <p className="text-lg text-[#DCE2E2]/90 leading-relaxed font-light">
              By accessing our website or engaging our Services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website or Services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Section 1: Services Offered */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Services Offered
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light text-md">
                    Proactive Building Solutions provides comprehensive property management, compliance, expediting, and owner representation services within the New York Metropolitan area. These services include, but are not limited to:
                  </p>
                  <div className="font-light space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Local Law Compliance and Inspection Management:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">e.g., LL11, LL126, LL152</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Expediting Services:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">For permits and approvals with NYC agencies (DOB, FDNY, DOT, etc.).</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">End-to-End Property Management:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">For residential and commercial properties.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Owner Representation and Consulting</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Alert System Service</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#DCE2E2]/80 my-6 leading-relaxed font-light">
                    All services are subject to separate, detailed service agreements.
                  </p>

                </div>
              </div>
            </div>

            {/* Section 2: Intellectual Property */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Intellectual Property
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    All content on this website, including text, graphics, logos, images, and software, is the property of Proactive Building Solutions or its content suppliers and is protected by United States and international copyright laws. The "Proactive Building Solutions" name and logo are trademarks of PBS.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: User Obligations */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    User Obligations
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    You agree to use our website for lawful purposes only. You may not use our site to transmit any material that is unlawful, threatening, defamatory, or infringes on any intellectual property right.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Disclaimer of warranties */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Disclaimer of Warranties
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    The information on this website is provided "as is" without any warranties, express or implied. Proactive Building Solutions does not warrant that the website will be error-free or uninterrupted, or that defects will be corrected.
                  </p>

                </div>
              </div>
            </div>

            {/* Section 5: Limitation of liability */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Limitation of Liability
                  </h3>
                  <p className="text-[#DCE2E2]/80 leading-relaxed font-light">
                    Proactive Building Solutions, its owners, employees, or agents will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use our website or Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Governing Law */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Governing Law
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Change to terms */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Changes to Terms
                  </h3>
                  <p className="text-[#DCE2E2]/80 leading-relaxed font-light">
                    We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website after any change constitutes your acceptance of the new terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8: Contact Us */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  8
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Contact Us
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-gradient-to-br from-[#2A2F2D] to-[#1F2321] p-8 rounded-3xl border border-[#8AD5B7]/10 shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-[#8AD5B7] mb-4">Proactive Building Solutions</h4>
                        <div className="space-y-2 text-[#DCE2E2]/80">
                          <p>22 E 41st Street, Third Floor</p>
                          <p>New York, NY 10017</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#8AD5B7] rounded-full"></div>
                          <span className="text-[#DCE2E2]/80">
                            <span className="font-medium">Email:</span> <a href="mailto:info@pbs.nyc" className="text-[#8AD5B7]">info@pbs.nyc</a>
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#8AD5B7] rounded-full"></div>
                          <span className="text-[#DCE2E2]/80">
                            <span className="font-medium">Phone:</span> <a href="tel:2122716837" className="text-[#8AD5B7]">212-271-6837</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
