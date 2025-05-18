import React from "react";
import { getAlbum } from "@shared/api/spotifyClient";
import { useQuery } from "@tanstack/react-query";
import ArtistTopTracks from "@entities/artist/ui/ArtistTopTracks";
import PlaylistMainInfo from "@entities/playlist/ui/PlaylistMainInfo";
import PlaylistTracks from "@entities/playlist/ui/PlaylistTracks";
import { CiClock2 } from "react-icons/ci";

const AlbumMainPage = ({ albumId }) => {
  const {
    data: albumsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["album", albumId],
    queryFn: () => getAlbum(albumId),
  });

  console.log(albumsData);

  return (
    <>
      <PlaylistMainInfo obj={albumsData} />
      <div className="flex flex-col px-10">
        <div className="md:flex flex-row justify-between items-center hidden gap-4">
          <span>#</span>
          <span className="flex-1">Название</span>
          <span className="flex items-center justify-center w-6 h-6 leading-none overflow-visible align-middle">
            <CiClock2 className="w-5 h-5 text-white" />
          </span>
        </div>
        <PlaylistTracks tracks={albumsData?.tracks?.items} />
      </div>
    </>
  );
};

export default AlbumMainPage;
