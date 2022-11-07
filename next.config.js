/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:  {
    domains: [
      'images.unsplash.com',
      'pbs.twimg.com',
      's3.amazonaws.com'
    ],
  }
}

module.exports = nextConfig
