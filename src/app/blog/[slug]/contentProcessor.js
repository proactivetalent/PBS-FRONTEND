/**
 * Server-side content processing utilities
 */

/**
 * Process HTML content to add IDs to headings for table of contents
 */
export function processContentWithHeadings(htmlContent) {
  if (!htmlContent) return '';
  
  let processedContent = htmlContent;
  let headingIndex = 0;
  
  // Regex to match headings (h1-h6)
  const headingRegex = /<h([1-6])([^>]*)>(.*?)<\/h\1>/gi;
  
  processedContent = processedContent.replace(headingRegex, (match, level, attributes, text) => {
    // Extract text content (remove HTML tags from text)
    const textContent = text.replace(/<[^>]*>/g, '').trim();
    
    // Generate ID if not already present
    let id = `heading-${headingIndex}`;
    headingIndex++;
    
    // Check if heading already has an ID
    const idMatch = attributes.match(/id=["']([^"']+)["']/i);
    if (idMatch) {
      id = idMatch[1];
    } else {
      // Add ID attribute
      attributes = attributes ? `${attributes} id="${id}"` : `id="${id}"`;
    }
    
    // Add scroll-mt-20 class for proper scroll offset
    const classMatch = attributes.match(/class=["']([^"']+)["']/i);
    if (classMatch) {
      attributes = attributes.replace(/class=["']([^"']+)["']/i, `class="$1 scroll-mt-20"`);
    } else {
      attributes = attributes ? `${attributes} class="scroll-mt-20"` : `class="scroll-mt-20"`;
    }
    
    return `<h${level}${attributes}>${text}</h${level}>`;
  });
  
  return processedContent;
}

/**
 * Helper function to decode HTML entities (server-side safe)
 */
export function decodeHtmlEntities(text) {
  if (!text) return '';
  // Server-side: Use a simple replacement for common entities
  return text
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}
