const path = require('path')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const WebpackBar = require('webpackbar') // 打包进度条

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
      /** ts */
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      /** 语法编译，向下兼容 */
      {
        test: /\.(js[x]|ts[x])?$/,
        /** babel 不处理的文件 */
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              /** 缓存babel 编译文件 */
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new CaseSensitivePathsPlugin(), new WebpackBar()]
}
