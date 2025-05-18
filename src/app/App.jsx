import React from "react";
import Nav from "@shared/ui/Nav";
import PlayerProvider from "@features/player/ui/PlayerProvider";

function App(props) {
  return (
    <div className="mx-auto">
      <main className="mb-30">{props.children}</main>
      <Nav />
      <PlayerProvider />
    </div>
  );
}

export default App;
