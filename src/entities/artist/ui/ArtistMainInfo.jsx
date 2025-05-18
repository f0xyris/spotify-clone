import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "@tanstack/react-router";
import BackButton from "@shared/ui/BackButton";

function ArtistMainInfo({ artistInfo }) {
  const { name, images, followers, searchQuery } = artistInfo || {};
  const router = useRouter();

  const handleBack = () => {
    router.navigate({
      to: "/search",
      replace: true,
      state: { searchQuery },
    });
  };

  return (
    <>
      <IoMdArrowBack
        className="m-4 w-8 h-8 cursor-pointer"
        onClick={handleBack}
      />
      <div className="flex flex-col items-center justify-center">
        <img
          width="200"
          height="200"
          className="rounded-full w-[200px] h-[200px] object-cover flex items-center justify-center shrink-0"
          src={images?.[0]?.url}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="text-2xl font-bold items-start">
          {name?.charAt(0)?.toUpperCase() + name?.slice(1)}
        </h1>
        <p> {new Intl.NumberFormat().format(followers?.total)} - фоловеров</p>
      </div>
    </>
  );
}

export default ArtistMainInfo;
