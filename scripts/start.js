process.env.NODE_ENV = 'development';

const configFactory = require('../config/webpack.config')
const createDevServerConfig = require('../config/webpackDevServer.config');
const webpackDevServer = require('webpack-dev-server')
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

const config = configFactory('development')
const webpack = require('webpack')
const chalk = require('chalk')

const compiler = createCompiler(config, webpack)
const serverConfig = createDevServerConfig()
const devServer = new webpackDevServer(compiler, serverConfig)

devServer.listen(DEFAULT_PORT, HOST, (err, result) => {
  if (err) {
    return console.error(err)
  }
  console.log(chalk.cyan('Starting the development server...\n'))
})


function createCompiler(config, webpack) {
  const compiler = webpack(config)
  return compiler
}