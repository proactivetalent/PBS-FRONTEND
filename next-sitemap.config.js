const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pbs-nyc.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    // Read blog post slugs dynamically
    const blogDir = path.join(process.cwd(), "src/app/blog");
    const slugs = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".js") || file.endsWith(".md"))
      .map((file) => file.replace(/\.(js|md)$/, ""));

    return [
      { loc: "/" },
      { loc: "/about-us" },
      { loc: "/services" },
      { loc: "/contacts" },
      { loc: "/about-us/our-history" },
      { loc: "/about-us/our-team" },
      { loc: "/about-us/our-values" },
      { loc: "/blog" },
      ...slugs.map((slug) => ({ loc: `/blog/${slug}` })), // Add blog posts dynamically
      { loc: "/OwnerRepresentative" },
      { loc: "/inspection-services/inspection-services" },
      { loc: "/inspection-services/boiler-inspection" },
      { loc: "/inspection-services/sh-inspection" },
      { loc: "/inspection-services/elevator-inspection" },
      { loc: "/law/local-law" },
      { loc: "/law/local-law-152" },
      { loc: "/law/local-law-parapet" },
      { loc: "/law/local-law-parking" },
    ];
  },
};
