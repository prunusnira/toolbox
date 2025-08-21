import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/visual/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/visual/"!</div>
}
