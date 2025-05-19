import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setTrack } from "@features/play-track/model/trackSlice";
import { setPlayerVisibility } from "@features/play-track/model/playerSlice";
import { usePlayer } from "@hooks/PlayerContext";

function PlaybackControls({ track }) {
  const { isPlaying, togglePlay, setIsPlaying, isPlayerReady, playerRef } =
    usePlayer();
  const selectedTrack = useSelector((state) => state.track.selectedTrack);
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    if (!track) return;

    if (selectedTrack?.id === track.id) {
      if (playerRef.current) {
        if (isPlaying) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          playerRef.current.playVideo();
          playerRef.current.unMute();
          setIsPlaying(true);
        }
      }
    } else {
      dispatch(setTrack(track));
      dispatch(setPlayerVisibility(true));
      setIsPlaying(true);

      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.playVideo();
          playerRef.current.unMute();
        }
      }, 500);
    }
  };

  const isCurrentTrackPlaying = selectedTrack?.id === track?.id && isPlaying;

  return (
    <div className="flex justify-between items-center pb-3 md:max-w-50 md:flex-row-reverse">
      <MdFavoriteBorder className="text-3xl mr-3 object-contain flex-shrink-0 fill-white/50 cursor-pointer" />
      <button
        onClick={handlePlayPause}
        className="text-2xl mr-3 flex-shrink-0 bg-green-600 rounded-full w-15 h-15 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all duration-200"
      >
        {isCurrentTrackPlaying ? (
          <IoIosPause className="fill-black w-5 h-5" />
        ) : (
          <FaPlay className="fill-black w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default PlaybackControls;
