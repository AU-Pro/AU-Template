const path = require('path')

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.conf')
const { cssModule } = require('./webpack.part')

const proxyTarget = 'http://localhost:10061'

module.exports = merge(webpackBaseConfig, {
  output: {
    path: '/',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  // 修改 process.env.NODE_ENV 为对应值
  mode: 'development',
  // 构建目标 浏览器环境可用
  target: 'web',
  // 最佳实践 照抄
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    disableHostCheck: true,
    useLocalIp: true,
    overlay: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // webpack 打包结果信息
    stats: {
      assets: false,
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false
    },
    // 所有的 404 请求都会响应index.html的内容
    historyApiFallback: true,
    // 代理服务
    proxy: {
      '/api': {
        target: proxyTarget
      }
    },
    // 服务器启动自动打开浏览器
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico|svga?|woff(2)?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 2 * 1024,
          name: '[path][name].[ext]'
        }
      },
      // 处理css
      ...cssModule()
    ]
  },
  plugins: [
    // webpack 打包报错特定标识
    new FriendlyErrorsWebpackPlugin(),
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    /**
     * 创建HTML文件
     * template 创建HTML文件的模板
     * templateParameters:替换模板中使用的参数
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.ejs'),
      templateParameters: {
        env: 'local'
      }
    })
  ]
})
