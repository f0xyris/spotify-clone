import React from "react";
import Nav from "@shared/ui/Nav";
import PlayerProvider from "@features/player/ui/PlayerProvider";

function App({ children }) {
  return (
    <>
      <main className="mb-30">{children}</main>
      <PlayerProvider />
      <Nav />
    </>
  );
}

export default App;
