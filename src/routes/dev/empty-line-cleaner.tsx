import { createFileRoute } from '@tanstack/react-router'
import { EmptyLineCleaner } from '@/feature/dev/empty-line-cleaner/component/EmptyLineCleaner.tsx'

export const Route = createFileRoute('/dev/empty-line-cleaner')({
  component: EmptyLineCleaner,
})
