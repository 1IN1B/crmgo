require('dotenv').config()
const webpack = require('webpack')
import middle from "./middleware";

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  },
}