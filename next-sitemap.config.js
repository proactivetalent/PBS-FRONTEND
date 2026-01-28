const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pbs.nyc",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  exclude: [
    "/api/*",
  ],

  additionalPaths: async () => {
    const getSlugsFromDir = (relativePath) => {
      const fullPath = path.join(process.cwd(), relativePath);
      if (!fs.existsSync(fullPath)) return [];

      return fs
        .readdirSync(fullPath, { withFileTypes: true })
        .filter(
          (dirent) =>
            dirent.isDirectory() &&
            !dirent.name.startsWith("_") &&
            !dirent.name.startsWith("[")
        )
        .map((dirent) => dirent.name);
    };

    // Dynamic route slugs
    const blogSlugs = getSlugsFromDir("src/app/blog");
    const localLawGuideSlugs = getSlugsFromDir("src/app/local-law-guide");
    const alertSystemGuideSlugs = getSlugsFromDir("src/app/alert-system-guide");

    return [
      // --------------------
      // CORE PAGES
      // --------------------
      { loc: "/" },
      { loc: "/services" },
      { loc: "/owner-representative" },
      { loc: "/property-management" },
      { loc: "/expediting-services" },
      { loc: "/inspection-services" },

      // --------------------
      // INSPECTION SERVICES
      // --------------------
      { loc: "/inspection-services/boiler-inspection" },
      { loc: "/inspection-services/sh-inspection" },
      { loc: "/inspection-services/elevator-inspection" },

      // --------------------
      // LAW PAGES
      // --------------------
      { loc: "/law/local-law" },
      { loc: "/law/local-law-parking" },
      { loc: "/law/local-law-parapet" },
      { loc: "/law/local-law-152" },

      // --------------------
      // GUIDES (STATIC)
      // --------------------
      { loc: "/local-law-guide" },
      { loc: "/alert-system-guide" },

      // --------------------
      // BLOG
      // --------------------
      { loc: "/blog" },
      ...blogSlugs.map((slug) => ({ loc: `/blog/${slug}` })),

      // --------------------
      // GUIDES (DYNAMIC)
      // --------------------
      ...localLawGuideSlugs.map((slug) => ({
        loc: `/local-law-guide/${slug}`,
      })),
      ...alertSystemGuideSlugs.map((slug) => ({
        loc: `/alert-system-guide/${slug}`,
      })),

      // --------------------
      // ABOUT / INFO
      // --------------------
      { loc: "/about-us" },
      { loc: "/about-us/our-team" },
      { loc: "/about-us/our-values" },
      { loc: "/contacts" },

      // --------------------
      // LEGAL
      // --------------------
      { loc: "/faqs" },
      { loc: "/alert" },
      { loc: "/privacy-policy" },
      { loc: "/terms-of-service" },
      { loc: "/cookies-policy" },
    ];
  },
};
