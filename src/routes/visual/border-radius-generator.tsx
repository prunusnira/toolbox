import { createFileRoute } from '@tanstack/react-router'
import { BorderRadiusGenerator } from '@/feature/visual/border-radius-generator/component/BorderRadiusGenerator.tsx'

export const Route = createFileRoute('/visual/border-radius-generator')({
  component: BorderRadiusGenerator,
})
