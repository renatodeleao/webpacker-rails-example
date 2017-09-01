// config/webpack/development.js
const environment = require('./environment')
const config = environment.toWebpackConfig()
config.devServer.watchContentBase = false
module.exports = config