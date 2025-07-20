/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelデプロイ用の最適化設定
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'upload.wikimedia.org',
      'commons.wikimedia.org',
      'archive.org',
      'www.gutenberg.org'
    ],
  },
};

module.exports = nextConfig; 