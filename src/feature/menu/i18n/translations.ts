import type { Language } from '@/i18n/types';

export interface MenuTranslations {
  home: string;
  dev: string;
  visual: string;
  devHome: string;
  jsonEditor: string;
  markdownEditor: string;
  visualHome: string;
  colorConverter: string;
}

export const menuTranslations: Record<Language, MenuTranslations> = {
  en: {
    home: "Nira's Toolbox",
    dev: 'Dev',
    visual: 'Visual',
    devHome: 'Dev Home',
    jsonEditor: 'JSON Editor',
    markdownEditor: 'Markdown Editor',
    visualHome: 'Visual Home',
    colorConverter: 'Color Converter',
  },
  ko: {
    home: "Nira's Toolbox",
    dev: '개발',
    visual: '비주얼',
    devHome: '개발 홈',
    jsonEditor: 'JSON 에디터',
    markdownEditor: '마크다운 에디터',
    visualHome: '비주얼 홈',
    colorConverter: '색상 변환기',
  },
  ja: {
    home: "Nira's Toolbox",
    dev: '開発',
    visual: 'ビジュアル',
    devHome: '開発ホーム',
    jsonEditor: 'JSONエディタ',
    markdownEditor: 'Markdownエディタ',
    visualHome: 'ビジュアルホーム',
    colorConverter: 'カラーコンバーター',
  },
  'zh-Hans': {
    home: "Nira's Toolbox",
    dev: '开发',
    visual: '视觉',
    devHome: '开发主页',
    jsonEditor: 'JSON编辑器',
    markdownEditor: 'Markdown编辑器',
    visualHome: '视觉主页',
    colorConverter: '颜色转换器',
  },
  'zh-Hant': {
    home: "Nira's Toolbox",
    dev: '開發',
    visual: '視覺',
    devHome: '開發首頁',
    jsonEditor: 'JSON編輯器',
    markdownEditor: 'Markdown編輯器',
    visualHome: '視覺首頁',
    colorConverter: '顏色轉換器',
  },
  es: {
    home: "Nira's Toolbox",
    dev: 'Dev',
    visual: 'Visual',
    devHome: 'Dev Inicio',
    jsonEditor: 'Editor JSON',
    markdownEditor: 'Editor Markdown',
    visualHome: 'Visual Inicio',
    colorConverter: 'Conversor de colores',
  },
  pt: {
    home: "Nira's Toolbox",
    dev: 'Dev',
    visual: 'Visual',
    devHome: 'Dev Início',
    jsonEditor: 'Editor JSON',
    markdownEditor: 'Editor Markdown',
    visualHome: 'Visual Início',
    colorConverter: 'Conversor de Cores',
  },
  de: {
    home: "Nira's Toolbox",
    dev: 'Dev',
    visual: 'Visuell',
    devHome: 'Dev Startseite',
    jsonEditor: 'JSON-Editor',
    markdownEditor: 'Markdown-Editor',
    visualHome: 'Visuelle Startseite',
    colorConverter: 'Farbkonverter',
  },
  fr: {
    home: "Nira's Toolbox",
    dev: 'Dev',
    visual: 'Visuel',
    devHome: 'Dev Accueil',
    jsonEditor: 'Éditeur JSON',
    markdownEditor: 'Éditeur Markdown',
    visualHome: 'Visuel Accueil',
    colorConverter: 'Convertisseur de couleurs',
  },
};