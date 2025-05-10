import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/playlist/playlistId')({
  component: Playlist,
})

function Playlist() {
  return <div>Hello "/playlist/playlistId"!</div>
}
