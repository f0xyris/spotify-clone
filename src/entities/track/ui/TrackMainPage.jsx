import React, { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { getArtistTopTracks, getArtistAlbums } from "@shared/api/spotifyClient";
import { useQuery } from "@tanstack/react-query";
import ArtistTopTracks from "@entities/artist/ui/ArtistTopTracks";
import ArtistAlbums from "@entities/artist/ui/ArtistAlbums";
import PlaybackControls from "@features/player/ui/PlaybackControls";
import BackButton from "@shared/ui/BackButton";

function TrackMainPage() {
  const location = useLocation();
  const { obj } = location.state;
  const artistId = obj?.artists?.[0]?.id;
  const albumId = obj?.album?.id;

  console.log(obj);

  const {
    data: tracksData,
    isLoading: tracksIsLoading,
    isError: tracksIsError,
  } = useQuery({
    queryKey: ["tracks", artistId],
    queryFn: () => getArtistTopTracks(artistId),
  });

  const {
    data: albumbsData,
    isLoading: albumbsIsLoading,
    isError: albumbsIsError,
  } = useQuery({
    queryKey: ["albums", artistId],
    queryFn: () => getArtistAlbums(artistId),
  });

  (tracksIsLoading || albumbsIsLoading) && <p>Loading tracks...</p>;
  (tracksIsError || albumbsIsError) &&
    console.log("Error with loading artist top tracks");

  return (
    <div>
      <div className=" bg-gradient-to-b from-orange-500 to-black-900 p-4">
        <BackButton />
        <div className="flex flex-col items-center justify-center">
          <img
            width="200"
            height="200"
            className=" w-[200px] h-[200px] object-cover flex items-center justify-center shrink-0"
            src={
              obj.track?.album.images?.[0]?.url || obj?.album.images?.[0]?.url
            }
            alt=""
          />
        </div>
        <div className="flex flex-col pt-4 gap-2">
          <h1 className="text-2xl font-bold items-start">{obj.name}</h1>
          <div className="flex gap-3">
            {obj?.artists?.map((artist) => (
              <span key={artist.name}>{artist.name}</span>
            ))}
          </div>

          <div className="flex gap-2 text-white/60">
            <span>{obj?.album?.release_date.slice(0, 4)}</span> •
            <span>
              {obj?.album?.total_tracks === 1
                ? `${obj?.album?.total_tracks} трек`
                : `${obj?.album?.total_tracks} треков`}
            </span>{" "}
            •
            <span>
              {Math.floor(obj.duration_ms / 1000 / 60)}:
              {Math.floor((obj.duration_ms / 1000) % 60)
                .toString()
                .padStart(2, "0")}{" "}
            </span>
          </div>
        </div>
        <PlaybackControls />
      </div>
      <ArtistTopTracks artist={obj?.artists?.[0]?.name} tracks={tracksData} />
      <ArtistAlbums albums={albumbsData} />
    </div>
  );
}

export default TrackMainPage;
