import type { Language } from '@/i18n/types'

export const paletteGeneratorTranslations: Record<
  Language,
  {
    title: string
    description: string
    baseColor: string
    copy: string
    copied: string
    contrastVsWhite: string
    base: string
    tint: string
    shade: string
    complement: string
    analogous: string
    triadic: string
  }
> = {
  en: {
    title: 'Palette Generator',
    description:
      'Generate palette colors and contrast ratios from a base color.',
    baseColor: 'Base Color',
    copy: 'Copy',
    copied: 'Copied',
    contrastVsWhite: 'Contrast vs white',
    base: 'Base',
    tint: 'Tint',
    shade: 'Shade',
    complement: 'Complement',
    analogous: 'Analogous',
    triadic: 'Triadic',
  },
  ko: {
    title: '팔레트 생성기',
    description: '기준 색상으로 팔레트와 대비율을 생성합니다.',
    baseColor: '기준 색상',
    copy: '복사',
    copied: '복사됨',
    contrastVsWhite: '흰색 대비율',
    base: '기준',
    tint: '틴트',
    shade: '셰이드',
    complement: '보색',
    analogous: '유사색',
    triadic: '삼각 배색',
  },
  ja: {
    title: 'パレット生成',
    description: '基準色からパレットとコントラスト比を生成します。',
    baseColor: '基準色',
    copy: 'コピー',
    copied: 'コピー済み',
    contrastVsWhite: '白とのコントラスト',
    base: '基準',
    tint: 'ティント',
    shade: 'シェード',
    complement: '補色',
    analogous: '類似色',
    triadic: 'トライアド',
  },
  'zh-Hans': {
    title: '调色板生成器',
    description: '根据基础色生成调色板和对比度。',
    baseColor: '基础色',
    copy: '复制',
    copied: '已复制',
    contrastVsWhite: '与白色对比度',
    base: '基础',
    tint: '浅色',
    shade: '深色',
    complement: '互补色',
    analogous: '邻近色',
    triadic: '三角色',
  },
  'zh-Hant': {
    title: '調色盤生成器',
    description: '根據基礎色生成調色盤和對比度。',
    baseColor: '基礎色',
    copy: '複製',
    copied: '已複製',
    contrastVsWhite: '與白色對比度',
    base: '基礎',
    tint: '淺色',
    shade: '深色',
    complement: '互補色',
    analogous: '鄰近色',
    triadic: '三角色',
  },
  es: {
    title: 'Generador de paletas',
    description: 'Genera paletas y ratios de contraste desde un color base.',
    baseColor: 'Color base',
    copy: 'Copiar',
    copied: 'Copiado',
    contrastVsWhite: 'Contraste vs blanco',
    base: 'Base',
    tint: 'Tinte',
    shade: 'Sombra',
    complement: 'Complementario',
    analogous: 'Análogo',
    triadic: 'Triádico',
  },
  pt: {
    title: 'Gerador de paleta',
    description: 'Gere paletas e taxas de contraste a partir de uma cor base.',
    baseColor: 'Cor base',
    copy: 'Copiar',
    copied: 'Copiado',
    contrastVsWhite: 'Contraste vs branco',
    base: 'Base',
    tint: 'Tom claro',
    shade: 'Sombra',
    complement: 'Complementar',
    analogous: 'Análoga',
    triadic: 'Triádica',
  },
  de: {
    title: 'Palette Generator',
    description:
      'Palettenfarben und Kontrastwerte aus einer Basisfarbe erzeugen.',
    baseColor: 'Basisfarbe',
    copy: 'Kopieren',
    copied: 'Kopiert',
    contrastVsWhite: 'Kontrast zu Weiß',
    base: 'Basis',
    tint: 'Tönung',
    shade: 'Schatten',
    complement: 'Komplementär',
    analogous: 'Analog',
    triadic: 'Triadisch',
  },
  fr: {
    title: 'Générateur de palette',
    description:
      'Générez une palette et des contrastes depuis une couleur de base.',
    baseColor: 'Couleur de base',
    copy: 'Copier',
    copied: 'Copié',
    contrastVsWhite: 'Contraste avec blanc',
    base: 'Base',
    tint: 'Teinte claire',
    shade: 'Ombre',
    complement: 'Complémentaire',
    analogous: 'Analogue',
    triadic: 'Triadique',
  },
}
