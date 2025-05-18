import React from "react";
import BackButton from "../../../shared/ui/BackButton";
import PlaybackControls from "@features/player/ui/PlaybackControls";

const PlaylistMainInfo = ({ obj }) => {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-black-900 p-4 flex flex-col gap-6">
      <BackButton />
      <div className="flex flex-col md:flex-row md:gap-4 md:items-end gap-5 flex-shrink-0">
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <img
            width="200"
            height="200"
            className="w-[200px] h-[200px] object-cover flex items-center justify-center md:rounded-md "
            src={obj?.album?.images?.[0]?.url || obj?.images?.[0]?.url}
            alt={obj?.name}
          />
        </div>
        <div className="md:flex-col">
          <h1 className="text-xl md:text-5xl lg:text-7xl font-bold items-start md:pb-7">
            {obj?.name}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex gap-1 font-bold">
              {obj?.artists?.map((artist, index) => (
                <span key={artist?.id}>
                  {artist?.name}
                  {index < obj.artists.length - 1 && (
                    <span className="mx-1"> •</span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex gap-2 text-white/60 md:pl-1">
              <div>
                <span className="hidden md:inline"> • </span>
                {obj?.album?.release_date.slice(0, 4) ||
                  obj?.release_date.slice(0, 4)}{" "}
                •
              </div>
              <span>
                {obj?.album?.total_tracks === 1
                  ? `${obj?.album?.total_tracks || obj?.total_tracks} трек`
                  : `${obj?.album?.total_tracks || obj?.total_tracks} треков`}
              </span>{" "}
              •
              <span>
                {Math.floor(obj?.duration_ms / 1000 / 60)}:
                {Math.floor((obj?.duration_ms / 1000) % 60)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <PlaybackControls track={obj} />
    </div>
  );
};

export default PlaylistMainInfo;
