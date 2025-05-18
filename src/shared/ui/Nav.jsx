import React from "react";
import { PiHouse } from "react-icons/pi";
import { BiSearchAlt } from "react-icons/bi";
import { SiMediapipe } from "react-icons/si";
import { AiFillSpotify } from "react-icons/ai";
import { Link } from "@tanstack/react-router";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between text-white bg-black fixed bottom-0 z-10 border-t border-gray-300 w-full">
      <Link to="/" className="group text-gray-600 [&.active]:text-white">
        <div className="flex flex-col items-center p-4 cursor-pointer">
          <PiHouse className="w-6 h-6" />
          <span className="text-[10px]">Главная</span>
        </div>
      </Link>
      <Link to="/search" className="group text-gray-600 [&.active]:text-white">
        <div className="flex flex-col items-center p-4 cursor-pointer">
          <BiSearchAlt className="w-6 h-6" />
          <span className="text-[10px]">Поиск</span>
        </div>
      </Link>
      <Link
        to="/playlist"
        className="group text-gray-600 [&.active]:text-white"
      >
        <div className="flex flex-col items-center p-4 cursor-pointer">
          <SiMediapipe className="w-6 h-6" />
          <span className="text-[10px]">Моя медиатека</span>
        </div>
      </Link>
      <Link
        to="/download"
        className="group text-gray-600 [&.active]:text-white"
      >
        <div className="flex flex-col items-center p-4 cursor-pointer">
          <AiFillSpotify className="w-6 h-6" />
          <span className="text-[10px]">Скачать приложение</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
