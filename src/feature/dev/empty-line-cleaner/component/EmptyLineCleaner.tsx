import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  CopyButton,
  Panel,
  ToolPage,
  textareaClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import { emptyLineCleanerTranslations } from '../i18n/translations.ts'

export function EmptyLineCleaner() {
  const lang = useAtomValue(languageAtom)
  const t = emptyLineCleanerTranslations[lang]
  const [input, setInput] = useState(t.sample)
  const [trimLines, setTrimLines] = useState(true)
  const [collapse, setCollapse] = useState(false)
  const output = useMemo(() => {
    const lines = input
      .split('\n')
      .map((line) => (trimLines ? line.trim() : line))
    if (collapse) return lines.join('\n').replace(/\n{3,}/g, '\n\n')
    return lines.filter((line) => line.trim().length > 0).join('\n')
  }, [collapse, input, trimLines])

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={trimLines}
            onChange={(event) => setTrimLines(event.target.checked)}
          />
          {t.trimEachLine}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={collapse}
            onChange={(event) => setCollapse(event.target.checked)}
          />
          {t.collapseMultipleBlanks}
        </label>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={t.input}>
          <textarea
            className={textareaClass}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Panel>
        <Panel
          title={t.cleaned}
          actions={
            <CopyButton text={output} label={t.copy} copiedLabel={t.copied} />
          }
        >
          <textarea className={textareaClass} value={output} readOnly />
        </Panel>
      </div>
    </ToolPage>
  )
}
