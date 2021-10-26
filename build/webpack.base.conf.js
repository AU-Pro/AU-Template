import path from 'path'

import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import WebpackBar from 'webpackbar' // 打包进度

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'), // 入口文件
  /**
   * 模块解析配置
   * alias 模块引入别名配置
   * extensions 按配置顺序解析文件
   */
  resolve: {
    alias: {
      src: path.join(__dirname, '../src/')
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  // 缓存 模块、chunk
  cache: {
    type: 'filesystem'
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      /**
       * 语法编译，向下兼容
       * Ts / Js -- @babel/preset-typescript
       */
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      }
    ]
  },
  plugins: [
    new CleanTerminalPlugin(),
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    }),
    new WebpackBar()
  ]
}
