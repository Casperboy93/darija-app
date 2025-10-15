import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  // Explicitly set the tracing root to this project to silence
  // the workspace root warning when multiple lockfiles exist.
  outputFileTracingRoot: path.join(__dirname),
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Only enable memory optimizations for production builds
    if (!dev && !isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
