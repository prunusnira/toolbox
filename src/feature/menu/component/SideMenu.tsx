import { useAtomValue, useSetAtom } from 'jotai'
import { sideMenuItemsAtom, selectedMenuAtom } from '../data/menuAtoms.ts'
import { menuData } from '../data/menuData.ts'
import { MenuItem } from '@/feature/menu/component/Menu.item.tsx'
import { translationAtom } from '@/i18n/languageAtom.ts'

const SideMenu = () => {
  const sideMenuItems = useAtomValue(sideMenuItemsAtom)
  const setSelectedMenu = useSetAtom(selectedMenuAtom)
  const t = useAtomValue(translationAtom)

  const isTopLevel = sideMenuItems.length === 0
  const items = isTopLevel ? menuData : sideMenuItems

  const menuNameMap: Record<string, string> = {
    home: t.menu.home,
    dev: t.menu.dev,
    visual: t.menu.visual,
    'dev-1': t.menu.devHome,
    'dev-2': t.menu.markdownEditor,
    'dev-3': t.menu.jsonEditor,
    'dev-4': t.menu.regexPlayground,
    'dev-5': t.menu.jwtDecoder,
    'dev-6': t.menu.urlEncoderDecoder,
    'dev-7': t.menu.timestampConverter,
    'dev-8': t.menu.diffViewer,
    'dev-9': t.menu.jsonYamlConverter,
    'dev-10': t.menu.emptyLineCleaner,
    'visual-0': t.menu.visualHome,
    'visual-1': t.menu.colorConverter,
    'visual-2': t.menu.cssGradientBuilder,
    'visual-3': t.menu.boxShadowGenerator,
    'visual-4': t.menu.borderRadiusGenerator,
    'visual-5': t.menu.svgOptimizerPreviewer,
    'visual-6': t.menu.paletteGenerator,
  }

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
      <ul>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
            name={menuNameMap[item.id] || item.name}
            onClick={isTopLevel ? () => setSelectedMenu(item) : undefined}
          />
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
