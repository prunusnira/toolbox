import { createFileRoute } from '@tanstack/react-router'
import { TimestampConverter } from '@/feature/dev/timestamp-converter/component/TimestampConverter.tsx'

export const Route = createFileRoute('/dev/timestamp-converter')({
  component: TimestampConverter,
})
