import React, { createContext, useContext, useState, useCallback } from "react";

const PlayerContext = createContext({
  player: null,
  isPlaying: false,
  duration: 0,
  elapsed: 0,
  setPlayer: (player) => {},
  togglePlay: () => {},
  setDuration: (duration) => {},
  setElapsed: (elapsed) => {},
});

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const togglePlay = useCallback(() => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying((prev) => !prev);
    }
  }, [player, isPlaying]);

  return (
    <PlayerContext.Provider
      value={{
        player,
        isPlaying,
        duration,
        elapsed,
        setPlayer,
        togglePlay,
        setDuration,
        setElapsed,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
