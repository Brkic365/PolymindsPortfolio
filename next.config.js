/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEV_URL: process.env.DEV_URL,
  },
};

module.exports = nextConfig;
