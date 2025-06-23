const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Keep these:
  output: "export", // Only if doing static export
  trailingSlash: true, // Helps with routing
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
  // Optional for images
  images: {
    unoptimized: true // Required for static exports
  }
};

module.exports = withMDX(nextConfig);