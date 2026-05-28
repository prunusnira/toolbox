import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const features = [
  {
    category: 'Dev Tools',
    description: '개발 생산성을 높여주는 유틸리티 모음',
    icon: '🛠️',
    items: [
      {
        name: 'JSON Editor',
        path: '/dev/json-editor',
        description: 'JSON 데이터를 시각적으로 편집하고 확인할 수 있는 에디터',
      },
    ],
  },
  {
    category: 'Visual Tools',
    description: '색상 및 시각적 요소를 다루는 도구 모음',
    icon: '🎨',
    items: [
      {
        name: 'Color Converter',
        path: '/visual/color-converter',
        description: 'RGB, RGBA, HSV 등 다양한 색상 형식을 변환하는 도구',
      },
    ],
  },
]

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/logo.png" alt="logo" className="h-16 w-16" />
          <h1 className="text-4xl font-bold text-gray-900">
            Nira's Toolbox
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          다양한 작업을 간편하게 처리할 수 있도록 도와주는 도구와 유틸리티 모음입니다.
          생산성을 높이고 효율적인 워크플로우를 경험해 보세요.
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
        <p>https://tools.nira.one</p>
      </div>
    </div>
  )
}