import { createFileRoute } from '@tanstack/react-router'
import { DiffViewer } from '@/feature/dev/diff-viewer/component/DiffViewer.tsx'

export const Route = createFileRoute('/dev/diff-viewer')({
  component: DiffViewer,
})
