const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export (GitHub Pages)
  output: "export",
  
  // Essential for GitHub Pages routing
  basePath: "/tidy-next", 
  trailingSlash: true,    
  
  // MDX configuration
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
  // Fixes asset loading on GitHub Pages
  assetPrefix: process.env.NODE_ENV === "production" ? "/tidy-next/" : "", // 👈 Match repo name
  
  // Optional: Image optimization config for static export
  images: {
    unoptimized: true // Required for static exports
  }
};

module.exports = withMDX(nextConfig);