import { useAtomValue, useSetAtom } from 'jotai';
import { sideMenuItemsAtom, selectedMenuAtom } from '../data/menuAtoms.ts';
import { menuData } from '../data/menuData.ts';
import { MenuItem } from '@/feature/menu/component/Menu.item.tsx'

const SideMenu = () => {
  const sideMenuItems = useAtomValue(sideMenuItemsAtom);
  const setSelectedMenu = useSetAtom(selectedMenuAtom);

  const isTopLevel = sideMenuItems.length === 0;
  const items = isTopLevel ? menuData : sideMenuItems;

  return (
    <div className="w-64 bg-gray-100 p-4">
      <ul>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
            onClick={isTopLevel ? () => setSelectedMenu(item) : undefined}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
