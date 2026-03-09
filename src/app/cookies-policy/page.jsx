import React from 'react';

export const metadata = {
  title: "Cookies Policy | PBS NYC Website",
  description: "PBS NYC uses cookies and similar technologies on our website to improve your browsing experience and service delivery."
}

const CookiePolicy = () => {
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
            Cookies Policy
          </h1>
          <p className="text-lg md:text-xl text-[#DCE2E2]/80 font-light max-w-2xl font-poppins mx-auto leading-relaxed">
            Learn how Proactive Building Solutions uses cookies and similar tracking technologies to enhance your experience on our website.
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
              This Cookies Policy explains what cookies are, how Proactive Building Solutions ("PBS," "we," "us," or "our") uses them on our website https://pbs.nyc/, and what choices you have regarding them.
            </p>
            <p className="text-lg text-[#DCE2E2]/90 leading-relaxed font-light">
              By continuing to use our website, you consent to the use of cookies in accordance with this policy. You can manage your preferences at any time through your browser settings.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Section 1: Whar are cookies */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    What Are Cookies
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to the website owners.
                  </p>

                </div>
              </div>
            </div>

            {/* Section 2: How We Use Cookies */}
            <div className="group font-light">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    How We Use Cookies
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    We use cookies for several purposes, which are categorized as follows:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Essential Cookies (Strictly Necessary):</span>
                        <span className="text-[#DCE2E2]/80 ml-2">These cookies are crucial for the basic functions of the website, such as navigating pages, accessing secure areas, and processing service requests. The website cannot function properly without these cookies. They do not store any personally identifiable information.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Performance and Analytics Cookies:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Functionality Cookies:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences (like language or region). They may be set by us or by third-party providers whose services we have added to our pages.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8AD5B7] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-[#8AD5B7]">Targeting Cookies:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They work by uniquely identifying your browser and device.</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Section 3: Specific Cookies we use */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Specific Cookies We Use
                  </h3>

                  {/* Cookies Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-[#8AD5B7]/30 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-[#8AD5B7]/10">
                          <th className="border border-[#8AD5B7]/30 px-4 py-3 text-left text-[#8AD5B7] font-semibold font-conthrax">
                            Cookie Name
                          </th>
                          <th className="border border-[#8AD5B7]/30 px-4 py-3 text-left text-[#8AD5B7] font-semibold font-conthrax">
                            Category
                          </th>
                          <th className="border border-[#8AD5B7]/30 px-4 py-3 text-left text-[#8AD5B7] font-semibold font-conthrax">
                            Purpose
                          </th>
                          <th className="border border-[#8AD5B7]/30 px-4 py-3 text-left text-[#8AD5B7] font-semibold font-conthrax">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-[#2E3734]/50 hover:bg-[#2E3734]/70 transition-colors">
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2] font-medium">
                            pbs_session
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Essential
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Maintains your user session during your visit
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Session
                          </td>
                        </tr>
                        <tr className="bg-[#2E3734]/30 hover:bg-[#2E3734]/50 transition-colors">
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2] font-medium">
                            cookie_consent
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Essential
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Remembers your cookie preference
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            1 year
                          </td>
                        </tr>
                        <tr className="bg-[#2E3734]/50 hover:bg-[#2E3734]/70 transition-colors">
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2] font-medium">
                            _ga
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Analytics
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Google Analytics cookie used to distinguish unique users
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            2 years
                          </td>
                        </tr>
                        <tr className="bg-[#2E3734]/30 hover:bg-[#2E3734]/50 transition-colors">
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2] font-medium">
                            _gid
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Analytics
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Google Analytics cookie used to distinguish users
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            24 hours
                          </td>
                        </tr>
                        <tr className="bg-[#2E3734]/50 hover:bg-[#2E3734]/70 transition-colors">
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2] font-medium">
                            _gat
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Analytics
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            Google Analytics cookie used to throttle request rate
                          </td>
                          <td className="border border-[#8AD5B7]/30 px-4 py-3 text-[#DCE2E2]/80">
                            1 minute
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[#DCE2E2]/80 mt-6 leading-relaxed font-light">
                    The table above provides details about the specific cookies we use on our website. These cookies help us provide you with a better user experience and improve our services.
                  </p>

                </div>
              </div>
            </div>

            {/* Section 4: How to manage cookies */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    How to Manage Cookies
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className='font-light'>
                        <span className="font-semibold text-[#8AD5B7]">Browser Controls:</span>
                        <span className="text-[#DCE2E2]/80 ml-2">You can manage your cookie settings through your web browser. Typically, these settings can be found in the "Options," "Tools," or "Preferences" menu of your browser. For more information, visit the help section of your browser:</span>
                        <div className="space-y-3 mb-6">
                          {[
                            "[Cookie settings in Chrome] (https://support.google.com/chrome/answer/95647)",
                            "[Cookie settings in Firefox](https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences)",
                            "[Cookie settings in Safari](https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac)",
                            "[Cookie settings in Edge](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-1.5 h-1.5 bg-[#8AD5B7] rounded-full"></div>
                              <span className="text-[#DCE2E2]/80 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      
                    </div>
                    <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    Analytics Opt-Out: To opt-out of being tracked by Google Analytics across all websites, visit [Google Analytics Opt-Out](https://tools.google.com/dlpage/gaoptout) browsers to prevent them from being placed.
                  </p>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                  Please note that if you choose to disable cookies, some features of our website may not function correctly, and your user experience may be affected.
                  </p>

                  </div>

                </div>
              </div>
            </div>

            {/* Section 5: Changes to policy */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Changes to This Cookies Policy
                  </h3>
                  <p className="text-[#DCE2E2]/80 leading-relaxed font-light">
                    We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our practices. We will post any changes on this page and update the "Last Updated" date.
                  </p>

                </div>
              </div>
            </div>

            {/* Section 6: Contact Us */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8AD5B7] to-[#6BC4A3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-conthrax">
                    Contact Us
                  </h3>
                  <p className="text-[#DCE2E2]/80 mb-6 leading-relaxed font-light">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-gradient-to-br from-[#2A2F2D] to-[#1F2321] p-8 rounded-3xl border border-[#8AD5B7]/10 shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8 ">
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

export default CookiePolicy;
