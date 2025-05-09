import React from "react";
import CartSlider from "@shared/ui/CartSlider";

function ArtistAlbums({ albums }) {
  return (
    <>
      <CartSlider header="Альбомы" item={albums} hideItem={false} />
    </>
  );
}

export default ArtistAlbums;
