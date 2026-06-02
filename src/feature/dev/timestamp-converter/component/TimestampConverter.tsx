import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  Panel,
  ResultBox,
  ToolPage,
  inputClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import { timestampConverterTranslations } from '../i18n/translations.ts'

export function TimestampConverter() {
  const lang = useAtomValue(languageAtom)
  const t = timestampConverterTranslations[lang]
  const now = Math.floor(Date.now() / 1000)
  const [timestamp, setTimestamp] = useState(String(now))
  const [dateInput, setDateInput] = useState(
    new Date().toISOString().slice(0, 16),
  )
  const date = useMemo(() => {
    const numeric = Number(timestamp)
    const ms = numeric > 10_000_000_000 ? numeric : numeric * 1000
    return new Date(ms)
  }, [timestamp])
  const fromDate = useMemo(
    () => Math.floor(new Date(dateInput).getTime() / 1000),
    [dateInput],
  )

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={t.timestamp}>
          <input
            className={`${inputClass} mb-3 w-full`}
            value={timestamp}
            onChange={(event) => setTimestamp(event.target.value)}
          />
          <ResultBox
            value={[
              `${t.seconds}: ${Math.floor(date.getTime() / 1000)}`,
              `${t.milliseconds}: ${date.getTime()}`,
              `${t.local}: ${date.toLocaleString()}`,
              `${t.utc}: ${date.toISOString()}`,
            ].join('\n')}
          />
        </Panel>
        <Panel title={t.date}>
          <input
            type="datetime-local"
            className={`${inputClass} mb-3 w-full`}
            value={dateInput}
            onChange={(event) => setDateInput(event.target.value)}
          />
          <ResultBox
            value={`${t.seconds}: ${fromDate}\n${t.milliseconds}: ${fromDate * 1000}`}
          />
        </Panel>
      </div>
    </ToolPage>
  )
}
