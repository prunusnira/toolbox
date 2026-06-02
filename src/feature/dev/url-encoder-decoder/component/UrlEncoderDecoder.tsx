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

export function UrlEncoderDecoder() {
  const lang = useAtomValue(languageAtom)
  const t = urlEncoderDecoderTranslations[lang]
  const [input, setInput] = useState(
    'https://tools.nira.one/search?q=Nira%27s%20Toolbox&mode=dev',
  )
  const encoded = useMemo(() => encodeURIComponent(input), [input])
  const decoded = useMemo(() => {
    try {
      return decodeURIComponent(input)
    } catch {
      return t.invalidEncodedText
    }
  }, [input, t.invalidEncodedText])
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
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel
          title={t.encoded}
          actions={
            <CopyButton text={encoded} label={t.copy} copiedLabel={t.copied} />
          }
        >
          <ResultBox value={encoded} />
        </Panel>
        <Panel
          title={t.decoded}
          actions={
            <CopyButton text={decoded} label={t.copy} copiedLabel={t.copied} />
          }
        >
          <ResultBox value={decoded} />
        </Panel>
        <Panel
          title={t.queryJson}
          actions={
            <CopyButton text={params} label={t.copy} copiedLabel={t.copied} />
          }
        >
          <ResultBox value={params} />
        </Panel>
      </div>
    </ToolPage>
  )
}
