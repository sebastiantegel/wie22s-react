import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { IMovie } from "../models/IMovie";
import { Movie } from "./Movie";
import { Wrapper } from "./styled/Wrappers";

export const Movies = () => {
  const moviesFromContext = useContext(MovieContext);

  let movies = moviesFromContext.movies.map((movie: IMovie) => {
    return (
      <Movie
        movie={movie}
        key={movie.id}
        handleSelected={moviesFromContext.selectMovie}
      ></Movie>
    );
  });

  return <Wrapper>{movies}</Wrapper>;
};
