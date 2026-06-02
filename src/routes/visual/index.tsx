import { createFileRoute } from '@tanstack/react-router'
import { VisualHome } from '@/feature/visual/home/component/VisualHome.tsx'

export const Route = createFileRoute('/visual/')({
  component: VisualHome,
})
