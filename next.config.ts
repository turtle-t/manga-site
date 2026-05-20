import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads.mangadex.org',
        pathname: '/covers/**',
      },
      {
        protocol: 'https',
        hostname: 'cmdxd98sb0x3yprd.mangadex.network',
        pathname: '/data/**',
      },
    ],
  },
}

export default nextConfig