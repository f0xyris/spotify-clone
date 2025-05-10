import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artist/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/artist/$id"!</div>
}
