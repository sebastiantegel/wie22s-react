import React from "react";
import "./App.css";
import { MovieSearch } from "./components/MovieSearch";
import { MoviesOnLoad } from "./components/MoviesOnLoad";

function App() {
  return (
    <div className="App">
      <MovieSearch></MovieSearch>
      {/* <MoviesOnLoad></MoviesOnLoad> */}
    </div>
  );
}

export default App;
