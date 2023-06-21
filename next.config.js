/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/Filipe-Bacof/Meus-Certificados/blob/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
