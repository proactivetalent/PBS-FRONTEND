"use client";

import CustomImage from "@/app/CustomImage";

const Solutions = () => {
  const SolutionsItems = [
    {
      title: "Alerts",
      description:
        "Stay alert and never miss a critical step again. Our system is online 24/7 collecting data in real time. We don't just cover the main departments--we cover it all. From 311 complaints to ECB hearings, we have you covered. Want to avoid the headache? Get ahead of it and sign up today.",
      image:
        "/PBS Assets/homepage/solutions/alerts.png",
    },
    {
      title: "Membership",
      description:
        "Getting alerts is half the battle. Membership is the other half--when you join, you allow us to monitor your property for you. Preventative measures and a free survey of your property will eliminate most obstacles before they arise, and our instant response time will resolve issues before they escalate.",
      image:
        "/PBS Assets/homepage/solutions/membership.png",
    },
    {
      title: "Planning",
      description:
        "Our planning tool provides you with precise and up to the minute soft costs for every type of project from architecture to engineering to special inspections. With just a few simple details, our advanced algorithm will provide accurate results to get you ahead before your project begins.",
      image:
        "/PBS Assets/homepage/solutions/planning.png",
    },
    {
      title: "Development",
      description:
        "Development code has never been as strict or fast-changing as it is today. Missing one item could derail a project and its budget. Our development tool is always on track, automatically scanning department codes corresponding to the details you provided in our planning calculator. Stay current with project specific requirements so that it gets done right the first time every time.",
      image:
        "/PBS Assets/homepage/solutions/development.png",
    },
  ];

  return (
    <div className="bg-[#2B3331] py-16">
      {/* solutions grid */}
      <div className="px-4 sm:px-6 lg:px-0">
        <div className="w-full mx-auto px-6 md:px-8 lg:px-12 bg-[#1E2322] rounded-[20px] p-10 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] ">
          {/* Heading and Subheading */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl lg:text-5xl font-conthrax uppercase font-bold text-[#8AD5B7] mb-4">
              Solutions
            </h1>
            <div className="w-[25%] mx-auto bg-[#8AD5B7] rounded-full h-1 my-3"></div>
            <div className="max-w-3xl mx-auto text-white">
              <p className="text-base font-semibold lg:text-lg font-poppins">
                Compliance Secured, Strategy Defined, Future Built
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-0 w-full 3xl:w-[1160px] mx-auto pb-6 ">
            {SolutionsItems.map((item, index) => (
              <div
                key={item.title}
                className={`w-full solution-card bg-[#1E2322] p-3 2xl:p-6 ${
                  index % 2 === 0 ? 'md:border-r border-[#8AD5B7]' : ''
                } ${
                  index < SolutionsItems.length - 2 ? 'md:border-b border-[#8AD5B7]' : ''
                }`}
              >
                <div className="flex flex-row items-center gap-4">
                  <CustomImage
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-[50px] object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl xl:text-2xl uppercase font-conthrax font-semibold text-[#DCE2E2] mb-4">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[#89A096] text-left text-sm lg:text-base font-poppins leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;