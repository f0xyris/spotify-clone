import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import TrackMainPage from '@entities/track/ui/TrackMainPage'

export const Route = createFileRoute('/track/$trackId')({
  component: Track,
})

function Track() {
  return <div>
    <TrackMainPage />
  </div>
}
