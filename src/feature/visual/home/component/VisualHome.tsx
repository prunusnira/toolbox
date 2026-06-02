import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { ToolListSection } from '@/feature/common/toolbox/component/ToolListSection.tsx'
import { visualHomeTranslations } from '../i18n/translations.ts'

export function VisualHome() {
  const lang = useAtomValue(languageAtom)
  const t = visualHomeTranslations[lang]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <ToolListSection
        icon="🎨"
        title={t.title}
        description={t.lead}
        tools={t.tools}
      />
    </div>
  )
}