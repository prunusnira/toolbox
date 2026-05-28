import { useCallback, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { jsonEditorTranslations } from '../../i18n/translations.ts'
import { jsonRootAtom, viewModeAtom, jsonTextAtom, treeToJsonString } from '@/feature/dev/json-editor/data/Json.ts'

export const JsonVisualDisplay = () => {
  const lang = useAtomValue(languageAtom)
  const t = jsonEditorTranslations[lang]
  const root = useAtomValue(jsonRootAtom)
  const viewMode = useAtomValue(viewModeAtom)
  const jsonText = useAtomValue(jsonTextAtom)
  const [copied, setCopied] = useState(false)
  const [viewFormat, setViewFormat] = useState<'pretty' | 'compact'>('pretty')

  const jsonString = viewMode === 'gui' ? treeToJsonString(root) : jsonText

  const displayJson =
    viewFormat === 'pretty' ? jsonString : JSON.stringify(JSON.parse(jsonString || '{}'))

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(displayJson)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = displayJson
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [displayJson])

  const handleDownload = useCallback(() => {
    const blob = new Blob([displayJson], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [displayJson])

  // Syntax-highlighted JSON
  const highlightedJson = useCallback((json: string): string => {
    try {
      return json.replace(
        /("(?:\\.|[^"\\])*")\s*:/g,
        '<span style="color: #7c3aed;">$1</span>:',
      )
        .replace(
          /:\s*("(?:\\.|[^"\\])*")/g,
          ': <span style="color: #16a34a;">$1</span>',
        )
        .replace(
          /:\s*(\d+\.?\d*)/g,
          ': <span style="color: #2563eb;">$1</span>',
        )
        .replace(
          /:\s*(true|false)/g,
          ': <span style="color: #d97706;">$1</span>',
        )
        .replace(
          /:\s*(null)/g,
          ': <span style="color: #6b7280;">$1</span>',
        )
    } catch {
      return json
    }
  }, [])

  return (
    <section className="flex-1 flex flex-col min-w-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-600">{t.jsonOutput}</span>
          <div className="flex rounded overflow-hidden border border-gray-300">
            <button
              onClick={() => setViewFormat('pretty')}
              className={`px-2 py-0.5 text-xs transition-colors ${
                viewFormat === 'pretty'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Pretty
            </button>
            <button
              onClick={() => setViewFormat('compact')}
              className={`px-2 py-0.5 text-xs transition-colors ${
                viewFormat === 'compact'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Compact
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className={`px-2.5 py-1 text-xs font-medium rounded border transition-all ${
              copied
                ? 'bg-green-50 border-green-300 text-green-700'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {copied ? t.copied : t.copy}
          </button>
          <button
            onClick={handleDownload}
            className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-white rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            {t.download}
          </button>
        </div>
      </div>

      {/* JSON content */}
      <div className="flex-1 overflow-auto p-3 bg-gray-50">
        <pre className="text-sm font-mono whitespace-pre">
          <code dangerouslySetInnerHTML={{ __html: highlightedJson(displayJson) }} />
        </pre>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-100 border-t border-gray-200 text-xs text-gray-500">
        <span>
          {displayJson.length.toLocaleString()} {t.chars} · {(new TextEncoder().encode(displayJson).length / 1024).toFixed(1)} KB
        </span>
        <span>
          Root: {root.type === 'object' ? 'Object' : 'Array'} · {t.rootItems}: {root.children.length}
        </span>
      </div>
    </section>
  )
}