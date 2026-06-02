import { createFileRoute } from '@tanstack/react-router'
import { JwtDecoder } from '@/feature/dev/jwt-decoder/component/JwtDecoder.tsx'

export const Route = createFileRoute('/dev/jwt-decoder')({
  component: JwtDecoder,
})
