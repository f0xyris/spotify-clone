import React from "react";
import CartSlider from "@shared/ui/ItemSlider";

function ArtistAlbums({ albums, artistInfo }) {
  return (
    <>
      <CartSlider
        header={`${artistInfo?.name || albums?.[0]?.artists?.[0]?.name}: популярные альбомы`}
        item={albums}
        hideItem={false}
      />
    </>
  );
}

export default ArtistAlbums;
