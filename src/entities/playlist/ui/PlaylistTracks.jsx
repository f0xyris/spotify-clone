import React from "react";
import { MdOutlineExplicit } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "@tanstack/react-router";

const PlaylistTracks = ({ tracks }) => {
  console.log(tracks);
  return (
    <div className="flex flex-col gap-4 mt-7">
      {tracks?.map((track, index) => (
        <Link
          key={track.id || track.track.id}
          to={`/${track.type}/${track.id}`}
        >
          <div
            style={track.is_playable === false ? { opacity: 0.2 } : {}}
            className="flex items-center gap-4"
          >
            <span>{index}</span>
            {track?.album?.images?.[0]?.url && (
              <img
                width="80"
                height="80"
                className="w-[80px] h-[80px]"
                src={track.album.images?.[0]?.url}
                alt={track.name}
              />
            )}

            <div className="flex flex-col items-start justify-center md:flex-row md:justify-evenly">
              <h1>{track.name}</h1>
              <p className="flex items-center gap-2">
                {Math.floor(track.duration_ms / 1000 / 60)}.
                {Math.floor((track.duration_ms / 1000) % 60)
                  .toString()
                  .padStart(2, "0")}{" "}
                min
                {track.explicit && <MdOutlineExplicit />}
                {track.popularity > 85 && (
                  <AiFillFire className="fill-amber-700" />
                )}
              </p>

              {track.is_playable === false && (
                <span className="text-gray-500 text-xs flex items-center gap-2">
                  <CgUnavailable /> Недоступно в вашем регионе
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlaylistTracks;
