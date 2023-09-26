/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: true, // Enable the experimental images feature
  },
  output: 'standalone',

};

module.exports = nextConfig;
