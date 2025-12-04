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
                            className="my-20 text-base text-[#DCE2E2]/90 font-poppins leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src="/PBS Assets/alertguide/guide6/intro.png"
                        alt="Introduction"
                        className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[500px] h-auto object-contain"
                    />
                </div>
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
                {module.paragraphs?.map((paragraph, index) => (
                    <p
                        key={index}
                        className="mx-16 mt-2 text-base text-[#DCE2E2]/90 font-poppins leading-relaxed"
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

const TicketCenterModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col">
                <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.heading}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                    <div className="w-full lg:w-2/5 rounded-3xl py-4">
                        <img src="/PBS Assets/alertguide/guide6/banner.png" alt="Dashboard" className="w-full h-auto object-contain" />
                    </div>
                    <div className="w-full lg:w-3/5 rounded-3xl py-4">
                        <div className="flex flex-col  gap-1 mb-4">
                            <div className="flex  items-center gap-3">
                                <p className="text-base text-[#B3C1BD] font-poppins leading-relaxed">{module.intro}</p>
                            </div>
                            <div className="flex items-center flex-row gap-2 mt-4">
                                <div className="bg-[#8AD5B7] rounded-3xl px-4 py-2 font-poppins w-fit text-black font-bold">Option A</div>
                                <p className="text-sm text-[#B3C1BD] italic font-poppins leading-relaxed">{module.optionA}</p>
                            </div>
                            <p className="text-base text-[#B3C1BD] font-poppins leading-relaxed">{module.paragraph1}</p>
                            <div className="flex items-center flex-row gap-2 mt-4">
                                <div className="bg-[#8AD5B7] rounded-3xl px-4 py-2 font-poppins w-fit text-black font-bold">Option B</div>
                                <p className="text-sm text-[#B3C1BD] italic font-poppins leading-relaxed">{module.optionB}</p>
                            </div>
                            <p className="text-base text-[#B3C1BD] font-poppins leading-relaxed">{module.paragraph2}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const TicketCreationModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col">
                <h3 className="text-2xl mb-[50px] md:text-3xl font-conthrax text-[#DCE2E2] bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide">
                    {module.heading}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                    <div className="w-full lg:w-1/2 rounded-3xl py-4">
                        <h3 className="text-2xl font-poppins font-semibold text-[#8AD5B7]">
                            {module.title}
                        </h3>
                        <ol className="my-4 list-disc list-inside marker:text-[#8AD5B7] marker:font-semibold">
                            {module.items.map((rawItem, index) => {
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
                                            <ul className="ml-6 list-disc list-inside marker:text-[#8AD5B7] text-sm md:text-base">
                                                {subpoints.map((subpoint, subIndex) => (
                                                    <li key={subIndex} className="text-[#B3C1BD] font-poppins leading-tight">
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
                        <img src="/PBS Assets/alertguide/guide6/create_ticket.png" alt="Dashboard" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ManageTicketsModule = ({ module }) => {
    if (!module) return null;

    return (
        <section className="rounded-3xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-conthrax text-white bg-[#1E2322] text-center p-4 rounded-[15px] uppercase tracking-wide leading-tight">
                        {module.heading}
                    </h2>
                    <div className="w-full rounded-3xl py-4">
                        <h3 className="text-base font-poppins text-[#C5D3CD]">
                            {module.description}
                        </h3>
                        <ol className="my-4 list-disc list-inside marker:text-[#8AD5B7] marker:font-semibold">
                            {module.items.map((rawItem, index) => {
                                const itemData = typeof rawItem === "string" ? { text: rawItem } : rawItem || {};
                                const itemText = itemData.text;
                                const subpoints = Array.isArray(itemData.subpoints) ? itemData.subpoints : [];

                                if (!itemText) {
                                    return null;
                                }

                                return (
                                    <li key={index} className="text-base text-[#C5D3CD] font-poppins leading-relaxed">
                                        {formatTextWithBoldLabel(itemText)}
                                        {subpoints.length > 0 && (
                                            <ul className="ml-6 list-disc list-inside marker:text-[#C5D3CD] text-sm md:text-base">
                                                {subpoints.map((subpoint, subIndex) => (
                                                    <li key={subIndex} className="text-[#B3C1BD] font-poppins leading-tight">
                                                        {subpoint}

                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end">
                    <img
                        src="/PBS Assets/alertguide/guide6/manage_tickets.png"
                        alt="Receive Alerts"
                        className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};



/**
 * Fourth Guide - Clean, minimal design with focus on content
 */
const SixthGuide = ({ post, tableOfContents, scrollToHeading }) => {
    return (
        <>
            {/* Header Section */}
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
                        <p className="text-2xl font-poppins font-semibold text-[#8AD5B7]">Guide # 6</p>
                    </div>
                    <div className="my-4">
                        <h1 className="text-4xl uppercase md:text-5xl lg:text-4xl lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] font-bold text-[#DCE2E2] font-conthrax w-full leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px]">
                <div className="w-full">
                    <div className="prose prose-invert max-w-none w-full">
                        <div className="mb-12 w-full">
                            {post.modules ? (
                                <div className="flex flex-col gap-10">
                                    <IntroductionModule module={post.modules.introduction} />
                                    <TicketCenterModule module={post.modules.ticketCenter} />
                                    <TicketCreationModule module={post.modules.ticketCreation} />
                                    <ManageTicketsModule module={post.modules.manageTickets} />
                                    <ConclusionModule module={post.modules.conclusion} />
                                </div>
                            ) : (
                                <div
                                    className="wordpress-content w-full text-[#DCE2E2] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SixthGuide;

