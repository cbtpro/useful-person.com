const { override, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const path = require('path')
const vConsolePlugin = require('vconsole-webpack-plugin')
const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyvars: {
      // '@primary-color': '#1DA57A',
    }
  }),
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  addWebpackPlugin(
    new vConsolePlugin({
        filter: [],  // 需要过滤的入口文件
        enable: !isEnvProduction // 发布代码前记得改回 false
    }),
  ),
)