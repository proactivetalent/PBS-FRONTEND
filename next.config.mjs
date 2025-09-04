/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Fix for Google Fonts in Next.js 15
  experimental: {
    optimizePackageImports: ['@next/font'],
  },
};

export default nextConfig;
