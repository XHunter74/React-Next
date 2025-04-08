import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/React-Next' : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath,
  assetPrefix: basePath
};

export default nextConfig;
