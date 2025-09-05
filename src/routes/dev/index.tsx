import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dev/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">🛠️ Dev Tools</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          개발 과정에서 반복적으로 필요한 작업들을 조금 더 편하게 처리하기 위해 만들었습니다.
        </p>
        <p className="text-gray-500 leading-relaxed">
          JSON 구조를 시각적으로 편집하거나, 데이터를 변환하거나, 코드를 다듬는 등
          <br />
          개발과 관련된 각종 편의 도구들을 한 곳에 모아둔 공간입니다.
        </p>
        <div className="pt-4">
          <p className="text-sm text-gray-400">왼쪽 메뉴에서 원하는 도구를 선택해 주세요.</p>
        </div>
      </div>
    </div>
  )
}