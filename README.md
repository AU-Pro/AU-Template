# AU-TEMPLATE

webpack5 + react17 + Typescript

## husky

husky 推荐使用 `husky@7` 版本

## 路径定义文件

导出路径的文件 `paths.js` ：

```js
module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appIndex: resolveModule(resolveApp, 'src/index'), // Package entry path
  appHtml: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules'), // node_modules path
  appSrc: resolveApp('src'),
  appSrcComponents: resolveApp('src/components'),
  appSrcUtils: resolveApp('src/utils'),
  appProxySetup: resolveModule(resolveApp, 'scripts/setProxy'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  moduleFileExtensions
}
```

## 环境变量文件

`env.js` ：

```js
const isDevelopment = process.env.NODE_ENV !== 'production'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  isDevelopment,
  isProduction
}
```

## 一些常用的变量配置文件

`conf.js`

```js
module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  shouldOpenAnalyzer,
  ANALYZER_HOST,
  ANALYZER_PORT,
  imageInlineSizeLimit
}
```

## 其它实用插件

一. 如果你要开启 css module，想要通过 `className={styles['xxxxx]}` 能得到提示（比如 `xxxxx`），那你可能需要这个插件：[typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules)。

使用该插件时，`.vscode/settings.json` 中必须有以下配置：

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

然后 `tsconfig.json` 中添加以下配置：

```json
"jsx": "react",
"plugins": [{ "name": "typescript-plugin-css-modules" }]
```

### 感谢 vortesnail

该模版原版本 为 vortesnail 的 [react-ts-quick-starter](https://github.com/vortesnail/react-ts-quick-starter)

同时 推荐他的掘金文章[我是这样搭建 Typescript+React 项目环境的！（2.7w 字详解)](https://github.com/vortesnail/blog/issues/14)

阅读他的文章和代码后，和自己的习惯很像，稍作修改为日后的学习开发模版。感谢。
