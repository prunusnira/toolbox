import type { Language } from '@/i18n/types'

export interface VisualHomeTranslations {
  title: string
  lead: string
  description: string
  instruction: string
  tools: {
    id: string
    name: string
    description: string
    path: string
  }[]
}

export const visualHomeTranslations: Record<Language, VisualHomeTranslations> = {
  en: {
    title: 'Visual Tools',
    lead: 'A space for visual tasks that are useful but often oddly hard to find.',
    description:
      'Use browser-based tools for color conversion, image-like previews, CSS styling, SVG checks, and visual inspection.',
    instruction: 'Choose a tool from the left menu.',
    tools: [
      {
        id: 'color-converter',
        name: 'Color Converter',
        description: 'Convert between RGB, RGBA, HSV and other color formats',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS Gradient Builder',
        description: 'Build and preview CSS gradients visually',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'Generate CSS box shadows with a live preview',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius Generator',
        description: 'Create custom border-radius values visually',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG Optimizer / Previewer',
        description: 'Optimize and preview SVG files',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: 'Palette Generator',
        description: 'Generate harmonious color palettes',
        path: '/visual/palette-generator',
      },
    ],
  },
  ko: {
    title: '비주얼 도구',
    lead: '간혹 필요한데 마땅히 쓸 만한 도구가 없거나, 원하는 기능이 딱 맞게 없어서 직접 만들게 된 공간입니다.',
    description:
      '색상을 변환하거나, 이미지를 처리하거나, 비주얼하게 확인해야 하는 작업들을 브라우저 안에서 바로 사용할 수 있도록 제공합니다.',
    instruction: '왼쪽 메뉴에서 원하는 도구를 선택해 주세요.',
    tools: [
      {
        id: 'color-converter',
        name: '색상 변환기',
        description: 'RGB, RGBA, HSV 등 다양한 색상 형식을 변환하는 도구',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS 그라디언트 빌더',
        description: 'CSS 그라디언트를 시각적으로 빌드하고 미리보기',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: '박스 섀도 생성기',
        description: '실시간 미리보기로 CSS 박스 섀도 생성',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: '둥근 모서리 생성기',
        description: '시각적으로 커스텀 border-radius 값 생성',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG 최적화 / 미리보기',
        description: 'SVG 파일을 최적화하고 미리보기',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: '팔레트 생성기',
        description: '조화로운 색상 팔레트 생성',
        path: '/visual/palette-generator',
      },
    ],
  },
  ja: {
    title: 'ビジュアルツール',
    lead: '必要なのにちょうどよいツールが見つかりにくい作業のための場所です。',
    description:
      '色変換、画像のようなプレビュー、CSSスタイル、SVG確認、視覚的なチェックをブラウザ内で行えます。',
    instruction: '左のメニューから使いたいツールを選んでください。',
    tools: [
      {
        id: 'color-converter',
        name: 'カラーコンバーター',
        description: 'RGB、RGBA、HSVなど様々なカラー形式を変換するツール',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSSグラデーションビルダー',
        description: 'CSSグラデーションを視覚的に構築・プレビュー',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'ライブプレビューでCSSボックスシャドウを生成',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius Generator',
        description: '視覚的にカスタムborder-radius値を作成',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG Optimizer / Previewer',
        description: 'SVGファイルの最適化とプレビュー',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: 'Palette Generator',
        description: '調和のとれたカラーパレットを生成',
        path: '/visual/palette-generator',
      },
    ],
  },
  'zh-Hans': {
    title: '视觉工具',
    lead: '一个用于处理那些有用但常常不好找的视觉任务的空间。',
    description:
      '在浏览器中直接使用颜色转换、预览、CSS 样式、SVG 检查和视觉确认工具。',
    instruction: '请从左侧菜单选择工具。',
    tools: [
      {
        id: 'color-converter',
        name: '颜色转换器',
        description: '在RGB、RGBA、HSV等颜色格式之间进行转换',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS渐变构建器',
        description: '可视化的CSS渐变构建和预览',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow生成器',
        description: '实时预览生成CSS盒子阴影',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius生成器',
        description: '可视化创建自定义border-radius值',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG优化 / 预览',
        description: '优化和预览SVG文件',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: '调色板生成器',
        description: '生成和谐的色彩调色板',
        path: '/visual/palette-generator',
      },
    ],
  },
  'zh-Hant': {
    title: '視覺工具',
    lead: '一個用來處理那些實用但常常不好找的視覺工作的空間。',
    description:
      '在瀏覽器中直接使用色彩轉換、預覽、CSS 樣式、SVG 檢查和視覺確認工具。',
    instruction: '請從左側選單選擇工具。',
    tools: [
      {
        id: 'color-converter',
        name: '顏色轉換器',
        description: '在RGB、RGBA、HSV等顏色格式之間進行轉換',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS漸層建構器',
        description: '視覺化的CSS漸層建構和預覽',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow產生器',
        description: '即時預覽產生CSS盒子陰影',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius產生器',
        description: '視覺化建立自訂border-radius值',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG最佳化 / 預覽',
        description: '最佳化和預覽SVG檔案',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: '調色盤產生器',
        description: '產生和諧的色彩調色盤',
        path: '/visual/palette-generator',
      },
    ],
  },
  es: {
    title: 'Herramientas Visuales',
    lead: 'Un espacio para tareas visuales útiles que a veces son difíciles de resolver bien.',
    description:
      'Usa herramientas en el navegador para conversión de color, vistas previas, estilos CSS, revisión SVG e inspección visual.',
    instruction: 'Elige una herramienta en el menú izquierdo.',
    tools: [
      {
        id: 'color-converter',
        name: 'Conversor de colores',
        description: 'Convierte entre RGB, RGBA, HSV y otros formatos de color',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS Gradient Builder',
        description: 'Construye y previsualiza gradientes CSS visualmente',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'Genera sombras CSS con vista previa en vivo',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius Generator',
        description: 'Crea valores border-radius personalizados visualmente',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG Optimizer / Previewer',
        description: 'Optimiza y previsualiza archivos SVG',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: 'Palette Generator',
        description: 'Genera paletas de colores armoniosas',
        path: '/visual/palette-generator',
      },
    ],
  },
  pt: {
    title: 'Ferramentas Visuais',
    lead: 'Um espaço para tarefas visuais úteis que às vezes são difíceis de encontrar bem resolvidas.',
    description:
      'Use ferramentas no navegador para conversão de cores, prévias, estilos CSS, verificação SVG e inspeção visual.',
    instruction: 'Escolha uma ferramenta no menu à esquerda.',
    tools: [
      {
        id: 'color-converter',
        name: 'Conversor de Cores',
        description: 'Converta entre RGB, RGBA, HSV e outros formatos de cor',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS Gradient Builder',
        description: 'Construa e visualize gradientes CSS visualmente',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'Gere sombras CSS com prévia ao vivo',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius Generator',
        description: 'Crie valores border-radius personalizados visualmente',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG Optimizer / Previewer',
        description: 'Otimize e visualize arquivos SVG',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: 'Palette Generator',
        description: 'Gere paletas de cores harmoniosas',
        path: '/visual/palette-generator',
      },
    ],
  },
  de: {
    title: 'Visuelle Tools',
    lead: 'Ein Ort für visuelle Aufgaben, die nützlich sind, aber oft schwer passend zu finden.',
    description:
      'Nutze browserbasierte Werkzeuge für Farbkonvertierung, Vorschauen, CSS-Styling, SVG-Prüfung und visuelle Kontrolle.',
    instruction: 'Wähle ein Werkzeug im linken Menü.',
    tools: [
      {
        id: 'color-converter',
        name: 'Farbkonverter',
        description: 'Konvertierung zwischen RGB, RGBA, HSV und anderen Farbformaten',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS Gradient Builder',
        description: 'CSS-Verläufe visuell erstellen und vorschauen',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'CSS-Box-Schatten mit Live-Vorschau generieren',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius Generator',
        description: 'Benutzerdefinierte border-radius-Werte visuell erstellen',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG Optimizer / Previewer',
        description: 'SVG-Dateien optimieren und vorschauen',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: 'Palette Generator',
        description: 'Harmonische Farbpaletten generieren',
        path: '/visual/palette-generator',
      },
    ],
  },
  fr: {
    title: 'Outils Visuels',
    lead: 'Un espace pour les tâches visuelles utiles mais souvent difficiles à couvrir exactement.',
    description:
      'Utilisez des outils dans le navigateur pour convertir les couleurs, prévisualiser, régler le CSS, vérifier les SVG et inspecter visuellement.',
    instruction: 'Choisissez un outil dans le menu de gauche.',
    tools: [
      {
        id: 'color-converter',
        name: 'Convertisseur de couleurs',
        description: 'Convertir entre RGB, RGBA, HSV et autres formats de couleur',
        path: '/visual/color-converter',
      },
      {
        id: 'css-gradient-builder',
        name: 'CSS Gradient Builder',
        description: 'Créez et prévisualisez des dégradés CSS visuellement',
        path: '/visual/css-gradient-builder',
      },
      {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'Générez des ombres CSS avec aperçu en direct',
        path: '/visual/box-shadow-generator',
      },
      {
        id: 'border-radius-generator',
        name: 'Border Radius Generator',
        description: 'Créez visuellement des valeurs border-radius personnalisées',
        path: '/visual/border-radius-generator',
      },
      {
        id: 'svg-optimizer-previewer',
        name: 'SVG Optimizer / Previewer',
        description: 'Optimisez et prévisualisez les fichiers SVG',
        path: '/visual/svg-optimizer-previewer',
      },
      {
        id: 'palette-generator',
        name: 'Palette Generator',
        description: 'Générez des palettes de couleurs harmonieuses',
        path: '/visual/palette-generator',
      },
    ],
  },
}