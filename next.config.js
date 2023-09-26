/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: true, // Enable the experimental images feature
  },
  images: {
    unoptimized: true, // Disable Image Optimization
  },
  output: 'export',
};

module.exports = nextConfig;
