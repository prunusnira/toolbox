import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { isDarkAtom } from '@/theme/themeAtom.ts'
import {
  CopyButton,
  Panel,
  ResultBox,
  ToolPage,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import { boxShadowGeneratorTranslations } from '../i18n/translations.ts'

type NumberControl = [
  string,
  number,
  Dispatch<SetStateAction<number>>,
  number,
  number,
]

export function BoxShadowGenerator() {
  const lang = useAtomValue(languageAtom)
  const isDark = useAtomValue(isDarkAtom)
  const t = boxShadowGeneratorTranslations[lang]
  const [x, setX] = useState(0)
  const [y, setY] = useState(12)
  const [blur, setBlur] = useState(28)
  const [spread, setSpread] = useState(-8)
  const [opacity, setOpacity] = useState(28)
  const shadow = `${x}px ${y}px ${blur}px ${spread}px rgb(15 23 42 / ${opacity}%)`
  const previewShadow = isDark
    ? `${x}px ${y}px ${blur}px ${spread}px rgb(255 255 255 / ${Math.max(opacity, 35)}%)`
    : shadow
  const controls: NumberControl[] = [
    [t.x, x, setX, -60, 60],
    [t.y, y, setY, -60, 60],
    [t.blur, blur, setBlur, 0, 120],
    [t.spread, spread, setSpread, -60, 60],
    [t.opacity, opacity, setOpacity, 0, 100],
  ]

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="grid gap-4 lg:grid-cols-[22rem_1fr]">
        <Panel
          title={t.controls}
          actions={
            <CopyButton
              text={`box-shadow: ${shadow};`}
              label={t.copy}
              copiedLabel={t.copied}
            />
          }
        >
          {controls.map(([label, value, setter, min, max]) => (
            <label
              key={label}
              className="mb-3 grid gap-1 text-sm text-gray-600"
            >
              {label}
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(event) => setter(Number(event.target.value))}
              />
            </label>
          ))}
        </Panel>
        <Panel title={t.preview}>
          {isDark && (
            <p className="mb-3 rounded border border-blue-100 bg-blue-50 p-3 text-sm text-blue-800">
              {t.darkPreviewNotice}
            </p>
          )}
          <div className="grid min-h-72 place-items-center rounded bg-gray-50">
            <div
              className="h-36 w-52 rounded-lg bg-white"
              style={{ boxShadow: previewShadow }}
            />
          </div>
          <ResultBox value={`box-shadow: ${shadow};`} />
        </Panel>
      </div>
    </ToolPage>
  )
}
