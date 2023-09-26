/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: true, // Enable the experimental images feature
  },

  // Remove the 'output' configuration and use 'target' instead
  // Configure 'target' for static HTML export
  target: 'experimental-serverless-trace',
};

module.exports = nextConfig;
