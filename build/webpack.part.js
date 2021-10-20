const cssModule = (handler = 'style-loader') => {
  const modules = [
    /** 处理第三方样式 */
    {
      test: /\.(css|less)$/,
      exclude: /src/,
      use: [
        handler,
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#2CB6B0'
              },
              javascriptEnabled: true
            }
          }
        }
      ]
    },
    /** 只处理模块化的样式文件 */
    {
      test: /\.(module\.)?less$/,
      exclude: /node_modules/,
      use: [
        /** 创建style标签，添加到header  */
        handler,
        {
          loader: 'css-loader' /** 解析合并所有css代码 */,
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[local]--[hash:base64:8]'
            }
          }
        },
        'postcss-loader' /** 添加浏览器厂商前缀 */,
        /** less 转化 css */
        'less-loader'
      ]
    }
  ]

  return modules
}

module.exports = {
  cssModule
}
