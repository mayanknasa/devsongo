/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/devsongo',
  assetPrefix: '/devsongo/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
