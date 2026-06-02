import type { Language } from '@/i18n/types'

export const emptyLineCleanerTranslations: Record<
  Language,
  {
    title: string
    description: string
    trimEachLine: string
    collapseMultipleBlanks: string
    input: string
    cleaned: string
    copy: string
    copied: string
    sample: string
  }
> = {
  en: {
    title: 'Empty Line Cleaner',
    description:
      'Remove or collapse unnecessary blank lines added while pasting text.',
    trimEachLine: 'Trim each line',
    collapseMultipleBlanks: 'Collapse multiple blanks instead',
    input: 'Input',
    cleaned: 'Cleaned',
    copy: 'Copy',
    copied: 'Copied',
    sample:
      'Text copied from somewhere\n\n\ncan contain\n\nextra blank lines.\n\n\nClean it here.',
  },
  ko: {
    title: '빈 줄 정리기',
    description: '붙여넣기 중 끼어든 불필요한 빈 줄을 삭제하거나 압축합니다.',
    trimEachLine: '각 줄 앞뒤 공백 제거',
    collapseMultipleBlanks: '빈 줄 여러 개를 하나로 압축',
    input: '입력',
    cleaned: '정리 결과',
    copy: '복사',
    copied: '복사됨',
    sample:
      '복사한 텍스트에\n\n\n불필요한 빈줄이\n\n끼어 있을 때\n\n\n정리합니다.',
  },
  ja: {
    title: '空行クリーナー',
    description: '貼り付け時に増えた不要な空行を削除または圧縮します。',
    trimEachLine: '各行をトリム',
    collapseMultipleBlanks: '複数の空行を圧縮',
    input: '入力',
    cleaned: '整理後',
    copy: 'コピー',
    copied: 'コピー済み',
    sample:
      'コピーしたテキストに\n\n\n不要な空行が\n\n入ったら\n\n\nここで整理します。',
  },
  'zh-Hans': {
    title: '空行清理器',
    description: '删除或压缩粘贴文本时多出的空行。',
    trimEachLine: '修剪每一行',
    collapseMultipleBlanks: '压缩多个空行',
    input: '输入',
    cleaned: '清理结果',
    copy: '复制',
    copied: '已复制',
    sample: '复制来的文本\n\n\n可能会包含\n\n多余空行。\n\n\n在这里清理。',
  },
  'zh-Hant': {
    title: '空行清理器',
    description: '刪除或壓縮貼上文字時多出的空行。',
    trimEachLine: '修剪每一行',
    collapseMultipleBlanks: '壓縮多個空行',
    input: '輸入',
    cleaned: '清理結果',
    copy: '複製',
    copied: '已複製',
    sample: '複製來的文字\n\n\n可能會包含\n\n多餘空行。\n\n\n在這裡清理。',
  },
  es: {
    title: 'Limpiador de líneas vacías',
    description:
      'Elimina o compacta líneas vacías innecesarias al pegar texto.',
    trimEachLine: 'Recortar cada línea',
    collapseMultipleBlanks: 'Compactar líneas vacías múltiples',
    input: 'Entrada',
    cleaned: 'Limpio',
    copy: 'Copiar',
    copied: 'Copiado',
    sample:
      'El texto copiado\n\n\npuede contener\n\nlíneas vacías extra.\n\n\nLímpialo aquí.',
  },
  pt: {
    title: 'Limpador de linhas vazias',
    description:
      'Remova ou compacte linhas vazias desnecessárias ao colar texto.',
    trimEachLine: 'Aparar cada linha',
    collapseMultipleBlanks: 'Compactar linhas vazias múltiplas',
    input: 'Entrada',
    cleaned: 'Limpo',
    copy: 'Copiar',
    copied: 'Copiado',
    sample:
      'Texto copiado\n\n\npode conter\n\nlinhas vazias extras.\n\n\nLimpe aqui.',
  },
  de: {
    title: 'Leerzeilen-Bereiniger',
    description:
      'Unnötige Leerzeilen beim Einfügen entfernen oder zusammenfassen.',
    trimEachLine: 'Jede Zeile trimmen',
    collapseMultipleBlanks: 'Mehrere Leerzeilen zusammenfassen',
    input: 'Eingabe',
    cleaned: 'Bereinigt',
    copy: 'Kopieren',
    copied: 'Kopiert',
    sample:
      'Kopierter Text\n\n\nkann zusätzliche\n\nLeerzeilen enthalten.\n\n\nHier bereinigen.',
  },
  fr: {
    title: 'Nettoyeur de lignes vides',
    description:
      'Supprimez ou compressez les lignes vides ajoutées au collage.',
    trimEachLine: 'Rogner chaque ligne',
    collapseMultipleBlanks: 'Compresser les lignes vides multiples',
    input: 'Entrée',
    cleaned: 'Nettoyé',
    copy: 'Copier',
    copied: 'Copié',
    sample:
      'Le texte copié\n\n\npeut contenir\n\ndes lignes vides.\n\n\nNettoyez-le ici.',
  },
}
