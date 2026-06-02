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
import { urlEncoderDecoderTranslations } from '../i18n/translations.ts'

function safe(fn: () => string, fallback: string): string {
  try {
    return fn()
  } catch {
    return fallback
  }
}

type Mode = 'uri' | 'component'

export function UrlEncoderDecoder() {
  const lang = useAtomValue(languageAtom)
  const t = urlEncoderDecoderTranslations[lang]
  const [input, setInput] = useState(
    'https://tools.nira.one/search?q=Nira%27s%20Toolbox&mode=dev',
  )
  const [mode, setMode] = useState<Mode>('component')

  const encoded = useMemo(
    () =>
      mode === 'uri'
        ? safe(() => encodeURI(input), t.invalidEncodedText)
        : safe(() => encodeURIComponent(input), t.invalidEncodedText),
    [input, mode, t.invalidEncodedText],
  )
  const decoded = useMemo(
    () =>
      mode === 'uri'
        ? safe(() => decodeURI(input), t.invalidEncodedText)
        : safe(() => decodeURIComponent(input), t.invalidEncodedText),
    [input, mode, t.invalidEncodedText],
  )
  const params = useMemo(() => {
    try {
      const url = input.includes('://')
        ? new URL(input)
        : new URL(`https://example.com/?${input.replace(/^\?/, '')}`)
      return JSON.stringify(
        Object.fromEntries(url.searchParams.entries()),
        null,
        2,
      )
    } catch {
      return '{}'
    }
  }, [input])

  return (
    <ToolPage title={t.title} description={t.description}>
      <Panel title={t.input}>
        <textarea
          className={textareaClass}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </Panel>
      <section className="rounded-lg border border-gray-200 bg-white">
        <div className="flex min-h-12 flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-3 py-2">
          <div className="flex items-center gap-4">
            <label className="flex cursor-pointer items-center gap-1.5 text-sm">
              <input
                type="radio"
                name="mode"
                checked={mode === 'uri'}
                onChange={() => setMode('uri')}
                className="accent-blue-500"
              />
              <span className="font-mono font-medium text-gray-700">{t.modeUri}</span>
            </label>
            <label className="flex cursor-pointer items-center gap-1.5 text-sm">
              <input
                type="radio"
                name="mode"
                checked={mode === 'component'}
                onChange={() => setMode('component')}
                className="accent-blue-500"
              />
              <span className="font-mono font-medium text-gray-700">{t.modeUriComponent}</span>
            </label>
          </div>
        </div>
      </section>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel
          title={t.encoded}
          actions={<CopyButton text={encoded} label={t.copy} copiedLabel={t.copied} />}
        >
          <ResultBox value={encoded} />
        </Panel>
        <Panel
          title={t.decoded}
          actions={<CopyButton text={decoded} label={t.copy} copiedLabel={t.copied} />}
        >
          <ResultBox value={decoded} />
        </Panel>
      </div>
      <Panel
        title={t.queryJson}
        actions={<CopyButton text={params} label={t.copy} copiedLabel={t.copied} />}
      >
        <ResultBox value={params} />
      </Panel>
    </ToolPage>
  )
}