"use client";

import CustomImage from "@/app/CustomImage";
import { ArrowLeft, CalendarDays, Bookmark } from "lucide-react";

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
            src="/PBS Assets/alertguide/guide1/intro.webp"
            alt="Introduction"
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none h-auto object-contain"
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
        <p className="text-[#8AD5B7] mb-4 font-bold text-center text-base font-poppins">Before initiating the registration process, please ensure you have the following:</p>
        <ul className="mb-[50px] ">
          {module.paragraphs?.map((paragraph, index) => (
            <li key={index} className="text-base text-center text-[#B3C1BD] font-poppins leading-relaxed">
              {paragraph}
            </li>
          ))}
        </ul>
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
        <p className="text-[#8AD5B7] mb-4 font-semibold text-center text-base font-poppins">
          {module.subheading}
        </p>
        <p className="text-[#DCE2E2] mb-4 text-center text-base font-poppins">
          {module.paragraphs}
        </p>

        <div className="flex my-10 gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#8AD5B7] rounded-3xl px-4 py-2 font-poppins w-fit text-black font-bold">Tier 1: Alert Service</div>
            <p className="text-base mt-4 text-[#B3C1BD] font-poppins leading-relaxed">Our foundational Alert Service is provided free of charge for the first three (3) months. This tier delivers real-time notifications for your properties directly to the portal and via email, covering critical events from all relevant NYC agencies (DOB, HPD, FDNY, ECB, etc.).</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-[#8AD5B7] rounded-3xl px-4 py-2 font-poppins w-fit text-black font-bold">Tier 2: Full Membership</div>
            <p className="text-base mt-4 text-[#B3C1BD] font-poppins leading-relaxed">Full Membership: The PBS Member Portal represents the next tier of service, enabling comprehensive access and proactive remediation. Membership is available at a rate of $9 per building per month following the initial trial period. Membership transforms alerts into actionable resolutions. The moment an alert is generated within your portal, the PBS remediation protocol is automatically initiated. This includes:</p>
            <ul className="list-disc ml-4  text-base mt-4 text-[#B3C1BD] font-poppins leading-relaxed">
              <li>The auto-generation of a comprehensive, step-by-step corrective checklist.</li>
              <li>The immediate assignment of a dedicated PBS team member to execute the required tasks.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

const ConclusionModule = ({ module }) => {
  if (!module) return null;

  return (
    <section className="rounded-3xl">
      <div className="flex flex-col">
        <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
          {module.heading}
        </h3>
        <p className="text-[#C5D3CD] mb-4 text-center text-base font-poppins">
          {module.paragraphs}
        </p>
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
      <ol className="my-4 mb-[50px] list-decimal list-inside marker:text-[#8AD5B7] marker:font-semibold">
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
        icon: module.icon || "/PBS Assets/alertguide/guide1/reg_icon.png",
        banner: resolveMediaConfig(module.banner || module.bannerImage),
        items: module.items || [],
        alignment: "default"
      },
      {
        title: module.subheading1,
        description: module.stepDescription1 || module.desc1,
        footer: module.stepFooter1 || module.footer1 || "",
        icon: module.icon1 || "/PBS Assets/alertguide/guide1/mail_icon.png",
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
        <h2 className="text-2xl md:text-3xl font-conthrax text-white bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide leading-tight">
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
              ? "/PBS Assets/alertguide/guide1/reg_icon.png"
              : "/PBS Assets/alertguide/guide1/mail_icon.png");
          const banner = resolveMediaConfig(step.banner);

          const imageJustifyClass = isReversed
            ? "justify-center md:justify-start"
            : "justify-center md:justify-end";

          return (
            <div key={`${step.title}-${index}`} className="flex flex-col gap-6">
              <div
                className={`flex flex-col md:flex-row gap-6 ${
                  isReversed ? "md:flex-row-reverse" : ""
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

/**
 * First Guide - Standard three-column layout with TOC and newsletter
 */
const FirstGuide = ({ post, tableOfContents, scrollToHeading, newsletterEmail, setNewsletterEmail, newsletterSubmitting, newsletterSubmitted, handleNewsletterSubmit, setNewsletterSubmitted, relatedPosts, relatedLoading }) => {
  return (
    <>
      {/* Article Header */}
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
            <p className="text-2xl font-poppins font-semibold text-[#8AD5B7]">Guide # 1</p>
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
                      <PrerequisitesModule module={post.modules.prerequisites} />
                        <FeaturesModule module={post.modules.features} />
                      <ServiceTiersModule module={post.modules.serviceTiers} />
                      <ConclusionModule module={post.modules.conclusion} />
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
    </>
  );
};

export default FirstGuide;

