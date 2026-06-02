import type { Language } from '@/i18n/types'

export const jsonYamlConverterTranslations: Record<
  Language,
  {
    title: string
    description: string
    input: string
    output: string
    copy: string
    copied: string
  }
> = {
  en: {
    title: 'JSON ↔ YAML Converter',
    description: 'Quickly convert JSON and simple YAML key/value text.',
    input: 'Input',
    output: 'Output',
    copy: 'Copy',
    copied: 'Copied',
  },
  ko: {
    title: 'JSON ↔ YAML 변환기',
    description: 'JSON과 간단한 YAML key/value를 빠르게 변환합니다.',
    input: '입력',
    output: '출력',
    copy: '복사',
    copied: '복사됨',
  },
  ja: {
    title: 'JSON ↔ YAML変換',
    description: 'JSONとシンプルなYAML key/valueを素早く変換します。',
    input: '入力',
    output: '出力',
    copy: 'コピー',
    copied: 'コピー済み',
  },
  'zh-Hans': {
    title: 'JSON ↔ YAML 转换器',
    description: '快速转换 JSON 和简单 YAML key/value 文本。',
    input: '输入',
    output: '输出',
    copy: '复制',
    copied: '已复制',
  },
  'zh-Hant': {
    title: 'JSON ↔ YAML 轉換器',
    description: '快速轉換 JSON 和簡單 YAML key/value 文字。',
    input: '輸入',
    output: '輸出',
    copy: '複製',
    copied: '已複製',
  },
  es: {
    title: 'Conversor JSON ↔ YAML',
    description: 'Convierte JSON y YAML key/value simple rápidamente.',
    input: 'Entrada',
    output: 'Salida',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  pt: {
    title: 'Conversor JSON ↔ YAML',
    description: 'Converta JSON e YAML key/value simples rapidamente.',
    input: 'Entrada',
    output: 'Saída',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  de: {
    title: 'JSON ↔ YAML Converter',
    description: 'JSON und einfaches YAML key/value schnell umwandeln.',
    input: 'Eingabe',
    output: 'Ausgabe',
    copy: 'Kopieren',
    copied: 'Kopiert',
  },
  fr: {
    title: 'Convertisseur JSON ↔ YAML',
    description: 'Convertissez rapidement JSON et YAML key/value simple.',
    input: 'Entrée',
    output: 'Sortie',
    copy: 'Copier',
    copied: 'Copié',
  },
}
