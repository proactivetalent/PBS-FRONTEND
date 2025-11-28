"use client";

import { ArrowRight, CalendarDays, Search, X, Share2, Mail, Copy, Check } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import CustomImage from "../CustomImage";
import { createStaggeredTextAnimation } from "@/utils/animationUtils";
import { getAllGuides } from "./data";

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

const AlertSystemGuidePage = () => {
  // Ref for the main heading animation
  const headingRef = useRef(null);
  // Ref for the "More Blogs Related To This" heading animation
  const moreBlogsHeadingRef = useRef(null);

  /**
   * State for managing posts and categories
   */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Search state management
   */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  /**
   * Debounced search function
   */
  const debouncedSearch = useCallback((query) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      performSearch(query);
    }, 300); // 300ms delay

    setSearchTimeout(timeout);
  }, [searchTimeout]);

  /**
   * Perform search through posts
   */
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Search through current posts (client-side search)
    const filtered = posts.filter(post => {
      const searchTerm = query.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
      );
    });

    setSearchResults(filtered);
    setIsSearching(false);
  };

  /**
   * Handle search input change
   */
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  /**
   * Clear search
   */
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
  };

  /**
   * Get posts to display (search results or regular posts)
   */
  const getDisplayPosts = () => {
    if (searchQuery.trim()) {
      return searchResults;
    }
    return posts;
  };

  /**
   * Load alert system guides from custom data
   */
  const loadAlertSystemGuides = () => {
    try {
      setLoading(true);
      setError(null);

      // Get all guides from custom data
      const guides = getAllGuides();
      
      // Transform guides to match the expected post format
      const transformedPosts = guides.map(guide => ({
        id: guide.id,
        title: guide.title,
        excerpt: guide.excerpt,
        content: guide.content,
        modules: guide.modules,
        slug: guide.slug,
        date: guide.date,
        category: guide.category,
        image: guide.image,
        author: guide.author,
        modified: guide.modified
      }));
      
      setPosts(transformedPosts);
      
    } catch (err) {
      console.error('Error loading alert system guides:', err);
      setError('Failed to load alert system guides. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    loadAlertSystemGuides();
  }, []);

  // Animate the main heading with staggering text effect
  useEffect(() => {
    createStaggeredTextAnimation(headingRef, { useIntersectionObserver: false });
  }, []);

  // Animate the "More Blogs Related To This" heading with staggering text effect
  useEffect(() => {
    createStaggeredTextAnimation(moreBlogsHeadingRef, { useIntersectionObserver: true });
  }, []);

  // Get posts to display
  const displayPosts = getDisplayPosts();
  const hasSearchResults = searchQuery.trim() && searchResults.length > 0;
  const hasNoSearchResults = searchQuery.trim() && searchResults.length === 0 && !isSearching;

  return (
    <div>
      {/* Main Alert System Guide Section */}
      <section data-section="alert-system-guide" className="bg-[#2B3331] text-[#DCE2E2] py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section with Title and Search */}
          <div className="my-8 md:mb-12">
            {/* Main Heading */}
            <div className="mb-6 lg:mb-8">
              <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax">
                ALERT SYSTEM GUIDE
              </h1>
              <p className="text-[#89A096] text-lg md:text-xl mt-2 font-poppins">
                Comprehensive guides and resources for PBS Alert System, compliance deadlines, and property management alerts
              </p>
            </div>

            {/* Search Bar - Full Width Below Heading */}
            <div className="w-full">
              <div className="relative w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#89A096] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search alert system guides..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-10 py-3 bg-[#2E3734] border border-[#8AD5B7]/30 rounded-full text-[#DCE2E2] placeholder-[#89A096] focus:outline-none focus:border-[#8AD5B7] focus:ring-1 focus:ring-[#8AD5B7] transition-all font-poppins"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#89A096] hover:text-[#8AD5B7] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#8AD5B7]"></div>
                  </div>
                )}
              </div>
              
              {/* Search Results Info */}
              {searchQuery && (
                <div className="mt-3 text-sm text-[#89A096] font-poppins">
                  {isSearching ? (
                    <span>Searching...</span>
                  ) : hasSearchResults ? (
                    <span>Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</span>
                  ) : hasNoSearchResults ? (
                    <span>No results found for "{searchQuery}"</span>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Loading state */}
            {loading && (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
                <p className="text-[#89A096] mt-4">Loading alert system guides...</p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="col-span-full text-center py-12">
                <p className="text-red-400 mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-lg hover:bg-[#8AD5B7]/80 transition"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* No search results */}
            {hasNoSearchResults && (
              <div className="col-span-full text-center py-12">
                <div className="text-[#89A096] text-lg mb-4">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No guides found matching "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try different keywords or browse all categories</p>
                </div>
                <button 
                  onClick={clearSearch}
                  className="bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-lg hover:bg-[#8AD5B7]/80 transition"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* No posts found (non-search) */}
            {!searchQuery && !loading && !error && displayPosts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-[#89A096] text-lg">No alert system guides found in this category.</p>
              </div>
            )}

            {/* Posts Grid */}
            {!loading && !error && displayPosts.map((post, index) => (
              <a
              key={post.id}
              href={post.slug ? `/alert-system-guide/${post.slug}` : '#'}
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
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E3734]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-[#8AD5B7] text-[#1E2322] text-xs font-bold font-conthrax rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div> */}

                {/* Date Badge */}
                {/* <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2E3734]/90 backdrop-blur-sm border border-[#8AD5B7]/30 rounded-full">
                    <CalendarDays className="w-3 h-3 text-[#8AD5B7]" />
                    <span className="text-[#DCE2E2] text-xs font-poppins font-medium">
                      {post.date}
                    </span>
                  </div>
                </div> */}
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h2 className="text-xl font-bold text-[#DCE2E2] mb-4 font-poppins leading-tight line-clamp-2 group-hover:text-[#8AD5B7] transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#89A096] mb-6 font-poppins text-sm md:text-base leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  {/* Read More Button */}
                  <a
                    href={post.slug ? `/alert-system-guide/${post.slug}` : '#'}
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn flex items-center gap-3 text-[#8AD5B7] hover:text-[#DCE2E2] transition-all duration-300 font-poppins font-semibold"
                  >
                    {/* Enhanced Circular Icon */}
                    <div className="relative w-12 h-12 bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] rounded-full flex items-center justify-center shadow-lg shadow-[#8AD5B7]/25 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:shadow-xl group-hover/btn:shadow-[#8AD5B7]/40">
                      <ArrowRight className="w-5 h-5 text-[#1E2322] transform -rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" />
                    </div>
                    <span className="font-semibold tracking-wide">Read Article</span>
                  </a>

                  {/* Share Button */}
                  <ShareButton post={post} />
                </div>
              </div>
            </a>
            ))}
          </div>
        </div>
      </section>

      {/* More Blogs Related To This Section */}
      <section className="bg-[#1E2322] py-16 px-6 md:px-12 lg:px-24 -mx-6 md:-mx-12 lg:-mx-24">
        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <h2 ref={moreBlogsHeadingRef} className="text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax mb-4">
                More Blogs Related To This
              </h2>
              <p className="text-[#89A096] font-poppins">
                Discover more insights and articles from our comprehensive collection of property management and compliance resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {/* Latest 3 blogs (excluding current ones) */}
              {posts.slice(0, 3).map((relatedPost) => (
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
                    <a
                      href={relatedPost.slug ? `/alert-system-guide/${relatedPost.slug}` : '#'}
                      onClick={(e) => e.stopPropagation()}
                      className="group/btn flex items-center gap-3 text-[#8AD5B7] hover:text-[#DCE2E2] transition-all duration-300 font-poppins font-semibold"
                    >
                      {/* Enhanced Circular Icon */}
                      <div className="relative w-12 h-12 bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] rounded-full flex items-center justify-center shadow-lg shadow-[#8AD5B7]/25 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:shadow-xl group-hover/btn:shadow-[#8AD5B7]/40">
                        <ArrowRight className="w-5 h-5 text-[#1E2322] transform -rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" />
                      </div>
                      <span className="font-semibold tracking-wide">Read Article</span>
                    </a>

                    {/* Share Button */}
                    <ShareButton post={relatedPost} />
                  </div>
                </div>
              </a>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-12">
              <a
                href="/alert-system-guide"
                className="inline-flex items-center gap-3 bg-[#8AD5B7] text-[#1E2322] px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-[#8AD5B7]/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View More</span>
                <ArrowRight className="w-5 h-5 transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlertSystemGuidePage;
