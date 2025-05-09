import React from "react";
import CartSlider from "@shared/ui/CartSlider";
import { useUserTopItems } from "@hooks/useUserTopItems";

function UserTopTracks() {
  const {
    data: topTracksData,
    isLoading: topTracksLoading,
    isError: topTracksError,
  } = useUserTopItems("tracks");

  topTracksLoading && <div>Загрузка...</div>;
  topTracksError && <div>Ошибка загрузки</div>;

  return (
    <CartSlider header="Любимые треки" item={topTracksData} hideItem={true} />
  );
}

export default UserTopTracks;
