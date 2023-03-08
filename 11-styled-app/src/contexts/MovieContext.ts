import { createContext } from "react";
import { IMovie } from "../models/IMovie";

export interface IMovies {
  movies: IMovie[];
  selectMovie(id: number): void;
}

export const defaultContextValue: IMovies = {
  movies: [],
  selectMovie: () => {},
};

export const MovieContext = createContext(defaultContextValue);
