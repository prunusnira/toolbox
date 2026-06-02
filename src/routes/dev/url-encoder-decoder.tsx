import { createFileRoute } from '@tanstack/react-router'
import { UrlEncoderDecoder } from '@/feature/dev/url-encoder-decoder/component/UrlEncoderDecoder.tsx'

export const Route = createFileRoute('/dev/url-encoder-decoder')({
  component: UrlEncoderDecoder,
})
