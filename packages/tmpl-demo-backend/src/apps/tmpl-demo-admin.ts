import { TmplDemoConfig } from '../TmplDemoConfig'
import { GlobalAppConfig } from 'fc-config'
import { WebApp } from '@fangcha/backend-kit/lib/router'
import { SsoSdkPlugin } from '@fangcha/web-auth-sdk'
import { _FangchaState } from '@fangcha/backend-kit'

const app = new WebApp({
  env: GlobalAppConfig.Env,
  tags: GlobalAppConfig.Tags,
  appName: 'tmpl-demo-admin',
  wecomBotKey: TmplDemoConfig.wecomBotKey,
  routerOptions: {
    baseURL: TmplDemoConfig.adminBaseURL,
    backendPort: TmplDemoConfig.adminPort,
    jwtProtocol: {
      jwtKey: 'tmpl-demo_token_jwt',
      jwtSecret: TmplDemoConfig.adminJwtSecret,
    },
  },
  plugins: [
    SsoSdkPlugin({
      ssoAuth: TmplDemoConfig.adminSSO,
      jwtOptions: {
        jwtKey: 'tmpl-demo_token_jwt',
        jwtSecret: TmplDemoConfig.adminJwtSecret,
      },
    }),
  ],

  appDidLoad: async () => {
    _FangchaState.frontendConfig = {
      ...TmplDemoConfig.adminFrontendConfig,
    }
  },
  checkHealth: async () => {},
})
app.launch()
