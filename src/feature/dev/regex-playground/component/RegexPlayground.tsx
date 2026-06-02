import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  Panel,
  ToolPage,
  inputClass,
  textareaClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import {
  getRegexMatches,
  renderHighlightedText,
} from '@/feature/common/toolbox/data/textTools.tsx'
import { regexPlaygroundTranslations } from '../i18n/translations.ts'

export function RegexPlayground() {
  const lang = useAtomValue(languageAtom)
  const t = regexPlaygroundTranslations[lang]
  const [pattern, setPattern] = useState('\\b\\w{5}\\b')
  const [flags, setFlags] = useState('gi')
  const [input, setInput] = useState(
    'Build small tools, test patterns, and keep useful snippets nearby.',
  )
  const { matches, error } = useMemo(
    () => getRegexMatches(input, pattern, flags),
    [flags, input, pattern],
  )

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Panel title={t.input}>
          <div className="mb-3 grid gap-2 sm:grid-cols-[1fr_8rem]">
            <input
              className={inputClass}
              value={pattern}
              onChange={(event) => setPattern(event.target.value)}
            />
            <input
              className={inputClass}
              value={flags}
              onChange={(event) => setFlags(event.target.value)}
            />
          </div>
          <textarea
            className={textareaClass}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Panel>
        <Panel title={`${t.matches} (${matches.length})`}>
          {error ? (
            <p className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          ) : (
            <div className="space-y-3">
              <pre className="min-h-32 whitespace-pre-wrap rounded border border-gray-200 bg-gray-50 p-3 font-mono text-sm text-gray-800">
                {renderHighlightedText(input, matches)}
              </pre>
              <div className="max-h-80 overflow-auto rounded border border-gray-200">
                {matches.map((match, index) => (
                  <div
                    key={`${match.index}-${index}`}
                    className="border-b border-gray-100 p-2 text-sm last:border-b-0"
                  >
                    <code>{match[0]}</code>
                    <span className="ml-2 text-gray-400">@ {match.index}</span>
                    {match.length > 1 && (
                      <div className="mt-1 text-xs text-gray-500">
                        {t.groups}: {match.slice(1).join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Panel>
      </div>
    </ToolPage>
  )
}
