import { useEffect, useRef, useState } from "react";
import { usePlayer } from "@hooks/PlayerContext";

export const useYouTubePlayer = () => {
  const intervalRef = useRef(null);
  const { setPlayer, setDuration, setElapsed, isPlaying, setIsPlayerReady, playerRef } = usePlayer();
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
    } else {

    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, playerDuration]);

  return { onReady, playerRef };
};