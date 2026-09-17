/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/StudioBrosFitness',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
