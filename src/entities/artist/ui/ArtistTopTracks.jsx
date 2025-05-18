import React from "react";
import PlaylistTracks from "@entities/playlist/ui/PlaylistTracks";

function ArtistTopTracks({ tracks, artist }) {
  return (
    <div className="my-10">
      <h1 className="text-xl font-bold items-start pl-4 mb-5">
        <span className="md:text-2xl">
          {artist?.name || tracks?.[0]?.artists?.[0]?.name}
        </span>
        : популярные треки
      </h1>
      <PlaylistTracks tracks={tracks} />
    </div>
  );
}

export default ArtistTopTracks;
