import { createFileRoute } from "@tanstack/react-router";
import UserPlaylists from "@entities/user/ui/UserPlaylists";

export const Route = createFileRoute("/playlist")({
  component: Playlist
});

function Playlist() {
  return (
    <div className="p-2">
      <UserPlaylists />
    </div>
  );
}
