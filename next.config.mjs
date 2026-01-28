/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Enable gzip/brotli support
  compress: true,

  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Fix for Google Fonts in Next.js 15
  experimental: {
    optimizePackageImports: ['@next/font'],
  },

  // ✅ FIX BROKEN /press LINK
  async redirects() {
    return [
      {
        source: '/press',
        destination: '/',
        permanent: true, // 301 redirect (SEO safe)
      },
    ];
  },
};

export default nextConfig;
