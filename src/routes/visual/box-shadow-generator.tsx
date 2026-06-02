import { createFileRoute } from '@tanstack/react-router'
import { BoxShadowGenerator } from '@/feature/visual/box-shadow-generator/component/BoxShadowGenerator.tsx'

export const Route = createFileRoute('/visual/box-shadow-generator')({
  component: BoxShadowGenerator,
})
