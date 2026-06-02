import React from 'react'
import { useAtom } from 'jotai'
import { sideMenuOpenAtom } from '@/feature/menu/data/menuAtoms.ts'
import SideMenu from '@/feature/menu/component/SideMenu.tsx'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [open, setOpen] = useAtom(sideMenuOpenAtom)

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* Mobile hamburger button - visible only below md */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-[54px] left-2 z-30 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-2 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Open menu"
        >
          <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Sidebar: always visible on md+, slide-in on mobile */}
      <div
        className={`
          shrink-0
          md:block
          ${open ? 'block' : 'hidden md:block'}
        `}
      >
        <div
          className={`
            fixed top-[50px] left-0 bottom-0 z-50 w-64 transform transition-transform duration-200 ease-in-out
            md:static md:top-auto md:transform-none md:transition-none md:z-auto
            ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          {/* Close button - mobile only */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="md:hidden absolute top-2 right-2 z-10 rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <SideMenu />
        </div>
      </div>

      {/* Overlay backdrop - mobile only */}
      {open && (
        <div
          className="md:hidden fixed top-[50px] left-0 right-0 bottom-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      <main className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900">
        {children}
      </main>
    </div>
  )
}

export default MainLayout