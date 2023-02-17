import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
