import { useState } from "react";
import axios from "axios";

import Loading from "./Loading";
import Current from "./Current";
import ForecastSection from "./ForecastSection";

function Weather() {
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState("Toronto");
  const [cActiveStatus, setCStatus] = useState("active");
  const [fActiveStatus, setFStatus] = useState("inactive");
  const [weatherData, setWeatherData] = useState({ ready: false });
  function search(event) {
    event.preventDefault();
    callApi([city, unit]);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature,
      country: response.data.country,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      coordinates: response.data.coordinates,
    });
  }
  function callApi(data) {
    let apiKey = "5332bf2a40c7e9tc684f12abo0f0ab54";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${data[0]}&key=${apiKey}&units=${data[1]}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function changeCelcius(event) {
    event.preventDefault();
    setUnit("metric");
    setCStatus("active");
    setFStatus("inactive");
    callApi([city, "metric"]);
  }
  function changeFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    setFStatus("active");
    setCStatus("inactive");
    callApi([city, "imperial"]);
  }
  if (weatherData.ready) {
    return (
      <div>
        <header>
          <a href="/" className={cActiveStatus} onClick={changeCelcius}>
            °C
          </a>{" "}
          |
          <a href="/" className={fActiveStatus} onClick={changeFarenheit}>
            °F
          </a>
        </header>
        <div className="grid grid-2-columns">
          <div className="">
            <form className="search-form" onSubmit={search}>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </button>
              <input
                type="text"
                className="city-search-bar"
                onChange={handleCityChange}
              />
            </form>

            <Current data={weatherData} />
          </div>
          <div className="forecast-section">
            <ForecastSection city={weatherData.city} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    callApi([city, unit]);
    <Loading />;
  }
}

export default Weather;
