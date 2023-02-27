import { AppPluginProtocol } from '@fangcha/backend-kit/lib/basic'
import { _SessionApp } from '@fangcha/router/lib/session'
import { loggerForDev } from '@fangcha/logger'

export const AdminUserPlugin = (params: { applyToSession?: boolean }): AppPluginProtocol => {
  if (params.applyToSession) {
    _SessionApp.setPermissionProtocol({
      checkUserIsAdmin: (email) => {
        return email === 'work@fangqk.com'
      },
      checkUserHasPermission: (email, permissionKey) => {
        loggerForDev.debug(`checkUserHasPermission: `, email, permissionKey)
        return false
      },
      checkUserInAnyGroup: (email, ...groupIds) => {
        loggerForDev.debug(`checkUserInAnyGroup: `, email, groupIds)
        return false
      },
    })
  }

  return {
    appDidLoad: async () => {},
    checkHealth: () => {},
  }
}
