"use client";

import { useEffect, useState } from "react";
import { ClipboardList } from "lucide-react";

/**
 * Client component for table of contents with DOM manipulation
 */
export default function TableOfContents() {
  const [tableOfContents, setTableOfContents] = useState([]);
  const contentId = "local-law-content";

  /**
   * Generate table of contents from the actual rendered DOM
   */
  const generateTableOfContentsFromDOM = () => {
    const contentElement = document.getElementById(contentId);
    if (!contentElement) return [];
    
    const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    const toc = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent.trim();
      const id = heading.id || `heading-${index}`;
      
      // Add ID if it doesn't have one
      if (!heading.id) {
        heading.id = id;
        heading.className = `${heading.className} scroll-mt-20`;
      }
      
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
   * Scroll to heading when table of contents item is clicked
   */
  const scrollToHeading = (headingId) => {
    setTimeout(() => {
      let element = document.getElementById(headingId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
        return;
      }
      
      // Fallback: try to find by index
      const contentElement = document.getElementById(contentId);
      if (!contentElement) return;
      
      const contentHeadings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const targetText = headingId.replace('heading-', '');
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
      
      // Final fallback: find by text content
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
        }
      }
    }, 150);
  };

  useEffect(() => {
    // Wait for content to be rendered
    const timer = setTimeout(() => {
      const toc = generateTableOfContentsFromDOM();
      setTableOfContents(toc);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:sticky lg:top-[25vh] mb-10" style={{ position: 'sticky', top: '25vh' }}>
      <div className="bg-[#2E3734] rounded-xl p-6 border border-[#8AD5B7]/20 h-[400px] flex flex-col">
        <h3 className="text-lg font-bold text-[#DCE2E2] font-poppins mb-4 flex items-center gap-2">
          <ClipboardList className="w-10 h-10 text-[#8AD5B7]" />
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
              <p className="italic">No headings found in this guide.</p>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
