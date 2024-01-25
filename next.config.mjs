/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-dfw5-1.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-dfw5-2.cdninstagram.com',
      },
    ],
  },
}

export default nextConfig
