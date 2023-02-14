import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

const BASE_URL = "http://omdbapi.com/?apikey=416ed51a&";

const apiCall = async <T>(urlEnding: string) => {
  let response = await axios.get<T>(`${BASE_URL}${urlEnding}`);
  return response;
};

export const getMovies = async (): Promise<IMovie[]> => {
  let response = await apiCall<IOmdbResponse>("s=star");
  return response.data.Search;
};

export const getMovieByTitle = async (title: string) => {
  let response = await apiCall<IOmdbResponse>(`s=${title}`);
  return response.data.Search;
};

export const getMovieById = async (id: string) => {
  let response = await apiCall<IMovie>(`i=${id}`);
  return response.data;
};
