/**
 * @file Blog Post Page Component (Server-Side Rendered)
 * @description Server-side rendered page for blog posts with SEO-friendly HTML
 */

import { fetchPostBySlug, fetchPostsByCategory, fetchPosts } from "@/lib/wordpress";
import { WORDPRESS_CONFIG } from "@/lib/config";
import { notFound } from "next/navigation";
import CustomImage from "@/app/CustomImage";
import { decodeHtmlEntities, processContentWithHeadings } from "./contentProcessor";
import TableOfContents from "./TableOfContents";
import NewsletterForm from "./NewsletterForm";
import RelatedPosts from "./RelatedPosts";
import BlogContent from "./BlogContent";

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Proactive Building Solutions",
    };
  }

  // Extract plain text from HTML for description
  const plainTextExcerpt = post.excerpt
    .replace(/<[^>]*>/g, '')
    .replace(/&[^;]+;/g, ' ')
    .trim()
    .substring(0, 160);

  return {
    title: `${decodeHtmlEntities(post.title)} | Blog | PBS`,
    description: plainTextExcerpt || `Read ${decodeHtmlEntities(post.title)} on our blog.`,
    openGraph: {
      title: decodeHtmlEntities(post.title),
      description: plainTextExcerpt || `Read ${decodeHtmlEntities(post.title)} on our blog.`,
      type: 'article',
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: decodeHtmlEntities(post.title),
      description: plainTextExcerpt || `Read ${decodeHtmlEntities(post.title)} on our blog.`,
      images: post.image ? [post.image] : [],
    },
  };
}

/**
 * Blog Post Page Component (Server Component)
 * Fetches data on the server and renders SEO-friendly HTML
 */
export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Fetch post data on the server
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get categoryId from WordPress API directly for related posts
  let categoryId = null;
  try {
    const response = await fetch(
      `${WORDPRESS_CONFIG.API_URL}/posts?slug=${slug}&_embed`
    );
    if (response.ok) {
      const posts = await response.json();
      if (posts.length > 0 && posts[0].categories && posts[0].categories.length > 0) {
        categoryId = posts[0].categories[0];
      }
    }
  } catch (error) {
    console.error('Error fetching category ID:', error);
  }

  // Process content on the server to add IDs to headings
  const processedContent = processContentWithHeadings(post.content);

  // Fetch related posts on the server
  let relatedPosts = [];
  try {
    if (categoryId) {
      const posts = await fetchPostsByCategory(categoryId, 1, 10);
      relatedPosts = posts
        .filter(p => p.id !== post.id)
        .slice(0, 3)
        .map(p => ({
          ...p,
          title: decodeHtmlEntities(p.title),
          excerpt: decodeHtmlEntities(p.excerpt)
        }));
    } else if (post.category) {
      const allPosts = await fetchPosts(1, 50);
      relatedPosts = allPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
        .map(p => ({
          ...p,
          title: decodeHtmlEntities(p.title),
          excerpt: decodeHtmlEntities(p.excerpt)
        }));
    }
  } catch (error) {
    console.error('Error fetching related posts:', error);
    // Continue without related posts if there's an error
  }

  // Create post object with processed content and decoded title
  const postWithProcessedContent = {
    ...post,
    content: processedContent,
    title: decodeHtmlEntities(post.title) // Decode title on server side
  };

  return (
    <section className="bg-[#37403D] text-[#DCE2E2] py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar - Table of Contents */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <TableOfContents />
          </div>

          {/* Center Column - Main Blog Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <BlogContent post={postWithProcessedContent} />
          </div>

          {/* Right Sidebar - Newsletter Subscription */}
          <div className="lg:col-span-3 order-3">
            <NewsletterForm />
          </div>

        </div>
      </div>
      
      {/* Related Blogs Section */}
      <RelatedPosts relatedPosts={relatedPosts} relatedLoading={false} />
    </section>
  );
}
