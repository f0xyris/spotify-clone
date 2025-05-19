import React from "react";
import { getAlbum, getPlaylist } from "@shared/api/spotifyClient";
import { useQuery } from "@tanstack/react-query";
import PlaylistMainInfo from "@entities/playlist/ui/PlaylistMainInfo";
import PlaylistTracks from "@entities/playlist/ui/PlaylistTracks";
import { CiClock2 } from "react-icons/ci";

const AlbumMainPage = ({ albumId, type }) => {
  const isAlbum = type === "album";
  const isPlaylist = type === "playlist";

  const { data, isLoading, isError } = useQuery({
    queryKey: [type, albumId],
    queryFn: () =>
      isAlbum
        ? getAlbum(albumId)
        : isPlaylist
          ? getPlaylist(albumId)
          : Promise.reject(),
    enabled: !!albumId || !!type,
    retry: false,
  });

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  if (isError) {
    return <p>Ошибка загрузки данных.</p>;
  }

  return (
    <>
      <PlaylistMainInfo obj={data} />
      <div className="flex flex-col px-5">
        <div className="md:flex hidden flex-row justify-between items-center gap-4 border-b-1 pb-2 px-4 border-amber-50/40">
          <span>#</span>
          <span className="flex-1">Название</span>
          <span className="flex items-center justify-center w-6 h-6 leading-none overflow-visible align-middle">
            <CiClock2 className="w-5 h-5 text-white" />
          </span>
        </div>
        <PlaylistTracks tracks={data?.tracks?.items || []} />
      </div>
    </>
  );
};

export default AlbumMainPage;
