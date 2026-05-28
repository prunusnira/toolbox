import type { Language } from '@/i18n/types';

export interface HomeTranslations {
  description: string;
  devTools: string;
  devToolsDesc: string;
  visualTools: string;
  visualToolsDesc: string;
  jsonEditor: string;
  jsonEditorDesc: string;
  colorConverter: string;
  colorConverterDesc: string;
  footer: string;
}

export const homeTranslations: Record<Language, HomeTranslations> = {
  en: {
    description:
      'A collection of tools and utilities designed to streamline various tasks and enhance productivity.',
    devTools: 'Dev Tools',
    devToolsDesc: 'Utilities to boost your development productivity',
    visualTools: 'Visual Tools',
    visualToolsDesc: 'Tools for working with colors and visual elements',
    jsonEditor: 'JSON Editor',
    jsonEditorDesc: 'A visual editor for viewing and editing JSON data',
    colorConverter: 'Color Converter',
    colorConverterDesc: 'Convert between RGB, RGBA, HSV and other color formats',
    footer: 'https://tools.nira.one',
  },
  ko: {
    description:
      '다양한 작업을 간편하게 처리할 수 있도록 도와주는 도구와 유틸리티 모음입니다. 생산성을 높이고 효율적인 워크플로우를 경험해 보세요.',
    devTools: '개발 도구',
    devToolsDesc: '개발 생산성을 높여주는 유틸리티 모음',
    visualTools: '비주얼 도구',
    visualToolsDesc: '색상 및 비주얼 요소를 다루는 도구 모음',
    jsonEditor: 'JSON 에디터',
    jsonEditorDesc: 'JSON 데이터를 시각적으로 편집하고 확인할 수 있는 에디터',
    colorConverter: '색상 변환기',
    colorConverterDesc: 'RGB, RGBA, HSV 등 다양한 색상 형식을 변환하는 도구',
    footer: 'https://tools.nira.one',
  },
  ja: {
    description:
      '様々な作業を簡単に処理できるツールとユーティリティのコレクションです。生産性を向上させ、効率的なワークフローを体験してください。',
    devTools: '開発ツール',
    devToolsDesc: '開発の生産性を向上させるユーティリティ集',
    visualTools: 'ビジュアルツール',
    visualToolsDesc: '色や視覚要素を扱うツール集',
    jsonEditor: 'JSONエディタ',
    jsonEditorDesc: 'JSONデータを視覚的に編集・確認できるエディタ',
    colorConverter: 'カラーコンバーター',
    colorConverterDesc: 'RGB、RGBA、HSVなど様々なカラー形式を変換するツール',
    footer: 'https://tools.nira.one',
  },
  'zh-Hans': {
    description:
      '一组工具和实用程序集合，旨在简化各种任务并提高生产力。',
    devTools: '开发工具',
    devToolsDesc: '提升开发效率的实用工具集',
    visualTools: '视觉工具',
    visualToolsDesc: '处理颜色和视觉元素的工具集',
    jsonEditor: 'JSON编辑器',
    jsonEditorDesc: '可视化的JSON数据查看和编辑工具',
    colorConverter: '颜色转换器',
    colorConverterDesc: '在RGB、RGBA、HSV等颜色格式之间进行转换',
    footer: 'https://tools.nira.one',
  },
  'zh-Hant': {
    description:
      '一組工具和實用程式集合，旨在簡化各種任務並提高生產力。',
    devTools: '開發工具',
    devToolsDesc: '提升開發效率的實用工具集',
    visualTools: '視覺工具',
    visualToolsDesc: '處理顏色和視覺元素的工具集',
    jsonEditor: 'JSON編輯器',
    jsonEditorDesc: '視覺化的JSON資料檢視和編輯工具',
    colorConverter: '顏色轉換器',
    colorConverterDesc: '在RGB、RGBA、HSV等顏色格式之間進行轉換',
    footer: 'https://tools.nira.one',
  },
  es: {
    description:
      'Una colección de herramientas y utilidades diseñadas para agilizar diversas tareas y mejorar la productividad.',
    devTools: 'Herramientas de Desarrollo',
    devToolsDesc: 'Utilidades para impulsar tu productividad de desarrollo',
    visualTools: 'Herramientas Visuales',
    visualToolsDesc: 'Herramientas para trabajar con colores y elementos visuales',
    jsonEditor: 'Editor JSON',
    jsonEditorDesc: 'Un editor visual para ver y editar datos JSON',
    colorConverter: 'Conversor de colores',
    colorConverterDesc: 'Convierte entre RGB, RGBA, HSV y otros formatos de color',
    footer: 'https://tools.nira.one',
  },
  pt: {
    description:
      'Uma coleção de ferramentas e utilitários projetados para agilizar várias tarefas e melhorar a produtividade.',
    devTools: 'Ferramentas de Desenvolvimento',
    devToolsDesc: 'Utilitários para impulsionar sua produtividade de desenvolvimento',
    visualTools: 'Ferramentas Visuais',
    visualToolsDesc: 'Ferramentas para trabalhar com cores e elementos visuais',
    jsonEditor: 'Editor JSON',
    jsonEditorDesc: 'Um editor visual para visualizar e editar dados JSON',
    colorConverter: 'Conversor de Cores',
    colorConverterDesc: 'Converta entre RGB, RGBA, HSV e outros formatos de cor',
    footer: 'https://tools.nira.one',
  },
  de: {
    description:
      'Eine Sammlung von Tools und Dienstprogrammen zur Optimierung verschiedener Aufgaben und zur Steigerung der Produktivität.',
    devTools: 'Entwicklungstools',
    devToolsDesc: 'Dienstprogramme zur Steigerung Ihrer Entwicklungsproduktivität',
    visualTools: 'Visuelle Tools',
    visualToolsDesc: 'Tools für die Arbeit mit Farben und visuellen Elementen',
    jsonEditor: 'JSON-Editor',
    jsonEditorDesc: 'Ein visueller Editor zum Anzeigen und Bearbeiten von JSON-Daten',
    colorConverter: 'Farbkonverter',
    colorConverterDesc: 'Konvertierung zwischen RGB, RGBA, HSV und anderen Farbformaten',
    footer: 'https://tools.nira.one',
  },
  fr: {
    description:
      "Une collection d'outils et d'utilitaires conçus pour rationaliser diverses tâches et améliorer la productivité.",
    devTools: 'Outils de Développement',
    devToolsDesc: 'Utilitaires pour booster votre productivité de développement',
    visualTools: 'Outils Visuels',
    visualToolsDesc: 'Outils pour travailler avec les couleurs et les éléments visuels',
    jsonEditor: 'Éditeur JSON',
    jsonEditorDesc: 'Un éditeur visuel pour afficher et modifier les données JSON',
    colorConverter: 'Convertisseur de couleurs',
    colorConverterDesc: 'Convertir entre RGB, RGBA, HSV et autres formats de couleur',
    footer: 'https://tools.nira.one',
  },
};