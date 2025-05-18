import { useEffect, useRef, useState } from "react";
import { usePlayer } from "@hooks/PlayerContext";

export const useYouTubePlayer = () => {
  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const { setPlayer, setDuration, setElapsed, isPlaying, setIsPlayerReady } = usePlayer();
  const [playerDuration, setPlayerDuration] = useState(0);

  const onReady = (event) => {
    const ytPlayer = event.target;
    playerRef.current = ytPlayer;
    setPlayer(ytPlayer);
    const dur = ytPlayer.getDuration();
    setPlayerDuration(dur);
    setDuration(dur);
    setIsPlayerReady(true);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);

    if (isPlaying && playerRef.current) {
      intervalRef.current = setInterval(() => {
        setElapsed(prev => {
          if (prev >= playerDuration) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
      playerRef.current.playVideo();
    } else if (playerRef.current) {
      playerRef.current.pauseVideo();
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, playerDuration]);

  return { onReady, playerRef };
};