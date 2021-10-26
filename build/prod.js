/* eslint-disable @typescript-eslint/no-unsafe-argument */
const webpack = require('webpack')

const webpackConfig = require('./webpack.prod.conf')

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

webpack(webpackConfig, (err, stats) => {
  if (err) {
    throw err
  }

  process.stdout.write(
    `${stats.toString({
      assets: false,
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      entrypoints: false,
      modules: false,
      warnings: false
    })  }\n\n`
  )

  if (stats.hasErrors()) {
    process.exit(1)
  }
})
