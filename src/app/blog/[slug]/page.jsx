"use client"; // Marks this as a client-side component in Next.js

/**
 * @file Blog Post Page Component
 * @description Renders a detailed blog post with animated sections using GSAP and ScrollTrigger
 * @requires react - For component functionality and hooks
 * @requires gsap - For animations
 * @requires gsap/ScrollTrigger - For scroll-based animations
 * @requires CustomImage - Custom image component for optimized rendering
 * @requires next/image - Next.js image optimization
 * @requires lucide-react - For icon components
 */

import CustomImage from "@/app/CustomImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowLeft,
  Bookmark,
  CalendarDays,
  ClipboardList,
  HardHat,
  User,
} from "lucide-react";
import { useEffect, useRef } from "react";

/**
 * Blog Post Page Component
 * Displays a complete blog article with animated sections that appear as the user scrolls
 * @returns {JSX.Element} The rendered blog post page
 */
const BlogPostPage = () => {
  /**
   * Register the GSAP ScrollTrigger plugin when component mounts
   * This is required for scroll-based animations to work
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  /**
   * Refs for all major page sections that will be animated
   * Each ref is attached to a DOM element to control its animation
   */
  const backButtonRef = useRef(null);
  const articleHeaderRef = useRef(null);
  const featuredImageRef = useRef(null);
  const overviewRef = useRef(null);
  const keyChangesRef = useRef(null);
  const complianceRef = useRef(null);
  const legalRefsRef = useRef(null);
  const faqRef = useRef(null);
  const sidebarRef = useRef(null);
  const relatedArticlesRef = useRef(null);

  /**
   * Setup GSAP animations for all page sections
   * Each element fades in and slides up when scrolled into view
   */
  useEffect(() => {
    /**
     * Helper function to create consistent animations for multiple elements
     * @param {React.RefObject} ref - Reference to the DOM element to animate
     */
    const animateElement = (ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 }, // Initial state: invisible and offset downward
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out", // Easing function for smooth animation
          scrollTrigger: {
            trigger: ref.current, // Element that triggers the animation
            start: "top 80%", // Animation starts when element is 80% into viewport
            toggleActions: "play none none reverse", // Controls animation sequence
          },
        }
      );
    };

    // Apply animation to each section if the ref is available
    if (backButtonRef.current) animateElement(backButtonRef);
    if (articleHeaderRef.current) animateElement(articleHeaderRef);
    if (featuredImageRef.current) animateElement(featuredImageRef);
    if (overviewRef.current) animateElement(overviewRef);
    if (keyChangesRef.current) animateElement(keyChangesRef);
    if (complianceRef.current) animateElement(complianceRef);
    if (legalRefsRef.current) animateElement(legalRefsRef);
    if (faqRef.current) animateElement(faqRef);
    if (sidebarRef.current) animateElement(sidebarRef);
    if (relatedArticlesRef.current) animateElement(relatedArticlesRef);

    // Cleanup function to remove all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-[#37403D] text-[#DCE2E2] py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl px-6 py-24 sm:w-[90%] md:pr-32 lg:px-6 lg:w-[80%] lg:py-12">
        {/* Back Button - Navigation to return to blog listing */}
        <div ref={backButtonRef} className="mb-8">
          <a
            href="/blog"
            className="text-[#8AD5B7] hover:text-[#8AD5B7]/80 flex items-center gap-2 font-poppins"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </a>
        </div>

        {/* Article Header - Title and metadata */}
        <div ref={articleHeaderRef} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#DCE2E2] mb-6 font-conthrax">
            NYC Building Code Updates: What Contractors Need to Know for 2025
          </h1>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center text-[#89A096] font-poppins">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5" />
              <span>John Doe</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              <span>March 18, 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5" />
              <span>Regulations</span>
            </div>
          </div>
        </div>

        {/* Featured Image - Main blog post image */}
        <div
          className="mb-12 rounded-xl overflow-hidden"
        >
          <CustomImage
            src="/PBS%20Assets/Brand%20Language/city-building.jpg"
            width={100}
            height={100}
            alt="NYC Skyline Construction"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Main Content - Two-column layout on large screens */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Article Content - Left column */}
          <div className="prose prose-invert max-w-none">
            {/* Overview Section - Introduction to the article */}
            <div ref={overviewRef} className="mb-12">
              <h2 className="text-3xl text-[#8AD5B7] mb-6 font-conthrax">Overview</h2>
              <p className="text-[#89A096] mb-6 font-poppins">
                The New York City Department of Buildings has announced
                significant updates to the construction regulations that will
                impact all contractors working within the five boroughs. These
                changes aim to improve safety standards and streamline
                processes...
              </p>
            </div>

            {/* Key Changes Section - Bullet points of important updates */}
            <div ref={keyChangesRef} className="mb-12">
              <h2 className="text-3xl text-[#8AD5B7] mb-6 flex items-center gap-3 font-conthrax">
                <HardHat className="w-8 h-8 text-[#8AD5B7]" />
                Key Changes
              </h2>
              <ul className="space-y-4 text-[#89A096] font-poppins">
                {[
                  "Revised scaffolding safety requirements",
                  "Updated material storage protocols",
                  "Enhanced worker certification standards",
                  "New inspection timelines",
                ].map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#8AD5B7]">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance Process Section - Step-by-step guide */}
            <div ref={complianceRef} className="mb-12">
              <h2 className="text-3xl text-[#8AD5B7] mb-6 flex items-center gap-3 font-conthrax">
                <ClipboardList className="w-8 h-8 text-[#8AD5B7]" />
                Compliance Process
              </h2>
              <div className="space-y-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#8AD5B7] text-[#1E2322] rounded-full flex items-center justify-center font-conthrax font-bold">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-[#DCE2E2] font-semibold mb-2 font-conthrax">
                        Documentation Review
                      </h3>
                      <p className="text-[#89A096] font-poppins">
                        Submit updated safety plans through the DOB NOW
                        portal...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal References Section - Code citations in highlighted box */}
            <div
              ref={legalRefsRef}
              className="bg-[#2E3734] p-8 rounded-xl mb-12"
            >
              <h3 className="text-2xl text-[#8AD5B7] mb-4 font-conthrax">NYC Code References</h3>
              <ul className="space-y-3 text-[#89A096] font-poppins">
                <li>• Local Law 196: Worker Safety Training Requirements</li>
                <li>• Building Code §28-301.1: Structural Integrity</li>
                <li>• 2025 NYC Construction Code Revision 4.2.1</li>
              </ul>
            </div>

            {/* FAQ Section - Common questions and answers */}
            <div ref={faqRef} className="mb-12">
              <h2 className="text-3xl text-[#8AD5B7] mb-6 font-conthrax">FAQ</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((faq) => (
                  <div key={faq} className="border-b border-[#2E3734] pb-6">
                    <h3 className="text-[#DCE2E2] font-semibold mb-3 font-conthrax">
                      When do these changes take effect?
                    </h3>
                    <p className="text-[#89A096] font-poppins">
                      The new regulations will be enforced starting January 1,
                      2025...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right column with table of contents */}
          <div className="lg:block">
            <div ref={sidebarRef} className="sticky top-24">
              <div className="bg-[#2E3734] p-6 rounded-xl">
                <h3 className="text-[#DCE2E2] text-lg font-bold mb-4 font-conthrax">
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  {[
                    "Overview",
                    "Key Changes",
                    "Compliance Process",
                    "Legal References",
                    "FAQ",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="block text-[#89A096] hover:text-[#8AD5B7] transition font-poppins"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <button className="w-full mt-6 bg-[#8AD5B7] text-[#1E2322] py-3 rounded-lg font-semibold hover:bg-[#8AD5B7]/80 transition font-conthrax">
                  Download PDF Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section - Additional content suggestions */}
        <div ref={relatedArticlesRef} className="mt-20">
          <h2 className="text-3xl text-[#8AD5B7] mb-8 font-conthrax">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((post) => (
              <div key={post} className="bg-[#2E3734] rounded-xl p-6">
                <h3 className="text-[#DCE2E2] text-lg font-semibold mb-3 font-conthrax">
                  Understanding NYC Zoning Laws
                </h3>
                <p className="text-[#89A096] mb-4 font-poppins">
                  Recent changes to commercial zoning regulations in Brooklyn...
                </p>
                <a
                  href="#"
                  className="text-[#8AD5B7] hover:text-[#8AD5B7]/80 flex items-center gap-2 font-poppins"
                >
                  Read Article
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;
