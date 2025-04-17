/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true, // Optional, only if you use it
  },
};

module.exports = nextConfig;
