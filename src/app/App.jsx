import React from "react";
import Nav from "@shared/ui/Nav";
import PlayerProvider from "@features/player/ui/PlayerProvider";
import { useSelector } from "react-redux";

function App(props) {
  const isPlayerVisible = useSelector((state) => state.player.isPlayerVisible);
  return (
    <div className="mx-auto">
      <main className={`${isPlayerVisible ? "mb-45" : "mb-20"}`}>
        {props.children}
      </main>
      <Nav />
      <PlayerProvider />
    </div>
  );
}

export default App;
