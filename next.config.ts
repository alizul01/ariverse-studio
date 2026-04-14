import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';
const isServerDeployment = !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

const nextConfig: NextConfig = {
  // Static export only for production builds without server deployment
  // Dev mode always uses server mode so Keystatic admin UI works
  output: isDev || isServerDeployment ? undefined : 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
