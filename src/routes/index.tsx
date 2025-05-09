import React, { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import Header from "@shared/ui/Header";
import Menu from "@shared/ui/Menu";
import UserMainPage from "@entities/user/ui/UserMainPage";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
           <Header onToggleMenu={toggleMenu} />
            {isOpen && <Menu onCloseMenu={toggleMenu} />}
            <UserMainPage />
    </>
  );
}
