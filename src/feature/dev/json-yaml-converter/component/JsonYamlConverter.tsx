import { useMemo, useState } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import {
  CopyButton,
  Panel,
  ResultBox,
  ToolPage,
  primaryButtonClass,
  buttonClass,
  textareaClass,
} from '@/feature/common/toolbox/component/ToolLayout.tsx'
import {
  jsonToYaml,
  sampleJson,
  yamlToJson,
} from '@/feature/common/toolbox/data/textTools.tsx'
import { jsonYamlConverterTranslations } from '../i18n/translations.ts'

export function JsonYamlConverter() {
  const lang = useAtomValue(languageAtom)
  const t = jsonYamlConverterTranslations[lang]
  const [mode, setMode] = useState<'json-to-yaml' | 'yaml-to-json'>(
    'json-to-yaml',
  )
  const [input, setInput] = useState(sampleJson)
  const output = useMemo(() => {
    try {
      if (mode === 'json-to-yaml')
        return { value: jsonToYaml(JSON.parse(input)), error: '' }
      return { value: JSON.stringify(yamlToJson(input), null, 2), error: '' }
    } catch (error) {
      return {
        value: '',
        error: error instanceof Error ? error.message : 'Convert failed',
      }
    }
  }, [input, mode])

  return (
    <ToolPage title={t.title} description={t.description}>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={mode === 'json-to-yaml' ? primaryButtonClass : buttonClass}
          onClick={() => setMode('json-to-yaml')}
        >
          JSON to YAML
        </button>
        <button
          type="button"
          className={mode === 'yaml-to-json' ? primaryButtonClass : buttonClass}
          onClick={() => setMode('yaml-to-json')}
        >
          YAML to JSON
        </button>
      </div>
      {output.error && (
        <p className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {output.error}
        </p>
      )}
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={t.input}>
          <textarea
            className={textareaClass}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Panel>
        <Panel
          title={t.output}
          actions={
            <CopyButton
              text={output.value}
              label={t.copy}
              copiedLabel={t.copied}
            />
          }
        >
          <ResultBox value={output.value} />
        </Panel>
      </div>
    </ToolPage>
  )
}
