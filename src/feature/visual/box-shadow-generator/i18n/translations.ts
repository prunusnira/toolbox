import type { Language } from '@/i18n/types'

export const boxShadowGeneratorTranslations: Record<
  Language,
  {
    title: string
    description: string
    controls: string
    preview: string
    darkPreviewNotice: string
    copy: string
    copied: string
    x: string
    y: string
    blur: string
    spread: string
    opacity: string
  }
> = {
  en: {
    title: 'Box Shadow Generator',
    description: 'Adjust shadow values and copy the CSS.',
    controls: 'Controls',
    preview: 'Preview',
    darkPreviewNotice:
      'Dark mode preview uses a white shadow for visibility. Copied CSS still uses the black shadow value.',
    copy: 'Copy',
    copied: 'Copied',
    x: 'X',
    y: 'Y',
    blur: 'Blur',
    spread: 'Spread',
    opacity: 'Opacity',
  },
  ko: {
    title: '박스 섀도 생성기',
    description: '그림자 값을 조절하고 CSS를 복사합니다.',
    controls: '컨트롤',
    preview: '미리보기',
    darkPreviewNotice:
      '다크모드 미리보기에서는 잘 보이도록 흰색 섀도를 표시합니다. 복사되는 CSS는 그대로 검은색 섀도 값입니다.',
    copy: '복사',
    copied: '복사됨',
    x: 'X',
    y: 'Y',
    blur: '블러',
    spread: '스프레드',
    opacity: '불투명도',
  },
  ja: {
    title: 'Box Shadow生成',
    description: '影の値を調整してCSSをコピーします。',
    controls: 'コントロール',
    preview: 'プレビュー',
    darkPreviewNotice:
      'ダークモードのプレビューでは見やすいよう白い影を表示します。コピーされるCSSは黒い影の値のままです。',
    copy: 'コピー',
    copied: 'コピー済み',
    x: 'X',
    y: 'Y',
    blur: 'ぼかし',
    spread: '広がり',
    opacity: '不透明度',
  },
  'zh-Hans': {
    title: 'Box Shadow 生成器',
    description: '调整阴影值并复制 CSS。',
    controls: '控制',
    preview: '预览',
    darkPreviewNotice:
      '深色模式预览使用白色阴影以便查看。复制的 CSS 仍然使用黑色阴影值。',
    copy: '复制',
    copied: '已复制',
    x: 'X',
    y: 'Y',
    blur: '模糊',
    spread: '扩展',
    opacity: '不透明度',
  },
  'zh-Hant': {
    title: 'Box Shadow 生成器',
    description: '調整陰影值並複製 CSS。',
    controls: '控制',
    preview: '預覽',
    darkPreviewNotice:
      '深色模式預覽使用白色陰影以便查看。複製的 CSS 仍然使用黑色陰影值。',
    copy: '複製',
    copied: '已複製',
    x: 'X',
    y: 'Y',
    blur: '模糊',
    spread: '擴展',
    opacity: '不透明度',
  },
  es: {
    title: 'Generador de Box Shadow',
    description: 'Ajusta valores de sombra y copia el CSS.',
    controls: 'Controles',
    preview: 'Vista previa',
    darkPreviewNotice:
      'La vista previa en modo oscuro usa una sombra blanca para verse mejor. El CSS copiado sigue usando la sombra negra.',
    copy: 'Copiar',
    copied: 'Copiado',
    x: 'X',
    y: 'Y',
    blur: 'Desenfoque',
    spread: 'Expansión',
    opacity: 'Opacidad',
  },
  pt: {
    title: 'Gerador de Box Shadow',
    description: 'Ajuste valores de sombra e copie o CSS.',
    controls: 'Controles',
    preview: 'Prévia',
    darkPreviewNotice:
      'A prévia no modo escuro usa uma sombra branca para melhor visibilidade. O CSS copiado ainda usa a sombra preta.',
    copy: 'Copiar',
    copied: 'Copiado',
    x: 'X',
    y: 'Y',
    blur: 'Desfoque',
    spread: 'Expansão',
    opacity: 'Opacidade',
  },
  de: {
    title: 'Box Shadow Generator',
    description: 'Schattenwerte anpassen und CSS kopieren.',
    controls: 'Steuerung',
    preview: 'Vorschau',
    darkPreviewNotice:
      'Die Vorschau im Dark Mode nutzt einen weißen Schatten für bessere Sichtbarkeit. Das kopierte CSS verwendet weiterhin den schwarzen Schattenwert.',
    copy: 'Kopieren',
    copied: 'Kopiert',
    x: 'X',
    y: 'Y',
    blur: 'Unschärfe',
    spread: 'Ausbreitung',
    opacity: 'Deckkraft',
  },
  fr: {
    title: 'Générateur Box Shadow',
    description: 'Ajustez les ombres et copiez le CSS.',
    controls: 'Contrôles',
    preview: 'Aperçu',
    darkPreviewNotice:
      "L'aperçu en mode sombre utilise une ombre blanche pour rester visible. Le CSS copié conserve la valeur d'ombre noire.",
    copy: 'Copier',
    copied: 'Copié',
    x: 'X',
    y: 'Y',
    blur: 'Flou',
    spread: 'Étalement',
    opacity: 'Opacité',
  },
}
