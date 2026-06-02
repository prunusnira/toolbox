import { createFileRoute } from '@tanstack/react-router'
import { DevHome } from '@/feature/dev/home/component/DevHome.tsx'

export const Route = createFileRoute('/dev/')({
  component: DevHome,
})
