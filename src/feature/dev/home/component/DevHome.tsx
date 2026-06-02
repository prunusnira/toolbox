import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { ToolListSection } from '@/feature/common/toolbox/component/ToolListSection.tsx'
import { devHomeTranslations } from '../i18n/translations.ts'

export function DevHome() {
  const lang = useAtomValue(languageAtom)
  const t = devHomeTranslations[lang]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <ToolListSection
        icon="🛠️"
        title={t.title}
        description={t.lead}
        tools={t.tools}
      />
    </div>
  )
}