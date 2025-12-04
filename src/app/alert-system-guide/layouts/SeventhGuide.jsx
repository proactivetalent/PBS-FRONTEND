"use client";

import CustomImage from "@/app/CustomImage";
import { ArrowLeft, CalendarDays, Bookmark } from "lucide-react";
import CTA2 from "@/components/CTA2";


// Helper function to format text with bold before colon
const formatTextWithBoldLabel = (text) => {
    if (!text) return text;
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
        const beforeColon = text.substring(0, colonIndex + 1);
        const afterColon = text.substring(colonIndex + 1);
        return (
            <>
                <span className="font-semibold text-[#8AD5B7]">{beforeColon}</span>
                {afterColon}
            </>
        );
    }
    return text;
};


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
                        src="/PBS Assets/alertguide/guide7/intro.png"
                        alt="Introduction"
                        className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

const MailingModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src="/PBS Assets/alertguide/guide7/mailing.png"
                        alt="Introduction"
                        className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none h-auto object-contain"
                    />
                </div>
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
            </div>
        </section>
    );
};

const FormsModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col text-[#C5D3CD]">
                <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.heading}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                    <div className="w-full lg:w-1/2">
                        <img src="/PBS Assets/alertguide/guide7/forms.png" alt="Settings" className="w-full h-auto object-contain" />
                    </div>
                    <div className="w-full lg:w-1/2">

                        <p className="text-base font-poppins font-bold text-[#8AD5B7]">
                            {module.subheading}
                        </p>
                        <p className="mb-4 text-base font-poppins">
                            {module.desc}
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

const ManagingMailingModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col">
                <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.heading}
                </h3>

                <p className="mx-16 mb-2 text-[#8AD5B7] text-base font-poppins font-semibold">
                    {module.paragraphs}
                </p>
                {module.items && module.items.length > 0 && (
                    <ul className="mx-16 list-disc list-inside marker:text-[#8AD5B7] text-sm md:text-base font-normal">
                        {module.items.map((item, index) => (
                            <li key={index} className="text-[#B3C1BD] font-poppins leading-relaxed">
                                {item}

                            </li>
                        ))}
                    </ul>
                )}
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
                {module.paragraphs?.map((paragraph, index) => (
                        <p
                            key={index}
                            className="mx-16 mt-6 text-base text-[#DCE2E2]/90 font-poppins leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}

                    {/* Check if grid_button exists and display it */}
                {module.grid_button && module.grid_button_link && (
                    <div className="w-full flex justify-center my-10">
                        {/* CTA Button */}
                        <CTA2
                            text={module.grid_button}
                            href={module.grid_button_link}
                            isArrow={false}
                            styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 font-semibold font-poppins px-8 py-4 transition-colors mt-2 lg:mt-3 w-auto"
                        />
                    </div>
                )}
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
            <ol className="my-4 mb-[50px] list-disc list-inside marker:text-[#8AD5B7] marker:font-semibold">
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
                <h2 className="mb-10 text-2xl md:text-3xl font-conthrax text-white bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide leading-tight">
                    {module.heading}
                </h2>
            )}

            <div className="flex flex-col gap-10">
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
                                className={`flex flex-col md:flex-row gap-6 ${isReversed ? "md:flex-row-reverse" : ""
                                    }`}
                            >

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
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-center gap-3">
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


const SprinklerModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col">
                <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.heading}
                </h3>
                <h3 className="w-2/3 mx-auto text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.title}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                    <div className="w-full lg:w-1/2 rounded-3xl py-4">
                        <ol className="my-4 list-decimal list-inside marker:text-[#8AD5B7] marker:font-semibold">
                            {module.items.map((rawItem, index) => {
                                const itemData = typeof rawItem === "string" ? { text: rawItem } : rawItem || {};
                                const itemText = itemData.text;
                                const subpoints = Array.isArray(itemData.subpoints) ? itemData.subpoints : [];

                                if (!itemText) {
                                    return null;
                                }

                                return (
                                    <li key={index} className="text-xl text-[#8AD5B7] font-poppins leading-relaxed font-semibold">
                                        {itemText}
                                        {subpoints.length > 0 && (
                                            <ul className="list-disc list-inside marker:text-[#8AD5B7] text-sm md:text-base font-normal">
                                                {subpoints.map((subpoint, subIndex) => (
                                                    <li key={subIndex} className="text-[#B3C1BD] font-poppins leading-relaxed">
                                                        {formatTextWithBoldLabel(subpoint)}

                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl py-4">
                        <ol className="my-4 list-none list-inside marker:text-[#8AD5B7] marker:font-semibold">
                            {module.items1.map((rawItem, index) => {
                                const itemData = typeof rawItem === "string" ? { text: rawItem } : rawItem || {};
                                const itemText = itemData.text;
                                const subpoints = Array.isArray(itemData.subpoints) ? itemData.subpoints : [];

                                if (!itemText) {
                                    return null;
                                }

                                return (
                                    <li key={index} className="text-xl text-[#8AD5B7] font-poppins leading-relaxed font-semibold">
                                        {itemText}
                                        {subpoints.length > 0 && (
                                            <ul className="list-disc list-inside marker:text-[#8AD5B7] text-sm md:text-base font-normal">
                                                {subpoints.map((subpoint, subIndex) => (
                                                    <li key={subIndex} className="text-[#B3C1BD] font-poppins leading-relaxed">
                                                        {formatTextWithBoldLabel(subpoint)}

                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                        <img src="/PBS Assets/alertguide/guide6/create_ticket.png" alt="Dashboard" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};


const FireAlarmModule = ({ module }) => {
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
            <ol className="my-4 mb-[50px] list-disc list-inside marker:text-[#8AD5B7] marker:font-semibold">
                {items.map((rawItem, index) => {
                    const itemData = typeof rawItem === "string" ? { text: rawItem } : rawItem || {};
                    const itemText = itemData.text;
                    const subpoints = Array.isArray(itemData.subpoints) ? itemData.subpoints : [];

                    if (!itemText) {
                        return null;
                    }

                    return (
                        <li key={index} className="text-base text-[#B3C1BD] font-poppins leading-relaxed">
                            {formatTextWithBoldLabel(itemText)}
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
                <h3 className="w-2/3 mx-auto text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.heading}
                </h3>
            )}

            {module.prefix && (
                <h3 className="w-2/3 mt-4 text-base text-center text-[#B3C1BD] font-poppins leading-relaxed mx-auto">
                    {module.prefix}
                </h3>
            )}


            <div className="flex flex-col gap-10">
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
                                className={`flex flex-col md:flex-row gap-6 ${isReversed ? "md:flex-row-reverse" : ""
                                    }`}
                            >

                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-poppins font-semibold text-[#8AD5B7]">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {step.description && (
                                        <p className="mt-4 text-base text-[#B3C1BD] font-poppins leading-relaxed">
                                            {step.description}
                                        </p>
                                    )}

                                    {renderStepItems(step.items)}


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
                            {step.footer && (
                                <p className="text-base text-[#B3C1BD] font-poppins leading-relaxed">
                                    {formatTextWithBoldLabel(step.footer)}
                                </p>
                            )}

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
const SeventhGuide = ({ post, tableOfContents, scrollToHeading, newsletterEmail, setNewsletterEmail, newsletterSubmitting, newsletterSubmitted, handleNewsletterSubmit, setNewsletterSubmitted, relatedPosts, relatedLoading }) => {
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
                        <p className="text-2xl font-poppins font-semibold text-[#8AD5B7]">Guide # 7</p>
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
                                                <MailingModule module={post.modules.mailing} />
                                                <FeaturesModule module={post.modules.features} />
                                                <SprinklerModule module={post.modules.sprinkler} />
                                                <FireAlarmModule module={post.modules.fireAlarm} />
                                                <FormsModule module={post.modules.forms} />
                                                <ManagingMailingModule module={post.modules.managingMailing} />
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

export default SeventhGuide;

