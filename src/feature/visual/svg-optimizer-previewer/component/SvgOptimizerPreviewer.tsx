import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  CopyButton,
  Panel,
  ResultBox,
  ToolPage,
  textareaClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import {
  optimizeSvg,
  sampleSvg,
} from '@/feature/common/toolbox/data/visualTools.ts'
import { svgOptimizerPreviewerTranslations } from '../i18n/translations.ts'

export function SvgOptimizerPreviewer() {
  const lang = useAtomValue(languageAtom)
  const t = svgOptimizerPreviewerTranslations[lang]
  const [input, setInput] = useState(sampleSvg)
  const output = useMemo(() => optimizeSvg(input), [input])
  const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(output)}`

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={t.svg}>
          <textarea
            className={textareaClass}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Panel>
        <Panel
          title={t.preview}
          actions={
            <CopyButton text={output} label={t.copy} copiedLabel={t.copied} />
          }
        >
          <div className="mb-3 grid min-h-72 place-items-center rounded border border-gray-200 bg-gray-50">
            {output.startsWith('<svg') ? (
              <img
                src={src}
                alt="SVG preview"
                className="max-h-64 max-w-full"
              />
            ) : null}
          </div>
          <ResultBox value={output} />
        </Panel>
      </div>
    </ToolPage>
  )
}
