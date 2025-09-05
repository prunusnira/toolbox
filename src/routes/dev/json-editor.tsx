import { createFileRoute } from '@tanstack/react-router'
import { JsonVisualDisplay } from '@/feature/dev/json-editor/component/display/Json.visual.display.tsx'
import { JsonVisualEditor } from '@/feature/dev/json-editor/component/editor/Json.visual.editor.tsx'

export const Route = createFileRoute('/dev/json-editor')({
  component: JsonEditor,
})

function JsonEditor() {
  return (
    <article className="flex flex-col lg:flex-row w-full h-full gap-3 p-3">
      <JsonVisualEditor />
      <JsonVisualDisplay />
    </article>
  )
}