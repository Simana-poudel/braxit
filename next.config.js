/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Image Optimization
  },
  output: 'export',
};

module.exports = nextConfig;
