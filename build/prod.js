const webpack = require('webpack')

const webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig, (err, stats) => {
  if (err) {
    throw err
  }

  process.stdout.write(
    stats.toString({
      assets: false,
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      entrypoints: false,
      modules: false,
      warnings: false
    }) + '\n\n'
  )

  if (stats.hasErrors()) {
    console.error('Build failed with errors\n')
    process.exit(1)
  }
})
