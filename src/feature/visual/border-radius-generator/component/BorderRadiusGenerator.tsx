import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  CopyButton,
  Panel,
  ResultBox,
  ToolPage,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import { borderRadiusGeneratorTranslations } from '../i18n/translations.ts'

type NumberControl = [
  string,
  number,
  Dispatch<SetStateAction<number>>,
  number,
  number,
]

export function BorderRadiusGenerator() {
  const lang = useAtomValue(languageAtom)
  const t = borderRadiusGeneratorTranslations[lang]
  const [tl, setTl] = useState(24)
  const [tr, setTr] = useState(8)
  const [br, setBr] = useState(32)
  const [bl, setBl] = useState(8)
  const radius = `${tl}px ${tr}px ${br}px ${bl}px`
  const controls: NumberControl[] = [
    [t.topLeft, tl, setTl, 0, 120],
    [t.topRight, tr, setTr, 0, 120],
    [t.bottomRight, br, setBr, 0, 120],
    [t.bottomLeft, bl, setBl, 0, 120],
  ]

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="grid gap-4 lg:grid-cols-[22rem_1fr]">
        <Panel
          title={t.controls}
          actions={
            <CopyButton
              text={`border-radius: ${radius};`}
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
          <div className="grid min-h-72 place-items-center rounded bg-gray-50">
            <div
              className="h-48 w-64 bg-blue-500"
              style={{ borderRadius: radius }}
            />
          </div>
          <ResultBox value={`border-radius: ${radius};`} />
        </Panel>
      </div>
    </ToolPage>
  )
}
