import { useParams, useLocation } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';
import { getArtistAlbums, getArtistTopTracks } from '@shared/api/spotifyClient';
import { useQuery } from '@tanstack/react-query';
import ArtistAlbums from '@entities/artist/ui/ArtistAlbums';
import ArtistMainInfo from '@entities/artist/ui/ArtistMainInfo';
import ArtistTopTracks from '@entities/artist/ui/ArtistTopTracks';

function ArtistPage() {
  const location = useLocation();
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

  if (albumsLoading || tracksLoading ) {
    return <div className='mx-auto my-auto flex justify-center items-center'>Loading...</div>;
  }

  if (albumsError || tracksError) {
    console.log("artistId passed to useQuery:", artistId);
    return <div>Error: {albumsError?.message || tracksError?.message}</div>;
  }

  return (
    <div>
      <ArtistMainInfo artistInfo={location.state} />
      <ArtistTopTracks tracks={tracksData} />
      <ArtistAlbums albums={albumsData} />
    </div>
  );
}

export const Route = createFileRoute('/artist/$artistId')({
  component: ArtistPage,
});

export default ArtistPage;
