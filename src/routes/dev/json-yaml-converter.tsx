import { createFileRoute } from '@tanstack/react-router'
import { JsonYamlConverter } from '@/feature/dev/json-yaml-converter/component/JsonYamlConverter.tsx'

export const Route = createFileRoute('/dev/json-yaml-converter')({
  component: JsonYamlConverter,
})
