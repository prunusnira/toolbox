import { Link } from '@tanstack/react-router'
import { useSetAtom } from 'jotai';
import { selectedMenuAtom } from './menu/data/menuAtoms.ts';
import { menuData } from './menu/data/menuData.ts';

export default function Header() {
  const setSelectedMenu = useSetAtom(selectedMenuAtom);

  return (
    <header className="p-[10px] h-[50px] flex gap-[4px] bg-white text-black justify-between">
      <nav className="flex flex-row">
        {menuData.map((item) => (
          <div key={item.id} className="px-[4px] font-bold">
            <Link 
              to={item.path || '#'} 
              onClick={() => setSelectedMenu(item)}
              className="[&.active]:font-bold"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
