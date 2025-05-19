import React from "react";
import { MdOutlineExplicit } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "@tanstack/react-router";

const PlaylistTracks = ({ tracks }) => {
  if (!tracks || tracks.length === 0) {
    return <div className="p-4 text-center text-gray-500">Треков нет</div>;
  }

  return (
    <div
      className={`flex flex-col gap-4 mt-7 ${tracks[0]?.album ? "px-4" : "p-0"}`}
    >
      {tracks.map((trackWrapper, index) => {
        // Если трек вложен (например, плейлист треки), берем track.track, иначе сам объект
        const track = trackWrapper.track || trackWrapper;

        // Безопасное получение id и type
        const trackId = track?.id || `unknown-${index}`;
        const trackType = track?.type || "track";

        // Проверяем есть ли изображение
        const imageUrl = track?.album?.images?.[0]?.url;

        // Проверяем наличие артистов
        const artists = track?.artists || [];

        return (
          <Link key={trackId} to={`/${trackType}/${trackId}`}>
            <div
              style={trackWrapper.is_playable === false ? { opacity: 0.5 } : {}}
              className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-4 rounded-md overflow-hidden"
            >
              {/* Если нет album — показываем номер трека */}
              {!track.album && <span className="text-lg w-6">{index + 1}</span>}

              {/* Изображение трека */}
              {imageUrl && (
                <img
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-cover rounded"
                  src={imageUrl}
                  alt={track.name}
                />
              )}

              <div className="flex items-start justify-baseline w-full flex-col md:flex-row">
                <div className="flex flex-col flex-1">
                  <div className="font-bold text-white truncate">
                    {track.name}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 text-sm text-gray-300">
                    {artists.map((artist, i) => (
                      <span key={artist.id || i}>
                        {i > 0 && ", "}
                        {artist.name}
                      </span>
                    ))}
                    {track.explicit && (
                      <MdOutlineExplicit className="w-5 h-5 inline-block" />
                    )}
                    {track.popularity > 85 && (
                      <AiFillFire className="fill-amber-700 inline-block" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end text-sm text-gray-400">
                  <span>
                    {Math.floor(track.duration_ms / 1000 / 60)}:
                    {Math.floor((track.duration_ms / 1000) % 60)
                      .toString()
                      .padStart(2, "0")}
                  </span>

                  {trackWrapper.is_playable === false && (
                    <span className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                      <CgUnavailable /> Недоступно в вашем регионе
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PlaylistTracks;
