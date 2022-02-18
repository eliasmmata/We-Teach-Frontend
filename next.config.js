const path = require('path')

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
}
