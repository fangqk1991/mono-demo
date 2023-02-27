import { ApiOptions } from '@fangcha/app-request'
import { HttpRequest } from '@fangcha/auth-basic'

export const ReactRequest = (commonApi?: ApiOptions) => {
  const builder = new HttpRequest()
  if (commonApi) {
    builder.setApiOptions(commonApi)
  }
  return builder
}
