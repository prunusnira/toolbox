import { createFileRoute } from '@tanstack/react-router'
import MarkdownEditor from '@/feature/dev/markdown-editor/component/MarkdownEditor.tsx'

export const Route = createFileRoute('/dev/markdown-editor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownEditor />
}
