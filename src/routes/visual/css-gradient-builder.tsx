import { createFileRoute } from '@tanstack/react-router'
import { CssGradientBuilder } from '@/feature/visual/css-gradient-builder/component/CssGradientBuilder.tsx'

export const Route = createFileRoute('/visual/css-gradient-builder')({
  component: CssGradientBuilder,
})
