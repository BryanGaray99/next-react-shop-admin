/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['upload.wikimedia.org', 'picsum.photos', '**', 'ui-avatars.com' ]
  }
}

module.exports = nextConfig