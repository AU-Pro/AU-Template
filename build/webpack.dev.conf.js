import path from 'path'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { merge } from 'webpack-merge'

// TypeScript Hot refresh

import webpackBaseConfig from './webpack.base.conf'
import { cssModule } from './webpack.part'

const proxyTarget = 'http://localhost:10061'

module.exports = merge(webpackBaseConfig, {
  mode: 'development', // 修改 process.env.NODE_ENV 为对应值
  output: {
    path: '/',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  target: 'web', // 构建目标 浏览器环境可用

  /** 最佳实践 照抄 */
  devtool: 'eval-cheap-module-source-map',
  stats: {
    // webpack 打包结果信息
    assets: false,
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    entrypoints: false
  },
  devServer: {
    host: '0.0.0.0', // 'local-ip' | 'local-ipv4' | 'local-ipv6'
    // useLocalIp: true,                                        //  webpack5.0+ 不再包含此属性
    port: 5000,
    allowedHosts: 'all', // 'auto' | 'all' [string]
    client: {
      overlay: true
    },
    // hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true, // 所有的 404 请求都会响应index.html的内容
    proxy: {
      // 代理服务
      '/api': {
        target: proxyTarget
      }
    },
    open: true // 服务器启动自动打开浏览器
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
      /** cssModule */
      ...cssModule()
    ]
  },
  plugins: [
    // webpack 打包报错特定标识
    new FriendlyErrorsWebpackPlugin(),
    // // 热更新
    // new webpack.HotModuleReplacementPlugin(),
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
    }),
    new ReactRefreshWebpackPlugin()
  ]
})
