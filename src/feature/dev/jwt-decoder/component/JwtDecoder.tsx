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
  encodeBase64Url,
  formatMaybeTimestamp,
} from '@/feature/common/toolbox/data/textTools.tsx'
import { jwtDecoderTranslations } from '../i18n/translations.ts'

export function JwtDecoder() {
  const lang = useAtomValue(languageAtom)
  const t = jwtDecoderTranslations[lang]
  const [token, setToken] = useState('')
  const decoded = useMemo(() => {
    if (!token.trim()) return { header: '', payload: '', error: '' }
    const parts = token.trim().split('.')
    if (parts.length < 2)
      return { header: '', payload: '', error: t.invalidShape }
    try {
      const header = JSON.parse(encodeBase64Url(parts[0] ?? '')) as Record<
        string,
        unknown
      >
      const payload = JSON.parse(encodeBase64Url(parts[1] ?? '')) as Record<
        string,
        unknown
      >
      const exp = formatMaybeTimestamp(payload.exp)
      const iat = formatMaybeTimestamp(payload.iat)
      return {
        header: JSON.stringify(header, null, 2),
        payload: JSON.stringify(
          {
            ...payload,
            ...(exp ? { exp_readable: exp } : {}),
            ...(iat ? { iat_readable: iat } : {}),
          },
          null,
          2,
        ),
        error: '',
      }
    } catch (error) {
      return {
        header: '',
        payload: '',
        error: error instanceof Error ? error.message : 'Invalid JWT',
      }
    }
  }, [t.invalidShape, token])

  return (
    <ToolPage title={t.title} description={t.description}>
      <Panel title={t.token}>
        <textarea
          className={textareaClass}
          value={token}
          onChange={(event) => setToken(event.target.value)}
        />
      </Panel>
      {decoded.error && (
        <p className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {decoded.error}
        </p>
      )}
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel
          title={t.header}
          actions={
            <CopyButton
              text={decoded.header}
              label={t.copy}
              copiedLabel={t.copied}
            />
          }
        >
          <ResultBox value={decoded.header} />
        </Panel>
        <Panel
          title={t.payload}
          actions={
            <CopyButton
              text={decoded.payload}
              label={t.copy}
              copiedLabel={t.copied}
            />
          }
        >
          <ResultBox value={decoded.payload} />
        </Panel>
      </div>
    </ToolPage>
  )
}
