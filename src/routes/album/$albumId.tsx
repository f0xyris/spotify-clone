import React from 'react'
import { createFileRoute, useParams } from '@tanstack/react-router'
import AlbumMainPage from '@entities/album/ui/AlbumMainPage';

export const Route = createFileRoute('/album/$albumId')({
  component: Album,
})

function Album() {
  const params = useParams({ from: '/album/$albumId' });
  const { albumId } = params;

  return <div>
    <AlbumMainPage albumId={albumId}/>
  </div>
}
