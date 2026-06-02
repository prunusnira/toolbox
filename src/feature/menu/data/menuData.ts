export interface MenuType {
  id: string
  name: string
  path?: string
  children?: MenuType[]
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
      { id: 'dev-2', name: 'Markdown Editor', path: '/dev/markdown-editor' },
      { id: 'dev-3', name: 'JSON Editor', path: '/dev/json-editor' },
      { id: 'dev-4', name: 'Regex Playground', path: '/dev/regex-playground' },
      { id: 'dev-5', name: 'JWT Decoder', path: '/dev/jwt-decoder' },
      {
        id: 'dev-6',
        name: 'URL Encoder / Decoder',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'dev-7',
        name: 'Timestamp Converter',
        path: '/dev/timestamp-converter',
      },
      { id: 'dev-8', name: 'Diff Viewer', path: '/dev/diff-viewer' },
      {
        id: 'dev-9',
        name: 'JSON YAML Converter',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'dev-10',
        name: 'Empty Line Cleaner',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  {
    id: 'visual',
    name: 'Visual',
    path: '/visual',
    children: [
      { id: 'visual-0', name: 'Visual Home', path: '/visual' },
      {
        id: 'visual-1',
        name: 'Color Converter',
        path: '/visual/color-converter',
      },
      {
        id: 'visual-2',
        name: 'CSS Gradient Builder',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'visual-3',
        name: 'Box Shadow Generator',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'visual-4',
        name: 'Border Radius Generator',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'visual-5',
        name: 'SVG Optimizer / Previewer',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'visual-6',
        name: 'Palette Generator',
        path: '/visual/palette-generator',
      },
    ],
  },
]
