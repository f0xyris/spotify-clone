import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { searchYouTube } from "@shared/api/youtubeclient";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useYouTubePlayer } from "@hooks/useYouTubePlayer";
import { usePlayer } from "@hooks/PlayerContext";

const YouTube = React.lazy(() => import("react-youtube"));

const PlayerProvider = () => {
  const selectedTrack = useSelector((state) => state.track.selectedTrack);
  const {
    player,
    isPlaying,
    togglePlay,
    duration,
    elapsed,
    setElapsed,
    setDuration,
  } = usePlayer();

  const [progress, setProgress] = useState(0);
  const { playerRef, onReady, playerDuration } = useYouTubePlayer(
    isPlaying,
    duration,
    setElapsed
  );

  const trackName = selectedTrack?.name || "";
  const artistName = selectedTrack?.artists?.[0]?.name || "";
  const artistImage = selectedTrack?.album?.images?.[0]?.url || "";

  useEffect(() => {
    console.log("Track name or artist name changed:", trackName, artistName);
  }, [trackName, artistName]);

  useEffect(() => {
    if (player && elapsed >= 0) {
      setProgress((elapsed / duration) * 100);
    }
  }, [elapsed, player, duration]);

  useEffect(() => {
    if (playerDuration !== duration) {
      setDuration(playerDuration);
    }
  }, [playerDuration, duration, setDuration]);

  const {
    data: videoId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["youtubeSearch", trackName, artistName],
    queryFn: () => searchYouTube(`${trackName} ${artistName}`),
    enabled: !!selectedTrack?.id && !!trackName && !!artistName,
    staleTime: 1000 * 60 * 5,
  });

  if (!selectedTrack?.id || !isPlaying) return null;

  return (
    <div className="fixed bottom-20 bg-cyan-950/60 left-1 right-1 p-2 rounded-md">
      <div className="flex flex-row max-h-10 justify-between items-center gap-4">
        <img
          src={artistImage}
          alt={artistName}
          className="object-contain flex-shrink-0 w-10 h-10 rounded-md"
        />
        <div className="flex flex-col items-start w-full">
          <h1 className="text-xl">{artistName}</h1>
          <p className="text-xs">{trackName}</p>
        </div>
        <MdFavoriteBorder className="text-3xl mr-3 object-contain flex-shrink-0 fill-white/50" />
        <button
          className="text-2xl mr-3 object-contain flex-shrink-0"
          onClick={togglePlay}
        >
          {isPlaying ? <IoIosPause /> : <FaPlay />}
        </button>
      </div>
      <div className="h-1 w-full bg-white/30 mt-2 relative rounded">
        <span
          className="h-1 bg-white/80 absolute rounded"
          style={{ width: `${progress}%` }}
        ></span>
      </div>
      {isLoading && console.log("Загрузка")}
      {isError && console.log("Ошибка")}
      {videoId && (
        <Suspense fallback={<div>Загрузка плеера...</div>}>
          <YouTube
            videoId={videoId}
            opts={{
              height: "0",
              width: "0",
              playerVars: {
                controls: 0,
                modestbranding: 1,
                rel: 0,
              },
            }}
            onReady={onReady}
          />
        </Suspense>
      )}
    </div>
  );
};

export default PlayerProvider;
