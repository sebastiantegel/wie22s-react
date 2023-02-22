import axios from "axios";
import env from "react-dotenv";

import { IWeatherData } from "../models/IWeatherData";

const API_KEY = env.API_KEY;

export const getWeatherByCity = async (city: string) => {
  let response = await axios.get<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=sv&q=${city}&appid=${API_KEY}`
  );

  return response.data;
};
