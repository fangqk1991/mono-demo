const { WebpackBuilder } = require('@fangcha/webpack')

const config = require('fc-config').GlobalAppConfig

module.exports = new WebpackBuilder()
  .useReact()
  .setDevMode(false)
  .setPublicPath('/')
  // .setPublicPath(config.TmplDemoDev.cdnURLBase)
  .setEntry('./src/index.tsx')
  // .setExtras({
  //   optimization: {
  //     minimize: false,
  //   },
  // })
  .build()
