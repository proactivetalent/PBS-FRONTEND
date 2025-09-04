import { WORDPRESS_CONFIG } from './config';

const WORDPRESS_API_URL = WORDPRESS_CONFIG.API_URL;

/**
 * Fetch all posts from WordPress API with optional category filtering
 * @param {number} page - Page number for pagination
 * @param {number} perPage - Number of posts per page
 * @param {number|string} categoryId - Category ID to filter by (optional)
 * @returns {Promise<Array>} Array of posts
 */
export async function fetchPosts(page = 1, perPage = 6, categoryId = null) {
  try {
    // Use _embed to get category names, but handle media separately
    let url = `${WORDPRESS_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`;
    
    // Add category filter if provided
    if (categoryId) {
      url += `&categories=${categoryId}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Transform WordPress posts to match your app's format
    const transformedPosts = posts.map(transformPost);
    
    return transformedPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch posts by specific category ID
 * @param {number|string} categoryId - Category ID
 * @param {number} page - Page number for pagination
 * @param {number} perPage - Number of posts per page
 * @returns {Promise<Array>} Array of posts in the category
 */
export async function fetchPostsByCategory(categoryId, page = 1, perPage = 6) {
  return fetchPosts(page, perPage, categoryId);
}

/**
 * Fetch all available categories
 * @returns {Promise<Array>} Array of category objects
 */
export async function fetchCategories() {
  try {
    // Try with simpler parameters first - WordPress.com API might not support hide_empty=false
    const url = `${WORDPRESS_API_URL}/categories?per_page=50`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Categories API returned ${response.status}: ${response.statusText}`);
      // Try without per_page parameter as fallback
      const fallbackUrl = `${WORDPRESS_API_URL}/categories`;
      
      const fallbackResponse = await fetch(fallbackUrl);
      if (!fallbackResponse.ok) {
        throw new Error(`HTTP error! status: ${fallbackResponse.status}`);
      }
      
      const categories = await fallbackResponse.json();
      
      if (!Array.isArray(categories)) {
        console.error('Fallback categories response is not an array:', categories);
        return [];
      }
      
      return processCategories(categories);
    }
    
    const categories = await response.json();
    
    // Ensure categories is an array
    if (!Array.isArray(categories)) {
      console.error('Categories response is not an array:', categories);
      return [];
    }
    
    return processCategories(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Helper function to process categories
function processCategories(categories) {
  // Filter out 'Uncategorized' but include Inspection Services and other top-level categories
  const filteredCategories = categories.filter(category => {
    // Include Inspection Services even if it has subcategories
    if (category.slug === 'inspection-services' || category.name === 'Inspection Services') {
      return true;
    }
    
    // For other categories, only include top-level ones (no parent)
    return category.name !== 'Uncategorized' && 
           category.slug !== 'uncategorized' &&
           !category.parent;
  });
  
  const mappedCategories = filteredCategories.map(category => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    count: category.count,
    description: category.description
  }));
  
  return mappedCategories;
}

/**
 * Fetch inspection subcategories (categories that have inspection-services as parent)
 * @returns {Promise<Array>} Array of inspection subcategory objects
 */
export async function fetchInspectionSubcategories() {
  try {
    // First, find the inspection-services category ID
    const allCategories = await fetch(`${WORDPRESS_API_URL}/categories?per_page=50`);
    
    if (!allCategories.ok) {
      console.error(`Inspection subcategories API returned ${allCategories.status}: ${allCategories.statusText}`);
      return [];
    }
    
    const categories = await allCategories.json();
    
    if (!Array.isArray(categories)) {
      console.error('Categories response is not an array:', categories);
      return [];
    }
    
    // Find the inspection-services category specifically
    const inspectionCategory = categories.find(cat => 
      cat.slug === 'inspection-services' || cat.name === 'Inspection Services'
    );
    
    if (!inspectionCategory) {
      return [];
    }
    
    // Find all subcategories of inspection-services
    const inspectionSubcategories = categories.filter(category => 
      category.parent === inspectionCategory.id
    );
    
    return inspectionSubcategories.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      count: category.count,
      description: category.description,
      parent: category.parent
    }));
  } catch (error) {
    console.error('Error fetching inspection subcategories:', error);
    return [];
  }
}

/**
 * Fetch posts by inspection subcategory
 * @param {number|string} subcategoryId - Subcategory ID to filter by
 * @param {number} page - Page number for pagination
 * @param {number} perPage - Number of posts per page
 * @returns {Promise<Array>} Array of posts in the inspection subcategory
 */
export async function fetchInspectionPosts(subcategoryId = null, page = 1, perPage = 6) {
  try {
    // Use _embed to get category names, but handle media separately
    let url = `${WORDPRESS_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`;
    
    if (subcategoryId) {
      // If specific subcategory is selected, filter by that subcategory
      url += `&categories=${subcategoryId}`;
    } else {
      // If no subcategory specified, get all posts from inspection-services category and its subcategories
      const allCategories = await fetch(`${WORDPRESS_API_URL}/categories?per_page=50`);
      
      if (!allCategories.ok) {
        console.error(`Inspection posts categories API returned ${allCategories.status}: ${allCategories.statusText}`);
        return [];
      }
      
      const categories = await allCategories.json();
      
      if (!Array.isArray(categories)) {
        console.error('Categories response is not an array:', categories);
        return [];
      }
      
      // Find the inspection-services category
      const inspectionCategory = categories.find(cat => 
        cat.slug === 'inspection-services' || cat.name === 'Inspection Services'
      );
      
      if (inspectionCategory) {
        // Get all subcategories of inspection-services
        const inspectionSubcategories = categories.filter(category => 
          category.parent === inspectionCategory.id
        );
        
        // Create array of category IDs: inspection-services + all its subcategories
        const categoryIds = [inspectionCategory.id, ...inspectionSubcategories.map(cat => cat.id)];
        url += `&categories=${categoryIds.join(',')}`;
      }
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Transform WordPress posts to match your app's format
    const transformedPosts = posts.map(transformPost);
    
    return transformedPosts;
  } catch (error) {
    console.error('Error fetching inspection posts:', error);
    return [];
  }
}

/**
 * Get total count of inspection posts for pagination
 * @param {number|string} subcategoryId - Subcategory ID to filter by
 * @returns {Promise<number>} Total number of inspection posts
 */
export async function fetchInspectionTotalPosts(subcategoryId = null) {
  try {
    let url = `${WORDPRESS_API_URL}/posts?per_page=1`;
    
    if (subcategoryId) {
      // If specific subcategory is selected, filter by that subcategory
      url += `&categories=${subcategoryId}`;
    } else {
      // If no subcategory specified, get all posts from inspection-services category and its subcategories
      const allCategories = await fetch(`${WORDPRESS_API_URL}/categories?per_page=50`);
      
      if (!allCategories.ok) {
        console.error(`Inspection total posts categories API returned ${allCategories.status}: ${allCategories.statusText}`);
        return 0;
      }
      
      const categories = await allCategories.json();
      
      if (!Array.isArray(categories)) {
        console.error('Categories response is not an array:', categories);
        return 0;
      }
      
      // Find the inspection-services category
      const inspectionCategory = categories.find(cat => 
        cat.slug === 'inspection-services' || cat.name === 'Inspection Services'
      );
      
      if (inspectionCategory) {
        // Get all subcategories of inspection-services
        const inspectionSubcategories = categories.filter(category => 
          category.parent === inspectionCategory.id
        );
        
        // Create array of category IDs: inspection-services + all its subcategories
        const categoryIds = [inspectionCategory.id, ...inspectionSubcategories.map(cat => cat.id)];
        url += `&categories=${categoryIds.join(',')}`;
      }
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get total posts count from response headers
    const totalPosts = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');
    
    return totalPosts ? parseInt(totalPosts) : 0;
  } catch (error) {
    console.error('Error fetching inspection total posts:', error);
    return 0;
  }
}

/**
 * Fetch total number of posts for pagination (with optional category filter)
 * @param {number|string} categoryId - Category ID to filter by (optional)
 * @returns {Promise<number>} Total number of posts
 */
export async function fetchTotalPosts(categoryId = null) {
  try {
    let url = `${WORDPRESS_API_URL}/posts?per_page=1`;
    
    // Add category filter if provided
    if (categoryId) {
      url += `&categories=${categoryId}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get total posts from headers
    const totalPosts = response.headers.get('X-WP-Total');
    return parseInt(totalPosts) || 0;
  } catch (error) {
    console.error('Error fetching total posts:', error);
    return 0;
  }
}

/**
 * Fetch a single post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Post object or null if not found
 */
export async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts.length > 0 ? transformPost(posts[0]) : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Transform WordPress post data to match your app's format
 * @param {Object} wpPost - WordPress post object
 * @returns {Object} Transformed post object
 */
export function transformPost(wpPost) {
  // Extract featured image URL - handle WordPress.com format
  let featuredImage = WORDPRESS_CONFIG.DEFAULTS.FEATURED_IMAGE_FALLBACK;
  
  // WordPress.com stores featured image URL in jetpack_featured_media_url
  if (wpPost.jetpack_featured_media_url) {
    featuredImage = wpPost.jetpack_featured_media_url;
  }
  // Fallback to embedded media (for self-hosted WordPress compatibility)
  else if (wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    featuredImage = wpPost._embedded['wp:featuredmedia'][0].source_url;
  }
  // Try to extract from content if no featured image
  else if (wpPost.content?.rendered) {
    const imgMatch = wpPost.content.rendered.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) {
      featuredImage = imgMatch[1];
    }
  }
  
  // Extract excerpt (remove HTML tags)
  const excerpt = wpPost.excerpt?.rendered 
    ? wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').trim()
    : wpPost.excerpt || 'No excerpt available';
  
  // Extract content (remove HTML tags for preview)
  const content = wpPost.content?.rendered || '';
  
  // Get categories - handle WordPress.com format
  let category = 'Uncategorized';
  
  // WordPress.com provides category info in _embedded.wp:term when using _embed
  if (wpPost._embedded?.['wp:term']?.[0]?.length > 0) {
    // Find the first category (not tag)
    const categories = wpPost._embedded['wp:term'][0].filter(term => term.taxonomy === 'category');
    if (categories.length > 0) {
      category = categories[0].name;
    }
  } 
  // Fallback if no embedded terms
  else if (wpPost.categories && wpPost.categories.length > 0) {
    category = 'Uncategorized';
  }
  
  const transformedPost = {
    id: wpPost.id,
    title: wpPost.title?.rendered || wpPost.title || 'Untitled',
    excerpt: excerpt,
    content: content,
    slug: wpPost.slug,
    date: new Date(wpPost.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    category: category,
    image: featuredImage,
    author: wpPost._embedded?.author?.[0]?.name || 'Unknown Author',
    modified: wpPost.modified,
    link: wpPost.link
  };
  
  return transformedPost;
}