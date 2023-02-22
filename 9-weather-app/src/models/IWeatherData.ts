import { ITemperature } from "./ITemperature";
import { IWeather } from "./IWeather";
import { IWind } from "./IWind";

export interface IWeatherData {
  weather: IWeather[];
  main: ITemperature;
  wind: IWind;
  name: string;
}
