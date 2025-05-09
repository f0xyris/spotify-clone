import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useYouTubePlayer } from "@hooks/useYouTubePlayer";
import YouTube from "react-youtube";
import { usePlayer } from "@hooks/PlayerContext";

function PlaybackControls() {
  const { player, isPlaying, togglePlay, duration, elapsed } = usePlayer();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (player && elapsed >= 0) {
      setProgress((elapsed / duration) * 100);
    }
  }, [elapsed, player, duration]);

  return (
    <div className="flex justify-between items-center mt-4 pb-3">
      <MdFavoriteBorder className="text-3xl mr-3 object-contain flex-shrink-0 fill-white/50" />
      <button
        onClick={togglePlay}
        className="text-2xl mr-3 object-contain flex-shrink-0 bg-green-600 rounded-full w-15 h-15 flex items-center justify-center"
      >
        {isPlaying ? (
          <IoIosPause className="fill-black w-5 h-5" />
        ) : (
          <FaPlay className="fill-black w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default PlaybackControls;
