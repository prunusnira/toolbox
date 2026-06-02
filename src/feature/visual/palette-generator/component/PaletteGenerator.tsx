import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  CopyButton,
  Panel,
  ToolPage,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import {
  contrastRatio,
  mixHex,
  rotateHue,
} from '@/feature/common/toolbox/data/visualTools.ts'
import { paletteGeneratorTranslations } from '../i18n/translations.ts'

export function PaletteGenerator() {
  const lang = useAtomValue(languageAtom)
  const t = paletteGeneratorTranslations[lang]
  const [base, setBase] = useState('#2563eb')
  const palette = useMemo(
    () => [
      [t.base, base],
      [t.tint, mixHex(base, 0.32)],
      [t.shade, mixHex(base, -0.28)],
      [t.complement, rotateHue(base, 180)],
      [t.analogous, rotateHue(base, 32)],
      [t.triadic, rotateHue(base, 120)],
    ],
    [base, t.analogous, t.base, t.complement, t.shade, t.tint, t.triadic],
  )
  const css = palette
    .map(
      ([name, color]) =>
        `--${name.toLowerCase().replace(/\s+/g, '-')}: ${color};`,
    )
    .join('\n')

  return (
    <ToolPage title={t.title} description={t.description}>
      <Panel
        title={t.baseColor}
        actions={
          <CopyButton text={css} label={t.copy} copiedLabel={t.copied} />
        }
      >
        <input
          type="color"
          className="h-11 w-24"
          value={base}
          onChange={(event) => setBase(event.target.value)}
        />
      </Panel>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {palette.map(([name, color]) => (
          <div
            key={name}
            className="rounded-lg border border-gray-200 bg-white p-3"
          >
            <div
              className="mb-3 h-24 rounded"
              style={{ backgroundColor: color }}
            />
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-gray-700">{name}</p>
                <code className="text-xs text-gray-500">{color}</code>
              </div>
              <CopyButton text={color} label={t.copy} copiedLabel={t.copied} />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              {t.contrastVsWhite}: {contrastRatio(color, '#ffffff')}
            </p>
          </div>
        ))}
      </div>
    </ToolPage>
  )
}
