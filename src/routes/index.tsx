import { createFileRoute, Link } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { translationAtom } from '../i18n/languageAtom.ts'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const t = useAtomValue(translationAtom);

  const features = [
    {
      category: t.home.devTools,
      description: t.home.devToolsDesc,
      icon: '🛠️',
      items: [
        {
          name: t.home.jsonEditor,
          path: '/dev/json-editor',
          description: t.home.jsonEditorDesc,
        },
        {
          name: t.home.markdownEditor,
          path: '/dev/markdown-editor',
          description: t.home.markdownEditorDesc,
        },
      ],
    },
    {
      category: t.home.visualTools,
      description: t.home.visualToolsDesc,
      icon: '🎨',
      items: [
        {
          name: t.home.colorConverter,
          path: '/visual/color-converter',
          description: t.home.colorConverterDesc,
        },
      ],
    },
  ];

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

      {/* Feature Cards */}
      <div className="space-y-8">
        {features.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{group.icon}</span>
              <h2 className="text-xl font-semibold text-gray-800">
                {group.category}
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-4 ml-10">
              {group.description}
            </p>
            <div className="ml-10 grid gap-4">
              {group.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-blue-300"
                >
                  <h3 className="text-lg font-medium text-blue-600 mb-1">
                    {item.name} →
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-400">
        <p>{t.home.footer}</p>
      </div>
    </div>
  )
}