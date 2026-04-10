'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomImage from "@/app/CustomImage";
import { Linkedin, Youtube } from "lucide-react";
import { API_URL } from "@/config";

/**
 * Site footer: outer dark band, inner rounded panel, nav columns, contact strip, copyright.
 */
const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const linkColumns = [
    [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Our Team", href: "/about-us/our-team" },
      { name: "Alert System", href: "/alert" },
    ],
    [
      { name: "Blogs", href: "/blog" },
      { name: "Local Law Guides", href: "/local-law-guide" },
      { name: "FAQ's", href: "/faqs" },
      { name: "About us", href: "/about-us" },
      { name: "Contact Us", href: "/contacts" },
    ],
    [
      { name: "Terms & Conditions", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookies Policy", href: "/cookies-policy" },
    ],
  ];

  const sectionLabels = ["Explore", "Resources", "Legal"];

  /** Minimal text-first links; subtle emphasis with bottom rule. */
  const footerLinkClass =
    "font-poppins inline-block max-w-full border-b border-transparent py-2 text-sm font-medium text-[#DCE2E2]/95 transition-colors " +
    "hover:text-[#8AD5B7] hover:border-white/20 " +
    "focus-visible:outline-none focus-visible:text-[#8AD5B7] focus-visible:border-[#8AD5B7]/50 " +
    "lg:py-1.5";

  return (
    <footer className="bg-[#1E2322] text-[#E8EEEC]">
      <div className="mx-auto w-full max-w-[100vw] px-4 pt-10 pb-6 sm:px-5 lg:w-[980px] lg:px-0 lg:pt-14 lg:pb-8 xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px]">
        <div className="rounded-2xl bg-[#2E3734] px-4 py-8 shadow-lg shadow-black/20 sm:rounded-3xl sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="flex flex-col gap-9 lg:flex-row lg:gap-12 lg:justify-between">
            <div className="shrink-0 lg:max-w-[min(100%,380px)]">
              <Link href="/" className="inline-block w-full sm:w-[74px]">
                <CustomImage
                  src="/pics/LOGO.png"
                  alt="PBS Proactive Building Solutions"
                  width={220}
                  height={80}
                  className="h-auto w-[min(100%,200px)] sm:w-[200px]"
                />
              </Link>
              <p className="mt-5 max-w-prose text-sm leading-relaxed text-[#C5D0CC] font-poppins sm:mt-6">
                Protect your investments with NYC&apos;s premier property management and alert service,
                designed to keep you ahead of violations, deadlines, and zoning changes
              </p>
              <a
                href={`${API_URL}/portal/login`}
                className="mt-7 inline-flex w-full min-h-12 items-center justify-center rounded-full bg-[#8AD5B7] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#1E2322] transition-colors hover:bg-[#7bc9a9] font-conthrax sm:mt-8 sm:w-auto sm:min-h-0"
              >
                Login portal
              </a>
            </div>

            <div className="grid min-w-0 flex-1 grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
              {linkColumns.map((column, colIndex) => (
                <nav
                  key={colIndex}
                  aria-label={`Footer ${sectionLabels[colIndex]}`}
                  className={colIndex === 2 ? "md:col-span-2 lg:col-span-1" : undefined}
                >
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#89A096] font-poppins">
                    {sectionLabels[colIndex]}
                  </p>
                  <ul className="flex flex-col items-start gap-0.5 lg:gap-1">
                    {column.map((item) => (
                      <li key={item.href + item.name}>
                        <Link href={item.href} className={footerLinkClass}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-8 border-t border-white/10 pt-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 lg:mt-12 lg:flex lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-x-6 lg:gap-y-4 lg:pt-10">
            <div className="flex gap-3 sm:col-span-2 lg:col-auto">
              <a
                href="https://www.linkedin.com/company/pbsnycofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PBS NYC on LinkedIn"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-[#DCE2E2] transition-colors hover:border-[#8AD5B7] hover:text-[#8AD5B7]"
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.youtube.com/@ProactiveBuildingSolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PBS NYC on YouTube"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-[#DCE2E2] transition-colors hover:border-[#8AD5B7] hover:text-[#8AD5B7]"
              >
                <Youtube className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#89A096] font-poppins">
                Contact number
              </p>
              <a
                href="tel:2122716837"
                className="mt-1 block text-sm text-[#E8EEEC] transition-colors hover:text-[#8AD5B7] font-poppins"
              >
                212-271-6837
              </a>
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#89A096] font-poppins">
                Email
              </p>
              <a
                href="mailto:info@pbs.nyc"
                className="mt-1 block text-sm text-[#E8EEEC] transition-colors hover:text-[#8AD5B7] font-poppins break-all"
              >
                info@pbs.nyc
              </a>
            </div>

            <div className="min-w-0 sm:col-span-2 lg:col-auto lg:max-w-[260px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#89A096] font-poppins">
                Address
              </p>
              <p className="mt-1 text-sm leading-snug text-[#E8EEEC] font-poppins">
                22 E 41st Street, Third Floor
                <br />
                New York, NY 10017
              </p>
            </div>
          </div>
        </div>

        <p className="px-4 pb-6 pt-3 text-center text-xs text-[#7A8E85] font-poppins sm:pb-8 sm:text-sm lg:px-0">
          © {currentYear} PBS NYC. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
