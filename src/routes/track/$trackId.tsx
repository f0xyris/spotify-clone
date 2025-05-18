import React from 'react'
import { createFileRoute, useParams } from '@tanstack/react-router'
import TrackMainPage from '@entities/track/ui/TrackMainPage'

export const Route = createFileRoute('/track/$trackId')({
  component: Track,
})

function Track() {
  const params = useParams({ from: '/track/$trackId' });
  const { trackId } = params;

  return <div>
    <TrackMainPage trackId={trackId}/>
  </div>
}
