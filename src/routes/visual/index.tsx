import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/visual/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">🎨 Visual Tools</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          간혹 필요한데 마땅히 쓸 만한 도구가 없거나, 원하는 기능이 딱 맞게 없어서 직접 만들게 된 공간입니다.
        </p>
        <p className="text-gray-500 leading-relaxed">
          색상을 변환하거나, 이미지를 처리하거나, 시각적으로 확인해야 하는 작업들을
          <br />
          브라우저 안에서 바로 사용할 수 있도록 제공합니다.
        </p>
        <div className="pt-4">
          <p className="text-sm text-gray-400">왼쪽 메뉴에서 원하는 도구를 선택해 주세요.</p>
        </div>
      </div>
    </div>
  )
}