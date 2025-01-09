/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  experimental: {
    serverActions: {
      allowedOrigins: ['scastiel.dev', 'localhost:3001', 'localhost:3002'],
    },
  },
}

const { withPlausibleProxy } = require('next-plausible')
module.exports = withPlausibleProxy()(nextConfig)
