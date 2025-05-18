import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { getSpotifyAuthUrl } from "@shared/api/axiosClient";

const menuItems = {
  logMenu: ["Войти", "Зарегистрироваться"],
  mainMenu: ["Акаунт", "Профиль", "Выйти", "Premium"],
  secondaryMenu: ["Справка", "Скачать", "Конфиденциальность", "Условия"],
};

function Menu({ onCloseMenu }) {
  const [currentMenu, setCurrentMenu] = useState(menuItems.logMenu);

  const { logMenu, mainMenu, secondaryMenu } = menuItems;

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setCurrentMenu(menuItems.mainMenu);
    } else {
      setCurrentMenu(menuItems.logMenu);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setCurrentMenu(menuItems.logMenu);
  };

  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
    setCurrentMenu(menuItems.mainMenu);
  };

  return (
    <menu className="mx-auto w-full h-full min-h-screen flex flex-col text-white font-bold gap-6 absolute top-0 left-0 bg-black px-10 py-13">
      <MdOutlineClose
        className="absolute right-4 top-4 text-4xl hover:scale-110 transition-transform h-7 w-7 cursor-pointer"
        onClick={onCloseMenu}
      />
      <ul className="flex flex-col gap-6">
        {currentMenu.map((item, index) => (
          <li
            key={index}
            onClick={
              item === "Войти"
                ? handleLogin
                : item === "Выйти"
                  ? handleLogout
                  : undefined
            }
            className="text-2xl hover:-translate-x-3 transition-all duration-200 cursor-pointer "
          >
            {item}
          </li>
        ))}
      </ul>
      <hr className="w-5 my-5 border-1" />
      <ul className="flex space-x-4 flex-col gap-6">
        {secondaryMenu.map((item, index) => (
          <li
            key={index}
            className="hover:-translate-x-3 transition-transform duration-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </menu>
  );
}

export default Menu;
