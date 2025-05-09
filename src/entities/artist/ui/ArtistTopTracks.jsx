import React from "react";
import { MdOutlineExplicit } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "@tanstack/react-router";

function ArtistTopTracks({ tracks, artist }) {
  return (
    <div className="mt-10">
      <h1 className="p-4 text-xl">Популярные треки {artist}</h1>
      {tracks?.map((track) => (
        <Link
          key={track.id || track.track.id}
          to={`/${track.type}/${track.id}`}
          state={{
            name: track.name,
            image: track.images?.[0]?.url ?? null,
            followers: track.followers,
            obj: track,
          }}
        >
          <div
            style={!track.is_playable ? { opacity: 0.2 } : {}}
            className="flex items-center gap-4 p-4"
            onClick={() => console.log(track)}
          >
            <img
              width="80"
              height="80"
              className="w-[80px] h-[80px]"
              src={track.album.images?.[0]?.url}
              alt={track.name}
            />
            <div className="flex flex-col items-start justify-center mt-3">
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

              {!track.is_playable && (
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
}

export default ArtistTopTracks;
