import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { MainLayout } from '../core/MainLayout'
import { RouteErrorBoundary } from '@fangcha/react'
import { Button } from 'antd'
import { HomeView } from '../core/HomeView'
import { MyMenu } from './MyMenu'
import { TmplDemoPages } from '@web/tmpl-demo-common/admin-api'

export const MyRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout menu={MyMenu} />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: '/',
        element: <HomeView />,
      },
      {
        children: [
          {
            path: TmplDemoPages.Page1Sub1Route,
            element: (
              <div>
                <h3>sub page 1 main</h3>
                <Button type='primary'>Button</Button>
              </div>
            ),
          },
          {
            path: TmplDemoPages.Page1Sub2Route,
            element: <div>sub page 2 main</div>,
          },
        ],
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
])
