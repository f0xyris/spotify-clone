import React from "react";
import UserTopArtists from "@entities/user/ui/UserTopArtists";
import UserTopTracks from "@entities/user/ui/UserTopTracks";
import UserRecentlyListening from "@entities/user/ui/UserRecentlyListening";

function UserMainPage() {
  const accessToken = localStorage.getItem("access_token");
  return (
    <>
      {accessToken ? (
        <>
          <UserTopArtists />
          <UserTopTracks />
          <UserRecentlyListening />
        </>
      ) : (
        <h1 className="pl-4">Пожалуйста войдите в свой акаунт</h1>
      )}
    </>
  );
}

export default UserMainPage;
