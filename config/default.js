const TmplDemoConfig = require('./tmpl-demo.default')

module.exports = {
  Env: 'It will be rewritten by process.env.NODE_CONFIG_ENV or process.env.NODE_ENV',
  Tags: [],
  TmplDemo: TmplDemoConfig.TmplDemo,
}
