import { ChromeFilled, CrownFilled } from '@ant-design/icons'
import { Route } from '@ant-design/pro-layout/es/typing'
import { TmplDemoPages } from '@web/tmpl-demo-common/admin-api'

export const MyMenu: Route = {
  path: '/',
  children: [
    {
      name: 'Page - 1',
      icon: <CrownFilled />,
      children: [
        {
          path: TmplDemoPages.Page1Sub1Route,
          name: 'SubPage - 1',
          icon: <CrownFilled />,
        },
        {
          path: TmplDemoPages.Page1Sub2Route,
          name: 'SubPage - 2',
          icon: <ChromeFilled />,
        },
      ],
    },
    {
      path: TmplDemoPages.Page2Route,
      name: 'Page - 2',
      icon: <CrownFilled />,
    },
  ],
}
