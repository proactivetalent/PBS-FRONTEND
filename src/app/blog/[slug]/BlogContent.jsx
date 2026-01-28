"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomImage from "@/app/CustomImage";
import { ArrowLeft, Bookmark } from "lucide-react";
import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

/**
 * Client component for blog content with GSAP animations
 */
export default function BlogContent({ post }) {
  const articleHeaderRef = useRef(null);
  const featuredImageRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  /**
   * Register the GSAP ScrollTrigger plugin when component mounts
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  /**
   * Setup GSAP animations for all page sections
   */
  useEffect(() => {
    const animateElement = (ref) => {
      if (!ref.current) return;
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
    };

    // Apply animation to each section if the ref is available
    if (articleHeaderRef.current) animateElement(articleHeaderRef);
    if (featuredImageRef.current) animateElement(featuredImageRef);
    if (contentRef.current) animateElement(contentRef);

    // Cleanup function to remove all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Animate the main heading with word-by-word staggering effect
  useEffect(() => {
    if (headingRef.current && post?.title) {
      // Split the text into individual words
      const words = post.title.split(' ');
      headingRef.current.innerHTML = '';
      
      // Create spans for each word
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.marginRight = '0.25em';
        headingRef.current.appendChild(span);
      });

      // Animate each word with stagger
      const wordSpans = headingRef.current.querySelectorAll('span');
      gsap.to(wordSpans, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
      });
    }
  }, [post?.title]);

  return (
    <>
      {/* Article Header - Title and metadata */}
      <div ref={articleHeaderRef} className="mb-6">
        {/* Back to Blog Button - Above the heading */}
        <div className="mb-4">
          <Link
            href="/blog"
            className="text-[#8AD5B7] hover:text-[#8AD5B7]/80 flex items-center gap-2 font-poppins transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
        
        {/* Main Heading - Full width with top padding */}
        <div className="mb-4">
          <h1 ref={headingRef} className="text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax w-full">
            {post.title}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center text-[#89A096] font-poppins">
          <div className="flex items-center gap-3">
            <Bookmark className="w-5 h-5" />
            <span>{post.category}</span>
          </div>
        </div>
      </div>

      {/* Featured Image - Main blog post image */}
      <div
        ref={featuredImageRef}
        className="mb-12 rounded-xl overflow-hidden"
      >
        <CustomImage
          src={post.image}
          width={100}
          height={100}
          alt={post.title || 'Blog post image'}
          className="w-full h-96 object-fill"
        />
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="prose prose-invert max-w-none w-full">
          <ContentWrapper>
            <div 
              ref={contentRef}
              className="wordpress-content w-full"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ContentWrapper>
        </div>
      </div>
    </>
  );
}
