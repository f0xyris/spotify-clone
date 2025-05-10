import React from "react";
import {
  getUserTopItems,
  getUserRecentlyPLayed,
} from "@entities/user/api/spotifyUser";
import { useQuery } from "@tanstack/react-query";

export const useUserTopItems = (type) => {
  const queryFn =
    type === "recently" ? getUserRecentlyPLayed : () => getUserTopItems(type);

  return useQuery({
    queryKey: ["topItems", type],
    queryFn,
  });
};
