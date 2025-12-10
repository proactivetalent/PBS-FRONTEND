"use client";

import CustomImage from "@/app/CustomImage";
import { ArrowLeft, CalendarDays, Bookmark } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const IntroductionModule = ({ module }) => {
  if (!module) return null;

  return (
    <section className="rounded-3xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-conthrax text-white bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide leading-tight">
            {module.heading}
          </h2>
          {module.paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="mt-6 text-base text-[#DCE2E2]/90 font-poppins leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/PBS Assets/alertguide/guide2/intro.webp"
            alt="Introduction"
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

const PrerequisitesModule = ({ module }) => {
  if (!module) return null;

  return (
    <section className="rounded-3xl">
      <div className="flex flex-col">
        <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
          {module.heading}
        </h3>
        <p className="mb-4 text-center text-[#C5D3CD] text-base font-poppins">{module.intro}</p>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <div className="w-full lg:w-1/2 rounded-3xl py-4 px-8 ">
            <div className="flex flex-col  gap-1 mb-4">
              <div className="flex  items-center gap-3">
                <img
                  src={module.icon1}
                  alt="Step icon"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-poppins font-semibold text-[#8AD5B7]">
                    {module.title1}
                  </h3>
                  <div className="text-base text-[#C5D3CD] font-poppins leading-relaxed">A quick view of all properties in your portfolio</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-1 mb-4">
              <div className="flex  items-center gap-3">
                <img
                  src={module.icon2}
                  alt="Step icon"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-poppins font-semibold text-[#8AD5B7]">
                    {module.title2}
                  </h3>
                  <div className="text-base text-[#C5D3CD] font-poppins leading-relaxed">The hub for adding, editing or removing properties. This is your next critical step.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-1 mb-4">
              <div className="flex  items-center gap-3">
                <img
                  src={module.icon3}
                  alt="Step icon"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-poppins font-semibold text-[#8AD5B7]">
                    {module.title3}
                  </h3>
                  <div className="text-base text-[#C5D3CD] font-poppins leading-relaxed">A detailed, aggregated view of all permits, violations, hearings and compliances across your portfolio.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-1 mb-4">
              <div className="flex  items-center gap-3">
                <img
                  src={module.icon4}
                  alt="Step icon"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-poppins font-semibold text-[#8AD5B7]">
                    {module.title4}
                  </h3>
                  <div className="text-base text-[#C5D3CD] font-poppins leading-relaxed">Manage your notification preferences and account settings.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-3xl py-4 px-8">
            <img src="/PBS Assets/alertguide/guide2/dashboard.webp" alt="Dashboard" className="w-full h-auto object-contain" />
          </div>
        </div>
        {/* <ul className="mb-[50px]">
          {module.paragraphs?.map((paragraph, index) => (
            <li key={index} className="text-base text-center text-[#B3C1BD] font-poppins leading-relaxed">
              {paragraph}
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

const FeaturesModule = ({ module }) => {
  if (!module) return null;

  const resolveMediaConfig = (mediaValue) => {
    if (!mediaValue) return null;

    if (typeof mediaValue === "object" && !Array.isArray(mediaValue)) {
      return {
        src: mediaValue.src || null,
        containerClass: mediaValue.containerClass || "",
        imageClass: mediaValue.imageClass || "",
      };
    }

    if (typeof mediaValue === "string") {
      return {
        src: mediaValue,
        containerClass: "",
        imageClass: "",
      };
    }

    return null;
  };

  const renderStepItems = (items = []) => {
    if (!Array.isArray(items) || items.length === 0) return null;

    return (
      <ol className="my-4 mb-[50px] list-inside marker:text-[#8AD5B7] marker:font-semibold">
        {items.map((rawItem, index) => {
          const itemData = typeof rawItem === "string" ? { text: rawItem } : rawItem || {};
          const itemText = itemData.text;
          const subpoints = Array.isArray(itemData.subpoints) ? itemData.subpoints : [];

          if (!itemText) {
            return null;
          }

          return (
            <li key={index} className="text-base text-[#B3C1BD] font-poppins leading-relaxed">
              {itemText}
              {subpoints.length > 0 && (
                <ul className="ml-6 list-disc marker:text-[#8AD5B7] text-sm md:text-base">
                  {subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex} className="text-[#B3C1BD] font-poppins leading-relaxed">
                      {subpoint}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    );
  };

  const normalizedSteps = (() => {
    if (Array.isArray(module.steps) && module.steps.length > 0) {
      return module.steps.map((step, index) => ({
        title: step.title || step.heading || step.subheading || `Step ${index + 1}`,
        description: step.description || step.desc || "",
        footer: step.footer || step.listFooter || "",
        icon: step.icon,
        banner: resolveMediaConfig(step.banner ?? step.bannerImage),
        items: step.items || [],
        alignment: step.alignment || (index % 2 === 1 ? "reverse" : "default")
      }));
    }

    const legacySteps = [
      {
        title: module.subheading,
        description: module.stepDescription || module.desc,
        footer: module.stepFooter || module.footer || "",
        icon: module.icon || "/PBS Assets/alertguide/reg_icon.png",
        banner: resolveMediaConfig(module.banner || module.bannerImage),
        items: module.items || [],
        alignment: "default"
      },
      {
        title: module.subheading1,
        description: module.stepDescription1 || module.desc1,
        footer: module.stepFooter1 || module.footer1 || "",
        icon: module.icon1 || "/PBS Assets/alertguide/mail_icon.png",
        banner: resolveMediaConfig(module.banner1 || module.bannerImage1),
        items: module.items1 || [],
        alignment: "reverse"
      }
    ].filter(
      (step) =>
        step &&
        (step.title || (Array.isArray(step.items) && step.items.length > 0))
    );

    return legacySteps;
  })();

  if (normalizedSteps.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl">
      {module.heading && (
        <h2 className="px-0 lg:px-60 text-2xl md:text-3xl font-conthrax text-white bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide leading-tight">
          {module.heading}
        </h2>
      )}

      {module.desc && (
        <p className="my-14 text-base md:text-lg text-[#B3C1BD] font-poppins leading-relaxed text-center">
          {module.desc}
        </p>
      )}

      <div className="flex flex-col gap-16">
        {normalizedSteps.map((step, index) => {
          const isReversed =
            step.alignment === "reverse" ||
            step.alignment === "right" ||
            step.alignment === "rtl";
          const iconSrc =
            step.icon ||
            (index === 0
              ? "/PBS Assets/alertguide/reg_icon.png"
              : "/PBS Assets/alertguide/mail_icon.png");
          const banner = resolveMediaConfig(step.banner);

          const imageJustifyClass = isReversed
            ? "justify-center md:justify-start"
            : "justify-center md:justify-end";

          return (
            <div key={`${step.title}-${index}`} className="flex flex-col gap-6">
              <div
                className={`flex flex-col md:flex-row gap-6 ${isReversed ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={iconSrc}
                      alt="Step icon"
                      className="h-12 w-12 object-contain"
                    />
                    <h3 className="text-2xl font-poppins font-semibold text-[#8AD5B7]">
                      {step.title}
                    </h3>
                  </div>

                  {step.description && (
                    <p className="mt-4 text-base text-[#B3C1BD] font-poppins leading-relaxed">
                      {step.description}
                    </p>
                  )}

                  {renderStepItems(step.items)}

                  {step.footer && (
                    <p className="text-sm md:text-base font-poppins text-[#B3C1BD] leading-relaxed">
                      {step.footer}
                    </p>
                  )}
                </div>

                <div
                  className={`w-full md:w-1/2 flex flex-row gap-4 ${imageJustifyClass}`}
                >
                  {banner?.src && (
                    <div className={banner.containerClass || ""}>
                      <img
                        src={banner.src}
                        alt="Step banner"
                        className={banner.imageClass || ""}
                      />
                    </div>
                  )}
                </div>
              </div>
              {index < normalizedSteps.length - 1 && (
                <div className="h-[2px] w-full bg-[#0C0C0C] rounded-full opacity-25" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ServiceTiersModule = ({ module }) => {
  if (!module) return null;

  return (
    <section className="rounded-3xl">
      <div className="flex flex-col">
        <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
          {module.heading}
        </h3>
        <p className="text-[#DCE2E2] mb-4 text-center text-base font-poppins">
          {module.paragraphs}
        </p>

        <div className="flex my-10 gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-[#1E2322] rounded-3xl py-4 px-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={module.icon1}
                alt="Step icon"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-2xl font-poppins font-semibold text-[#8AD5B7]">
                {module.title1}
              </h3>
            </div>
            <ol className="list-decimal ml-4  text-base text-[#B3C1BD] font-poppins leading-relaxed">
              <li>On the main Dashboard, locate the User Profile block on the right side.</li>
              <li>Click "Change Profile Photo".</li>
              <li>In the window that appears, upload your image and click OK</li>
              <li>Your profile picture will update instantly".</li>

            </ol>
          </div>
          <div className="w-full lg:w-1/2 bg-[#1E2322] rounded-3xl py-4 px-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={module.icon2}
                alt="Step icon"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-2xl font-poppins font-semibold text-[#8AD5B7]">
                {module.title2}
              </h3>
            </div>
            <ol className="list-decimal ml-4  text-base text-[#B3C1BD] font-poppins leading-relaxed">
              <li>In the same User Profile block, click the "Edit Profile" button.</li>
              <li>Verify or update your Email, Company Name, Address, and Phone Number.</li>
              <li>Click Save to confirm your changes.</li>
            </ol>
          </div>
        </div>
        <p className="text-[#DCE2E2] mb-4 text-center text-base font-poppins">
          {module.paragraphs}
        </p>


      </div>
    </section>
  );
};

const ConclusionModule = ({ module }) => {
  if (!module) return null;

  return (
    <section className="rounded-3xl">
      <div className="flex flex-col text-[#C5D3CD]">
        <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
          {module.heading}
        </h3>
        <p className="mb-4 text-base font-poppins">
          {module.paragraphs}
        </p>
        <ul className="list-disc ml-4  text-base font-poppins leading-relaxed">
          {module.items?.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
const ConfiguringAlertsModule = ({ module }) => {
  if (!module) return null;

  return (
    <section className="rounded-3xl">
      <section className="rounded-3xl">
        <div className="flex flex-col text-[#C5D3CD]">
          <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
            {module.heading}
          </h3>
          <p className="mb-4 text-base text-center font-poppins">
            {module.desc}
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div className="w-full lg:w-1/2">
              <img src="/PBS Assets/alertguide/guide2/notification.webp" alt="Settings" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="list-decimal ml-4  text-base font-poppins leading-relaxed">
                {module.items?.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mb-4 text-base text-center font-poppins">
            {module.suffix}
          </p>
        </div>
      </section>

    </section>
  );
};


/**
 * Second Guide - Large hero image with content below
 */
const SecondGuide = ({ post, tableOfContents, scrollToHeading }) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateElement = (ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    };

    if (heroRef.current) animateElement(heroRef);
    if (contentRef.current) animateElement(contentRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Large Hero Section */}
      <div className="mb-16 text-center relative flex items-center justify-center rounded-xl overflow-hidden -mx-6 md:-mx-12 lg:-mx-24 py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/PBS Assets/homepage/herosection/hero-bg.png')`
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 px-6 py-12">
          <div className="pt-8 mb-6">
            <a
              href="/alert-system-guide"
              className="text-[#8AD5B7] hover:text-[#8AD5B7]/80 flex items-center gap-2 font-poppins transition-all justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Alert System Guides
            </a>
          </div>
          <div>
            <p className="text-2xl font-poppins font-semibold text-[#8AD5B7]">Guide # 2</p>
          </div>
          <div className="my-4">
            <h1 className="uppercase text-4xl md:text-5xl lg:text-4xl lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] font-bold text-[#DCE2E2] font-conthrax w-full leading-tight">
              {post.title}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-[#89A096] font-poppins">
            {/* <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              <span>{post.date}</span>
            </div> */}
            {/* <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5" />
              <span>{post.category}</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Content Section - Full Width */}
      <div className="container mx-auto lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">


          {/* Center Column - Main Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="w-full mx-auto lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px]">
              <div className="w-full">
                <div className="prose prose-invert max-w-none w-full">
                  <div className="mb-12 w-full">
                    {post.modules ? (
                      <div className="flex flex-col gap-10">
                        <IntroductionModule module={post.modules.introduction} />
                        <ServiceTiersModule module={post.modules.serviceTiers} />
                        <PrerequisitesModule module={post.modules.prerequisites} />
                        <FeaturesModule module={post.modules.features} />
                        <ConclusionModule module={post.modules.conclusion} />
                        <ConfiguringAlertsModule module={post.modules.configuringAlerts} />
                      </div>
                    ) : (
                      <div
                        className="wordpress-content w-full"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      {/* <div className="container mx-auto max-w-4xl">
        <div ref={contentRef} className="prose prose-invert max-w-none w-full">
          <div 
            className="wordpress-content w-full text-[#DCE2E2]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div> */}
    </>
  );
};

export default SecondGuide;

