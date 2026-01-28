import CustomImage from "@/app/CustomImage";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

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
 * Server component for related posts section
 */
export default function RelatedPosts({ relatedPosts, relatedLoading }) {
  return (
    <div className="bg-[#1E2322] py-16 px-6 md:px-12 lg:px-24 -mx-6 md:-mx-12 lg:-mx-24">
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DCE2E2] font-conthrax mb-4">
              More Local Law Guides Related To This Topic
            </h2>
            <p className="text-[#89A096] font-poppins">
              The PBS Alert System is designed to revolutionize how property managers, owners, and stakeholders navigate compliance, deadlines, and data in New York
            </p>
          </div>
          
          {relatedLoading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8AD5B7] mx-auto"></div>
              <p className="text-[#89A096] mt-4">Loading related guides...</p>
            </div>
          ) : relatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="group relative bg-[#2E3734]/60 backdrop-blur-sm border border-[#8AD5B7]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#8AD5B7]/40 hover:shadow-2xl hover:shadow-[#8AD5B7]/10 hover:-translate-y-2"
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
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <h2 className="text-xl md:text-xl font-bold text-[#DCE2E2] mb-4 font-poppins leading-tight line-clamp-3 group-hover:text-[#8AD5B7] transition-colors duration-300">
                      {decodeHtmlEntities(relatedPost.title)}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#89A096] mb-6 font-poppins text-sm md:text-base leading-relaxed line-clamp-3">
                      {decodeHtmlEntities(relatedPost.excerpt)}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      {/* Read More Button */}
                      <Link
                        href={`/local-law-guide/${relatedPost.slug}`}
                        className="group/btn flex items-center gap-3 text-[#8AD5B7] hover:text-[#DCE2E2] transition-all duration-300 font-poppins font-semibold"
                      >
                        {/* Enhanced Circular Icon */}
                        <div className="relative w-12 h-12 bg-gradient-to-r from-[#8AD5B7] to-[#7AC5A7] rounded-full flex items-center justify-center shadow-lg shadow-[#8AD5B7]/25 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:shadow-xl group-hover/btn:shadow-[#8AD5B7]/40">
                          <ArrowRight className="w-5 h-5 text-[#1E2322] transform -rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" />
                        </div>
                        <span className="font-semibold tracking-wide">Read Article</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#89A096] font-poppins">
                No related guides found in this category.
              </p>
            </div>
          )}
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="/local-law-guide"
              className="inline-flex items-center gap-3 bg-[#8AD5B7] text-[#1E2322] px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-[#8AD5B7]/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View More</span>
              <ArrowLeft className="w-5 h-5 transform rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
