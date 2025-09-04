  // WordPress API Configuration
  export const WORDPRESS_CONFIG = {
    // WordPress Business plan API
    API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://public-api.wordpress.com/wp/v2/sites/cms.pbs.nyc',
  
  // API endpoints
  ENDPOINTS: {
    POSTS: '/posts',
    POST_BY_SLUG: '/posts?slug=',
    CATEGORIES: '/categories',
    TAGS: '/tags',
    USERS: '/users',
  },
  
  // Default settings
  DEFAULTS: {
    POSTS_PER_PAGE: 6,
    FEATURED_IMAGE_FALLBACK: '/PBS%20Assets/Brand%20Language/city-building.jpg',
  }
}; 