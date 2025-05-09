import React from "react";
import Nav from "@shared/ui/Nav";
import { PlayerProvider } from "@hooks/PlayerContext";

function App({ children }) {
  return (
    <>
      <PlayerProvider>
        <main className="mb-30">{children}</main>
        <Nav />
      </PlayerProvider>
    </>
  );
}

export default App;
