import React, { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { Button, SaveButton } from "./components/styled/Button";
import {
  defaultContextValue,
  IMovies,
  MovieContext,
} from "./contexts/MovieContext";
import { IMovie } from "./models/IMovie";

function App() {
  const [clickableMovies, setClickableMovies] =
    useState<IMovies>(defaultContextValue);

  clickableMovies.selectMovie = (id: number) => {
    let movies = [...clickableMovies.movies];

    movies[movies.findIndex((m) => m.id === id)].selected =
      !movies[movies.findIndex((m) => m.id === id)].selected;

    setClickableMovies({ ...clickableMovies, movies: movies });
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
      );
      const movies: IMovie[] = await response.json();

      console.log(movies);

      setClickableMovies({ ...clickableMovies, movies: movies });
    };

    if (clickableMovies.movies.length === 0) {
      getMovies();
    }
  });

  console.log(clickableMovies.movies);

  return (
    <div className="App">
      <Button>Lorem</Button>
      <Button bgColor="red">ipsum</Button>
      <SaveButton>Spara</SaveButton>

      <MovieContext.Provider value={clickableMovies}>
        <Movies />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
