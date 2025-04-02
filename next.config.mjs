/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/proyecto-x-encefalomielitis',
  assetPrefix: '/proyecto-x-encefalomielitis/',
  trailingSlash: true,
};

export default nextConfig;

