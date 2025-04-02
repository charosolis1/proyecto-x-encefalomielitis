/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Descomenta y reemplaza con el nombre de tu repositorio cuando lo subas a GitHub
  basePath: '/proyecto-x-encefalomielitis',
  assetPrefix: '/proyecto-x-encefalomielitis/',
  trailingSlash: true,
};

export default nextConfig;

