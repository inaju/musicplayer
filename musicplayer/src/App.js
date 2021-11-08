import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Account from "./Account";
import Play from "./Play";
import Billboard from "./Billboard";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Header />
        <Billboard />
        <div className="lower_div">
          <Playlist />
          <Play />
        </div>
      </div>
    </div>
  );
}

export default App;
