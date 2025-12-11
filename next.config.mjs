/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
};

export default nextConfig;
