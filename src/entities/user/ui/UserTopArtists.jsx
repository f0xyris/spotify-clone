import React from "react";
import CartSlider from "@shared/ui/ItemSlider";
import { useUserTopItems } from "@hooks/useUserTopItems";

function UserTopArtists() {
  const {
    data: topArtistsData,
    isLoading: topArtistsLoading,
    isError: topArtistsError,
  } = useUserTopItems("artists");

  topArtistsLoading && <div>Загрузка...</div>;
  topArtistsError && <div>Ошибка загрузки</div>;

  return (
    <>
      <CartSlider
        header="Любимые исполнители"
        item={topArtistsData}
        hideItem={true}
      />
    </>
  );
}
export default UserTopArtists;
