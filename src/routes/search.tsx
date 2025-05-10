import React from 'react'
import { createFileRoute } from "@tanstack/react-router";
import ArtistSearch from "@entities/artist/ui/ArtistSearch";

export const Route = createFileRoute("/search")({
  component: Search
});

function Search() {
  return (
    <div className="p-2">
      <ArtistSearch />
    </div>
  );
}