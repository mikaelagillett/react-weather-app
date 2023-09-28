import Forecast from "./Forecast";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
function ForecastSection(props) {
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    setForecastData({
      ready: true,
      dataArray: response.data.daily,
      coordinates: response.data.coordinates,
    });
  }

  useEffect(() => {
    setForecastData({ ready: false });
  }, [props.city, props.unit]);

  if (forecastData.ready) {
    return (
      <div>
        <hr />
        {forecastData.dataArray.map(function (daily, index) {
          if (index < 4) {
            return (
              <span key={index}>
                <Forecast
                  day={index + 1}
                  forecastData={daily}
                  coordinates={forecastData.coordinates}
                  secondaryColor={props.secondaryColor}
                />
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "5332bf2a40c7e9tc684f12abo0f0ab54";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${props.unit}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

export default ForecastSection;
