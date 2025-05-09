import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { Link } from "@tanstack/react-router";
import { MdOutlineClose } from "react-icons/md";

const CartItem = React.memo(function CartItem({
  data,
  onSelect,
  histored,
  onRemove,
  query,
}) {
  return (
    <ul className="space-y-2 mt-5">
      {data?.map((artist) => (
        <Link
          to={`/artist/${artist.id}`}
          state={{
            name: artist.name,
            image: artist.images?.[0]?.url ?? null,
            followers: artist.followers,
            searchQuery: query,
          }}
          key={artist.id}
          className="flex flex-col gap-2"
        >
          <li
            className="p-2 rounded shadow flex items-center gap-4 cursor-pointer"
            onClick={() => {
              onSelect(artist);
            }}
          >
            {artist.images && artist.images.length > 0 ? (
              <img
                src={artist.images?.[0]?.url}
                alt={artist.name}
                width="70"
                height="70"
                className="w-[70px] h-[70px] rounded-full mt-2 object-cover shrink-0"
              />
            ) : (
              <span className="w-15 h-15 rounded-full mt-2 bg-gray-700">
                <TbMoodCrazyHappy className="flex items-center justify-center text-6xl text-purple-600" />
              </span>
            )}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{artist.name}</p>
                  <VscVerifiedFilled className="fill-blue-400 w-5 h-5 shrink-0" />
                </div>
                <p className="font-bold text-xs text-gray-500">
                  {artist.type.charAt(0).toUpperCase() +
                    artist.type.slice(1).toLowerCase()}
                </p>
              </div>
              {histored && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onRemove?.(artist.id);
                  }}
                >
                  <MdOutlineClose
                    width="28"
                    height="28"
                    className="w-[28px] h-[28px] object-cover shrink-0 cursor-pointer 
                    hover:scale-110 transition-transform duration-200"
                  />
                </button>
              )}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
});

export default CartItem;
