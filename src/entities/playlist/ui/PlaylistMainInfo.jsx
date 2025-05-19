import React, { useEffect, useState } from "react";
import BackButton from "../../../shared/ui/BackButton";
import PlaybackControls from "@features/player/ui/PlaybackControls";

const PlaylistMainInfo = ({ obj }) => {
  const [tracksDuration, setTracksDuration] = useState(0);

  useEffect(() => {
    if (!obj) {
      setTracksDuration(0);
      return;
    }

    // Получаем массив треков в зависимости от типа объекта
    let tracksArray = [];

    // Если это альбом — треки в obj.tracks.items (каждый элемент — трек)
    if (obj.type === "album" && Array.isArray(obj.tracks?.items)) {
      tracksArray = obj.tracks.items;
    }
    // Если это плейлист — треки в obj.tracks.items, но вложенный объект в поле track
    else if (obj.type === "playlist" && Array.isArray(obj.tracks?.items)) {
      tracksArray = obj.tracks.items.map((item) => item.track).filter(Boolean);
    }
    // Если пришёл просто массив треков (на всякий случай)
    else if (Array.isArray(obj)) {
      tracksArray = obj;
    }

    // Считаем сумму длительности треков (duration_ms)
    const totalDuration = tracksArray.reduce((sum, track) => {
      if (track?.duration_ms) {
        return sum + track.duration_ms;
      }
      return sum;
    }, 0);

    setTracksDuration(totalDuration);
  }, [obj]);

  // Получаем изображение: у альбома оно в obj.images, у трека или плейлиста - в obj.album.images или obj.images
  const coverImage = obj?.images?.[0]?.url || obj?.album?.images?.[0]?.url;

  // Для даты и треков пробуем универсально достать значения
  const releaseYear =
    obj?.album?.release_date?.slice(0, 4) || obj?.release_date?.slice(0, 4);

  const totalTracks = obj?.album?.total_tracks || obj?.total_tracks || 0;

  return (
    <div className="bg-gradient-to-b from-orange-500 to-black-900 p-4 flex flex-col gap-6">
      <BackButton />
      <div className="flex flex-col md:flex-row md:gap-4 md:items-end gap-5 flex-shrink-0">
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <img
            width="200"
            height="200"
            className="w-[200px] h-[200px] object-cover flex items-center justify-center md:rounded-md"
            src={coverImage}
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
                <span key={artist?.id || index}>
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
                {releaseYear} •
              </div>
              <span>
                {totalTracks === 1
                  ? `${totalTracks} трек`
                  : `${totalTracks} треков`}
              </span>{" "}
              •
              <span>
                {Math.floor(tracksDuration / 1000 / 60)}:
                {Math.floor((tracksDuration / 1000) % 60)
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
