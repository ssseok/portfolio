/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["user-images.githubusercontent.com", "notion.so"],
  },
};

module.exports = nextConfig;
