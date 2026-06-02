import { createFileRoute } from '@tanstack/react-router'
import { ColorConverter } from '@/feature/visual/color-converter/component/ColorConverter.tsx'

export const Route = createFileRoute('/visual/color-converter')({
  component: ColorConverterPage,
})

function ColorConverterPage() {
  return (
    <article className="w-full h-full">
      <ColorConverter />
    </article>
  )
}
