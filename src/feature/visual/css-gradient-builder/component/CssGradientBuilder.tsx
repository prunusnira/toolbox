import { useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  CopyButton,
  Panel,
  ResultBox,
  ToolPage,
  inputClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import { cssGradientBuilderTranslations } from '../i18n/translations.ts'

export function CssGradientBuilder() {
  const lang = useAtomValue(languageAtom)
  const t = cssGradientBuilderTranslations[lang]
  const [start, setStart] = useState('#2563eb')
  const [end, setEnd] = useState('#22c55e')
  const [angle, setAngle] = useState(135)
  const css = `linear-gradient(${angle}deg, ${start}, ${end})`

  return (
    <ToolPage title={t.title} description={t.description}>
      <Panel
        title={t.controls}
        actions={
          <CopyButton
            text={`background: ${css};`}
            label={t.copy}
            copiedLabel={t.copied}
          />
        }
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            type="color"
            className="h-11 w-full"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />
          <input
            type="color"
            className="h-11 w-full"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
          />
          <input
            type="number"
            className={inputClass}
            min={0}
            max={360}
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
          />
        </div>
      </Panel>
      <div
        className="h-72 rounded-lg border border-gray-200"
        style={{ background: css }}
      />
      <ResultBox value={`background: ${css};`} />
    </ToolPage>
  )
}
