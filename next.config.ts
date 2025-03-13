import type { NextConfig } from "next";

const assetPrefix = "";
const basePath = "";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",

  /**
   * Set base path and asset prefix for GitHub Pages
   */
  basePath: basePath,
  assetPrefix: assetPrefix,

  /**
   * Disable server-based image optimization since it's incompatible with static exports
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
