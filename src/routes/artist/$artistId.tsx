import React from 'react'
import { useParams } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';
import { getArtist, getArtistAlbums, getArtistTopTracks } from '@shared/api/spotifyClient';
import { useQuery } from '@tanstack/react-query';
import ArtistAlbums from '@entities/artist/ui/ArtistAlbums';
import ArtistMainInfo from '@entities/artist/ui/ArtistMainInfo';
import ArtistTopTracks from '@entities/artist/ui/ArtistTopTracks';

function ArtistPage() {
  const artistId = useParams({
    from: '/artist/$artistId',
    select: (params) => params.artistId,
  });

  const { data: albumsData, isLoading: albumsLoading, error: albumsError } = useQuery({
    queryKey: ['artist', artistId],
    queryFn: () => getArtistAlbums(artistId),
  });

  const { data: tracksData, isLoading: tracksLoading, error: tracksError } = useQuery({
    queryKey: ['tracks', artistId],
    queryFn: () => getArtistTopTracks(artistId),
  });

  const { data: artistData, isLoading: artistLoading, error: artistError } = useQuery({
    queryKey: ['artist', 'info', artistId],
    queryFn: () => getArtist(artistId),
  });

  if (albumsLoading || tracksLoading ) {
    return <div className='mx-auto my-auto flex justify-center items-center'>Loading...</div>;
  }

  if (albumsError || tracksError) {
    return <div>Error: {albumsError?.message || tracksError?.message}</div>;
  }

  return (
    <div>
      <ArtistMainInfo artistInfo={artistData} />
      <ArtistTopTracks tracks={tracksData} artist={undefined} />
      <ArtistAlbums artistInfo={artistData} albums={albumsData} />
    </div>
  );
}

export const Route = createFileRoute('/artist/$artistId')({
  component: ArtistPage,
});

export default ArtistPage;
