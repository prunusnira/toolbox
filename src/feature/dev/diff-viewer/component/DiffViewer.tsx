import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  Panel,
  ToolPage,
  textareaClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import { diffLines } from '@/feature/common/toolbox/data/textTools.tsx'
import { diffViewerTranslations } from '../i18n/translations.ts'

export function DiffViewer() {
  const lang = useAtomValue(languageAtom)
  const t = diffViewerTranslations[lang]
  const [left, setLeft] = useState('one\ntwo\nthree')
  const [right, setRight] = useState('one\nTWO\nthree\nfour')
  const diff = useMemo(() => diffLines(left, right), [left, right])

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={t.original}>
          <textarea
            className={textareaClass}
            value={left}
            onChange={(event) => setLeft(event.target.value)}
          />
        </Panel>
        <Panel title={t.changed}>
          <textarea
            className={textareaClass}
            value={right}
            onChange={(event) => setRight(event.target.value)}
          />
        </Panel>
      </div>
      <Panel title={t.diff}>
        <div className="overflow-auto rounded border border-gray-200 font-mono text-sm">
          {diff.map((line, index) => (
            <div
              key={`${line.type}-${index}`}
              className={
                line.type === 'added'
                  ? 'bg-green-50 px-3 py-1 text-green-800'
                  : line.type === 'removed'
                    ? 'bg-red-50 px-3 py-1 text-red-700'
                    : 'px-3 py-1 text-gray-700'
              }
            >
              <span className="mr-2 inline-block w-4">
                {line.type === 'added'
                  ? '+'
                  : line.type === 'removed'
                    ? '-'
                    : ' '}
              </span>
              {line.text || ' '}
            </div>
          ))}
        </div>
      </Panel>
    </ToolPage>
  )
}
