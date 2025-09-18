import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
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
