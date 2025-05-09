import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/album/$albumId')({
  component: Album,
})

function Album() {
  return <div>Hello "/album/$albumId"!</div>
}
