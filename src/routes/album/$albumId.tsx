import React from 'react'
import { createFileRoute, useLocation, useParams } from '@tanstack/react-router'
import AlbumMainPage from '@entities/album/ui/AlbumMainPage';

export const Route = createFileRoute('/album/$albumId')({
  component: Album,
})

function Album() {
  const { albumId } = useParams({ from: '/album/$albumId' });

  return <div>
    <AlbumMainPage albumId={albumId} type="album"/>
  </div>
}
