const path = require('path')
const appDirectory = process.cwd()

const resolveApp =  (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  appHtml: resolveApp('public/index.html'),
  appIndex: resolveApp('src/index.js'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src')
}
