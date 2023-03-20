/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
    domains: ["avatars.githubusercontent.com"]
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://hako.work/contact',
        permanent: true,
      },
      {
        source: '/work',
        destination: 'https://hako.work/work',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
