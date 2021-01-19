const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env) {
  return {
    mode: env,
    output: {
      path: paths.appBuild
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: paths.appSrc,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              [
                require.resolve('babel-preset-react-app')
              ]
            ]
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml
      })
    ]
  }
}