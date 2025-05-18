import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getTrack,
  getArtist,
  getArtistTopTracks,
  getArtistAlbums,
} from "@shared/api/spotifyClient";
import ArtistTopTracks from "@entities/artist/ui/ArtistTopTracks";
import ArtistAlbums from "@entities/artist/ui/ArtistAlbums";
import PlaybackControls from "@features/player/ui/PlaybackControls";
import BackButton from "@shared/ui/BackButton";
import PlaylistMainInfo from "@entities/playlist/ui/PlaylistMainInfo";

function TrackMainPage({ trackId }) {
  const { data: trackData, isLoading: trackLoading } = useQuery({
    queryKey: ["track", trackId],
    queryFn: () => getTrack(trackId),
    enabled: !!trackId,
  });

  const artistId = trackData?.artists?.[0]?.id;

  const { data: artistData, isLoading: artistLoading } = useQuery({
    queryKey: ["artist", artistId],
    queryFn: () => getArtist(artistId),
    enabled: !!artistId,
  });

  const { data: tracksData, isLoading: tracksLoading } = useQuery({
    queryKey: ["tracks", artistId],
    queryFn: () => getArtistTopTracks(artistId),
    enabled: !!artistId,
  });

  const { data: albumsData, isLoading: albumsLoading } = useQuery({
    queryKey: ["albums", artistId],
    queryFn: () => getArtistAlbums(artistId),
    enabled: !!artistId,
  });

  if (trackLoading || artistLoading || tracksLoading || albumsLoading) {
    return <p>Loading...</p>;
  }

  if (!trackData) {
    return <p>Track not found</p>;
  }

  return (
    <div>
      <PlaylistMainInfo obj={trackData} />
      <ArtistTopTracks artist={artistData} tracks={tracksData} />
      <ArtistAlbums albums={albumsData} />
    </div>
  );
}

export default TrackMainPage;
