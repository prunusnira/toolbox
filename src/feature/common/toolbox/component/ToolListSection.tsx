import { Link } from '@tanstack/react-router'
import { useSetAtom } from 'jotai'
import { selectedMenuAtom, sideMenuOpenAtom } from '@/feature/menu/data/menuAtoms.ts'
import { menuData } from '@/feature/menu/data/menuData.ts'

export interface ToolItem {
  id: string
  name: string
  description: string
  path: string
}

export interface ToolListSectionProps {
  icon: string
  title: string
  description: string
  tools: ToolItem[]
}

function findParentMenu(path: string) {
  return (
    menuData.find((menu) =>
      menu.children?.some((child) => child.path === path),
    ) ?? null
  )
}

export function ToolListSection({ icon, title, description, tools }: ToolListSectionProps) {
  const setSelectedMenu = useSetAtom(selectedMenuAtom)
  const setSideMenuOpen = useSetAtom(sideMenuOpenAtom)

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4 ml-10">{description}</p>
      <div className="ml-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            to={tool.path}
            onClick={() => { setSelectedMenu(findParentMenu(tool.path)); setSideMenuOpen(false) }}
            className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-blue-300"
          >
            <h3 className="text-lg font-medium text-blue-600 mb-1">
              {tool.name} →
            </h3>
            <p className="text-gray-600 text-sm">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}