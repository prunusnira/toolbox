import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import Header from '@/feature/Header'
import MainLayout from '../layout/mainLayout'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  ),
})
