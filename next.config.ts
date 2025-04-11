import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slash for better compatibility with static hosting
  trailingSlash: true,
};

export default nextConfig;
