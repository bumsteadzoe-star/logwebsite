/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}
module.exports = nextConfig
