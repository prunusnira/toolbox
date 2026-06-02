import type { Language } from '@/i18n/types'

export const visualHomeTranslations: Record<
  Language,
  {
    title: string
    lead: string
    description: string
    instruction: string
  }
> = {
  en: {
    title: 'Visual Tools',
    lead: 'A space for visual tasks that are useful but often oddly hard to find.',
    description:
      'Use browser-based tools for color conversion, image-like previews, CSS styling, SVG checks, and visual inspection.',
    instruction: 'Choose a tool from the left menu.',
  },
  ko: {
    title: '비주얼 도구',
    lead: '간혹 필요한데 마땅히 쓸 만한 도구가 없거나, 원하는 기능이 딱 맞게 없어서 직접 만들게 된 공간입니다.',
    description:
      '색상을 변환하거나, 이미지를 처리하거나, 비주얼하게 확인해야 하는 작업들을 브라우저 안에서 바로 사용할 수 있도록 제공합니다.',
    instruction: '왼쪽 메뉴에서 원하는 도구를 선택해 주세요.',
  },
  ja: {
    title: 'ビジュアルツール',
    lead: '必要なのにちょうどよいツールが見つかりにくい作業のための場所です。',
    description:
      '色変換、画像のようなプレビュー、CSSスタイル、SVG確認、視覚的なチェックをブラウザ内で行えます。',
    instruction: '左のメニューから使いたいツールを選んでください。',
  },
  'zh-Hans': {
    title: '视觉工具',
    lead: '一个用于处理那些有用但常常不好找的视觉任务的空间。',
    description:
      '在浏览器中直接使用颜色转换、预览、CSS 样式、SVG 检查和视觉确认工具。',
    instruction: '请从左侧菜单选择工具。',
  },
  'zh-Hant': {
    title: '視覺工具',
    lead: '一個用來處理那些實用但常常不好找的視覺工作的空間。',
    description:
      '在瀏覽器中直接使用色彩轉換、預覽、CSS 樣式、SVG 檢查和視覺確認工具。',
    instruction: '請從左側選單選擇工具。',
  },
  es: {
    title: 'Herramientas Visuales',
    lead: 'Un espacio para tareas visuales útiles que a veces son difíciles de resolver bien.',
    description:
      'Usa herramientas en el navegador para conversión de color, vistas previas, estilos CSS, revisión SVG e inspección visual.',
    instruction: 'Elige una herramienta en el menú izquierdo.',
  },
  pt: {
    title: 'Ferramentas Visuais',
    lead: 'Um espaço para tarefas visuais úteis que às vezes são difíceis de encontrar bem resolvidas.',
    description:
      'Use ferramentas no navegador para conversão de cores, prévias, estilos CSS, verificação SVG e inspeção visual.',
    instruction: 'Escolha uma ferramenta no menu à esquerda.',
  },
  de: {
    title: 'Visuelle Tools',
    lead: 'Ein Ort für visuelle Aufgaben, die nützlich sind, aber oft schwer passend zu finden.',
    description:
      'Nutze browserbasierte Werkzeuge für Farbkonvertierung, Vorschauen, CSS-Styling, SVG-Prüfung und visuelle Kontrolle.',
    instruction: 'Wähle ein Werkzeug im linken Menü.',
  },
  fr: {
    title: 'Outils Visuels',
    lead: 'Un espace pour les tâches visuelles utiles mais souvent difficiles à couvrir exactement.',
    description:
      'Utilisez des outils dans le navigateur pour convertir les couleurs, prévisualiser, régler le CSS, vérifier les SVG et inspecter visuellement.',
    instruction: 'Choisissez un outil dans le menu de gauche.',
  },
}
