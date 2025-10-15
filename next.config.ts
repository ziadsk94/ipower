import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages optimization
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/lib/imageLoader.ts',
  },
  
  // Asset prefix for Cloudflare Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers are configured in public/_headers for static export
};

export default nextConfig;
