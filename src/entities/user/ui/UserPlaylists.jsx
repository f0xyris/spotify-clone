import React from "react";
import { getUserPlaylists } from "@entities/user/api/spotifyUser";
import { useQuery } from "@tanstack/react-query";

function UserPlaylists() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["playlists"],
    queryFn: () => getUserPlaylists(),
  });

  isLoading && <div>Loading...</div>;
  isError && console.log("Error on userPlaylist");

  console.log(data);

  return (
    <div className="gap-4 flex flex-col p-4">
      <h3 className="text-2xl pb-5">Моя медиатека</h3>
      {data?.map((playlist) => (
        <div
          className="flex flex-row gap-4 items-center cursor-pointer"
          key={playlist.name}
        >
          <img
            className="w-20 h-20"
            src={playlist.images?.[0]?.url}
            alt={playlist.name}
          />
          <div className="flex flex-col">
            <h3>{playlist.name}</h3>
            <span>{`${playlist.type} • ${playlist.owner.display_name}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserPlaylists;
