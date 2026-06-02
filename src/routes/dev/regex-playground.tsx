import { createFileRoute } from '@tanstack/react-router'
import { RegexPlayground } from '@/feature/dev/regex-playground/component/RegexPlayground.tsx'

export const Route = createFileRoute('/dev/regex-playground')({
  component: RegexPlayground,
})
