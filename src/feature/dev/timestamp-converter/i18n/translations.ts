import type { Language } from '@/i18n/types'

export const timestampConverterTranslations: Record<
  Language,
  {
    title: string
    description: string
    timestamp: string
    date: string
    seconds: string
    milliseconds: string
    local: string
    utc: string
  }
> = {
  en: {
    title: 'Timestamp Converter',
    description: 'Convert Unix timestamps and dates in local and UTC formats.',
    timestamp: 'Timestamp',
    date: 'Date',
    seconds: 'Seconds',
    milliseconds: 'Milliseconds',
    local: 'Local',
    utc: 'UTC',
  },
  ko: {
    title: '타임스탬프 변환기',
    description: 'Unix timestamp와 날짜를 로컬/UTC 기준으로 변환합니다.',
    timestamp: '타임스탬프',
    date: '날짜',
    seconds: '초',
    milliseconds: '밀리초',
    local: '로컬',
    utc: 'UTC',
  },
  ja: {
    title: 'タイムスタンプ変換',
    description: 'Unixタイムスタンプと日付をローカル/UTC形式で変換します。',
    timestamp: 'タイムスタンプ',
    date: '日付',
    seconds: '秒',
    milliseconds: 'ミリ秒',
    local: 'ローカル',
    utc: 'UTC',
  },
  'zh-Hans': {
    title: '时间戳转换器',
    description: '在本地和 UTC 格式之间转换 Unix 时间戳和日期。',
    timestamp: '时间戳',
    date: '日期',
    seconds: '秒',
    milliseconds: '毫秒',
    local: '本地',
    utc: 'UTC',
  },
  'zh-Hant': {
    title: '時間戳轉換器',
    description: '在本機和 UTC 格式之間轉換 Unix 時間戳和日期。',
    timestamp: '時間戳',
    date: '日期',
    seconds: '秒',
    milliseconds: '毫秒',
    local: '本機',
    utc: 'UTC',
  },
  es: {
    title: 'Conversor de Timestamp',
    description: 'Convierte timestamps Unix y fechas en formatos local y UTC.',
    timestamp: 'Timestamp',
    date: 'Fecha',
    seconds: 'Segundos',
    milliseconds: 'Milisegundos',
    local: 'Local',
    utc: 'UTC',
  },
  pt: {
    title: 'Conversor de Timestamp',
    description: 'Converta timestamps Unix e datas em formatos local e UTC.',
    timestamp: 'Timestamp',
    date: 'Data',
    seconds: 'Segundos',
    milliseconds: 'Milissegundos',
    local: 'Local',
    utc: 'UTC',
  },
  de: {
    title: 'Timestamp Converter',
    description:
      'Unix-Zeitstempel und Daten in lokalen und UTC-Formaten umwandeln.',
    timestamp: 'Zeitstempel',
    date: 'Datum',
    seconds: 'Sekunden',
    milliseconds: 'Millisekunden',
    local: 'Lokal',
    utc: 'UTC',
  },
  fr: {
    title: 'Convertisseur de Timestamp',
    description:
      'Convertissez timestamps Unix et dates en formats local et UTC.',
    timestamp: 'Timestamp',
    date: 'Date',
    seconds: 'Secondes',
    milliseconds: 'Millisecondes',
    local: 'Local',
    utc: 'UTC',
  },
}
