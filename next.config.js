/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelデプロイ用の最適化設定
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 