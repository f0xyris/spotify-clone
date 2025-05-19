import { createFileRoute, useParams } from '@tanstack/react-router';
import AlbumMainPage from '@entities/album/ui/AlbumMainPage'; 

export const Route = createFileRoute('/playlist/$playlistId')({
  component: () => {
    const { playlistId } = useParams({ from: '/playlist/$playlistId' });
    return <AlbumMainPage albumId={playlistId} type="playlist" />;
  },
});