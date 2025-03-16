import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  distDir: "out", // Output directory for static files
  images: { unoptimized: true }, // Disable image optimization for static export
};

export default nextConfig;
