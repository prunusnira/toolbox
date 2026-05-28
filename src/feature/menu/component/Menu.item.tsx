import { Link } from '@tanstack/react-router'
import type { MenuType } from '@/feature/menu/data/menuData.ts'

interface MenuItemProps extends MenuType {
  onClick?: () => void;
}

export const MenuItem = ({id, path, name, onClick}: MenuItemProps) => {
  return (
    <li key={id} className="mb-2">
      <Link to={path || '#'} className="text-blue-500 hover:underline" onClick={onClick}>
        {name}
      </Link>
    </li>
  )
}
