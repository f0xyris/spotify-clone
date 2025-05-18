import React from "react";
import { setTrack } from "@features/play-track/model/trackSlice";
import { Link } from "@tanstack/react-router";

function ItemSlider({ header, item, hideItem }) {
  const getImageUrl = (item) => {
    const track = item?.track || item;
    return track?.album?.images?.[0]?.url || track?.images?.[0]?.url || null;
  };

  const getPath = (item) => {
    return item?.type && item?.id
      ? `/${item.type}/${item.id}`
      : `/${item?.track?.type}/${item?.track?.id}`;
  };

  return (
    <>
      <h1 className="text-xl font-bold items-start pl-4 mb-5">{header}</h1>
      <div
        className="flex flex-row items-baseline justify-baseline 
          overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-4 "
      >
        {item?.map((album) => (
          <Link key={album?.id || album?.track?.id} to={getPath(album)}>
            <div
              className="flex flex-col items-start justify-baseline flex-shrink-0
                  snap-center mb-10 h-auto cursor-pointer"
            >
              <img
                src={getImageUrl(album)}
                alt={album.name}
                className="object-cover flex-shrink-0 rounded-lg max-w-[170px] max-h-[170px]"
              />
              <div className="flex flex-col items-start justify-center mt-3">
                <h2 className="text-sm/tight font-bold max-w-[170px]">
                  {album.name || album.track.name}
                </h2>
                <p>
                  {!hideItem
                    ? `${album?.type} • ${album?.release_date?.slice(0, 4)}`
                    : ""}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ItemSlider;
