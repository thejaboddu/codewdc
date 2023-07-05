const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  },
  devIndicators: {
    buildActivity: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
  optimizeFonts: true,
  images: {
    domains: ['qa-assets.cerberus.supraoracles.com', 'prod-assets.cerberus.supraoracles.com'],
  }
}

module.exports = () => {
  const plugins = [withBundleAnalyzer]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}