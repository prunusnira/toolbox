import { createFileRoute } from '@tanstack/react-router'
import { PaletteGenerator } from '@/feature/visual/palette-generator/component/PaletteGenerator.tsx'

export const Route = createFileRoute('/visual/palette-generator')({
  component: PaletteGenerator,
})
