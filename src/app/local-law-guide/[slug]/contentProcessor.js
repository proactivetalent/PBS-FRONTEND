/**
 * Server-side content processing utilities
 */

/**
 * Process HTML content to apply special styling to specific headings
 */
export function processContentWithSpecialHeadings(htmlContent) {
  if (!htmlContent) return '';
  
  const specialHeadings = [
    'Mandatory Checklist & Scope',
    'Affected Property Owners & Managers', 
    'Key Dates & Filing Windows'
  ];
  
  let processedContent = htmlContent;
  
  // First, handle the side-by-side headings
  const sideBySideHeadings = ['Mandatory Checklist & Scope', 'Affected Property Owners & Managers'];
  
  // Check if both side-by-side headings exist and find their positions
  const foundHeadings = [];
  sideBySideHeadings.forEach(heading => {
    // Try multiple approaches to find the heading
    let found = false;
    let match = null;
    
    // Approach 1: Exact match with flexible HTML structure
    const exactRegex = new RegExp(`<h([1-6])[^>]*>\\s*${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</h\\1>`, 'gi');
    match = exactRegex.exec(processedContent);
    
    if (match) {
      found = true;
    } else {
      // Approach 2: Case-insensitive search with more flexible whitespace
      const flexibleRegex = new RegExp(`<h([1-6])[^>]*>\\s*${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\s+/g, '\\s+')}\\s*</h\\1>`, 'gi');
      match = flexibleRegex.exec(processedContent);
      
      if (match) {
        found = true;
      } else {
        // Approach 3: Search for partial matches (in case there are HTML entities or extra formatting)
        const partialRegex = new RegExp(`<h([1-6])[^>]*>.*?${heading.split(' ').map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*?')}.*?</h\\1>`, 'gi');
        match = partialRegex.exec(processedContent);
        
        if (match) {
          found = true;
        }
      }
    }
    
    if (found && match) {
      foundHeadings.push({ 
        heading, 
        match: match[0], 
        level: match[1], 
        index: match.index
      });
    }
  });
  
  // Sort by position to ensure correct order
  foundHeadings.sort((a, b) => a.index - b.index);
  
  // If both headings are found, create side-by-side container with content
  if (foundHeadings.length === 2) {
    // Find the content after each heading until the next heading
    const firstHeading = foundHeadings[0];
    const secondHeading = foundHeadings[1];
    
    // Find content after first heading until second heading
    const firstHeadingEnd = firstHeading.index + firstHeading.match.length;
    const secondHeadingEnd = secondHeading.index + secondHeading.match.length;
    
    // Get content between first heading and second heading
    const firstContent = processedContent.substring(firstHeadingEnd, secondHeading.index).trim();
    
    // Find next heading after second heading to determine where second content ends
    const nextHeadingRegex = new RegExp(`<h([1-6])[^>]*>`, 'gi');
    nextHeadingRegex.lastIndex = secondHeadingEnd;
    const nextHeadingMatch = nextHeadingRegex.exec(processedContent);
    
    let secondContent = '';
    if (nextHeadingMatch) {
      secondContent = processedContent.substring(secondHeadingEnd, nextHeadingMatch.index).trim();
    } else {
      secondContent = processedContent.substring(secondHeadingEnd).trim();
    }
    
    // Create the side-by-side container with content
    const sideBySideContainer = `
      <div style="background-color: #1E2322; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(138, 213, 183, 0.2); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; position: relative;">
          <div style="padding-right: 2rem;">
            <h${firstHeading.level} style="color: #8AD5B7; font-family: 'Conthrax', sans-serif; text-align:center; font-weight: bold; font-size: 1rem;">${firstHeading.heading}</h${firstHeading.level}>
            <div style="color: #DCE2E2; font-family: 'Poppins', sans-serif; font-size: 0.75rem; line-height: 1.6;">
              <div style="margin-bottom: 1rem;">
                ${firstContent}
              </div>
            </div>
          </div>
          <div style="padding-left: 1rem;">
            <h${secondHeading.level} style="color: #8AD5B7; font-family: 'Conthrax', sans-serif; text-align:center; font-weight: bold; font-size: 1rem;">${secondHeading.heading}</h${secondHeading.level}>
            <div style="color: #DCE2E2; font-family: 'Poppins', sans-serif; font-size: 0.75rem; line-height: 1.6;">
              <div style="margin-bottom: 1rem;">
                ${secondContent}
              </div>
            </div>
          </div>
          <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, rgba(138, 213, 183, 0.8), transparent); transform: translateX(-50%); z-index: 10;"></div>
        </div>
      </div>
    `;
    
    // Find the next heading after the second heading to determine the end point
    let endPoint = processedContent.length;
    if (nextHeadingMatch) {
      endPoint = nextHeadingMatch.index;
    }
    
    // Create the new content: everything before first heading + container + everything after the end point
    const beforeFirstHeading = processedContent.substring(0, firstHeading.index);
    const afterEndPoint = processedContent.substring(endPoint);
    processedContent = beforeFirstHeading + sideBySideContainer + afterEndPoint;
  }
  
  // Handle the remaining special heading (Key Dates & Filing Windows) with content
  const remainingHeading = 'Key Dates & Filing Windows';
  
  // Try multiple approaches to find the remaining heading
  let foundRemaining = false;
  let remainingMatch = null;
  
  // Approach 1: Exact match
  const remainingRegex = new RegExp(`<h([1-6])[^>]*>\\s*${remainingHeading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</h\\1>`, 'gi');
  remainingMatch = remainingRegex.exec(processedContent);
  
  if (remainingMatch) {
    foundRemaining = true;
  } else {
    // Approach 2: Flexible match
    const flexibleRemainingRegex = new RegExp(`<h([1-6])[^>]*>\\s*${remainingHeading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\s+/g, '\\s+')}\\s*</h\\1>`, 'gi');
    remainingMatch = flexibleRemainingRegex.exec(processedContent);
    
    if (remainingMatch) {
      foundRemaining = true;
    } else {
      // Approach 3: Partial match
      const partialRemainingRegex = new RegExp(`<h([1-6])[^>]*>.*?${remainingHeading.split(' ').map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*?')}.*?</h\\1>`, 'gi');
      remainingMatch = partialRemainingRegex.exec(processedContent);
      
      if (remainingMatch) {
        foundRemaining = true;
      }
    }
  }
  
  if (foundRemaining && remainingMatch) {
    const headingLevel = remainingMatch[1];
    const headingTag = remainingMatch[0];
    const headingEnd = remainingMatch.index + headingTag.length;
    
    // Find the next heading of any level to close the section
    const nextHeadingRegex = new RegExp(`<h([1-6])[^>]*>`, 'gi');
    nextHeadingRegex.lastIndex = headingEnd;
    const nextHeadingMatch = nextHeadingRegex.exec(processedContent);
    
    let contentAfterHeading = '';
    if (nextHeadingMatch) {
      contentAfterHeading = processedContent.substring(headingEnd, nextHeadingMatch.index).trim();
    } else {
      contentAfterHeading = processedContent.substring(headingEnd).trim();
    }
    
    // Create the special section wrapper with inline styles including content
    const specialSectionStart = `
      <div style="background-color: #1E2322; border-radius: 0.75rem; padding: 1rem; text-align: center; border: 1px solid rgba(138, 213, 183, 0.2); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <h${headingLevel} style="color: #8AD5B7; font-family: 'Conthrax', sans-serif; font-weight: bold; font-size: 1.5rem; margin-bottom: 1rem;">${remainingHeading}</h${headingLevel}>
        <div style="color: #DCE2E2; font-family: 'Poppins', sans-serif;font-size: 0.75rem; text-align: center; line-height: 1.6;">
          <div style="margin-bottom: 1rem;">
            ${contentAfterHeading}
          </div>
        </div>
      </div>
    `;
    
    const specialSectionEnd = '</div>';
    
    // Replace the heading and its content with the special section start
    if (nextHeadingMatch) {
      const beforeHeading = processedContent.substring(0, remainingMatch.index);
      const afterNextHeading = processedContent.substring(nextHeadingMatch.index);
      processedContent = beforeHeading + specialSectionStart + specialSectionEnd + afterNextHeading;
    } else {
      // If no next heading, replace everything from heading to end
      const beforeHeading = processedContent.substring(0, remainingMatch.index);
      processedContent = beforeHeading + specialSectionStart + specialSectionEnd;
    }
  }
  
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
