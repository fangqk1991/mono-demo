module.exports = {
  TmplDemo: {
    configVersion: '0.0.0',
    onlyStatic: false,
    adminFrontendPort: 2399,
    adminBaseURL: 'http://localhost:2399',
    adminPort: 2400,
    adminJwtSecret: '<TmplDemo Random 32>',
    openPort: 2300,
    openBaseURL: 'http://localhost:2300',
    adminSSO: {
      baseURL: 'https://sso.staging.fangcha.net',
      clientId: 'tmpl_demo',
      clientSecret: 'bluiB1qzfFCkuMlFzAm6hcFRLzJW9zW6',
      authorizePath: '/api/v1/oauth/authorize',
      tokenPath: '/api/v1/oauth/token',
      logoutPath: '/api/v1/logout',
      scope: 'basic',
      callbackUri: 'http://localhost:2399/api/v1/handleSSO',
      userInfoURL: 'https://sso.staging.fangcha.net/api/v1/oauth/user-info',
    },
  },
}
