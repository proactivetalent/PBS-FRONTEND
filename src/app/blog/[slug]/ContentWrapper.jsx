"use client";

import { useEffect, useRef } from "react";

/**
 * Client wrapper for content that handles download links
 */
export default function ContentWrapper({ children }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

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
  }, []);

  return (
    <div ref={contentRef} id="blog-content" className="prose prose-invert max-w-none w-full mb-12">
      {children}
    </div>
  );
}
