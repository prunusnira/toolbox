import { createFileRoute } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { languageAtom, translationAtom } from '../i18n/languageAtom.ts'
import { ToolListSection } from '@/feature/common/toolbox/component/ToolListSection.tsx'
import { devHomeTranslations } from '@/feature/dev/home/i18n/translations.ts'
import { visualHomeTranslations } from '@/feature/visual/home/i18n/translations.ts'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const t = useAtomValue(translationAtom)
  const lang = useAtomValue(languageAtom)
  const devT = devHomeTranslations[lang]
  const visualT = visualHomeTranslations[lang]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/logo.png" alt="logo" className="h-16 w-16" />
          <h1 className="text-4xl font-bold text-gray-900">
            {t.menu.home}
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.home.description}
        </p>
      </div>

      {/* Feature Sections */}
      <div className="space-y-8">
        <ToolListSection
          icon="🛠️"
          title={t.home.devTools}
          description={t.home.devToolsDesc}
          tools={devT.tools}
        />
        <ToolListSection
          icon="🎨"
          title={t.home.visualTools}
          description={t.home.visualToolsDesc}
          tools={visualT.tools}
        />
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-400">
        <p>{t.home.footer}</p>
      </div>
    </div>
  )
}