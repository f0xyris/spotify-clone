import React, { createContext, useContext, useState, useCallback } from "react";

const PlayerContext = createContext({
  player: null,
  isPlaying: false,
  duration: 0,
  elapsed: 0,
  currentVideoId: null,
  isPlayerReady: false,
  setPlayer: () => {},
  togglePlay: () => {},
  setDuration: () => {},
  setElapsed: () => {},
  setIsPlaying: () => {},
  setCurrentVideoId: () => {},
  setIsPlayerReady: () => {},
});

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const togglePlay = useCallback(
    (forcePlay) => {
      if (!player) return;

      if (forcePlay === true) {
        player.playVideo();
        setIsPlaying(true);
      } else if (forcePlay === false) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        if (isPlaying) {
          player.pauseVideo();
          setIsPlaying(false);
        } else {
          player.playVideo();
          setIsPlaying(true);
        }
      }
    },
    [player, isPlaying]
  );

  return (
    <PlayerContext.Provider
      value={{
        player,
        isPlaying,
        duration,
        elapsed,
        currentVideoId,
        isPlayerReady,
        setPlayer,
        togglePlay,
        setDuration,
        setElapsed,
        setIsPlaying,
        setCurrentVideoId,
        setIsPlayerReady,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
