import * as assert from 'assert'

export class TmplDemoPages {
  public static Page1Sub1Route = '/v1/page-1/sub-page-1'
  public static Page1Sub2Route = '/v1/page-1/sub-page-2'

  public static Page2Route = '/v1/page-2'

  public static buildRoute(route: string, params: { [p: string]: string | number } | (string | number)[]) {
    if (Array.isArray(params)) {
      let index = 0
      const url = route.replace(/:([_a-zA-Z][\w-]*)/g, () => {
        return `${params[index++]}`
      })
      assert.ok(index === params.length)
      return url
    }
    return route.replace(/:([_a-zA-Z][\w-]*)/g, (_, matchStr1) => {
      return `${params[matchStr1]}`
    })
  }
}
