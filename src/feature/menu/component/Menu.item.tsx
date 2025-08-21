import { Link } from '@tanstack/react-router'
import type { MenuType } from '@/feature/menu/data/menuData.ts'

export const MenuItem = ({id, path, name}: MenuType) => {
  return (
    <li key={id} className="mb-2">
      <Link to={path || '#'} className="text-blue-500 hover:underline">
        {name}
      </Link>
    </li>
  )
}