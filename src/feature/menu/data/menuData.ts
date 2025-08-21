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
        { id: 'dev-2', name: 'JSON Formatter', path: '/dev/json-formatter' },
        { id: 'dev-3', name: 'JSON Editor', path: '/dev/json-editor' },
    ]
  },
  {
    id: 'visual',
    name: 'Visual',
    path: '/visual',
  },
];
