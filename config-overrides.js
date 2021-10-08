const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
} = require('customize-cra')
const path = require('path')
const vConsolePlugin = require('vconsole-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl)
}

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const customConfig = () => (config, env) => {
  return config
}

module.exports = override(
  customConfig(),
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
    '@': pathResolve('./src')
  }),
  addWebpackPlugin(
    new vConsolePlugin({
        filter: [],  // 需要过滤的入口文件
        enable: !isProd,
    }),
  ),
  addWebpackPlugin(
    new BundleAnalyzerPlugin({
      analyzerPort: 9999,
      analyzerMode: isProd ? 'disabled' : 'server', // 只在非生产环境开启
      openAnalyzer: isDev, // 只在测试环境自动在浏览器中大概分析报告
    }),
  ),
)