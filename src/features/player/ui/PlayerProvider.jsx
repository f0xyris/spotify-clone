import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { searchYouTube } from "@shared/api/youtubeclient";
import { MdFavoriteBorder } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { usePlayer } from "@hooks/PlayerContext";
import { useYouTubePlayer } from "@hooks/useYouTubePlayer";

const YouTube = React.lazy(() => import("react-youtube"));

const PlayerProvider = () => {
  const selectedTrack = useSelector((state) => state.track.selectedTrack);
  const isPlayerVisible = useSelector((state) => state.player.isPlayerVisible);
  const [videoIndex, setVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const {
    player,
    isPlaying,
    togglePlay,
    duration,
    elapsed,
    setElapsed,
    setDuration,
    setPlayer,
    setIsPlaying,
    currentVideoId,
    setCurrentVideoId,
    isPlayerReady,
    setIsPlayerReady,
  } = usePlayer();

  const trackName = selectedTrack?.name || "";
  const artistName = selectedTrack?.artists?.[0]?.name || "";
  const artistImage = selectedTrack?.album?.images?.[0]?.url || "";

  const { data: videoId } = useQuery({
    queryKey: ["youtubeSearch", trackName, artistName],
    queryFn: () => searchYouTube(`${trackName} ${artistName}`),
    enabled: !!selectedTrack?.id,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (videoId?.items?.length) {
      const newVideoId = videoId.items[videoIndex]?.id.videoId;
      if (newVideoId && newVideoId !== currentVideoId) {
        setCurrentVideoId(newVideoId);
        setIsPlayerReady(false);
        setElapsed(0);
      }
    }
  }, [videoIndex, videoId]);

  const handlePlayerError = () => {
    if (videoId?.items && videoIndex + 1 < videoId.items.length) {
      setVideoIndex(videoIndex + 1);
    } else {
      console.log("Нет доступных для встраивания видео");
    }
  };

  useEffect(() => {
    if (videoId && videoId !== currentVideoId) {
      setCurrentVideoId(videoId);
      setIsPlayerReady(false);
      setElapsed(0);
    }
  }, [videoId]);

  const { onReady } = useYouTubePlayer();

  useEffect(() => {
    if (player && elapsed >= 0 && duration > 0) {
      setProgress((elapsed / duration) * 100);
    }
  }, [elapsed, player, duration]);

  if (!selectedTrack?.id) return null;

  return (
    <div className="fixed bottom-20 left-2 right-2 p-2 rounded-md z-10 bg-cyan-800/80">
      <div className="relative w-full h-auto">
        <div className="flex flex-row justify-between items-center gap-4">
          <img
            src={artistImage}
            alt={artistName}
            className="w-10 h-10 rounded-md"
          />
          <div className="flex flex-col w-full">
            <h1 className="text-xl">{artistName}</h1>
            <p className="text-xs">{trackName}</p>
          </div>
          <div className="flex gap-8">
            <MdFavoriteBorder className="text-3xl fill-white/50 flex-shrink-0 cursor-pointer" />
            <button
              onClick={togglePlay}
              className="text-2xl z-21 flex-shrink-0 mr-2 cursor-pointer"
            >
              {isPlaying ? <IoIosPause /> : <FaPlay />}
            </button>
          </div>
        </div>
        <div className="h-1 w-full bg-white/30 mt-2 relative rounded">
          <span
            className="h-1 bg-white/80 absolute rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
        {currentVideoId && (
          <Suspense>
            <YouTube
              videoId={currentVideoId}
              onError={handlePlayerError}
              opts={{
                height: "0",
                width: "0",
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  controls: 0,
                  modestbranding: 1,
                  playsinline: 1,
                },
              }}
              onReady={(event) => {
                onReady(event);
              }}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default PlayerProvider;
