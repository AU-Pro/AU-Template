const path = require('path')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const pkg = require('../package.json')

const webpackBaseConfig = require('./webpack.base.conf')
const { cssModule } = require('./webpack.part')

const outputPath = path.join(__dirname, '../dist')

module.exports = merge(webpackBaseConfig, {
  output: {
    path: outputPath,
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js'
    // NOTE: 咱不需要
    // publicPath: `cdnUrl/${pkg.name}/dist/`,
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      ...cssModule(MiniCssExtractPlugin.loader),
      {
        test: /\.(png|jpe?g|gif|ico|svga?)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 2,
              name: 'images/[name].[contenthash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 2,
              name: 'fonts/[name].[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      // 压缩js
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        },
        parallel: true
      }),
      // 压缩 css
      new CssMinimizerPlugin({
        parallel: true
      })
    ],
    chunkIds: 'deterministic',
    moduleIds: 'deterministic',
    mangleExports: 'deterministic'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      scriptLoading: 'blocking',
      template: path.resolve(__dirname, '../src/index.ejs'),
      filename: 'html/index.html'
    })
  ]
})
