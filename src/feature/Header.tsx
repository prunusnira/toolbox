import { Link } from '@tanstack/react-router'
import { useSetAtom, useAtomValue } from 'jotai';
import { selectedMenuAtom } from './menu/data/menuAtoms.ts';
import { menuData } from './menu/data/menuData.ts';
import { translationAtom } from '../i18n/languageAtom.ts';
import LanguageSwitcher from '../i18n/LanguageSwitcher.tsx';
import ThemeToggle from '../theme/ThemeToggle.tsx';

export default function Header() {
  const setSelectedMenu = useSetAtom(selectedMenuAtom);
  const t = useAtomValue(translationAtom);

  const menuNameMap: Record<string, string> = {
    home: t.menu.home,
    dev: t.menu.dev,
    visual: t.menu.visual,
  };

  return (
    <header className="p-[10px] h-[50px] flex gap-[4px] bg-white dark:bg-gray-900 text-black dark:text-gray-100 justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <nav className="flex flex-row items-center">
        {menuData.map((item) => (
          <div key={item.id} className="px-[4px] font-bold">
            <Link
              to={item.path || '#'}
              onClick={() => setSelectedMenu(item)}
              className="[&.active]:font-bold flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              {item.id === 'home' && (
                <img src="/logo.png" alt="logo" className="h-6 w-6" />
              )}
              {menuNameMap[item.id] || item.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  )
}