import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
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
