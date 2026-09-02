import type { NextConfig } from 'next';

const [owner = '', repository = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubBuild = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repository.endsWith('.github.io');
const basePath = isGitHubBuild && repository && !isUserSite ? `/${repository}` : '';
const siteUrl =
  process.env.SITE_URL ??
  (isGitHubBuild && owner
    ? `https://${owner.toLowerCase()}.github.io${basePath}`
    : 'http://localhost:3000');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
