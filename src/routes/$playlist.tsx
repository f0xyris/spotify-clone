import React from 'react'
import { createFileRoute, useParams } from "@tanstack/react-router";
import UserPlaylists from "@entities/user/ui/UserPlaylists";

function Playlist() {

  return (
    <div className="p-2">
      <UserPlaylists/>
    </div>
  );
}

export const Route = createFileRoute('/$playlist')({
  component: Playlist,
});

 export default Playlist