import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setPlayerVisibility, setIsPlaying, togglePlay } from "@features/play-track/model/playerSlice";
import { usePlayer } from "@hooks/PlayerContext";

export const useYouTubePlayer = (isPlaying, duration, updateElapsed) => { 
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const { setPlayer, setDuration, setElapsed } = usePlayer();
  const [playerDuration, setPlayerDuration] = useState(0);

  const onReady = (event) => {
    const ytPlayer = event.target;
    playerRef.current = ytPlayer;
    setPlayer(ytPlayer); 
    setPlayerDuration(ytPlayer.getDuration());
    setDuration(ytPlayer.getDuration());
    dispatch(setIsPlaying(false));
  };

  useEffect(() => {
    clearInterval(intervalRef.current);

    if (isPlaying && playerRef.current) {
      intervalRef.current = setInterval(() => {
        updateElapsed((prev) => { 
          if (prev >= playerDuration) {
            clearInterval(intervalRef.current);
            dispatch(setIsPlaying(false));
            return 0;
          }
          return prev + 1;
        });
      }, 1000);

      playerRef.current.playVideo();
    } else if (!isPlaying && playerRef.current) {
      playerRef.current.pauseVideo();
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, playerDuration, dispatch, updateElapsed]);

  const togglePlayHandler = () => {
    const player = playerRef.current;
    if (!player) {
      return;
    }

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }

    dispatch(togglePlay());
  };

  return { playerRef, onReady, togglePlayHandler, playerDuration };
};
