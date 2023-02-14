import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";

export const MoviesOnLoad = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getData = async () => {
      let moviesFromOmdb: IMovie[] = await getMovies();
      setMovies(moviesFromOmdb);
    };

    if (movies.length > 0) return;

    getData();
  });

  let moviesHtml = movies.map((movie) => {
    return (
      <div className="movie" key={movie.imdbID}>
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    );
  });

  return <>{moviesHtml}</>;
};
