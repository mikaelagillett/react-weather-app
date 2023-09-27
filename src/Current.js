import CurrentDropDown from "./CurrentDropDown";
import "./Current.css";

function Current(props) {
  return (
    <div className="current">
      <span className="description" id="description">
        Today's Forecast Conditions
      </span>
      <button className="current-location-icon">
        <i className="fa-regular fa-compass"></i>
      </button>
      <br />
      <span className="current-city" id="current-city">
        {props.data.city},
      </span>
      <br />
      <span className="current-country" id="current-country">
        {props.data.country}
      </span>
      <br />
      <span className="current-date" id="current-date">
        Monday, September 18th 10:02
      </span>
      <div className="current-weather">
        <i className="wi wi-cloudy" id="main-icon"></i>
        <span className="current-temp" id="current-temp">
          {Math.round(props.data.temperature.current)}°
        </span>
      </div>
      <CurrentDropDown
        feelsLike={Math.round(props.data.temperature.feels_like)}
        humidity={props.data.temperature.humidity}
        wind={Math.round(props.data.wind)}
        description={props.data.description}
      />
    </div>
  );
}

export default Current;
