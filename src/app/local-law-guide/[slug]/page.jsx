/**
 * @file Local Law Guide Post Page Component (Server-Side Rendered)
 * @description Server-side rendered page for local law guide posts with SEO-friendly HTML
 */

import { fetchPostBySlug, fetchPostsByCategory, fetchPosts } from "@/lib/wordpress";
import { WORDPRESS_CONFIG } from "@/lib/config";
import { notFound } from "next/navigation";
import { ArrowLeft, Bookmark } from "lucide-react";
import Link from "next/link";
import { decodeHtmlEntities, processContentWithSpecialHeadings } from "./contentProcessor";
import TableOfContents from "./TableOfContents";
import NewsletterForm from "./NewsletterForm";
import RelatedPosts from "./RelatedPosts";
import ContentWrapper from "./ContentWrapper";

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
    title: `${decodeHtmlEntities(post.title)} | Local Law Guide | PBS`,
    description: plainTextExcerpt || `Learn about ${decodeHtmlEntities(post.title)} in our comprehensive local law guide.`,
    openGraph: {
      title: decodeHtmlEntities(post.title),
      description: plainTextExcerpt || `Learn about ${decodeHtmlEntities(post.title)} in our comprehensive local law guide.`,
      type: 'article',
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: decodeHtmlEntities(post.title),
      description: plainTextExcerpt || `Learn about ${decodeHtmlEntities(post.title)} in our comprehensive local law guide.`,
      images: post.image ? [post.image] : [],
    },
  };
}

/**
 * Local Law Guide Post Page Component (Server Component)
 * Fetches data on the server and renders SEO-friendly HTML
 */
export default async function LocalLawGuidePostPage({ params }) {
  const { slug } = params;

  // Fetch post data on the server
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get categoryId from WordPress API directly for related posts
  // We need to fetch the raw post to get category IDs
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

  // Process content on the server
  const processedContent = processContentWithSpecialHeadings(post.content);

  // Fetch related posts on the server
  let relatedPosts = [];
  try {
    if (categoryId) {
      const posts = await fetchPostsByCategory(categoryId, 1, 10);
      relatedPosts = posts
        .filter(p => p.id !== post.id)
        .slice(0, 3);
    } else if (post.category) {
      const allPosts = await fetchPosts(1, 50);
      relatedPosts = allPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);
    }
  } catch (error) {
    console.error('Error fetching related posts:', error);
    // Continue without related posts if there's an error
  }

  return (
    <section className="bg-[#37403D] text-[#DCE2E2] py-2 px-6 md:px-12 lg:px-24">
      {/* Article Header - Full Width Hero Section Above Three Columns */}
      <div className="mb-16 text-center relative flex items-center justify-center rounded-xl overflow-hidden -mx-6 md:-mx-12 lg:-mx-24 mt-8 py-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/pics/local-law-hero.png')`
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 px-6 py-12">
          {/* Back to Local Law Guide Button */}
          <div className="pt-8 mb-6">
            <Link
              href="/local-law-guide"
              className="text-[#8AD5B7] hover:text-[#8AD5B7]/80 flex items-center gap-2 font-poppins transition-all justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Local Law Guide
            </Link>
          </div>

          {/* Compliance Defined Button */}
          <div className="flex justify-center font-conthrax text-2xl bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-lg w-fit mx-auto">
            Compliance Defined
          </div>
          
          {/* Main Heading - Full width with top padding */}
          <div className="pt-4 mb-8">
            <h1 className="text-4xl md:text-3xl lg:text-3xl max-w-7xl mx-auto font-bold text-[#DCE2E2] font-conthrax w-full leading-tight">
              {decodeHtmlEntities(post.title)}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-[#89A096] font-poppins">
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar - Table of Contents */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <TableOfContents />
          </div>

          {/* Center Column - Main Guide Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {/* Main Content */}
            <div className="w-full">
              <ContentWrapper>
                <div 
                  className="wordpress-content w-full"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />
              </ContentWrapper>
            </div>
          </div>

          {/* Right Sidebar - Newsletter Subscription */}
          <div className="lg:col-span-3 order-3">
            <NewsletterForm />
          </div>

        </div>
      </div>
      
      {/* Related Guides Section - Full Screen Width */}
      <RelatedPosts relatedPosts={relatedPosts} relatedLoading={false} />
    </section>
  );
}
