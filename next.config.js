const { i18n } = require('./next-i18next.config')

module.exports = {
  // reactStrictMode: true,
  i18n,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }

    return config
  },
}
