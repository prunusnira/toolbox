import type { Language } from '@/i18n/types'

export const urlEncoderDecoderTranslations: Record<
  Language,
  {
    title: string
    description: string
    input: string
    encoded: string
    decoded: string
    queryJson: string
    copy: string
    copied: string
    invalidEncodedText: string
  }
> = {
  en: {
    title: 'URL Encoder / Decoder',
    description: 'Encode, decode, and parse URL query strings.',
    input: 'Input',
    encoded: 'Encoded',
    decoded: 'Decoded',
    queryJson: 'Query JSON',
    copy: 'Copy',
    copied: 'Copied',
    invalidEncodedText: 'Invalid encoded text',
  },
  ko: {
    title: 'URL 인코더 / 디코더',
    description: 'URL 문자열과 query string을 변환하고 파싱합니다.',
    input: '입력',
    encoded: '인코딩',
    decoded: '디코딩',
    queryJson: '쿼리 JSON',
    copy: '복사',
    copied: '복사됨',
    invalidEncodedText: '잘못된 인코딩 문자열입니다.',
  },
  ja: {
    title: 'URLエンコーダー / デコーダー',
    description: 'URL文字列とクエリ文字列を変換、解析します。',
    input: '入力',
    encoded: 'エンコード',
    decoded: 'デコード',
    queryJson: 'クエリJSON',
    copy: 'コピー',
    copied: 'コピー済み',
    invalidEncodedText: '無効なエンコード文字列です。',
  },
  'zh-Hans': {
    title: 'URL 编码 / 解码',
    description: '转换并解析 URL 字符串和查询参数。',
    input: '输入',
    encoded: '编码',
    decoded: '解码',
    queryJson: '查询 JSON',
    copy: '复制',
    copied: '已复制',
    invalidEncodedText: '无效的编码文本',
  },
  'zh-Hant': {
    title: 'URL 編碼 / 解碼',
    description: '轉換並解析 URL 字串和查詢參數。',
    input: '輸入',
    encoded: '編碼',
    decoded: '解碼',
    queryJson: '查詢 JSON',
    copy: '複製',
    copied: '已複製',
    invalidEncodedText: '無效的編碼文字',
  },
  es: {
    title: 'Codificador / Decodificador URL',
    description: 'Codifica, decodifica y analiza query strings de URL.',
    input: 'Entrada',
    encoded: 'Codificado',
    decoded: 'Decodificado',
    queryJson: 'Query JSON',
    copy: 'Copiar',
    copied: 'Copiado',
    invalidEncodedText: 'Texto codificado no válido',
  },
  pt: {
    title: 'Codificador / Decodificador de URL',
    description: 'Codifique, decodifique e analise query strings de URL.',
    input: 'Entrada',
    encoded: 'Codificado',
    decoded: 'Decodificado',
    queryJson: 'Query JSON',
    copy: 'Copiar',
    copied: 'Copiado',
    invalidEncodedText: 'Texto codificado inválido',
  },
  de: {
    title: 'URL Encoder / Decoder',
    description: 'URL-Zeichenfolgen und Query Strings umwandeln und parsen.',
    input: 'Eingabe',
    encoded: 'Kodiert',
    decoded: 'Dekodiert',
    queryJson: 'Query JSON',
    copy: 'Kopieren',
    copied: 'Kopiert',
    invalidEncodedText: 'Ungültiger kodierter Text',
  },
  fr: {
    title: 'Encodeur / Décodeur URL',
    description: 'Encodez, décodez et analysez les query strings URL.',
    input: 'Entrée',
    encoded: 'Encodé',
    decoded: 'Décodé',
    queryJson: 'Query JSON',
    copy: 'Copier',
    copied: 'Copié',
    invalidEncodedText: 'Texte encodé invalide',
  },
}
