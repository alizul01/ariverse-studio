import type { NextConfig } from "next";

const isServerDeployment = !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

const nextConfig: NextConfig = {
  output: isServerDeployment ? undefined : 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
