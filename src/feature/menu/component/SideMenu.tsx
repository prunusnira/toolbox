import { useAtomValue } from 'jotai';
import { sideMenuItemsAtom } from '../data/menuAtoms.ts';
import { MenuItem } from '@/feature/menu/component/Menu.item.tsx'

const SideMenu = () => {
  const sideMenuItems = useAtomValue(sideMenuItemsAtom);

  if (sideMenuItems.length === 0) {
    return null;
  }

  return (
    <div className="w-64 bg-gray-100 p-4">
      <ul>
        {sideMenuItems.map((item) => (
          <MenuItem {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
