"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowRight, Bookmark, CalendarDays, Search, X, Share2, Mail, Copy, Check } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import CustomImage from "../CustomImage";
import Link from "next/link";
import { fetchPosts, fetchTotalPosts, fetchCategories, fetchInspectionSubcategories, fetchInspectionPosts, fetchInspectionTotalPosts } from "@/lib/wordpress";
import { createStaggeredTextAnimation } from "@/utils/animationUtils";

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

// Share Button Component
const ShareButton = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const postUrl = `${currentUrl}/blog/${post.slug}`;
  const shareText = `Check out this article: ${post.title}`;

  // Email share URL
  const emailUrl = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${shareText}\n\n${postUrl}`)}`;

  // Handle share action
  const handleShare = (action) => {
    if (action === 'copy') {
      navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setIsOpen(false);
    } else if (action === 'email') {
      window.location.href = emailUrl;
      setIsOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 text-[#89A096] hover:text-[#8AD5B7] transition-all duration-300 font-poppins text-sm font-medium px-3 py-2 rounded-lg hover:bg-[#8AD5B7]/10"
      >
        <div className="relative">
          <Share2 className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
          <div className="absolute inset-0 w-4 h-4 bg-[#8AD5B7]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </div>
        <span>Share</span>
      </button>

      {/* Enhanced Share Dropdown */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-3 bg-[#2E3734]/95 backdrop-blur-md border border-[#8AD5B7]/30 rounded-2xl shadow-2xl z-50 min-w-[220px] overflow-hidden">
          <div className="p-1">
            {/* Email */}
            <button
              onClick={() => handleShare('email')}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#DCE2E2] hover:bg-[#8AD5B7]/10 rounded-xl transition-all duration-300 group/email"
            >
              <div className="w-8 h-8 bg-[#8AD5B7]/20 rounded-lg flex items-center justify-center group-hover/email:bg-[#8AD5B7]/30 transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#8AD5B7]" />
              </div>
              <span className="text-sm font-poppins font-medium">Email Article</span>
            </button>

            {/* Copy Link */}
            <button
              onClick={() => handleShare('copy')}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#DCE2E2] hover:bg-[#8AD5B7]/10 rounded-xl transition-all duration-300 group/copy"
            >
              <div className="w-8 h-8 bg-[#8AD5B7]/20 rounded-lg flex items-center justify-center group-hover/copy:bg-[#8AD5B7]/30 transition-colors duration-300">
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-[#8AD5B7]" />
                )}
              </div>
              <span className="text-sm font-poppins font-medium">
                {copied ? 'Copied!' : 'Copy Link'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  // Ref for the main heading animation
  const headingRef = useRef(null);
  // Ref for the inspection services heading animation
  const inspectionHeadingRef = useRef(null);
  /**
   * State for managing pagination, posts, and categories
   */
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [allFilteredPosts, setAllFilteredPosts] = useState([]); // Store all filtered posts for pagination
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true); // Start with true since we need to fetch data
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // null means "All categories"

  /**
   * State for managing inspection services section
   */
  const [inspectionPosts, setInspectionPosts] = useState([]);
  const [inspectionSubcategories, setInspectionSubcategories] = useState([]);
  const [selectedInspectionSubcategory, setSelectedInspectionSubcategory] = useState(null);
  const [inspectionLoading, setInspectionLoading] = useState(true);
  const [inspectionError, setInspectionError] = useState(null);
  const [inspectionCurrentPage, setInspectionCurrentPage] = useState(1);
  const [inspectionTotalPages, setInspectionTotalPages] = useState(0);

  /**
   * Search state management
   */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  /**
   * Number of posts to display per page
   */
  const postsPerPage = 6;

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

    // Always filter out Local Law Guide and Alert System Guide categories from search results
    const finalFiltered = filtered.filter(post => {
      const category = post.category ? post.category.toLowerCase().trim() : '';
      const excludedCategories = [
        'local law guide',
        'local-law-guide',
        'alert system guide',
        'alert-system-guide'
      ];

      const shouldExclude = excludedCategories.some(excluded =>
        category.includes(excluded)
      );

      return !shouldExclude;
    });

    setSearchResults(finalFiltered);
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
   * Fetch categories on component mount
   */
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        // Filter out specific categories that shouldn't appear in the main blog filter
        const filteredCategories = fetchedCategories.filter(category => {
          const categoryName = category.name ? category.name.toLowerCase().trim() : '';
          const categorySlug = category.slug ? category.slug.toLowerCase().trim() : '';

          // Filter out categories that shouldn't be in the main blog filter
          const excludedCategories = [
            'local law guide',
            'local-law-guide',
            'alert system guide',
            'alert-system-guide'
            // Removed inspection services exclusion so it appears in main blog filter
          ];

          const shouldExclude = excludedCategories.some(excluded =>
            categoryName.includes(excluded) || categorySlug.includes(excluded)
          );

          return !shouldExclude;
        });
        setCategories(filteredCategories);
      } catch (err) {
        console.error('Error loading categories:', err);
      }
    };

    loadCategories();
  }, []);

  /**
   * Fetch inspection subcategories on component mount
   */
  useEffect(() => {
    const loadInspectionSubcategories = async () => {
      try {
        const fetchedSubcategories = await fetchInspectionSubcategories();
        setInspectionSubcategories(fetchedSubcategories);
      } catch (err) {
        console.error('Error loading inspection subcategories:', err);
      }
    };

    loadInspectionSubcategories();
  }, []);

  /**
   * Fetch inspection posts when subcategory selection changes
   */
  useEffect(() => {
    const loadInspectionPosts = async () => {
      try {
        setInspectionLoading(true);
        setInspectionError(null);

        const fetchedPosts = await fetchInspectionPosts(selectedInspectionSubcategory, inspectionCurrentPage, postsPerPage);
        setInspectionPosts(fetchedPosts);

        // Get total posts count for proper pagination
        const totalPosts = await fetchInspectionTotalPosts(selectedInspectionSubcategory);
        const calculatedTotalPages = Math.ceil(totalPosts / postsPerPage);
        setInspectionTotalPages(calculatedTotalPages);

        // If we're on a page that's beyond the total pages, reset to page 1
        if (inspectionCurrentPage > calculatedTotalPages && calculatedTotalPages > 0) {
          setInspectionCurrentPage(1);
        }
      } catch (err) {
        console.error('Error loading inspection posts:', err);
        setInspectionError('Failed to load inspection posts. Please try again later.');
      } finally {
        setInspectionLoading(false);
      }
    };

    loadInspectionPosts();
  }, [selectedInspectionSubcategory, inspectionCurrentPage]);

  /**
   * Fetch posts from WordPress API (with category filter if selected)
   */
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        let fetchedPosts;

        if (selectedCategory === null) {
          // When "All Categories" is selected, we need to fetch all posts first, then filter and paginate
          // This ensures we get all available posts after filtering

          // Fetch a large number of posts to get all available ones
          const allPosts = await fetchPosts(1, 100, null); // Fetch up to 100 posts

          // Filter out Local Law Guide and Alert System Guide posts
          const filteredPosts = allPosts.filter(post => {
            const category = post.category ? post.category.toLowerCase().trim() : '';
            const excludedCategories = [
              'local law guide',
              'local-law-guide',
              'alert system guide',
              'alert-system-guide'
            ];

            const shouldExclude = excludedCategories.some(excluded =>
              category.includes(excluded)
            );

            return !shouldExclude;
          });

          // Store all filtered posts for pagination
          setAllFilteredPosts(filteredPosts);

          // Set total pages based on actual filtered posts count
          setTotalPages(Math.ceil(filteredPosts.length / postsPerPage));

          // Now paginate the filtered posts
          const startIndex = (currentPage - 1) * postsPerPage;
          fetchedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
        } else {
          // When a specific category is selected, fetch normally
          fetchedPosts = await fetchPosts(currentPage, postsPerPage, selectedCategory);
          // Clear filtered posts when specific category is selected
          setAllFilteredPosts([]);
        }

        setPosts(fetchedPosts);

        // Calculate total pages for specific categories
        if (selectedCategory !== null) {
          const totalPosts = await fetchTotalPosts(selectedCategory);
          setTotalPages(Math.ceil(totalPosts / postsPerPage));
        }
        // For "All Categories", total pages are set when filtering posts above
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, postsPerPage, selectedCategory]);

  // Animate the main heading with staggering text effect
  useEffect(() => {
    createStaggeredTextAnimation(headingRef, { useIntersectionObserver: false });
  }, []);

  // Animate the inspection services heading with staggering text effect
  useEffect(() => {
    createStaggeredTextAnimation(inspectionHeadingRef, { useIntersectionObserver: true });
  }, []);

  /**
   * Handle category filter change
   */
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page when filtering
    clearSearch(); // Clear search when changing categories
  };

  /**
   * Handle inspection subcategory filter change
   */
  const handleInspectionSubcategoryChange = (subcategoryId) => {
    setSelectedInspectionSubcategory(subcategoryId);
    setInspectionCurrentPage(1); // Reset to first page when changing subcategories
  };

  /**
   * Handle inspection page navigation
   */
  const handleInspectionPageChange = (page) => {
    if (page >= 1 && page <= inspectionTotalPages) {
      setInspectionCurrentPage(page);
      // Scroll to the top of the inspection services section
      const inspectionSection = document.querySelector('[data-section="inspection-services"]');
      if (inspectionSection) {
        inspectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  /**
   * Handles page navigation
   */
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to the top of the blog/articles section
      const blogSection = document.querySelector('[data-section="blog-articles"]');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Get posts to display
  const displayPosts = getDisplayPosts();
  const hasSearchResults = searchQuery.trim() && searchResults.length > 0;
  const hasNoSearchResults = searchQuery.trim() && searchResults.length === 0 && !isSearching;

  return (
    <div>
      {/* Main Blog Section */}
      <section data-section="blog-articles" className="bg-[#2B3331] text-[#DCE2E2] py-16 md:py-24 lg:py-10 px-4 md:px-6 lg:px-12 xl:px-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238AD5B7' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Header Section with Title and Search */}
          <div className="my-8 md:mb-16">
            {/* Main Heading */}
            <div className="mb-6 lg:mb-8">
              <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax">
                BLOG & ARTICLES
              </h1>
              <p className="text-[#89A096] text-lg md:text-xl mt-2 font-poppins">
                Stay informed with the latest industry insights, compliance updates, and expert perspectives from PBS professionals
              </p>
            </div>

            {/* Search Bar - Full Width Below Heading */}
            <div className="w-full">
              <div className="relative w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#89A096] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or categories..."
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

          {/* Category Filter Buttons - Only show when not searching */}
          {!searchQuery && (
            <div className="mb-8 md:mb-12">
              <div className="text-left mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#DCE2E2] mb-3 font-conthrax">
                  Explore Categories
                </h3>
                <p className="text-[#89A096] text-base md:text-lg font-poppins">
                  Filter articles by topic to find exactly what you're looking for
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4">
                {/* All Categories Button */}
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`px-6 py-3 rounded-xl text-sm md:text-base font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === null
                    ? 'bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] text-[#1E2322] shadow-lg shadow-[#8AD5B7]/25'
                    : 'bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 text-[#89A096] hover:bg-[#8AD5B7]/10 hover:border-[#8AD5B7]/40 hover:text-[#DCE2E2]'
                    }`}
                >
                  All Categories
                </button>

                {/* Individual Category Buttons */}
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 py-3 rounded-xl text-sm md:text-base font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] text-[#1E2322] shadow-lg shadow-[#8AD5B7]/25'
                      : 'bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 text-[#89A096] hover:bg-[#8AD5B7]/10 hover:border-[#8AD5B7]/40 hover:text-[#DCE2E2]'
                      }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Loading state */}
            {loading && (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
                <p className="text-[#89A096] mt-4">Loading posts...</p>
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
                  <p>No posts found matching "{searchQuery}"</p>
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
                <p className="text-[#89A096] text-lg">No posts found in this category.</p>
              </div>
            )}

            {/* Posts Grid */}
            {!loading && !error && displayPosts.map((post, index) => (
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
                        console.log('Button clicked! Post slug:', post.slug);
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

                    {/* Share Button */}
                    <ShareButton post={post} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls - Only show when not searching */}
          {!searchQuery && !loading && !error && totalPages > 1 && (
            <div className="flex justify-center mt-16 md:mt-20">
              <div className="bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 rounded-2xl p-2 shadow-xl">
                <Pagination>
                  <PaginationContent className="gap-1">
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                        className="text-[#89A096] hover:bg-[#8AD5B7]/10 hover:text-[#DCE2E2] font-poppins rounded-xl transition-all duration-300 border-none"
                        isActive={currentPage > 1}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(index + 1);
                          }}
                          className={`hover:bg-[#8AD5B7]/10 hover:text-[#DCE2E2] font-poppins rounded-xl transition-all duration-300 border-none ${currentPage === index + 1
                            ? "bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] text-[#1E2322] hover:from-[#8AD5B7] hover:to-[#7AC5A7] shadow-lg shadow-[#8AD5B7]/25"
                            : "text-[#89A096]"
                            }`}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                        className="text-[#89A096] hover:bg-[#8AD5B7]/10 hover:text-[#DCE2E2] font-poppins rounded-xl transition-all duration-300 border-none"
                        isActive={currentPage < totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Inspection Services Section */}
      <section data-section="inspection-services" className="bg-[#2B3331] text-[#DCE2E2] px-4 md:px-6 lg:px-12 xl:px-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238AD5B7' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Header Section */}
          <div className="my-8 md:mb-12">
            <div className="mb-6 lg:mb-8">
              <h2 ref={inspectionHeadingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DCE2E2] font-conthrax">
                INSPECTION SERVICES
              </h2>
              <p className="text-[#89A096] text-lg md:text-xl mt-2 font-poppins">
                Explore our comprehensive inspection services and stay updated with the latest industry insights and compliance requirements
              </p>
            </div>
          </div>

          {/* Inspection Subcategory Filter Buttons */}
          <div className="mb-12 md:mb-16">
            <div className="text-left mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#DCE2E2] mb-3 font-conthrax">
                Filter by Service Type
              </h3>
              <p className="text-[#89A096] text-base md:text-lg font-poppins">
                Choose a specific service category to view related articles and insights
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {/* All Inspection Services Button */}
              <button
                onClick={() => handleInspectionSubcategoryChange(null)}
                className={`px-6 py-3 rounded-xl text-sm md:text-base font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${selectedInspectionSubcategory === null
                  ? 'bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] text-[#1E2322] shadow-lg shadow-[#8AD5B7]/25'
                  : 'bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 text-[#89A096] hover:bg-[#8AD5B7]/10 hover:border-[#8AD5B7]/40 hover:text-[#DCE2E2]'
                  }`}
              >
                All Services
              </button>

              {/* Individual Subcategory Buttons */}
              {inspectionSubcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => handleInspectionSubcategoryChange(subcategory.id)}
                  className={`px-6 py-3 rounded-xl text-sm md:text-base font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${selectedInspectionSubcategory === subcategory.id
                    ? 'bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] text-[#1E2322] shadow-lg shadow-[#8AD5B7]/25'
                    : 'bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 text-[#89A096] hover:bg-[#8AD5B7]/10 hover:border-[#8AD5B7]/40 hover:text-[#DCE2E2]'
                    }`}
                >
                  {subcategory.name}
                  <span className="ml-2 text-xs opacity-75">({subcategory.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Inspection Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Loading state */}
            {inspectionLoading && (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
                <p className="text-[#89A096] mt-4">Loading inspection posts...</p>
              </div>
            )}

            {/* Error state */}
            {inspectionError && (
              <div className="col-span-full text-center py-12">
                <p className="text-red-400 mb-4">{inspectionError}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-lg hover:bg-[#8AD5B7]/80 transition"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* No posts found */}
            {!inspectionLoading && !inspectionError && inspectionPosts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-[#89A096] text-lg">No inspection posts found in this category.</p>
              </div>
            )}

            {/* Inspection Posts Grid */}
            {!inspectionLoading && !inspectionError && inspectionPosts.map((post, index) => (
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
                  <h3 className="text-xl md:text-2xl font-bold text-[#DCE2E2] mb-4 font-conthrax leading-tight line-clamp-2 group-hover:text-[#8AD5B7] transition-colors duration-300">
                    {decodeHtmlEntities(post.title)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#89A096] mb-6 font-poppins text-sm md:text-base leading-relaxed line-clamp-3">
                    {decodeHtmlEntities(post.excerpt)}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    {/* Read More Button */}
                    <button
                      onClick={() => {
                        console.log('Button clicked! Post slug:', post.slug);
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

                    {/* Share Button */}
                    <ShareButton post={post} />
                  </div>
                </div>
              </div>
            ))}

            {/* Inspection Pagination Controls */}
            {!inspectionLoading && !inspectionError && inspectionTotalPages > 1 && (
              <div className="col-span-full flex justify-center my-16 md:mt-20">
                <div className="bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 rounded-2xl p-2 shadow-xl">
                  <Pagination>
                    <PaginationContent className="gap-1">
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleInspectionPageChange(inspectionCurrentPage - 1);
                          }}
                          className="text-[#89A096] hover:bg-[#8AD5B7]/10 hover:text-[#DCE2E2] font-poppins rounded-xl transition-all duration-300 border-none"
                          isActive={inspectionCurrentPage > 1}
                        />
                      </PaginationItem>

                      {Array.from({ length: inspectionTotalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleInspectionPageChange(index + 1);
                            }}
                            className={`hover:bg-[#8AD5B7]/10 hover:text-[#DCE2E2] font-poppins rounded-xl transition-all duration-300 border-none ${inspectionCurrentPage === index + 1
                              ? "bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] text-[#1E2322] hover:from-[#8AD5B7] hover:to-[#7AC5A7] shadow-lg shadow-[#8AD5B7]/25"
                              : "text-[#89A096]"
                              }`}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleInspectionPageChange(inspectionCurrentPage + 1);
                          }}
                          className="text-[#8AD5B7] hover:bg-[#8AD5B7]/10 hover:text-[#DCE2E2] font-poppins rounded-xl transition-all duration-300 border-none"
                          isActive={inspectionCurrentPage < inspectionTotalPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;