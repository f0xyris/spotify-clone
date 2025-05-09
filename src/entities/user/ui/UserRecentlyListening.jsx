import React from "react";
import CartSlider from "@shared/ui/CartSlider";
import { useUserTopItems } from "@hooks/useUserTopItems";

function UserRecentlyListening() {
  const {
    data: recentlyPlayedData,
    isLoading: recentlyPlayedLoading,
    isError: recentlyPlayedError,
  } = useUserTopItems("recently");

  recentlyPlayedLoading && <div>Загрузка...</div>;
  recentlyPlayedError && <div>Ошибка загрузки</div>;

  return (
    <CartSlider
      header="Недавно слушал"
      item={recentlyPlayedData}
      hideItem={true}
    />
  );
}

export default UserRecentlyListening;
