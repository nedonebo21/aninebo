/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/yani/:path*',
        destination: 'https://api.yani.tv/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.yani.tv',
      },
    ],
  },
}

module.exports = nextConfig
