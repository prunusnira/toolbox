
import { atom } from 'jotai';
import type { MenuType } from './menuData.ts';

export const selectedMenuAtom = atom<MenuType | null>(null);

export const sideMenuItemsAtom = atom((get) => {
  const selectedMenu = get(selectedMenuAtom);
  return selectedMenu?.children || [];
});
