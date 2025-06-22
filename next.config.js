const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages (static export)
  output: "export", // 👈 Add this line
  trailingSlash: true, // Fixes GitHub Pages routing issues
  
  // MDX configuration
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
  // Optional: Add assetPrefix if deploying to a subpath (e.g., /repo-name/)
  assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "", // 👈 Replace with your repo name
};

module.exports = withMDX(nextConfig);
