import type { Language } from '@/i18n/types'

export const diffViewerTranslations: Record<
  Language,
  {
    title: string
    description: string
    original: string
    changed: string
    diff: string
  }
> = {
  en: {
    title: 'Diff Viewer',
    description: 'Compare two text blocks line by line.',
    original: 'Original',
    changed: 'Changed',
    diff: 'Diff',
  },
  ko: {
    title: 'Diff 뷰어',
    description: '두 텍스트의 줄 단위 차이를 확인합니다.',
    original: '원본',
    changed: '변경본',
    diff: '차이',
  },
  ja: {
    title: 'Diffビューア',
    description: '2つのテキストを行単位で比較します。',
    original: '元',
    changed: '変更後',
    diff: '差分',
  },
  'zh-Hans': {
    title: 'Diff 查看器',
    description: '按行比较两段文本。',
    original: '原文',
    changed: '修改后',
    diff: '差异',
  },
  'zh-Hant': {
    title: 'Diff 檢視器',
    description: '逐行比較兩段文字。',
    original: '原文',
    changed: '修改後',
    diff: '差異',
  },
  es: {
    title: 'Visor Diff',
    description: 'Compara dos bloques de texto línea por línea.',
    original: 'Original',
    changed: 'Cambiado',
    diff: 'Diff',
  },
  pt: {
    title: 'Visualizador Diff',
    description: 'Compare dois blocos de texto linha por linha.',
    original: 'Original',
    changed: 'Alterado',
    diff: 'Diff',
  },
  de: {
    title: 'Diff Viewer',
    description: 'Zwei Textblöcke zeilenweise vergleichen.',
    original: 'Original',
    changed: 'Geändert',
    diff: 'Diff',
  },
  fr: {
    title: 'Visionneuse Diff',
    description: 'Comparez deux blocs de texte ligne par ligne.',
    original: 'Original',
    changed: 'Modifié',
    diff: 'Diff',
  },
}
