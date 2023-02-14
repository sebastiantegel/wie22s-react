import { ChangeEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
import { getMovieByTitle } from "../services/movieService";

export const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const searchMovie = async () => {
    let movies = await getMovieByTitle(searchText);
    setMovies(movies);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  let moviesHtml = movies.map((movie) => {
    return (
      <div className="movie" key={movie.imdbID}>
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    );
  });

  return (
    <>
      <div>
        <input type="text" value={searchText} onChange={handleChange} />
        <button onClick={searchMovie}>Sök</button>
      </div>
      <div className="result">{moviesHtml}</div>
    </>
  );
};
