# WordPress Headless CMS Integration

This document explains how to set up and use the WordPress headless CMS integration for the PBS blog.

## Setup Instructions

### 1. WordPress Configuration

1. **Install and configure WordPress** (if not already done)
   - Use LocalWP or any local WordPress setup
   - Ensure the REST API is enabled (enabled by default in modern WordPress)

2. **Create some test posts**
   - Add featured images to posts
   - Set categories for posts
   - Write content with proper formatting

3. **Test the API endpoint**
   - Visit: `http://pbs-cms.local/wp-json/wp/v2/posts?_embed`
   - You should see JSON data with your posts

### 2. Environment Configuration

1. **Create a `.env.local` file** in your project root:
   ```bash
   NEXT_PUBLIC_WORDPRESS_API_URL=http://pbs-cms.local/wp-json/wp/v2
   ```

2. **For production**, update the URL in `src/lib/config.js`:
   ```javascript
   API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-production-domain.com/wp-json/wp/v2',
   ```

### 3. Features Implemented

#### Blog Listing Page (`/blog`)
- ✅ Fetches posts from WordPress API
- ✅ Displays featured post (first post)
- ✅ Shows paginated grid of remaining posts
- ✅ Loading and error states
- ✅ Responsive design with animations

#### Individual Blog Post Page (`/blog/[slug]`)
- ✅ Fetches individual post by slug
- ✅ Displays WordPress content with proper styling
- ✅ Shows post metadata (author, date, category)
- ✅ Responsive design with animations
- ✅ 404 handling for non-existent posts

#### WordPress Content Styling
- ✅ Custom CSS for WordPress content
- ✅ Proper typography and spacing
- ✅ Styled headings, lists, links, images
- ✅ Code blocks and tables support

### 4. API Functions

The integration includes these main functions in `src/lib/wordpress.js`:

- `fetchPosts(page, perPage)` - Get paginated posts
- `fetchPostBySlug(slug)` - Get single post by slug
- `fetchTotalPosts()` - Get total post count for pagination
- `transformPost(wpPost)` - Transform WordPress data to app format

### 5. Data Transformation

WordPress posts are transformed to match your app's format:

```javascript
{
  id: number,
  title: string,
  excerpt: string,
  content: string (HTML),
  slug: string,
  date: string (formatted),
  category: string,
  image: string (URL),
  author: string,
  modified: string,
  link: string
}
```

### 6. Testing

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Visit the blog pages**:
   - `/blog` - Should show posts from WordPress
   - `/blog/[post-slug]` - Should show individual post

3. **Check for errors** in the browser console

### 7. Troubleshooting

#### Common Issues:

1. **CORS Errors**
   - Ensure WordPress allows requests from your Next.js domain
   - Add CORS headers in WordPress if needed

2. **API Not Found**
   - Verify the WordPress URL is correct
   - Check if WordPress REST API is enabled

3. **No Posts Showing**
   - Verify posts exist in WordPress
   - Check if posts are published (not drafts)
   - Test the API endpoint directly in browser

4. **Images Not Loading**
   - Ensure featured images are set in WordPress
   - Check image URLs are accessible

### 8. Production Deployment

1. **Update WordPress URL** in `src/lib/config.js`
2. **Set environment variable** in your hosting platform
3. **Test the integration** with production WordPress site
4. **Monitor for errors** in production logs

### 9. Customization

#### Adding More Features:
- Categories/tags filtering
- Search functionality
- Related posts
- Comments integration
- SEO optimization

#### Styling Changes:
- Modify `src/app/blog/wordpress-content.css`
- Update component styles in blog pages

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify WordPress API endpoint is working
3. Test with Postman or similar tool
4. Check network tab for failed requests 