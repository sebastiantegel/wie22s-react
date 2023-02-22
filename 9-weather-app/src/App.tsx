import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { IWeatherData } from "./models/IWeatherData";
import { getWeatherByCity } from "./services/weatherService";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<IWeatherData>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let weather = await getWeatherByCity(city);
    setWeather(weather);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} />
        <button type="submit">Sök</button>
      </form>
      <div>
        <p>Temp: {weather?.main.temp}</p>
        <p>
          {weather?.weather[0].description}
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
            alt=""
          />
        </p>
        <p>Vind: {weather?.wind.speed}</p>
      </div>
    </div>
  );
}

export default App;
