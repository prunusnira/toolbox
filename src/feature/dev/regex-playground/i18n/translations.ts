import type { Language } from '@/i18n/types'

export const regexPlaygroundTranslations: Record<
  Language,
  {
    title: string
    description: string
    input: string
    matches: string
    groups: string
  }
> = {
  en: {
    title: 'Regex Playground',
    description:
      'Test regular expressions and inspect matches and capture groups.',
    input: 'Input',
    matches: 'Matches',
    groups: 'groups',
  },
  ko: {
    title: '정규식 플레이그라운드',
    description: '정규식을 테스트하고 매치 결과와 캡처 그룹을 확인합니다.',
    input: '입력',
    matches: '매치',
    groups: '그룹',
  },
  ja: {
    title: '正規表現プレイグラウンド',
    description: '正規表現をテストし、マッチとキャプチャグループを確認します。',
    input: '入力',
    matches: 'マッチ',
    groups: 'グループ',
  },
  'zh-Hans': {
    title: '正则表达式测试台',
    description: '测试正则表达式并查看匹配项和捕获组。',
    input: '输入',
    matches: '匹配',
    groups: '分组',
  },
  'zh-Hant': {
    title: '正則表達式測試台',
    description: '測試正則表達式並查看符合項和捕獲群組。',
    input: '輸入',
    matches: '符合',
    groups: '群組',
  },
  es: {
    title: 'Área de pruebas Regex',
    description:
      'Prueba expresiones regulares y revisa coincidencias y grupos.',
    input: 'Entrada',
    matches: 'Coincidencias',
    groups: 'grupos',
  },
  pt: {
    title: 'Playground de Regex',
    description: 'Teste expressões regulares e veja correspondências e grupos.',
    input: 'Entrada',
    matches: 'Correspondências',
    groups: 'grupos',
  },
  de: {
    title: 'Regex Playground',
    description: 'Reguläre Ausdrücke testen und Treffer sowie Gruppen prüfen.',
    input: 'Eingabe',
    matches: 'Treffer',
    groups: 'Gruppen',
  },
  fr: {
    title: 'Bac à sable Regex',
    description:
      'Testez des expressions régulières et inspectez les correspondances.',
    input: 'Entrée',
    matches: 'Correspondances',
    groups: 'groupes',
  },
}
