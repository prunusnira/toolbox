import type { Language } from '@/i18n/types'

export const jwtDecoderTranslations: Record<
  Language,
  {
    title: string
    description: string
    token: string
    header: string
    payload: string
    copy: string
    copied: string
    invalidShape: string
  }
> = {
  en: {
    title: 'JWT Decoder',
    description: 'Decode JWT headers and payloads locally in your browser.',
    token: 'Token',
    header: 'Header',
    payload: 'Payload',
    copy: 'Copy',
    copied: 'Copied',
    invalidShape: 'JWT must use the header.payload.signature shape.',
  },
  ko: {
    title: 'JWT 디코더',
    description: '브라우저 안에서 JWT header와 payload를 로컬로 디코딩합니다.',
    token: '토큰',
    header: '헤더',
    payload: '페이로드',
    copy: '복사',
    copied: '복사됨',
    invalidShape: 'JWT는 header.payload.signature 형태여야 합니다.',
  },
  ja: {
    title: 'JWTデコーダー',
    description: 'JWTのヘッダーとペイロードをブラウザ内でデコードします。',
    token: 'トークン',
    header: 'ヘッダー',
    payload: 'ペイロード',
    copy: 'コピー',
    copied: 'コピー済み',
    invalidShape: 'JWTはheader.payload.signature形式である必要があります。',
  },
  'zh-Hans': {
    title: 'JWT 解码器',
    description: '在浏览器本地解码 JWT header 和 payload。',
    token: '令牌',
    header: 'Header',
    payload: 'Payload',
    copy: '复制',
    copied: '已复制',
    invalidShape: 'JWT 必须是 header.payload.signature 格式。',
  },
  'zh-Hant': {
    title: 'JWT 解碼器',
    description: '在瀏覽器本機解碼 JWT header 和 payload。',
    token: '權杖',
    header: 'Header',
    payload: 'Payload',
    copy: '複製',
    copied: '已複製',
    invalidShape: 'JWT 必須是 header.payload.signature 格式。',
  },
  es: {
    title: 'Decodificador JWT',
    description:
      'Decodifica headers y payloads JWT localmente en el navegador.',
    token: 'Token',
    header: 'Header',
    payload: 'Payload',
    copy: 'Copiar',
    copied: 'Copiado',
    invalidShape: 'El JWT debe tener la forma header.payload.signature.',
  },
  pt: {
    title: 'Decodificador JWT',
    description: 'Decodifique headers e payloads JWT localmente no navegador.',
    token: 'Token',
    header: 'Header',
    payload: 'Payload',
    copy: 'Copiar',
    copied: 'Copiado',
    invalidShape: 'O JWT deve estar no formato header.payload.signature.',
  },
  de: {
    title: 'JWT Decoder',
    description: 'JWT-Header und Payloads lokal im Browser dekodieren.',
    token: 'Token',
    header: 'Header',
    payload: 'Payload',
    copy: 'Kopieren',
    copied: 'Kopiert',
    invalidShape: 'JWT muss die Form header.payload.signature haben.',
  },
  fr: {
    title: 'Décodeur JWT',
    description:
      'Décodez les headers et payloads JWT localement dans le navigateur.',
    token: 'Jeton',
    header: 'Header',
    payload: 'Payload',
    copy: 'Copier',
    copied: 'Copié',
    invalidShape: 'Le JWT doit suivre la forme header.payload.signature.',
  },
}
