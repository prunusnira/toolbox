import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { devHomeTranslations } from '../i18n/translations.ts'

export function DevHome() {
  const lang = useAtomValue(languageAtom)
  const t = devHomeTranslations[lang]

  return (
    <div className="flex h-full flex-col items-center justify-center p-8">
      <div className="max-w-2xl space-y-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">🛠️ {t.title}</h1>
        <p className="text-lg leading-relaxed text-gray-600">{t.lead}</p>
        <p className="text-gray-500 leading-relaxed">{t.description}</p>
        <div className="pt-4">
          <p className="text-sm text-gray-400">{t.instruction}</p>
        </div>
      </div>
    </div>
  )
}
