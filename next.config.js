/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/indiscon-2024',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

module.exports = nextConfig
