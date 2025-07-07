import React from 'react'
import Image from 'next/image'
import CustomImage from '@/app/CustomImage'
import CTA2 from "@/components/CTA2"

const HeroCarousel = ({bg,img,text1,text2,text3,text4="",cta,ctaLink, className=""}) => { 
    return (
            <div className="bg-brand-dark h-[90vh] lg:h-screen 3xl:h-[85vh] relative flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between 2xl:justify-center lg:pt-8 lg:px-10">
                {/* Background Image - Optional */}                
                <div
                    className="absolute w-full inset-0 h-full"
                    aria-hidden="true"
                >
                    <CustomImage
                        src={bg}
                        alt="Modern skyscrapers"
                        className="w-full h-full object-cover z-0 mix-blend-luminosity"
                        fill
                        priority={true}
                        quality={100}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2d2e2e]/90 z-20" />
                </div>
                {/* Left Side - Image */}
                <div
                    className="relative w-full lg:h-full lg:w-[50%] xl:w-[45%] flex justify-center items-end"
                    aria-hidden="true"
                >
                    <Image
                        src={img}
                        alt="Modern skyscrapers"
                        className="w-[60%] mx-auto lg:w-full lg:h-full mix-blend-luminosity object-contain lg:object-cover object-top-right"
                        width={700}
                        height={500}
                    />
                </div>

                {/* Right Side - Text Content */}
                <div
                    className={`z-20 w-full lg:h-full lg:w-[50%] xl:w-[55%] 2xl:w-[50%] 3xl:w-[40%] flex flex-col gap-2 xl:gap-3 items-center justify-end lg:items-start text-center lg:text-left p-6 lg:p-10 2xl:pb-20 ${className}`}
                >
                    {/* Main Heading */}
                    <p
                        className="text-xl lg:text-2xl font-semibold text-[#8AD5B7] lg:max-w-2xl"
                    >
                        {text1}
                    </p>

                    {/* Subheading */}
                    <h2
                        className="text-2xl xl:text-3xl font-semibold font-conthrax text-[#DCE2E2] lg:max-w-3xl 2xl:max-w-2xl 3xl:max-w-xl"
                    >
                       {text2}
                    </h2>

                    <div className="w-[50%] lg:w-[30%] mx-auto lg:mx-0 h-1 bg-[#8AD5B7] rounded-full"></div>

                    <p
                        className="text-sm font-poppins text-[#89A096] lg:max-w-md"
                    >
                       {text3}
                    </p>
                    {text4 && <p
                        className="text-sm font-poppins text-[#89A096] mt-1 lg:mt-2 lg:max-w-md"
                    >
                       {text4}
                    </p>}

                    {/* CTA Button */}
                    <CTA2
                        text={cta}
                        href= {ctaLink}
                        isArrow={false}
                        styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 font-semibold font-conthrax px-8 py-4 transition-colors mt-2 lg:mt-3 w-auto"
                    />
                </div>
            </div>
    )
}

export default HeroCarousel
