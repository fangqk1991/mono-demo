import { TmplDemoConfig } from '../TmplDemoConfig'
import { GlobalAppConfig } from 'fc-config'
import { AdminUserPlugin } from '@web/backend-kit'
import { TypicalSsoSdkPlugin } from '@fangcha/backend-kit/lib/sso'
import { WebApp } from '@fangcha/backend-kit/lib/router'

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
    TypicalSsoSdkPlugin(TmplDemoConfig.adminSSO),
    AdminUserPlugin({
      applyToSession: true,
    }),
  ],

  appDidLoad: async () => {},
  checkHealth: async () => {},
})
app.launch()
