import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { getUserProfile } from "@entities/user/api/axiosUser";
import Flag from "react-world-flags";

function Header({ onToggleMenu }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setUserData(data);
      } catch (error) {
        console.log("Немогу получить данные", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className="flex items-center justify-between text-white p-4 mb-5">
      <div className="flex gap-4 items-center text-xl font-bold">
        <h1>Добро пожаловать, {userData?.display_name || "Гость"}</h1>
        {userData?.country && (
          <Flag code={userData.country} style={{ width: 30, height: 20 }} />
        )}
      </div>
      <IoSettingsOutline
        className="hover:scale-110 transition-transform h-7 w-7 cursor-pointer"
        onClick={onToggleMenu}
      />
    </header>
  );
}

export default Header;
