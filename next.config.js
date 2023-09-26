/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: true, // Enable the experimental images feature
  },

  output: {
    // Configure static HTML export
    export: true,
  },
};

module.exports = nextConfig;
