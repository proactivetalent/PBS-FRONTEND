"use client"; // Marks this as a client-side component in Next.js

/**
 * @file Alert System Guide Post Page Component
 * @description Renders a detailed alert system guide post with animated sections using GSAP and ScrollTrigger
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
  ArrowRight,
  CalendarDays,
  Share2,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { getGuideBySlug, getRelatedGuides } from "../data";
import { 
  FirstGuide, 
  SecondGuide, 
  ThirdGuide, 
  FourthGuide, 
  FifthGuide,
  SixthGuide,
  SeventhGuide,
} from "../layouts";

// Share Button Component
const ShareButton = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = (action) => {
    if (action === 'copy') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setIsOpen(false);
    } else if (action === 'email') {
      const emailUrl = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this guide: ${post.title}\n\n${window.location.href}`)}`;
      window.location.href = emailUrl;
      setIsOpen(false);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleShareClick = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
    handleShare(action);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className="relative share-button-container" 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onMouseDown={handleMouseDown}
    >
      <button
        type="button"
        onClick={handleButtonClick}
        onMouseDown={handleMouseDown}
        className="flex items-center gap-2 text-[#89A096] hover:text-[#8AD5B7] transition-colors font-poppins text-sm md:text-base"
      >
        <Share2 className="w-3 h-3 md:w-4 md:h-4" />
        Share
      </button>

      {isOpen && (
        <div 
          className="absolute bottom-full right-0 mb-2 bg-[#2E3734] border border-[#8AD5B7]/30 rounded-lg shadow-xl z-50 min-w-[200px]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="p-2">
            <button
              type="button"
              onClick={(e) => handleShareClick(e, 'email')}
              className="w-full flex items-center gap-3 px-3 py-2 text-[#DCE2E2] hover:bg-[#8AD5B7]/10 rounded-md transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-poppins">Email</span>
            </button>
            <button
              type="button"
              onClick={(e) => handleShareClick(e, 'copy')}
              className="w-full flex items-center gap-3 px-3 py-2 text-[#DCE2E2] hover:bg-[#8AD5B7]/10 rounded-md transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
              <span className="text-sm font-poppins">
                {copied ? 'Copied!' : 'Copy Link'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Alert System Guide Post Page Component
 * Displays a complete alert system guide article with animated sections that appear as the user scrolls
 * @returns {JSX.Element} The rendered alert system guide post page
 */
const AlertSystemGuidePostPage = () => {
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
      } else {
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
   * Load related posts from custom data (latest 3)
   */
  const loadRelatedPosts = () => {
    try {
      setRelatedLoading(true);
      
      // Get related guides from custom data
      const currentPostId = post?.id;
      const relatedGuides = getRelatedGuides(currentPostId, 3);
      
      // Transform guides to match the expected post format
      const transformedPosts = relatedGuides.map(guide => ({
        id: guide.id,
        title: guide.title,
        excerpt: guide.excerpt,
        content: guide.content,
        slug: guide.slug,
        date: guide.date,
        category: guide.category,
        image: guide.image,
        author: guide.author,
        modified: guide.modified
      }));
      
      setRelatedPosts(transformedPosts);
    } catch (error) {
      console.error('Error loading related posts:', error);
    } finally {
      setRelatedLoading(false);
    }
  };

  /**
   * Load post data from custom data
   */
  useEffect(() => {
    const loadPost = () => {
      try {
        setLoading(true);
        setError(null);
        
        const slug = params.slug;
        const fetchedPost = getGuideBySlug(slug);
        
        if (!fetchedPost) {
          notFound();
        }
        
        // Transform guide to match the expected post format
        const transformedPost = {
          id: fetchedPost.id,
          title: fetchedPost.title,
          excerpt: fetchedPost.excerpt,
          content: fetchedPost.content,
          modules: fetchedPost.modules || null,
          slug: fetchedPost.slug,
          date: fetchedPost.date,
          category: fetchedPost.category,
          image: fetchedPost.image,
          author: fetchedPost.author,
          modified: fetchedPost.modified,
          layout: fetchedPost.layout || 'first' // Include layout property
        };
        
        setPost(transformedPost);
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
   * Load related posts when post is loaded
   */
  useEffect(() => {
    if (post) {
      loadRelatedPosts();
    }
  }, [post]);

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

  // Show loading state
  if (loading) {
    return (
      <section className="bg-[#37403D] text-[#DCE2E2] py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl px-6 py-24 sm:w-[90%] md:pr-32 lg:px-6 lg:w-[80%] lg:py-12">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
            <p className="text-[#89A096] mt-4">Loading guide...</p>
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

  // Function to render the appropriate layout based on post.layout
  const renderLayout = () => {
    const layout = post.layout || 'first';
    const commonProps = {
      post,
      tableOfContents,
      scrollToHeading,
      newsletterEmail,
      setNewsletterEmail,
      newsletterSubmitting,
      newsletterSubmitted,
      handleNewsletterSubmit,
      setNewsletterSubmitted,
      relatedPosts,
      relatedLoading
    };

    switch (layout) {
      case 'second':
        return <SecondGuide {...commonProps} />;
      case 'third':
        return <ThirdGuide {...commonProps} />;
      case 'fourth':
        return <FourthGuide {...commonProps} />;
      case 'fifth':
        return <FifthGuide {...commonProps} />;
      case 'sixth':
        return <SixthGuide {...commonProps} />;
      case 'seventh':
        return <SeventhGuide {...commonProps} />;
        // case 'timeline':
      //   return <TimelineLayout {...commonProps} />;
      case 'first':
      default:
        return <FirstGuide {...commonProps} />;
    }
  };

  return (
    <section className="bg-[#2B3331] text-[#DCE2E2] px-6 md:px-12 lg:px-24">
      {renderLayout()}
      
      {/* More Blogs Related To This Section - Common for all layouts */}
       <div className="bg-[#1E2322] py-16 px-6 md:px-12 lg:px-24 -mx-6 md:-mx-12 lg:-mx-24">
         <div className="w-full">
           <div className="max-w-7xl mx-auto">
             <div className="text-left mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax mb-4">
                 More Blogs Related To This
               </h2>
               <p className="text-[#89A096] font-poppins">
                 Discover more insights and articles from our comprehensive collection of property management and compliance resources
               </p>
             </div>
             
             {relatedLoading ? (
               <div className="col-span-full text-center py-12">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
                 <p className="text-[#89A096] mt-4">Loading related blogs...</p>
               </div>
             ) : relatedPosts.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                 {relatedPosts.map((relatedPost) => (
                   <a
                     key={relatedPost.id}
                     href={relatedPost.slug ? `/alert-system-guide/${relatedPost.slug}` : '#'}
                     onClick={(e) => {
                       // Prevent navigation if clicking on Share button or its dropdown
                       const target = e.target;
                       const shareButton = target.closest('.share-button-container');
                       if (shareButton) {
                         e.preventDefault();
                         e.stopPropagation();
                       }
                     }}
                     className="group relative bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#8AD5B7]/40 hover:shadow-2xl hover:shadow-[#8AD5B7]/10 hover:-translate-y-2 block cursor-pointer"
                   >
                     {/* Image Container with Overlay */}
                     <div className="relative overflow-hidden">
                       <CustomImage
                         src={relatedPost.image}
                         alt={relatedPost.title}
                         width={100}
                         height={100}
                         className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       {/* Gradient Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#2E3734]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                       {/* Category Badge */}
                       {/* <div className="absolute top-4 left-4">
                         <span className="inline-block px-3 py-1.5 bg-[#8AD5B7] text-[#1E2322] text-xs font-bold font-conthrax rounded-full shadow-lg">
                           {relatedPost.category}
                         </span>
                       </div> */}

                       {/* Date Badge */}
                       {/* <div className="absolute top-4 right-4">
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2E3734]/90 backdrop-blur-sm border border-[#8AD5B7]/30 rounded-full">
                           <CalendarDays className="w-3 h-3 text-[#8AD5B7]" />
                           <span className="text-[#DCE2E2] text-xs font-poppins font-medium">
                             {relatedPost.date}
                           </span>
                         </div>
                       </div> */}
                     </div>

                     {/* Content Container */}
                     <div className="p-6 md:p-8">
                       {/* Title */}
                       <h2 className="text-xl text-[#DCE2E2] mb-4 font-poppins font-bold leading-tight line-clamp-2 group-hover:text-[#8AD5B7] transition-colors duration-300">
                         {relatedPost.title}
                       </h2>

                       {/* Excerpt */}
                       <p className="text-[#89A096] mb-6 font-poppins text-sm md:text-base leading-relaxed line-clamp-3">
                         {relatedPost.excerpt}
                       </p>

                       {/* Action Buttons */}
                       <div className="flex items-center justify-between">
                         {/* Read More Button */}
                         <span
                           className="group/btn flex items-center gap-3 text-[#8AD5B7] hover:text-[#DCE2E2] transition-all duration-300 font-poppins font-semibold cursor-pointer"
                         >
                           {/* Enhanced Circular Icon */}
                           <div className="relative w-12 h-12 bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] rounded-full flex items-center justify-center shadow-lg shadow-[#8AD5B7]/25 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:shadow-xl group-hover/btn:shadow-[#8AD5B7]/40">
                             <ArrowRight className="w-5 h-5 text-[#1E2322] transform -rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" />
                           </div>
                           <span className="font-semibold tracking-wide">Read Article</span>
                         </span>

                         {/* Share Button */}
                         <ShareButton post={relatedPost} />
                       </div>
                     </div>
                   </a>
                 ))}
               </div>
             ) : (
               <div className="text-center py-12">
                 <p className="text-[#89A096] font-poppins">
                   No related blogs found.
                 </p>
               </div>
             )}
             
             {/* View More Button */}
             <div className="text-center mt-12">
               <a
                 href="/alert-system-guide"
                 className="inline-flex items-center gap-3 bg-[#8AD5B7] text-[#1E2322] px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-[#8AD5B7]/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
               >
                 <span>View More</span>
                 <ArrowRight className="w-5 h-5 transform rotate-180" />
               </a>
             </div>
           </div>
         </div>
       </div>
    </section>
    );
  };

export default AlertSystemGuidePostPage;
