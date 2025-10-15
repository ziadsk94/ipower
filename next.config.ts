import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/lib/imageLoader.ts',
  },
  
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
};

export default nextConfig;
