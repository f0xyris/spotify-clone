import React from "react";
import Nav from "@shared/ui/Nav";
import { PlayerProvider } from "@hooks/PlayerContext";

function App(props) {
  return (
    <>
      <PlayerProvider>
        <main className="mb-30">{props.children}</main>
        <Nav />
      </PlayerProvider>
    </>
  );
}

export default App;
