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
  // Configure server for production deployment
  ...(process.env.NODE_ENV === 'production' && {
    server: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT || '10000', 10),
    },
  }),
};

export default nextConfig;
