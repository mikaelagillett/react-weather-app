import "./Forecast.css";
import { useState } from "react";
import Date from "./Date";
import GetIcon from "./GetIcon";

function Forecast(props) {
  const [forecastExpand, setForecastExpand] = useState("d-none");
  const [breakLine, setBreakLine] = useState("d-block");
  function expandForecast() {
    if (forecastExpand === "d-none") {
      setForecastExpand("d-block");
      setBreakLine("d-none");
    } else {
      setForecastExpand("d-none");
      setBreakLine("d-block");
    }
  }
  return (
    <div className="forecast" onClick={expandForecast}>
      <div className="row">
        <div className="col-5">
          <span className="forecast-day">
            <Date forecastDay={props.day} coordinates={props.coordinates} />
            <br />
            <span className="forecast-date">
              <span className={props.secondaryColor}>
                <Date
                  forecastDate={props.day}
                  coordinates={props.coordinates}
                />
              </span>
            </span>
          </span>
        </div>
        <div className="col-4"></div>
        <div className="forecast-weather col-3">
          <span className="forecast-temp">
            {Math.round(props.forecastData.temperature.day)}°
          </span>

          <GetIcon weather={props.forecastData.condition.description} />
        </div>
        <hr className={breakLine} />
      </div>
      <div className={forecastExpand}>
        <span className="weather-description">
          {props.forecastData.condition.description}
        </span>
        <ul className="descriptors">
          <li className="max">
            max:{" "}
            <span>{Math.round(props.forecastData.temperature.maximum)}</span>
          </li>
          <li className="min">
            min:{" "}
            <span>{Math.round(props.forecastData.temperature.minimum)}</span>
          </li>
          <li className="humidity">
            humidity: <span>{props.forecastData.temperature.humidity}</span>
          </li>
          <li className="wind-speed">
            wind speed: <span>{Math.round(props.forecastData.wind.speed)}</span>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Forecast;
