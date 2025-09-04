import React from 'react';

export const metadata = {
  title: "Privacy Policy | Proactive Building Solutions",
  description: "Your privacy is important to us. Read the Proactive Building Solutions Privacy Policy to understand how we collect, use, and protect your personal information."
}

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#37403D] via-[#2A2F2D] to-[#1F2321]">
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
          Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-[#DCE2E2]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Your privacy is important to us. Read the Proactive Building Solutions Privacy Policy to understand how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Information */}
          <div className="text-left mb-8">
            <div className="inline-flex items-center space-x-8 text-[#DCE2E2]/70 text-sm font-medium">
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
            <p className="text-lg text-[#DCE2E2]/90 leading-relaxed font-light">
            At Proactive Building Solutions ("PBS," "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://pbs.nyc/ or use our services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Section 1: Information We Collect */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  Information We Collect
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Contact us via forms, email, or phone.",
                      "Request a quote or service information.",
                      "Sign up for an account on our client portal.",
                      "Subscribe to our newsletter."
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#8AD5B7] rounded-full"></div>
                        <span className="text-[#DCE2E2]/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  This information may include:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Personal Identifiers:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">Name, company name, email address, phone number.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Property Information:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">Property address, type, and specific details related to your service inquiry.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Technical Data:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">IP address, browser type, operating system, and pages visited on our site (collected automatically via cookies).</span>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  How We Use Your Information
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  We use the information we collect to:
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Provide, operate, and maintain our Services.",
                      "Communicate with you, including responding to your inquiries and sending service-related updates.",
                      "Process transactions and send you related information, including invoices.",
                      "Improve our website and services.",
                      "Comply with legal obligations and enforce our policies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#8AD5B7] rounded-full"></div>
                        <span className="text-[#DCE2E2]/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Sharing of Information */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  How We Share Your Information
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  We may share your information with:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Service Providers:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">Trusted third parties who assist us in operating our website and providing our services (e.g., cloud hosting, payment processing). These parties are obligated to keep your information confidential.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Government Agencies:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">As required to file permits, applications, and other documents necessary to provide our expediting and compliance services on your behalf.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Legal Requirements:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">If required to do so by law or in response to valid legal process.</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  We do not sell your personal information to third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Data security */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  Data Security
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  We implement appropriate technical and organizational security measures designed to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
                  </p>
                  
                </div>
              </div>
            </div>

            {/* Section 5: Your privacy rights */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  Your Privacy Rights
                  </h3>
                  <p className="text-[#DCE2E2]/80 leading-relaxed font-light">
                  Depending on your location, you may have the right to:
                  </p>
                  <div className="space-y-3 my-6">
                    {[
                      "Access and receive a copy of your personal data.",
                      "Correct inaccurate or incomplete data.",
                      "Request the deletion of your personal data.",
                      "Object to or restrict the processing of your data."
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#8AD5B7] rounded-full"></div>
                        <span className="text-[#DCE2E2]/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#DCE2E2]/80 leading-relaxed font-light">
                  To exercise any of these rights, please contact us using the details below.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Cookies */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  Cookies
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  Our website uses "cookies" to enhance User experience. You can choose to set your browser to refuse cookies, but this may limit your ability to use some parts of our site.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Changes to policy */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                  Changes to This Privacy Policy
                  </h3>
                  <p className="text-[#DCE2E2]/80 leading-relaxed font-light">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
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

export default PrivacyPolicy;
