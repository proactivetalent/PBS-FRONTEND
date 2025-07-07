"use client";

import HeroSection from "../../../../src/components/HeroSection";
import { motion } from "framer-motion";
import { boilerComplianceData } from "../../../../src/app/inspection-services/data";

const Page = () => {
  return (
    <div className="bg-[#101010] min-h-screen">
      <HeroSection
        heading="NYC Boiler Inspection"
        text="Safeguard your Property and Ensure Regulatory Adherence."
        staggerVal={0.1}
      />

      <div className="py-32 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto space-y-20">

          {/* Compliance Table Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 space-y-4">
              <h1 className="text-3xl md:text-4xl font-gnuolane text-white bg-gradient-to-r from-brand-bright to-emerald-400 bg-clip-text text-transparent">
                {boilerComplianceData[0].headline}
              </h1>
              <p className="text-brand-midGray text-lg max-w-3xl mx-auto">
                {boilerComplianceData[0].bodyText}
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-2xl shadow-black/50">
              <table className="min-w-full bg-[#1a1a1a] divide-y divide-gray-800">
                <thead className="bg-[#252525]">
                  <tr>
                    <th className="py-5 px-6 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider">
                      Scenario
                    </th>
                    <th className="py-5 px-6 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider">
                      Consequences
                    </th>
                    <th className="py-5 px-6 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider">
                      Our Safeguard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {boilerComplianceData[0].scenarios.map((scenario, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#252525]/50 transition-colors duration-200"
                    >
                      <td className="py-5 px-6 text-gray-400 align-top">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brand-bright rounded-full mt-2 flex-shrink-0" />
                          <span>{scenario.consequence}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-gray-400 align-top">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{scenario.details}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-gray-400 align-top">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{scenario.safeguard}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enhanced Additional Text Section */}
            <div className="mt-12 bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-2xl shadow-black/50 p-8 md:p-12">
              <div className="space-y-8">
                <p className="text-brand-midGray text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                  {boilerComplianceData[0].additionalText[0]}
                </p>

                <div className="space-y-8 md:space-y-6">
                  {boilerComplianceData[0].additionalText.slice(1).map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-6 p-4 md:p-6 bg-[#252525]/30 rounded-lg hover:bg-[#252525]/50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-4 h-4 bg-emerald-400 rounded-full mt-1" />
                      </div>
                      <div className="flex-1 space-y-3">
                        {text.split('\n').map((line, lineIndex) => (
                          <div
                            key={lineIndex}
                            className="flex items-start space-x-4 text-base md:text-lg"
                          >
                            {line.startsWith('●') && (
                              <div className="w-2 h-2 bg-brand-bright rounded-full mt-2 flex-shrink-0" />
                            )}
                            <span className="text-brand-midGray">
                              {line.replace('●', '').trim()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rest of the code remains unchanged */}
          {/* Compliance Solutions Section */}
          {boilerComplianceData[1] && (
            <motion.div
              className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-12">
                <h2 className="text-3xl md:text-4xl font-gnuolane text-center bg-gradient-to-r from-brand-bright to-emerald-400 bg-clip-text text-transparent">
                  {boilerComplianceData[1].headline}
                </h2>

                <div className="space-y-8">
                  {boilerComplianceData[1].services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-[#252525] rounded-xl p-6 md:p-8 border border-gray-800"
                    >
                      <h3 className="text-2xl font-semibold text-brand-bright mb-4">
                        {service.title}
                      </h3>

                      <div className="space-y-4 text-brand-midGray text-base">
                        {service.whoNeedsIt && (
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-brand-bright rounded-full mt-2 flex-shrink-0" />
                            <p><strong>Who needs it:</strong> {service.whoNeedsIt}</p>
                          </div>
                        )}

                        {service.exemptions && (
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                            <p><strong>Exemptions:</strong> {service.exemptions}</p>
                          </div>
                        )}

                        {service.process && (
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <p><strong>Process:</strong> {service.process}</p>
                          </div>
                        )}

                        {service.details && (
                          <div className="space-y-3 pl-5 border-l-2 border-brand-bright/30 ml-2">
                            {service.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-brand-bright rounded-full mt-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {service.criticalRequirements && (
                          <div className="mt-4 space-y-3 pl-5 border-l-2 border-red-400/30 ml-2">
                            <p className="text-sm text-red-400 font-semibold mb-2">
                              Critical Requirements:
                            </p>
                            {service.criticalRequirements.map((requirement, reqIndex) => (
                              <div
                                key={reqIndex}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                <span>{requirement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Compliance Roadmap Section */}
          {boilerComplianceData[2] && (
            <motion.div
              className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-12">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl md:text-4xl font-gnuolane bg-gradient-to-r from-brand-bright to-emerald-400 bg-clip-text text-transparent">
                    {boilerComplianceData[2].headline}
                  </h2>
                  <h3 className="text-xl text-brand-midGray">
                    {boilerComplianceData[2].subHeadline}
                  </h3>
                </div>

                <div className="space-y-6 max-w-3xl mx-auto">
                  {boilerComplianceData[2].steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-6 p-6 bg-[#252525] rounded-xl border border-gray-800 hover:border-brand-bright/30 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-bright rounded-full flex items-center justify-center text-black font-bold text-xl">
                        {index + 1}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-white">{step.step}</h4>
                        <p className="text-brand-midGray leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          {boilerComplianceData[3] && (
            <motion.div
              className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 text-center shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  {boilerComplianceData[3].callToAction.text}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <a
                    href={boilerComplianceData[3].callToAction.button1.href}
                    className="bg-brand-bright text-black py-3 px-8 rounded-lg hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105"
                  >
                    {boilerComplianceData[3].callToAction.button1.text}
                  </a>
                  <a
                    href={boilerComplianceData[3].callToAction.button2.href}
                    className="border-2 border-brand-bright text-brand-bright py-3 px-8 rounded-lg hover:bg-brand-bright/10 transition-all duration-300 transform hover:scale-105"
                  >
                    {boilerComplianceData[3].callToAction.button2.text}
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {boilerComplianceData[3].trustSignals.map((signal, index) => (
                    <div
                      key={index}
                      className="bg-[#252525] text-brand-midGray py-2 px-4 rounded-full text-sm flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </section>
      </div>
    </div>
  );
};

export default Page;