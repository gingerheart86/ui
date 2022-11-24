/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  swcMinify: true,
  images:  {
    domains: [
      'images.unsplash.com',
      'pbs.twimg.com',
      's3.amazonaws.com',
      'img.youtube.com'
    ],
  }
}

module.exports = nextConfig
