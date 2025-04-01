/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/proyecto-x-encefalomielitis', // Reemplaza con el nombre de tu repositorio
  assetPrefix: '/proyecto-x-encefalomielitis/', // Reemplaza con el nombre de tu repositorio
};

export default nextConfig;