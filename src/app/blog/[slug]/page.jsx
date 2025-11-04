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
  ArrowRight,
  Bookmark,
  CalendarDays,
  ClipboardList,
  HardHat,
  User,
  Mail,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchPostBySlug, fetchPostsByCategory, fetchPosts } from "@/lib/wordpress";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

// Helper function to decode HTML entities
const decodeHtmlEntities = (text) => {
  if (!text) return '';
  if (typeof window === 'undefined') {
    // Server-side: Use a simple replacement for common entities
    return text
      .replace(/&amp;/g, '&')
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '—')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};



/**
 * Blog Post Page Component
 * Displays a complete blog article with animated sections that appear as the user scrolls
 * @returns {JSX.Element} The rendered blog post page
 */
const BlogPostPage = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  /**
   * Refs for all major page sections that will be animated
   * Each ref is attached to a DOM element to control its animation
   */
  const backButtonRef = useRef(null);
  const articleHeaderRef = useRef(null);
  const featuredImageRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null); // Ref for the main heading animation

  /**
   * Generate table of contents from HTML content
   */
  const generateTableOfContents = (htmlContent) => {
    if (!htmlContent) return [];
    
    try {
      // Check if DOMParser is available
      if (typeof DOMParser === 'undefined') {
        console.warn('DOMParser not available, using fallback method');
        // Fallback: create a temporary div and parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        const toc = Array.from(headings).map((heading, index) => {
          const level = parseInt(heading.tagName.charAt(1));
          const text = heading.textContent.trim();
          const id = `heading-${index}`;
          
          return {
            id,
            text,
            level,
            tag: heading.tagName.toLowerCase()
          };
        });
        
        return toc;
      }
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      const toc = Array.from(headings).map((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const text = heading.textContent.trim();
        const id = `heading-${index}`;
        
        return {
          id,
          text,
          level,
          tag: heading.tagName.toLowerCase()
        };
      });
      
      return toc;
    } catch (error) {
      console.error('Error generating table of contents:', error);
      return [];
    }
  };

  /**
   * Generate table of contents from the actual rendered DOM
   */
  const generateTableOfContentsFromDOM = () => {
    if (!contentRef.current) return [];
    
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    const toc = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent.trim();
      const id = heading.id || `heading-${index}`;
      
      return {
        id,
        text,
        level,
        tag: heading.tagName.toLowerCase()
      };
    });
    
    return toc;
  };

  /**
   * Add IDs to headings in the rendered content
   */
  const addIdsToHeadings = () => {
    if (!contentRef.current) {
      return;
    }
    
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading, index) => {
      // Only add ID if it doesn't already have one
      if (!heading.id) {
        const id = `heading-${index}`;
        heading.id = id;
        heading.className = `${heading.className} scroll-mt-20`;
        console.log(`Added ID ${id} to heading:`, heading.textContent.trim());
      } else {
        console.log(`Heading already has ID: ${heading.id}`, heading.textContent.trim());
      }
    });
    
    // Log all headings with their IDs for debugging
    const allHeadings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
  };

  /**
   * Scroll to heading when table of contents item is clicked
   */
  const scrollToHeading = (headingId) => {
    
    // Add a small delay before scrolling for better UX
    setTimeout(() => {
      // First try to find by ID
      let element = document.getElementById(headingId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
        return;
      }
      
      // If not found by ID, try to find by text content
      
      // Get all headings from the content area specifically
      const contentHeadings = contentRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6') || [];
      
      // Try to find heading by index (fallback method)
      const targetText = headingId.replace('heading-', ''); // Remove the heading- prefix
      const headingIndex = parseInt(targetText);
      
      if (!isNaN(headingIndex) && contentHeadings[headingIndex]) {
        element = contentHeadings[headingIndex];
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
        return;
      }
      
      // Final fallback: try to find by text content
      const currentToc = tableOfContents.find(item => item.id === headingId);
      if (currentToc) {
        const matchingHeading = Array.from(contentHeadings).find(h => 
          h.textContent.trim() === currentToc.text
        );
        
        if (matchingHeading) {
          matchingHeading.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          return;
        }
      }
      
    }, 150); // 150ms delay for smoother navigation
  };

     /**
    * Fetch related posts from the same category by ID
    */
   const fetchRelatedPosts = async (categoryId, currentPostId) => {
     try {
       setRelatedLoading(true);
       const posts = await fetchPostsByCategory(categoryId, 1, 10); // Get more posts to filter from
       
       // Filter out the current post and limit to 3 posts
       const filteredPosts = posts
         .filter(post => post.id !== currentPostId)
         .slice(0, 3);
       
       setRelatedPosts(filteredPosts);
     } catch (error) {
       console.error('Error fetching related posts:', error);
     } finally {
       setRelatedLoading(false);
     }
   };

   /**
    * Fetch related posts from the same category by name
    */
   const fetchRelatedPostsByName = async (categoryName, currentPostId) => {
     try {
       setRelatedLoading(true);
       
       // First, get all posts and filter by category name
       const allPosts = await fetchPosts(1, 50); // Get more posts to filter from
       
       // Filter posts by category name and exclude current post
       const filteredPosts = allPosts
         .filter(post => post.category === categoryName && post.id !== currentPostId)
         .slice(0, 3);
       
       setRelatedPosts(filteredPosts);
     } catch (error) {
       console.error('Error fetching related posts by name:', error);
     } finally {
       setRelatedLoading(false);
     }
   };

   /**
    * Handle newsletter subscription
    */
   const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    setNewsletterSubmitting(true);
    
    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  /**
   * Fetch post data from WordPress API
   */
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const slug = params.slug;
        const fetchedPost = await fetchPostBySlug(slug);
        
        if (!fetchedPost) {
          notFound();
        }
        
        setPost(fetchedPost);
        
        // Post data loaded successfully
        
        // Fetch related posts from the same category
        if (fetchedPost?.categoryId) {
          fetchRelatedPosts(fetchedPost.categoryId, fetchedPost.id);
        } else if (fetchedPost?.category) {
          // If we only have category name, try to find it by name
          fetchRelatedPostsByName(fetchedPost.category, fetchedPost.id);
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      loadPost();
    }
  }, [params.slug]);

  /**
   * Register the GSAP ScrollTrigger plugin when component mounts
   * This is required for scroll-based animations to work
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

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
    if (contentRef.current) animateElement(contentRef);

    // Cleanup function to remove all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  /**
   * Add IDs to headings and handle downloadable file links
   */
  useEffect(() => {
    if (contentRef.current && post) {
      // Add a small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        // Add IDs to headings for table of contents
        addIdsToHeadings();
        
        // Generate table of contents from the actual rendered DOM
        const toc = generateTableOfContentsFromDOM();
        setTableOfContents(toc);
      }, 100);
      
      const handleDownloadLinks = (event) => {
        const target = event.target;
        
        // Check if the clicked element is a link
        if (target.tagName === 'A') {
          const href = target.getAttribute('href');
          
          // Check if it's a downloadable file (common file extensions)
          const downloadExtensions = [
            '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
            '.zip', '.rar', '.7z', '.tar', '.gz',
            '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp',
            '.mp3', '.mp4', '.avi', '.mov', '.wmv',
            '.txt', '.csv', '.json', '.xml'
          ];
          
          const isDownloadable = downloadExtensions.some(ext => 
            href && href.toLowerCase().includes(ext)
          );
          
          // Also check for common download patterns
          const isDownloadLink = href && (
            href.includes('/download/') ||
            href.includes('/wp-content/uploads/') ||
            href.includes('blob:') ||
            target.hasAttribute('download')
          );
          
          if (isDownloadable || isDownloadLink) {
            event.preventDefault();
            window.open(href, '_blank', 'noopener,noreferrer');
          }
        }
      };

      // Add event listener to the content container
      contentRef.current.addEventListener('click', handleDownloadLinks);
      
      // Cleanup function
      return () => {
        clearTimeout(timer);
        if (contentRef.current) {
          contentRef.current.removeEventListener('click', handleDownloadLinks);
        }
      };
    }
  }, [post]);

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
        span.style.marginRight = '0.25em'; // Add spacing between words
        headingRef.current.appendChild(span);
      });

      // Animate each word with stagger
      const wordSpans = headingRef.current.querySelectorAll('span');
      gsap.to(wordSpans, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1, // Increased stagger for word-by-word effect
        ease: "power2.out",
        delay: 0.3
      });
    }
  }, [post?.title]);

  /**
   * Add IDs to headings and handle downloadable file links
   */
  useEffect(() => {
    if (contentRef.current && post) {
      // Add IDs to headings for table of contents
      addIdsToHeadings();
      
      const handleDownloadLinks = (event) => {
        const target = event.target;
        
        // Check if the clicked element is a link
        if (target.tagName === 'A') {
          const href = target.getAttribute('href');
          
          // Check if it's a downloadable file (common file extensions)
          const downloadExtensions = [
            '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
            '.zip', '.rar', '.7z', '.tar', '.gz',
            '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp',
            '.mp3', '.mp4', '.avi', '.mov', '.wmv',
            '.txt', '.csv', '.json', '.xml'
          ];
          
          const isDownloadable = downloadExtensions.some(ext => 
            href && href.toLowerCase().includes(ext)
          );
          
          // Also check for common download patterns
          const isDownloadLink = href && (
            href.includes('/download/') ||
            href.includes('/wp-content/uploads/') ||
            href.includes('blob:') ||
            target.hasAttribute('download')
          );
          
          if (isDownloadable || isDownloadLink) {
            event.preventDefault();
            window.open(href, '_blank', 'noopener,noreferrer');
          }
        }
      };

      // Add event listener to the content container
      contentRef.current.addEventListener('click', handleDownloadLinks);
      
      // Cleanup function
      return () => {
        if (contentRef.current) {
          contentRef.current.removeEventListener('click', handleDownloadLinks);
        }
      };
    }
  }, [post]);

  // Show loading state
  if (loading) {
    return (
      <section className="bg-[#37403D] text-[#DCE2E2] py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl px-6 py-24 sm:w-[90%] md:pr-32 lg:px-6 lg:w-[80%] lg:py-12">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
            <p className="text-[#89A096] mt-4">Loading post...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="bg-[#37403D] text-[#DCE2E2] py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl px-6 py-24 sm:w-[90%] md:pr-32 lg:px-6 lg:w-[80%] lg:py-12">
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-lg hover:bg-[#8AD5B7]/80 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Show post content
  if (!post) {
    return null;
  }

  return (
    <section className="bg-[#37403D] text-[#DCE2E2] py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
                     {/* Left Sidebar - Table of Contents */}
           <div className="lg:col-span-3 order-2 lg:order-1">
             <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2">
               <div className="bg-[#2E3734] rounded-xl p-6 border border-[#8AD5B7]/20 h-[400px] flex flex-col">
                <h3 className="text-lg font-bold text-[#DCE2E2] font-conthrax mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-[#8AD5B7]" />
                  Table of Contents
                </h3>
                                 <nav className="space-y-2 flex-1 overflow-y-auto overflow-x-hidden">
                   {tableOfContents.length > 0 ? (
                     tableOfContents.map((item, index) => (
                       <button
                         key={index}
                         onClick={() => scrollToHeading(item.id)}
                         className={`w-full text-left text-sm font-poppins transition-colors hover:text-[#8AD5B7] break-words ${
                           item.level === 1 ? 'text-[#DCE2E2] font-semibold' :
                           item.level === 2 ? 'text-[#DCE2E2] ml-2' :
                           item.level === 3 ? 'text-[#89A096] ml-4' :
                           'text-[#89A096] ml-6'
                         }`}
                       >
                         • {item.text}
                       </button>
                     ))
                   ) : (
                    <div className="text-[#89A096] text-sm">
                      <p className="italic">No headings found in this article.</p>
                    </div>
                  )}
                </nav>
              </div>
            </div>
          </div>

          {/* Center Column - Main Blog Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
                         {/* Article Header - Title and metadata */}
             <div ref={articleHeaderRef} className="mb-12">
               {/* Back to Blog Button - Above the heading */}
               <div className="pt-8 mb-6">
                 <a
                   href="/blog"
                   className="text-[#8AD5B7] hover:text-[#8AD5B7]/80 flex items-center gap-2 font-poppins transition-all"
                 >
                   <ArrowLeft className="w-5 h-5" />
                   Back to Blog
                 </a>
               </div>
               
               {/* Main Heading - Full width with top padding */}
               <div className="pt-4 mb-6">
                 <h1 ref={headingRef} className="text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax w-full">
                   {decodeHtmlEntities(post.title)}
                 </h1>
               </div>
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center text-[#89A096] font-poppins">
                {/* <div className="flex items-center gap-3">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
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
                alt={post.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="w-full">
              <div className="prose prose-invert max-w-none w-full">
                <div ref={contentRef} className="mb-12 w-full">
                  <div 
                    className="wordpress-content w-full"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>
          </div>

                     {/* Right Sidebar - Newsletter Subscription */}
           <div className="lg:col-span-3 order-3">
             <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2">
               <div className="bg-[#2E3734] rounded-xl p-6 border border-[#8AD5B7]/20 h-[400px] flex flex-col">
                <h3 className="text-lg font-bold text-[#DCE2E2] font-conthrax mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#8AD5B7]" />
                  Subscribe to Newsletter
                </h3>
                <div className="flex-1 flex flex-col">
                  <p className="text-[#89A096] text-sm mb-4">
                    Stay updated with our latest insights, industry news, and compliance updates.
                  </p>
                  {!newsletterSubmitted ? (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4 flex-1 flex flex-col">
                      <div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-[#37403D] border border-[#8AD5B7]/30 rounded-lg text-[#DCE2E2] placeholder-[#89A096] focus:outline-none focus:border-[#8AD5B7] focus:ring-1 focus:ring-[#8AD5B7] transition-all font-poppins text-sm"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={newsletterSubmitting}
                        className="w-full bg-[#8AD5B7] text-[#1E2322] px-4 py-3 rounded-lg hover:bg-[#8AD5B7]/80 transition-all font-poppins font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                      <div className="flex-1"></div>
                      <p className="text-[#89A096] text-xs">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-4 flex-1 flex flex-col">
                      <div className="w-12 h-12 bg-[#8AD5B7] rounded-full flex items-center justify-center mx-auto mb-3">
                        <Check className="w-6 h-6 text-[#1E2322]" />
                      </div>
                      <p className="text-[#8AD5B7] font-semibold mb-2">Successfully Subscribed!</p>
                      <p className="text-[#89A096] text-sm">Thank you for subscribing to our newsletter.</p>
                      <div className="flex-1"></div>
                      <button
                        onClick={() => setNewsletterSubmitted(false)}
                        className="mt-3 text-[#8AD5B7] hover:text-[#8AD5B7]/80 text-sm font-poppins"
                      >
                        Subscribe Another Email
                      </button>
                      <p className="text-[#89A096] text-xs mt-3">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </div>
                  )}
                </div>
              </div>
                         </div>
           </div>
 
         </div>
       </div>
       
        {/* Related Blogs Section */}
        <div className="mt-24 bg-[#1E2322] py-16 px-6 md:px-12 lg:px-24 -mx-6 md:-mx-12 lg:-mx-24">
          <div className="w-full">
            <div className="max-w-7xl mx-auto">
              <div className="text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax mb-4">
                  More Blogs Related To This Topic
                </h2>
                <p className="text-[#89A096] font-poppins">
                  The PBS Alert System is designed to revolutionize how property managers, owners, and stakeholders navigate compliance, deadlines, and data in New York
                </p>
              </div>
              
              {relatedLoading ? (
                <div className="col-span-full text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
                  <p className="text-[#89A096] mt-4">Loading related posts...</p>
                </div>
              ) : relatedPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <div
                    key={post.id}
                    className="group relative bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#8AD5B7]/40 hover:shadow-2xl hover:shadow-[#8AD5B7]/10 hover:-translate-y-2"
                  >
                    {/* Image Container with Overlay */}
                    <div className="relative overflow-hidden">
                      <CustomImage
                        src={post.image}
                        alt={post.title}
                        width={100}
                        height={100}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E3734]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1.5 bg-[#8AD5B7] text-[#1E2322] text-xs font-bold font-conthrax rounded-full shadow-lg">
                          {post.category}
                        </span>
                      </div>
    
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2E3734]/90 backdrop-blur-sm border border-[#8AD5B7]/30 rounded-full">
                          <CalendarDays className="w-3 h-3 text-[#8AD5B7]" />
                          <span className="text-[#DCE2E2] text-xs font-poppins font-medium">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
    
                    {/* Content Container */}
                    <div className="p-6 md:p-8">
                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-bold text-[#DCE2E2] mb-4 font-conthrax leading-tight line-clamp-2 group-hover:text-[#8AD5B7] transition-colors duration-300">
                        {decodeHtmlEntities(post.title)}
                      </h2>
    
                      {/* Excerpt */}
                      <p className="text-[#89A096] mb-6 font-poppins text-sm md:text-base leading-relaxed line-clamp-3">
                        {decodeHtmlEntities(post.excerpt)}
                      </p>
    
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        {/* Read More Button */}
                        <button
                          onClick={() => {
                            if (post.slug) {
                              window.location.href = `/blog/${post.slug}`;
                            } else {
                              console.error('No slug found for post:', post.id);
                            }
                          }}
                          className="group/btn flex items-center gap-3 text-[#8AD5B7] hover:text-[#DCE2E2] transition-all duration-300 font-poppins font-semibold"
                        >
                          {/* Enhanced Circular Icon */}
                          <div className="relative w-12 h-12 bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] rounded-full flex items-center justify-center shadow-lg shadow-[#8AD5B7]/25 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:shadow-xl group-hover/btn:shadow-[#8AD5B7]/40">
                            <ArrowRight className="w-5 h-5 text-[#1E2322] transform -rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" />
                          </div>
                          <span className="font-semibold tracking-wide">Read Article</span>
                        </button>
    
                        
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                             ) : (
                 <div className="text-center py-12">
                   <p className="text-[#89A096] font-poppins">
                     No related posts found in this category.
                   </p>
                 </div>
               )}
               
               {/* View More Button */}
               <div className="text-center mt-12">
                 <a
                   href="/blog"
                   className="inline-flex items-center gap-3 bg-[#8AD5B7] text-[#1E2322] px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-[#8AD5B7]/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                 >
                   <span>View More</span>
                   <ArrowLeft className="w-5 h-5 transform rotate-180" />
                 </a>
               </div>
             </div>
           </div>
         </div>
     </section>
   );
 };

export default BlogPostPage;
