export interface MenuType {
  id: string;
  name: string;
  path?: string;
  children?: MenuType[];
}

export const menuData: MenuType[] = [
  {
    id: 'home',
    name: 'Home',
    path: '/',
  },
  {
    id: 'dev',
    name: 'Dev',
    path: '/dev',
    children: [
        { id: 'dev-1', name: 'Dev Home', path: '/dev' },
        { id: 'dev-3', name: 'JSON Editor', path: '/dev/json-editor' },
    ]
  },
  {
    id: 'visual',
    name: 'Visual',
    path: '/visual',
    children: [
        { id: 'visual-0', name: 'Visual Home', path: '/visual' },
        { id: 'visual-1', name: 'Color Converter', path: '/visual/color-converter' },
    ]
  },
];
