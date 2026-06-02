import { createFileRoute } from '@tanstack/react-router'
import { SvgOptimizerPreviewer } from '@/feature/visual/svg-optimizer-previewer/component/SvgOptimizerPreviewer.tsx'

export const Route = createFileRoute('/visual/svg-optimizer-previewer')({
  component: SvgOptimizerPreviewer,
})
