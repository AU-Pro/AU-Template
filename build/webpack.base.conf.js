const path = require('path')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackBar = require('webpackbar') // 打包进度

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
    extensions: ['.js', '.jsx', '.tsx', '.ts', 'cjs']
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
